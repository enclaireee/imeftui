"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { bidangList } from "./data";

export default function ImeHubPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center px-4 pt-32 pb-20 overflow-hidden bg-[#000044]">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Decorative Elements — Professional, low-opacity implementation */}
      <div className="fixed inset-0 pointer-events-none z-0 hidden md:block select-none" aria-hidden="true">
        <div className="absolute top-[10%] -left-[5%] w-[450px] h-[450px] opacity-[0.07]">
          <Image src="/element1.webp" alt="" fill className="object-contain" sizes="450px" priority />
        </div>
        <div className="absolute top-[40%] -right-[5%] w-[380px] h-[380px] opacity-[0.05]">
          <Image src="/element2.webp" alt="" fill className="object-contain" sizes="380px" />
        </div>
        <div className="absolute bottom-[10%] left-[10%] w-[420px] h-[420px] opacity-[0.06]">
          <Image src="/element3.webp" alt="" fill className="object-contain" sizes="420px" />
        </div>
        <div className="absolute bottom-[20%] -right-[2%] w-[320px] h-[320px] opacity-[0.07]">
          <Image src="/element4.webp" alt="" fill className="object-contain" sizes="320px" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        {/* Logo */}
        <Reveal width="100%" delay={0.1}>
          <div className="flex flex-col items-center mb-12 sm:mb-16">
            <Image
              src="/IMEHUB.svg"
              alt="ImeHub"
              width={280}
              height={88}
              className="object-contain w-[220px] sm:w-[280px]"
              priority
            />
            <p className="text-[#facc15] italic text-sm sm:text-base mt-2 tracking-wide">
              All doors lead here.
            </p>
          </div>
        </Reveal>

        {/* Bidang Cards */}
        <div className="w-full space-y-5">
          {bidangList.map((bidang, index) => (
            <Reveal key={index} width="100%" delay={0.15 + index * 0.1}>
              <Link 
                href={bidang.externalUrl || `/imehub/${bidang.slug}`} 
                target={bidang.externalUrl ? "_blank" : undefined}
                rel={bidang.externalUrl ? "noreferrer noopener" : undefined}
                className="block group"
              >
                <div className="relative rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02] group-active:scale-[0.98] shadow-lg shadow-black/20 border border-white/5">
                  <div className="relative w-full min-h-[110px] sm:min-h-[120px]">
                    {/* Background & Text Layer */}
                    <div className="flex flex-col w-full h-full min-h-[110px] sm:min-h-[120px]">
                      {/* Title area — solid navy */}
                      <div className="bg-[#0c1f6e] py-3 flex items-center pl-4 sm:pl-6 pr-[45%]">
                        <h2 className="text-white font-bold text-[13px] sm:text-[15px] leading-snug tracking-tight">
                          {bidang.title}
                        </h2>
                      </div>
                      {/* Description area — clean white */}
                      <div className="bg-white flex-1 flex flex-col justify-center pl-4 sm:pl-6 pr-[45%] py-3">
                        <p className="text-[#0c1f6e] text-xs sm:text-sm font-bold">
                          {bidang.description}
                        </p>
                      </div>
                    </div>

                    {/* Right: image wrapper with oval left frame */}
                    <div 
                      className="absolute right-0 top-0 bottom-0 w-[42%] overflow-hidden shadow-[-4px_0_12px_rgba(0,0,0,0.15)] pointer-events-none"
                      style={{ borderTopLeftRadius: "25% 50%", borderBottomLeftRadius: "25% 50%" }}
                    >
                      <Image
                        src={bidang.image}
                        alt={bidang.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 45vw, 180px"
                      />
                      {/* Right-to-left yellow to transparent gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-l from-[#facc15]/80 to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
