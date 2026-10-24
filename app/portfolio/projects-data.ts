export type Group = "residential" | "commercial";
export type Project = {
  id: string;
  group: Group;
  th: string;
  en: string;
  subtitle: string;
  meta: string;
  cover: string;
  images: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "moden",
    group: "residential",
    th: "โมเดน รังสิต คลอง 4",
    en: "Moden Rangsit Klong 4",
    subtitle: "Turnkey · 235 sqm",
    meta: "Residential · Turnkey",
    cover: "/images/projects/moden-rangsit-klong-4/finished-wide.jpg",
    images: [
      "/images/projects/moden-rangsit-klong-4/finished-wide.jpg",
      "/images/projects/moden-rangsit-klong-4/hero-finished13.jpg",
      "/images/projects/moden-rangsit-klong-4/finished-living.jpg",
      "/images/projects/moden-rangsit-klong-4/finished-bedroom.jpg",
      "/images/projects/moden-rangsit-klong-4/finished-kitchen.jpg",
      "/images/projects/moden-rangsit-klong-4/finished-pantry.jpg",
      "/images/projects/moden-rangsit-klong-4/finished-shrine.jpg",
    ],
    featured: true,
  },
  {
    id: "ai",
    group: "residential",
    th: "อัยย์ ราชพฤกษ์",
    en: "Ai Ratchaphruek",
    subtitle: "Turnkey · 260 sqm",
    meta: "Residential · Turnkey",
    cover: "/images/portfolio/ai-ratchaphruek/hero.jpg",
    images: [
      "/images/portfolio/ai-ratchaphruek/hero.jpg",
      "/images/portfolio/ai-ratchaphruek/tv-wall-detail.jpg",
      "/images/portfolio/ai-ratchaphruek/living-overview.jpg",
      "/images/portfolio/ai-ratchaphruek/walk-in-closet.jpg",
      "/images/portfolio/ai-ratchaphruek/glass-cabinet.jpg",
      "/images/portfolio/ai-ratchaphruek/wardrobe.jpg",
      "/images/portfolio/ai-ratchaphruek/display-cabinet.jpg",
    ],
    featured: true,
  },
  {
    id: "bangkok",
    group: "residential",
    th: "บางกอก บูเลอวาร์ด ติวานนท์-รังสิต",
    en: "Bangkok Boulevard Tiwanon–Rangsit",
    subtitle: "Design & Built-in",
    meta: "Residential · Design & Built-in",
    cover: "/images/projects/bangkok-boulevard-tiwanon-rangsit/hero.jpg",
    images: [
      "/images/projects/bangkok-boulevard-tiwanon-rangsit/hero.jpg",
      "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-01.jpg",
      "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-02.jpg",
      "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-03.jpg",
      "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-04.jpg",
      "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-05.jpg",
      "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-06.jpg",
    ],
  },
  {
    id: "passorn",
    group: "residential",
    th: "ภัสสร 8 บางใหญ่",
    en: "Passorn 8 Bang Yai",
    subtitle: "Home Renovation",
    meta: "Residential · Home Renovation",
    cover: "/images/projects/passorn-8-bang-yai/hero-finished.jpg",
    images: [
      "/images/projects/passorn-8-bang-yai/hero-finished.jpg",
      "/images/projects/passorn-8-bang-yai/finished-exterior-wide.jpg",
      "/images/projects/passorn-8-bang-yai/finished-exterior-front.jpg",
      "/images/projects/passorn-8-bang-yai/finished-kitchen.jpg",
      "/images/projects/passorn-8-bang-yai/finished-bedroom.jpg",
      "/images/projects/passorn-8-bang-yai/finished-walkin.jpg",
      "/images/projects/passorn-8-bang-yai/finished-bathroom.jpg",
    ],
  },
  {
    id: "soi-aree-8",
    group: "residential",
    th: "ซอยอารีย์ 8",
    en: "Soi Aree 8",
    subtitle: "Built-in Construction · Homeowner’s Design",
    meta: "Residential · Built-in Construction",
    cover: "/images/portfolio/soi-aree-8/hero.jpg",
    images: [
      "/images/portfolio/soi-aree-8/hero.jpg",
      "/images/portfolio/soi-aree-8/wood-partition.jpg",
      "/images/portfolio/soi-aree-8/kitchen.jpg",
      "/images/portfolio/soi-aree-8/dining-overview.jpg",
      "/images/portfolio/soi-aree-8/built-in-shelves.jpg",
      "/images/portfolio/soi-aree-8/wardrobe.jpg",
      "/images/portfolio/soi-aree-8/study-and-cabinetry.jpg",
    ],
    featured: true,
  },
  {
    id: "golden-neo",
    group: "residential",
    th: "โกลเด้น นีโอ บางนา–สวนหลวง",
    en: "Golden Neo Bangna–Suan Luang",
    subtitle: "Design & Built-in · Selected Areas",
    meta: "Residential · Design & Built-in",
    cover: "/images/portfolio/golden-neo-bangna-suan-luang/hero.jpg",
    images: [
      "/images/portfolio/golden-neo-bangna-suan-luang/hero.jpg",
      "/images/portfolio/golden-neo-bangna-suan-luang/tv-wall-front.jpg",
      "/images/portfolio/golden-neo-bangna-suan-luang/tv-wall-staircase.jpg",
      "/images/portfolio/golden-neo-bangna-suan-luang/workstation.jpg",
      "/images/portfolio/golden-neo-bangna-suan-luang/workstation-detail.jpg",
      "/images/portfolio/golden-neo-bangna-suan-luang/marble-counter.jpg",
      "/images/portfolio/golden-neo-bangna-suan-luang/bar-and-display.jpg",
    ],
    featured: true,
  },
  {
    id: "dental",
    group: "commercial",
    th: "คลินิกทันตกรรม ฉะเชิงเทรา",
    en: "Dental Clinic Chachoengsao",
    subtitle: "Commercial Interior",
    meta: "Commercial · Turnkey",
    cover: "/images/projects/dental-clinic-chachoengsao/hero.jpg",
    images: [
      "/images/projects/dental-clinic-chachoengsao/hero.jpg",
      "/images/projects/dental-clinic-chachoengsao/finished-01.jpg",
      "/images/projects/dental-clinic-chachoengsao/finished-02.jpg",
      "/images/projects/dental-clinic-chachoengsao/finished-03.jpg",
      "/images/projects/dental-clinic-chachoengsao/finished-04.jpg",
      "/images/projects/dental-clinic-chachoengsao/finished-05.jpg",
      "/images/projects/dental-clinic-chachoengsao/finished-06.jpg",
    ],
    featured: true,
  },
  {
    id: "optic-shop",
    group: "commercial",
    th: "ร้านแว่นตา บางใหญ่",
    en: "Optic Shop Bang Yai",
    subtitle: "Retail Interior & Display",
    meta: "Commercial · Turnkey",
    cover: "/images/portfolio/optic-shop/hero.png",
    images: [
      "/images/portfolio/optic-shop/hero.png",
      "/images/portfolio/optic-shop/display-wall.png",
      "/images/portfolio/optic-shop/showroom-angle.png",
      "/images/portfolio/optic-shop/corridor.png",
      "/images/portfolio/optic-shop/circle-shelf.jpg",
    ],
    featured: true,
  },
];

// Editorial sequence: four residential and two commercial projects.
export const imageDimensions: Record<string, [number, number]> = {
  "/images/portfolio/ai-ratchaphruek/display-cabinet.jpg": [
    2048,
    1536
  ],
  "/images/portfolio/ai-ratchaphruek/glass-cabinet.jpg": [
    1359,
    2048
  ],
  "/images/portfolio/ai-ratchaphruek/hero.jpg": [
    1535,
    2048
  ],
  "/images/portfolio/ai-ratchaphruek/living-overview.jpg": [
    1536,
    2048
  ],
  "/images/portfolio/ai-ratchaphruek/tv-wall-detail.jpg": [
    1508,
    2048
  ],
  "/images/portfolio/ai-ratchaphruek/walk-in-closet.jpg": [
    1219,
    864
  ],
  "/images/portfolio/ai-ratchaphruek/wardrobe.jpg": [
    1357,
    1101
  ],
  "/images/portfolio/golden-neo-bangna-suan-luang/bar-and-display.jpg": [
    1500,
    2000
  ],
  "/images/portfolio/golden-neo-bangna-suan-luang/hero.jpg": [
    2000,
    1500
  ],
  "/images/portfolio/golden-neo-bangna-suan-luang/marble-counter.jpg": [
    1500,
    2000
  ],
  "/images/portfolio/golden-neo-bangna-suan-luang/tv-wall-front.jpg": [
    1500,
    2000
  ],
  "/images/portfolio/golden-neo-bangna-suan-luang/tv-wall-staircase.jpg": [
    1500,
    2000
  ],
  "/images/portfolio/golden-neo-bangna-suan-luang/workstation-detail.jpg": [
    1500,
    2000
  ],
  "/images/portfolio/golden-neo-bangna-suan-luang/workstation.jpg": [
    2000,
    1500
  ],
  "/images/portfolio/optic-shop/circle-shelf.jpg": [
    1086,
    1448
  ],
  "/images/portfolio/optic-shop/corridor.png": [
    1024,
    1536
  ],
  "/images/portfolio/optic-shop/display-wall.png": [
    1024,
    1536
  ],
  "/images/portfolio/optic-shop/hero.png": [
    1024,
    1536
  ],
  "/images/portfolio/optic-shop/showroom-angle.png": [
    1024,
    1536
  ],
  "/images/portfolio/soi-aree-8/built-in-shelves.jpg": [
    1500,
    2000
  ],
  "/images/portfolio/soi-aree-8/dining-overview.jpg": [
    2000,
    1500
  ],
  "/images/portfolio/soi-aree-8/hero.jpg": [
    1448,
    1086
  ],
  "/images/portfolio/soi-aree-8/kitchen.jpg": [
    2000,
    1330
  ],
  "/images/portfolio/soi-aree-8/study-and-cabinetry.jpg": [
    1500,
    2000
  ],
  "/images/portfolio/soi-aree-8/wardrobe.jpg": [
    1500,
    2000
  ],
  "/images/portfolio/soi-aree-8/wood-partition.jpg": [
    1500,
    2000
  ],
  "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-01.jpg": [
    1536,
    2048
  ],
  "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-02.jpg": [
    1536,
    2048
  ],
  "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-03.jpg": [
    1536,
    2048
  ],
  "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-04.jpg": [
    1536,
    2048
  ],
  "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-05.jpg": [
    2048,
    1536
  ],
  "/images/projects/bangkok-boulevard-tiwanon-rangsit/finished-06.jpg": [
    1536,
    2048
  ],
  "/images/projects/bangkok-boulevard-tiwanon-rangsit/hero.jpg": [
    1448,
    1086
  ],
  "/images/projects/dental-clinic-chachoengsao/finished-01.jpg": [
    1536,
    2048
  ],
  "/images/projects/dental-clinic-chachoengsao/finished-02.jpg": [
    1536,
    2048
  ],
  "/images/projects/dental-clinic-chachoengsao/finished-03.jpg": [
    2048,
    1536
  ],
  "/images/projects/dental-clinic-chachoengsao/finished-04.jpg": [
    1536,
    2048
  ],
  "/images/projects/dental-clinic-chachoengsao/finished-05.jpg": [
    2048,
    1536
  ],
  "/images/projects/dental-clinic-chachoengsao/finished-06.jpg": [
    1536,
    2048
  ],
  "/images/projects/dental-clinic-chachoengsao/hero.jpg": [
    1535,
    2047
  ],
  "/images/projects/moden-rangsit-klong-4/finished-bedroom.jpg": [
    2048,
    1020
  ],
  "/images/projects/moden-rangsit-klong-4/finished-kitchen.jpg": [
    2048,
    1536
  ],
  "/images/projects/moden-rangsit-klong-4/finished-living.jpg": [
    2048,
    1536
  ],
  "/images/projects/moden-rangsit-klong-4/finished-pantry.jpg": [
    1477,
    1108
  ],
  "/images/projects/moden-rangsit-klong-4/finished-shrine.jpg": [
    1029,
    1372
  ],
  "/images/projects/moden-rangsit-klong-4/finished-wide.jpg": [
    1423,
    1067
  ],
  "/images/projects/moden-rangsit-klong-4/hero-finished13.jpg": [
    2048,
    1536
  ],
  "/images/projects/passorn-8-bang-yai/finished-bathroom.jpg": [
    1536,
    2048
  ],
  "/images/projects/passorn-8-bang-yai/finished-bedroom.jpg": [
    1448,
    1086
  ],
  "/images/projects/passorn-8-bang-yai/finished-exterior-front.jpg": [
    1448,
    1086
  ],
  "/images/projects/passorn-8-bang-yai/finished-exterior-wide.jpg": [
    1448,
    1086
  ],
  "/images/projects/passorn-8-bang-yai/finished-kitchen.jpg": [
    1086,
    1448
  ],
  "/images/projects/passorn-8-bang-yai/finished-walkin.jpg": [
    1535,
    2048
  ],
  "/images/projects/passorn-8-bang-yai/hero-finished.jpg": [
    2048,
    1536
  ]
};

// Optional: adjust how a photo is cropped inside the equal-size tiles on /portfolio/all.
// Example: "/images/portfolio/soi-aree-8/hero.jpg": "50% 30%"  (x% y%, default is center)
export const imageFocus: Record<string, string> = {};
