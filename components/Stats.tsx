'use client';

import { motion } from 'motion/react';

const CREDENTIALS = [
  {
    num: '01',
    label: 'Current Position',
    value: 'Trainee Associate',
    sub: 'Wole Olanipekun & Co.',
    note: 'Lagos, Nigeria',
  },
  {
    num: '02',
    label: 'Flagship Project',
    value: 'IFN Toolkit v2',
    sub: 'Legal productivity suite',
    note: 'Shipped 2026',
  },
  {
    num: '03',
    label: 'Focus Area',
    value: 'IP & Technology Law',
    sub: 'Policy writing & reform',
    note: 'Fintech · Creative economy',
  },
  {
    num: '04',
    label: 'Location',
    value: 'Lagos, Nigeria',
    sub: 'GMT+1',
    note: 'Available for advisory',
  },
];

export default function Stats() {
  return (
    <section className="relative bg-ink py-24 md:py-36 px-6 md:px-12 overflow-hidden">
      {/* background large numeral watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 font-display font-light text-[clamp(12rem,40vw,32rem)] leading-none tracking-tighter text-paper/[0.03] select-none translate-y-1/4"
      >
        IN.
      </span>

      {/* top rule + eyebrow */}
      <div className="flex items-baseline gap-4 font-mono text-[11px] uppercase tracking-[0.25em] text-paper/30 mb-16 md:mb-24">
        <span>02</span>
        <span className="flex-1 h-px bg-paper/20" />
        <span>Credentials</span>
      </div>

      {/* grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-paper/10">
        {CREDENTIALS.map((c, i) => (
          <motion.div
            key={c.num}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-ink px-8 py-10 md:py-12 group"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-paper/30 mb-8">
              {c.num} &mdash; {c.label}
            </p>
            <p className="font-display font-light text-[clamp(1.4rem,2.2vw,2rem)] leading-[1.05] text-paper mb-4 group-hover:text-crimson transition-colors duration-500">
              {c.value}
            </p>
            <p className="font-display text-base text-paper/60 leading-snug">
              {c.sub}
            </p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/25">
              {c.note}
            </p>
          </motion.div>
        ))}
      </div>

      {/* pull-quote strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
        className="mt-16 md:mt-24 max-w-3xl"
      >
        <p className="font-display font-light text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.15] text-paper/80 italic">
          &ldquo;The law shapes what people can build.
          I&rsquo;d rather be the one who shapes both.&rdquo;
        </p>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-paper/30">
          &mdash; Ikenna Nwana
        </p>
      </motion.div>
    </section>
  );
}
