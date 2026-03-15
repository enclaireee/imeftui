"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
}

export const Reveal = ({ children, width = "fit-content", className, delay = 0.25 }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      slideControls.start("slideOut");
      mainControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  // Check if height should be full
  const isFullHeight = className?.includes("h-full");

  return (
    <div 
      ref={ref} 
      style={{ 
        position: "relative", 
        width, 
        overflow: "hidden",
        height: isFullHeight ? "100%" : "auto" 
      }} 
      className={className}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ 
          duration: 0.6, 
          delay: delay,
          type: "spring",
          stiffness: 100, 
          damping: 20
        }}
        style={{ 
          willChange: "transform, opacity, filter",
          height: isFullHeight ? "100%" : "auto"
        }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { x: "0%" },
          slideOut: { x: "105%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeInOut", delay: delay - 0.25 > 0 ? delay - 0.25 : 0 }}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 20,
          willChange: "transform",
        }}
        className="bg-secondary rounded-xl"
      />
    </div>
  );
};
