import React from "react";

const MessageBubbleVariants = {
  primary: "bg-zinc-800 text-zinc-50 dark:bg-zinc-900 text-zinc-50",
  secondary: "bg-zinc-500 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-50",
};

const MessageBubble = React.forwardRef(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const variantClass =
      MessageBubbleVariants[variant] || MessageBubbleVariants.primary;

    const position = variant === "primary" ? "justify-start" : "justify-end";

    return (
      <div className={`h-fit w-full flex ${position}`} ref={ref} {...props}>
        <div
          className={`h-fit w-fit max-h-[18rem] max-w-[24rem] text-left px-4 py-2 shadow-sm rounded-md text-sm overflow-y-auto ${variantClass} ${className}`}
        >
          {children}
        </div>
      </div>
    );
  }
);

MessageBubble.displayName = "MessageBubble";

export { MessageBubble, MessageBubbleVariants };
