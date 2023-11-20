import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import { useMessagesContext } from "@/store/contexts/messagesContext";

import { MessageBubble } from "./MessageBubble";
import { Loader2 } from "lucide-react";

const ScrollToBottom = () => {
  const elementRef = useRef();
  useEffect(() =>
    elementRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    })
  );
  return <div ref={elementRef} />;
};

export default function RoomBody() {
  const { classId, roomId } = useParams();
  const { retrievedDirectMessages, retrieveMessagesAction } =
    useMessagesContext();
  const [conversationData, setConversationData] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const fetchMessages = async () => {
      setIsLoading(false);
      await retrieveMessagesAction({
        receiver_id: parseInt(roomId),
        receiver_class: classId,
      });

      setIsLoading(false);
    };

    fetchMessages();
  }, [classId, roomId]);

  useEffect(() => {
    if (retrievedDirectMessages) {
      setConversationData(retrievedDirectMessages);
    }
  }, [retrieveMessagesAction]);

  if (isLoading) {
    return (
      <div className="flex-1 w-full items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex-1 h-full w-full flex flex-col gap-2 px-4 mt-2 overflow-y-auto overflow-x-hidden">
      {conversationData.map((message, index) => (
        <MessageBubble
          key={index}
          variant={message.sender.id == roomId ? "primary" : "secondary"}
        >
          {message.body}
        </MessageBubble>
      ))}
      <ScrollToBottom />
    </div>
  );
}
