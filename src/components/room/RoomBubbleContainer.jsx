import { MessageBubble } from "./MessageBubble";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function RoomBubbleContainer({ displayMessages }) {
  const profile = JSON.parse(localStorage.getItem("profile")) || null;

  if (!displayMessages || displayMessages.length === 0) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        No messages yet. Say hi!
      </div>
    );
  }

  return (
    <>
      {profile &&
        displayMessages.map((message, index) => (
          <div
            className={`flex flex-row items-end gap-2 ${
              message.sender.id == profile.data.id ? "flex-row-reverse" : ""
            }`}
          >
            <Avatar className="h-6 w-6">
              <AvatarImage src="/" />
              <AvatarFallback className="bg-zinc-200 dark:bg-zinc-900">
                {message.sender.uid[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <MessageBubble
              key={index}
              variant={
                message.sender.id == profile.data.id ? "secondary" : "primary"
              }
            >
              {message.body}
            </MessageBubble>
          </div>
        ))}
    </>
  );
}
