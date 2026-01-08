"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { gallery } from "../data";

const MarqueeCard = ({ item }: { item: (typeof gallery)[0] }) => (
  <div className="glass-card glass-card-hover rounded-2xl w-64 sm:w-80 h-48 sm:h-56 shrink-0 relative overflow-hidden group cursor-pointer">
    <div className="absolute inset-0 bg-linear-to-br from-foreground/5 to-foreground/10" />
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
      <span className="text-xs text-muted-foreground mb-1">
        {item.category}
      </span>
      <span className="font-medium text-foreground text-center text-lg">
        {item.title}
      </span>
    </div>
  </div>
);

export function GallerySection() {
  // Double the gallery items for seamless infinite scroll
  const duplicatedGallery = [...gallery, ...gallery];

  // Split gallery for mobile rows
  const firstHalf = gallery.slice(0, Math.ceil(gallery.length / 2));
  const secondHalf = gallery.slice(Math.ceil(gallery.length / 2));
  const duplicatedFirstHalf = [
    ...firstHalf,
    ...firstHalf,
    ...firstHalf,
    ...firstHalf,
  ];
  const duplicatedSecondHalf = [
    ...secondHalf,
    ...secondHalf,
    ...secondHalf,
    ...secondHalf,
  ];

  return (
    <section className="py-20 overflow-hidden" id="gallery">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-sm border-primary/30 bg-primary/5"
          >
            Kegiatan
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Aktivitas Kami
          </h2>
        </motion.div>
      </div>

      {/* Desktop View - Single Row */}
      <div className="hidden md:block relative">
        <motion.div
          className="flex gap-4"
          animate={{
            x: [0, -50 * gallery.length * 4],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedGallery.map((item, index) => (
            <MarqueeCard key={`desktop-${item.id}-${index}`} item={item} />
          ))}
        </motion.div>
      </div>

      <div className="md:hidden space-y-4">
        <div className="relative overflow-hidden">
          <div className="flex gap-4 animate-marquee pause-on-hover w-max">
            {duplicatedFirstHalf.map((item, index) => (
              <MarqueeCard key={`mobile-1-${item.id}-${index}`} item={item} />
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-4 animate-marquee-reverse pause-on-hover w-max">
            {duplicatedSecondHalf.map((item, index) => (
              <MarqueeCard key={`mobile-2-${item.id}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
