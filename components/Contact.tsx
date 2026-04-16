'use client';

import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-48 px-6 md:px-12">
      <SectionHeading index="05" label="Contact" />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="font-display font-light text-display-lg leading-[0.92] max-w-6xl"
      >
        Got a brief, a thesis, or <span className="italic text-crimson">a tool</span> you want
        built&mdash;
        <a
          href="mailto:nwanafitzgerald@gmail.com"
          className="italic underline decoration-1 underline-offset-[0.15em] hover:text-crimson transition-colors"
        >
          let&rsquo;s talk
        </a>
        .
      </motion.h2>

      <div className="mt-20 grid md:grid-cols-3 gap-10 max-w-5xl border-t border-ink/20 pt-10">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted">
            Email
          </p>
          <a
            href="mailto:nwanafitzgerald@gmail.com"
            className="mt-3 block font-display text-xl md:text-2xl link-draw"
          >
            nwanafitzgerald@gmail.com
          </a>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted">
            Phone
          </p>
          <a
            href="tel:+2348096385992"
            className="mt-3 block font-display text-xl md:text-2xl link-draw"
          >
            +234 809 638 5992
          </a>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted">
            Elsewhere
          </p>
          <a
            href="https://ikennanwana.wordpress.com"
            className="mt-3 block font-display text-xl md:text-2xl link-draw"
            target="_blank"
            rel="noreferrer"
          >
            ikennanwana.wordpress.com
          </a>
        </div>
      </div>
    </section>
  );
}
