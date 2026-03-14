"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Home, ArrowLeft } from "lucide-react";


export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      <div className="relative z-10 max-w-md mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          {/* Logo */}
          <Image
            src="/logoNama.webp"
            alt="IME FTUI"
            width={100}
            height={50}
            className="object-contain opacity-80"
          />

          {/* 404 */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-[100px] sm:text-[140px] font-bold text-foreground/10 leading-none tracking-tighter select-none"
          >
            404
          </motion.h1>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-2 -mt-4"
          >
            <h2 className="text-lg sm:text-xl font-semibold text-foreground">
              Halaman tidak ditemukan
            </h2>
            <p className="text-muted-foreground text-sm">
              Halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 mt-4"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Home className="w-4 h-4" />
              Beranda
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali
            </button>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
