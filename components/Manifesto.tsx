'use client';

import { motion, MotionValue, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import SectionHeading from './SectionHeading';

const WORDS = [
  'Building',
  'tools,',
  'drafting',
  'briefs,',
  'and',
  'arguing',
  'for',
  'stronger',
  'legal',
  'protections',
  'that',
  'let',
  'original',
  'thinking',
  'thrive',
  'in',
  'Nigeria\u2019s',
  'technology',
  'ecosystem.',
];

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.3'],
  });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 md:py-48 px-6 md:px-12"
    >
      <SectionHeading index="01" label="Manifesto" />

      <div className="max-w-6xl">
        <p className="font-display font-light text-display-md leading-[0.95] tracking-tight text-ink flex flex-wrap gap-x-[0.25em] gap-y-2">
          {WORDS.map((word, i) => (
            <Word
              key={i}
              word={word}
              index={i}
              total={WORDS.length}
              progress={scrollYProgress}
            />
          ))}
        </p>
      </div>

      <div className="mt-24 md:mt-32 grid md:grid-cols-[auto_1fr] gap-8 md:gap-20 items-start max-w-5xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted md:pt-3">
          About &mdash;
        </p>
        <div className="space-y-6 font-display text-xl md:text-2xl leading-relaxed text-ink/80">
          <p>
            I&rsquo;m a Trainee Associate at <span className="text-ink">Wole
            Olanipekun &amp; Co.</span>, one of Nigeria&rsquo;s leading law
            firms. My work spans litigation, commercial advisory, and the
            quieter end-of-day task of turning legal friction into software.
          </p>
          <p>
            Outside billable hours, I build Python tools for practitioners
            &mdash; a system-tray productivity suite, case diaries, research
            clippers &mdash; and write on fintech policy, original thinking,
            and what a protective yet generative IP regime could look like for
            creators in Nigeria.
          </p>
        </div>
      </div>
    </section>
  );
}

function Word({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = start + 1 / total + 0.05;
  const color = useTransform(
    progress,
    [start, end],
    ['rgba(20, 16, 22, 0.18)', 'rgba(20, 16, 22, 1)']
  );
  const italic = word.includes('Nigeria') || word === 'ecosystem.';
  return (
    <motion.span style={{ color }} className={italic ? 'italic' : ''}>
      {word}
    </motion.span>
  );
}
