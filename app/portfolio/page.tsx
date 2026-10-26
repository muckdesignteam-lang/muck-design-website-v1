"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ProjectCTA } from "../projects/project-system";
import { PortfolioHeader, type Lang } from "./portfolio-header";
import { imageDimensions, projects, type Group, type Project } from "./projects-data";
import "./portfolio.css";

type Filter = "all" | Group;

const LINE_URL = "https://lin.ee/xMvkeiO";
const totalPhotos = new Set(projects.flatMap((p) => p.images)).size;

const editorialLayoutMap: Record<number, ("full" | "half")[]> = {
  9: ["full", "half", "half", "full", "half", "half", "half", "half", "full"],
  7: ["full", "half", "half", "full", "half", "half", "full"],
  5: ["full", "half", "half", "half", "half"],
};

function getEditorialSpan(total: number, index: number) {
  const pattern = editorialLayoutMap[total];
  return pattern?.[index] ?? "half";
}

const copy = {
  th: {
    kicker: "MUCK DESIGN / ผลงานของเรา",
    intro:
      "ผลงานที่คัดสรรจากบ้านและพื้นที่ธุรกิจ ทั้งงานออกแบบ ก่อสร้าง รีโนเวท และบิลต์อิน ที่ออกแบบให้สวยงามและใช้งานได้จริงในทุกวัน",
    filters: { all: "ทั้งหมด", residential: "บ้านพักอาศัย", commercial: "พื้นที่ธุรกิจและร้านค้า" },
    view: "ดูโครงการ",
    close: "ปิด",
    exploreLine: `ภาพผลงานทั้งหมด ${totalPhotos} ภาพ จาก ${projects.length} โครงการ`,
    exploreBtn: "ดูผลงานทั้งหมด",
    ctaBtn: "TALK TO MUCK DESIGN",
  },
  en: {
    kicker: "MUCK DESIGN / OUR WORK",
    intro:
      "A curated selection of residential and commercial work: design, construction, renovation and built-in, made to look beautiful and work well every day.",
    filters: { all: "All", residential: "Residential", commercial: "Commercial" },
    view: "View project",
    close: "Close",
    exploreLine: `${totalPhotos} photos from ${projects.length} projects`,
    exploreBtn: "EXPLORE OUR PORTFOLIO",
    ctaBtn: "TALK TO MUCK DESIGN",
  },
} as const;

export default function PortfolioPage() {
  const [lang, setLang] = useState<Lang>("th");
  const [filter, setFilter] = useState<Filter>("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const t = copy[lang];

  const visible = filter === "all" ? projects : projects.filter((p) => p.group === filter);
  const active = projects.find((p) => p.id === openId) ?? null;
  const nameOf = (p: Project) => (lang === "th" ? p.th : p.en);

  useEffect(() => {
    if (!openId) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      lastFocus.current?.focus();
    };
  }, [openId]);

  const openProject = (id: string, el: HTMLElement) => {
    lastFocus.current = el;
    setOpenId(id);
  };

  return (
    <main className="pfPage" lang={lang}>
      <PortfolioHeader lang={lang} onToggleLang={() => setLang(lang === "th" ? "en" : "th")} />

      <section className="pfIntro">
        <p className="pfKicker">{t.kicker}</p>
        <h1>PORTFOLIO</h1>
        <p className="pfIntroText">{t.intro}</p>
      </section>

      <div className="pfFilters" role="tablist" aria-label="Project categories">
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

      <section className="pfGrid" aria-label="Projects">
        {visible.map((p, i) => (
          <button
            type="button"
            className="pfCard"
            key={p.id}
            onClick={(e) => openProject(p.id, e.currentTarget)}
            aria-label={`${nameOf(p)}: ${t.view}`}
          >
            <span className="pfCardImage">
              <Image
                src={p.cover}
                alt={nameOf(p)}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                priority={i < 2}
              />
            </span>
            <span className="pfCardInfo">
              <span className="pfCardName">{nameOf(p)}</span>
              <span className="pfCardMeta">{p.meta}</span>
            </span>
          </button>
        ))}
      </section>

      <section className="pfExplore">
        <p>{t.exploreLine}</p>
        <Link href="/portfolio/all" className="solidBtn">
          {t.exploreBtn} →
        </Link>
      </section>

      <ProjectCTA lang={lang} />

      <footer>
        <div>
          <span>Muck Design by BS&amp;P Beyond Home Design Co.,Ltd.</span>
          <span>:</span>
          <span>The Path to Better Living</span>
        </div>
        <Link href="/privacy-policy">{lang === "th" ? "นโยบายความเป็นส่วนตัว" : "Privacy Policy"}</Link>
        <Link href="/">← BACK TO HOME</Link>
      </footer>

      {active && (
        <div className="pfModal" role="dialog" aria-modal="true" aria-label={nameOf(active)} onClick={() => setOpenId(null)}>
          <div className="pfModalPanel" onClick={(e) => e.stopPropagation()}>
            <button ref={closeRef} className="pfModalClose" onClick={() => setOpenId(null)}>
              {t.close} ✕
            </button>
            <div className="pfModalHead">
              <p className="pfKicker">{active.meta}</p>
              <h2>{nameOf(active)}</h2>
              <p className="pfModalSub">{active.subtitle}</p>
            </div>
            <div className="pfModalGrid">
              {active.images.map((src, idx) => {
                const span = getEditorialSpan(active.images.length, idx);
                return (
                  <figure className={`pfModalItem ${span === "full" ? "is-full" : "is-half"}`} key={src}>
                    <Image
                      src={src}
                      alt={`${nameOf(active)} — ${idx + 1}`}
                      width={imageDimensions[src]?.[0] ?? 1200}
                      height={imageDimensions[src]?.[1] ?? 900}
                      sizes={span === "full" ? "100vw" : "(max-width: 700px) 100vw, 50vw"}
                      loading={idx < 3 ? "eager" : "lazy"}
                    />
                  </figure>
                );
              })}
            </div>
            <div className="pfModalFoot">
              <a href={LINE_URL} target="_blank" rel="noreferrer" className="solidBtn">
                {t.ctaBtn} ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
