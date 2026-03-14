"use client";

import { useMemo } from "react";
import Image from "next/image";

function generateBars(count = 30) {
  return Array.from({ length: count }, (_, i) => {
    const position = i / count;

    const bounce1 = Math.abs(Math.sin(position * Math.PI * 2.5));
    const bounce2 = Math.abs(Math.cos(position * Math.PI * 5)) * 0.4;

    const baseline = Math.sin(position * Math.PI) * 0.3;

    let normalizedWave = bounce1 + bounce2 + baseline;

    normalizedWave = Math.max(0, Math.min(1, normalizedWave / 1.7));

    const height = Number((15 + normalizedWave * 80).toFixed(2));

    return { height };
  });
}

export default function BarSection() {
  const bars = useMemo(() => generateBars(30), []);

  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 flex items-center gap-[3px] px-1 pointer-events-none opacity-50">
        {bars.map((bar, i) => (
          <div
            key={i}
            className="relative flex-1 min-w-0 bg-cover bg-center"
            style={{
              height: `${bar.height}%`,
              backgroundImage: "url(/bars.webp)",
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Logo */}
      <div className="relative z-10 w-[90vw] max-w-[1000px] aspect-[2/1]">
        <Image
          src="/logo.png"
          alt="IME FTUI Logo"
          fill
          className="object-contain drop-shadow-2xl"
          sizes="(max-width: 768px) 90vw, 1000px"
        />
      </div>
    </section>
  );
}
