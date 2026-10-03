'use client';

import { motion } from 'framer-motion';

export default function Chef() {
  return (
    <section id="chef" className="relative bg-umber py-28 md:py-40">
      <div className="container-modo">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
            className="overflow-hidden md:col-span-5"
          >
            <img
              src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=1000&q=80"
              alt="Portrait of the MODO head chef plating a dish in the kitchen, fictional profile for demonstration"
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>

          <div className="flex flex-col justify-center md:col-span-6 md:col-start-7">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
              className="font-mono text-[11px] tracking-widest2 text-copper-light"
            >
              03 / CHEF
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.65, 0, 0.35, 1] }}
              className="mt-5 font-display text-4xl leading-[1.05] text-ivory sm:text-5xl md:text-[52px]"
            >
              The person behind the plate.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
              className="mt-8 max-w-md font-display text-xl italic leading-relaxed text-sand"
            >
              Kuchnia, która nie potrzebuje nadmiaru.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
              className="mt-6 max-w-md font-body leading-relaxed text-ivory/60"
            >
              Trained across kitchens in Copenhagen and Lyon before returning
              to build MODO around one idea: let a small number of good
              ingredients speak for themselves. The menu changes with the
              seasons, not with trends.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.65, 0, 0.35, 1] }}
              className="mt-10 border-t border-ivory/10 pt-6"
            >
              <p className="font-mono text-[11px] tracking-widest2 text-ivory/40">
                HEAD CHEF — MODO, LESZNO (FICTIONAL PROFILE)
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
