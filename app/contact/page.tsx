"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { Reveal } from "@/components/ui/reveal";
import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Copy,
  Check,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { useState, useCallback } from "react";
import { toast } from "sonner";

/* ─── DATA ──────────────────────────────────────────────────────────── */
const SOCIALS = [
  {
    name: "Instagram",
    handle: "@imeftui",
    href: "https://www.instagram.com/imeftui/",
    Icon: Instagram,
    color: "#E1306C",
  },
  {
    name: "LinkedIn",
    handle: "IME FTUI",
    href: "https://www.linkedin.com/company/ikatan-mahasiswa-elektro-ftui-ime-ftui/",
    Icon: Linkedin,
    color: "#0A66C2",
  },
  {
    name: "Email",
    handle: "imeftui@gmail.com",
    href: "mailto:imeftui@gmail.com",
    Icon: Mail,
    color: "#facc15",
    copyValue: "imeftui@gmail.com",
  },
];

const CONTACT_PERSONS = [
  {
    name: "Grace",
    phone: "087771235351",
    id: "graciayohan",
    role: "Vice Head of Public Relations",
  },
  {
    name: "Diandra",
    phone: "085959003242",
    id: "diandra.pramesti.10d",
    role: "Expert Staff of Public Relations",
  },
];

/* ─── LUXURY TITLE ANIMATION ───────────────────────────────────────── */
const titleText = "Collaborate with Us.";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.2,
    },
  },
};

const letterVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 15, 
    rotateX: -45,
    filter: "blur(4px)" 
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* ─── COMPONENTS ────────────────────────────────────────────────────── */
function CopyButton({
  value,
  label,
  icon: IconComponent,
}: {
  value: string;
  label: string;
  icon: React.ElementType;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast.success(`Copied ${label}`, {
        icon: <Check className="w-4 h-4" />,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      toast.success(`Copied ${label}`);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [value, label]);

  return (
    <button
      onClick={handleCopy}
      className="group/btn flex items-center justify-between w-full px-5 py-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <IconComponent className="w-3.5 h-3.5 text-white/30 group-hover/btn:text-[#facc15] transition-colors" />
        <span className="text-xs text-white/50 group-hover/btn:text-white/80 transition-colors font-medium tracking-tight">
          {value}
        </span>
      </div>
      <div className="flex items-center justify-center w-5 h-5 text-white/10 group-hover/btn:text-white/40">
        {copied ? (
          <Check className="w-3.5 h-3.5 text-[#facc15]" />
        ) : (
          <Copy className="w-3 h-3" />
        )}
      </div>
    </button>
  );
}

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#000044] text-white selection:bg-[#ffe500] selection:text-[#000044] font-sans overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#000044]/50 to-[#000044] pointer-events-none" />

      {/* Decorative Elements — Static, low-opacity */}
      <div className="fixed inset-0 pointer-events-none z-0 hidden md:block select-none" aria-hidden="true">
        <div className="absolute top-[10%] -left-[5%] w-[450px] h-[450px] opacity-[0.1]">
          <Image src="/element1.webp" alt="" fill className="object-contain" sizes="450px" priority />
        </div>
        <div className="absolute top-[40%] -right-[5%] w-[380px] h-[380px] opacity-[0.08]">
          <Image src="/element2.webp" alt="" fill className="object-contain" sizes="380px" />
        </div>
        <div className="absolute bottom-[10%] left-[10%] w-[420px] h-[420px] opacity-[0.09]">
          <Image src="/element3.webp" alt="" fill className="object-contain" sizes="420px" />
        </div>
        <div className="absolute bottom-[20%] -right-[2%] w-[320px] h-[320px] opacity-[0.1]">
          <Image src="/element4.webp" alt="" fill className="object-contain" sizes="320px" />
        </div>
      </div>

      {/* Background Ambient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0 opacity-50" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none z-0 opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-48 pb-32">

        {/* Header Section */}
        <div className="max-w-5xl mb-32">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card border-white/10"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-[#facc15] shadow-[0_0_8px_#facc15]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#facc15]">
                Connection Point
              </span>
            </motion.div>

            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[0.95] text-white perspective-1000 whitespace-nowrap"
            >
              {titleText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block"
                  style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
              className="text-white/40 text-xl sm:text-2xl max-w-2xl leading-relaxed pt-4 font-light"
            >
              Reach out through our official channels or connect with our specialized representatives directly.
            </motion.p>
          </div>
        </div>

        {/* Liquid Glass Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Section 1: Official Channels */}
          <div className="lg:col-span-5">
            <Reveal width="100%" delay={0.4} className="h-full">
              <div className="glass-card liquid-glass rounded-3xl p-8 lg:p-10 border-white/10 h-full flex flex-col">
                <div className="space-y-2 mb-10">
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#facc15]">
                    Our Platforms
                  </h2>
                  <p className="text-sm text-white/30 font-medium">Direct links to our official platforms.</p>
                </div>

                <div className="grid gap-4 mt-auto">
                  {SOCIALS.map((social, index) => (
                    <Reveal key={social.name} width="100%" delay={0.5 + index * 0.1}>
                      <a
                        href={social.href}
                        target={social.name !== "Email" ? "_blank" : undefined}
                        rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                        className="group flex items-center justify-between p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500"
                      >
                        <div className="flex items-center gap-5">
                          <div className="flex items-center justify-center w-12 h-12 rounded-2xl glass-card border-white/10 text-white/40 group-hover:border-[#facc15] group-hover:text-[#facc15] group-hover:scale-110 transition-all duration-500">
                            <social.Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-bold text-xs tracking-wider uppercase">{social.name}</p>
                            <p className="text-[10px] text-white/30 font-medium">{social.handle}</p>
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#facc15]" />
                        </div>
                      </a>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Section 2: Representatives */}
          <div className="lg:col-span-7">
            <Reveal width="100%" delay={0.6} className="h-full">
              <div className="glass-card liquid-glass rounded-3xl p-8 lg:p-10 border-white/10 h-full flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
                  <div className="space-y-2">
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#facc15]">
                      Contact Person
                    </h2>
                    <p className="text-sm text-white/30 font-medium">Reach us out through these contact persons</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 mt-auto">
                  {CONTACT_PERSONS.map((person, index) => (
                    <div key={person.name} className="group space-y-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500">
                      <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-2xl glass-card border-white/10 flex items-center justify-center text-xs font-bold tracking-widest group-hover:border-[#facc15]/50 group-hover:text-[#facc15] transition-all duration-500">
                          0{index + 1}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg tracking-tight mb-1">{person.name}</h3>
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#facc15] opacity-70">
                            {person.role}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3 pt-2">
                        <CopyButton
                          value={person.phone}
                          label="phone"
                          icon={Phone}
                        />
                        <CopyButton
                          value={person.id}
                          label="Instagram ID"
                          icon={Instagram}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}
