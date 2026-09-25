import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "Kilani Sai Nikhil — Systems, Autonomous Robotics & Physical AI",
  description:
    "High-Agency Systems, Robotics & AI Engineer based in Hyderabad, India. Architect of Project SUTRA (Autonomous UAV Swarm, 50Hz DDS), Vitt (100% On-Device AI), saara-ai (Dataset Distillation CLI), and AerialEye.",
  keywords: [
    "Kilani Sai Nikhil",
    "Robotics Engineer",
    "Systems Architecture",
    "ROS 2",
    "PX4 Autopilot",
    "MicroXRCE-DDS",
    "Edge AI",
    "TensorRT",
    "LiteRT",
    "C++17",
    "Python",
    "Autonomous Swarm",
    "Hyderabad"
  ],
  authors: [{ name: "Kilani Sai Nikhil" }],
  openGraph: {
    title: "Kilani Sai Nikhil — Systems, Autonomous Robotics & Physical AI",
    description:
      "Deterministic autonomy, 50Hz offboard swarm avionics, and sovereign on-device intelligence on bare silicon.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  document.documentElement.classList.remove('dark');
                  localStorage.setItem('theme', 'light');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[var(--bg-void)] text-[var(--ink-primary)] selection:bg-[#D71920]/30 selection:text-white pb-24">
        <SmoothScroll />
        <Cursor />
        <Background />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
