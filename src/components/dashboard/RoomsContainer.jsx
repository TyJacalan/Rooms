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
