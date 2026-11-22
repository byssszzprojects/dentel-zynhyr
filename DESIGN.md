---
version: alpha
name: Hellotend
description: "Light interface measured from hellotend.com: Nantes type with Founders Grotesk, light lime accents, tonal surfaces and 50px corners."
colors:
  background: "#FFFFFF"
  surface: "#FFFFFF"
  on-surface: "#6C675C"
  on-background: "#6C675C"
  on-surface-variant: "#698680"
  surface-container-low: "#F9F9F6"
  surface-container: "#F4F2EF"
  surface-container-high: "#EAF4EB"
  primary: "#E7FB7E"
  on-primary: "#000000"
  secondary: "#0178D1"
  tertiary: "#BC8452"
typography:
  headline-display:
    fontFamily: Nantes
    fontSize: 63px
    fontWeight: 700
    lineHeight: 1.19
  headline-lg:
    fontFamily: Nantes
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.29
  headline-md:
    fontFamily: Nantes
    fontSize: 38px
    fontWeight: 700
    lineHeight: 1.29
  headline-sm:
    fontFamily: Founders Grotesk
    fontSize: 30px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0.006em
  title-lg:
    fontFamily: Founders Grotesk
    fontSize: 26px
    fontWeight: 400
    lineHeight: 1.29
  body-md:
    fontFamily: Founders Grotesk
    fontSize: 14px
    fontWeight: 300
    lineHeight: 1.45
    letterSpacing: 0.012em
  body-lg:
    fontFamily: Founders Grotesk
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0.01em
  body-sm:
    fontFamily: Founders Grotesk
    fontSize: 11px
    fontWeight: 400
    letterSpacing: 0.015em
  label-md:
    fontFamily: Founders Grotesk
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.81
    letterSpacing: 0.011em
  label-sm:
    fontFamily: Founders Grotesk
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.1em
  headline-display-mobile:
    fontFamily: Nantes
    fontSize: 39px
    fontWeight: 700
    lineHeight: 1.19
  headline-lg-mobile:
    fontFamily: Founders Grotesk
    fontSize: 26px
    fontWeight: 400
    lineHeight: 1.29
  headline-sm-mobile:
    fontFamily: Founders Grotesk
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0.009em
rounded:
  sm: 25px
  md: 50px
  full: 9999px
spacing:
  xs: 2px
  sm: 5px
  md: 12px
  lg: 20px
  xl: 40px
  gutter: 10px
components:
  button-outline:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: 5px 15px 5px 52px
    height: 52px
  button-ghost:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-surface}"
    typography: "{typography.headline-sm}"
    rounded: "{rounded.sm}"
    padding: 0px 20px 5px 20px
    height: 90px
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.background}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.md}"
    padding: 12px 30px
    height: 47px
  input-field:
    backgroundColor: "{colors.background}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 12px 140px 14px 40px
  link:
    textColor: "{colors.background}"
---

# Hellotend Design System

## Overview

Hellotend describes itself as: “Enjoy easy booking, modern, soothing studios, and a team of top-rated dentists at Tend Dental. Schedule your first visit today!” The interface is light, built on **White (#FFFFFF)** with **Warm Slate (#6C675C)** text, and **Light Lime (#E7FB7E)** as the main accent.

Type is set in **Nantes** and **Founders Grotesk**. Headlines run large; body text is 14px. Depth comes from soft drop shadows. Corners are mostly 50px.

Measured from [hellotend.com](https://www.hellotend.com/site/home) on November 12, 2026 at 1440×900 and 390×844 from 336 rendered elements. Values are computed styles from the live page, not the original source files.

## Colors

The palette has 10 roles.

- **White (#FFFFFF):** Page background, seen 5 times. Token `background`, CSS `--neutral-100`.
- **Warm Slate (#6C675C):** Primary text and headings, seen 113 times. Token `on-surface`, CSS `--secondary-400`.
- **Teal (#698680):** Secondary text, seen 29 times. Token `on-surface-variant`.
- **Snow (#F9F9F6):** Raised areas one step from the page, seen 8 times. Token `surface-container-low`.
- **Mist (#F4F2EF):** Cards and panels, seen 2 times. Token `surface-container`, CSS `--neutral-300`.
- **Mist (#EAF4EB):** Hover and pressed fills, seen 19 times. Token `surface-container-high`.
- **Light Lime (#E7FB7E):** Brand color in the header, seen 35 times. Token `primary`, CSS `--accent2-400`.
- **Near Black (#000000):** Text and icons on primary. Token `on-primary`.
- **Blue (#0178D1):** Secondary buttons, seen 5 times. Token `secondary`.
- **Orange (#BC8452):** Accent in text, fills and borders, seen 19 times. Token `tertiary`.

## Typography

**Nantes** and **Founders Grotesk** share the interface. Fallback stack: `Nantes, serif`. Other loaded fonts: Roboto, FontAwesome.

- **headline-display:** Nantes 63px at weight 700, line height 1.19 (39px on mobile). Page title (h1).
- **headline-lg:** Nantes 48px at weight 700, line height 1.29 (26px on mobile). Section headings (h2).
- **headline-md:** Nantes 38px at weight 700, line height 1.29. Sub-section headings.
- **headline-sm:** Founders Grotesk 30px at weight 400, line height 1.43, tracking 0.006em (18px on mobile). Card and feature titles.
- **title-lg:** Founders Grotesk 26px at weight 400, line height 1.29. Small titles.
- **body-md:** Founders Grotesk 14px at weight 300, line height 1.45, tracking 0.012em. Body text.
- **body-lg:** Founders Grotesk 17px at weight 400, line height 1.45, tracking 0.01em. Lead paragraphs.
- **body-sm:** Founders Grotesk 11px at weight 400, tracking 0.015em. Secondary and small text.
- **label-md:** Founders Grotesk 16px at weight 500, line height 1.81, tracking 0.011em. Buttons, navigation and labels.
- **label-sm:** Founders Grotesk 15px at weight 500, line height 1.4, tracking 0.1em. Small labels and badges.

## Layout

Spacing does not follow a strict grid: 31% of measured values are multiples of 4px, so match the measured steps rather than rounding to a grid.

- **Scale:** xs 2px, sm 5px, md 12px, lg 20px, xl 40px.
- **Gaps:** 10px is the most common gap in flex and grid layouts.
- **Breakpoints:** 500px, 1150px.

## Elevation & Depth

Raised elements use soft drop shadows. The most used recipes:

- `rgba(0, 0, 0, 0.3) 0px 1px 4px -1px`

## Shapes

Most elements use 50px corners. Measured radii, most used first:

- **md (50px):** 84 elements.
- **sm (25px):** 76 elements.
- **full (9999px):** 20 elements.

## Components

Measured from the rendered page. Token values reference the tokens above.

- **button-outline (“Convenient locations”):** #F9F9F6 fill, #6C675C text, 20px/400, 50px radius, padding 5px 15px 5px 52px.
- **button-ghost (“Dental Exams”):** #EAF4EB fill, #6C675C text, 30px/400, 25px radius, padding 0px 20px 5px 20px.
- **button-secondary (“BOOK NOW”):** #0178D1 fill, #FFFFFF text, 15px/600, 50px radius, padding 12px 30px.
- **input-field (“Search for Location”):** #FFFFFF fill, #6C675C text, 16px/500, 50px radius, padding 12px 140px 14px 40px.
- **link:** transparent fill, #FFFFFF text, padding 0px.

## Do's and Don'ts

- Do use #FFFFFF for the page and lift surfaces in small steps: #F9F9F6, #F4F2EF, #EAF4EB.
- Do keep text in 2 levels: #6C675C, #698680.
- Do use #E7FB7E as the brand accent: header, logo and key highlights.
- Do reuse the measured spacing steps (5px, 12px, 20px).
- Do use 50px corners on most elements; larger surfaces also use 25px.
- Don't use #698680 for body text; it reaches 3.95:1 on #FFFFFF. Keep it for large text or metadata.
- Don't introduce new font families beyond Nantes and Founders Grotesk.
- Don't use #E7FB7E for large backgrounds or body text.
- Don't make interface transitions slower than 0.3s.

## Motion

Interface transitions are quick: 0.2s, 0.3s.

- **Easing:** `ease-out`, `ease`.
- **Reduced motion:** the page responds to `prefers-reduced-motion`.

Generated by [Sitepeel](https://sitepeel.dev/design-md/hellotend.com/), the free DESIGN.md generator (engine 2026.10.29+8c0d12c54897).
