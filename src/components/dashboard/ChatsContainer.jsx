import { useNavigate } from "react-router-dom";

import { getTempNameByEmail } from "../../lib/utils";

import {
  SidebarItem,
  SidebarItemIcon,
  SidebarItemLabel,
  SidebarAccordionContent,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare } from "lucide-react";

export default function ChatsContainer() {
  const navigate = useNavigate();

  function handleClick(userData) {
    navigate(
      `/User/${userData.id}/${
        userData.name ? userData.name : getTempNameByEmail(userData.uid)
      }`
    );
  }

  const friendsList = JSON.parse(localStorage.getItem("friendsList")) || [];

  return (
    <SidebarItem accordion>
      <SidebarItemIcon>
        <MessageSquare />
      </SidebarItemIcon>
      <SidebarItemLabel>Chats</SidebarItemLabel>
      {!friendsList ? (
        <SidebarAccordionContent className="hidden sm:flex">
          Nothing to display
        </SidebarAccordionContent>
      ) : (
        friendsList.map((friend) => (
          <SidebarAccordionContent
            key={friend.id}
            onClick={() => handleClick(friend)}
          >
            <Avatar className="h-6 w-6">
              <AvatarImage src="/" />
              <AvatarFallback>{friend.uid[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <span className="hidden sm:block">
              {getTempNameByEmail(friend.uid)}
            </span>
          </SidebarAccordionContent>
        ))
      )}
    </SidebarItem>
  );
}
