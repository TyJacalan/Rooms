import { Outlet, Navigate } from "react-router-dom";

import logo from "@public/logo.png";

export default function AuthLayout() {
  const profile = JSON.parse(localStorage.getItem("profile")) || null;
  const accessToken = profile?.access_token;

  return (
    <>
      {accessToken ? (
        <Navigate to="/" />
      ) : (
        <section className="h-screen w-screen flex flex-col md:flex-row items-center justify-start sm:justify-center md:justify-around mx-0 my-auto p-4 container">
          <div className="flex flex-col items-center justify-center gap-4 w-[350px] p-4 text-center ">
            <img src={logo} alt="Rooms Logo" className="h-24" />
            <h1 className="text-3xl font-bold">Rooms</h1>
            <p>
              Making work life, simpler, more pleasant, and more productive.
            </p>
          </div>

          <Outlet />
        </section>
      )}
    </>
  );
}
