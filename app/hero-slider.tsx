"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Edit this list to change the homepage hero photos (4-5 bright, wide, finished rooms work best).
// position = which part stays visible when the photo is cropped, e.g. "50% 40%" (x% y%).
export const heroSlides: { src: string; alt: string; position?: string }[] = [
  { src: "/images/hero-residential.jpg", alt: "Completed MUCK Design residential interior" },
  { src: "/images/portfolio/soi-aree-8/hero.jpg", alt: "Soi Aree 8 living room by MUCK Design", position: "50% 55%" },
  { src: "/images/projects/moden-rangsit-klong-4/finished-living.jpg", alt: "Moden Rangsit Klong 4 interior by MUCK Design" },
  { src: "/images/projects/passorn-8-bang-yai/finished-exterior-wide.jpg", alt: "Renovated house exterior by MUCK Design", position: "50% 60%" },
];

const INTERVAL_MS = 6000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduced || heroSlides.length < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduced, index]);

  return (
    <>
      {heroSlides.map((slide, n) => (
        <div className={n === index ? "heroSlide on" : "heroSlide"} key={slide.src} aria-hidden={n !== index}>
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            quality={90}
            priority={n === 0}
            sizes="(max-width:900px) 100vw, 64vw"
            style={{ objectFit: "cover", objectPosition: slide.position ?? "50% 50%" }}
          />
        </div>
      ))}
      {heroSlides.length > 1 && (
        <div className="heroDots" role="tablist" aria-label="Hero photos">
          {heroSlides.map((slide, n) => (
            <button
              key={slide.src}
              role="tab"
              aria-selected={n === index}
              aria-label={`Photo ${n + 1}`}
              className={n === index ? "on" : ""}
              onClick={() => setIndex(n)}
            />
          ))}
        </div>
      )}
    </>
  );
}
