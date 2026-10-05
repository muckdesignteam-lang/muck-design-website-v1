"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const finished = [
  ["/images/projects/dental-clinic-chachoengsao/finished-01.jpg","Reception"],
  ["/images/projects/dental-clinic-chachoengsao/finished-02.jpg","Reception and treatment-room access"],
  ["/images/projects/dental-clinic-chachoengsao/finished-03.jpg","Dental treatment room"],
  ["/images/projects/dental-clinic-chachoengsao/finished-04.jpg","Storage and service area"],
  ["/images/projects/dental-clinic-chachoengsao/finished-05.jpg","Meeting / consultation area"],
  ["/images/projects/dental-clinic-chachoengsao/finished-06.jpg","Vanity / wash area"],
  ["/images/projects/dental-clinic-chachoengsao/finished-07.jpg","Clinic frontage"],
];

const details = [
  ["/images/projects/dental-clinic-chachoengsao/detail-01.jpg","Built-in shelving and integrated lighting"],
  ["/images/projects/dental-clinic-chachoengsao/detail-02.jpg","Material palette"],
  ["/images/projects/dental-clinic-chachoengsao/detail-03.jpg","Lighting and wall treatment detail"],
];

const process = [
  ["/images/projects/dental-clinic-chachoengsao/process-01.jpg","Initial partition stage"],
  ["/images/projects/dental-clinic-chachoengsao/process-02.jpg","Ceiling and wall framing"],
  ["/images/projects/dental-clinic-chachoengsao/process-03.jpg","Active construction"],
  ["/images/projects/dental-clinic-chachoengsao/process-04.jpg","Reception built-in in progress"],
  ["/images/projects/dental-clinic-chachoengsao/process-05.jpg","Near-completion service area"],
];

export default function DentalClinicProject(){
  const [lang,setLang]=useState<"th"|"en">("th");

  const overview = lang==="th"
    ? "โครงการรีโนเวทและตกแต่งภายในคลินิกทันตกรรมแบบ Turnkey โดยให้ความสำคัญกับการวางผังพื้นที่ การใช้งานของแต่ละโซน มาตรฐานด้านสถานที่และอาคาร งานระบบที่เกี่ยวข้อง รวมถึงความปลอดภัยและสุขอนามัยของพื้นที่ เพื่อให้คลินิกมีความพร้อมสำหรับการใช้งานจริง"
    : "A turnkey renovation and interior fit-out for a dental clinic, with careful consideration given to space planning, functional zoning, building and facility requirements, related M&E systems, safety, and hygiene to support practical day-to-day clinic operations.";

  return <main className="projectDetailPage">
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
        <button className="lang" onClick={()=>setLang(lang==="th"?"en":"th")}>
          {lang==="th"?"EN | TH":"TH | EN"}
        </button>
        <Link className="contactBtn" href="/#contact">CONTACT US →</Link>
      </div>
    </header>

    <section className="projectHeroMeta">
      <div>
        <p className="eyebrow">COMMERCIAL · DENTAL CLINIC</p>
        <h1>DENTAL<br/>CLINIC</h1>
      </div>
      <div className="projectMetaGrid">
        <div><span>Category</span><strong>{lang==="th"?"Commercial · Renovation & Built-in":"Commercial · Renovation & Built-in"}</strong></div>
        <div><span>Location</span><strong>{lang==="th"?"ฉะเชิงเทรา":"Chachoengsao"}</strong></div>
        <div><span>Scope</span><strong>{lang==="th"?"Turnkey Renovation · Interior Fit-out · Built-in · M&E Coordination · Safety & Facility Requirements":"Turnkey Renovation · Interior Fit-out · Built-in · M&E Coordination · Safety & Facility Requirements"}</strong></div>
      </div>
    </section>

    <section className="projectHeroImage">
      <Image src="/images/projects/dental-clinic-chachoengsao/hero.jpg" alt="Dental Clinic commercial interior" fill priority quality={95} sizes="100vw"/>
    </section>

    <section className="projectOverviewText">
      <p className="eyebrow">PROJECT OVERVIEW</p>
      <p>{overview}</p>
    </section>

    <section className="projectGallerySection">
      <div className="sectionTitleRow"><h2>Finished Spaces</h2><i></i></div>
      <div className="editorialGallery">
        {finished.map(([src,alt])=><figure key={src}>
          <div className="galleryFrame"><Image src={src} alt={alt} fill quality={95} sizes="(max-width:900px) 100vw, 33vw"/></div>
        </figure>)}
      </div>
    </section>

    <section className="projectGallerySection soft">
      <div className="sectionTitleRow"><h2>Details</h2><i></i></div>
      <div className="detailGrid">
        {details.map(([src,alt])=><figure key={src}>
          <div className="detailFrame"><Image src={src} alt={alt} fill quality={95} sizes="(max-width:900px) 100vw, 33vw"/></div>
        </figure>)}
      </div>
    </section>

    <section className="projectGallerySection">
      <div className="sectionTitleRow"><h2>Before &amp; Process</h2><i></i></div>
      <p className="projectSectionLead">
        {lang==="th"
          ?"ภาพหน้างานจริงตั้งแต่การแบ่งพื้นที่ งานผนังและฝ้า งานระบบ ไปจนถึงการติดตั้ง Built-in และงานเก็บรายละเอียดก่อนส่งมอบ"
          :"Selected site images showing the progression from partition and ceiling works through coordinated building services, built-in installation and final finishing."}
      </p>
      <div className="processGrid">
        {process.map(([src,alt])=><figure key={src}>
          <div className="processFrame"><Image src={src} alt={alt} fill quality={92} sizes="(max-width:900px) 100vw, 33vw"/></div>
        </figure>)}
      </div>
    </section>

    <section className="projectsCta">
      <div>
        <p className="eyebrow">START A PROJECT</p>
        <h2>LET’S CREATE<br/>A SPACE THAT WORKS FOR YOU</h2>
      </div>
      <div>
        <p>{lang==="th"
          ?"หากกำลังวางแผนคลินิก สำนักงาน ร้านค้า หรือพื้นที่ธุรกิจ สามารถพูดคุยขอบเขตงานเบื้องต้นกับเราได้"
          :"Planning a clinic, office, retail or other commercial space? Talk to us about the initial scope."}</p>
        <a className="solidBtn" href="https://lin.ee/xMvkeiO" target="_blank" rel="noreferrer">TALK TO MUCK DESIGN</a>
      </div>
    </section>

    <footer>
      <div><span>Muck Design by BS&amp;P Beyond Home Design Co.,Ltd.</span><span>:</span><span>The Path to Better Living</span></div>
      <Link href="/projects">← BACK TO PROJECTS</Link>
    </footer>
  </main>
}
