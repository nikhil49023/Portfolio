import type { Metadata } from 'next';
import { Sora, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Kilani Sai Nikhil — AI Developer',
  description:
    'B.Tech student & AI Developer specializing in LLMs, Agentic Architectures, and Open-Source tooling. Builder of WealthIn and SAARA.',
  keywords: ['AI Developer', 'LLMs', 'Flutter', 'FastAPI', 'Agentic', 'Portfolio', 'Kilani Sai Nikhil'],
  authors: [{ name: 'Kilani Sai Nikhil' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} ${sora.variable}`}>{children}</body>
    </html>
  );
}
