'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // only on pointer:fine devices
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let mouse = { x: -200, y: -200 };
    let ring = { x: -200, y: -200 };
    let raf: number;
    let isVisible = false;

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!isVisible) {
        isVisible = true;
        dotRef.current?.classList.remove('opacity-0');
        ringRef.current?.classList.remove('opacity-0');
      }
    };

    const tick = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`;
      }
      ring.x += (mouse.x - ring.x) * 0.1;
      ring.y += (mouse.y - ring.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const onEnter = () => ringRef.current?.setAttribute('data-hover', 'true');
    const onLeave = () => ringRef.current?.removeAttribute('data-hover');

    const attachHover = () => {
      document.querySelectorAll('a, button').forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    attachHover();

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* dot */}
      <div
        ref={dotRef}
        aria-hidden
        className="cursor-dot opacity-0"
      />
      {/* ring */}
      <div
        ref={ringRef}
        aria-hidden
        className="cursor-ring opacity-0"
      />
    </>
  );
}
