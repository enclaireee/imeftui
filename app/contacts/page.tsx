"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { motion } from "motion/react";
import { ArrowUpRight, Copy } from "lucide-react";
import Link from "next/link";
import { narahubung } from "./data";
import { useState } from "react";

function LineContact({ name, lineId }: { name: string; lineId: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(lineId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="group flex items-center justify-between w-full py-3 border-b border-foreground/5 last:border-0 text-left hover:text-primary transition-colors"
    >
      <div>
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground font-mono text-sm ml-3">
          Line: {lineId}
        </span>
      </div>
      {copied ? (
        <span className="text-xs text-green-500">tersalin</span>
      ) : (
        <Copy className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-60 transition-opacity" />
      )}
    </button>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center px-6">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md py-32"
        >
          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Hubungi Kami<span className="text-primary">.</span>
            </h1>
            <p className="text-muted-foreground">
              Kontak kami apabila memiliki pertanyaan lebih lanjut.
            </p>
          </div>

          {/* Main Card */}
          <div className="glass-card rounded-2xl p-6 space-y-6">
            {/* Email */}
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Email
              </p>
              <a
                href="mailto:imeftui@gmail.com"
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
              >
                imeftui@gmail.com
              </a>
            </div>

            <div className="h-px bg-foreground/5" />

            {/* Narahubung */}
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Narahubung
              </p>
              <p className="text-xs text-muted-foreground/70 mb-3">
                Klik untuk salin Line ID
              </p>
              <div>
                {narahubung.map((contact) => (
                  <LineContact
                    key={contact.name}
                    name={contact.name}
                    lineId={contact.line}
                  />
                ))}
              </div>
            </div>

            <div className="h-px bg-foreground/5" />

            {/* Social Links */}
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/imeftui/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Instagram
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/ikatan-mahasiswa-elektro-ftui-ime-ftui/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </main>
  );
}
