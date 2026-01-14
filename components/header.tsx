"use client";

import { memo, useEffect, useState, useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { handleRegistrationClick } from "@/lib/registration";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const Header = memo(function Header() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useIsomorphicLayoutEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    const html = document.documentElement;
    setIsDark(newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
    if (newIsDark) {
      html.classList.remove("light");
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
    }
  };

  const navItems = [
    { label: "Bidang", href: "#divisi" },
    { label: "Timeline", href: "#timeline" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl">
      <nav className="glass-card rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between backdrop-blur-xl">
        <Link href="#" className="flex items-center">
          <div className="relative w-[100px] h-[50px]">
            <Image
              src="/logoNama.webp"
              alt="IME FTUI"
              fill
              className="object-contain hidden dark:block"
              sizes="100px"
            />
            <Image
              src="/logoNamaLight.webp"
              alt="IME FTUI"
              fill
              className="object-contain block dark:hidden"
              sizes="100px"
            />
          </div>
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
          <Button
            size="sm"
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hidden sm:inline-flex"
            onClick={handleRegistrationClick}
          >
            Daftar
          </Button>
        </div>
      </nav>
    </header>
  );
});
