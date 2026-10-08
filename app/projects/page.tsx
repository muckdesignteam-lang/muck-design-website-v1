"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ProjectCTA, PROJECT_CATEGORY_COPY } from "./project-system";

const projectData = [
  {
    id: "new-home",
    category: "RESIDENTIAL · NEW HOME",
    title: "New Home",
    subtitle: "Interior & Built-in",
    image: "/images/project-new-home.jpg",
    th: "งานตกแต่งภายในและ Built-in สำหรับบ้านใหม่ โดยวางแผนพื้นที่และรายละเอียดงานให้เหมาะกับการใช้งานจริงของเจ้าของบ้าน",
    en: "Interior and built-in work for new homes, coordinated around practical use, detailing, materials and installation."
  },
  {
    id: "home-renovation",
    category: "RESIDENTIAL · RENOVATION",
    title: "Home Renovation",
    subtitle: "Renovation & Built-In",
    image: "/images/projects/passorn-8-bang-yai/hero-finished.jpg",
    th: "รีโนเวทบ้านพักอาศัยเดิม โดยประสานงานงานก่อสร้าง วัสดุ งานติดตั้ง และงานเก็บรายละเอียดจนพร้อมใช้งาน",
    en: "Residential renovation with coordinated construction, material detailing, installation and finishing through completion."
  },
  {
    id: "commercial",
    category: "COMMERCIAL",
    title: "Commercial",
    subtitle: PROJECT_CATEGORY_COPY.commercial.subtitle,
    image: "/images/projects/dental-clinic-chachoengsao/hero.jpg",
    th: PROJECT_CATEGORY_COPY.commercial.descriptionTh,
    en: PROJECT_CATEGORY_COPY.commercial.descriptionEn
  }
];

export default function ProjectsPage() {
  const [lang, setLang] = useState<"th"|"en">("th");

  return (
    <main className="projectsPage" lang={lang}>
      <header className="siteHeader">
        <Link className="brand" href="/" aria-label="MUCK Design home">
          <Image src="/logo/muck-logo.png" alt="MUCK Design" width={120} height={70} priority />
        </Link>
        <nav>
          <Link href="/projects">Projects</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#process">How We Work</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <div className="headerActions">
          <button className="lang" onClick={() => setLang(lang === "th" ? "en" : "th")}>
            {lang === "th" ? "EN | TH" : "TH | EN"}
          </button>
          <Link className="contactBtn" href="/#contact">CONTACT US →</Link>
        </div>
      </header>

      <section className="projectsIntro">
        <p className="eyebrow">MUCK DESIGN · SELECTED WORK</p>
        <h1>PROJECTS</h1>
        <p>
          {lang === "th"
            ? "ตัวอย่างผลงานที่สะท้อนแนวทางการทำงานของเรา ทั้งบ้านใหม่ งานรีโนเวท และพื้นที่เชิงพาณิชย์"
            : "Selected work across new homes, residential renovation and commercial spaces."}
        </p>
      </section>

      <section className="projectsOverview">
        {projectData.map((project, index) => (
          <article className="overviewProject" id={project.id} key={project.id}>
            <div className="overviewImage">
              <Image
                src={project.image}
                alt={project.title}
                fill
                quality={95}
                sizes="(max-width: 900px) 100vw, 58vw"
              />
            </div>
            <div className="overviewCopy">
              <span className="projectNumber">0{index + 1}</span>
              <p className="category">{project.category}</p>
              <h2>{project.title}</h2>
              <p className="overviewSubtitle">{project.subtitle}</p>
              <p className="overviewBody">{lang === "th" ? project.th : project.en}</p>
              {project.id==="new-home"
                ? <Link className="detailSoon detailReady" href="/projects/new-home">VIEW PROJECTS →</Link>
                : project.id==="home-renovation"
                ? <Link className="detailSoon detailReady" href="/projects/home-renovation">VIEW PROJECTS →</Link>
                : project.id==="commercial"
                ? <Link className="detailSoon detailReady" href="/projects/commercial">VIEW PROJECTS →</Link>
                : <span className="detailSoon">{lang === "th" ? "PROJECT DETAIL — กำลังจัดทำ" : "PROJECT DETAIL — COMING NEXT"}</span>}
            </div>
          </article>
        ))}
      </section>

      <ProjectCTA lang={lang} />

      <footer>
        <div>
          <span>Muck Design by BS&amp;P Beyond Home Design Co.,Ltd.</span>
          <span>:</span>
          <span>The Path to Better Living</span>
        </div>
        <Link href="/">← BACK TO HOME</Link>
      </footer>
    </main>
  );
}
