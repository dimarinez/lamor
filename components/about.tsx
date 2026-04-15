"use client";

import SectionHeading from "./section-heading";
import { Reveal, StaggerGroup, StaggerItem, scaleIn } from "./motion";

const VALUES = [
  {
    title: "Intentional introductions",
    description: "Every match is made with care, not by algorithm alone.",
  },
  {
    title: "Personalized matching",
    description: "We take the time to understand who you are and what matters to you.",
  },
  {
    title: "Real-world connection",
    description: "Designed to move beyond screens and into meaningful moments.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28 lg:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading title="About Lamor" />

        <div className="max-w-2xl mx-auto text-center space-y-5">
          <Reveal>
            <p className="text-ink-light leading-relaxed">
              Lamor is a matchmaking experience built for people who are ready for
              something more thoughtful than dating apps. Instead of endless
              swiping and uncertain outcomes, we focus on real introductions
              grounded in compatibility, intention, and personal understanding.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-ink-light leading-relaxed">
              We believe meaningful connection should feel natural, not
              transactional. Our approach is simple: get to know you, understand
              what matters, and make introductions with purpose.
            </p>
          </Reveal>
        </div>

        <StaggerGroup
          className="mt-14 md:mt-18 grid grid-cols-1 md:grid-cols-3 gap-6"
          slow
        >
          {VALUES.map((value) => (
            <StaggerItem key={value.title} variants={scaleIn}>
              <div className="bg-powder-light rounded-2xl p-7 md:p-8 text-center border border-border/50 hover:shadow-lg hover:shadow-ink/5 hover:-translate-y-1 transition-all duration-500">
                <h3 className="font-serif text-lg md:text-xl font-semibold text-ink mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
