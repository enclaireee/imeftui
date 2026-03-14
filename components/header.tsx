 "use client";

import { memo, useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navItems: { label: string; href: string; hash: string | null }[] = [
  { label: "Home", href: "/", hash: null },
  { label: "About", href: "/wip", hash: null },
  { label: "Dashboard", href: "/wip", hash: null },
  { label: "IME Hub", href: "/wip", hash: null },
  { label: "Contact", href: "/wip", hash: null },
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
      className="relative text-sm font-bold text-white drop-shadow-md hover:text-white/80 transition-all duration-300 py-2 group"
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

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
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
        <nav className="relative rounded-[20px] px-4 sm:px-8 py-3 flex items-center justify-between glass shadow-xl shadow-black/30 w-full overflow-hidden">

          {/* Subtle inner highlight simulating light hitting the top edge */}
          <div className="absolute top-0 left-0 right-0 h-px bg-white/10 pointer-events-none" />

          {/* Logo & Title Section */}
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 relative z-10 group"
          >
            {/* Circular Wolf Logo Wrapper */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-full bg-[#001b55] border border-white/20 transition-transform duration-300 group-hover:scale-105 shadow-inner">
              <Image
                src="/logo.png"
                alt="Wolf Logo"
                fill
                className="object-contain p-1"
                sizes="(max-width: 640px) 40px, 48px"
                priority
              />
            </div>

            {/* Stacked Text */}
            <div className="flex flex-col -gap-0.5 mt-0.5">
              <span className="text-white font-bold leading-none text-[15px] sm:text-[17px] tracking-wide">
                Menjejak
              </span>
              <span className="text-white font-bold leading-none text-[15px] sm:text-[17px] tracking-wide">
                #Asa
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Extended spacing to push them apart smoothly */}
          <div className="hidden md:flex items-center gap-8 lg:gap-14 relative z-10 mr-4">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                item={item}
                onClick={handleNavClick}
              />
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 relative z-10">


            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative w-9 h-9 rounded-full flex items-center justify-center text-white drop-shadow-md hover:text-white/80 hover:bg-white/10 transition-all duration-300"
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

            <div className="flex flex-col h-full px-8 pt-8 pb-10">
              <div className="relative w-[100px] h-[50px] mb-8">
                <Image
                  src="/logoNama.webp"
                  alt="IME FTUI"
                  fill
                  className="object-contain"
                  sizes="100px"
                />
              </div>
              <div className="flex-1 flex flex-col">
                {navItems.map((item, index) => (
                  <MobileNavLink
                    key={item.label}
                    item={item}
                    onClick={handleNavClick}
                    onClose={closeMobileMenu}
                    index={index}
                    isLast={index === navItems.length - 1}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});
