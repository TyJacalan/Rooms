import React from "react";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export default function SendMessageForm() {
  return (
    <div className="h-fit w-full flex flex-row items-end justify-start gap-2 p-4">
      <Textarea className="h-[1rem] min-h-[38px] bg-zinc-200 dark:bg-zinc-900 focus-visible:ring-0" />
      <Button variant="ghost" size="icon">
        <Send size={16} strokeWidth={1.5} />
      </Button>
    </div>
  );
}
