'use client';

import { motion, useInView, Variants } from 'motion/react';
import { ReactNode, useRef } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  as?: 'div' | 'span' | 'p' | 'li';
};

const variants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Reveal({
  children,
  delay = 0,
  y = 40,
  className,
  once = true,
  as = 'div',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount: 0.2 });
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

/** Word-by-word reveal for manifesto-style text. */
export function RevealWords({
  text,
  className,
  wordClassName,
  stagger = 0.04,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const words = text.split(' ');

  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={`inline-block ${wordClassName ?? ''}`}
            initial={{ y: '105%' }}
            animate={inView ? { y: '0%' } : { y: '105%' }}
            transition={{
              duration: 0.9,
              delay: i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 && '\u00A0'}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
