# Changelog

## 2026-10-14 — CFDP rebrand
- Rebranded the program from "ICFDP / Itqan Business Academy" to **CFDP – Certified Factory Digitalization Professional**. The brand is the same string in Arabic and English (`site.brand` / `site.brandFull` in `src/i18n/content.ts`).
- Removed every IBA/Itqan mention: copy (hero, about, vision, instructor bios), the IBA seal in accreditations, the iba logo, the certificate image, and the `@itqan.live` emails.
- Added the CFDP logo set in `public/brand/` (teal mark, white mark, full lockup). It is used in the header, footer and favicon.
- No domain for now: removed `site` from `astro.config.mjs`, plus canonical/hreflang URLs.
- The contact form now opens WhatsApp (Jordan number) with the request prefilled, instead of email.
