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

export default function App() {
  return (
    <main className="h-full w-full bg-slate-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 overflow-hidden">
      <Toaster />
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/:classId/:roomId/:name" element={<Room />} />
          <Route path="/:classId/:roomId/:name/Profile" element={<Room />} />
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
