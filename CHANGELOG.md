# Changelog

## 2026-10-14 — CFDP rebrand
- Rebranded the program from "ICFDP / Itqan Business Academy" to **CFDP – Certified Factory Digitalization Professional**. The brand is the same string in Arabic and English (`site.brand` / `site.brandFull` in `src/i18n/content.ts`).
- Removed every IBA/Itqan mention: copy (hero, about, vision, instructor bios), the IBA seal in accreditations, the iba logo, the certificate image, and the `@itqan.live` emails.
- Added the CFDP logo set in `public/brand/` (teal mark, white mark, full lockup). It is used in the header, footer and favicon.
- No domain for now: removed `site` from `astro.config.mjs`, plus canonical/hreflang URLs.
- The contact form now opens WhatsApp (Jordan number) with the request prefilled, instead of email.

## 2026-10-14 — CFDP About copy and hero card redesign
- Rewrote About, Vision and Mission (AR/EN) around the CFDP program itself. The source is the brochure's program, "Why" and outputs pages; the academy wording is gone.
- The full name is now translated on the Arabic version: "المحترف المعتمد في رقمنة المصانع" (`site.brandFull` is `{ ar, en }`).
- Redesigned the home hero card: a white card with the CFDP mark and a "Professional certification" tag, a 2×2 stat grid aligned correctly in RTL and LTR, and tags for online plus both languages. The languages stat became "3 flexible tracks".
- Arabic pages now show Arabic-Indic digits (٢٢، ٥٠، $٦٦٦) via a new `num()` helper in `src/i18n/utils.ts`. It covers stats, numbered lists, schedule days, hours, participants and prices. Phone numbers are unchanged. The schedule day badge now says "اليوم" on Arabic pages.
