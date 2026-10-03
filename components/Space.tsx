'use client';

import { motion } from 'framer-motion';
import { spaceGallery } from '@/data/gallery';

export default function Space() {
  const [large, small1, small2, wide] = spaceGallery;

  return (
    <section id="space" className="relative bg-charcoal py-28 md:py-40">
      <div className="container-modo">
        <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[11px] tracking-widest2 text-copper-light">02 / SPACE</p>
            <h2 className="mt-5 max-w-xl font-display text-4xl leading-[1.02] text-ivory sm:text-5xl md:text-6xl">
              The room matters.
            </h2>
          </div>
          <p className="max-w-sm font-body text-sm leading-relaxed text-ivory/50 md:text-base">
            Architecture, tables, lighting and material chosen with the same
            care as what leaves the kitchen.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-5">
          <GalleryFrame img={large} className="md:col-span-7 md:row-span-2" ratio="aspect-[4/5] md:aspect-auto md:h-full" delay={0} />

          <div className="grid grid-cols-2 gap-5 md:col-span-5 md:grid-cols-1">
            <GalleryFrame img={small1} ratio="aspect-square md:aspect-[6/5]" delay={0.1} />
            <GalleryFrame img={small2} ratio="aspect-square md:aspect-[6/5]" delay={0.2} />
          </div>

          <GalleryFrame img={wide} className="md:col-span-12" ratio="aspect-[16/8]" delay={0.15} />
        </div>
      </div>
    </section>
  );
}

function GalleryFrame({
  img,
  className = '',
  ratio,
  delay,
}: {
  img: (typeof spaceGallery)[number];
  className?: string;
  ratio: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.65, 0, 0.35, 1] }}
      className={`group overflow-hidden ${ratio} ${className}`}
    >
      <img
        src={img.src}
        alt={img.alt}
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-modo group-hover:scale-[1.05]"
      />
    </motion.div>
  );
}
