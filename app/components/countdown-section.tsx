"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { countdownConfig } from "./countdown-data";

export function CountdownSection() {
  const targetDate = new Date(countdownConfig.targetDate).getTime();
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
    <section className="py-24 relative overflow-hidden bg-[#000044] min-h-[600px] flex flex-col justify-center">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Decorative Elements — Static, low-opacity */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden md:block select-none" aria-hidden="true">
        <div className="absolute top-[10%] -left-[5%] w-[450px] h-[450px] opacity-[0.07]">
          <Image src="/element1.webp" alt="" fill className="object-contain" sizes="450px" priority />
        </div>
        <div className="absolute top-[40%] -right-[5%] w-[380px] h-[380px] opacity-[0.05]">
          <Image src="/element2.webp" alt="" fill className="object-contain" sizes="380px" />
        </div>
        <div className="absolute bottom-[10%] left-[10%] w-[420px] h-[420px] opacity-[0.06]">
          <Image src="/element3.webp" alt="" fill className="object-contain" sizes="420px" />
        </div>
        <div className="absolute bottom-[20%] -right-[2%] w-[320px] h-[320px] opacity-[0.07]">
          <Image src="/element4.webp" alt="" fill className="object-contain" sizes="320px" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        {/* Header Text - Centered on mobile, Left on desktop */}
        <div className="mb-14 lg:mb-10 text-center lg:text-left flex flex-col items-center lg:items-start">
          <Reveal delay={0.1}>
            <p className="text-[#facc15] italic text-lg md:text-xl font-medium mb-1">
              Never miss a moment...
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-3">
              Reminder
            </h2>
          </Reveal>
          <Reveal delay={0.3} className="max-w-md lg:max-w-none">
            <p className="text-white/70 italic md:text-xl leading-relaxed">
              Track the active timeline to stay connected with upcoming events of ours.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center lg:items-start">

          {/* Left Column: Timer & Boxes */}
          <div className="flex flex-col items-center lg:items-start gap-10 lg:gap-8 w-full max-w-[480px] md:max-w-[520px] mx-auto lg:mx-0">

            {/* Fancy Pill Wrapper for drop-shadow */}
            <Reveal delay={0.4}>
              <div className="inline-flex w-fit filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                {/* Blue Border layer */}
                <div
                  className="bg-[#1a2359] p-[6px]"
                  style={{ clipPath: "polygon(1.5rem 0, calc(100% - 1.5rem) 0, 100% 50%, calc(100% - 1.5rem) 100%, 1.5rem 100%, 0 50%)" }}
                >
                  {/* White Inner layer */}
                  <div
                    className="bg-white px-8 py-2 md:px-16 md:py-3 flex items-center justify-center h-full w-full"
                    style={{ clipPath: "polygon(1.1rem 0, calc(100% - 1.1rem) 0, 100% 50%, calc(100% - 1.1rem) 100%, 1.1rem 100%, 0 50%)" }}
                  >
                    <span className="text-[#1a2359] font-bold text-lg md:text-3xl tracking-wide uppercase whitespace-nowrap">
                      {countdownConfig.prokerName}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="w-full space-y-6">
              {/* Countdown Boxes - Grid for perfect alignment */}
              <div className="grid grid-cols-4 gap-3 md:gap-6 w-full">
                {[
                  { label: "HARI", value: timeLeft.days },
                  { label: "JAM", value: timeLeft.hours },
                  { label: "MENIT", value: timeLeft.minutes },
                  { label: "DETIK", value: timeLeft.seconds },
                ].map((unit, i) => (
                  <Reveal key={i} width="100%" delay={0.5 + i * 0.1}>
                    <div
                      className="relative w-full aspect-[1/1.15] md:h-32 bg-[#21295c] rounded-2xl flex flex-col items-center justify-center shadow-xl border border-white/5"
                    >
                      {/* Ticket Cutouts */}
                      <div className="absolute left-[-6px] md:left-[-8px] top-1/2 -translate-y-1/2 w-3 md:w-4 h-5 md:h-6 bg-[#000044] rounded-r-full shadow-inner" />
                      <div className="absolute right-[-6px] md:right-[-8px] top-1/2 -translate-y-1/2 w-3 md:w-4 h-5 md:h-6 bg-[#000044] rounded-l-full shadow-inner" />

                      <div className="absolute left-2 right-2 top-1/2 h-[1px] bg-black/30" />
                      <div className="absolute left-2 right-2 top-[calc(50%+1px)] h-[1px] bg-white/10" />

                      <span className="text-white font-bold text-3xl md:text-5xl relative z-10 leading-none mb-1 md:mb-2 tabular-nums">
                        {unit.value}
                      </span>
                      <span className="text-white/60 text-[8px] md:text-xs font-bold uppercase tracking-widest relative z-10">
                        {unit.label}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Placeholder Images - Grid of 3 matching the total width of 4 boxes */}
              <div className="grid grid-cols-3 gap-3 md:gap-6 w-full">
                {countdownConfig.placeholders.map((placeholder, i) => (
                  <Reveal key={i} width="100%" delay={0.8 + i * 0.1}>
                    <div
                      className="relative w-full aspect-[1.4/1] md:h-32 bg-white/5 rounded-2xl shadow-md border-b-2 md:border-b-4 border-white/10 glass-card overflow-hidden group"
                    >
                      {placeholder.src ? (
                        <Image
                          src={placeholder.src}
                          alt={placeholder.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 160px, 224px"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-6 h-6 rounded-full bg-white/5 animate-pulse" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Calendar Image */}
          <div className="relative w-full max-w-[420px] md:max-w-[500px] mx-auto lg:mx-0 lg:ml-auto">
            <Reveal delay={1.0} width="100%">
              <div className="relative aspect-[1.2/1] w-full">
                <Image
                  src="/calendar.webp"
                  alt="Calendar static graphic"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
