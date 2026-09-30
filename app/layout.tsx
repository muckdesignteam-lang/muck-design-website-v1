import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MUCK Design | The Path to Better Living",
  description: "Turnkey interior design, renovation, construction and built-in services for residential and commercial spaces.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
