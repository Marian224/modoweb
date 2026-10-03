'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { menuCategories } from '@/data/menu';

export default function Menu() {
  const [activeId, setActiveId] = useState(menuCategories[0].id);
  const active = menuCategories.find((c) => c.id === activeId) ?? menuCategories[0];

  return (
    <section id="menu" className="relative bg-charcoal py-28 md:py-36">
      <div className="container-modo">
        <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[11px] tracking-widest2 text-copper-light">01 / MENU</p>
            <h2 className="mt-5 max-w-2xl font-display text-4xl leading-[1.02] text-ivory sm:text-5xl md:text-6xl">
              Simple. Precise. Unexpected.
            </h2>
          </div>
          <p className="max-w-xs font-mono text-[11px] leading-relaxed tracking-wide text-ivory/40">
            DEMO MENU — illustrative content for portfolio purposes only.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Menu categories"
          className="mb-10 flex flex-wrap gap-x-8 gap-y-3 border-b border-ivory/10 pb-6 md:mb-14"
        >
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              type="button"
              aria-selected={activeId === cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`relative font-mono text-xs tracking-widest2 transition-colors duration-300 ${
                activeId === cat.id ? 'text-ivory' : 'text-ivory/40 hover:text-ivory/70'
              }`}
            >
              {cat.label.toUpperCase()}
              {activeId === cat.id && (
                <motion.span
                  layoutId="menu-underline"
                  className="absolute -bottom-[26px] left-0 h-px w-full bg-copper-light"
                  transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
            className="grid grid-cols-1 gap-x-16 gap-y-2 md:grid-cols-2"
          >
            {active.items.map((item) => (
              <div
                key={item.name}
                className="flex items-start justify-between gap-6 border-b border-ivory/10 py-6"
              >
                <div>
                  <h3 className="font-display text-xl text-ivory md:text-2xl">{item.name}</h3>
                  <p className="mt-1.5 font-body text-sm text-ivory/50">{item.description}</p>
                </div>
                <span className="whitespace-nowrap font-mono text-sm text-copper-light">
                  {item.price}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
