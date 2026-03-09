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
  title: 'Kilani Sai Nikhil — Full-Stack Developer',
  description:
    'B.Tech student & Full-Stack Developer specializing in high-performance Flutter apps, scalable FastAPI backends, and production-grade software engineering.',
  keywords: ['Full-Stack Developer', 'Flutter', 'FastAPI', 'Python', 'Backend Architect', 'Portfolio', 'Kilani Sai Nikhil'],
  authors: [{ name: 'Kilani Sai Nikhil' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} ${sora.variable}`}>
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-[#f0f9ff]" />
        </div>
        {children}
      </body>
    </html>
  );
}
