import { Outlet, Navigate } from "react-router-dom";

import { DashboardHeader, DashboardSidebar } from "@/components/dashboard";

export default function RootLayout() {
  const accessToken = JSON.parse(localStorage.getItem("profile")) || null;

  return (
    <>
      {!accessToken ? (
        <Navigate to={"/signin"} />
      ) : (
        <section className="h-screen w-screen flex flex-col space-y-2 mx-auto p-4 overflow-hidden">
          <DashboardHeader />
          <div className="h-full w-full flex flex-row gap-4">
            <DashboardSidebar />
            <Outlet />
          </div>
        </section>
      )}
    </>
  );
}
