import { Link } from "react-router-dom";

import { LogOut, Settings, User } from "lucide-react";

import {
  SidebarItem,
  SidebarItemIcon,
  SidebarItemLabel,
} from "@/components/ui/sidebar";
import LogOutButton from "./LogOutButton";

export default function ConfigContainer() {
  return (
    <>
      <SidebarItem>
        <SidebarItemIcon>
          <User />
        </SidebarItemIcon>
        <SidebarItemLabel>
          <Link to="/Profile">Ty Jacalan</Link>
        </SidebarItemLabel>
      </SidebarItem>

      <SidebarItem>
        <SidebarItemIcon>
          <Settings />
        </SidebarItemIcon>
        <SidebarItemLabel>
          <Link to="/Settings">Settings</Link>
        </SidebarItemLabel>
      </SidebarItem>

      <SidebarItem>
        <SidebarItemIcon>
          <LogOut />
        </SidebarItemIcon>
        <SidebarItemLabel>
          <LogOutButton />
        </SidebarItemLabel>
      </SidebarItem>
    </>
  );
}
