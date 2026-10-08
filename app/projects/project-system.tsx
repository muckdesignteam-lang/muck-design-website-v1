export type ProjectLanguage = "th" | "en";

export const PROJECT_CATEGORY_COPY = {
  commercial: {
    title: "Commercial",
    subtitle: "Interior, Built-In and Renovation",
    descriptionTh: "งานออกแบบ รีโนเวท และ Built-in สำหรับพื้นที่ธุรกิจ โดยประสานฟังก์ชัน งานระบบ วัสดุ และรายละเอียดการติดตั้งให้เหมาะกับการใช้งานของแต่ละโครงการ",
    descriptionEn: "Design, renovation and built-in services for commercial spaces, coordinating function, building services, materials and installation details to suit each project's operational requirements.",
  },
} as const;

export const PROJECT_CTA_COPY = {
  th: "ไม่ว่าจะเป็นบ้านใหม่ งานรีโนเวต หรือพื้นที่สำหรับธุรกิจ เราพร้อมให้คำปรึกษา ดูแล และประสานงานครบทุกขั้นตอน เพื่อส่งมอบพื้นที่ที่ตอบโจทย์ทั้งฟังก์ชันและไลฟ์สไตล์ของคุณ",
  en: "Planning a new home, renovation or commercial space? Talk to MUCK Design about the initial scope.",
} as const;

export function ProjectCTA({ lang }: { lang: ProjectLanguage }) {
  return (
    <section className="projectsCta">
      <div>
        <p className="eyebrow">START A PROJECT</p>
        <h2>LET’S CREATE<br/>A SPACE THAT WORKS FOR YOU</h2>
      </div>
      <div>
        <p>{PROJECT_CTA_COPY[lang]}</p>
        <a className="solidBtn" href="https://lin.ee/xMvkeiO" target="_blank" rel="noreferrer">
          TALK TO MUCK DESIGN
        </a>
      </div>
    </section>
  );
}
