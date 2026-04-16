'use client';

import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';

const posts = [
  {
    num: '01',
    date: '2026',
    title: 'Protecting original thinking: an IP regime for Nigeria\u2019s creators',
    kind: 'Essay',
  },
  {
    num: '02',
    date: '2025',
    title: 'Why inclusive fintech needs sharper legal scaffolding',
    kind: 'Research',
  },
  {
    num: '03',
    date: '2025',
    title: 'Notes on building software while practising law',
    kind: 'Personal',
  },
  {
    num: '04',
    date: '2025',
    title: 'When a system-tray icon is also a design system',
    kind: 'Essay',
  },
];

export default function Writing() {
  return (
    <section id="writing" className="relative py-32 md:py-48 px-6 md:px-12">
      <SectionHeading
        index="04"
        label="Writing"
        title={
          <>
            Research &amp; essays, <span className="italic text-crimson">in the margins</span>.
          </>
        }
      />

      <ul className="border-t border-ink/20">
        {posts.map((p, i) => (
          <motion.li
            key={p.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-ink/20"
          >
            <a
              href="#"
              className="group grid md:grid-cols-[auto_1fr_auto_auto] gap-4 md:gap-10 items-baseline py-6 md:py-8"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted">
                {p.num}
              </span>
              <h3 className="font-display text-xl md:text-3xl leading-tight text-ink group-hover:text-crimson transition-colors duration-500">
                {p.title}
              </h3>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted">
                {p.kind}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted">
                {p.date} &rarr;
              </span>
            </a>
          </motion.li>
        ))}
      </ul>

      <p className="mt-12 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted">
        More at{' '}
        <a
          href="https://ikennanwana.wordpress.com"
          className="link-draw text-ink"
          target="_blank"
          rel="noreferrer"
        >
          ikennanwana.wordpress.com
        </a>
      </p>
    </section>
  );
}
