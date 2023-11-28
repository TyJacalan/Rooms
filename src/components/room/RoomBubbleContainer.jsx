import { getTempNameByEmail } from "@/lib/utils";
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
            key={index}
            className={`flex flex-row items-end gap-2 mt-2 ${
              message.sender.id == profile.data.id ? "flex-row-reverse" : ""
            }`}
          >
            <Avatar className="h-6 w-6">
              <AvatarImage src="/" />
              <AvatarFallback className="bg-zinc-200 dark:bg-zinc-900">
                {message.sender.uid[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <MessageBubble
                variant={
                  message.sender.id == profile.data.id ? "secondary" : "primary"
                }
                className="flex-1"
              >
                {message.body}
              </MessageBubble>
              <span className="text-xs pt-1">
                {getTempNameByEmail(message.sender.uid)}
              </span>
            </div>
          </div>
        ))}
    </>
  );
}
