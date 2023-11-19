import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useMessagesContext } from "@/store/contexts/messagesContext";

import { MessageBubble } from "./MessageBubble";
import { Loader2 } from "lucide-react";

export default function RoomBody() {
  const { classId, roomId } = useParams();
  const { retrievedDirectMessages, retrieveMessagesAction } =
    useMessagesContext();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        console.log(classId, roomId);
        setIsLoading(false);
        await retrieveMessagesAction({
          receiver_id: parseInt(roomId),
          receiver_class: classId,
        });
      } catch (error) {
        console.log("Error fetching messages:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (isLoading) {
    return (
      <div className="flex-1 w-full items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-2 px-4 mt-2 overflow-y-auto overflow-x-hidden">
      {retrievedDirectMessages.map((message) => (
        <MessageBubble>{message.body}</MessageBubble>
      ))}
      <MessageBubble variant="secondary">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro quasi
        beatae omnis saepe sunt eius repellendus recusandae natus, maxime at
        neque quam id deleniti praesentium doloremque, molestiae cumque fugiat
        laboriosam tempore nihil. Quos error blanditiis quidem sit, iste quo
        quae ex laudantium officia dolor culpa quam dolores magni magnam quas
        corporis nihil nemo labore molestiae deleniti ad libero maxime
        quibusdam. Deleniti nulla porro, unde, molestias exercitationem repellat
        veniam incidunt esse amet corporis et molestiae fugit eligendi sint sed
        minima sapiente tenetur nesciunt eius. Sit dicta iure excepturi.
        Laboriosam praesentium saepe illo facilis amet nulla, maiores quis nemo
        optio consectetur provident.
      </MessageBubble>
    </div>
  );
}
