"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Founder", href: "#founder" },
  { label: "Join", href: "#join" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on scroll
  useEffect(() => {
    if (mobileOpen && scrolled) setMobileOpen(false);
  }, [scrolled, mobileOpen]);

  return (
    <motion.nav
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "top-0 bg-ink/95 backdrop-blur-md border-b border-white/10"
          : mobileOpen
            ? "top-0 bg-ink/95 backdrop-blur-md border-b border-white/10"
            : "top-0 md:top-6 bg-transparent border-b border-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto px-8 sm:px-12 lg:px-16 flex items-center justify-between h-16 md:h-18">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <Image
            src="/lamor-logo-top.png"
            alt="Lamor"
            width={120}
            height={40}
            className={`w-auto transition-all duration-500 h-10 ${scrolled ? "md:h-10" : "md:h-16"}`}
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-12">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="#join"
            className="text-sm font-medium px-5 py-2.5 bg-powder text-ink rounded-full hover:bg-powder-dark transition-colors"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Join the List
          </motion.a>
        </div>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-ink/95 backdrop-blur-md overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-8 pt-2 pb-8 flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-white/80 hover:text-white transition-colors"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#join"
                className="text-center text-sm font-medium px-5 py-3 bg-powder text-ink rounded-full hover:bg-powder-dark transition-colors"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.2 }}
              >
                Join the List
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
