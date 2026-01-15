"use client";

import { memo, useEffect, useState, useLayoutEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { handleRegistrationClick } from "@/lib/registration";
import { motion, AnimatePresence } from "motion/react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const navItems = [
  { label: "Bidang", href: "/masihotw", hash: "divisi" },
  { label: "Timeline", href: "/masihotw", hash: "timeline" },
  { label: "FAQ", href: "/masihotw", hash: "faq" },
  { label: "Contact", href: "/contacts", hash: null },
];

// Animated nav link with sliding underline
const NavLink = memo(function NavLink({
  item,
  onClick,
}: {
  item: (typeof navItems)[0];
  onClick: (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    hash: string | null
  ) => void;
}) {
  return (
    <Link
      href={item.hash ? `${item.href}#${item.hash}` : item.href}
      onClick={(e) => onClick(e, item.href, item.hash)}
      className="relative text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-300 py-2 group"
    >
      {item.label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 ease-out group-hover:w-full" />
    </Link>
  );
});

// Mobile menu item
const MobileNavLink = memo(function MobileNavLink({
  item,
  onClick,
  onClose,
  index,
  isLast,
}: {
  item: (typeof navItems)[0];
  onClick: (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    hash: string | null
  ) => void;
  onClose: () => void;
  index: number;
  isLast: boolean;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick(e, item.href, item.hash);
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.05, duration: 0.25 }}
    >
      <Link
        href={item.hash ? `${item.href}#${item.hash}` : item.href}
        onClick={handleClick}
        className="block text-2xl font-semibold text-foreground hover:text-primary transition-colors py-4"
      >
        {item.label}
      </Link>
      {!isLast && <div className="h-px bg-foreground/15" />}
    </motion.div>
  );
});

export const Header = memo(function Header() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleTheme = useCallback(() => {
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
  }, [isDark]);

  const handleNavClick = useCallback(
    (
      e: React.MouseEvent<HTMLAnchorElement>,
      href: string,
      hash: string | null
    ) => {
      if (!hash) return;

      e.preventDefault();

      const scrollToElement = () => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            history.replaceState(null, "", href);
          }, 100);
        }
      };

      if (pathname === href) {
        scrollToElement();
      } else {
        router.push(`${href}#${hash}`);
      }
    },
    [pathname, router]
  );

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl">
        <nav className="relative rounded-2xl px-3 sm:px-5 py-2.5 flex items-center justify-between bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-lg shadow-black/[0.03] dark:shadow-black/20">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/[0.03] via-transparent to-secondary/[0.03] pointer-events-none" />

          {/* Logo */}
          <Link href="/" className="relative flex items-center group z-10">
            <div className="relative w-[90px] h-[45px] transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logoNama.webp"
                alt="IME FTUI"
                fill
                className="object-contain hidden dark:block"
                sizes="90px"
                priority
              />
              <Image
                src="/logoNamaLight.webp"
                alt="IME FTUI"
                fill
                className="object-contain block dark:hidden"
                sizes="90px"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-6 relative z-10">
            {navItems.map((item) => (
              <NavLink
                key={item.href + item.hash}
                item={item}
                onClick={handleNavClick}
              />
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 relative z-10">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="relative w-9 h-9 rounded-full flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-[18px] h-[18px]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-[18px] h-[18px]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            )}

            {/* Desktop CTA */}
            <Button
              size="sm"
              className="hidden sm:inline-flex rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 px-5 h-9 font-medium shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
              onClick={handleRegistrationClick}
            >
              Daftar
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden relative w-9 h-9 rounded-full flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 sm:hidden bg-background"
          >
            {/* Close button */}
            <button
              onClick={closeMobileMenu}
              className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="flex flex-col h-full px-8 pt-8 pb-10">
              {/* Logo */}
              <div className="relative w-[100px] h-[50px] mb-8">
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

              {/* Nav Links */}
              <div className="flex-1 flex flex-col">
                {navItems.map((item, index) => (
                  <MobileNavLink
                    key={item.href + item.hash}
                    item={item}
                    onClick={handleNavClick}
                    onClose={closeMobileMenu}
                    index={index}
                    isLast={index === navItems.length - 1}
                  />
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.25 }}
              >
                <Button
                  className="w-full rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-medium"
                  onClick={() => {
                    handleRegistrationClick();
                    closeMobileMenu();
                  }}
                >
                  Daftar Sekarang
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});
