'use client';

import { motion } from 'motion/react';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#writing', label: 'Writing' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 mix-blend-difference"
    >
      <div className="mx-auto max-w-[1800px] px-6 md:px-12 flex items-center justify-between h-20 text-paper">
        <a
          href="#top"
          className="font-display text-lg md:text-xl tracking-tight"
        >
          Ikenna Nwana
        </a>
        <p className="hidden md:block font-mono text-[11px] uppercase tracking-[0.2em]">
          Lagos &mdash; 06&deg;27&prime;N
        </p>
        <nav className="flex items-center gap-6 md:gap-10 font-mono text-[11px] uppercase tracking-[0.2em]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-draw">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
