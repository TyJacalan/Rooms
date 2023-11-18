import React from "react";

import { ChatsContainer, ConfigContainer, RoomsContainer } from ".";
import { Sidebar, SidebarContainer } from "@/components/ui/sidebar";

export default function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarContainer className="flex-1 overflow-hidden">
        <ChatsContainer />
        <RoomsContainer />
      </SidebarContainer>
      <SidebarContainer>
        <ConfigContainer />
      </SidebarContainer>
    </Sidebar>
  );
}
