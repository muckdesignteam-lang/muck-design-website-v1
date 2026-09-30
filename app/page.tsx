 "use client";

import Image from "next/image";
import { useState } from "react";

const copy = {
  en: {
    heroEyebrow: "RESIDENTIAL & COMMERCIAL",
    heroTitle1: "FROM SPACE",
    heroTitle2: "TO LIVING.",
    heroServices: "Turnkey Services · Renovation · Built-in",
    heroBody: "One point of contact. One coordinated process.",
    heroDetail: "We coordinate planning, design development, renovation, built-in work and project execution from start to completion.",
    explore: "EXPLORE PROJECTS",
    transformTitle: "How We Transform Space : Perfection in Every Step",
    transformLead: "Attention in every step, toward a space that works beautifully for you.",
    projects: "Selected Projects",
    viewAll: "VIEW ALL PROJECTS",
    services: "Our Services",
    servicesLead: "Integrated services for spaces that work in real life.",
    attention: "Built With Attention",
    attentionLead: "The quality of a finished space begins with attention at every stage.",
    cta1: "LET’S CREATE",
    cta2: "A SPACE THAT",
    cta3: "WORKS FOR YOU",
    ctaBody: "New home, renovation or commercial space — we coordinate each stage to create a space that works for your needs and lifestyle.",
    talk: "TALK TO MUCK DESIGN"
  },
  th: {
    heroEyebrow: "RESIDENTIAL & COMMERCIAL",
    heroTitle1: "FROM SPACE",
    heroTitle2: "TO LIVING.",
    heroServices: "Turnkey Services · Renovation · Built-in",
    heroBody: "ออกแบบและรับเหมาก่อสร้างแบบครบวงจร",
    heroDetail: "ตั้งแต่การวางแนวคิด ออกแบบ ก่อสร้าง ตกแต่ง รวมถึงการควบคุมงานก่อสร้างและรีโนเวท ไปจนถึงการส่งมอบพื้นที่พร้อมใช้งาน",
    explore: "ดูผลงาน",
    transformTitle: "How We Transform Space : Perfection in Every Step",
    transformLead: "ใส่ใจในทุกขั้นตอน เพื่อพื้นที่ที่สมบูรณ์ในแบบของคุณ",
    projects: "Selected Projects",
    viewAll: "ดูผลงานทั้งหมด",
    services: "Our Services",
    servicesLead: "บริการครบวงจร เพื่อให้พื้นที่ที่ตอบโจทย์การใช้งานจริง",
    attention: "Built With Attention",
    attentionLead: "ใส่ใจในรายละเอียดของงาน เพราะคุณภาพของพื้นที่ที่เสร็จสมบูรณ์ เริ่มจากความใส่ใจในทุกขั้นตอน",
    cta1: "LET’S CREATE",
    cta2: "A SPACE THAT",
    cta3: "WORKS FOR YOU",
    ctaBody: "บ้านใหม่ ปรับปรุงพื้นที่เดิม หรือพื้นที่สำหรับธุรกิจ เราพร้อมดูแลและประสานงานในทุกขั้นตอน เพื่อให้คุณได้พื้นที่ที่ตอบโจทย์การใช้งานและไลฟ์สไตล์",
    talk: "ติดต่อ MUCK DESIGN"
  }
};

const transform = [
  ["UNDERSTAND","Space · Needs · Budget","เข้าใจพื้นที่ ความต้องการ และงบประมาณ","/images/transform-understand.jpg"],
  ["PLAN & DESIGN","Planning · Design · Material","วางแผน ออกแบบ และเลือกวัสดุ","/images/transform-plan-design.jpg"],
  ["BUILD","Renovation · Construction · Built-in","งานปรับปรุง ก่อสร้าง และ Built-in","/images/transform-build.jpg"],
  ["COMPLETE","Installation · Review · Handover","ติดตั้ง ตรวจสอบ และส่งมอบ","/images/transform-complete.jpg"]
];

const projects = [
  ["RESIDENTIAL · NEW HOME","New Home","Interior & Built-in","/images/project-new-home.png"],
  ["RESIDENTIAL · RENOVATION","Home Renovation","Interior & Built-in","/images/project-renovation.png"],
  ["COMMERCIAL","OFFICE / RETAIL SPACES","Renovation & Built-in","/images/project-commercial.jpg"]
];

const serviceCopy = [
  ["Interior Design",
   "ออกแบบและวางผังการใช้งานพื้นที่ให้ตอบโจทย์การใช้งานจริง และสะท้อนถึงสไตล์ ภาพลักษณ์ และความต้องการของเจ้าของโครงการหรือเจ้าของธุรกิจ เพื่อให้พื้นที่สามารถทำงานร่วมกับผู้ใช้งานได้อย่างมีประสิทธิภาพสูงสุด"],
  ["Renovation & Construction",
   "งานปรับปรุง ต่อเติม และรีโนเวทพื้นที่เดิมให้เหมาะกับการใช้งานใหม่ พร้อมประเมินสภาพพื้นที่และขอบเขตงาน เพื่อวางแผนงบประมาณให้สอดคล้องกับความต้องการ"],
  ["Built-in Furniture",
   "งานผลิตและติดตั้งเฟอร์นิเจอร์ Built-in ตามแบบและการใช้งานจริง โดยให้ความสำคัญกับรายละเอียด วัสดุ การผลิต และคุณภาพของงานติดตั้ง"],
  ["M&E Services",
   "บริการออกแบบ ติดตั้ง และบริหารระบบไฟฟ้า ระบบประปา ระบบปรับอากาศ และงานระบบที่เกี่ยวข้อง ให้เหมาะสมกับขนาดและรูปแบบของโครงการ พร้อมคำนึงถึงมาตรฐานความปลอดภัย"],
  ["Project Management",
   "ดูแลและประสานงานโครงการ ทั้งขอบเขตงาน งบประมาณ ระยะเวลา และคุณภาพ พร้อมติดตามและรายงานความคืบหน้า เพื่อให้เจ้าของโครงการเห็นภาพและสถานะของงานตลอดโครงการ"]
];

export default function Home() {
  const [lang, setLang] = useState<"en"|"th">("en");
  const t = copy[lang];

  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="MUCK Design home">
          <Image src="/logo/muck-logo.png" alt="MUCK Design" width={140} height={70} priority />
        </a>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#process">How We Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="headerActions">
          <button className="lang" onClick={() => setLang(lang === "en" ? "th" : "en")}>
            {lang === "en" ? "TH | EN" : "EN | TH"}
          </button>
          <a className="outlineBtn" href="#contact">CONTACT US</a>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="heroCopy">
          <p className="eyebrow">{t.heroEyebrow}</p>
          <h1>{t.heroTitle1}<br/>{t.heroTitle2}</h1>
          <p className="serviceLine">{t.heroServices}</p>
          <p className="heroStrong">{t.heroBody}</p>
          <p className="heroDetail">{t.heroDetail}</p>
          <a href="#projects" className="solidBtn">{t.explore}</a>
        </div>
        <div className="heroImage">
          <Image src="/images/hero-residential.jpg" alt="MUCK Design residential interior" fill priority sizes="(max-width:900px) 100vw, 54vw" />
          <span className="tagline">The Path to Better Living</span>
        </div>
      </section>

      <section id="process" className="section soft">
        <div className="sectionHead">
          <div><p className="kicker">HOW WE TRANSFORM SPACE</p><h2>{t.transformTitle}</h2></div>
          <p>{t.transformLead}</p>
        </div>
        <div className="transformGrid">
          {transform.map(([title,sub,thai,img]) => (
            <article key={title} className="transformCard">
              <div className="ratio">
                <Image src={img} alt={title} fill sizes="(max-width:700px) 50vw, 25vw" />
              </div>
              <h3>{title}</h3>
              <p>{sub}</p>
              {lang === "th" && <p className="thai">{thai}</p>}
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="sectionHead compact">
          <div><p className="kicker">OUR WORK</p><h2>{t.projects}</h2></div>
          <a href="#projects" className="textLink">{t.viewAll} →</a>
        </div>
        <div className="projectGrid">
          {projects.map(([cat,title,sub,img],i) => (
            <article className="projectCard" key={title}>
              <div className="projectImage">
                <Image src={img} alt={title} fill sizes="(max-width:800px) 100vw, 33vw" />
                {i === 2 && <span className="privacyPatch" aria-hidden="true"></span>}
              </div>
              <p className="category">{cat}</p>
              <h3>{title}</h3>
              <p>{sub}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="section soft">
        <div className="sectionHead">
          <div><p className="kicker">WHAT WE DO</p><h2>{t.services}</h2></div>
          <p>{t.servicesLead}</p>
        </div>
        <div className="servicesLayout">
          <div className="serviceList">
            {serviceCopy.map(([title,thai]) => (
              <details key={title}>
                <summary><span>{title}</span><span>→</span></summary>
                {lang === "th" && <p>{thai}</p>}
              </details>
            ))}
          </div>
          <div className="turnkeyCard">
            <Image src="/images/service-turnkey.jpg" alt="Turnkey residential interior" fill sizes="(max-width:900px) 100vw, 48vw" />
            <div className="turnkeyOverlay">
              <h3>TURNKEY SERVICES</h3>
              <p>One coordinated process across design, renovation, built-in, M&amp;E and project management.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="sectionHead">
          <div><p className="kicker">DETAILS MATTER</p><h2>{t.attention}</h2></div>
          <p>{t.attentionLead}</p>
        </div>
        <div className="attentionGrid">
          {[
            ["MATERIAL","การเลือกวัสดุ","/images/attention-design-execution.jpg"],
            ["CRAFTSMANSHIP","รายละเอียดงานและการผลิต","/images/attention-craftsmanship.jpg"],
            ["ON SITE","การควบคุมและประสานงานหน้างาน","/images/attention-built-in.jpg"],
            ["FINISHING","การตรวจสอบรายละเอียดก่อนส่งมอบ","/images/transform-complete.jpg"]
          ].map(([title,thai,img]) => (
            <article key={title}>
              <div className="attentionImage"><Image src={img} alt={title} fill sizes="(max-width:700px) 50vw, 25vw" /></div>
              <h3>{title}</h3>
              {lang === "th" && <p className="thai">{thai}</p>}
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="cta">
        <div className="ctaImage"><Image src="/images/cta-bedroom.png" alt="Completed residential interior" fill sizes="(max-width:900px) 100vw, 48vw" /></div>
        <div className="ctaCopy">
          <p className="kicker light">START A PROJECT</p>
          <h2>{t.cta1}<br/>{t.cta2}<br/>{t.cta3}</h2>
          <p>{t.ctaBody}</p>
          <a className="lightBtn" href="https://lin.ee/xMvkeiO" target="_blank" rel="noreferrer">{t.talk}</a>
        </div>
      </section>

      <footer>
        <div>
          <strong>Muck Design by BS&amp;P Beyond Home Design Co.,Ltd.</strong>
          <p>The Path to Better Living</p>
        </div>
        <div className="footerLinks">
          <a href="https://www.facebook.com/61581893797548/" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://lin.ee/xMvkeiO" target="_blank" rel="noreferrer">LINE</a>
          <a href="tel:+66966289516">096-6289-516</a>
          <a href="tel:+66632179355">063-2179-355</a>
          <a href="mailto:muckdesignteam@gmail.com">muckdesignteam@gmail.com</a>
        </div>
      </footer>
    </main>
  );
}
