'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

const STATEMENTS = [
  { line1: 'Practising law at', line2: 'Wole Olanipekun & Co.' },
  { line1: 'Building tools for', line2: 'legal practitioners.' },
  { line1: 'Writing on IP law for', line2: "Nigeria’s creators." },
];

function CyclingStatement() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % STATEMENTS.length), 3000);
    return () => clearInterval(t);
  }, []);

  const s = STATEMENTS[idx];

  return (
    <div className="overflow-hidden" style={{ minHeight: '6rem' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-display font-light text-ink/50 leading-tight"
            style={{ fontSize: 'clamp(1.4rem, 3vw, 2.6rem)' }}>
            {s.line1}
          </p>
          <p className="font-display font-light text-ink leading-tight italic"
            style={{ fontSize: 'clamp(1.4rem, 3vw, 2.6rem)' }}>
            {s.line2}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-between pt-28 md:pt-32 pb-10 px-6 md:px-12"
    >
      {/* top meta strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="flex items-start justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-ink/70"
      >
        <div>
          <p>Portfolio, Vol. 01</p>
          <p className="mt-1">Ed. {new Date().getFullYear()}</p>
        </div>
        <div className="text-right">
          <p>Trainee Associate</p>
          <p className="mt-1">Wole Olanipekun &amp; Co.</p>
        </div>
      </motion.div>

      {/* hero name block */}
      <div className="flex-1 flex flex-col justify-center -mt-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-[11px] uppercase tracking-[0.3em] text-crimson mb-8 md:mb-12"
        >
          &mdash; A personal dossier
        </motion.p>

        <h1 className="font-display font-light text-display-xl text-ink leading-[0.9]">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: '105%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1.2, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
              className="block italic"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
            >
              Ikenna
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: '105%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1.2, delay: 1.75, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Nwana<span className="text-crimson">.</span>
            </motion.span>
          </span>
        </h1>
      </div>

      {/* bottom: rule + two-column split */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.4, ease: 'easeOut' }}
      >
        {/* horizontal rule */}
        <div className="w-full h-px bg-ink/15 mb-8 md:mb-10" />

        {/* two column: cycling statement left, meta right */}
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">
          <CyclingStatement />

          <div className="flex flex-col items-start md:items-end gap-4 self-end pb-1">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-ink/40">
              <span className="w-6 h-px bg-current" />
              <span>Law · Innovation · Impact</span>
            </div>
            <a
              href="#work"
              className="font-mono text-[11px] uppercase tracking-[0.2em] link-draw text-ink/60"
            >
              Scroll &darr;
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
