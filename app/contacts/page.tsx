"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { motion } from "motion/react";
import { ArrowUpRight, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background bg-noise">
      <Header />

      <div className="bg-gradient-content bg-noise relative min-h-screen">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[15%] right-[-10%] w-[600px] h-[600px] bg-primary/25 rounded-full blur-[100px] opacity-40 dark:opacity-20" />
          <div className="absolute bottom-[20%] left-[-15%] w-[500px] h-[500px] bg-secondary/25 rounded-full blur-[100px] opacity-30 dark:opacity-15" />

          <div className="absolute top-32 -right-8 md:right-[5%] opacity-50">
            <Image
              src="/element3.webp"
              alt=""
              width={200}
              height={200}
              loading="lazy"
              className="w-32 md:w-48 object-contain -rotate-12"
            />
          </div>
          <div className="absolute top-[45%] -left-10 md:left-[3%] opacity-50">
            <Image
              src="/element4.webp"
              alt=""
              width={200}
              height={200}
              loading="lazy"
              className="w-36 md:w-56 object-contain rotate-6"
            />
          </div>
          <div className="absolute top-[35%] -right-10 md:right-[8%] opacity-40">
            <Image
              src="/element2.webp"
              alt=""
              width={180}
              height={180}
              loading="lazy"
              className="w-28 md:w-40 object-contain rotate-12"
            />
          </div>
          <div className="absolute bottom-40 -left-8 md:left-[8%] opacity-50">
            <Image
              src="/element1.webp"
              alt=""
              width={180}
              height={180}
              loading="lazy"
              className="w-28 md:w-40 object-contain rotate-12"
            />
          </div>
          <div className="absolute bottom-24 -right-8 md:right-[12%] opacity-40">
            <Image
              src="/element5.webp"
              alt=""
              width={160}
              height={160}
              loading="lazy"
              className="w-24 md:w-32 object-contain -rotate-6"
            />
          </div>
        </div>

        <section className="relative z-10 pt-40 sm:pt-48 pb-24 px-6">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground tracking-tight mb-4">
                Hubungi Kami<span className="text-primary">.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ada pertanyaan atau ingin berkolaborasi? Kami senang mendengar
                dari Anda.
              </p>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-10"
            >
              {/* Email Section */}
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">
                  Email
                </p>
                <a
                  href="mailto:imeftui2026@gmail.com"
                  className="text-2xl sm:text-3xl font-medium text-foreground hover:text-primary transition-colors"
                >
                  imeftui2026@gmail.com
                </a>
              </div>

              {/* Narahubung Section */}
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
                  Narahubung
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-4 glass-card rounded-2xl">
                    <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-foreground">
                        Contact Person 1
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Line: placeholder_line_1
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 glass-card rounded-2xl">
                    <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-foreground">
                        Contact Person 2
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Line: placeholder_line_2
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Section */}
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
                  Sosial Media
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-3">
                  <Link
                    href="https://www.instagram.com/imeftui/"
                    target="_blank"
                    className="group inline-flex items-center gap-2 text-lg text-foreground hover:text-primary transition-colors"
                  >
                    Instagram
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/ikatan-mahasiswa-elektro-ftui-ime-ftui/"
                    target="_blank"
                    className="group inline-flex items-center gap-2 text-lg text-foreground hover:text-primary transition-colors"
                  >
                    LinkedIn
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
