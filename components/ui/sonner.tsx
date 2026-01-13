"use client";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      position="top-center"
      duration={1000}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "flex items-center justify-center gap-3 px-5 py-3 rounded-xl shadow-[0_0_20px_-5px_var(--primary)] backdrop-blur-xl !w-fit max-w-[85vw] sm:w-auto sm:min-w-[300px] !mx-auto !left-0 !right-0 bg-white/50 dark:bg-primary/20 border border-black/10 dark:border-primary/30 ring-1 ring-black/5 dark:ring-white/10 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",
          title:
            "text-black dark:text-foreground font-medium text-sm whitespace-nowrap",
          description:
            "text-black/80 dark:text-muted-foreground text-xs mt-1 hidden sm:block",
          content: "",
          icon: "text-primary",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
