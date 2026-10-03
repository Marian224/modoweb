'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative flex h-[85vh] min-h-[520px] items-center overflow-hidden bg-charcoal"
    >
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <img
          src="https://images.unsplash.com/photo-1544148103-0773bf10d330?w=1800&q=80"
          alt="Intimate restaurant table set for dinner with soft candlelight and wine glasses"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
      </motion.div>

      <div className="container-modo relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
          className="max-w-xl font-display text-5xl leading-[1.02] text-ivory sm:text-6xl md:text-7xl"
        >
          Not just a dinner.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.65, 0, 0.35, 1] }}
          className="mt-6 max-w-sm font-body text-lg text-ivory/70"
        >
          An evening designed around taste, atmosphere and the details between them.
        </motion.p>
      </div>
    </section>
  );
}
