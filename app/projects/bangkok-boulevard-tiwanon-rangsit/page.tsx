"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const finished = [
  ["/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-01.jpg","Kitchen island and staircase"],
  ["/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-02.jpg","Pantry built-in"],
  ["/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-03.jpg","Pantry and island composition"],
  ["/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-04.jpg","Exterior canopy detail"],
  ["/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-05.jpg","Cabinetry and lighting detail"],
  ["/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-06.jpg","TV wall composition"],
  ["/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-07.jpg","TV wall storage detail"],
];

const details = [
  ["/images/projects/bangkok-boulevard-tiwanon-rangsit/detail-01.jpg","Floating TV cabinet detail"],
  ["/images/projects/bangkok-boulevard-tiwanon-rangsit/detail-02.jpg","Illuminated display niche"],
  ["/images/projects/bangkok-boulevard-tiwanon-rangsit/detail-03.jpg","Vertical slat material detail"],
];

const process = [
  ["/images/projects/bangkok-boulevard-tiwanon-rangsit/process-01.jpg","Built-in installation stage"],
  ["/images/projects/bangkok-boulevard-tiwanon-rangsit/process-02.jpg","Site preparation"],
  ["/images/projects/bangkok-boulevard-tiwanon-rangsit/process-03.jpg","TV wall installation"],
  ["/images/projects/bangkok-boulevard-tiwanon-rangsit/process-04.jpg","Ceiling and M&E work"],
  ["/images/projects/bangkok-boulevard-tiwanon-rangsit/process-05.jpg","Living area preparation"],
  ["/images/projects/bangkok-boulevard-tiwanon-rangsit/process-06.jpg","Near-completion built-in work"],
];

export default function BangkokBoulevardProject(){
  const [lang,setLang]=useState<"th"|"en">("th");

  const overview = lang==="th"
    ? "งานออกแบบตกแต่งภายในและ Built-in แบบครบวงจร ตั้งแต่การออกแบบและวางผังพื้นที่ การผลิตเฟอร์นิเจอร์ Built-in ไปจนถึงการติดตั้งและเก็บรายละเอียดจนแล้วเสร็จ เพื่อให้ทุกพื้นที่สวยงาม ลงตัว และตอบโจทย์การใช้งานจริงในชีวิตประจำวัน"
    : "A complete interior design and built-in service for a new home, covering space planning, design development, furniture production, installation and final detailing to create a cohesive, refined and practical living environment.";

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
        <p className="eyebrow">RESIDENTIAL · NEW HOME</p>
        <h1>{lang==="th" ? <>บางกอก บูเลอวาร์ด<br/>ติวานนท์-รังสิต</> : <>BANGKOK BOULEVARD<br/>TIWANON-RANGSIT</>}</h1>
      </div>
      <div className="projectMetaGrid">
        <div><span>Category</span><strong>Design &amp; Built-In · New Home</strong></div>
        <div><span>Location</span><strong>{lang==="th"?"ปทุมธานี":"Pathum Thani"}</strong></div>
        <div><span>Scope</span><strong>Interior Design · Space Planning · Built-In Production · Installation</strong></div>
      </div>
    </section>

    <section className="projectHeroImage">
      <Image src="/images/projects/bangkok-boulevard-tiwanon-rangsit/hero.jpg" alt="Bangkok Boulevard Tiwanon-Rangsit" fill priority quality={95} sizes="100vw"/>
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
          ?"ภาพหน้างานจริงตั้งแต่การเตรียมพื้นที่ งานฝ้าและระบบ งานผลิตและติดตั้ง Built-in ไปจนถึงขั้นตอนเก็บรายละเอียดก่อนส่งมอบ"
          :"Selected site images showing the progression from space preparation and M&E work through built-in production, installation and final detailing."}
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
          ?"หากกำลังวางแผนบ้านใหม่ หรือต้องการงานออกแบบและ Built-in แบบครบวงจร สามารถพูดคุยขอบเขตงานเบื้องต้นกับเราได้"
          :"Planning a new home or a complete interior and built-in project? Talk to us about the initial scope."}</p>
        <a className="solidBtn" href="https://lin.ee/xMvkeiO" target="_blank" rel="noreferrer">TALK TO MUCK DESIGN</a>
      </div>
    </section>

    <footer>
      <div><span>Muck Design by BS&amp;P Beyond Home Design Co.,Ltd.</span><span>:</span><span>The Path to Better Living</span></div>
      <Link href="/projects">← BACK TO PROJECTS</Link>
    </footer>
  </main>
}
