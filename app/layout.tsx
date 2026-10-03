import type { Metadata } from 'next';
import { Fraunces, Manrope, Space_Mono } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

const siteUrl = 'https://modo-leszno.example.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'MODO — Modern Dining Experience | Leszno',
  description:
    'MODO — współczesna restauracja w Lesznie. Kuchnia, przestrzeń i atmosfera stworzone jako jedno doświadczenie.',
  openGraph: {
    title: 'MODO — Modern Dining Experience | Leszno',
    description:
      'MODO — współczesna restauracja w Lesznie. Kuchnia, przestrzeń i atmosfera stworzone jako jedno doświadczenie.',
    url: siteUrl,
    siteName: 'MODO',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'MODO — Modern Dining Experience',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MODO — Modern Dining Experience | Leszno',
    description:
      'MODO — współczesna restauracja w Lesznie. Kuchnia, przestrzeń i atmosfera stworzone jako jedno doświadczenie.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${fraunces.variable} ${manrope.variable} ${spaceMono.variable}`}>
      <body className="bg-charcoal text-ivory font-body antialiased">
        {children}
      </body>
    </html>
  );
}
