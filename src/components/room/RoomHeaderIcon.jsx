import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function RoomHeaderIcon() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <Button
      variant="ghost"
      className="hover:bg-zinc-200/90 hover:text-zinc-900 dark:hover:bg-zinc-900/40 dark:hover:text-zinc-50"
      size="icon"
      onClick={handleClick}
    >
      <ArrowLeft size={16} />
    </Button>
  );
}
