'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative flex h-[80vh] min-h-[520px] items-center justify-center overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=80"
          alt="Warmly lit MODO dining room in the evening, empty tables ready for guests"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/70" />
      </div>

      <div className="container-modo relative z-10 flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
          className="font-display text-[10vw] leading-[1.02] text-ivory sm:text-6xl md:text-7xl lg:text-[80px]"
        >
          Come for the food.
          <br />
          Stay for the moment.
        </motion.h2>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
          href="#reservation"
          className="group mt-12 inline-flex items-center gap-3 border border-ivory/40 px-8 py-4 font-mono text-xs tracking-widest2 text-ivory transition-colors duration-300 hover:border-copper-light hover:bg-copper-light hover:text-ivory"
        >
          RESERVE A TABLE
          <ArrowRight size={15} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
        </motion.a>
      </div>
    </section>
  );
}
