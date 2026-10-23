"use client";

import Image from "next/image";
import Link from "next/link";

export type Lang = "th" | "en";

export function PortfolioHeader({ lang, onToggleLang }: { lang: Lang; onToggleLang: () => void }) {
  return (
    <header className="pfHeader">
      <Link href="/" aria-label="MUCK Design home" className="pfBrand">
        <Image src="/logo/muck-logo.png" width={116} height={68} alt="MUCK Design" priority />
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link className="active" href="/portfolio" aria-current="page">
          Portfolio
        </Link>
        <Link href="/#contact">Contact</Link>
        <button className="pfLang" onClick={onToggleLang}>
          {lang === "th" ? "EN | TH" : "TH | EN"}
        </button>
      </nav>
    </header>
  );
}
