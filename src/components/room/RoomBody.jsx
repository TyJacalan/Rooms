import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useMessagesContext } from "@/store/contexts/messagesContext";

import { MessageBubble } from "./MessageBubble";
import { Loader2 } from "lucide-react";

export default function RoomBody() {
  const { classId, roomId } = useParams();
  const { directMessages, retrievedDirectMessages, retrieveMessagesAction } =
    useMessagesContext();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const fetchMessages = async () => {
      console.log(classId, roomId);
      setIsLoading(false);
      await retrieveMessagesAction({
        receiver_id: parseInt(roomId),
        receiver_class: classId,
      });

      setIsLoading(false);
    };

    fetchMessages();
  }, [classId, roomId]);

  if (isLoading) {
    return (
      <div className="flex-1 w-full items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-2 px-4 mt-2 overflow-y-auto overflow-x-hidden">
      {retrievedDirectMessages.map((message, index) => (
        <MessageBubble
          key={index}
          variant={message.receiver.id === roomId ? "secondary" : "primary"}
        >
          {message.body}
        </MessageBubble>
      ))}
    </div>
  );
}
