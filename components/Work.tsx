'use client';

import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';

type Project = {
  num: string;
  year: string;
  category: string;
  title: string;
  role: string;
  blurb: string;
  tags: string[];
  status: string;
  href?: string;
};

const projects: Project[] = [
  {
    num: '01',
    year: '2026',
    category: 'Engineering / Design',
    title: 'IFN Toolkit v2',
    role: 'Solo — Design, Architecture, Build',
    blurb:
      'A system-tray productivity suite for legal practice. Notes, Court Diary, and Settings behind a single icon — summoned instantly, dismissed without thought. Rebuilt from scratch around a navy palette and a keyboard-first flow.',
    tags: ['Python', 'PyQt6', 'SQLite', 'Windows'],
    status: 'Shipped',
  },
  {
    num: '02',
    year: '2025',
    category: 'Engineering',
    title: 'Research Clipper',
    role: 'Solo — Engineering',
    blurb:
      'A capture tool for judgment excerpts and citations, tagged by matter. Research assembled over weeks surfaces in seconds when you need it at a hearing.',
    tags: ['Python', 'Tkinter', 'JSON'],
    status: 'Live',
  },
  {
    num: '03',
    year: '2025',
    category: 'Engineering',
    title: 'Brief Formatter',
    role: 'Solo — Engineering',
    blurb:
      'Formatting utility for pleadings — consistent margins, citation styling, auto-numbered paragraphs. Last-mile polish before filing, automated.',
    tags: ['Python', 'python-docx'],
    status: 'Internal',
  },
  {
    num: '04',
    year: '2024–25',
    category: 'Policy Writing',
    title: 'IP Reform in Nigeria\'s Creative Economy',
    role: 'Author',
    blurb:
      'A series of essays arguing for a protective yet generative IP regime that rewards original thinking in Nigeria\'s technology and entertainment sectors.',
    tags: ['IP Law', 'Fintech Policy', 'Publishing'],
    status: 'Ongoing',
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
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative border-b border-ink/20"
    >
      {/* crimson wash on hover */}
      <span
        aria-hidden
        className="absolute inset-0 bg-crimson origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
      />

      <div className="relative py-10 md:py-14 transition-colors duration-500 group-hover:text-paper">

        {/* metadata strip */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1 mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-muted group-hover:text-paper/50 transition-colors duration-500">
          <span>{p.num}</span>
          <span className="h-px w-4 bg-current opacity-40" />
          <span>{p.year}</span>
          <span className="h-px w-4 bg-current opacity-40" />
          <span>{p.category}</span>
        </div>

        {/* main layout: title left, blurb + meta right */}
        <div className="md:grid md:grid-cols-[1fr_1fr] md:gap-16 items-start">
          {/* title col */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-display font-light text-display-sm leading-[0.95] tracking-tight">
              {p.title}
            </h3>
          </div>

          {/* description col */}
          <div>
            <p className="font-display text-lg leading-relaxed text-ink/75 group-hover:text-paper/85 transition-colors duration-500 mb-8">
              {p.blurb}
            </p>

            {/* tags + status + role */}
            <div className="flex flex-wrap items-end justify-between gap-4">
              <ul className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.25em] text-ink-muted group-hover:text-paper/50 transition-colors duration-500">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              <div className="text-right flex-shrink-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-muted group-hover:text-paper/50 transition-colors duration-500">
                  {p.role}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-crimson group-hover:text-paper transition-colors duration-500">
                  &rarr; {p.status}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
