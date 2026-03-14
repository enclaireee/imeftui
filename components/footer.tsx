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
    <footer className="w-full bg-background pt-20 pb-0 px-0 relative z-20">

      {/* Main Container */}
      <div className="relative w-full bg-[#262f68] rounded-t-[2rem] md:rounded-t-[3rem] px-6 py-12 md:px-16 md:py-16 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] overflow-visible">

        {/* Overlapping Top Logo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[50%] z-30">
          <div className="relative w-32 h-32 md:w-48 md:h-48">
            <Image
              src="/logo.png"
              alt="Wolf Logo"
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 128px, 192px"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-white/90">

          {/* Left Column: Tautan */}
          <div className="flex flex-col gap-3 text-center md:text-left pt-6 md:pt-0">
            <h3 className="font-bold text-white text-base tracking-wide mb-1">Tautan</h3>
            <Link href="#about" className="hover:text-white transition-colors text-base">About Us</Link>
            <Link href="/dashboard" className="hover:text-white transition-colors text-base">Dashboard</Link>
            <Link href="/imehub" className="hover:text-white transition-colors text-base">ImeHub</Link>
            <Link href="/contact" className="hover:text-white transition-colors text-base">Contact</Link>
          </div>

          {/* Center Column: IME FTUI */}
          <div className="flex flex-col items-center justify-center text-center mt-6 md:mt-0">
            <h2 className="text-3xl md:text-5xl font-black italic tracking-tight text-white mb-1">
              IME FTUI 2026
            </h2>
            <p className="font-bold text-base md:text-lg text-white mb-6">
              #MenjejakAsa
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 md:gap-4">
              {SOCIAL_LINKS.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="bg-white text-[#262f68] w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 border-transparent hover:border-white hover:bg-[#1a2359] hover:text-white hover:scale-110 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-all duration-300"
                >
                  {item.Icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Sekretariat */}
          <div className="flex flex-col gap-4 text-center md:text-left md:items-start items-center pt-6 md:pt-0">
            <h3 className="font-bold text-white text-base tracking-wide uppercase">
              SEKRETARIAT
            </h3>

            <div className="flex items-start gap-3">
              <div className="bg-white p-2 rounded-full text-[#262f68] shrink-0">
                <MapPin className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <p className="text-sm leading-snug">
                Sekretariat IME FTUI<br />
                Gedung Student Center Lt. 2<br />
                Fakultas Teknik UI, Depok 16424
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-transparent border-2 border-white p-1 rounded min-w-8 flex justify-center text-white shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <a href="mailto:imeftui@gmail.com" className="text-sm hover:text-white transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-white">
                imeftui@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Made by text */}
        <div className="mt-12 text-center border-t border-white/10 pt-6">
          <p className="text-white/60 italic text-xs">
            Made by IME FTUI
          </p>
        </div>

      </div>
    </footer>
  );
});
