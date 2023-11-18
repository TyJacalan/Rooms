import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

import { useMessagesContext } from "@/store/contexts/messagesContext";

import { DashboardHeader, DashboardSidebar } from "@/components/dashboard";

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(null);

  const accessToken = JSON.parse(localStorage.getItem("profile")) || null;
  const { getRoomsAction, clearMessageAction } = useMessagesContext();

  useEffect(() => {
    async function initializeApplication() {
      try {
        setIsLoading(true);
        if (accessToken) {
          await getRoomsAction();
        }
      } catch (error) {
        const timeout = setTimeout(() => {
          clearMessageAction();
        }, 5000);

        return () => {
          clearTimeout(timeout);
        };
      } finally {
        setIsLoading(false);
      }
    }

    initializeApplication();
  }, []);

  return (
    <>
      {isLoading ? (
        /* Show loading indicator */
        <p>Loading...</p>
      ) : !accessToken ? (
        /* Navigate to sign-in if no access token */
        <Navigate to={"/signin"} />
      ) : (
        /* Render content */
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
