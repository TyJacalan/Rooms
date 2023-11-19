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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Plus } from "lucide-react";

export default function CreateRoomForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { createRoomAction } = useMessagesContext();

  return (
    <Dialog>
      <DialogTrigger asChild className="w-full text-center hidden sm:block">
        <span>New Room</span>
      </DialogTrigger>
      <DialogTrigger>
        <Plus size={14} />
      </DialogTrigger>
      <form>
        <DialogContent className="max-w-[80%] min-w-max sm:max-w-[425px] overflow-hidden text-zinc-900 dark:text-zinc-50">
          <DialogHeader>
            <DialogTitle>Create a new room</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-start gap-2">
              <Label htmlFor="name" className="text-right">
                Room Name
              </Label>
              <Input id="name" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-2">
              <Label htmlFor="users" className="text-right">
                Users
              </Label>
              <Input id="users" className="col-span-3" />
            </div>
          </div>

          <DialogFooter>
            <Button type="submit">
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
