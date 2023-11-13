import { Routes, Route } from "react-router-dom";

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

export default function App() {
  return (
    <main className="h-screen w-screen">
      <Routes>
        <Route element={<AuthLayout />}>
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
