'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

// Demo/placeholder endpoint. Replace with a real Formspree (or other) form
// endpoint before this project goes live: https://formspree.io/f/your-id
const FORM_ENDPOINT = 'https://formspree.io/f/xxxxxxxx';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Reservation() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="reservation" className="relative bg-umber py-28 md:py-40">
      <div className="container-modo">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
              className="font-mono text-[11px] tracking-widest2 text-copper-light"
            >
              RESERVATIONS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.65, 0, 0.35, 1] }}
              className="mt-5 font-display text-5xl leading-[1.02] text-ivory sm:text-6xl md:text-7xl"
            >
              Your table is waiting.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
              className="mt-8 max-w-sm font-body text-ivory/60"
            >
              Tell us when you would like to visit and we will confirm your
              table by phone or email within one working day.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
              href="tel:+48610000000"
              className="mt-10 inline-flex items-center gap-3 border-t border-ivory/15 pt-8 font-mono text-sm tracking-wide text-ivory/70 transition-colors duration-300 hover:text-copper-light"
            >
              <Phone size={16} strokeWidth={1.5} />
              +48 61 000 00 00
            </motion.a>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.65, 0, 0.35, 1] }}
            onSubmit={handleSubmit}
            className="md:col-span-6 md:col-start-7"
            noValidate
          >
            <div className="grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2">
              <Field label="Name" name="name" type="text" required autoComplete="name" />
              <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
              <Field label="Email" name="email" type="email" required autoComplete="email" className="sm:col-span-2" />
              <Field label="Date" name="date" type="date" required />
              <Field label="Time" name="time" type="time" required />
              <Field label="Guests" name="guests" type="number" min={1} max={20} required className="sm:col-span-2" />
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="message" className="font-mono text-[11px] tracking-widest2 text-ivory/50">
                  MESSAGE (OPTIONAL)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="border-b border-ivory/20 bg-transparent py-2.5 font-body text-ivory outline-none transition-colors duration-300 placeholder:text-ivory/25 focus:border-copper-light"
                  placeholder="Allergies, special occasions, seating preference…"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="group mt-10 inline-flex items-center gap-3 bg-ivory px-7 py-4 font-mono text-xs tracking-widest2 text-charcoal transition-colors duration-300 hover:bg-copper-light hover:text-ivory disabled:opacity-60"
            >
              {status === 'submitting' ? 'SENDING…' : 'RESERVE TABLE'}
              <ArrowRight size={15} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <p className="mt-4 font-mono text-[10px] leading-relaxed tracking-wide text-ivory/30">
              Demo form — connect a real endpoint (e.g. Formspree) before launch.
            </p>

            {status === 'success' && (
              <p role="status" className="mt-4 font-body text-sm text-copper-light">
                Thank you — your request has been sent. We&apos;ll confirm shortly.
              </p>
            )}
            {status === 'error' && (
              <p role="alert" className="mt-4 font-body text-sm text-ivory/60">
                This is a demo endpoint, so submissions aren&apos;t delivered yet.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
  autoComplete,
  min,
  max,
  className = '',
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
  min?: number;
  max?: number;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={name} className="font-mono text-[11px] tracking-widest2 text-ivory/50">
        {label.toUpperCase()}
        {required && <span className="text-copper-light"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        min={min}
        max={max}
        className="border-b border-ivory/20 bg-transparent py-2.5 font-body text-ivory outline-none transition-colors duration-300 [color-scheme:dark] placeholder:text-ivory/25 focus:border-copper-light"
      />
    </div>
  );
}
