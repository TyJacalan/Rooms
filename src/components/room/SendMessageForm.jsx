import { useState } from "react";
import { useParams } from "react-router-dom";

import { useMessagesContext } from "@/store/contexts/messagesContext";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Send } from "lucide-react";

export default function SendMessageForm() {
  const { classId, roomId } = useParams();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { sendMessageAction } = useMessagesContext();

  function handleKeyDown(e) {
    if (e.code === "Enter" && !e.shiftKey && !e.altKey && !e.ctrlKey) {
      handleSubmit(e);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (message) {
      setIsLoading(true);

      await sendMessageAction({
        receiver_id: roomId,
        receiver_class: classId,
        body: message,
      });

      setMessage("");

      setIsLoading(false);
    }
  }

  return (
    <form
      onKeyDown={handleKeyDown}
      onSubmit={handleSubmit}
      className="w-full flex flex-row gap-2"
    >
      <Textarea
        name="message"
        className="h-[1rem] min-h-[38px] bg-zinc-200 dark:bg-zinc-900 focus-visible:ring-0 resize-none custom-scrollbar scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-800"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button variant="ghost" size="icon" disabled={isLoading}>
        {isLoading ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          <Send size={16} strokeWidth={1.5} />
        )}
      </Button>
    </form>
  );
}
