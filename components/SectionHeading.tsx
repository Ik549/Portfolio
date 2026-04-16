import { ReactNode } from 'react';

export default function SectionHeading({
  index,
  label,
  title,
  className,
}: {
  index: string;
  label: string;
  title?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`${className ?? ''} mb-16 md:mb-24`}>
      <div className="flex items-baseline gap-4 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted">
        <span>{index}</span>
        <span className="flex-1 section-rule" />
        <span>{label}</span>
      </div>
      {title && (
        <h2 className="mt-10 font-display font-light text-display-md leading-[0.95] max-w-5xl">
          {title}
        </h2>
      )}
    </div>
  );
}
