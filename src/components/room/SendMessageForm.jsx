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

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    await sendMessageAction({
      receiver_id: roomId,
      receiver_class: classId,
      body: message,
    });

    setIsLoading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="h-fit w-full flex flex-row items-end justify-start gap-2 p-4">
        <Textarea
          className="h-[1rem] min-h-[38px] bg-zinc-200 dark:bg-zinc-900 focus-visible:ring-0 resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button variant="ghost" size="icon">
          {isLoading ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <Send size={16} strokeWidth={1.5} />
          )}
        </Button>
      </div>
    </form>
  );
}
