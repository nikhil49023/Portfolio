import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";

export const metadata: Metadata = {
  title: "Kilani Sai Nikhil — Developer & Builder",
  description:
    "Computer Science student building ML tools, full-stack applications, and computer vision systems. Creator of saara-ai, Vitt, and AerialEye.",
  keywords: ["developer", "ML", "computer vision", "full-stack", "Python", "Flutter", "Next.js"],
  authors: [{ name: "Kilani Sai Nikhil" }],
  openGraph: {
    title: "Kilani Sai Nikhil — Developer & Builder",
    description:
      "CS student. ML tools. Full-stack apps. Computer vision. Hyderabad, India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[var(--bg-void)] text-[var(--ink-primary)] selection:bg-[#D71920]/30 selection:text-white pb-24">
        <Background />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
