"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "Passorn 8 Bang Yai",
    titleTh: "ภัสสร 8 บางใหญ่",
    location: "Nonthaburi · Renovation & Built-In",
    locationTh: "นนทบุรี · Renovation & Built-In",
    image: "/images/projects/passorn-8-bang-yai/hero-finished.jpg",
    href: "/projects/passorn-8-bang-yai",
    ready: true,
  },
  {
    number: "02",
    title: "Theerin Phetkasem 48",
    titleTh: "ธีรินทร์ เพชรเกษม 48",
    location: "Bangkok · Renovation & Built-In",
    locationTh: "กรุงเทพฯ · Renovation & Built-In",
    image: null,
    href: "",
    ready: false,
  }
];

export default function HomeRenovationProjectsPage(){
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
        <p className="eyebrow">RESIDENTIAL · RENOVATION</p>
        <h1>HOME RENOVATION</h1>
        <p>{lang==="th" ? "รวมผลงานรีโนเวทบ้านพักอาศัย โดยประสานงานตั้งแต่การปรับพื้นที่ งานก่อสร้าง งานระบบ Built-in และงานเก็บรายละเอียดจนพร้อมใช้งาน" : "Selected residential renovation projects coordinated across construction, building services, built-in work and final finishing."}</p>
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
              <p className="category">RESIDENTIAL · RENOVATION</p>
              <h2>{lang==="th" ? project.titleTh : project.title}</h2>
              <p className="overviewSubtitle">
                {lang==="th" ? project.locationTh : project.location}
              </p>
              <p className="overviewBody">
                {lang==="th" ? "งานรีโนเวทและ Built-in ที่ให้ความสำคัญกับการใช้งานจริง การประสานงานหน้างาน และคุณภาพของรายละเอียดก่อนส่งมอบ" : "Residential renovation and built-in work focused on practical use, site coordination and quality detailing through completion."}
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
