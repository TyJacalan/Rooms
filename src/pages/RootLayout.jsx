import { Outlet, Navigate } from "react-router-dom";

import { DashboardHeader, DashboardSidebar } from "@/components/shared";

export default function RootLayout() {
  const accessToken = JSON.parse(localStorage.getItem("profile")) || null;

  return (
    <>
      {!accessToken ? (
        <Navigate to={"/signin"} />
      ) : (
        <section className="h-screen w-screen flex flex-col min-w-max space-y-2 mx-auto p-4 overflow-hidden bg-slate-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50">
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
