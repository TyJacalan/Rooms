import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useMessagesContext } from "@/store/contexts/messagesContext";

import {
  SidebarItem,
  SidebarItemIcon,
  SidebarItemLabel,
  SidebarAccordionContent,
} from "@/components/ui/sidebar";
import { Users2 } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CreateRoomForm from "./CreateRoomForm";

export default function RoomsContainer() {
  const { roomsList, getRoomsAction } = useMessagesContext();
  const navigate = useNavigate();

  useEffect(() => {
    getRoomsAction();
  }, []);

  function handleClick(room) {
    navigate(`/Channel/${room.id}/${room.name}`);
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
            onClick={() => handleClick(room)}
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
