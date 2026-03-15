"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";

const LOGOS = [
  { src: "/logoAkpro.webp",   label: "Akpro", desc: "Akademik dan Profesi" },
  { src: "/logoKastrat.webp", label: "Kastrat", desc: "Kajian dan Aksi Strategis" },
  { src: "/logoKema.webp",    label: "Kema", desc: "Kesejahteraan Mahasiswa" },
  { src: "/logoKesma.webp",   label: "Kesma", desc: "Kesenian Mahasiswa" },
  { src: "/logoKestari.webp", label: "Kestari", desc: "Administrasi dan Kesekretariatan" },
  { src: "/logoKomin.png",   label: "Kominfo", desc: "Komunikasi dan Informasi" },
  { src: "/logoLitbang.webp", label: "Litbang", desc: "Penelitian dan Pengembangan" },
  { src: "/logoPengmas.webp", label: "Pengmas", desc: "Pengabdian Masyarakat" },
  { src: "/logoPiptek.webp",  label: "Piptek", desc: "Pengembangan Ilmu Pengetahuan dan Teknologi" },
  { src: "/logoSiwa.webp",    label: "Siwa", desc: "Seni dan Olahraga Mahasiswa" },
  { src: "/logoWirus.webp",   label: "Wirus", desc: "Wirausaha" },
];

// — Design decision: The header block uses a wider stagger (0.2s) to
//   give each text layer its own moment. This creates a "title card" feel —
//   the italic subtitle appears first, then the heading and its decorative
//   divider unfold together. It mirrors the hero's cascade rhythm.
const aboutHeaderVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// — Design decision: Text elements rise and blur-dissolve — same DNA as the
//   hero section. This isn't laziness; it's consistency. A user scrolling
//   from hero → bar → about should feel the same motion grammar, just with
//   different choreography per section.
const aboutTextVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 22,
      mass: 1,
    },
  },
};

// — Design decision: The divider line scales from center outward (scaleX: 0 → 1)
//   like a curtain opening to present the heading. This is the one horizontal
//   motion in the page — but it's justified because it's a horizontal element.
//   The line "draws" itself, which gives the heading proper framing.
const aboutDividerVariants: Variants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 20,
      mass: 1,
    },
  },
};





























// — Design decision: The dots on either side of the heading pop in
//   with a tiny scale — they're punctuation marks in the motion sequence.
//   Quick and snappy (stiffness 120) but no overshoot (damping 15).
const aboutDotVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
    },
  },
};

// — Design decision: The logo track container staggers children left-to-right
//   with 0.08s intervals. 11 logos × 0.08 = ~0.88s total cascade. This is
//   tight enough to feel like a "roll call" but loose enough that each logo
//   gets its own beat. It mirrors the bar section's wave rhythm at a different
//   scale.
const aboutLogosContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// — Design decision: Each logo rises from a modest y: 25 with opacity.
//   No blur here — logos need to be immediately sharp when they appear
//   since they're brand marks. The shorter travel distance keeps the
//   cascade feeling light and rhythmic rather than heavy.
const aboutLogoItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 75,
      damping: 20,
      mass: 0.8,
    },
  },
};

export function AboutBidangSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(20);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);
  const rafId = useRef<number>(0);
  const shouldReduceMotion = useReducedMotion();

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setScrollProgress(max > 0 ? el.scrollLeft / max : 0);
    setThumbWidth(Math.max(10, (el.clientWidth / el.scrollWidth) * 100));
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const handleScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(updateScrollState);
    };

    rafId.current = requestAnimationFrame(updateScrollState);
    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateScrollState, { passive: true });
    return () => {
      cancelAnimationFrame(rafId.current);
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const handleTrackDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const el = trackRef.current;
    if (!el) return;

    const track = e.currentTarget;
    const trackRect = track.getBoundingClientRect();
    const tw = (thumbWidth / 100) * trackRect.width;
    const maxLeft = trackRect.width - tw;

    const move = (moveE: MouseEvent) => {
      const x = moveE.clientX - trackRect.left - tw / 2;
      const clamped = Math.max(0, Math.min(x, maxLeft));
      el.scrollLeft = (clamped / maxLeft) * (el.scrollWidth - el.clientWidth);
    };

    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);

    // Trigger initial move immediately
    move(e as unknown as MouseEvent);
  };

  const handleMouseDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;

    dragStartX.current = e.clientX;
    dragStartScroll.current = trackRef.current.scrollLeft;

    // Add grabbing cursor to body while dragging
    document.body.style.cursor = "grabbing";

    const move = (moveE: MouseEvent) => {
      if (!trackRef.current) return;
      const dx = moveE.clientX - dragStartX.current;
      trackRef.current.scrollLeft = dragStartScroll.current - dx;
    };

    const up = () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseup", up);
  };

  const thumbLeft = scrollProgress * (100 - thumbWidth);

  return (
    <section id="about" className="bg-background py-24 overflow-hidden relative z-10 min-h-[600px] flex flex-col justify-center">

      <motion.div
        className="flex flex-col items-center mb-16 px-6 relative z-20"
        variants={aboutHeaderVariants}
        initial={shouldReduceMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.p
          className="text-secondary italic text-xl mb-2 font-medium"
          variants={aboutTextVariants}
        >
          Get to know more
        </motion.p>

        <motion.div
          className="flex items-center gap-3 w-full max-w-3xl mx-auto justify-center origin-center"
          variants={aboutDividerVariants}
        >
          <div className="flex-1 h-[2px] bg-white/60" />
          <motion.div
            className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            variants={aboutDotVariants}
          />
          <motion.h2
            className="text-foreground text-4xl sm:text-5xl font-bold tracking-tight px-4 w-auto flex-none"
            variants={aboutTextVariants}
          >
            About Us
          </motion.h2>
          <motion.div
            className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            variants={aboutDotVariants}
          />
          <div className="flex-1 h-[2px] bg-white/60" />
        </motion.div>
      </motion.div>

      <div className="w-full relative">
        <motion.div
          ref={trackRef}
          onMouseDown={handleMouseDrag}
          className="flex gap-4 sm:gap-6 px-6 sm:px-12 md:px-24 overflow-x-auto scrollbar-none cursor-grab active:cursor-grabbing select-none pb-8 relative z-20 will-change-scroll"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          variants={aboutLogosContainerVariants}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {LOGOS.map((logo, i) => (
            <motion.div
              key={i}
              className="flex-none flex flex-col items-center gap-3 w-[120px] md:w-[150px]"
              variants={aboutLogoItemVariants}
            >
              <div
                className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center transition-transform duration-300 hover:-translate-y-2 hover:scale-110 relative group"
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32 pointer-events-none">
                  <Image
                    src={logo.src}
                    alt={logo.label}
                    fill
                    draggable={false}
                    className="object-contain drop-shadow-lg"
                    sizes="(max-width: 768px) 96px, 128px"
                  />
                </div>
              </div>

              <div className="text-center">
                <span className="text-foreground font-bold uppercase tracking-widest text-lg md:text-xl block">
                  {logo.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-3xl w-full mx-auto px-12 mt-4 relative z-20">
        <div
          className="relative h-1.5 rounded-full bg-white/10 cursor-pointer overflow-hidden backdrop-blur-sm"
          onMouseDown={handleTrackDrag}
        >
          <div
            className="absolute top-0 h-full rounded-full bg-white/90 shadow-sm cursor-grab active:cursor-grabbing hover:bg-white transition-colors"
            style={{ left: `${thumbLeft}%`, width: `${thumbWidth}%` }}
          />
        </div>
      </div>

    </section>
  );
}
