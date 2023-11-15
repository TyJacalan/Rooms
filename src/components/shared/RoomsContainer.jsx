import React from "react";

import {
  SidebarItem,
  SidebarItemIcon,
  SidebarItemLabel,
  SidebarAccordionContent,
} from "@/components/ui/sidebar";
import { MessageSquare, Users2 } from "lucide-react";

//TODO: Load list of users as accordion items

export default function RoomsContainer() {
  return (
    <>
      <SidebarItem accordion>
        <SidebarItemIcon>
          <MessageSquare />
        </SidebarItemIcon>
        <SidebarItemLabel>Chats</SidebarItemLabel>
        <SidebarAccordionContent>Hello</SidebarAccordionContent>
        <SidebarAccordionContent>World</SidebarAccordionContent>
      </SidebarItem>

      <SidebarItem accordion>
        <SidebarItemIcon>
          <Users2 />
        </SidebarItemIcon>
        <SidebarItemLabel>Rooms</SidebarItemLabel>
      </SidebarItem>
    </>
  );
}
