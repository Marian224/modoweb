'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { indicatorItems } from '@/data/nav';

export default function SectionIndicator() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sections = indicatorItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => Boolean(el));

    const showAfter = document.querySelector('#menu');

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting || entry.boundingClientRect.top < 0),
      { threshold: 0, rootMargin: '-40% 0px -60% 0px' }
    );
    if (showAfter) visibilityObserver.observe(showAfter);

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.findIndex((s) => s === entry.target);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { threshold: 0, rootMargin: '-45% 0px -45% 0px' }
    );
    sections.forEach((s) => sectionObserver.observe(s));

    return () => {
      visibilityObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      aria-hidden={!visible}
      className="pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-10 lg:flex"
    >
      <div className="flex flex-col items-center gap-[6px] font-mono text-[10px] tracking-[0.4em] text-ivory/30">
        {'MODO'.split('').map((letter) => (
          <span key={letter}>{letter}</span>
        ))}
      </div>

      <div className="h-16 w-px bg-ivory/15" />

      <nav className="pointer-events-auto flex flex-col items-center gap-5" aria-label="Section progress">
        {indicatorItems.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            className="group flex flex-col items-center gap-2"
            aria-current={i === activeIndex ? 'true' : undefined}
          >
            <span
              className={`font-mono text-[10px] tracking-widest transition-colors duration-300 ${
                i === activeIndex ? 'text-copper-light' : 'text-ivory/25 group-hover:text-ivory/60'
              }`}
            >
              {item.index}
            </span>
            <span
              className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                i === activeIndex ? 'bg-copper-light' : 'bg-ivory/20 group-hover:bg-ivory/50'
              }`}
            />
          </a>
        ))}
      </nav>
    </motion.div>
  );
}
