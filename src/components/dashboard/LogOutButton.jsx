import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/store/contexts/authContext";

export default function LogOutButton() {
  const { logOutAction } = useAuthContext();
  const navigate = useNavigate();
  async function handleLogOut() {
    await logOutAction();
    navigate("/signin");
  }

  return <div onClick={handleLogOut}>Log Out</div>;
}
