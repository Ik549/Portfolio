'use client';

import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';

type Project = {
  year: string;
  num: string;
  title: string;
  role: string;
  blurb: string;
  tags: string[];
  status: string;
};

const projects: Project[] = [
  {
    num: '01',
    year: '2026',
    title: 'IFN Toolkit v2',
    role: 'Design, Engineering',
    blurb:
      'A system-tray productivity suite for legal practice. Notes, Court Diary, and Settings behind a single icon — summoned instantly, dismissed without thought. Rebuilt from scratch around a navy palette and a keyboard-first flow.',
    tags: ['Python', 'PyQt', 'SQLite', 'Windows'],
    status: 'Shipped',
  },
  {
    num: '02',
    year: '2025',
    title: 'Research Clipper',
    role: 'Engineering',
    blurb:
      'A lightweight capture tool for judgment excerpts and citations. Tags by matter, so research assembled over weeks surfaces in seconds when you need it at a hearing.',
    tags: ['Python', 'Tkinter'],
    status: 'Live',
  },
  {
    num: '03',
    year: '2025',
    title: 'Brief Formatter',
    role: 'Engineering',
    blurb:
      'A formatting utility for pleadings — consistent margins, citation styling, auto-numbered paragraphs. The last-mile polish before filing, automated.',
    tags: ['Python', 'python-docx'],
    status: 'Internal',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-32 md:py-48 px-6 md:px-12">
      <SectionHeading
        index="03"
        label="Selected Work"
        title={
          <>
            Quiet tools for{' '}
            <span className="italic text-crimson">loud problems</span>.
          </>
        }
      />

      <div className="border-t border-ink/20">
        {projects.map((p, i) => (
          <ProjectRow key={p.title} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectRow({ p, i }: { p: Project; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative border-b border-ink/20 py-10 md:py-14 cursor-pointer"
    >
      {/* crimson wash on hover */}
      <span
        aria-hidden
        className="absolute inset-0 bg-crimson origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
      />

      <div className="relative grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-12 items-baseline transition-colors duration-500 group-hover:text-paper">
        <div className="flex items-baseline gap-6 md:gap-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted group-hover:text-paper/70 transition-colors duration-500">
            {p.num}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted group-hover:text-paper/70 transition-colors duration-500">
            {p.year}
          </span>
        </div>
        <div>
          <h3 className="font-display font-light text-display-sm leading-none">
            {p.title}
          </h3>
          <p className="mt-4 max-w-2xl font-display text-lg leading-snug text-ink/80 group-hover:text-paper/90 transition-colors duration-500">
            {p.blurb}
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted group-hover:text-paper/70 transition-colors duration-500">
            {p.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div className="text-right md:min-w-[140px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted group-hover:text-paper/70 transition-colors duration-500">
            {p.role}
          </p>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-crimson group-hover:text-paper transition-colors duration-500">
            &rarr; {p.status}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
