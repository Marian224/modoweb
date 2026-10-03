'use client';

import { motion } from 'framer-motion';
import { signatureDishes } from '@/data/signature';

export default function SignatureDishes() {
  const [first, second, third] = signatureDishes;

  return (
    <section className="relative bg-charcoal pb-28 pt-6 md:pb-40">
      <div className="container-modo">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="mb-14 font-display text-4xl text-ivory sm:text-5xl md:mb-20 md:text-6xl"
        >
          Signature
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-6">
          <DishCard dish={first} className="md:col-span-7" imgClassName="aspect-[4/5] md:aspect-[4/5.4]" delay={0} />

          <div className="flex flex-col gap-8 md:col-span-5 md:gap-6 md:pt-16">
            <DishCard dish={second} imgClassName="aspect-[16/11]" delay={0.1} />
            <DishCard dish={third} imgClassName="aspect-[16/11]" delay={0.2} />
          </div>
        </div>
      </div>
    </section>
  );
}

function DishCard({
  dish,
  className = '',
  imgClassName = '',
  delay = 0,
}: {
  dish: (typeof signatureDishes)[number];
  className?: string;
  imgClassName?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.65, 0, 0.35, 1] }}
      className={className}
    >
      <div className={`group relative overflow-hidden ${imgClassName}`}>
        <img
          src={dish.image}
          alt={dish.alt}
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-modo group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
      </div>
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <h3 className="font-display text-2xl text-ivory md:text-[28px]">{dish.name}</h3>
          <p className="mt-1.5 max-w-sm font-body text-sm text-ivory/50">{dish.description}</p>
        </div>
        <span className="font-mono text-xs text-copper-muted">{dish.index}</span>
      </div>
    </motion.div>
  );
}
