import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Sidebar({ children }) {
  return (
    <div className="h-full min-h-[16rem] w-12 sm:w-64 flex flex-col items-start justify-around">
      {children}
    </div>
  );
}

export const SidebarContainer = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        className={`${className} w-12 sm:w-48 flex flex-col gap-4`}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

const SidebarItemDefault = ({ className, props, ref, icon, label, isOpen }) => (
  <div
    className={`${className} relative h-fit w-full flex flex-row items-center justify-start gap-2 px-2 py-1 rounded-md text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80 cursor-pointer transition-all`}
    ref={ref}
    {...props}
  >
    <div className="flex-1 flex flex-row items-center justify-start gap-2 ">
      {icon && <div>{icon}</div>}
      {label && <div className="hidden sm:block">{label}</div>}
    </div>

    {typeof isOpen === "boolean" && (
      <div
        className={`h-4 w-4 shrink-0 transition-transform duration-300  ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      >
        <ChevronDown size={16} />
      </div>
    )}
  </div>
);

export const SidebarItem = React.forwardRef(
  ({ children, className, accordion, ...props }, ref) => {
    const icon = React.Children.toArray(children).find(
      (child) => child.type && child.type.displayName === "SidebarItemIcon"
    );

    const label = React.Children.toArray(children).find(
      (child) => child.type && child.type.displayName === "SidebarItemLabel"
    );

    if (icon && icon.length > 1) {
      throw new Error("SidebarItem should only contain one SidebarItemIcon.");
    }

    if (label && label.length > 1) {
      throw new Error("SidebarItem should only contain one SidebarItemLabel.");
    }

    if (accordion) {
      const commonProps = {
        children,
        className,
        props,
        ref,
        icon,
        label,
        SidebarItemDefault: SidebarItemDefault,
      };
      return <SidebarAccordion {...commonProps} />;
    }

    return (
      <SidebarItemDefault
        {...props}
        className={className}
        ref={ref}
        icon={icon}
        label={label}
      />
    );
  }
);

export const SidebarAccordion = ({
  children,
  className,
  props,
  ref,
  icon,
  label,
  SidebarItemDefault,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  const contents = React.Children.map(children, (child) => {
    if (child.type && child.type.displayName === "SidebarAccordionContent") {
      return child;
    }
    return null;
  });

  return (
    <div ref={ref} {...props}>
      <div onClick={handleToggle}>
        <SidebarItemDefault
          {...props}
          className={className}
          ref={ref}
          icon={icon}
          label={label}
          isOpen={isOpen}
        />
      </div>
      <div
        className={`flex flex-col gap-4 my-2 text-zinc-900 dark:text-zinc-50 overflow-hidden transition-all`}
      >
        {isOpen && contents && contents}
      </div>
    </div>
  );
};

export const SidebarItemIcon = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    const icon = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          className: `${className || ""} h-6 w-6 stroke-[1px]`,
        });
      }
      return child;
    });

    return (
      <div ref={ref} {...props}>
        {icon}
      </div>
    );
  }
);

SidebarItemIcon.displayName = "SidebarItemIcon";

export const SidebarItemLabel = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <div className={`${className} font-medium`} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

SidebarItemLabel.displayName = "SidebarItemLabel";

export const SidebarAccordionContent = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <div className={`${className}`} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

SidebarAccordionContent.displayName = "SidebarAccordionContent";
