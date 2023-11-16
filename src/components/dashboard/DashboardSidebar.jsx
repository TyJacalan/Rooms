import React from "react";

import { ConfigContainer, RoomsContainer } from ".";
import { Sidebar, SidebarContainer } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

export default function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarContainer className="flex-1">
        <Button>New</Button>
        <RoomsContainer />
      </SidebarContainer>
      <SidebarContainer>
        <ConfigContainer />
      </SidebarContainer>
    </Sidebar>
  );
}
