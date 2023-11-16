import logo from "@public/logo.png";

import ModeToggle from "../ui/ModeToggle";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <div className="flex flex-row items-center justify-around gap-4 h-8 w-full py-1">
      <div className="flex flex-row w-12 sm:w-48">
        <img src={logo} alt="Rooms Logo" className="h-6 w-auto" />
        <span className="hidden sm:block">Rooms</span>
      </div>
      <div className="flex-1">
        <Input
          className="max-w-sm"
          type="email"
          placeholder="Search chats and rooms..."
        />
      </div>

      <div>
        <ModeToggle />
      </div>
    </div>
  );
}
