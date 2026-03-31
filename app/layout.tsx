import type { Metadata } from 'next';
import './globals.css';

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
      <body>
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-[var(--bg-main)]" />
        </div>
        {children}
      </body>
    </html>
  );
}
