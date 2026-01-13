"use client";

import { useEffect, useState, memo, useMemo } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: Date;
}

// Memoized time unit card
const TimeUnit = memo(function TimeUnit({
  value,
  label,
  showSeparator,
}: {
  value: number;
  label: string;
  showSeparator: boolean;
}) {
  return (
    <div className="glass-card glass-card-hover rounded-2xl p-4 sm:p-6 min-w-[70px] sm:min-w-[90px] text-center relative">
      <div className="text-2xl sm:text-4xl font-bold text-foreground tabular-nums">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-xs sm:text-sm text-muted-foreground mt-1 uppercase tracking-wider">
        {label}
      </div>
      {showSeparator && (
        <span className="absolute -right-2 top-1/2 -translate-y-1/2 text-foreground/30 text-2xl hidden sm:block">
          :
        </span>
      )}
    </div>
  );
});

// Loading skeleton
const LoadingSkeleton = memo(function LoadingSkeleton() {
  return (
    <div className="flex gap-3 sm:gap-4">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="glass-card rounded-2xl p-4 sm:p-6 min-w-[70px] sm:min-w-[90px]"
        >
          <div className="h-8 sm:h-10 bg-white/5 rounded animate-pulse" />
        </div>
      ))}
    </div>
  );
});

export const Countdown = memo(function Countdown({
  targetDate,
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  // Memoize target timestamp to prevent recalculation
  const targetTime = useMemo(() => targetDate.getTime(), [targetDate]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    const calculateTimeLeft = () => {
      const difference = targetTime - Date.now();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  if (!mounted) {
    return <LoadingSkeleton />;
  }

  const timeUnits = [
    { value: timeLeft.days, label: "Hari" },
    { value: timeLeft.hours, label: "Jam" },
    { value: timeLeft.minutes, label: "Menit" },
    { value: timeLeft.seconds, label: "Detik" },
  ];

  return (
    <div className="flex gap-3 sm:gap-4">
      {timeUnits.map((unit, index) => (
        <TimeUnit
          key={unit.label}
          value={unit.value}
          label={unit.label}
          showSeparator={index < timeUnits.length - 1}
        />
      ))}
    </div>
  );
});
