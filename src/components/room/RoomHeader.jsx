import { RoomHeaderIcon, RoomHeaderProfile } from "./";

export default function RoomHeader() {
  return (
    <div className="h-12 w-full flex flex-row items-center justify-start p-2">
      <RoomHeaderIcon />
      <RoomHeaderProfile />
    </div>
  );
}
