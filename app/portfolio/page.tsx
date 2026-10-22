"use client";

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import "./portfolio.css";

const projects = [
  {
    "id": "moden",
    "group": "residential",
    "th": "โมเดน รังสิต คลอง 4",
    "en": "Moden Rangsit Klong 4",
    "subtitle": "Turnkey · 235 sqm",
    "images": [
      "/images/projects/moden-rangsit-klong-4/hero-finished13.jpg",
      "/images/projects/moden-rangsit-klong-4/finished-wide.jpg",
      "/images/projects/moden-rangsit-klong-4/finished-living.jpg",
      "/images/projects/moden-rangsit-klong-4/finished-bedroom.jpg",
      "/images/projects/moden-rangsit-klong-4/finished-kitchen.jpg",
      "/images/projects/moden-rangsit-klong-4/finished-pantry.jpg",
      "/images/projects/moden-rangsit-klong-4/finished-shrine.jpg"
    ]
  },
  {
    "id": "ai",
    "group": "residential",
    "th": "อัยย์ ราชพฤกษ์",
    "en": "Ai Ratchaphruek",
    "subtitle": "Turnkey · 260 sqm",
    "images": [
      "/images/portfolio/ai-ratchaphruek/hero.jpg",
      "/images/portfolio/ai-ratchaphruek/tv-wall-detail.jpg",
      "/images/portfolio/ai-ratchaphruek/living-overview.jpg",
      "/images/portfolio/ai-ratchaphruek/walk-in-closet.jpg",
      "/images/portfolio/ai-ratchaphruek/glass-cabinet.jpg",
      "/images/portfolio/ai-ratchaphruek/wardrobe.jpg",
      "/images/portfolio/ai-ratchaphruek/display-cabinet.jpg"
    ]
  },
  {
    "id": "bangkok",
    "group": "residential",
    "th": "บางกอก บูเลอวาร์ด ติวานนท์-รังสิต",
    "en": "Bangkok Boulevard Tiwanon–Rangsit",
    "subtitle": "Renovation & Built-in",
    "images": [
      "/images/projects/bangkok-boulevard-tiwanon-rangsit/hero.jpg",
      "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-01.jpg",
      "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-02.jpg",
      "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-03.jpg",
      "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-04.jpg",
      "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-05.jpg",
      "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-06.jpg"
    ]
  },
  {
    "id": "passorn",
    "group": "residential",
    "th": "ภัสสร 8 บางใหญ่",
    "en": "Passorn 8 Bang Yai",
    "subtitle": "Home Renovation",
    "images": [
      "/images/projects/passorn-8-bang-yai/hero-finished.jpg",
      "/images/projects/passorn-8-bang-yai/finished-exterior-wide.jpg",
      "/images/projects/passorn-8-bang-yai/finished-exterior-front.jpg",
      "/images/projects/passorn-8-bang-yai/finished-kitchen.jpg",
      "/images/projects/passorn-8-bang-yai/finished-bedroom.jpg",
      "/images/projects/passorn-8-bang-yai/finished-walkin.jpg",
      "/images/projects/passorn-8-bang-yai/finished-bathroom.jpg"
    ]
  },
  {
    "id": "soi-aree-8",
    "group": "residential",
    "th": "ซอยอารีย์ 8",
    "en": "Soi Aree 8",
    "subtitle": "Built-in Construction · Homeowner’s Design",
    "images": [
      "/images/portfolio/soi-aree-8/hero.jpg",
      "/images/portfolio/soi-aree-8/wood-partition.jpg",
      "/images/portfolio/soi-aree-8/kitchen.jpg",
      "/images/portfolio/soi-aree-8/dining-overview.jpg",
      "/images/portfolio/soi-aree-8/built-in-shelves.jpg",
      "/images/portfolio/soi-aree-8/wardrobe.jpg",
      "/images/portfolio/soi-aree-8/study-and-cabinetry.jpg"
    ]
  },
  {
    "id": "golden-neo",
    "group": "residential",
    "th": "โกลเด้น นีโอ บางนา–สวนหลวง",
    "en": "Golden Neo Bangna–Suan Luang",
    "subtitle": "Design & Built-in · Selected Areas",
    "images": [
      "/images/portfolio/golden-neo-bangna-suan-luang/hero.jpg",
      "/images/portfolio/golden-neo-bangna-suan-luang/tv-wall-front.jpg",
      "/images/portfolio/golden-neo-bangna-suan-luang/tv-wall-staircase.jpg",
      "/images/portfolio/golden-neo-bangna-suan-luang/workstation.jpg",
      "/images/portfolio/golden-neo-bangna-suan-luang/workstation-detail.jpg",
      "/images/portfolio/golden-neo-bangna-suan-luang/marble-counter.jpg",
      "/images/portfolio/golden-neo-bangna-suan-luang/bar-and-display.jpg"
    ]
  },
  {
    "id": "dental",
    "group": "commercial",
    "th": "คลินิกทันตกรรม ฉะเชิงเทรา",
    "en": "Dental Clinic Chachoengsao",
    "subtitle": "Commercial Interior",
    "images": [
      "/images/projects/dental-clinic-chachoengsao/hero.jpg",
      "/images/projects/dental-clinic-chachoengsao/finished-01.jpg",
      "/images/projects/dental-clinic-chachoengsao/finished-02.jpg",
      "/images/projects/dental-clinic-chachoengsao/finished-03.jpg",
      "/images/projects/dental-clinic-chachoengsao/finished-04.jpg",
      "/images/projects/dental-clinic-chachoengsao/finished-05.jpg",
      "/images/projects/dental-clinic-chachoengsao/finished-06.jpg"
    ]
  }
] as const;
type Group = "residential" | "commercial";

export default function PortfolioPage(){
 const [lang,setLang]=useState<"th"|"en">("th");
 const [group,setGroup]=useState<Group>("residential");
 const [expanded,setExpanded]=useState<string|null>(null);
 return <main className="portfolioPage" lang={lang}>
  <header className="portfolioHeader">
    <Link href="/" aria-label="MUCK Design home" className="portfolioBrand"><Image src="/logo/muck-logo.png" width={116} height={68} alt="MUCK Design" priority/></Link>
    <nav aria-label="Main navigation"><Link href="/">Home</Link><Link href="/projects">Projects</Link><Link className="active" href="/portfolio" aria-current="page">Portfolio</Link><Link href="/#contact">Contact</Link></nav>
    <button className="portfolioLang" onClick={()=>setLang(lang==="th"?"en":"th")}>{lang==="th"?"EN | TH":"TH | EN"}</button>
  </header>
  <div className="portfolioInner">
   <section className="portfolioIntro">
     <p className="portfolioKicker">MUCK DESIGN / {lang==="th"?"ผลงานของเรา":"OUR WORK"}</p>
     <h1>Spaces, thoughtfully made.</h1>
     <p>{lang==="th"?"รวมผลงานที่อยู่อาศัยและพื้นที่ธุรกิจ ที่เราใส่ใจในทุกขั้นตอนตั้งแต่รายละเอียดงานจนถึงการส่งมอบ":"A collection of residential and commercial spaces, designed and built with attention to detail."}</p>
   </section>
   <div className="portfolioTabs" role="group" aria-label="Project category">
     {(["residential","commercial"] as Group[]).map(g=><button key={g} type="button" className={group===g?"selected":""} aria-pressed={group===g} onClick={()=>{setGroup(g);setExpanded(null)}}><span>{g==="residential"?"01":"02"}</span>{g==="residential"?"Residential":"Commercial"}</button>)}
   </div>
   <section className="portfolioCollection" aria-label={group+" projects"}>
     {projects.filter(p=>p.group===group).map((project,index)=>{
       const open=expanded===project.id;
       const cover=project.images[0];
       return <article className="portfolioProject" key={project.id}>
         <button className="portfolioProjectToggle" aria-expanded={open} aria-controls={"gallery-"+project.id} onClick={()=>setExpanded(open?null:project.id)}>
           <div className="portfolioCover">{cover?<Image src={cover} alt={lang==="th"?project.th:project.en} fill sizes="(max-width: 700px) 100vw, 75vw"/>:<div className="portfolioEmptyCover"><span>MUCK DESIGN</span><span>{lang==="th"?"รอภาพโครงการ":"PROJECT PHOTOS TO FOLLOW"}</span></div>}</div>
           <div className="portfolioProjectInfo"><div><span className="portfolioNumber">{String(index+1).padStart(2,"0")} / {group.toUpperCase()}</span><h2>{lang==="th"?project.th:project.en}</h2><p>{project.subtitle}</p></div><span className="portfolioToggleLabel">{open?lang==="th"?"ปิดรูปภาพ":"CLOSE GALLERY":lang==="th"?"ดูรูปภาพ":"VIEW GALLERY"}<span aria-hidden="true">{open?"−":"+"}</span></span></div>
         </button>
         {open&&<div id={"gallery-"+project.id} className="portfolioGallery">{project.images.length?project.images.map((src,i)=><div className="portfolioGalleryImage" key={src}><Image src={src} alt={`${lang==="th"?project.th:project.en} — ${i+1}`} fill sizes="(max-width:700px) 100vw, 45vw" loading="lazy"/></div>):<div className="portfolioAwaiting">{lang==="th"?"ภาพผลงานโครงการนี้จะเพิ่มในเร็ว ๆ นี้":"Project images will be added soon."}</div>}</div>}
       </article>;
     })}
   </section>
   <section className="portfolioEnd"><p>{lang==="th"?"สนใจปรึกษาโครงการของคุณกับเรา":"Have a space in mind?"}</p><a href="https://lin.ee/xMvkeiO" target="_blank" rel="noreferrer">TALK TO MUCK DESIGN ↗</a></section>
  </div>
  <footer className="portfolioFooter"><span>Muck Design by BS&amp;P Beyond Home Design Co., Ltd.</span><Link href="/privacy-policy">{lang==="th"?"นโยบายความเป็นส่วนตัว":"Privacy Policy"}</Link><Link href="/">← BACK TO HOME</Link></footer>
 </main>;
}
