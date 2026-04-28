'use client';

import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';

const pillars = [
  {
    num: 'I',
    title: 'Law',
    body: 'Litigation and advisory at Wole Olanipekun & Co. — briefs, research memos, and the slow craft of argument. I gravitate toward matters where commercial questions meet first-principles legal reasoning.',
    tags: ['Litigation', 'Commercial Advisory', 'Intellectual Property'],
  },
  {
    num: 'II',
    title: 'Innovation',
    body: 'Python tooling for practitioners who don\u2019t have time to be annoyed by their software. IFN Toolkit — a system-tray productivity suite for legal work — is the most recent of these. A keyboard-first way to keep research, diary, and notes within arm\u2019s reach.',
    tags: ['Python', 'Productivity', 'Legal Tech'],
  },
  {
    num: 'III',
    title: 'Impact',
    body: 'Writing on fintech inclusion, IP protection for Nigerian creators, and the policy edges where emerging technology and established law keep brushing past each other. The goal is a legal environment that actually encourages original thinking.',
    tags: ['Policy', 'Fintech', 'Creator Economy'],
  },
];

export default function Pillars() {
  return (
    <section id="pillars" className="relative py-32 md:py-48 px-6 md:px-12">
      <SectionHeading
        index="02"
        label="Practice"
        title={
          <>
            Three things I work on,{' '}
            <span className="italic text-crimson">on most days</span>.
          </>
        }
      />

      <div className="grid md:grid-cols-3 gap-px bg-ink/15 border-y border-ink/15">
        {pillars.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="group relative bg-paper p-8 md:p-10 py-12 md:py-16 flex flex-col gap-8 hover:bg-ink transition-colors duration-700 overflow-hidden"
          >
            {/* decorative background numeral */}
            <span
              aria-hidden
              className="pointer-events-none select-none absolute -bottom-6 -right-4 font-display font-light leading-none text-ink/[0.06] group-hover:text-paper/[0.06] transition-colors duration-700"
              style={{ fontSize: 'clamp(6rem, 14vw, 11rem)' }}
            >
              {p.num}
            </span>

            <div className="relative flex items-start justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted group-hover:text-paper/40 transition-colors duration-700">
                {p.num}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted group-hover:text-paper/40 transition-colors duration-700">
                0{i + 1} / 03
              </span>
            </div>
            <h3 className="relative font-display text-display-sm font-light italic text-crimson leading-none group-hover:text-paper transition-colors duration-700">
              {p.title}.
            </h3>
            <p className="relative font-display text-lg md:text-xl leading-snug text-ink/90 group-hover:text-paper/80 transition-colors duration-700 flex-1">
              {p.body}
            </p>
            <ul className="relative font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted group-hover:text-paper/40 transition-colors duration-700 space-y-1">
              {p.tags.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="w-4 h-px bg-current opacity-50" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
