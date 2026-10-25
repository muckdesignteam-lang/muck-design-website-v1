"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ProjectCTA } from "../project-system";
import { PdGrid } from "../pd-grid";

const finished = [
  ["/images/portfolio/golden-neo-bangna-suan-luang/tv-wall-front.jpg","Finished space"],
  ["/images/portfolio/golden-neo-bangna-suan-luang/tv-wall-staircase.jpg","Finished space"],
  ["/images/portfolio/golden-neo-bangna-suan-luang/workstation.jpg","Finished space"],
  ["/images/portfolio/golden-neo-bangna-suan-luang/workstation-detail.jpg","Finished space"],
  ["/images/portfolio/golden-neo-bangna-suan-luang/marble-counter.jpg","Finished space"],
  ["/images/portfolio/golden-neo-bangna-suan-luang/bar-and-display.jpg","Finished space"],
  ["/images/projects/golden-neo-bangna-suan-luang/finished-new-02.jpg","Finished space"],
  ["/images/projects/golden-neo-bangna-suan-luang/finished-new-01.jpg","Finished space"],
];

const process = [
  ["/images/projects/golden-neo-bangna-suan-luang/process-01.jpg","Process"],
  ["/images/projects/golden-neo-bangna-suan-luang/process-02.jpg","Process"],
  ["/images/projects/golden-neo-bangna-suan-luang/process-03.jpg","Process"],
  ["/images/projects/golden-neo-bangna-suan-luang/process-04.jpg","Process"],
  ["/images/projects/golden-neo-bangna-suan-luang/process-05.jpg","Process"],
  ["/images/projects/golden-neo-bangna-suan-luang/process-06.jpg","Process"],
  ["/images/projects/golden-neo-bangna-suan-luang/process-07.jpg","Process"],
  ["/images/projects/golden-neo-bangna-suan-luang/process-08.jpg","Process"],
  ["/images/projects/golden-neo-bangna-suan-luang/process-09.jpg","Process"],
];

export default function GoldenNeoProject(){
  const [lang,setLang]=useState<"th"|"en">("th");

  const overview = lang==="th"
    ? "งานออกแบบและ Built-in สำหรับบางพื้นที่ของบ้านพักอาศัย ทั้งผนังทีวี มุมทำงาน เคาน์เตอร์ และพื้นที่เก็บของ ออกแบบให้ใช้งานได้จริงและเข้ากับสไตล์ของบ้าน"
    : "Interior design and built-in work for selected areas of a home, including the TV wall, workstation, counter and storage, designed to be practical and consistent with the style of the home.";
  const processLead = lang==="th"
    ? "ภาพหน้างานจริงตั้งแต่สภาพบ้านก่อนเริ่มงาน งานฝ้า งานเคาน์เตอร์ ไปจนถึงการติดตั้ง Built-in ส่วนต่าง ๆ"
    : "Selected site images from the home before work began through ceiling works, counter construction and built-in installation.";

  return <main className="projectDetailPage">
    <header className="siteHeader">
      <Link className="brand" href="/" aria-label="MUCK Design home">
        <Image src="/logo/muck-logo.png" alt="MUCK Design" width={120} height={70} priority />
      </Link>
      <nav>
        <Link href="/projects">Projects</Link>
        <Link href="/#services">Services</Link>
        <Link href="/#process">How We Work</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
      <div className="headerActions">
        <button className="lang" onClick={()=>setLang(lang==="th"?"en":"th")}>
          {lang==="th"?"EN | TH":"TH | EN"}
        </button>
        <Link className="contactBtn" href="/#contact">CONTACT US →</Link>
      </div>
    </header>

    <section className="projectHeroMeta">
      <div>
        <p className="eyebrow">RESIDENTIAL · DESIGN & BUILT-IN</p>
        <h1>GOLDEN<br/>NEO</h1>
      </div>
      <div className="projectMetaGrid">
        <div><span>Category</span><strong>Residential · Design & Built-in</strong></div>
        <div><span>Location</span><strong>{lang==="th"?"สมุทรปราการ":"Samut Prakan"}</strong></div>
        <div><span>Scope</span><strong>Interior Design · Built-in · Selected Areas</strong></div>
      </div>
    </section>

    <section className="projectHeroImage">
      <Image src="/images/portfolio/golden-neo-bangna-suan-luang/hero.jpg" alt="Golden Neo Bangna–Suan Luang interior" fill priority quality={95} sizes="100vw"/>
    </section>

    <section className="projectOverviewText">
      <p className="eyebrow">PROJECT OVERVIEW</p>
      <p>{overview}</p>
    </section>

    <section className="projectGallerySection">
      <div className="sectionTitleRow"><h2>Finished Spaces</h2><i></i></div>
      <PdGrid items={finished} />
    </section>

    <section className="projectGallerySection">
      <div className="sectionTitleRow"><h2>Before &amp; Process</h2><i></i></div>
      <p className="projectSectionLead">{processLead}</p>
      <PdGrid items={process} />
    </section>

      <ProjectCTA lang={lang} />

    <footer>
      <div><span>Muck Design by BS&amp;P Beyond Home Design Co.,Ltd.</span><span>:</span><span>The Path to Better Living</span></div>
      <Link href="/projects">← BACK TO PROJECTS</Link>
    </footer>
  </main>
}
