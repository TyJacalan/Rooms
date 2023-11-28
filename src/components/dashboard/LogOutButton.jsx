import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/store/contexts/authContext";

import { Loader2, LogOut } from "lucide-react";

export default function LogOutButton() {
  const { logOutAction } = useAuthContext();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState();

  async function handleLogOut() {
    setIsLoading(true);
    await logOutAction();
    setIsLoading(false);
    navigate("/signin");
  }

  return (
    <div onClick={handleLogOut} disabled={isLoading}>
      {isLoading ? (
        <Loader2 />
      ) : (
        <div>
          <LogOut className="sm:hidden" strokeWidth={1} />
          <span className="hidden sm:block">Log Out</span>
        </div>
      )}
    </div>
  );
}
