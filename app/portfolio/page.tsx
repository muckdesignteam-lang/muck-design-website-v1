"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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

const featuredOrder = ["moden", "ai", "optic-shop", "soi-aree-8", "golden-neo", "dental"];
const featuredProjects = featuredOrder.map((id) => projects.find((p) => p.id === id)!).filter(Boolean);


export default function PortfolioPage() {
  const [lang, setLang] = useState<"th" | "en">("th");

  return (
    <main className="portfolioPage" lang={lang}>
      <header className="portfolioHeader">
        <Link href="/" aria-label="MUCK Design home" className="portfolioBrand">
          <Image src="/logo/muck-logo.png" width={116} height={68} alt="MUCK Design" priority />
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link className="active" href="/portfolio" aria-current="page">
            Portfolio
          </Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <button className="portfolioLang" onClick={() => setLang(lang === "th" ? "en" : "th")}>
          {lang === "th" ? "EN | TH" : "TH | EN"}
        </button>
      </header>

      <div className="portfolioInner">
        <section className="portfolioIntro">
          <p className="portfolioKicker">MUCK DESIGN / {lang === "th" ? "ผลงานของเรา" : "OUR WORK"}</p>
          <h1>Spaces, thoughtfully made.</h1>
          <p>
            {lang === "th"
              ? "รวมผลงานบ้านและพื้นที่ธุรกิจที่ MUCK Design ออกแบบ ก่อสร้าง รีโนเวท และผลิตงานบิลต์อิน โดยคัดเลือกภาพเด่นไว้ด้านบน และรวมภาพทั้งหมดไว้ในหน้าพอร์ตโฟลิโอด้านล่าง"
              : "A curated collection of residential and commercial work by MUCK Design, with selected covers above and the full portfolio gathered below in one continuous gallery."}
          </p>
        </section>

        <section className="portfolioFeaturedSection" aria-labelledby="selected-works-title">
          <div className="portfolioSectionHead">
            <div>
              <p className="portfolioKicker">SELECTED WORKS</p>
              <h2 id="selected-works-title">{lang === "th" ? "โครงการเด่น" : "Featured Projects"}</h2>
            </div>
          </div>

          <div className="portfolioFeaturedGrid">
            {featuredProjects.map((project) => (
              <a className="portfolioFeaturedCard" href={`#portfolio-project-${project.id}`} key={project.id} aria-label={`${lang === "th" ? project.th : project.en}: ${lang === "th" ? "ดูภาพโครงการ" : "View project photos"}`}>
                <div className="portfolioFeaturedImage">
                  <Image
                    src={project.cover}
                    alt={lang === "th" ? project.th : project.en}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    priority
                  />
                </div>
                <div className="portfolioFeaturedInfo">
                  <p className="portfolioNumber">{project.group === "residential" ? "RESIDENTIAL" : "COMMERCIAL"}</p>
                  <h3>{lang === "th" ? project.th : project.en}</h3>
                  <p>{project.subtitle}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="portfolioExploreRow">
            <a href="#portfolio-all" className="portfolioAnchorBtn">
              {lang === "th" ? "ชมพอร์ตโฟลิโอทั้งหมด" : "EXPLORE OUR PORTFOLIO"} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="portfolioAllSection" id="portfolio-all" aria-labelledby="portfolio-all-title">
          <div className="portfolioSectionHead portfolioSectionHeadTight">
            <div>
              <p className="portfolioKicker">FULL PORTFOLIO</p>
              <h2 id="portfolio-all-title">{lang === "th" ? "ผลงานทั้งหมด" : "All Project Photos"}</h2>
            </div>
          </div>

          <div className="portfolioProjectList">
            {projects.map((project, projectIndex) => (
              <article className="portfolioProjectBlock" id={`portfolio-project-${project.id}`} key={project.id}>
                <div className="portfolioProjectHeader">
                  <div>
                    <p className="portfolioNumber">
                      {String(projectIndex + 1).padStart(2, "0")} / {project.group === "residential" ? "RESIDENTIAL" : "COMMERCIAL"}
                    </p>
                    <h3>{lang === "th" ? project.th : project.en}</h3>
                    <p>{project.subtitle}</p>
                  </div>
                  <span className="portfolioProjectMeta">{project.meta}</span>
                </div>

                <div className="portfolioMosaicGrid">
                  {project.images.map((src, imageIndex) => (
                    <figure className="portfolioMosaicItem" key={src}>
                      <Image
                        src={src}
                        alt={`${lang === "th" ? project.th : project.en} — ${imageIndex + 1}`}
                        width={imageDimensions[src]?.[0] ?? 1200}
                        height={imageDimensions[src]?.[1] ?? 900}
                        sizes="(max-width: 700px) 100vw, (max-width: 900px) 50vw, 33vw"
                        loading="lazy"
                      />
                    </figure>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="portfolioEnd">
          <p>{lang === "th" ? "สนใจเริ่มต้นโครงการกับเรา" : "Have a space in mind?"}</p>
          <a href="https://lin.ee/xMvkeiO" target="_blank" rel="noreferrer">
            TALK TO MUCK DESIGN ↗
          </a>
        </section>
      </div>

      <footer className="portfolioFooter">
        <span>Muck Design by BS&amp;P Beyond Home Design Co., Ltd.</span>
        <Link href="/privacy-policy">{lang === "th" ? "นโยบายความเป็นส่วนตัว" : "Privacy Policy"}</Link>
        <Link href="/">← BACK TO HOME</Link>
      </footer>
    </main>
  );
}
