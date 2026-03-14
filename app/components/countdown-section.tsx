"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function CountdownSection() {
  const targetDate = new Date("2026-08-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00"
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, "0"),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, "0"),
          minutes: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, "0"),
          seconds: Math.floor((difference / 1000) % 60).toString().padStart(2, "0")
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Text */}
        <div className="mb-10 text-left">
          <p className="text-secondary italic text-lg md:text-xl font-medium mb-1">
            Never miss a moment...
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight mb-2">
            Reminder
          </h2>
          <p className="text-foreground/90 italic md:text-xl">
            Track the active timeline to stay connected with upcoming events of ours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start">
          
          {/* Left Column: Timer & Boxes */}
          <div className="flex flex-col gap-8">
            
            {/* Fancy Pill Wrapper for drop-shadow */}
            <div className="inline-flex w-fit filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              {/* Blue Border layer */}
              <div 
                className="bg-[#1a2359] p-[6px]"
                style={{ clipPath: "polygon(1.5rem 0, calc(100% - 1.5rem) 0, 100% 50%, calc(100% - 1.5rem) 100%, 1.5rem 100%, 0 50%)" }}
              >
                {/* White Inner layer */}
                <div 
                  className="bg-white px-10 py-2 md:px-16 md:py-3 flex items-center justify-center h-full w-full"
                  style={{ clipPath: "polygon(1.1rem 0, calc(100% - 1.1rem) 0, 100% 50%, calc(100% - 1.1rem) 100%, 1.1rem 100%, 0 50%)" }}
                >
                  <span className="text-[#1a2359] font-bold text-xl md:text-3xl tracking-wide uppercase">
                    NAMA PROKER
                  </span>
                </div>
              </div>
            </div>

            {/* Countdown Boxes */}
            <div className="flex gap-4 md:gap-6">
              {[
                { label: "HARI", value: timeLeft.days },
                { label: "JAM", value: timeLeft.hours },
                { label: "MENIT", value: timeLeft.minutes },
                { label: "DETIK", value: timeLeft.seconds },
              ].map((unit, i) => (
                <div 
                  key={i} 
                  className="relative w-24 h-28 md:w-28 md:h-32 bg-[#21295c] rounded-2xl flex flex-col items-center justify-center shadow-xl border border-white/5"
                >
                  {/* Ticket Cutouts */}
                  <div className="absolute left-[-8px] top-1/2 -translate-y-1/2 w-4 h-6 bg-background rounded-r-full shadow-inner" />
                  <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-4 h-6 bg-background rounded-l-full shadow-inner" />
                  
                  {/* Subtle Top/Bottom split line effect */}
                  <div className="absolute left-3 right-3 top-1/2 h-[1px] bg-black/30" />
                  <div className="absolute left-3 right-3 top-[calc(50%+1px)] h-[1px] bg-white/10" />

                  <span className="text-white font-bold text-4xl md:text-5xl relative z-10 leading-none mb-2">
                    {unit.value}
                  </span>
                  <span className="text-white/80 text-xs md:text-sm font-semibold tracking-wider relative z-10">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Placeholder Boxes */}
            <div className="flex gap-4 md:gap-6 mt-2">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i} 
                  className="w-24 h-28 md:w-28 md:h-32 bg-[#d9d9d9] rounded-2xl shadow-md border-b-4 border-black/10" 
                />
              ))}
            </div>

          </div>

          {/* Right Column: Calendar Image */}
          <div className="relative w-full max-w-[500px] mx-auto lg:mx-0 lg:ml-auto">
            <Image 
              src="/calendar.png"
              alt="Calendar static graphic"
              width={600}
              height={500}
              className="w-full h-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
