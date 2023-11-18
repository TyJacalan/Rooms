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

export default function RoomsContainer() {
  const { roomsList } = useMessagesContext();

  return (
    <>
      <SidebarItem accordion>
        <SidebarItemIcon>
          <Users2 />
        </SidebarItemIcon>
        <SidebarItemLabel>Rooms</SidebarItemLabel>
        {roomsList.map((room) => (
          <SidebarAccordionContent key={room.name}>
            <Avatar className="h-6 w-6">
              <AvatarImage src="/" />
              <AvatarFallback>{room.name[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            {room.name}
          </SidebarAccordionContent>
        ))}
      </SidebarItem>
    </>
  );
}
