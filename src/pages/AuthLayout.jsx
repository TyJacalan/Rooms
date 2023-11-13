// import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function AuthLayout() {
  let isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <section className="mx-0 my-auto p-4 container h-screen w-[100vw] flex flex-row items-center">
          <div className="hidden md:flex flex-col items-center justify-center gap-4 w-[60%] p-4 text-center">
            <div className="text-3xl font-bold">No Slacking</div>
            <h1>
              Making work life, simpler, more pleasant, and more productive.
            </h1>
          </div>

          <Outlet />
        </section>
      )}
    </>
  );
}
