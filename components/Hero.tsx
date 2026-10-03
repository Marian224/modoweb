'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.2]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-charcoal"
    >
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1800&q=80"
          alt="Dimly lit MODO dining room set with candlelight and warm reflections on dark wood tables"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/25 to-charcoal/50" />
        <div className="absolute inset-0 bg-charcoal/10" />
      </motion.div>

      <motion.div style={{ opacity: contentOpacity }} className="container-modo relative z-10 w-full pb-16 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
          className="mb-6 font-mono text-[11px] tracking-widest2 text-sand"
        >
          LESZNO / POLAND
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.65, 0, 0.35, 1] }}
          className="font-display text-[16vw] leading-[0.88] tracking-tight text-ivory sm:text-[13vw] md:text-[128px] lg:text-[168px]"
        >
          MODO
        </motion.h1>

        <div className="mt-6 flex flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: [0.65, 0, 0.35, 1] }}
            className="max-w-md font-display text-xl italic text-ivory/90 md:text-2xl"
          >
            Modern dining experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.65, 0, 0.35, 1] }}
            className="flex flex-wrap items-center gap-4 md:gap-6"
          >
            <a
              href="#reservation"
              className="group inline-flex items-center gap-3 bg-ivory px-6 py-4 font-mono text-xs tracking-widest2 text-charcoal transition-colors duration-300 hover:bg-copper-light hover:text-ivory"
            >
              RESERVE A TABLE
              <ArrowRight size={15} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 border-b border-ivory/40 pb-1 font-mono text-xs tracking-widest2 text-ivory/80 transition-colors duration-300 hover:border-copper-light hover:text-copper-light"
            >
              EXPLORE MENU
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-8 right-6 z-10 hidden flex-col items-center gap-3 md:right-12 md:flex"
      >
        <span className="font-mono text-[10px] tracking-widest2 text-ivory/50">SCROLL</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} strokeWidth={1.2} className="text-ivory/50" />
        </motion.span>
      </motion.div>
    </section>
  );
}
