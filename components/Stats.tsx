'use client';

import { motion } from 'motion/react';

const METRICS = [
  { value: '03', label: 'Years in practice', note: 'WO & Co.' },
  { value: '12+', label: 'Tools shipped', note: 'Python / PyQt' },
  { value: '02', label: 'Practice areas', note: 'Litigation · IP' },
  { value: '01', label: 'City', note: 'Lagos, Nigeria' },
];

export default function Stats() {
  return (
    <section className="relative bg-ink overflow-hidden">
      {/* ambient large text watermark */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -right-8 bottom-0 font-display font-light leading-none tracking-tighter text-paper/[0.04]"
        style={{ fontSize: 'clamp(10rem, 35vw, 28rem)' }}
      >
        IN.
      </span>

      {/* metrics row */}
      <div className="relative grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-paper/10">
        {METRICS.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
            className="group px-8 md:px-12 py-14 md:py-20 flex flex-col justify-between gap-10"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/25">
              {m.label}
            </p>
            <div>
              <p
                className="font-display font-light text-paper leading-none tracking-tight group-hover:text-crimson transition-colors duration-500"
                style={{ fontSize: 'clamp(3.5rem, 7vw, 7rem)' }}
              >
                {m.value}
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/30">
                {m.note}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* pull-quote strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
        className="relative border-t border-paper/10 px-8 md:px-12 py-12 md:py-16 grid md:grid-cols-[auto_1fr] gap-8 md:gap-20 items-center"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/25 whitespace-nowrap">
          On record &mdash;
        </p>
        <p className="font-display font-light italic text-paper/75"
          style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)' }}>
          &ldquo;The law shapes what people can build.
          I&rsquo;d rather be the one who shapes both.&rdquo;
        </p>
      </motion.div>
    </section>
  );
}
