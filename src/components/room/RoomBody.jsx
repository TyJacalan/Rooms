import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import { useMessagesContext } from "@/store/contexts/messagesContext";
import useDebouncedFetch from "@/hooks/useDebouncedFetch";

import SimpleLoader from "@/components/shared/SimpleLoader";
import ChatBubbleContainer from "./ChatBubbleContainer";
import RoomBubbleContainer from "./RoomBubbleContainer";
import ScrollToBottom from "@/components/shared/ScrollToBottom";

export default function RoomBody() {
  const { classId, roomId } = useParams();
  const { retrievedDirectMessages, retrieveMessagesAction } =
    useMessagesContext();

  const containerRef = useRef(null);
  const [displayLimit, setDisplayLimit] = useState(20);

  function handleScroll() {
    const { scrollTop } = containerRef.current;
    if (scrollTop === 0 && retrievedDirectMessages.length > displayLimit) {
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
  }, [displayLimit]);

  async function fetchMessages() {
    await retrieveMessagesAction({
      receiver_id: parseInt(roomId),
      receiver_class: classId,
    });
  }

  const isLoading = useDebouncedFetch(fetchMessages, 1000, [roomId]);

  if (isLoading) {
    return <SimpleLoader />;
  }

  const displayMessages = retrievedDirectMessages.slice(-displayLimit);

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
