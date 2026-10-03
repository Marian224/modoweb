'use client';

import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section className="relative bg-charcoal py-28 md:py-40">
      <div className="container-modo">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
            className="md:col-span-2"
          >
            <span className="font-display text-6xl italic text-copper-muted md:text-7xl">01</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.65, 0, 0.35, 1] }}
            className="font-display text-[13vw] leading-[0.92] text-ivory sm:text-6xl md:col-span-10 md:text-[74px] lg:text-[92px]"
          >
            Food. Space. Moment.
          </motion.h2>

          <div className="md:col-span-2" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
            className="max-w-lg font-body text-lg leading-relaxed text-ivory/70 md:col-span-6 md:text-xl"
          >
            MODO to współczesna restauracja, w której kuchnia, przestrzeń i
            atmosfera tworzą jedno doświadczenie.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
            className="flex flex-col gap-8 border-t border-ivory/10 pt-8 md:col-span-4 md:flex-row md:border-t-0 md:border-l md:border-ivory/10 md:pl-10 md:pt-0"
          >
            <div>
              <p className="font-mono text-[11px] tracking-widest2 text-sand">EST.</p>
              <p className="mt-2 font-display text-2xl text-ivory">2019</p>
            </div>
            <div>
              <p className="font-mono text-[11px] tracking-widest2 text-sand">SEATS</p>
              <p className="mt-2 font-display text-2xl text-ivory">48</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
