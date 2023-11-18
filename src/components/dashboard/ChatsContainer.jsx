import React from "react";

import {
  SidebarItem,
  SidebarItemIcon,
  SidebarItemLabel,
  SidebarAccordionContent,
} from "@/components/ui/sidebar";
import { MessageSquare } from "lucide-react";

export default function ChatsContainer() {
  return (
    <SidebarItem accordion>
      <SidebarItemIcon>
        <MessageSquare />
      </SidebarItemIcon>
      <SidebarItemLabel>Chats</SidebarItemLabel>
      <SidebarAccordionContent>Hello</SidebarAccordionContent>
      <SidebarAccordionContent>World</SidebarAccordionContent>
    </SidebarItem>
  );
}
