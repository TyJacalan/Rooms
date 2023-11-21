import { Link, useParams } from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function RoomHeaderProfile() {
  const { classId, roomId, name } = useParams();

  return (
    <Link
      to={`/${classId}/${roomId}/${name}/Profile`}
      className="h-9 w-fit px-4 flex flex-row items-center justify-start gap-4 rounded-md hover:bg-zinc-200/90 hover:text-zinc-900 dark:hover:bg-zinc-900/40 dark:hover:text-zinc-50 cursor-pointer"
    >
      <Avatar className="h-6 w-6">
        <AvatarImage src="/" />
        <AvatarFallback>{name[0].toUpperCase()}</AvatarFallback>
      </Avatar>
      <span>{name}</span>
    </Link>
  );
}
