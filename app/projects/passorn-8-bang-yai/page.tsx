"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ProjectCTA } from "../project-system";

const finished = [
  ["/images/projects/passorn-8-bang-yai/finished-exterior-front.jpg","Front elevation"],
  ["/images/projects/passorn-8-bang-yai/finished-bedroom.jpg","Bedroom"],
  ["/images/projects/passorn-8-bang-yai/finished-kitchen.jpg","Kitchen"],
  ["/images/projects/passorn-8-bang-yai/finished-bathroom.jpg","Bathroom"],
  ["/images/projects/passorn-8-bang-yai/finished-walkin.jpg","Walk-in / dressing area"],
];

const details = [
  ["/images/projects/passorn-8-bang-yai/detail-01.jpg","Construction detail"],
  ["/images/projects/passorn-8-bang-yai/detail-02.jpg","Material detail"],
  ["/images/projects/passorn-8-bang-yai/detail-03.jpg","Construction workmanship"],
  ["/images/projects/passorn-8-bang-yai/detail-04.jpg","Finishing detail"],
];

const process = [
  ["/images/projects/passorn-8-bang-yai/process-01-before.jpg","Before"],
  ["/images/projects/passorn-8-bang-yai/process-02-design.jpg","Design proposal"],
  ["/images/projects/passorn-8-bang-yai/process-03-demolition.jpg","Demolition"],
  ["/images/projects/passorn-8-bang-yai/process-04-construction.jpg","Construction"],
  ["/images/projects/passorn-8-bang-yai/process-05-finishing.jpg","Finishing"],
  ["/images/projects/passorn-8-bang-yai/process-06-near-complete.jpg","Near completion"],
];

export default function Passorn8BangYaiProject(){
  const [lang,setLang]=useState<"th"|"en">("th");
  const overview = lang==="th"
    ? "โครงการรีโนเวทบ้านพักอาศัยเดิม เพื่อปรับพื้นที่และงานก่อสร้างให้เหมาะกับการใช้งานใหม่ พร้อมประสานงานรายละเอียดหน้างาน วัสดุ งานติดตั้ง และงานเก็บรายละเอียดจนพร้อมใช้งาน"
    : "A residential renovation project upgrading the existing home for renewed use, with coordinated construction, material detailing, installation and finishing through completion.";

  return <main className="projectDetailPage" lang={lang}>
    <header className="siteHeader">
      <Link className="brand" href="/" aria-label="MUCK Design home"><Image src="/logo/muck-logo.png" alt="MUCK Design" width={120} height={70} priority /></Link>
      <nav><Link href="/projects">Projects</Link><Link href="/#services">Services</Link><Link href="/#process">How We Work</Link><Link href="/#about">About</Link><Link href="/#contact">Contact</Link></nav>
      <div className="headerActions"><button className="lang" onClick={()=>setLang(lang==="th"?"en":"th")}>{lang==="th"?"EN | TH":"TH | EN"}</button><Link className="contactBtn" href="/#contact">CONTACT US →</Link></div>
    </header>

    <section className="projectHeroMeta">
      <div><p className="eyebrow">RESIDENTIAL · RENOVATION</p><h1>{lang==="th" ? <>ภัสสร 8<br/>บางใหญ่</> : <>PASSORN 8<br/>BANG YAI</>}</h1></div>
      <div className="projectMetaGrid">
        <div><span>Category</span><strong>{lang==="th"?"งานรีโนเวทและก่อสร้าง · ที่อยู่อาศัย":"Renovation & Construction · Residential"}</strong></div>
        <div><span>Location</span><strong>{lang==="th"?"ภัสสร 8 บางใหญ่, นนทบุรี":"Passorn 8 Bang Yai, Nonthaburi"}</strong></div>
        <div><span>Scope</span><strong>{lang==="th"?"รีโนเวทบ้านพักอาศัย · งานก่อสร้าง · งานเก็บรายละเอียด":"Residential Renovation · Construction · Finishing"}</strong></div>
      </div>
    </section>

    <section className="projectHeroImage"><Image src="/images/projects/passorn-8-bang-yai/finished-exterior-wide.jpg" alt="Passorn 8 Bang Yai residential renovation" fill priority quality={95} sizes="100vw"/></section>

    <section className="projectOverviewText"><p className="eyebrow">PROJECT OVERVIEW</p><p>{overview}</p></section>

    <section className="projectGallerySection"><div className="sectionTitleRow"><h2>Finished Spaces</h2><i></i></div><div className="editorialGallery">
      {finished.map(([src,alt])=><figure key={src}><div className="galleryFrame"><Image src={src} alt={alt} fill quality={95} sizes="(max-width:900px) 100vw, 33vw"/></div></figure>)}
    </div></section>

    <section className="projectGallerySection soft"><div className="sectionTitleRow"><h2>Construction Details</h2><i></i></div><div className="detailGrid detailGridFour">
      {details.map(([src,alt])=><figure key={src}><div className="detailFrame"><Image src={src} alt={alt} fill quality={95} sizes="(max-width:900px) 100vw, 25vw"/></div></figure>)}
    </div></section>

    <section className="projectGallerySection"><div className="sectionTitleRow"><h2>Before &amp; Process</h2><i></i></div>
      <p className="projectSectionLead">{lang==="th"?"ลำดับภาพตั้งแต่สภาพบ้านเดิม แนวทางการออกแบบ งานรื้อถอน งานก่อสร้าง ไปจนถึงช่วงเก็บรายละเอียดก่อนส่งมอบ":"A selected sequence from the original condition and design direction through demolition, construction and final finishing."}</p>
      <div className="processGrid">{process.map(([src,alt])=><figure key={src}><div className="processFrame"><Image src={src} alt={alt} fill quality={92} sizes="(max-width:900px) 100vw, 33vw"/></div></figure>)}</div>
    </section>

      <ProjectCTA lang={lang} />

    <footer><div><span>Muck Design by BS&amp;P Beyond Home Design Co.,Ltd.</span><span>:</span><span>The Path to Better Living</span></div><Link href="/projects">← BACK TO PROJECTS</Link></footer>
  </main>
}
