import { Link, useNavigate } from "react-router-dom";
import { Settings, User } from "lucide-react";

import {
  SidebarItem,
  SidebarItemIcon,
  SidebarItemLabel,
} from "@/components/ui/sidebar";

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
    </>
  );
}
