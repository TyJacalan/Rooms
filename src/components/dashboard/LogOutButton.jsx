import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/store/contexts/authContext";

import { Loader2 } from "lucide-react";

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
      {isLoading ? <Loader2 /> : "Log Out"}
    </div>
  );
}
