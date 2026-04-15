"use client";

import SectionHeading from "./section-heading";
import { StaggerGroup, StaggerItem, fadeUp } from "./motion";

const STEPS = [
  {
    number: "01",
    title: "Share your story",
    body: "Tell us about who you are, what you value, and the kind of connection you\u2019re looking for.",
  },
  {
    number: "02",
    title: "We curate thoughtfully",
    body: "We take a personal, selective approach to matching\u2014focused on alignment, not volume.",
  },
  {
    number: "03",
    title: "Meet with intention",
    body: "When there\u2019s a strong fit, we create the opportunity for a real introduction and a better beginning.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cream py-20 md:py-28 lg:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading title="How It Works" />

        <StaggerGroup
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
          slow
        >
          {STEPS.map((step) => (
            <StaggerItem key={step.number} variants={fadeUp}>
              <div className="text-center md:text-left">
                <span className="inline-block text-sm font-medium text-muted tracking-wider mb-4">
                  {step.number}
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-ink mb-3">
                  {step.title}
                </h3>
                <p className="text-ink-light leading-relaxed text-sm md:text-base">
                  {step.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
