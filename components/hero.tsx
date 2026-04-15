"use client";

import { motion } from "./motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease }}
      >
        {/* Replace /reel.mp4 with your background video */}
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/reel-poster.jpg"
        >
          <source src="/reel.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Soft powder-blue tint */}
        <div className="absolute inset-0 bg-powder/20 mix-blend-overlay" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-28 md:py-36 lg:py-44">
        <div className="max-w-2xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.p
            className="text-sm md:text-base font-medium tracking-widest text-white/70 uppercase mb-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
          >
            An intentional way to meet
          </motion.p>

          {/* Headline */}
          <motion.h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white tracking-tight leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease }}
          >
            No more dates. The right one.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mt-6 text-base md:text-lg text-white/80 leading-relaxed max-w-xl mx-auto"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
          >
            Lamor is a modern matchmaking experience designed for people who want
            real connection&mdash;thoughtfully introduced, personally guided, and
            rooted in intention.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease }}
          >
            <motion.a
              href="#join"
              className="w-full sm:w-auto text-center px-8 py-3.5 bg-powder text-ink text-sm font-medium rounded-full hover:bg-powder-dark transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Join the List
            </motion.a>
            <motion.a
              href="#about"
              className="w-full sm:w-auto text-center px-8 py-3.5 border border-white/40 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
