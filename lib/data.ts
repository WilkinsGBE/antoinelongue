import type { Project } from './types';

// Static data - moved from file system to avoid client-side fs issues
const siteData = {
  "name": "Antoine Longue",
  "tagline": "Graphic Design & Photography for world‑class sport & brand stories.",
  "locations": ["Montreal", "Madrid"],
  "email": "booking@yourdomain.com",
  "instagram": "https://www.instagram.com/antoinelongue?igsh=aTRsNnRodjIxOTZv",
  "uefa": true,
  "bio": {
    "title": "Graphic Designer & Photographer",
    "credentials": "Member of the UEFA Media Pool",
    "availability": "Available Worldwide",
    "clients": "Clients in 10+ Countries"
  },
  "accent": {
    "electricBlue": "#1FA4FF",
    "gold": "#D6AF68"
  }
};

const servicesData = [
  {
    "slug": "photography-videography",
    "title": "Photography & Videography",
    "summary": "Matchday coverage, portraits, commercial campaigns, and short-form reels with cinematic color grade.",
    "bullets": [
      "Sports action & atmosphere",
      "Athlete & staff portraits",
      "Commercial brand shoots",
      "Short-form vertical reels"
    ],
    "cta": "Book a shoot"
  },
  {
    "slug": "graphic-design",
    "title": "Graphic Design",
    "summary": "Elite posters, covers, social kits, and photo-manipulation composites for clubs and brands.",
    "bullets": [
      "Matchday & announcement posters",
      "Social media kits & ad creatives",
      "Key visuals & media day templates",
      "Photo composites & retouching"
    ],
    "cta": "Start a design project"
  },
  {
    "slug": "lightroom-presets",
    "title": "Lightroom Presets",
    "summary": "Film-inspired color science for speed and consistency across sets.",
    "bullets": [
      "One‑click looks with tweakable sliders",
      "Desktop & Mobile variants",
      "Documentation & install guide"
    ],
    "cta": "Shop presets"
  }
];

const projectsData: Project[] = [
  {
    "slug": "cf-montreal-vs-stlouis-city",
    "title": "CF Montréal vs St. Louis City",
    "date": "2024-08-18",
    "location": "Montréal, Canada",
    "services": ["Photography"],
    "summary": "Matchday story—energy, crowd, decisive moments—delivered with a cold blue grade and crisp contrasts.",
    "hero": "/portfolio/CF MONTREAL VS ST. LOUIS CITY SOCCER CLUB/46e02892-86b8-4a73-a5cd-c05843de35ab_rw_1920.jpg",
    "gallery": [
      "/portfolio/CF MONTREAL VS ST. LOUIS CITY SOCCER CLUB/46e02892-86b8-4a73-a5cd-c05843de35ab_rw_1920.jpg",
      "/portfolio/CF MONTREAL VS ST. LOUIS CITY SOCCER CLUB/37176c71-1b52-438b-b329-c7baec53deea_rw_1200.jpg",
      "/portfolio/CF MONTREAL VS ST. LOUIS CITY SOCCER CLUB/029931d8-68a1-43cd-a4e7-7e21d70ac297_rw_600.jpg",
      "/portfolio/CF MONTREAL VS ST. LOUIS CITY SOCCER CLUB/038116e8-6933-44ea-a387-bd138780fff6_rw_600.jpg",
      "/portfolio/CF MONTREAL VS ST. LOUIS CITY SOCCER CLUB/0a8880d0-2b23-49a8-97fd-5030d688d4c5_rw_600.jpg",
      "/portfolio/CF MONTREAL VS ST. LOUIS CITY SOCCER CLUB/2df0103f-111f-4609-b2fe-d7889bc39531_rw_600.jpg",
      "/portfolio/CF MONTREAL VS ST. LOUIS CITY SOCCER CLUB/86a8636a-78e7-4882-97a1-2ca01add09b3_rw_600.jpg",
      "/portfolio/CF MONTREAL VS ST. LOUIS CITY SOCCER CLUB/8ea2b787-5c25-414b-bd8a-02d511c52ee6_rw_600.jpg",
      "/portfolio/CF MONTREAL VS ST. LOUIS CITY SOCCER CLUB/a5778831-d9dc-414a-a603-3661717dda4a_rw_600.jpg",
      "/portfolio/CF MONTREAL VS ST. LOUIS CITY SOCCER CLUB/ae3bdc73-b356-4270-9d44-efd383798ae9_rw_600.jpg",
      "/portfolio/CF MONTREAL VS ST. LOUIS CITY SOCCER CLUB/d73a046e-a715-45d5-b19a-d98fe55f28fe_rw_600.jpg",
      "/portfolio/CF MONTREAL VS ST. LOUIS CITY SOCCER CLUB/d75de129-8fb7-410a-93fc-e4c6a7c4ec56_rw_600.jpg",
      "/portfolio/CF MONTREAL VS ST. LOUIS CITY SOCCER CLUB/e11fa5a8-1814-40da-8ed7-ca488110b0dd_rw_600.jpg"
    ],
    "credits": {
      "client": "CF Montréal",
      "role": "Photographer",
      "collaborators": []
    },
    "theme": { "accent": "#1FA4FF" }
  },
  {
    "slug": "cf-montreal-vs-lafc",
    "title": "CF Montréal vs Los Angeles FC",
    "date": "2024-05-11",
    "location": "Montréal, Canada",
    "services": ["Photography"],
    "summary": "A tighter, dramatic angle set with warm highlights and trophy‑room sheen.",
    "hero": "/portfolio/CF MONTREAL VS LOS ANGELES FC/1f94e432-be06-44e6-9c64-af0ed2b7463b_rw_1920.jpg",
    "gallery": [
      "/portfolio/CF MONTREAL VS LOS ANGELES FC/1f94e432-be06-44e6-9c64-af0ed2b7463b_rw_1920.jpg",
      "/portfolio/CF MONTREAL VS LOS ANGELES FC/227a1383-cbae-4abc-b664-8b19b6debf83_rw_1920.jpg",
      "/portfolio/CF MONTREAL VS LOS ANGELES FC/234678f7-6172-4b63-8b87-6bd51cf3d5c3_rw_1920.jpg",
      "/portfolio/CF MONTREAL VS LOS ANGELES FC/25ce4ea2-aa6f-4718-a5e3-d981f793e89f_rw_600.jpg",
      "/portfolio/CF MONTREAL VS LOS ANGELES FC/5e735d43-06e7-40a0-8bd8-da2e3778f534_rw_1200.jpg",
      "/portfolio/CF MONTREAL VS LOS ANGELES FC/6b501798-c8c3-467f-aa82-406d1fe29487_rw_600.jpg",
      "/portfolio/CF MONTREAL VS LOS ANGELES FC/6dc9ccc9-3a6c-48bf-ad58-a9b9de92e83c_rw_1920.jpg",
      "/portfolio/CF MONTREAL VS LOS ANGELES FC/81fc8310-ffbe-4e33-9c10-87fbb27114ac_rw_1920.png",
      "/portfolio/CF MONTREAL VS LOS ANGELES FC/9b56d45f-551d-4ac7-b290-8632f02634b6_rw_600.jpg",
      "/portfolio/CF MONTREAL VS LOS ANGELES FC/ca9d603f-e67d-4f74-8b72-4654f5defb7e_rw_600.jpg",
      "/portfolio/CF MONTREAL VS LOS ANGELES FC/caaec6d7-3a9a-47c1-bb7b-225368c0e140_rw_1920.jpg",
      "/portfolio/CF MONTREAL VS LOS ANGELES FC/e4ba531d-8e4e-41cf-81a0-451b8d748b6d_rw_1920.jpg",
      "/portfolio/CF MONTREAL VS LOS ANGELES FC/e845afae-4e68-4ffa-a13e-098b68dceb0d_rw_600.jpg",
      "/portfolio/CF MONTREAL VS LOS ANGELES FC/ea851143-bbc7-4a20-a2fb-2e3d66407f14_rw_1200.jpg",
      "/portfolio/CF MONTREAL VS LOS ANGELES FC/fccbea67-a2d3-4d45-a0aa-326cdf3425c9_rw_1920.jpg"
    ],
    "credits": { "client": "CF Montréal", "role": "Photographer" },
    "theme": { "accent": "#D6AF68" }
  },
  {
    "slug": "media-day-soccer-cvm",
    "title": "Media Day — Soccer CVM",
    "date": "2025-01-20",
    "location": "Montreal, Canada",
    "services": ["Photography", "Graphic Design"],
    "summary": "Studio lighting, controlled gradients, and graphic overlays for a consistent club media kit.",
    "hero": "/portfolio/MEDIA DAY SOCCER CVM/c682f22f-b0bf-4be1-8db6-87370104d86e_rw_1920.jpg",
    "gallery": [
      "/portfolio/MEDIA DAY SOCCER CVM/c682f22f-b0bf-4be1-8db6-87370104d86e_rw_1920.jpg",
      "/portfolio/MEDIA DAY SOCCER CVM/06fcfb03-1146-4ee6-a2c8-c2accc31922e_rw_1920.jpg",
      "/portfolio/MEDIA DAY SOCCER CVM/1f2c1248-89b9-4f0b-9081-ff00d8f4088e_rw_1200.jpg",
      "/portfolio/MEDIA DAY SOCCER CVM/0f4c9cfc-0387-45a0-b0ec-f33cc907592e_rw_600.jpg",
      "/portfolio/MEDIA DAY SOCCER CVM/2ff04bbe-ffb6-4632-b6cf-24976fa7d874_rw_1200.jpg",
      "/portfolio/MEDIA DAY SOCCER CVM/3ac36bda-014b-4895-a39a-2037100eb572_rw_1200.jpg",
      "/portfolio/MEDIA DAY SOCCER CVM/5ea33393-1ec9-457f-8614-4a9626094bdc_rw_1200.jpg",
      "/portfolio/MEDIA DAY SOCCER CVM/603147eb-6e85-4512-91f1-7b1793ba12e2_rw_1200.jpg",
      "/portfolio/MEDIA DAY SOCCER CVM/8ef0d326-fe5a-417e-a5d3-a295734a3d21_rw_1200.jpg",
      "/portfolio/MEDIA DAY SOCCER CVM/a2d6b700-d0bc-499d-9a96-3d550023dc3b_rw_1200.jpg",
      "/portfolio/MEDIA DAY SOCCER CVM/b576e117-fc9f-4a76-bd3c-fbbb26a8d42f_rw_600.jpg",
      "/portfolio/MEDIA DAY SOCCER CVM/b8e48d11-462c-4723-80b8-857fdc7fe666_rw_600.jpg",
      "/portfolio/MEDIA DAY SOCCER CVM/ba7358bd-9e7c-4025-b3bf-e1ed67f51660_rw_1200.jpg",
      "/portfolio/MEDIA DAY SOCCER CVM/ce453a44-c246-41f9-a989-a2832535b264_rw_600.jpg",
      "/portfolio/MEDIA DAY SOCCER CVM/f7692f3d-0271-4978-b0ab-a907d83266b2_rw_1200.jpg"
    ],
    "credits": { "client": "CVM", "role": "Photographer/Designer" },
    "theme": { "accent": "#1FA4FF" }
  },
  {
    "slug": "kerchak-king-fali-mtl-2025",
    "title": "KERCHAK × KING FALI – Montreal Concert",
    "date": "2025-03-12",
    "location": "Montreal, Canada",
    "services": ["Photography"],
    "summary": "High‑ISO live energy and crowd texture with neon highlights; artist close‑ups and motion blur framing.",
    "hero": "/portfolio/KERCHAK X KING FALI/03cfe317-58b8-42fb-a945-46f916da656c_rw_1920.jpg",
    "gallery": [
      "/portfolio/KERCHAK X KING FALI/03cfe317-58b8-42fb-a945-46f916da656c_rw_1920.jpg",
      "/portfolio/KERCHAK X KING FALI/227dec61-b9ec-4f25-9bd5-e4aa36148853_rw_1920.jpg",
      "/portfolio/KERCHAK X KING FALI/24dcf275-4188-4005-a61d-1dc442ba750b_rw_1920.jpg",
      "/portfolio/KERCHAK X KING FALI/2f522622-43e1-4e12-a5eb-0871391b97d2_rw_1920.jpg",
      "/portfolio/KERCHAK X KING FALI/377a9af3-a9dd-4388-968b-9a8002e59ced_rw_1920.jpg",
      "/portfolio/KERCHAK X KING FALI/42455d8c-0640-4715-91f5-e8d23ee1f9c2_rw_600.jpg",
      "/portfolio/KERCHAK X KING FALI/5962279d-6b1f-4a29-8ebc-2245c5ac25dc_rw_1920.jpg",
      "/portfolio/KERCHAK X KING FALI/62c1843a-a7af-431e-80a3-d67b3865d197_rw_1200.jpg",
      "/portfolio/KERCHAK X KING FALI/7a73954c-dada-4a3b-9023-35cfb1953795_rw_1920.jpg",
      "/portfolio/KERCHAK X KING FALI/82d6e43c-5724-4cd6-923c-1a3ad9730aa5_rw_1200.jpg",
      "/portfolio/KERCHAK X KING FALI/926e2fa7-e8bd-4c03-aaa3-7142e6729a2b_rw_1920.jpg",
      "/portfolio/KERCHAK X KING FALI/93707094-ffc3-4e7f-af9e-a14f5e758510_rw_1200.jpg",
      "/portfolio/KERCHAK X KING FALI/99a11156-ea72-480f-b290-3ea7dfa62e0d_rw_1200.jpg",
      "/portfolio/KERCHAK X KING FALI/9ca3598c-dcd7-4529-bec1-7949738095f7_rw_1200.jpg",
      "/portfolio/KERCHAK X KING FALI/c176ada8-53f0-4988-9109-955cbe515bda_rw_600.jpg",
      "/portfolio/KERCHAK X KING FALI/c95d2526-8bf6-4f22-a7b1-ec0b3b8bacfa_rw_1920.jpg",
      "/portfolio/KERCHAK X KING FALI/d9565db8-543f-4762-bb9b-d101a49dcea0_rw_1200.jpg",
      "/portfolio/KERCHAK X KING FALI/fced3f0f-5504-4246-8338-2cc6c3b97260_rw_1920.jpg",
      "/portfolio/KERCHAK X KING FALI/ffa45c10-2667-4524-b7eb-0d503d690637_rw_1920.jpg"
    ],
    "credits": { "client": "Concert promoters", "role": "Photographer" },
    "theme": { "accent": "#1FA4FF" }
  },
  {
    "slug": "camp-retour-a-lorigine-2025",
    "title": "Retour à l'Origine — Youth Camp",
    "date": "2025-07-22",
    "location": "Montreal, Canada",
    "services": ["Photography"],
    "summary": "Outdoor action and human moments for Benjamin St‑Juste's camp; warmth, grit, and community.",
    "hero": "/portfolio/CAMP RETOUR À L'ORIGINE/2dda9cc1-d428-4c0a-b131-b028190b2ac0_rw_1920.jpg",
    "gallery": [
      "/portfolio/CAMP RETOUR À L'ORIGINE/2dda9cc1-d428-4c0a-b131-b028190b2ac0_rw_1920.jpg",
      "/portfolio/CAMP RETOUR À L'ORIGINE/50e2c163-d95b-46ea-895b-a0bd538c8e6a_rw_1920.jpg",
      "/portfolio/CAMP RETOUR À L'ORIGINE/a1782edd-af89-4a5b-af39-f37b104fc9a7_rw_1920.jpg",
      "/portfolio/CAMP RETOUR À L'ORIGINE/04de5711-70ff-495f-816d-9248e2d4ebe7_rw_600.jpg",
      "/portfolio/CAMP RETOUR À L'ORIGINE/1417c07d-1095-4328-b056-6aa605933180_rw_1200.jpg",
      "/portfolio/CAMP RETOUR À L'ORIGINE/268788ad-c507-4098-8c49-709b7d1b9dda_rw_600.jpg",
      "/portfolio/CAMP RETOUR À L'ORIGINE/28f42397-5f6e-498c-b809-017c9fc1be86_rw_1200.jpg",
      "/portfolio/CAMP RETOUR À L'ORIGINE/7a0ff386-d1a0-4d46-89a5-fbc3ef21be05_rw_1200.jpg",
      "/portfolio/CAMP RETOUR À L'ORIGINE/d9d6fa4e-33c7-4994-ae3a-780237f2c24e_rw_600.jpg",
      "/portfolio/CAMP RETOUR À L'ORIGINE/ddb502dd-31a9-4491-83d6-f7e740721525_rw_1200.jpg",
      "/portfolio/CAMP RETOUR À L'ORIGINE/ddbf655d-6279-4f88-bca7-0e2bb9cfc7f1_rw_1920.jpg",
      "/portfolio/CAMP RETOUR À L'ORIGINE/e2037f05-535d-43cc-a0e2-5165a655c981_rw_600.jpg",
      "/portfolio/CAMP RETOUR À L'ORIGINE/ec647edd-4104-4868-b843-5ebfa74c4e43_rw_1920.jpg"
    ],
    "credits": { "client": "Benjamin St‑Juste", "role": "Photographer" },
    "theme": { "accent": "#D6AF68" }
  },
  {
    "slug": "graphic-design-portfolio",
    "title": "Graphic Design Portfolio",
    "date": "2024-12-01",
    "location": "Montreal, Canada",
    "services": ["Graphic Design"],
    "summary": "Elite posters, social media creatives, and visual identity work showcasing modern design aesthetics and brand storytelling.",
    "hero": "/portfolio/graphic/543080387_18090307126763463_2139603993202608873_n.jpg",
    "gallery": [
      "/portfolio/graphic/543080387_18090307126763463_2139603993202608873_n.jpg",
      "/portfolio/graphic/502380101_17866849824402744_1083863144769380771_n.jpg",
      "/portfolio/graphic/543659216_17877593289402744_6452087961580205286_n.jpg",
      "/portfolio/graphic/543763784_17877576879402744_7358838565830500231_n.jpg"
    ],
    "credits": { "client": "Various", "role": "Graphic Designer" },
    "theme": { "accent": "#1FA4FF" }
  }
];

export function getSite(){ return siteData; }
export function getServices(){ return servicesData; }
export function getProjects(): Project[]{
  return projectsData.sort((a,b)=> (b.date||'').localeCompare(a.date||''));
}
export function getProject(slug:string){
  return projectsData.find(p => p.slug === slug) || projectsData[0];
}
