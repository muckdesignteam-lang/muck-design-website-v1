"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "./portfolio.css";

type Group = "residential" | "commercial";
type Project = {
  id: string;
  group: Group;
  th: string;
  en: string;
  subtitle: string;
  meta: string;
  cover: string;
  images: string[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: "moden",
    group: "residential",
    th: "โมเดน รังสิต คลอง 4",
    en: "Moden Rangsit Klong 4",
    subtitle: "Turnkey · 235 sqm",
    meta: "Residential · Turnkey",
    cover: "/images/projects/moden-rangsit-klong-4/finished-wide.jpg",
    images: [
      "/images/projects/moden-rangsit-klong-4/finished-wide.jpg",
      "/images/projects/moden-rangsit-klong-4/hero-finished13.jpg",
      "/images/projects/moden-rangsit-klong-4/finished-living.jpg",
      "/images/projects/moden-rangsit-klong-4/finished-bedroom.jpg",
      "/images/projects/moden-rangsit-klong-4/finished-kitchen.jpg",
      "/images/projects/moden-rangsit-klong-4/finished-pantry.jpg",
      "/images/projects/moden-rangsit-klong-4/finished-shrine.jpg",
    ],
    featured: true,
  },
  {
    id: "ai",
    group: "residential",
    th: "อัยย์ ราชพฤกษ์",
    en: "Ai Ratchaphruek",
    subtitle: "Turnkey · 260 sqm",
    meta: "Residential · Turnkey",
    cover: "/images/portfolio/ai-ratchaphruek/hero.jpg",
    images: [
      "/images/portfolio/ai-ratchaphruek/hero.jpg",
      "/images/portfolio/ai-ratchaphruek/tv-wall-detail.jpg",
      "/images/portfolio/ai-ratchaphruek/living-overview.jpg",
      "/images/portfolio/ai-ratchaphruek/walk-in-closet.jpg",
      "/images/portfolio/ai-ratchaphruek/glass-cabinet.jpg",
      "/images/portfolio/ai-ratchaphruek/wardrobe.jpg",
      "/images/portfolio/ai-ratchaphruek/display-cabinet.jpg",
    ],
    featured: true,
  },
  {
    id: "bangkok",
    group: "residential",
    th: "บางกอก บูเลอวาร์ด ติวานนท์-รังสิต",
    en: "Bangkok Boulevard Tiwanon–Rangsit",
    subtitle: "Renovation & Built-in",
    meta: "Residential · Renovation & Built-in",
    cover: "/images/projects/bangkok-boulevard-tiwanon-rangsit/hero.jpg",
    images: [
      "/images/projects/bangkok-boulevard-tiwanon-rangsit/hero.jpg",
      "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-01.jpg",
      "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-02.jpg",
      "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-03.jpg",
      "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-04.jpg",
      "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-05.jpg",
      "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-06.jpg",
    ],
  },
  {
    id: "passorn",
    group: "residential",
    th: "ภัสสร 8 บางใหญ่",
    en: "Passorn 8 Bang Yai",
    subtitle: "Home Renovation",
    meta: "Residential · Home Renovation",
    cover: "/images/projects/passorn-8-bang-yai/hero-finished.jpg",
    images: [
      "/images/projects/passorn-8-bang-yai/hero-finished.jpg",
      "/images/projects/passorn-8-bang-yai/finished-exterior-wide.jpg",
      "/images/projects/passorn-8-bang-yai/finished-exterior-front.jpg",
      "/images/projects/passorn-8-bang-yai/finished-kitchen.jpg",
      "/images/projects/passorn-8-bang-yai/finished-bedroom.jpg",
      "/images/projects/passorn-8-bang-yai/finished-walkin.jpg",
      "/images/projects/passorn-8-bang-yai/finished-bathroom.jpg",
    ],
  },
  {
    id: "soi-aree-8",
    group: "residential",
    th: "ซอยอารีย์ 8",
    en: "Soi Aree 8",
    subtitle: "Built-in Construction · Homeowner’s Design",
    meta: "Residential · Built-in Construction",
    cover: "/images/portfolio/soi-aree-8/hero.jpg",
    images: [
      "/images/portfolio/soi-aree-8/hero.jpg",
      "/images/portfolio/soi-aree-8/wood-partition.jpg",
      "/images/portfolio/soi-aree-8/kitchen.jpg",
      "/images/portfolio/soi-aree-8/dining-overview.jpg",
      "/images/portfolio/soi-aree-8/built-in-shelves.jpg",
      "/images/portfolio/soi-aree-8/wardrobe.jpg",
      "/images/portfolio/soi-aree-8/study-and-cabinetry.jpg",
    ],
    featured: true,
  },
  {
    id: "golden-neo",
    group: "residential",
    th: "โกลเด้น นีโอ บางนา–สวนหลวง",
    en: "Golden Neo Bangna–Suan Luang",
    subtitle: "Design & Built-in · Selected Areas",
    meta: "Residential · Design & Built-in",
    cover: "/images/portfolio/golden-neo-bangna-suan-luang/hero.jpg",
    images: [
      "/images/portfolio/golden-neo-bangna-suan-luang/hero.jpg",
      "/images/portfolio/golden-neo-bangna-suan-luang/tv-wall-front.jpg",
      "/images/portfolio/golden-neo-bangna-suan-luang/tv-wall-staircase.jpg",
      "/images/portfolio/golden-neo-bangna-suan-luang/workstation.jpg",
      "/images/portfolio/golden-neo-bangna-suan-luang/workstation-detail.jpg",
      "/images/portfolio/golden-neo-bangna-suan-luang/marble-counter.jpg",
      "/images/portfolio/golden-neo-bangna-suan-luang/bar-and-display.jpg",
    ],
    featured: true,
  },
  {
    id: "dental",
    group: "commercial",
    th: "คลินิกทันตกรรม ฉะเชิงเทรา",
    en: "Dental Clinic Chachoengsao",
    subtitle: "Commercial Interior",
    meta: "Commercial · Clinic Interior",
    cover: "/images/projects/dental-clinic-chachoengsao/hero.jpg",
    images: [
      "/images/projects/dental-clinic-chachoengsao/hero.jpg",
      "/images/projects/dental-clinic-chachoengsao/finished-01.jpg",
      "/images/projects/dental-clinic-chachoengsao/finished-02.jpg",
      "/images/projects/dental-clinic-chachoengsao/finished-03.jpg",
      "/images/projects/dental-clinic-chachoengsao/finished-04.jpg",
      "/images/projects/dental-clinic-chachoengsao/finished-05.jpg",
      "/images/projects/dental-clinic-chachoengsao/finished-06.jpg",
    ],
    featured: true,
  },
  {
    id: "optic-shop",
    group: "commercial",
    th: "ร้านแว่นตา",
    en: "Optic Shop",
    subtitle: "Retail Interior & Display",
    meta: "Commercial · Optical Retail",
    cover: "/images/portfolio/optic-shop/hero.png",
    images: [
      "/images/portfolio/optic-shop/hero.png",
      "/images/portfolio/optic-shop/display-wall.png",
      "/images/portfolio/optic-shop/showroom-angle.png",
      "/images/portfolio/optic-shop/corridor.png",
    ],
    featured: true,
  },
];

// Editorial sequence: four residential and two commercial projects.
const imageDimensions: Record<string, [number, number]> = {
  "/images/portfolio/ai-ratchaphruek/display-cabinet.jpg": [
    2048,
    1536
  ],
  "/images/portfolio/ai-ratchaphruek/glass-cabinet.jpg": [
    1359,
    2048
  ],
  "/images/portfolio/ai-ratchaphruek/hero.jpg": [
    1535,
    2048
  ],
  "/images/portfolio/ai-ratchaphruek/living-overview.jpg": [
    1536,
    2048
  ],
  "/images/portfolio/ai-ratchaphruek/tv-wall-detail.jpg": [
    1508,
    2048
  ],
  "/images/portfolio/ai-ratchaphruek/walk-in-closet.jpg": [
    1219,
    864
  ],
  "/images/portfolio/ai-ratchaphruek/wardrobe.jpg": [
    1357,
    1101
  ],
  "/images/portfolio/golden-neo-bangna-suan-luang/bar-and-display.jpg": [
    1500,
    2000
  ],
  "/images/portfolio/golden-neo-bangna-suan-luang/hero.jpg": [
    2000,
    1500
  ],
  "/images/portfolio/golden-neo-bangna-suan-luang/marble-counter.jpg": [
    1500,
    2000
  ],
  "/images/portfolio/golden-neo-bangna-suan-luang/tv-wall-front.jpg": [
    1500,
    2000
  ],
  "/images/portfolio/golden-neo-bangna-suan-luang/tv-wall-staircase.jpg": [
    1500,
    2000
  ],
  "/images/portfolio/golden-neo-bangna-suan-luang/workstation-detail.jpg": [
    1500,
    2000
  ],
  "/images/portfolio/golden-neo-bangna-suan-luang/workstation.jpg": [
    2000,
    1500
  ],
  "/images/portfolio/optic-shop/corridor.png": [
    1024,
    1536
  ],
  "/images/portfolio/optic-shop/display-wall.png": [
    1024,
    1536
  ],
  "/images/portfolio/optic-shop/hero.png": [
    1024,
    1536
  ],
  "/images/portfolio/optic-shop/showroom-angle.png": [
    1024,
    1536
  ],
  "/images/portfolio/soi-aree-8/built-in-shelves.jpg": [
    1500,
    2000
  ],
  "/images/portfolio/soi-aree-8/dining-overview.jpg": [
    2000,
    1500
  ],
  "/images/portfolio/soi-aree-8/hero.jpg": [
    1448,
    1086
  ],
  "/images/portfolio/soi-aree-8/kitchen.jpg": [
    2000,
    1330
  ],
  "/images/portfolio/soi-aree-8/study-and-cabinetry.jpg": [
    1500,
    2000
  ],
  "/images/portfolio/soi-aree-8/wardrobe.jpg": [
    1500,
    2000
  ],
  "/images/portfolio/soi-aree-8/wood-partition.jpg": [
    1500,
    2000
  ],
  "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-01.jpg": [
    1536,
    2048
  ],
  "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-02.jpg": [
    1536,
    2048
  ],
  "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-03.jpg": [
    1536,
    2048
  ],
  "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-04.jpg": [
    1536,
    2048
  ],
  "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-05.jpg": [
    2048,
    1536
  ],
  "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-06.jpg": [
    1536,
    2048
  ],
  "/images/projects/bangkok-boulevard-tiwanon-rangsit/hero.jpg": [
    1448,
    1086
  ],
  "/images/projects/dental-clinic-chachoengsao/finished-01.jpg": [
    1536,
    2048
  ],
  "/images/projects/dental-clinic-chachoengsao/finished-02.jpg": [
    1536,
    2048
  ],
  "/images/projects/dental-clinic-chachoengsao/finished-03.jpg": [
    2048,
    1536
  ],
  "/images/projects/dental-clinic-chachoengsao/finished-04.jpg": [
    1536,
    2048
  ],
  "/images/projects/dental-clinic-chachoengsao/finished-05.jpg": [
    2048,
    1536
  ],
  "/images/projects/dental-clinic-chachoengsao/finished-06.jpg": [
    1536,
    2048
  ],
  "/images/projects/dental-clinic-chachoengsao/hero.jpg": [
    1535,
    2047
  ],
  "/images/projects/moden-rangsit-klong-4/finished-bedroom.jpg": [
    2048,
    1020
  ],
  "/images/projects/moden-rangsit-klong-4/finished-kitchen.jpg": [
    2048,
    1536
  ],
  "/images/projects/moden-rangsit-klong-4/finished-living.jpg": [
    2048,
    1536
  ],
  "/images/projects/moden-rangsit-klong-4/finished-pantry.jpg": [
    1477,
    1108
  ],
  "/images/projects/moden-rangsit-klong-4/finished-shrine.jpg": [
    1029,
    1372
  ],
  "/images/projects/moden-rangsit-klong-4/finished-wide.jpg": [
    1423,
    1067
  ],
  "/images/projects/moden-rangsit-klong-4/hero-finished13.jpg": [
    2048,
    1536
  ],
  "/images/projects/passorn-8-bang-yai/finished-bathroom.jpg": [
    1536,
    2048
  ],
  "/images/projects/passorn-8-bang-yai/finished-bedroom.jpg": [
    1448,
    1086
  ],
  "/images/projects/passorn-8-bang-yai/finished-exterior-front.jpg": [
    1448,
    1086
  ],
  "/images/projects/passorn-8-bang-yai/finished-exterior-wide.jpg": [
    1448,
    1086
  ],
  "/images/projects/passorn-8-bang-yai/finished-kitchen.jpg": [
    1086,
    1448
  ],
  "/images/projects/passorn-8-bang-yai/finished-walkin.jpg": [
    1535,
    2048
  ],
  "/images/projects/passorn-8-bang-yai/hero-finished.jpg": [
    2048,
    1536
  ]
};

type Filter = "all" | Group;

const copy = {
  th: {
    kicker: "MUCK DESIGN / ผลงานของเรา",
    intro:
      "ผลงานที่คัดสรรจากบ้านและพื้นที่ธุรกิจ ทั้งงานออกแบบ ก่อสร้าง รีโนเวท และบิลต์อิน ที่ออกแบบให้สวยงามและใช้งานได้จริงในทุกวัน",
    filters: { all: "ทั้งหมด", residential: "บ้านพักอาศัย", commercial: "เชิงพาณิชย์" },
    view: "ดูโครงการ",
    close: "ปิด",
    ctaKicker: "เริ่มต้นโครงการ",
    ctaTitle: "พร้อมสร้างบ้านในฝันของคุณหรือยัง?",
    ctaBtn: "คุยกับ MUCK DESIGN",
    privacy: "นโยบายความเป็นส่วนตัว",
  },
  en: {
    kicker: "MUCK DESIGN / OUR WORK",
    intro:
      "A curated selection of residential and commercial work: design, construction, renovation and built-in, made to look beautiful and work well every day.",
    filters: { all: "All", residential: "Residential", commercial: "Commercial" },
    view: "View project",
    close: "Close",
    ctaKicker: "START A PROJECT",
    ctaTitle: "Ready to create your dream space?",
    ctaBtn: "TALK TO MUCK DESIGN",
    privacy: "Privacy Policy",
  },
} as const;

const LINE_URL = "https://lin.ee/xMvkeiO";

export default function PortfolioPage() {
  const [lang, setLang] = useState<"th" | "en">("th");
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
          <button className="pfLang" onClick={() => setLang(lang === "th" ? "en" : "th")}>
            {lang === "th" ? "EN | TH" : "TH | EN"}
          </button>
        </nav>
      </header>

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

      <section className="pfCta">
        <p className="pfCtaKicker">{t.ctaKicker}</p>
        <h2>{t.ctaTitle}</h2>
        <a href={LINE_URL} target="_blank" rel="noreferrer" className="pfBtn">
          {t.ctaBtn} ↗
        </a>
      </section>

      <footer className="pfFooter">
        <span>Muck Design by BS&amp;P Beyond Home Design Co., Ltd.</span>
        <Link href="/privacy-policy">{t.privacy}</Link>
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
              {active.images.map((src, idx) => (
                <figure className="pfModalItem" key={src}>
                  <Image
                    src={src}
                    alt={`${nameOf(active)} — ${idx + 1}`}
                    width={imageDimensions[src]?.[0] ?? 1200}
                    height={imageDimensions[src]?.[1] ?? 900}
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    loading={idx < 3 ? "eager" : "lazy"}
                  />
                </figure>
              ))}
            </div>
            <div className="pfModalFoot">
              <a href={LINE_URL} target="_blank" rel="noreferrer" className="pfBtn">
                {t.ctaBtn} ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
