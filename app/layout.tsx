import type { Metadata } from 'next';
import { Space_Grotesk, Bricolage_Grotesque } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Kilani Sai Nikhil — Machine Learning Engineer',
  description:
    'Machine Learning Engineer specializing in LLM systems, RAG pipelines, computer vision, and scalable AI architecture.',
  keywords: ['Machine Learning Engineer', 'LLMs', 'RAG', 'Computer Vision', 'PyTorch', 'Hugging Face', 'Portfolio', 'Kilani Sai Nikhil'],
  authors: [{ name: 'Kilani Sai Nikhil' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${bricolage.variable}`}>
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-[#f7f3ef]" />
        </div>
        {children}
      </body>
    </html>
  );
}
