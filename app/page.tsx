"use client";

import { useEffect, useState, useLayoutEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useIsomorphicLayoutEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background Images */}
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

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Image
            src="/logo.png"
            alt="IME FTUI"
            width={150}
            height={150}
            className="mx-auto"
            priority
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4"
        >
          IME <span className="text-primary">FTUI</span> 2026
        </motion.h1>

        {/* Work in Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-secondary">
              Work in Progress
            </span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-foreground text-lg mb-8"
        >
          Website sedang dalam pengembangan. Kunjungi halaman Open Recruitment
          untuk informasi pendaftaran.
        </motion.p>

        {/* CTA Button and Theme Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-3"
        >
          <Link
            href="/recruitment"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors glow"
          >
            Open Recruitment 2026
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
          {mounted && (
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full w-12 h-12 bg-background/50 backdrop-blur-sm border-border hover:bg-background/80"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 text-center text-muted-foreground text-sm"
      >
        © 2026 IME FTUI. All rights reserved.
      </motion.div>
    </main>
  );
}
