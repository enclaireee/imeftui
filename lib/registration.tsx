"use client";

import { Sparkles } from "lucide-react";
import { toast } from "sonner";
import { REGISTRATION_OPEN, REGISTRATION_FORM_URL } from "@/app/masihotw/data";

/**
 * Shared handler for registration button clicks.
 * Shows "Coming Soon" toast if registration is closed,
 * otherwise opens the registration form in a new tab.
 */
export function handleRegistrationClick() {
  if (!REGISTRATION_OPEN) {
    toast("Coming Soon", {
      description: "Pendaftaran akan segera dibuka.",
      icon: <Sparkles className="w-5 h-5 text-yellow-400" />,
    });
    return;
  }
  window.open(REGISTRATION_FORM_URL, "_blank", "noopener,noreferrer");
}
