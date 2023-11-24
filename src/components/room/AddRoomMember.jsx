import { useState } from "react";
import { useParams } from "react-router";

import { useMessagesContext } from "@/store/contexts/messagesContext";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Loader2 } from "lucide-react";

const initialUserState = {
  id: "",
  uid: "",
};

export default function AddRoomMember() {
  const { roomId } = useParams();
  const [selectedUser, setSelectedUser] = useState(initialUserState);
  const [isLoading, setIsLoading] = useState(null);
  const { addRoomMemberAction } = useMessagesContext();

  const friendsList = JSON.parse(localStorage.getItem("friendsList")) || null;

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    await addRoomMemberAction({
      id: roomId,
      member_id: selectedUser.id,
    });

    setIsLoading(false);
  }

  function handleInputChange(e) {
    setSelectedUser((prevState) => ({
      ...prevState,
      uid: e,
    }));
  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-2">Add Member</Button>
        </DialogTrigger>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add a new member</DialogTitle>
            </DialogHeader>
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
                  {friendsList.map((user) => (
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
            <DialogFooter>
              <Button
                className="w-full"
                type="submit"
                size="sm"
                disabled={isLoading}
                onClick={handleSubmit}
              >
                {isLoading ? (
                  <Loader2 className="w-full animate-spin" />
                ) : (
                  "Add Member"
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
}
