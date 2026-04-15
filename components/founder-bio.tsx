"use client";

import Image from "next/image";
import { Reveal, slideLeft, slideRight } from "./motion";

export default function FounderBio() {
  return (
    <section id="founder" className="bg-ink py-20 md:py-28 lg:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12 md:mb-16">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
              Why I Created Lamor
            </h2>
          </Reveal>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14">
          {/* Founder photo — sticky while text scrolls */}
          <div className="md:col-span-2 self-start md:sticky md:top-24">
            <Reveal className="flex justify-center" variants={slideLeft}>
              <div className="w-64 md:w-full max-h-[32rem] rounded-2xl overflow-hidden ring-1 ring-white/10">
                <Image
                  src="/founder.JPG"
                  alt="Carlos Sánchez, Founder of Lamor"
                  width={400}
                  height={500}
                  className="w-full object-cover object-top"
                />
              </div>
            </Reveal>
          </div>

          {/* Bio */}
          <Reveal className="md:col-span-3" variants={slideRight} delay={0.15}>
            <div className="space-y-4">
              <p className="text-white/90 leading-[1.9]">
                I didn&rsquo;t build Lamor because I hated dating.
                I built it because I knew it could be better.
                Like most people, I tried the apps.
                I gave it time. I showed up. I went on dates.
                But it started to feel like a cycle. Swiping, small talk,
                mismatched expectations, and starting over again.
                Not because people aren&rsquo;t good, but because the way
                we meet each other today isn&rsquo;t.
              </p>
              <p className="text-white/90 leading-[1.9]">
                We&rsquo;ve turned something that should feel natural into
                something that feels transactional.
                And the truth is, most people aren&rsquo;t looking for more
                options. They&rsquo;re looking for the right connection.
                That&rsquo;s where Lamor comes in.
              </p>
              <p className="text-white/90 leading-[1.9]">
                Lamor is a matchmaking experience designed to take you out of
                the endless swipe cycle and back into real, intentional
                connection. We listen. We understand who you are, what you
                value, and what actually matters to you. And then we create
                opportunities for you to meet people who align with
                purpose. No more guessing. No more wasting time. No more
                endless swiping. Just real people, real meetings, and a better
                way to connect.
              </p>
              <p className="font-serif text-white italic text-lg leading-[1.9]">
                Because finding someone meaningful shouldn&rsquo;t feel like a
                numbers game. It should feel like it&rsquo;s done right.
              </p>

              {/* Founder name — edit here */}
              <div className="pt-4 border-t border-white/20">
                <p className="font-semibold text-white">Carlos S&aacute;nchez</p>
                <p className="text-sm text-white/50">Founder, Lamor</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
