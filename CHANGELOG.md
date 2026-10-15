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

## 2026-10-14 — English digits everywhere
- Removed the Arabic-Indic `num()` helper. All numbers now use English digits (22, 50, $666) in both languages, including digits inside the Arabic copy in `src/i18n/content.ts`. The Arabic "اليوم" label on schedule days is kept.

## 2026-10-15 — Client CFDP logo
- Replaced the iba-style mark with the client's CFDP logo: navy uppercase "CFDP" and the "DIGITALIZE. CERTIFY. LEAD." tagline. It is recreated as SVG in `public/brand/` in four versions: `cfdp-mark` (navy) and `cfdp-mark-white`, plus `cfdp-logo` and `cfdp-logo-white` with the tagline. The tagline is a `textLength`-locked `<text>` element, not outlines.
- The header, hero card and favicon use the navy mark. The footer uses the white logo with the tagline.
- The hero eyebrow slogan changed from the academy's "Learn. Train. Work." to "Digitalize. Certify. Lead." / "رقمنة. اعتماد. قيادة.".
