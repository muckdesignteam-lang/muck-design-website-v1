# MUCK Design Website V8.7.5 — Project System Update

This pack updates the Projects system so future project additions inherit consistent content and styling.

## Locked changes

1. Commercial category subtitle
   - Always: `Interior, Built-In and Renovation`
   - Removed the project-specific `Dental Clinic · Chachoengsao` subtitle from the Projects overview category card.

2. Shared Projects CTA
   - All Projects overview, category, and project-detail pages now use one shared `ProjectCTA` component.
   - Locked Thai copy:
     `ไม่ว่าจะเป็นบ้านใหม่ งานรีโนเวต หรือพื้นที่สำหรับธุรกิจ เราพร้อมให้คำปรึกษา ดูแล และประสานงานครบทุกขั้นตอน เพื่อส่งมอบพื้นที่ที่ตอบโจทย์ทั้งฟังก์ชันและไลฟ์สไตล์ของคุณ`
   - Future CTA copy changes can be made once in `app/projects/project-system.tsx`.

3. Finished Spaces image system
   - Fixed 4:3 frame for project-detail gallery images.
   - `object-fit: cover` prevents distortion and keeps all gallery frames aligned.
   - Default image focus is centered.
   - Optional future focus classes are available: `focusTop`, `focusBottom`, `focusLeft`, `focusRight`.

4. Thai typography scale
   - Reduced Thai project/category titles and detail-page hero titles.
   - Reduced Thai body/meta/CTA visual scale slightly for better balance with English.
   - Applied globally through language-scoped CSS rather than page-by-page overrides.

## Files added/changed

- `app/projects/project-system.tsx` — shared category copy + shared CTA component.
- `app/projects/page.tsx`
- `app/projects/new-home/page.tsx`
- `app/projects/home-renovation/page.tsx`
- `app/projects/commercial/page.tsx`
- Current project-detail pages under `app/projects/*/page.tsx`
- `app/globals.css`

## Deployment

Copy the contents of the inner project folder into the existing GitHub repository, replacing matching files. Commit and push; Vercel will redeploy automatically.
