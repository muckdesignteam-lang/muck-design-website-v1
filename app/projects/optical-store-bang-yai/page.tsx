"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ProjectCTA } from "../project-system";
import { PdGrid } from "../pd-grid";

const finished = [
  ["/images/portfolio/optic-shop/display-wall.png","Optical store interior"],
  ["/images/portfolio/optic-shop/showroom-angle.png","Optical store interior"],
  ["/images/portfolio/optic-shop/corridor.png","Optical store interior"],
  ["/images/portfolio/optic-shop/circle-shelf.jpg","Optical store interior"],
];

const process = [
  ["/images/projects/optical-store-bang-yai/process-01.jpg","Process","contain"],
  ["/images/projects/optical-store-bang-yai/process-02.jpg","Process"],
  ["/images/projects/optical-store-bang-yai/process-03.jpg","Process"],
  ["/images/projects/optical-store-bang-yai/process-04.jpg","Process"],
  ["/images/projects/optical-store-bang-yai/process-05.jpg","Process"],
  ["/images/projects/optical-store-bang-yai/process-06.jpg","Process"],
  ["/images/projects/optical-store-bang-yai/process-07.jpg","Process"],
  ["/images/projects/optical-store-bang-yai/process-08.jpg","Process"],
  ["/images/projects/optical-store-bang-yai/process-09.jpg","Process"],
];

export default function OpticalStoreProject(){
  const [lang,setLang]=useState<"th"|"en">("th");

  const overview = lang==="th"
    ? "งานออกแบบและตกแต่งภายในร้านแว่นตาแบบ Turnkey พร้อมเฟอร์นิเจอร์ Built-in และชั้นจัดแสดงสินค้า วางผังให้สินค้าโดดเด่น ลูกค้าเดินสะดวก และทีมงานใช้งานได้จริงในทุกวัน"
    : "Turnkey retail interior for an optical store, including built-in furniture and display units, planned so products stand out, customers move easily and staff can work comfortably every day.";
  const processLead = lang==="th"
    ? "ตั้งแต่ภาพออกแบบ พื้นที่หน้างานก่อนเริ่ม งานตู้ Built-in และงานติดตั้งป้ายร้าน จนถึงการจัดสินค้า (สองภาพแรกเป็นภาพออกแบบ ส่วนภาพที่เหลือเป็นภาพหน้างานจริง)"
    : "From design visuals and the empty space through built-in cabinetry, signage installation and product display. The first two images are design visuals; the rest are site photos.";

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
        <p className="eyebrow">COMMERCIAL · OPTICAL STORE</p>
        <h1>OPTICAL<br/>STORE</h1>
      </div>
      <div className="projectMetaGrid">
        <div><span>Category</span><strong>Commercial · Turnkey</strong></div>
        <div><span>Location</span><strong>{lang==="th"?"บางใหญ่":"Bang Yai"}</strong></div>
        <div><span>Scope</span><strong>Turnkey · Retail Interior · Display · Built-in</strong></div>
      </div>
    </section>

    <section className="projectHeroImage">
      <Image src="/images/portfolio/optic-shop/hero.png" alt="Optical store interior in Bang Yai" fill priority quality={95} sizes="100vw"/>
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
