'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/data/nav';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNavClick = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-modo ${
        scrolled || open
          ? 'bg-charcoal/95 backdrop-blur-sm border-b border-ivory/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container-modo flex h-[76px] items-center justify-between md:h-[84px]">
        <a
          href="#top"
          className="font-display text-[22px] tracking-[0.08em] text-ivory md:text-[24px]"
        >
          MODO
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex items-baseline gap-1.5 font-mono text-[11px] tracking-widest2 text-ivory/70 transition-colors duration-300 hover:text-ivory"
            >
              <span className="text-copper-light">{item.index}</span>
              <span>{item.label.toUpperCase()}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <a
            href="#reservation"
            className="hidden font-mono text-[11px] tracking-widest2 text-ivory md:inline-flex md:items-center md:gap-2 md:border md:border-ivory/30 md:px-5 md:py-2.5 md:transition-colors md:duration-300 md:hover:border-copper-light md:hover:text-copper-light"
          >
            RESERVE
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center text-ivory lg:hidden"
          >
            {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 flex h-[100dvh] w-full flex-col justify-center bg-charcoal px-8 lg:hidden"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile primary">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.08 * i, ease: [0.65, 0, 0.35, 1] }}
                  className="flex items-baseline gap-4 border-b border-ivory/10 py-4"
                >
                  <span className="font-mono text-xs text-copper-light">{item.index}</span>
                  <span className="font-display text-3xl italic text-ivory">{item.label}</span>
                </motion.a>
              ))}
            </nav>
            <motion.a
              href="#reservation"
              onClick={handleNavClick}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5, ease: [0.65, 0, 0.35, 1] }}
              className="mt-10 inline-flex w-fit items-center gap-2 border border-copper-light px-6 py-3.5 font-mono text-xs tracking-widest2 text-copper-light"
            >
              RESERVE A TABLE
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
