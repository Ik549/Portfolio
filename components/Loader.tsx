'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

const WORDS = ['Law.', 'Innovation.', 'Impact.'];

export default function Loader() {
  const [done, setDone] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    // cycle through the three tagline words, then reveal the page
    const interval = setInterval(() => {
      setIdx((i) => {
        if (i >= WORDS.length - 1) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 500);
          return i;
        }
        return i + 1;
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] bg-ink text-paper flex items-center justify-center"
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={idx}
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                exit={{ y: '-100%' }}
                transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
                className="font-display font-light text-[clamp(2.5rem,8vw,6rem)] tracking-tight"
              >
                {WORDS[idx]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
