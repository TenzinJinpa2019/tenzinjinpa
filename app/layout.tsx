import type { ReactNode } from "react";

export const metadata = {
  title: "Tenzin Jinpa — AI/ML & Software R&D Lead",
  description: "Strategic Research & Innovation Leader in AI and Software with a track record of advancing innovation, securing government funding (IRAP, MITACS, NSERC, TAC), and mentoring cross‑functional teams to deliver commercially successful solutions for 30+ SMEs.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0b0c10", color: "#e8e8ea", fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto" }}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        {children}
      </body>
    </html>
  );
}
