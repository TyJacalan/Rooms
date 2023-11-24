import { useState } from "react";

import { useComponentContext } from "@/store/contexts/componentContext";
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
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, Plus, X } from "lucide-react";

export default function CreateRoomForm() {
  const { isCreateRoomOpen, toggleCreateRoom } = useComponentContext();
  const [isLoading, setIsLoading] = useState(false);
  const [roomName, setRoomName] = useState("");
  const [usersList, setUsersList] = useState([]);
  const [userName, setUserName] = useState("");
  const { createRoomAction, getRoomsAction } = useMessagesContext();
  const { toast } = useToast();

  function handleUserInput(e) {
    setUserName(e);
  }

  function handleAddUser(userToAdd) {
    const isUnique =
      usersList.findIndex((user) => user.uid === userToAdd.uid) === -1;

    if (userToAdd && isUnique) {
      setUsersList([...usersList, { id: userToAdd.id, uid: userToAdd.uid }]);
      setUserName("");
    } else {
      toast({
        description: "User already added.",
        duration: 5000,
      });
    }
  }

  function handleRemoveUser(index) {
    const updatedList = usersList.filter((_, i) => i !== index);
    setUsersList(updatedList);
  }

  async function handleSubmit() {
    setIsLoading(true);
    const usersIds = usersList.map((user) => user.id);

    await createRoomAction({
      name: roomName,
      user_ids: usersIds,
    });

    setUsersList([]);
    setRoomName("");

    await getRoomsAction();

    setIsLoading(false);
  }

  const friendsList = JSON.parse(localStorage.getItem("friendsList")) || null;

  return (
    <Dialog open={isCreateRoomOpen} onOpenChange={toggleCreateRoom}>
      <DialogTrigger
        asChild
        className="w-full flex flex-row items-center justify-around text-center sm:block"
      >
        <div className="w-full">
          <Button variant="outline" className="w-full hidden sm:block">
            New Room
          </Button>
          <Button size="icon" variant="outline" className="sm:hidden">
            <Plus size={14} />
          </Button>
        </div>
      </DialogTrigger>
      <form onSubmit={handleSubmit}>
        <DialogContent className="max-w-[80%] min-w-max sm:max-w-[425px] overflow-hidden text-zinc-900 dark:text-zinc-50">
          <DialogHeader>
            <DialogTitle>Create a new room</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-start gap-2">
              <Label htmlFor="roomName" className="text-right">
                Room Name
              </Label>
              <Input
                id="roomName"
                className="col-span-3"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
              />
            </div>
            <div>
              <div>Users</div>
              <div className="h-fit max-w-[16rem] xs:max-w-[20rem] sm:max-w-sm flex items-center justify-start flex-wrap gap-1">
                {usersList &&
                  usersList.map((user, index) => (
                    <div
                      key={index}
                      className="h-8 w-auto flex flex-row items-center justify-center gap-1 overflow-clip bg-zinc-200 dark:bg-zinc-700 pl-2 pr-1 rounded-md text-sm whitespace-nowrap"
                    >
                      <div className="max-w-[6rem] overflow-hidden whitespace-nowrap">
                        {user.uid}
                      </div>
                      <Button
                        type="button"
                        onClick={() => handleRemoveUser(index)}
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                      >
                        <X size={12} strokeWidth={1} />
                      </Button>
                    </div>
                  ))}
              </div>
              <Command>
                <CommandInput
                  placeholder="Add User..."
                  value={userName}
                  onValueChange={handleUserInput}
                />
                <CommandList>
                  <CommandEmpty>No users found.</CommandEmpty>
                  <CommandGroup>
                    {friendsList &&
                      friendsList.map((user) => (
                        <CommandItem
                          key={user.id}
                          onSelect={() => handleAddUser(user)}
                        >
                          {user.uid}
                        </CommandItem>
                      ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>
          </div>

          <DialogFooter>
            <Button type="submit" onClick={handleSubmit} disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="w-full animate-spin" />
              ) : (
                "Create"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
