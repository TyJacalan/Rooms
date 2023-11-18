import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useMessagesContext } from "@/store/contexts/messagesContext";

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

export default function CreateChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const { usersList } = useMessagesContext();
  const navigate = useNavigate();

  async function handleSubmit(e, uid) {
    e.preventDefault();
    setIsLoading(true);

    navigate(`/User/${uid}`);

    setIsLoading(false);
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild className="w-full text-center hidden sm:block">
        <span>New Chat</span>
      </PopoverTrigger>
      <PopoverContent className="p-2" side="right" align="start">
        <form
          className="flex flex-col gap-2"
          onSubmit={(e) => handleSubmit(e, selectedUser)}
        >
          <Input
            id="user"
            placeholder={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
          ></Input>
          <Command>
            <CommandSeparator />
            <CommandInput placeholder="Select a user..." />
            <CommandList>
              <CommandEmpty>No users found.</CommandEmpty>
              <CommandGroup>
                {usersList.map((user) => (
                  <CommandItem
                    key={user.id}
                    onSelect={() => setSelectedUser(user.id)}
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
