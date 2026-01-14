"use client";

import { memo, useMemo } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { gallery } from "../data";

// Memoized card component with image and hover overlay
const MarqueeCard = memo(function MarqueeCard({
  item,
}: {
  item: (typeof gallery)[0];
}) {
  return (
    <div className="relative w-64 sm:w-80 h-48 sm:h-56 shrink-0 rounded-2xl overflow-hidden group cursor-pointer">
      {/* Background Image */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 256px, 320px"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
        <span className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
          {item.title}
        </span>
      </div>
    </div>
  );
});

export const GallerySection = memo(function GallerySection() {
  // Memoize duplicated arrays to prevent recreation on each render
  const duplicatedGallery = useMemo(() => [...gallery, ...gallery], []);

  const { duplicatedFirstHalf, duplicatedSecondHalf } = useMemo(() => {
    const firstHalf = gallery.slice(0, Math.ceil(gallery.length / 2));
    const secondHalf = gallery.slice(Math.ceil(gallery.length / 2));
    return {
      duplicatedFirstHalf: [
        ...firstHalf,
        ...firstHalf,
        ...firstHalf,
        ...firstHalf,
      ],
      duplicatedSecondHalf: [
        ...secondHalf,
        ...secondHalf,
        ...secondHalf,
        ...secondHalf,
      ],
    };
  }, []);

  return (
    <section className="py-20 overflow-hidden" id="gallery">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-sm border-primary/30"
          >
            Kegiatan
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Aktivitas Kami
          </h2>
        </motion.div>
      </div>

      {/* Desktop View - CSS animation */}
      <div className="hidden md:block relative">
        <div className="flex gap-4 animate-marquee-desktop w-max">
          {duplicatedGallery.map((item, index) => (
            <MarqueeCard key={`desktop-${item.id}-${index}`} item={item} />
          ))}
        </div>
      </div>

      {/* Mobile View - CSS animations */}
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
});
