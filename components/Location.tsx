'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const hours = [
  { days: 'Monday — Friday', time: '12:00 — 22:00' },
  { days: 'Saturday', time: '12:00 — 23:00' },
  { days: 'Sunday', time: '12:00 — 20:00' },
];

export default function Location() {
  return (
    <section className="relative bg-charcoal py-28 md:py-40">
      <div className="container-modo">
        <p className="font-mono text-[11px] tracking-widest2 text-copper-light">04 / FIND US</p>

        <div className="mt-8 grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
            className="md:col-span-6"
          >
            <h2 className="font-display text-5xl text-ivory sm:text-6xl">MODO</h2>
            <p className="mt-4 font-body text-lg text-ivory/60">
              Leszno 64-100, Poland
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=MODO+Restaurant+Leszno+Poland"
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-3 border-b border-ivory/30 pb-1.5 font-mono text-xs tracking-widest2 text-ivory transition-colors duration-300 hover:border-copper-light hover:text-copper-light"
            >
              GET DIRECTIONS
              <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.65, 0, 0.35, 1] }}
            className="md:col-span-5 md:col-start-8"
          >
            <p className="font-mono text-[11px] tracking-widest2 text-ivory/40">OPENING HOURS</p>
            <dl className="mt-6 flex flex-col gap-4">
              {hours.map((h) => (
                <div key={h.days} className="flex items-baseline justify-between border-b border-ivory/10 pb-4">
                  <dt className="font-body text-ivory/70">{h.days}</dt>
                  <dd className="font-mono text-sm text-ivory">{h.time}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
