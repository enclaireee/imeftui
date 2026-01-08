"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Sparkles, CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { divisi, Divisi } from "../data";

export function DivisiSection() {
  const [selectedDivisi, setSelectedDivisi] = useState<Divisi | null>(null);

  // Function to clear selection
  const handleClose = () => setSelectedDivisi(null);

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6" id="divisi">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-sm border-primary/30 bg-primary/5"
          >
            12 Divisi
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Temukan Tempatmu
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Pilih divisi yang sesuai dengan minat dan bakatmu
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {divisi.map((div, index) => (
            <motion.div
              layoutId={`card-${div.id}`}
              key={div.id}
              onClick={() => setSelectedDivisi(div)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass-card glass-card-hover rounded-xl p-3 sm:p-4 cursor-pointer group relative z-10"
            >
              <motion.div
                layoutId={`icon-container-${div.id}`}
                layout="position"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-foreground/5 flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-foreground/10 transition-colors"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div.icon className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
              </motion.div>
              <motion.h3
                layoutId={`abbr-${div.id}`}
                layout="position"
                className="font-semibold text-foreground text-xs sm:text-sm mb-0.5 sm:mb-1"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {div.abbr}
              </motion.h3>
              <motion.p
                layoutId={`name-${div.id}`}
                layout="position"
                className="text-[10px] sm:text-xs text-muted-foreground line-clamp-2"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {div.name}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Shared Element Transition Modal */}
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

            {/* Modal Container - Using Flex centering instead of Transforms */}
            <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4 sm:p-6">
              <motion.div
                layoutId={`card-${selectedDivisi.id}`}
                className="w-full max-w-[calc(100%-2rem)] sm:max-w-lg max-h-[90vh] bg-background rounded-2xl border shadow-2xl overflow-hidden pointer-events-auto flex flex-col relative"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <VisuallyHidden>
                  <h2>{selectedDivisi.name}</h2>
                </VisuallyHidden>

                {/* Close Button */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={handleClose}
                  className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors shadow-lg"
                >
                  <X className="w-4 h-4 text-foreground" />
                </motion.button>

                <div className="overflow-y-auto flex-1">
                  {/* Header Image Area */}
                  <div
                    className={`h-32 sm:h-40 bg-gradient-to-br ${selectedDivisi.color} relative overflow-hidden shrink-0`}
                  >
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

                    <div className="absolute bottom-4 left-6 flex items-center gap-3">
                      <motion.div
                        layoutId={`icon-container-${selectedDivisi.id}`}
                        layout="position"
                        className="w-12 h-12 rounded-xl bg-background/90 backdrop-blur flex items-center justify-center shadow-lg"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      >
                        <selectedDivisi.icon className="w-6 h-6 text-foreground" />
                      </motion.div>
                      <div>
                        <motion.div
                          layoutId={`abbr-${selectedDivisi.id}`}
                          layout="position"
                          className="font-bold text-lg text-foreground drop-shadow-sm"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        >
                          {selectedDivisi.abbr}
                        </motion.div>
                        <motion.div
                          layoutId={`name-${selectedDivisi.id}`}
                          layout="position"
                          className="text-sm text-foreground/80 drop-shadow-sm"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        >
                          {selectedDivisi.name}
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 space-y-5">
                    {/* Description */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        Tentang Divisi
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {selectedDivisi.fullDescription}
                      </p>
                    </motion.div>

                    {/* Programs and Added Values */}
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                      >
                        <h4 className="text-sm font-semibold text-foreground mb-2">
                          Program Kerja
                        </h4>
                        <div className="space-y-2">
                          {selectedDivisi.programs.map((program, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-sm text-muted-foreground bg-foreground/5 rounded-lg px-3 py-2"
                            >
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="truncate">{program}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                      >
                        <h4 className="text-sm font-semibold text-foreground mb-2">
                          Added Value
                        </h4>
                        <div className="space-y-2">
                          {selectedDivisi.addedValues.map((value, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-sm text-muted-foreground bg-foreground/5 rounded-lg px-3 py-2"
                            >
                              <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="truncate">{value}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* CTA */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                      className="pt-2"
                    >
                      <Button
                        variant="outline"
                        className="w-full rounded-full"
                        onClick={handleClose}
                      >
                        Tutup
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
