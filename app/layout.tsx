import "./globals.css";
import type { Metadata } from "next";
import { Manrope, IBM_Plex_Sans_Thai } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const ibmPlexThai = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-thai",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MUCK Design | The Path to Better Living",
  description: "Turnkey interior design, renovation, construction and built-in services.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={`${manrope.variable} ${ibmPlexThai.variable}`}>
      <body>{children}</body>
    </html>
  );
}
