"use client";

import { Reveal } from "./motion";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="font-serif text-xl font-semibold text-white mb-1">
                Lamor
              </p>
              <p className="text-sm">A more intentional way to meet.</p>
            </div>

            <nav className="flex flex-wrap justify-center gap-6 text-sm" aria-label="Footer navigation">
              <a href="#about" className="hover:text-white transition-colors duration-300">
                About
              </a>
              <a href="#how-it-works" className="hover:text-white transition-colors duration-300">
                How It Works
              </a>
              <a href="#founder" className="hover:text-white transition-colors duration-300">
                Founder
              </a>
              <a href="#join" className="hover:text-white transition-colors duration-300">
                Join
              </a>
            </nav>

            {/* Contact — replace with your real email */}
            <div className="text-center md:text-right text-sm">
              <a
                href="mailto:hello@lamor.com"
                className="hover:text-white transition-colors duration-300"
              >
                hello@lamor.com
              </a>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/40">
            &copy; {new Date().getFullYear()} Lamor. All rights reserved.
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
