import { useParams } from "react-router-dom";

import { MessageBubble } from "./MessageBubble";

export default function ChatBubbleContainer({ displayMessages }) {
  const { roomId } = useParams();

  if (!displayMessages || displayMessages.length === 0) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        No messages yet. Say hi!
      </div>
    );
  }

  return (
    <>
      {displayMessages.map((message, index) => (
        <MessageBubble
          key={index}
          variant={message.sender.id == roomId ? "primary" : "secondary"}
        >
          {message.body}
        </MessageBubble>
      ))}
    </>
  );
}
