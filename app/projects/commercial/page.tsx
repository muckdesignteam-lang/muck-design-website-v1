"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "Dental Clinic",
    titleTh: "Dental Clinic",
    location: "Chachoengsao · Turnkey Renovation & Interior Fit-out",
    locationTh: "ฉะเชิงเทรา · Turnkey Renovation & Interior Fit-out",
    image: "/images/projects/dental-clinic-chachoengsao/hero.jpg",
    href: "/projects/dental-clinic-chachoengsao",
    ready: true,
  },
  {
    number: "02",
    title: "Base Fitness",
    titleTh: "Base Fitness",
    location: "Commercial Interior",
    locationTh: "Commercial Interior",
    image: null,
    href: "",
    ready: false,
  },
  {
    number: "03",
    title: "Optical Store Bang Yai",
    titleTh: "ร้านแว่นตา บางใหญ่",
    location: "Bang Yai · Retail Interior",
    locationTh: "บางใหญ่ · Retail Interior",
    image: null,
    href: "",
    ready: false,
  },
  {
    number: "04",
    title: "SSC · EST Booth",
    titleTh: "SSC · ซุ้ม EST",
    location: "Commercial Display / Booth",
    locationTh: "Commercial Display / Booth",
    image: null,
    href: "",
    ready: false,
  }
];

export default function CommercialProjectsPage(){
  const [lang,setLang]=useState<"th"|"en">("th");

  return (
    <main className="projectsPage categoryProjectsPage" lang={lang}>
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

      <section className="projectsIntro categoryIntro">
        <p className="eyebrow">COMMERCIAL</p>
        <h1>COMMERCIAL</h1>
        <p>{lang==="th" ? "รวมผลงานพื้นที่เชิงพาณิชย์ ทั้งคลินิก ฟิตเนส ร้านค้า และพื้นที่จัดแสดง โดยคำนึงถึงฟังก์ชัน ภาพลักษณ์ งานระบบ และการใช้งานจริงของธุรกิจ" : "Selected commercial work across clinics, fitness, retail and display spaces, coordinated around function, brand environment, building services and practical operation."}</p>
      </section>

      <section className="projectsOverview categoryProjectList">
        {projects.map((project)=>(
          <article className="overviewProject" key={project.number}>
            <div className={"overviewImage" + (!project.image ? " categoryPlaceholder" : "")}>
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={95}
                  sizes="(max-width: 900px) 100vw, 58vw"
                />
              ) : (
                <div className="categoryPlaceholderInner">
                  <span>PROJECT {project.number}</span>
                  <strong>{lang==="th" ? "กำลังเตรียมภาพโครงการ" : "PROJECT IMAGES COMING NEXT"}</strong>
                </div>
              )}
            </div>

            <div className="overviewCopy">
              <span className="projectNumber">{project.number}</span>
              <p className="category">COMMERCIAL</p>
              <h2>{lang==="th" ? project.titleTh : project.title}</h2>
              <p className="overviewSubtitle">
                {lang==="th" ? project.locationTh : project.location}
              </p>
              <p className="overviewBody">
                {lang==="th" ? "งานออกแบบ รีโนเวท และ Built-in สำหรับพื้นที่ธุรกิจ โดยประสานฟังก์ชัน งานระบบ วัสดุ และรายละเอียดการติดตั้งให้เหมาะกับการใช้งานของแต่ละโครงการ" : "Commercial design, renovation and built-in work coordinated around function, building services, materials and installation requirements."}
              </p>
              {project.ready
                ? <Link className="detailSoon detailReady" href={project.href}>VIEW PROJECT →</Link>
                : <span className="detailSoon">{lang==="th" ? "PROJECT DETAIL — กำลังจัดทำ" : "PROJECT DETAIL — COMING NEXT"}</span>}
            </div>
          </article>
        ))}
      </section>

      <section className="projectsCta">
        <div>
          <p className="eyebrow">START A PROJECT</p>
          <h2>LET’S CREATE<br/>A SPACE THAT WORKS FOR YOU</h2>
        </div>
        <div>
          <p>{lang==="th"
            ? "หากต้องการพูดคุยขอบเขตงานเบื้องต้นกับเรา สามารถติดต่อ MUCK Design ได้"
            : "Talk to MUCK Design about the initial scope of your project."}</p>
          <a className="solidBtn" href="https://lin.ee/xMvkeiO" target="_blank" rel="noreferrer">TALK TO MUCK DESIGN</a>
        </div>
      </section>

      <footer>
        <div>
          <span>Muck Design by BS&amp;P Beyond Home Design Co.,Ltd.</span>
          <span>:</span>
          <span>The Path to Better Living</span>
        </div>
        <Link href="/projects">← BACK TO PROJECTS</Link>
      </footer>
    </main>
  );
}
