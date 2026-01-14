"use client";

import { memo } from "react";
import { getImageProps } from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Countdown } from "@/components/countdown";
import { Sparkles, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { handleRegistrationClick } from "@/lib/registration";
import { RECRUITMENT_DEADLINE } from "../data";

// Optimized: Word-level animation instead of per-character (120+ -> 4 elements)
const AnimatedHeadline = memo(function AnimatedHeadline() {
  const words = ["Langkah", "Pertama,", "Menjejak", "Asa"];
  return (
    <span
      className="text-primary dark:text-secondary"
      style={{ fontFamily: "'Merriweather', serif" }}
    >
      {words.map((word, index) => (
        <motion.span
          key={word}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.3 + index * 0.15,
            ease: "easeOut",
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
});

// Optimized: Single fade-in instead of 120+ per-character animations
const AnimatedSubtitle = memo(function AnimatedSubtitle() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
      className="text-lg sm:text-xl text-foreground max-w-2xl mx-auto mb-10"
    >
      Menjaga visi, melanjutkan langkah. Mari wujudkan sinergi yang Selaras,
      strategi Efektif, dan pribadi yang Berdaya.
    </motion.p>
  );
});

// Optimized: CSS animation for button pulse instead of JS-driven
const CTAButton = memo(function CTAButton() {
  return (
    <Button
      size="lg"
      className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 sm:px-8 h-11 sm:h-12 text-sm sm:text-base font-medium rounded-xl glow animate-pulse-gentle"
      onClick={handleRegistrationClick}
    >
      Daftar Sekarang
      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
    </Button>
  );
});

// Memoized scroll indicator to prevent re-renders
const ScrollIndicator = memo(function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
        <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full animate-scroll-indicator" />
      </div>
    </motion.div>
  );
});

export const HeroSection = memo(function HeroSection() {
  const common = { alt: "", sizes: "100vw", fill: true, priority: true };

  const {
    props: { srcSet: desktopLightSrcSet },
  } = getImageProps({
    ...common,
    src: "/desktopLight.webp",
  });
  const {
    props: { srcSet: desktopDarkSrcSet },
  } = getImageProps({
    ...common,
    src: "/desktopDark.webp",
  });
  const {
    props: { src: mobileLightSrc, alt: mobileLightAlt, ...mobileLightProps },
  } = getImageProps({
    ...common,
    src: "/mobilelight.webp",
  });
  const {
    props: { src: mobileDarkSrc, alt: mobileDarkAlt, ...mobileDarkProps },
  } = getImageProps({
    ...common,
    src: "/mobiledark.webp",
  });

  return (
    <>
      {/* Sticky Background Layer - Only this stays fixed */}
      <div className="sticky top-0 z-0 h-screen">
        <div className="absolute inset-0 block dark:hidden">
          <picture>
            <source media="(min-width: 768px)" srcSet={desktopLightSrcSet} />
            <img
              alt={mobileLightAlt}
              {...mobileLightProps}
              src={mobileLightSrc}
              className="absolute inset-0 h-full w-full object-cover pointer-events-none"
            />
          </picture>
        </div>
        <div className="absolute inset-0 hidden dark:block">
          <picture>
            <source media="(min-width: 768px)" srcSet={desktopDarkSrcSet} />
            <img
              alt={mobileDarkAlt}
              {...mobileDarkProps}
              src={mobileDarkSrc}
              className="absolute inset-0 h-full w-full object-cover pointer-events-none"
            />
          </picture>
        </div>
      </div>

      <section className="relative z-10 -mt-[100vh] min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="hidden md:inline-flex mb-6 px-4 py-2 text-sm border-primary/30"
            >
              <Sparkles className="w-4 h-4 mr-2 text-primary" />
              Open Recruitment IME FTUI 2026
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-5xl font-bold tracking-tight mb-6"
          >
            <AnimatedHeadline />
          </motion.h1>

          <AnimatedSubtitle />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Countdown with Title */}
            <div className="flex flex-col items-center gap-5">
              <div className="glass-card px-5 py-2 rounded-2xl flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm sm:text-base font-medium text-foreground">
                  Open House
                </span>
              </div>
              <Countdown targetDate={RECRUITMENT_DEADLINE} />
            </div>

            <div className="flex flex-row gap-3 sm:gap-4">
              <CTAButton />
            </div>
          </motion.div>
        </div>

        <ScrollIndicator />
      </section>
    </>
  );
});
