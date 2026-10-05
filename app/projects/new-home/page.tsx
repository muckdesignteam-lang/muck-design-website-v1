"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "Moden Rangsit Klong 4",
    titleTh: "โมเดน รังสิต คลอง 4",
    location: "Pathum Thani",
    locationTh: "ปทุมธานี",
    image: "/images/projects/moden-rangsit-klong-4/hero-finished13.jpg",
    href: "/projects/moden-rangsit-klong-4",
    ready: true,
  },
  {
    number: "02",
    title: "Bangkok Boulevard Tiwanon-Rangsit",
    titleTh: "บางกอก บูเลอวาร์ด ติวานนท์-รังสิต",
    location: "Pathum Thani",
    locationTh: "ปทุมธานี",
    image: "/images/projects/bangkok-boulevard-tiwanon-rangsit/hero.jpg",
    href: "/projects/bangkok-boulevard-tiwanon-rangsit",
    ready: true,
  },
  {
    number: "03",
    title: "Soi Ari 8",
    titleTh: "ซอยอารีย์ 8",
    location: "Bangkok",
    locationTh: "กรุงเทพฯ",
    image: null,
    href: "",
    ready: false,
  },
  {
    number: "04",
    title: "Golden Neo Bangna–Suanluang",
    titleTh: "โกลเด้น นีโอ บางนา-สวนหลวง",
    location: "Samut Prakan",
    locationTh: "สมุทรปราการ",
    image: null,
    href: "",
    ready: false,
  },
];

export default function NewHomeProjectsPage(){
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

      <section className="projectsIntro">
        <p className="eyebrow">RESIDENTIAL · NEW HOME</p>
        <h1>NEW HOME</h1>
        <p>
          {lang==="th"
            ? "รวมผลงานออกแบบตกแต่งภายในและ Built-in สำหรับบ้านใหม่ ตั้งแต่การวางผัง ออกแบบ ผลิต และติดตั้งจนพร้อมใช้งาน"
            : "Selected new-home projects covering interior planning, design, built-in production and installation."}
        </p>
      </section>

      <section className="projectsOverview">
        {projects.map((project,index)=>(
          <article className="overviewProject" key={project.number}>
            <div className={"overviewImage" + (!project.image ? " categoryPlaceholder" : "")}>
              {project.image ? (
                <Image
                  src={project.image}
                  alt={lang==="th" ? project.titleTh : project.title}
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
              <p className="category">RESIDENTIAL · NEW HOME</p>
              <h2>{lang==="th" ? project.titleTh : project.title}</h2>
              <p className="overviewSubtitle">{lang==="th" ? project.locationTh : project.location} · Interior &amp; Built-in</p>
              <p className="overviewBody">
                {lang==="th"
                  ? "งานออกแบบตกแต่งภายในและ Built-in สำหรับบ้านใหม่ โดยให้ความสำคัญกับการใช้งานจริง รายละเอียดวัสดุ และคุณภาพงานติดตั้ง"
                  : "Interior and built-in work for a new home, coordinated around practical use, material detailing and installation quality."}
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
          <p>
            {lang==="th"
              ? "หากกำลังวางแผนบ้านใหม่ สามารถพูดคุยรายละเอียดและขอบเขตงานเบื้องต้นกับเราได้"
              : "Planning a new home? Talk to us about the initial scope, design and built-in requirements."}
          </p>
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
