const links = [
  { label: 'Menu', href: '#menu' },
  { label: 'Experience', href: '#experience' },
  { label: 'Space', href: '#space' },
  { label: 'Chef', href: '#chef' },
  { label: 'Contact', href: '#reservation' },
  { label: 'Instagram', href: 'https://instagram.com', external: true },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-ivory/10 bg-charcoal pb-10 pt-20 md:pt-28">
      <div className="container-modo">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <div>
            <p className="font-display text-4xl text-ivory md:text-5xl">MODO</p>
            <p className="mt-3 font-mono text-[11px] tracking-widest2 text-ivory/40">
              MODERN DINING EXPERIENCE
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                className="font-body text-sm text-ivory/60 transition-colors duration-300 hover:text-copper-light"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ivory/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] tracking-wide text-ivory/40">Leszno, Poland</p>
          <p className="font-mono text-[11px] tracking-wide text-ivory/30">
            © 2026 MODO — Website by RENFI DIGITAL
          </p>
        </div>
      </div>
    </footer>
  );
}
