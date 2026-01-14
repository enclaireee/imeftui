"use client";

import { memo } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { handleRegistrationClick } from "@/lib/registration";

export const CTASection = memo(function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="glass-card rounded-3xl p-12 sm:p-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Siap Bergabung?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Jangan lewatkan kesempatan untuk menjadi bagian dari IME FTUI
              2026. Daftar sekarang dan mulai perjalananmu!
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-base font-medium rounded-full glow"
              onClick={handleRegistrationClick}
            >
              Daftar Sekarang
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
});
