// ─── Countdown Section Config ───────────────────────────────────────────────
// Edit this file to update the countdown date, program name, and the three
// placeholder images shown below the timer (images must exist in /public).

export const countdownConfig = {
  // ISO date string — the countdown ticks toward this moment
  targetDate: "2026-03-26T00:00:00",

  // Displayed inside the hexagon badge above the timer
  prokerName: "GO Gladiator",

  // Three placeholder cards below the timer.
  // Set src to null to render a plain grey placeholder box instead.
  placeholders: [
    { src: "/Image1.webp", alt: "Placeholder 1" },
    { src: "/Image2.webp", alt: "Placeholder 2" },
    { src: "/Image3.webp", alt: "Placeholder 3" },
  ],
};

// Standardized exports for CountdownSection
export const COUNTDOWN_TARGET = new Date(countdownConfig.targetDate);

export const COUNTDOWN_LABELS = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds",
};
