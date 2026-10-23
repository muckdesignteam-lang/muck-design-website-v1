"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ProjectCTA } from "../../projects/project-system";
import { PortfolioHeader, type Lang } from "../portfolio-header";
import { imageDimensions, projects, type Group, type Project } from "../projects-data";
import "../portfolio.css";

type Filter = "all" | Group;
type Photo = { src: string; project: Project };

const copy = {
  th: {
    kicker: "MUCK DESIGN / ภาพผลงานทั้งหมด",
    intro: "รวมภาพผลงานจากทุกโครงการในหน้าเดียว ทั้งบ้านพักอาศัยและพื้นที่ธุรกิจ คลิกที่ภาพเพื่อดูขนาดเต็ม",
    filters: { all: "ทั้งหมด", residential: "บ้านพักอาศัย", commercial: "พื้นที่ธุรกิจและร้านค้า" },
    back: "← กลับไปหน้าผลงาน",
    close: "ปิด",
  },
  en: {
    kicker: "MUCK DESIGN / ALL PHOTOS",
    intro: "Every project in one place, residential and commercial. Click any photo to view it full size.",
    filters: { all: "All", residential: "Residential", commercial: "Commercial" },
    back: "← BACK TO PORTFOLIO",
    close: "Close",
  },
} as const;

const allPhotos: Photo[] = (() => {
  const seen = new Set<string>();
  const out: Photo[] = [];
  for (const project of projects) {
    for (const src of project.images) {
      if (seen.has(src)) continue;
      seen.add(src);
      out.push({ src, project });
    }
  }
  return out;
})();

export default function PortfolioAllPage() {
  const [lang, setLang] = useState<Lang>("th");
  const [filter, setFilter] = useState<Filter>("all");
  const [viewer, setViewer] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const t = copy[lang];

  const photos = filter === "all" ? allPhotos : allPhotos.filter((p) => p.project.group === filter);
  const nameOf = (p: Project) => (lang === "th" ? p.th : p.en);
  const current = viewer !== null ? photos[viewer] : null;

  const step = useCallback(
    (d: number) => setViewer((i) => (i === null ? i : (i + d + photos.length) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (viewer === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setViewer(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      lastFocus.current?.focus();
    };
  }, [viewer === null, step]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main className="pfPage" lang={lang}>
      <PortfolioHeader lang={lang} onToggleLang={() => setLang(lang === "th" ? "en" : "th")} />

      <section className="pfIntro">
        <p className="pfKicker">{t.kicker}</p>
        <h1>PORTFOLIO</h1>
        <p className="pfIntroText">{t.intro}</p>
      </section>

      <div className="pfFilters" role="tablist" aria-label="Photo categories">
        {(["all", "residential", "commercial"] as Filter[]).map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            className={filter === f ? "pfChip on" : "pfChip"}
            onClick={() => setFilter(f)}
          >
            {t.filters[f]}
          </button>
        ))}
      </div>

      <section className="pfAllGrid" aria-label="All photos">
        {photos.map((p, i) => (
          <button
            type="button"
            className="pfAllItem"
            key={p.src}
            onClick={(e) => {
              lastFocus.current = e.currentTarget;
              setViewer(i);
            }}
            aria-label={`${nameOf(p.project)} — ${i + 1}`}
          >
            <Image
              src={p.src}
              alt={`${nameOf(p.project)} — ${i + 1}`}
              width={imageDimensions[p.src]?.[0] ?? 1200}
              height={imageDimensions[p.src]?.[1] ?? 900}
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
              priority={i < 3}
            />
            <span className="pfAllCaption">{nameOf(p.project)}</span>
          </button>
        ))}
      </section>

      <div className="pfExplore">
        <Link href="/portfolio" className="pfBtn">
          {t.back}
        </Link>
      </div>

      <ProjectCTA lang={lang} />

      <footer className="pfFooter">
        <span>Muck Design by BS&amp;P Beyond Home Design Co., Ltd.</span>
        <Link href="/privacy-policy">{lang === "th" ? "นโยบายความเป็นส่วนตัว" : "Privacy Policy"}</Link>
        <Link href="/">← BACK TO HOME</Link>
      </footer>

      {current && viewer !== null && (
        <div className="pfLightbox" role="dialog" aria-modal="true" aria-label={nameOf(current.project)} onClick={() => setViewer(null)}>
          <button ref={closeRef} className="pfLbClose" onClick={() => setViewer(null)}>
            {t.close} ✕
          </button>
          <button
            className="pfLbNav prev"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            ‹
          </button>
          <div className="pfLbStage" onClick={(e) => e.stopPropagation()}>
            <Image
              src={current.src}
              alt={nameOf(current.project)}
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
            />
          </div>
          <button
            className="pfLbNav next"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            ›
          </button>
          <p className="pfLbCaption" onClick={(e) => e.stopPropagation()}>
            {nameOf(current.project)} · {viewer + 1} / {photos.length}
          </p>
        </div>
      )}
    </main>
  );
}
