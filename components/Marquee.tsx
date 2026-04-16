export default function Marquee({
  text,
  speed = 'normal',
  variant = 'default',
}: {
  text: string;
  speed?: 'normal' | 'slow';
  variant?: 'default' | 'outlined';
}) {
  // Duplicate content so translate(-50%) loops seamlessly.
  const items = Array.from({ length: 8 }, (_, i) => i);
  const animClass = speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee';

  return (
    <div className="relative overflow-hidden py-8 md:py-12 border-y border-ink/15">
      <div className={`flex whitespace-nowrap ${animClass}`}>
        {items.map((i) => (
          <span
            key={i}
            className={`font-display font-light text-[clamp(3.5rem,10vw,10rem)] leading-none px-6 md:px-10 ${
              variant === 'outlined'
                ? 'text-transparent [-webkit-text-stroke:1px_theme(colors.ink.DEFAULT)]'
                : 'text-ink'
            }`}
          >
            {text}
            <span className="text-crimson px-4">&middot;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
