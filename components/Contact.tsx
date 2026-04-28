'use client';

import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-ink overflow-hidden py-32 md:py-48 px-6 md:px-12"
    >
      {/* ambient watermark */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -left-8 top-1/2 -translate-y-1/2 font-display font-light leading-none tracking-tighter text-paper/[0.03]"
        style={{ fontSize: 'clamp(12rem, 40vw, 32rem)' }}
      >
        05
      </span>

      {/* eyebrow */}
      <div className="relative flex items-baseline gap-4 font-mono text-[11px] uppercase tracking-[0.25em] text-paper/25 mb-16 md:mb-24">
        <span>05</span>
        <span className="flex-1 h-px bg-paper/15" />
        <span>Contact</span>
      </div>

      {/* main CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-5xl"
      >
        <h2
          className="font-display font-light text-paper leading-[0.93] tracking-tight"
          style={{ fontSize: 'clamp(3rem, 8vw, 7.5rem)' }}
        >
          Got a brief,<br />
          a thesis, or{' '}
          <em className="text-crimson not-italic">a tool</em><br />
          you want built.
        </h2>

        <motion.a
          href="mailto:nwanafitzgerald@gmail.com"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-14 md:mt-20 inline-flex items-center gap-6 font-display text-xl md:text-3xl text-paper/70 hover:text-paper transition-colors duration-500 group"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-paper/30 group-hover:text-crimson transition-colors duration-500">
            Write &rarr;
          </span>
          nwanafitzgerald@gmail.com
        </motion.a>
      </motion.div>

      {/* bottom metadata strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative mt-24 md:mt-36 border-t border-paper/10 pt-10 grid md:grid-cols-3 gap-8"
      >
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/25 mb-3">
            Phone
          </p>
          <a
            href="tel:+2348096385992"
            className="font-display text-lg md:text-xl text-paper/60 hover:text-paper transition-colors duration-500"
          >
            +234 809 638 5992
          </a>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/25 mb-3">
            Writing
          </p>
          <a
            href="https://ikennanwana.wordpress.com"
            className="font-display text-lg md:text-xl text-paper/60 hover:text-paper transition-colors duration-500"
            target="_blank"
            rel="noreferrer"
          >
            ikennanwana.wordpress.com
          </a>
        </div>
        <div className="md:text-right">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/25 mb-3">
            Location
          </p>
          <p className="font-display text-lg md:text-xl text-paper/60">
            Lagos, Nigeria &mdash; GMT+1
          </p>
        </div>
      </motion.div>
    </section>
  );
}
