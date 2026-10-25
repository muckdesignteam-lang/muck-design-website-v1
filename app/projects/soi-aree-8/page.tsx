"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ProjectCTA } from "../project-system";
import { PdGrid } from "../pd-grid";

const finished = [
  ["/images/portfolio/soi-aree-8/dining-overview.jpg","Finished space"],
  ["/images/portfolio/soi-aree-8/kitchen.jpg","Finished space"],
  ["/images/portfolio/soi-aree-8/wood-partition.jpg","Finished space"],
  ["/images/projects/soi-aree-8/finished-new-02.jpg","Finished space"],
  ["/images/projects/soi-aree-8/finished-new-03.jpg","Finished space"],
  ["/images/portfolio/soi-aree-8/built-in-shelves.jpg","Finished space"],
  ["/images/portfolio/soi-aree-8/wardrobe.jpg","Finished space"],
  ["/images/portfolio/soi-aree-8/study-and-cabinetry.jpg","Finished space"],
  ["/images/projects/soi-aree-8/finished-new-01.jpg","Finished space"],
];

const process = [
  ["/images/projects/soi-aree-8/process-01.jpg","Process"],
  ["/images/projects/soi-aree-8/process-02.jpg","Process"],
  ["/images/projects/soi-aree-8/process-03.jpg","Process"],
  ["/images/projects/soi-aree-8/process-04.jpg","Process"],
  ["/images/projects/soi-aree-8/process-05.jpg","Process"],
  ["/images/projects/soi-aree-8/process-06.jpg","Process"],
  ["/images/projects/soi-aree-8/process-07.jpg","Process"],
  ["/images/projects/soi-aree-8/process-08.jpg","Process"],
  ["/images/projects/soi-aree-8/process-09.jpg","Process"],
];

export default function SoiAree8Project(){
  const [lang,setLang]=useState<"th"|"en">("th");

  const overview = lang==="th"
    ? "งานก่อสร้างและติดตั้ง Built-in สำหรับบ้านพักอาศัย ตามแบบที่เจ้าของบ้านออกแบบไว้เอง MUCK Design ดูแลงานก่อสร้าง การติดตั้ง และการเก็บรายละเอียดงานไม้ให้ลงตัวกับพื้นที่ใช้งานจริงของครอบครัว"
    : "Built-in construction for a private home, built from the homeowner’s own design. MUCK Design handled the construction, installation and detailing so each piece fits the way the family lives.";
  const processLead = lang==="th"
    ? "ภาพหน้างานจริงตั้งแต่งานโครงฝ้าและการตรวจหน้างาน งาน Built-in ไปจนถึงการติดตั้งประตูและงานเก็บรายละเอียด"
    : "Selected site images from ceiling framing and on-site review through built-in construction, door installation and final finishing.";

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
        <p className="eyebrow">RESIDENTIAL · BUILT-IN CONSTRUCTION</p>
        <h1>SOI<br/>AREE 8</h1>
      </div>
      <div className="projectMetaGrid">
        <div><span>Category</span><strong>Residential · Built-in Construction</strong></div>
        <div><span>Location</span><strong>{lang==="th"?"กรุงเทพฯ":"Bangkok"}</strong></div>
        <div><span>Scope</span><strong>Built-in Construction · Homeowner’s Design</strong></div>
      </div>
    </section>

    <section className="projectHeroImage">
      <Image src="/images/portfolio/soi-aree-8/hero.jpg" alt="Soi Aree 8 living room" fill priority quality={95} sizes="100vw"/>
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
