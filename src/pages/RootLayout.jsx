"use client";
import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

import { useMessagesContext } from "@/store/contexts/messagesContext";

import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { DashboardHeader, DashboardSidebar } from "@/components/dashboard";

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(null);
  const {
    retrieveMessagesAction,
    getUserListAction,
    getRoomsAction,
    toastMessage,
    clearMessageAction,
  } = useMessagesContext();
  const { toast } = useToast();

  const profile = JSON.parse(localStorage.getItem("profile")) || null;

  useEffect(() => {
    if (profile) {
      const fetchInitialData = async () => {
        try {
          setIsLoading(true);
          await retrieveMessagesAction({
            receiver_id: profile.data.id,
            receiver_class: "User",
          });
          await getUserListAction();
          await getRoomsAction();
        } catch (error) {
          // Handle errors
        } finally {
          setIsLoading(false);
        }
      };

      fetchInitialData();
    }
  }, []);

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
      {isLoading ? (
        <p>Loading...</p>
      ) : !profile ? (
        <Navigate to={"/signin"} />
      ) : (
        <section className="h-screen w-screen flex flex-col space-y-4 mx-auto p-4 overflow-hidden">
          <Toaster />
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
