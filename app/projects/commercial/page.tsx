"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ProjectCTA } from "../project-system";

const projects = [
  {
    number: "01",
    title: "Dental Clinic",
    titleTh: "คลินิกทันตกรรม",
    location: "Chachoengsao · Turnkey Renovation & Interior Fit-out",
    locationTh: "ฉะเชิงเทรา · Turnkey Renovation & Interior Fit-out",
    descriptionEn: "Turnkey renovation and interior fit-out for a dental clinic, coordinated around planning, building services, safety and hygiene requirements.",
    descriptionTh: "งานรีโนเวทและตกแต่งภายในคลินิกทันตกรรมแบบ Turnkey โดยคำนึงถึงการวางผัง การใช้งาน งานระบบ ความปลอดภัย และสุขอนามัยของพื้นที่",
    image: "/images/projects/dental-clinic-chachoengsao/hero.jpg",
    href: "/projects/dental-clinic-chachoengsao",
    ready: true,
  },
  {
    number: "02",
    title: "Base Fitness",
    titleTh: "Base Fitness",
    location: "Maintenance & Facility Improvement",
    locationTh: "งานซ่อมบำรุง ปรับปรุงพื้นที่ และงานช่างทั่วไป",
    descriptionEn: "General maintenance, facility improvement, and technical works for fitness facilities.",
    descriptionTh: "งานดูแลซ่อมบำรุงและปรับปรุงพื้นที่ฟิตเนส รวมถึงงานก่อสร้างห้องเก็บของ ผลิตและติดตั้งป้ายไฟ และงานช่างอื่น ๆ ตามความต้องการของหน้างาน",
    projectDetailsTh: [
      "งานก่อสร้างห้องเก็บของ",
      "ผลิตและติดตั้งป้ายไฟ",
      "งานช่างและงานปรับปรุงอื่น ๆ ตามหน้างาน",
    ],
    projectDetailsEn: [
      "Construction of a storage room",
      "Fabrication and installation of illuminated signage",
      "General technical works and on-site improvements as required",
    ],
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
    descriptionEn: "Project-specific scope and details will be added together with the project images.",
    descriptionTh: "รายละเอียดขอบเขตงานของโครงการจะอัปเดตพร้อมภาพโครงการ",
    image: null,
    href: "",
    ready: false,
  },
  {
    number: "04",
    title: "est Booth",
    titleTh: "ซุ้ม est",
    location: "Commercial Display / Booth",
    locationTh: "Commercial Display / Booth",
    descriptionEn: "Project-specific scope and details will be added together with the project images.",
    descriptionTh: "รายละเอียดขอบเขตงานของโครงการจะอัปเดตพร้อมภาพโครงการ",
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
                {lang==="th" ? project.descriptionTh : project.descriptionEn}
              </p>
              {project.ready
                ? <Link className="detailSoon detailReady" href={project.href}>VIEW PROJECT →</Link>
                : <span className="detailSoon">{lang==="th" ? "PROJECT DETAIL — กำลังจัดทำ" : "PROJECT DETAIL — COMING NEXT"}</span>}
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
        <Link href="/projects">← BACK TO PROJECTS</Link>
      </footer>
    </main>
  );
}
