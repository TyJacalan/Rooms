import React from "react";

import { ChatsContainer, ConfigContainer, RoomsContainer } from ".";
import { Sidebar, SidebarContainer } from "@/components/ui/sidebar";
import CreateChat from "./CreateChat";
import CreateRoomForm from "./CreateRoomForm";

export default function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarContainer className="flex-1 overflow-y-auto custom-scrollbar scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-800">
        <ChatsContainer />
        <CreateChat />
        <RoomsContainer />
        <CreateRoomForm />
      </SidebarContainer>
      <SidebarContainer>
        <ConfigContainer />
      </SidebarContainer>
    </Sidebar>
  );
}
