import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GPA Optimizer – Optimize Your Class Schedule",
  description: "Analyzes professor ratings, course difficulty, and your learning patterns to suggest schedules that maximize your GPA."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="08eb05fa-2476-4e27-9a00-503aceddd3cf"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
