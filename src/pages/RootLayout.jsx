"use client";
import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

import { useMessagesContext } from "@/store/contexts/messagesContext";

import LoadingPage from "./LoadingPage";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { DashboardHeader, DashboardSidebar } from "@/components/dashboard";

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadPage, setLoadPage] = useState(false);
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

  function toggleLoadPage() {
    setLoadPage(true);
  }

  return (
    <>
      {!loadPage ? (
        <LoadingPage isLoading={isLoading} toggleLoadPage={toggleLoadPage} />
      ) : !profile ? (
        <Navigate to={"/signin"} />
      ) : (
        <section className="h-screen w-screen flex flex-col space-y-4 mx-auto p-4 overflow-hidden">
          <Toaster />
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
