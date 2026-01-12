"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Countdown } from "@/components/countdown";
import { Sparkles, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { RECRUITMENT_DEADLINE, REGISTRATION_FORM_URL } from "../data";

export function HeroSection() {
  return (
    <>
      {/* Sticky Background Layer - Only this stays fixed */}
      <div className="sticky top-0 z-0 h-screen">
        <div className="absolute inset-0 hidden md:block dark:hidden">
          <Image
            src="/desktopLight.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover pointer-events-none"
            priority
          />
        </div>
        <div className="absolute inset-0 hidden dark:md:block">
          <Image
            src="/desktopDark.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover pointer-events-none"
            priority
          />
        </div>
        <div className="absolute inset-0 md:hidden dark:hidden">
          <Image
            src="/mobilelight.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover pointer-events-none"
            priority
          />
        </div>
        <div className="absolute inset-0 hidden dark:block dark:md:hidden">
          <Image
            src="/mobiledark.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover pointer-events-none"
            priority
          />
        </div>
      </div>

      {/* Content Layer - Scrolls normally, positioned over the background */}
      <section className="relative z-10 -mt-[100vh] min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-6 px-4 py-2 text-sm border-primary/30 bg-primary/5 backdrop-blur-sm"
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
            <span
              className="text-primary dark:text-secondary"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              {"Langkah Pertama, Menjejak Asa".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.05,
                    delay: 0.3 + index * 0.04,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="text-lg sm:text-xl text-foreground max-w-2xl mx-auto mb-10"
          >
            {"Menjaga visi, melanjutkan langkah. Mari wujudkan sinergi yang Selaras, strategi Efektif, dan pribadi yang Berdaya."
              .split("")
              .map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.02,
                    delay: 2.0 + index * 0.015,
                  }}
                >
                  {char}
                </motion.span>
              ))}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-8"
          >
            <Countdown targetDate={RECRUITMENT_DEADLINE} />

            <div className="flex flex-row gap-3 sm:gap-4">
              <Link
                href={REGISTRATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 sm:px-8 h-11 sm:h-12 text-sm sm:text-base font-medium rounded-xl glow"
                  >
                    Daftar Sekarang
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
                  </Button>
                </motion.div>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-border bg-background/50 hover:bg-background/80 px-4 sm:px-8 h-11 sm:h-12 text-sm sm:text-base font-medium rounded-xl"
              >
                Pelajari Lebih
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-muted-foreground/50 rounded-full"
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}
