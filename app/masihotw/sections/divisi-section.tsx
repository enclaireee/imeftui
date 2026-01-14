"use client";

import { memo, useState, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Sparkles, CheckCircle2, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { divisi, Divisi, REGISTRATION_OPEN } from "../data";
import { toast } from "sonner";

const DivisiCard = memo(function DivisiCard({
  div,
  index,
  onClick,
}: {
  div: Divisi;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
      className="glass-card glass-card-hover rounded-xl p-3 sm:p-4 cursor-pointer group relative z-10"
    >
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center mb-2 sm:mb-3 overflow-hidden">
        <Image
          src={div.logoDark}
          alt={div.abbr}
          width={56}
          height={56}
          className="hidden dark:block object-contain w-full h-full"
        />
        <Image
          src={div.logoLight}
          alt={div.abbr}
          width={56}
          height={56}
          className="block dark:hidden object-contain w-full h-full"
        />
      </div>
      <h3 className="font-semibold text-foreground text-xs sm:text-sm mb-0.5 sm:mb-1">
        {div.abbr}
      </h3>
      <p className="text-[10px] sm:text-xs text-muted-foreground line-clamp-2">
        {div.name}
      </p>
    </motion.div>
  );
});

export const DivisiSection = memo(function DivisiSection() {
  const [selectedDivisi, setSelectedDivisi] = useState<Divisi | null>(null);

  // Memoized callback to prevent re-renders
  const handleClose = useCallback(() => setSelectedDivisi(null), []);
  const handleSelect = useCallback((div: Divisi) => setSelectedDivisi(div), []);

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6" id="divisi">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-10 sm:mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-sm border-primary/30"
          >
            12 Bidang
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Temukan Tempatmu
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Pilih bidang yang sesuai dengan minat dan bakatmu
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {divisi.map((div, index) => (
            <DivisiCard
              key={div.id}
              div={div}
              index={index}
              onClick={() => handleSelect(div)}
            />
          ))}
        </div>
      </div>

      {/* Optimized Modal - Simple fade + scale instead of complex layoutId */}
      <AnimatePresence>
        {selectedDivisi && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={handleClose}
            />

            {/* Modal Container */}
            <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="w-full max-w-[calc(100%-2rem)] sm:max-w-lg max-h-[90vh] bg-background rounded-2xl border shadow-2xl overflow-hidden pointer-events-auto flex flex-col relative"
              >
                <VisuallyHidden>
                  <h2>{selectedDivisi.name}</h2>
                </VisuallyHidden>

                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors shadow-lg"
                >
                  <X className="w-4 h-4 text-foreground" />
                </button>

                <div className="overflow-y-auto flex-1 p-6">
                  {/* Header with Logo and Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-foreground/5 flex items-center justify-center overflow-hidden shrink-0">
                      <Image
                        src={selectedDivisi.logoDark}
                        alt={selectedDivisi.abbr}
                        width={80}
                        height={80}
                        className="hidden dark:block object-contain w-full h-full p-2"
                      />
                      <Image
                        src={selectedDivisi.logoLight}
                        alt={selectedDivisi.abbr}
                        width={80}
                        height={80}
                        className="block dark:hidden object-contain w-full h-full p-2"
                      />
                    </div>
                    <div className="flex-1 min-w-0 pt-1">
                      <h3 className="font-bold text-xl sm:text-2xl text-foreground">
                        {selectedDivisi.abbr}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {selectedDivisi.name}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-border mb-5" />

                  {/* Description */}
                  <div className="mb-5">
                    <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                      Tentang Bidang
                    </h4>
                    <p className="text-foreground/90 text-sm leading-relaxed">
                      {selectedDivisi.fullDescription}
                    </p>
                  </div>

                  {/* Programs and Added Values */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                        Program Kerja
                      </h4>
                      <div className="space-y-2">
                        {selectedDivisi.programs.map((program, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2.5 text-sm text-foreground/80"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{program}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                        Added Value
                      </h4>
                      <div className="space-y-2">
                        {selectedDivisi.addedValues.map((value, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2.5 text-sm text-foreground/80"
                          >
                            <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Registration CTA */}
                  <div className="space-y-3">
                    {REGISTRATION_OPEN ? (
                      <Button
                        className="w-full rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                        onClick={() => {
                          if (!selectedDivisi.tugasUrl) {
                            toast("Coming Soon", {
                              description: "Tugas bidang belum tersedia.",
                              icon: (
                                <Sparkles className="w-5 h-5 text-yellow-400" />
                              ),
                            });
                            return;
                          }
                          window.open(
                            selectedDivisi.tugasUrl,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }}
                      >
                        Tugas Bidang
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    ) : (
                      <Button
                        className="w-full rounded-full bg-secondary/80 text-secondary-foreground cursor-default"
                        disabled
                      >
                        Coming Soon
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      className="w-full rounded-full glass-card glass-card-hover"
                      onClick={handleClose}
                    >
                      Tutup
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
});
