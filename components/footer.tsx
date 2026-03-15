import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Youtube,
} from "lucide-react";

// Custom SVGs for X and TikTok since they may not exist natively in all Lucide versions
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const SOCIAL_LINKS = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@imeftui3985",
    Icon: <Youtube className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/imeftui/",
    Icon: <Instagram className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/ikatan-mahasiswa-elektro-ftui-ime-ftui/",
    Icon: <Linkedin className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/IMEFTUI",
    Icon: <XIcon />,
  },
];

export const Footer = memo(function Footer() {
  return (
    <footer className="w-full bg-background pt-16 md:pt-20 pb-0 px-0 relative z-20">

      {/* Main Container */}
      <div className="relative w-full bg-[#262f68] rounded-t-[1.5rem] md:rounded-t-[3rem] px-4 py-8 md:px-16 md:py-16 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] overflow-visible">

        {/* Overlapping Top Logo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[50%] z-30">
          <div className="relative w-20 h-20 md:w-48 md:h-48">
            <Image
              src="/logo.png"
              alt="Wolf Logo"
              fill
              className="object-contain drop-shadow-xl md:drop-shadow-2xl"
              sizes="(max-width: 768px) 80px, 192px"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-12 text-white/90 pt-10 md:pt-28 isolate">

          {/* Left Column: Tautan (Hidden on mobile for compactness) */}
          <div className="hidden md:flex flex-col gap-3 text-left">
            <h3 className="font-bold text-white text-base tracking-wide mb-1">Tautan</h3>
            <Link href="#about" className="hover:text-white transition-colors text-base">About Us</Link>
            <Link href="/dashboard" className="hover:text-white transition-colors text-base">Dashboard</Link>
            <Link href="/imehub" className="hover:text-white transition-colors text-base">ImeHub</Link>
            <Link href="/contact" className="hover:text-white transition-colors text-base">Contact</Link>
          </div>

          {/* Center Column: IME FTUI */}
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl md:text-5xl font-black italic tracking-tight text-white mb-0.5 md:mb-1">
              IME FTUI 2026
            </h2>
            <p className="font-bold text-xs md:text-lg text-white/80 md:text-white mb-4 md:mb-6">
              #MenjejakAsa
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-3 md:gap-4">
              {SOCIAL_LINKS.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="bg-white text-[#262f68] w-8 h-8 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 border-transparent hover:border-white hover:bg-[#1a2359] hover:text-white hover:scale-110 hover:-translate-y-1 hover:shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300"
                >
                  <div className="scale-[0.6] md:scale-100">{item.Icon}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Sekretariat */}
          <div className="flex flex-col gap-2 md:gap-3 items-center md:items-end text-center md:text-right">
            <h3 className="hidden md:block font-bold text-white text-base tracking-wide uppercase mb-1">
              Sekretariat
            </h3>

            <div className="flex items-start md:items-start gap-2 md:gap-3 md:flex-row-reverse max-w-[260px] md:max-w-none">
              <MapPin className="w-3.5 h-3.5 md:w-5 md:h-5 shrink-0 mt-0.5 md:mt-1 text-white/60 md:text-white/70" />
              <p className="text-[11px] md:text-sm leading-snug text-white/70 md:text-white/80">
                Gedung Student Center Lt. 2<br />
                Fakultas Teknik UI, Depok
              </p>
            </div>

            <div className="flex items-center gap-2 md:gap-3 md:flex-row-reverse mt-1 md:mt-0">
              <Mail className="w-3.5 h-3.5 md:w-5 md:h-5 shrink-0 text-white/60 md:text-white/70" />
              <a href="mailto:imeftui@gmail.com" className="text-[11px] md:text-sm text-white/70 md:text-white hover:text-white transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white">
                imeftui@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Made by text */}
        <div className="mt-6 md:mt-12 text-center border-t border-white/10 pt-4 md:pt-6">
          <p className="text-white/40 md:text-white/60 italic text-[10px] md:text-xs">
            Made by IME FTUI 2026
          </p>
        </div>

      </div>
    </footer>
  );
});
