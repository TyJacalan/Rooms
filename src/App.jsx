import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { useAuthContext } from "@/store/contexts/authContext";

import {
  AuthLayout,
  RootLayout,
  Home,
  Profile,
  Room,
  Settings,
  SignIn,
  SignUp,
} from "./pages";

import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

export default function App() {
  const { toastMessage, clearMessageAction } = useAuthContext();
  const { toast } = useToast();

  useEffect(() => {
    if (toastMessage) {
      toast({
        description: toastMessage,
      });

      const timeout = setTimeout(() => {
        clearMessageAction();
      }, 10000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [toastMessage]);

  return (
    <main className="h-screen w-screen">
      <Toaster />
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Room" element={<Room />} />
          <Route path="/Settings" element={<Settings />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </main>
  );
}
