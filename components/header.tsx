"use client";

import { useEffect, useState, useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function Header() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useIsomorphicLayoutEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const navItems = [
    { label: "Divisi", href: "#divisi" },
    { label: "Timeline", href: "#timeline" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl">
      <nav className="glass-card rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between backdrop-blur-xl">
        <Link href="#" className="flex items-center">
          <Image
            src={isDark ? "/logoNama.webp" : "/logoNamaLight.webp"}
            alt="IME FTUI"
            width={100}
            height={50}
            className="object-contain"
          />
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full w-9 h-9"
            >
              {isDark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
          <Link
            href="https://forms.gle/h8QMy68MRfBip7Qq5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="sm"
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hidden sm:inline-flex"
            >
              Daftar
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
