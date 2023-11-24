import { Link } from "react-router-dom";

import logo from "@public/logo.png";
import ModeToggle from "../ui/ModeToggle";

export default function Header() {
  return (
    <div className="flex flex-row items-center justify-between gap-4 h-8 w-full py-1">
      <Link to="/" className="flex flex-row w-12 sm:w-48">
        <img src={logo} alt="Rooms Logo" className="h-6 w-auto" />
        <span className="hidden sm:block">Rooms</span>
      </Link>

      <div>
        <ModeToggle />
      </div>
    </div>
  );
}
