import React from "react";

import { ChatsContainer, ConfigContainer, RoomsContainer } from ".";
import { Sidebar, SidebarContainer } from "@/components/ui/sidebar";

export default function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarContainer className="flex-1 overflow-y-auto custom-scrollbar scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-800">
        <ChatsContainer />
        <RoomsContainer />
      </SidebarContainer>
      <SidebarContainer>
        <ConfigContainer />
      </SidebarContainer>
    </Sidebar>
  );
}
