"use client";

import { memo, useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navItems: { label: string; href: string; hash: string | null }[] = [
  { label: "Home", href: "/", hash: null },
  { label: "About", href: "/", hash: null },
  { label: "Dashboard", href: "/wip", hash: null },
  { label: "IME Hub", href: "/imehub", hash: null },
  { label: "Contact", href: "/contact", hash: null },
];

// ── Desktop nav link with glow underline ──
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
      className="nav-link-glow text-[13px] font-semibold text-white/90 hover:text-white transition-all duration-300 py-2 tracking-wide uppercase"
    >
      {item.label}
    </Link>
  );
});

// ── Mobile menu item ──
const MobileNavLink = memo(function MobileNavLink({
  item,
  onClick,
  onClose,
  index,
}: {
  item: (typeof navItems)[0];
  onClick: (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    hash: string | null
  ) => void;
  onClose: () => void;
  index: number;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick(e, item.href, item.hash);
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
    >
      <Link
        href={item.hash ? `${item.href}#${item.hash}` : item.href}
        onClick={handleClick}
        className="block py-4 text-xl font-semibold text-white/70 hover:text-white transition-colors duration-200"
      >
        {item.label}
      </Link>
      <div className="h-px bg-white/[0.06]" />
    </motion.div>
  );
});

export const Header = memo(function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const rafRef = useRef<number | null>(null);

  // ── Scroll detection with rAF throttle ──
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        rafRef.current = requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial state
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
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
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-5xl">
        <nav
          className={`
            liquid-glass relative rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between w-full overflow-hidden
            ${scrolled ? "header-scrolled" : ""}
          `}
        >
          {/* ── Logo & Title ── */}
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 relative z-10 group"
          >
            {/* Logo with glow ring on hover */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 scale-110 blur-md transition-all duration-500" />
              <div className="relative w-full h-full overflow-hidden rounded-full bg-[#001040]/80 border border-white/15 group-hover:border-white/25 transition-all duration-300 shadow-lg shadow-black/20">
                <Image
                  src="/logo.png"
                  alt="Wolf Logo"
                  fill
                  className="object-contain p-1"
                  sizes="(max-width: 640px) 40px, 44px"
                  priority
                />
              </div>
            </div>

            {/* Stacked text */}
            <div className="flex flex-col -gap-0.5">
              <span className="text-white font-bold leading-none text-[14px] sm:text-[16px] tracking-wider">
                Menjejak
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ffe500] font-bold leading-none text-[14px] sm:text-[16px] tracking-wider">
                #Asa
              </span>
            </div>
          </Link>

          {/* ── Desktop Navigation ── */}
          <div className="hidden md:flex items-center gap-7 lg:gap-10 relative z-10">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                item={item}
                onClick={handleNavClick}
              />
            ))}
          </div>

          {/* ── Mobile Menu Toggle ── */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-10 w-10 h-10 rounded-full glass-circle-btn flex items-center justify-center text-white/80 hover:text-white"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 md:hidden liquid-glass-mobile"
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.2 }}
              onClick={closeMobileMenu}
              className="absolute top-5 right-5 w-10 h-10 rounded-full glass-circle-btn flex items-center justify-center text-white/60 hover:text-white z-10"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </motion.button>

            <div className="flex flex-col h-full px-8 pt-7 pb-8">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.05, duration: 0.2 }}
                className="relative w-[90px] h-[45px] mb-8"
              >
                <Image
                  src="/logoNama.webp"
                  alt="IME FTUI"
                  fill
                  className="object-contain"
                  sizes="90px"
                />
              </motion.div>

              {/* Nav items */}
              <div className="flex-1 flex flex-col">
                {navItems.map((item, index) => (
                  <MobileNavLink
                    key={item.label}
                    item={item}
                    onClick={handleNavClick}
                    onClose={closeMobileMenu}
                    index={index}
                  />
                ))}
              </div>

              {/* Bottom text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="text-[10px] text-white/20 tracking-widest uppercase text-center"
              >
                IME FTUI 2026
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});
