import type { Metadata } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Grain from '@/components/Grain';
import Cursor from '@/components/Cursor';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  axes: ['opsz', 'SOFT', 'WONK'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ikenna Nwana — Law. Innovation. Impact.',
  description:
    'Ikenna Nwana — Trainee Associate at Wole Olanipekun & Co. Writing and building at the intersection of law, fintech, and Nigeria\u2019s innovation ecosystem.',
  openGraph: {
    title: 'Ikenna Nwana — Law. Innovation. Impact.',
    description:
      'Writing and building at the intersection of law, fintech, and Nigeria\u2019s innovation ecosystem.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>
        <Grain />
        <Cursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
