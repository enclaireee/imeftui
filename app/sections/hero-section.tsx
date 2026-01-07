"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Countdown } from "@/components/countdown";
import { Sparkles, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { RECRUITMENT_DEADLINE } from "@/app/data";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-secondary/30 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
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
            Open Recruitment 2026
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="gradient-text">
            {"Bergabunglah dengan".split("").map((char, index) => (
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
          <br />
          <span className="text-foreground">
            {"IME FTUI".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.05,
                  delay: 1.1 + index * 0.06,
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
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          {"Jadilah bagian dari keluarga besar Ikatan Mahasiswa Elektro. Kembangkan potensimu, bangun koneksi, dan ciptakan dampak nyata."
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

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-base font-medium rounded-full glow"
            >
              Daftar Sekarang
              <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border bg-background/50 hover:bg-background/80 px-8 h-12 text-base font-medium rounded-full"
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
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
  );
}
