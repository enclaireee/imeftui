"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Home, ArrowLeft, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const NotFoundPage = memo(function NotFoundPage() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove("dark");
      html.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.remove("light");
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        className="absolute top-6 right-6 p-3 rounded-full bg-background/50 border border-border backdrop-blur-sm z-50 hover:bg-background/80 transition-all cursor-pointer"
        aria-label="Toggle Theme"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-primary" />
        )}
      </button>

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
            className="hidden dark:block object-contain opacity-80"
          />
          <Image
            src="/logoNamaLight.webp"
            alt="IME FTUI"
            width={100}
            height={50}
            className="block dark:hidden object-contain opacity-80"
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

          {/* Actions */}
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
});

export default NotFoundPage;
