import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import { useMessagesContext } from "@/store/contexts/messagesContext";

import SimpleLoader from "@/components/shared/SimpleLoader";
import ChatBubbleContainer from "./ChatBubbleContainer";
import RoomBubbleContainer from "./RoomBubbleContainer";
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

  const containerRef = useRef(null);
  const [displayLimit, setDisplayLimit] = useState(20);

  function handleScroll() {
    const { scrollTop } = containerRef.current;
    if (scrollTop === 0 && conversationData.length > displayLimit) {
      const newDisplayLimit = displayLimit + 20;
      setDisplayLimit(newDisplayLimit);
    }
  }

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [displayLimit, conversationData]);

  const displayMessages = conversationData.slice(-displayLimit);

  useEffect(() => {
    const fetchMessages = async () => {
      setIsLoading(true);
      await retrieveMessagesAction({
        receiver_id: parseInt(roomId),
        receiver_class: classId,
      });

      setIsLoading(false);
    };

    fetchMessages();
  }, [roomId]);

  useEffect(() => {
    const fetchMessages = async () => {
      await retrieveMessagesAction({
        receiver_id: parseInt(roomId),
        receiver_class: classId,
      });
    };

    const intervalId = setInterval(fetchMessages, 1000);

    return () => clearInterval(intervalId);
  }, [roomId]);

  useEffect(() => {
    if (retrievedDirectMessages) {
      setConversationData(retrievedDirectMessages);
    }
  }, [retrieveMessagesAction]);

  if (isLoading) {
    return <SimpleLoader />;
  }

  return (
    <div
      ref={containerRef}
      className="flex-1 h-full w-full flex flex-col gap-2 px-4 mt-2 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-900 scrollbar-track-transparent"
    >
      {classId === "User" ? (
        <ChatBubbleContainer displayMessages={displayMessages} />
      ) : (
        <RoomBubbleContainer displayMessages={displayMessages} />
      )}

      <ScrollToBottom />
    </div>
  );
}
