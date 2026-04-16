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
            className="group bg-paper p-8 md:p-10 py-12 md:py-16 flex flex-col gap-8 hover:bg-paper-dark transition-colors duration-500"
          >
            <div className="flex items-start justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted">
                {p.num}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted">
                0{i + 1} / 03
              </span>
            </div>
            <h3 className="font-display text-display-sm font-light italic text-crimson leading-none">
              {p.title}.
            </h3>
            <p className="font-display text-lg md:text-xl leading-snug text-ink/90 flex-1">
              {p.body}
            </p>
            <ul className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted space-y-1">
              {p.tags.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="w-4 h-px bg-current" />
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
