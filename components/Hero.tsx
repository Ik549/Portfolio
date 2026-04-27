'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

const CYCLE_WORDS = ['Law.', 'Innovation.', 'Impact.'];

function CyclingWord() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % CYCLE_WORDS.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="inline-block relative align-bottom overflow-hidden"
      style={{ minWidth: '9ch' }}>
      <AnimatePresence mode="wait">
        <motion.em
          key={idx}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-crimson not-italic block"
        >
          {CYCLE_WORDS[idx]}
        </motion.em>
      </AnimatePresence>
    </span>
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

      {/* hero type block */}
      <div className="flex-1 flex flex-col justify-center -mt-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-[11px] uppercase tracking-[0.3em] text-crimson mb-8 md:mb-12"
        >
          &mdash; A personal dossier
        </motion.p>

        <h1 className="font-display font-light text-display-xl text-ink">
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

      {/* bottom descriptor */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.4, ease: [0.22, 1, 0.36, 1] }}
        className="grid md:grid-cols-[1fr_auto] gap-6 items-end"
      >
        <p className="font-display text-xl md:text-2xl leading-snug text-ink max-w-xl flex flex-wrap items-baseline gap-x-[0.3em]">
          <span>Working at the intersection of</span>
          <CyclingWord />
          <span>Writing briefs by day, building software by night, and arguing
          for better IP protections for Nigeria&rsquo;s creative economy the
          rest of the time.</span>
        </p>
        <a
          href="#work"
          className="font-mono text-[11px] uppercase tracking-[0.2em] link-draw self-end justify-self-end md:justify-self-auto"
        >
          Scroll &darr;
        </a>
      </motion.div>
    </section>
  );
}
