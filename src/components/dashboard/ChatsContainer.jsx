import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { useMessagesContext } from "@/store/contexts/messagesContext";
import { getFriendsList, getTempNameByEmail } from "../../lib/utils";

import {
  SidebarItem,
  SidebarItemIcon,
  SidebarItemLabel,
  SidebarAccordionContent,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare } from "lucide-react";
import CreateChat from "./CreateChat";

export default function ChatsContainer() {
  const { retrievedDirectMessages } = useMessagesContext();
  const navigate = useNavigate();

  function handleClick(userData) {
    navigate(
      `/User/${userData.id}/${
        userData.name ? userData.name : getTempNameByEmail(userData.uid)
      }`
    );
  }

  const friends = useMemo(
    () => getFriendsList(retrievedDirectMessages),
    [retrievedDirectMessages]
  );

  return (
    <SidebarItem accordion>
      <SidebarItemIcon>
        <MessageSquare />
      </SidebarItemIcon>
      <SidebarItemLabel>Chats</SidebarItemLabel>
      <SidebarAccordionContent className="border border-zinc-200 bg-transparent shadow-sm hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50">
        <CreateChat />
      </SidebarAccordionContent>
      {!friends ? (
        <SidebarAccordionContent className="hidden sm:flex">
          Nothing to display
        </SidebarAccordionContent>
      ) : (
        friends.map((friend) => (
          <SidebarAccordionContent
            key={friend.id}
            onClick={() => handleClick(friend)}
          >
            <Avatar className="h-6 w-6">
              <AvatarImage src="/" />
              <AvatarFallback>{friend.uid[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <span className="hidden sm:block">{friend.name}</span>
          </SidebarAccordionContent>
        ))
      )}
    </SidebarItem>
  );
}
