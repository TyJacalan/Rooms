import { useState } from "react";
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
import { Loader2, Plus, X } from "lucide-react";

export default function CreateRoomForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [roomName, setRoomName] = useState("");
  const [usersList, setUsersList] = useState([]);
  const [userName, setUserName] = useState("");
  const { createRoomAction, getRoomsAction } = useMessagesContext();

  function handleUserInput(e) {
    setUserName(e);
  }

  function handleAddUser(userToAdd) {
    const isUnique =
      usersList.findIndex((user) => user.uid === userToAdd.uid) === -1;

    if (userToAdd && isUnique) {
      setUsersList([...usersList, { id: userToAdd.id, uid: userToAdd.uid }]);
      setUserName("");
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

    await getRoomsAction();

    setIsLoading(false);
  }

  const friendsList = JSON.parse(localStorage.getItem("friendsList")) || null;

  return (
    <Dialog>
      <DialogTrigger asChild className="w-full text-center hidden sm:block">
        <span>New Room</span>
      </DialogTrigger>
      <DialogTrigger>
        <Plus size={14} />
      </DialogTrigger>
      <form onSubmit={handleSubmit}>
        <DialogContent className="max-w-[80%] min-w-max sm:max-w-[425px] overflow-hidden text-zinc-900 dark:text-zinc-50">
          <DialogHeader>
            <DialogTitle>Create a new room</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-start gap-2">
              <Label htmlFor="name" className="text-right">
                Room Name
              </Label>
              <Input
                id="name"
                className="col-span-3"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="usersList">Users</Label>
              <div
                id="usersList"
                className="h-fit max-w-[16rem] xs:max-w-[20rem] sm:max-w-sm flex items-center justify-start flex-wrap gap-1"
              >
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
            <Button type="submit" onClick={handleSubmit}>
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
