import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useMessagesContext } from "@/store/contexts/messagesContext";
import { getFriendsList, getTempNameByEmail } from "../../lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(initialUserState);
  const { usersList, setFriendsList } = useMessagesContext();
  const navigate = useNavigate();

  async function handleSubmit(e, userData) {
    e.preventDefault();
    setIsLoading(true);

    const newFriend = { id: userData.id, uid: userData.uid };

    const existingFriendsList =
      JSON.parse(localStorage.getItem("friendsList")) || [];

    const updatedFriendsList = [...existingFriendsList, newFriend];

    localStorage.setItem("friendsList", JSON.stringify(updatedFriendsList));
    setFriendsList(updatedFriendsList);

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
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild className="w-full text-center hidden sm:block">
        <span>New Chat</span>
      </PopoverTrigger>
      <PopoverTrigger asChild className="sm:hidden">
        <Plus size={14} />
      </PopoverTrigger>
      <PopoverContent className="p-2" side="right" align="start">
        <form
          className="flex flex-col gap-2"
          onSubmit={(e) => handleSubmit(e, selectedUser)}
        >
          <Command>
            <CommandSeparator />
            <CommandInput
              placeholder="Select a user..."
              value={selectedUser.uid}
              onValueChange={handleInputChange}
            />
            <CommandList>
              <CommandEmpty>No users found.</CommandEmpty>
              <CommandGroup>
                {usersList.map((user) => (
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
          <Button type="submit" size="sm">
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
