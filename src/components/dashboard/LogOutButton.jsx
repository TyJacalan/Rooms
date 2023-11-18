import { useAuthContext } from "@/store/contexts/authContext";

export default function LogOutButton() {
  const { logOutAction } = useAuthContext();

  async function handleLogOut() {
    await logOutAction();
  }

  return <div onClick={handleLogOut}>Log Out</div>;
}
