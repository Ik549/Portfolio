export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-ink/20 px-6 md:px-12 pt-10 pb-6">
      <div className="grid md:grid-cols-3 gap-6 items-start font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted">
        <p>&copy; {year} &mdash; Ikenna Nwana</p>
        <p className="md:text-center">
          Designed &amp; built in Lagos &mdash; Set in Fraunces &amp; Inter
        </p>
        <p className="md:text-right">Law &middot; Innovation &middot; Impact</p>
      </div>

      {/* giant wordmark as footer closer */}
      <p className="mt-14 md:mt-24 font-display font-light text-[clamp(4rem,18vw,16rem)] leading-[0.85] tracking-tight text-ink italic select-none">
        Ikenna<span className="text-crimson not-italic">.</span>
      </p>
    </footer>
  );
}
