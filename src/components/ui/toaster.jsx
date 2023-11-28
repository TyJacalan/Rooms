import { useEffect } from "react";
import { useAuthContext } from "@/store/contexts/authContext";
import { useMessagesContext } from "@/store/contexts/messagesContext";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export function Toaster() {
  const { toast, toasts } = useToast();

  const { authMessage } = useAuthContext();
  const { messagesMessage } = useMessagesContext();

  useEffect(() => {
    if (authMessage) {
      toast({
        description: authMessage,
        duration: 5000,
      });
    }
  }, [authMessage]);

  useEffect(() => {
    if (messagesMessage) {
      toast({
        description: messagesMessage,
        duration: 5000,
      });
    }
  }, [messagesMessage]);

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
