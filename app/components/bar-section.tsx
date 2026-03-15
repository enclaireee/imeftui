"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";

// — Design decision: The bars container is the conductor — it staggers its
//   children with a tight 0.04s gap so 30 bars cascade in ~1.2s total.
//   This creates a wave that reads left-to-right, much like an audio
//   equalizer waking up. The delay feels rhythmic, not mechanical.
const barContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.15,
    },
  },
};

// — Design decision: Each bar grows from scaleY: 0 to scaleY: 1 with
//   transform-origin at the bottom — they "sprout" from the baseline.
//   This is more expressive than a fade; it creates spatial logic (ground → up)
//   and reads naturally with the equalizer metaphor. A spring with moderate
//   stiffness (80) and high damping (18) gives a satisfying deceleration
//   without overshoot — bars shouldn't bounce.
const barItemVariants: Variants = {
  hidden: {
    scaleY: 0,
    opacity: 0,
  },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
      mass: 0.8,
    },
  },
};

// — Design decision: The logo reveals after the bars have grown — it's the
//   payoff of the sequence. A gentle scale from 0.85 → 1 paired with a
//   blur-dissolve connects it to the hero's motion language while feeling
//   like a natural focal point. The 0.8s delay lets the bar wave complete
//   before the logo draws attention.
const barLogoVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 20,
      mass: 1,
      delay: 0.8,
    },
  },
};

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
  const [barCount, setBarCount] = useState(30);
  const bars = useMemo(() => generateBars(barCount), [barCount]);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleResize = () => {
      // 15 bars for mobile, 30 for desktop
      setBarCount(window.innerWidth < 768 ? 15 : 30);
    };

    handleResize(); // Set initial count
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden bg-background">
      <motion.div
        className="absolute inset-0 flex items-center gap-[4px] md:gap-[3px] px-2 md:px-1 pointer-events-none opacity-50 w-full"
        variants={barContainerVariants}
        initial={shouldReduceMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {bars.map((bar, i) => (
          <motion.div
            key={i}
            className="relative flex-1 min-w-[5px] bg-cover bg-center origin-bottom"
            style={{
              height: `${bar.height}%`,
              backgroundImage: "url(/bars.webp)",
            }}
            variants={barItemVariants}
            aria-hidden="true"
          />
        ))}
      </motion.div>

      {/* Logo */}
      <motion.div
        className="relative z-10 w-[95vw] md:w-[90vw] max-w-[1000px] aspect-[2/1] scale-125 md:scale-100"
        variants={barLogoVariants}
        initial={shouldReduceMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        <Image
          src="/logo.png"
          alt="IME FTUI Logo"
          fill
          className="object-contain drop-shadow-2xl"
          sizes="(max-width: 768px) 95vw, 1000px"
        />
      </motion.div>
    </section>
  );
}
