"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import type { Variants } from "motion/react";
import { useRef } from "react";

// ─── HEADLINE ANIMATION ────────────────────────────────────────────────────────
// LUXURY REVAMP: Uses a cinematic "emerge" effect.
// By combining a y-axis drift, a subtle zoom-out (scale: 1.03 to 1), a blur clear,
// and a clip-path sweeping up from the bottom, the text feels heavy and expensive.
// The duration is extended (1.6s) with an ultra-smooth ease for that premium glide.
const heroHeadlineVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 1.03,
    filter: "blur(12px)",
    clipPath: "inset(100% 0% -20% 0%)", // -20% bottom prevents clipping drop-shadows
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    clipPath: "inset(-20% 0% -20% 0%)",
    transition: {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1], // Expo-out curve: fast start, impossibly smooth settle
    },
  },
};

// ─── SUBTITLE ANIMATION ────────────────────────────────────────────────────────
// LUXURY REVAMP: Enters with a soft, confident fade and slight upward drift.
// Delayed just enough to let the headline claim the user's attention first.
const heroSubheadlineVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.4,
      delay: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// ─── ORB ANIMATION ────────────────────────────────────────────────────────────
// LUXURY REVAMP: Orbs are kept strictly ambient. They fade in slowly and breathe
// with extremely soft, slow transitions to maintain a mature, professional aura.
const heroOrbVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 3, ease: "easeOut" },
  },
};

// ─── CONTAINER STAGGER ────────────────────────────────────────────────────────
const heroContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2, // Gives the background a moment to start moving first
    },
  },
};

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // ── Multi-layer scroll parallax ─────────────────────────────────────────────
  // Raw useTransforms provide that buttery, 1:1 "locked in" scroll feel
  // without the wobbly rubber-banding of springs.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY  = useTransform(scrollYProgress, [0, 1], ["0%",  "18%"]);
  const headY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const subY  = useTransform(scrollYProgress, [0, 1], ["0%", "-24%"]);
  const fade  = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background"
    >
      {/* ── BACKGROUND ──── */}
      <motion.div
        className="absolute inset-0 z-0 origin-center"
        style={shouldReduceMotion ? {} : { y: bgY }}
      >
        {/* LUXURY TOUCH: The background image itself scales down slowly on load.
            This creates an immediate, cinematic "breathing" depth used by premium brands. */}
        <motion.div
          className="relative w-full h-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: [0.25, 1, 0.5, 1] }}
        >
          <Image
            src="/fotoHero.webp"
            alt="IME FTUI Background"
            fill
            className="object-cover opacity-100"
            priority
          />
        </motion.div>

        <div className="absolute top-0 inset-x-0 h-[30%] bg-gradient-to-b from-background/90 to-transparent z-10" />
        <div className="absolute bottom-0 inset-x-0 h-[50%] bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
      </motion.div>

      {/* ── MAIN CONTENT ────────── */}
      <motion.div
        className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20"
        variants={heroContainerVariants}
        initial={shouldReduceMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={shouldReduceMotion ? {} : { opacity: fade }}
      >
        <motion.h1
          className="text-6xl md:text-6xl lg:text-8xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#FFF175] via-[#FFE500] to-[#FFD400] [filter:drop-shadow(0px_4.23px_4.23px_rgba(0,0,0,0.25))_drop-shadow(0px_0px_17.06px_rgba(255,236,3,0.45))]"
          variants={heroHeadlineVariants}
          style={shouldReduceMotion ? {} : { y: headY }}
        >
          IME FTUI 2026
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto drop-shadow-[0_0_20px_rgba(255,229,0,0.6)] font-extrabold"
          variants={heroSubheadlineVariants}
          style={shouldReduceMotion ? {} : { y: subY }}
        >
          Ikatan Mahasiswa Elektro
          <br />
          Selaras | Efektif | Berdaya
        </motion.p>
      </motion.div>

      {/* ── AMBIENT ORBS ── */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none z-10"
        variants={heroOrbVariants}
        initial={shouldReduceMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.04, 1],
                opacity: [0.12, 0.2, 0.12],
                transition: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }
        }
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none z-10"
        variants={heroOrbVariants}
        initial={shouldReduceMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1.03, 1, 1.05, 1.03],
                opacity: [0.08, 0.15, 0.08],
                transition: {
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                },
              }
        }
      />
    </section>
  );
}
