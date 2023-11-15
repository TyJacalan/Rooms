// import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function AuthLayout() {
  let isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <section className="h-screen w-screen flex flex-col md:flex-row items-center justify-center md:justify-around mx-0 my-auto p-4 md:container ">
          <div className="flex flex-col items-center justify-center gap-4 w-[350px] p-4 text-center ">
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
