"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { Reveal } from "@/components/ui/reveal";
import { ArrowLeft } from "lucide-react";
import { bidangDetails } from "../data";

export default function BidangPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const detail = bidangDetails[slug];

  if (!detail) notFound();

  return (
    <main className="relative min-h-screen flex flex-col items-center px-4 pt-32 pb-20 overflow-hidden bg-[#000044]">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Decorative Elements — Professional, low-opacity implementation */}
      <div className="fixed inset-0 pointer-events-none z-0 hidden md:block select-none" aria-hidden="true">
        <div className="absolute top-[10%] -left-[5%] w-[450px] h-[450px] opacity-[0.07]">
          <Image src="/element1.webp" alt="" fill className="object-contain" sizes="450px" priority />
        </div>
        <div className="absolute top-[30%] -right-[8%] w-[280px] h-[280px] opacity-[0.05]">
          <Image src="/element2.webp" alt="" fill className="object-contain" sizes="280px" />
        </div>
        <div className="absolute top-[55%] -left-[5%] w-[400px] h-[400px] opacity-[0.06]">
          <Image src="/element3.webp" alt="" fill className="object-contain" sizes="400px" />
        </div>
        <div className="absolute top-[75%] -right-[5%] w-[300px] h-[300px] opacity-[0.07]">
          <Image src="/element4.webp" alt="" fill className="object-contain" sizes="300px" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        
        {/* Back Button */}
        <Reveal width="100%" delay={0.05}>
          <div className="w-full mb-8 flex justify-start">
            <Link 
              href="/imehub" 
              className="group flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 text-[#facc15] group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 group-hover:text-white/90">
                Back to ImeHub
              </span>
            </Link>
          </div>
        </Reveal>

        {/* Logo circle */}
        <Reveal width="fit-content" delay={0.1}>
          <div className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full glass-card border-white/10 flex items-center justify-center mb-8 shadow-2xl shadow-black/40">
            <div className="relative w-[100px] h-[100px] sm:w-[130px] sm:h-[130px]">
              <Image
                src={detail.logo}
                alt={detail.title}
                fill
                className="object-contain"
                sizes="130px"
                priority
              />
            </div>
          </div>
        </Reveal>

        {/* Title & Subtitle */}
        <Reveal width="100%" delay={0.2}>
          <h1 className="text-white font-bold text-xl sm:text-2xl text-center mb-2 tracking-tight uppercase">
            {detail.title}
          </h1>
        </Reveal>
        <Reveal width="100%" delay={0.3}>
          <p className="text-white/60 text-sm sm:text-base text-center mb-10 sm:mb-14 max-w-xs mx-auto italic font-medium">
            {detail.subtitle}
          </p>
        </Reveal>

        {/* Section Title */}
        <Reveal width="100%" delay={0.35}>
          <h2 className="text-[11px] font-bold text-center mb-6 text-[#facc15] uppercase tracking-[0.3em]">
            {detail.sectionTitle}
          </h2>
        </Reveal>

        {/* Links */}
        <div className="w-full space-y-4">
          {detail.links.map((link, index) => (
            <Reveal key={index} width="100%" delay={0.4 + index * 0.08}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative h-[56px] rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-active:scale-[0.98] shadow-lg shadow-black/20 flex border border-white/10 group-hover:border-white/20">
                  {/* Left accent block */}
                  <div className="w-[12px] bg-[#facc15]" />
                  {/* Right content */}
                  <div className="flex-1 bg-white flex items-center justify-center pr-[12px]">
                    <span className="text-[#0c1f6e] font-bold text-sm sm:text-base tracking-tight">
                      {link.label}
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
