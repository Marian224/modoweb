'use client';

import { motion } from 'framer-motion';

const words = ['Product', 'Season', 'Technique', 'Balance'];

export default function Philosophy() {
  return (
    <section className="relative bg-charcoal py-32 md:py-48">
      <div className="container-modo flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
          className="font-display text-[13vw] leading-[0.95] text-ivory sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          Less. But better.
        </motion.h2>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:mt-24 md:gap-x-16">
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.65, 0, 0.35, 1] }}
              className="font-mono text-xs tracking-widest2 text-ivory/40 md:text-sm"
            >
              {word.toUpperCase()}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
