"use client";

import { Reveal } from "./motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <Reveal>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-ink tracking-tight">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
