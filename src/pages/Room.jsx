import { useLocation } from "react-router-dom";

import { RoomBody, RoomFooter, RoomHeader, RoomInfo } from "@/components/room";
import BuildPage from "@/pages/BuildPage";

export default function Room() {
  const { pathname } = useLocation();

  return (
    <>
      <section className="h-full w-full min-w-max flex flex-col shadow-sm rounded-md overflow-hidden bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
        <RoomHeader />
        {pathname.includes("Profile") ? (
          pathname.includes("User") ? (
            <BuildPage />
          ) : (
            <RoomInfo />
          )
        ) : (
          <>
            <RoomBody />
            <RoomFooter />
          </>
        )}
      </section>
    </>
  );
}
