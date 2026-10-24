"use client";

import Image from "next/image";
import Link from "next/link";

export type Lang = "th" | "en";

export function PortfolioHeader({ lang, onToggleLang }: { lang: Lang; onToggleLang: () => void }) {
  return (
    <header className="siteHeader">
      <Link className="brand" href="/" aria-label="MUCK Design home">
        <Image src="/logo/muck-logo.png" alt="MUCK Design" width={120} height={70} priority />
      </Link>
      <nav>
        <Link href="/#projects">Projects</Link>
        <Link className="pfNavActive" href="/portfolio" aria-current="page">
          Portfolio
        </Link>
        <Link href="/#services">Services</Link>
        <Link href="/#process">How We Work</Link>
        <Link href="/#about">About</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
      <div className="headerActions">
        <button className="lang" onClick={onToggleLang}>
          {lang === "th" ? "EN | TH" : "TH | EN"}
        </button>
        <Link className="contactBtn" href="/#contact">
          CONTACT US →
        </Link>
      </div>
    </header>
  );
}
