"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Construction } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export default function WIPPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      <div className="relative z-10 max-w-md mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <Image
            src="/logoNama.webp"
            alt="IME FTUI"
            width={150}
            height={75}
            className="object-contain"
          />

          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Construction className="w-8 h-8 text-primary" />
          </div>

          <div className="space-y-3">
            <Reveal width="100%" delay={0.25}>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                Sedang Dalam Pengembangan
              </h1>
            </Reveal>
            <Reveal width="100%" delay={0.4}>
              <p className="text-muted-foreground text-sm sm:text-base">
                Kami sedang mempersiapkan sesuatu yang istimewa untuk kamu.
                Nantikan informasi lebih lanjut!
              </p>
            </Reveal>
          </div>

          <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Coming Soon
            </span>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
