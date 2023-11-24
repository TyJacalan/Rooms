import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

import { useMessagesContext } from "@/store/contexts/messagesContext";

import { useToast } from "@/components/ui/use-toast";
import { DashboardHeader, DashboardSidebar } from "@/components/dashboard";

export default function RootLayout() {
  const { toastMessage, clearMessageAction } = useMessagesContext();
  const { toast } = useToast();

  const profile = JSON.parse(localStorage.getItem("profile")) || null;

  useEffect(() => {
    if (toastMessage) {
      toast({
        description: toastMessage,
      });

      const timeout = setTimeout(() => {
        clearMessageAction();
      }, 10000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [toastMessage]);

  return (
    <>
      {!profile ? (
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
