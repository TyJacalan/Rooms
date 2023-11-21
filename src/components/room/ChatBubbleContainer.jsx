import { useParams } from "react-router-dom";

import { MessageBubble } from "./MessageBubble";

export default function ChatBubbleContainer({ displayMessages }) {
  const { roomId } = useParams();

  console.log(displayMessages);

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
