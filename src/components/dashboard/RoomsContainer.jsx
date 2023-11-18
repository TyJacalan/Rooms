import { useNavigate } from "react-router-dom";

import { useMessagesContext } from "@/store/contexts/messagesContext";

import {
  SidebarItem,
  SidebarItemIcon,
  SidebarItemLabel,
  SidebarAccordionContent,
} from "@/components/ui/sidebar";
import { Users2 } from "lucide-react";

//TODO: Load list of users as accordion items
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CreateRoomForm from "./forms/CreateRoomForm";

export default function RoomsContainer() {
  const { roomsList } = useMessagesContext();
  const navigate = useNavigate();

  function handleClick(roomId) {
    navigate(`/:Channel/${roomId}`);
  }

  return (
    <>
      <SidebarItem accordion>
        <SidebarItemIcon>
          <Users2 />
        </SidebarItemIcon>
        <SidebarItemLabel>Rooms</SidebarItemLabel>
        <SidebarAccordionContent className="border border-zinc-200 bg-transparent shadow-sm hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50">
          <CreateRoomForm />
        </SidebarAccordionContent>
        {roomsList.map((room) => (
          <SidebarAccordionContent
            key={room.id}
            onClick={() => handleClick(room.id)}
          >
            <Avatar className="h-6 w-6">
              <AvatarImage src="/" />
              <AvatarFallback>{room.name[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <span className="hidden sm:block">{room.name}</span>
          </SidebarAccordionContent>
        ))}
      </SidebarItem>
    </>
  );
}
