import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useMessagesContext } from "@/store/contexts/messagesContext";
import { useComponentContext } from "@/store/contexts/componentContext";
import useUsersData from "@/hooks/useUsersdata";
import { getTempNameByEmail } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Loader2, Plus } from "lucide-react";

const initialUserState = {
  id: "",
  uid: "",
};

export default function CreateChat() {
  const { addUserAction } = useMessagesContext();
  const { isCreateChatOpen, toggleCreateChat } = useComponentContext();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(initialUserState);
  const navigate = useNavigate();

  const usersData = useUsersData();

  async function handleSubmit(e, userData) {
    e.preventDefault();
    setIsLoading(true);

    addUserAction(userData);

    navigate(
      `/User/${userData.id}/${
        userData.name ? userData.name : getTempNameByEmail(userData.uid)
      }`
    );

    setIsLoading(false);
  }

  function handleInputChange(e) {
    setSelectedUser((prevState) => ({
      ...prevState,
      uid: e,
    }));
  }

  return (
    <Popover open={isCreateChatOpen} onOpenChange={toggleCreateChat}>
      <PopoverTrigger
        asChild
        className="w-full flex flex-row items-center justify-around"
      >
        <div className="w-full">
          <Button variant="outline" className="w-full hidden sm:block">
            New Chat
          </Button>
          <Button size="icon" variant="outline" className="sm:hidden">
            <Plus size={14} />
          </Button>
        </div>
      </PopoverTrigger>

      <PopoverContent align="start" sideOffset="2">
        <form
          className="flex flex-col gap-2"
          onSubmit={(e) => handleSubmit(e, selectedUser)}
        >
          <Command>
            <CommandSeparator />
            <CommandInput
              name="selectUserInput"
              autoComplete={false}
              placeholder="Select a user..."
              value={selectedUser.uid}
              onValueChange={handleInputChange}
            />
            <CommandList>
              <CommandEmpty>No users found.</CommandEmpty>
              <CommandGroup>
                {usersData.map((user) => (
                  <CommandItem
                    key={user.id}
                    onSelect={() => setSelectedUser(user)}
                  >
                    {user.uid}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
            <CommandSeparator />
          </Command>
          <Button type="submit" size="sm" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="w-full animate-spin" />
            ) : (
              "Start Chat"
            )}
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
