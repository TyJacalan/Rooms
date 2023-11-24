import { Outlet, Navigate } from "react-router-dom";

import { DashboardHeader, DashboardSidebar } from "@/components/dashboard";

export default function RootLayout() {
  const profile = JSON.parse(localStorage.getItem("profile")) || null;
  const accessToken = profile?.access_token;

  return (
    <>
      {!accessToken ? (
        <Navigate to={"/signin"} />
      ) : (
        <section className="h-screen w-screen flex flex-col space-y-4 mx-auto p-4 overflow-hidden">
          <DashboardHeader />
          <div className="flex-1 w-full flex flex-row gap-4 overflow-hidden">
            <DashboardSidebar />
            <Outlet />
          </div>
        </section>
      )}
    </>
  );
}
