"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const finished = [
  ["/images/projects/moden-rangsit-klong-4/finished-kitchen.jpg","Kitchen"],
  ["/images/projects/moden-rangsit-klong-4/finished-shrine.jpg","Built-in feature"],
  ["/images/projects/moden-rangsit-klong-4/finished-wide.jpg","Whole-space view"],
  ["/images/projects/moden-rangsit-klong-4/finished-pantry.jpg","Pantry / built-in"],
  ["/images/projects/moden-rangsit-klong-4/finished-bedroom.jpg","Bedroom"],
  ["/images/projects/moden-rangsit-klong-4/finished-office.jpg","Home office"],
];

const details = [
  ["/images/projects/moden-rangsit-klong-4/detail-cabinet.png","Cabinetry detail"],
  ["/images/projects/moden-rangsit-klong-4/detail-faucet.png","Material / hardware detail"],
  ["/images/projects/moden-rangsit-klong-4/detail-wall-build-up.jpg","Construction detail"],
];

const process = [
  ["/images/projects/moden-rangsit-klong-4/process-01.jpg","Process 01"],
  ["/images/projects/moden-rangsit-klong-4/process-02.jpg","Process 02"],
  ["/images/projects/moden-rangsit-klong-4/process-03.jpg","Process 03"],
  ["/images/projects/moden-rangsit-klong-4/process-04.jpg","Process 04"],
  ["/images/projects/moden-rangsit-klong-4/process-05.png","Process 05"],
  ["/images/projects/moden-rangsit-klong-4/process-06.jpg","Process 06"],
];

export default function ModenRangsitProject(){
  const [lang,setLang]=useState<"th"|"en">("th");

  const overview = lang==="th"
    ? "งานออกแบบตกแต่งภายในและ Built-in สำหรับบ้านใหม่ทั้งหลัง ครอบคลุมพื้นที่หลักทุกห้องทั้ง 2 ชั้น ตั้งแต่การวางผังและพัฒนาแบบ งานผลิต Built-in การติดตั้ง และการประสานงานจนโครงการแล้วเสร็จ"
    : "A whole-house interior design and built-in project covering both floors and all principal rooms. The scope included space planning, design development, built-in production, installation and coordination through project completion.";

  return <main className="projectDetailPage" lang={lang}>
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
        <p className="eyebrow">RESIDENTIAL · NEW HOME</p>
        <h1>{lang==="th" ? <>โมเดน รังสิต<br/>คลอง 4</> : <>MODEN RANGSIT<br/>KLONG 4</>}</h1>
      </div>
      <div className="projectMetaGrid">
        <div><span>Category</span><strong>Design &amp; Built-in · New Home</strong></div>
        <div><span>Location</span><strong>{lang==="th"?"โมเดน รังสิต คลอง 4, ปทุมธานี":"Moden Rangsit Klong 4, Pathum Thani"}</strong></div>
        <div><span>Scope</span><strong>{lang==="th"?"Turnkey Interior Design & Built-in · ทั้งหลัง 2 ชั้น":"Turnkey Interior Design & Built-in · Whole House · 2 Floors"}</strong></div>
      </div>
    </section>

    <section className="projectHeroImage">
      <Image src="/images/projects/moden-rangsit-klong-4/hero-finished13.jpg" alt="Moden Rangsit Klong 4 interior" fill priority quality={95} sizes="100vw"/>
    </section>

    <section className="projectOverviewText">
      <p className="eyebrow">{lang==="th"?"PROJECT OVERVIEW":"PROJECT OVERVIEW"}</p>
      <p>{overview}</p>
    </section>

    <section className="projectGallerySection">
      <div className="sectionTitleRow"><h2>Finished Spaces</h2><i></i></div>
      <div className="editorialGallery">
        {finished.map(([src,alt],i)=><figure className={i===0||i===3?"galleryWide":""} key={src}>
          <div className="galleryFrame"><Image src={src} alt={alt} fill quality={95} sizes="(max-width:900px) 100vw, 50vw"/></div>
        </figure>)}
      </div>
    </section>

    <section className="projectGallerySection soft">
      <div className="sectionTitleRow"><h2>Details</h2><i></i></div>
      <div className="detailGrid">
        {details.map(([src,alt])=><figure key={src}>
          <div className="detailFrame"><Image src={src} alt={alt} fill quality={95} sizes="(max-width:900px) 100vw, 50vw"/></div>
        </figure>)}
      </div>
    </section>

    <section className="projectGallerySection">
      <div className="sectionTitleRow"><h2>Before &amp; Process</h2><i></i></div>
      <p className="projectSectionLead">
        {lang==="th"
          ?"ภาพหน้างานจริงในแต่ละช่วง เพื่อให้เห็นกระบวนการตั้งแต่สภาพพื้นที่เดิม งานก่อสร้าง ไปจนถึงงานติดตั้งก่อนส่งมอบ"
          :"Selected site images showing the actual progression from existing conditions through construction and installation."}
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
        <p>{lang==="th" ? "ไม่ว่าจะเป็นบ้านใหม่ งานรีโนเวต หรือพื้นที่สำหรับธุรกิจ เราพร้อมให้คำปรึกษา ดูแล และประสานงานครบทุกขั้นตอน เพื่อส่งมอบพื้นที่ที่ตอบโจทย์ทั้งฟังก์ชันและไลฟ์สไตล์ของคุณ" : "Planning a new home, renovation or built-in project? Talk to us about the initial scope."}</p>
        <a className="solidBtn" href="https://lin.ee/xMvkeiO" target="_blank" rel="noreferrer">TALK TO MUCK DESIGN</a>
      </div>
    </section>

    <footer>
      <div><span>Muck Design by BS&amp;P Beyond Home Design Co.,Ltd.</span><span>:</span><span>The Path to Better Living</span></div>
      <Link href="/projects">← BACK TO PROJECTS</Link>
    </footer>
  </main>
}
