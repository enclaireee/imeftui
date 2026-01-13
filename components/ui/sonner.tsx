"use client";

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        style: {
          background: "hsl(var(--background) / 0.95)",
          backdropFilter: "blur(16px)",
          border: "1px solid hsl(var(--primary) / 0.2)",
          borderRadius: "1rem",
          boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.5)",
          color: "hsl(var(--foreground))",
          textAlign: "center",
          justifyContent: "center",
        },
        classNames: {
          title: "font-semibold text-center w-full",
          description: "text-muted-foreground text-center w-full",
        },
      }}
      icons={{
        success: <CircleCheckIcon className="size-5 text-green-500" />,
        info: <InfoIcon className="size-5 text-primary" />,
        warning: <TriangleAlertIcon className="size-5 text-secondary" />,
        error: <OctagonXIcon className="size-5 text-red-500" />,
        loading: <Loader2Icon className="size-5 animate-spin text-primary" />,
      }}
      {...props}
    />
  );
};

export { Toaster };
