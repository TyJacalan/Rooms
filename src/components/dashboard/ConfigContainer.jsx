import { Link } from "react-router-dom";

import { getTempNameByEmail } from "@/lib/utils";

import { LogOut, Settings, User } from "lucide-react";

import {
  SidebarItem,
  SidebarItemIcon,
  SidebarItemLabel,
} from "@/components/ui/sidebar";
import LogOutButton from "./LogOutButton";

export default function ConfigContainer() {
  const profile = JSON.parse(localStorage.getItem("profile")) || null;

  return (
    <>
      <SidebarItem>
        <SidebarItemIcon>
          <User />
        </SidebarItemIcon>
        <SidebarItemLabel>
          <Link to="/Profile">{getTempNameByEmail(profile.uid)}</Link>
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
