import { Routes, Route } from "react-router-dom";

import {
  AuthLayout,
  RootLayout,
  Home,
  Profile,
  Room,
  SignIn,
  SignUp,
  BuildPage,
  ErrorPage,
} from "./pages";

import { Toaster } from "@/components/ui/toaster";

export default function App() {
  return (
    <main className="h-full w-full flex items-center justify-center bg-slate-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 overflow-hidden">
      <Toaster />
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/:classId/:roomId/:name" element={<Room />} />
          <Route path="/:classId/:roomId/:name/Profile" element={<Room />} />
          <Route path="/Settings" element={<BuildPage />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
}
