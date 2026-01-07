"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: Date;
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

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
  }, [targetDate]);

  if (!mounted) {
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
        <div
          key={unit.label}
          className="glass-card glass-card-hover rounded-2xl p-4 sm:p-6 min-w-[70px] sm:min-w-[90px] text-center"
        >
          <div className="text-2xl sm:text-4xl font-bold text-foreground tabular-nums">
            {String(unit.value).padStart(2, "0")}
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground mt-1 uppercase tracking-wider">
            {unit.label}
          </div>
          {index < timeUnits.length - 1 && (
            <span className="absolute -right-2 top-1/2 -translate-y-1/2 text-foreground/30 text-2xl hidden sm:block">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
