# UiXSHUVO — Real Estate Platform Design System

> Reverse-engineered from reference landing page. Documented for direct use by designers and frontend engineers building a modern property-search website.

---

## 1. Design Overview

**Design Style Classification:** Modern Editorial / Warm-Minimal SaaS — a real-estate marketplace UI that borrows editorial typography scale from magazine layouts and combines it with SaaS-style component patterns (pill tabs, feature cards, filter bars).

**Brand Personality**
- **Professionalism level:** High — clean grid, restrained palette, generous whitespace signal a trustworthy, established platform rather than a scrappy startup.
- **Emotional tone:** Warm, aspirational, calm. The beige/cream backdrop and wood-toned hero photography evoke "home" rather than "transaction."
- **User perception:** Premium but approachable — not luxury-exclusive, more "curated and reliable."
- **Target audience impression:** Home buyers, sellers, and agents aged 28–55, digitally comfortable, valuing craft and clarity over flashy tech aesthetics.

**Design Philosophy**
"Editorial confidence meets functional real-estate search — oversized, expressive typography establishes emotional trust, while compact, orange-accented functional components (search, filters, cards) keep the experience task-efficient." The design alternates bold/black and light/gray type weights within the same headline to create rhythm and hierarchy without needing multiple typefaces.

---

## 2. Color System Extraction

### Primary Colors
| Name | HEX | RGB | Usage |
|---|---|---|---|
| Ink Black | `#1A1A1A` | 26,26,26 | Primary text, headlines, bold UI elements, dark CTA button |
| Warm Sand (Brand Background) | `#E7E4D9` | 231,228,217 | Hero background, page section backgrounds, footer band |

### Secondary / Accent Colors
| Name | HEX | RGB | Usage |
|---|---|---|---|
| Signal Orange | `#F0932B` | 240,147,43 | Primary CTA buttons, icon badges, active pill tab, links/arrows |
| Orange Hover | `#D97F1C` | 217,127,28 | Hover/active state of orange elements |

### Neutral Colors
| Name | HEX | RGB | Usage |
|---|---|---|---|
| Surface White | `#FFFFFF` | 255,255,255 | Cards, input fields, nav bar |
| Muted Gray Text | `#8A8A85` | 138,138,133 | Secondary headline words, subtext, captions |
| Border Gray | `#DDDAD0` | 221,218,208 | Card borders, dividers, input outlines |
| Body Text Gray | `#5C5C58` | 92,92,88 | Paragraph copy, descriptions |

### Semantic Colors
| Name | HEX | Usage |
|---|---|---|
| Success Green | `#2E9E5B` | Confirmations, "verified agent" badges |
| Warning Amber | `#E0A400` | Non-critical alerts |
| Error Red | `#D64545` | Form validation errors |
| Info Blue | `#3B82C4` | Informational tooltips/banners |

**Accessibility / Contrast**
- Ink Black (`#1A1A1A`) on Warm Sand (`#E7E4D9`) → contrast ratio ≈ 15:1 (AAA for all text sizes).
- Signal Orange on white → ≈ 3.1:1: acceptable for large text/icons (WCAG AA Large) but **not** for small body text; pair orange text with black or use orange only for icons/buttons with white label text.
- White text on Signal Orange button → ensure button uses `#1A1A1A` label or bump orange to a darker shade (`#D97F1C`) if using white text, to clear 4.5:1.
- Muted Gray (`#8A8A85`) on Warm Sand fails AA for body copy under 18px — restrict to captions ≥14px semi-bold or larger.

---

## 3. Typography System

**Font Family Recommendation**
- **Primary (Display/Headings):** "General Sans" or "Clash Display" — geometric grotesque with soft terminals, matches the rounded confident letterforms in the reference.
- **Secondary (Body/UI):** "Inter" or "Satoshi" — neutral, highly legible at small sizes.
- **Fallback:** `-apple-system, "Segoe UI", Helvetica Neue, Arial, sans-serif`

**Typography Scale**

| Level | Size (desktop) | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| Display / Hero H1 | 64px | 700 (Bold) / 400 (Regular, alternating) | 1.05 | -1px |
| H1 | 48px | 700 | 1.1 | -0.5px |
| H2 | 36px | 600 | 1.2 | -0.25px |
| H3 | 24px | 600 | 1.3 | 0 |
| Body | 16px | 400 | 1.6 | 0 |
| Small / Caption | 13px | 500 | 1.4 | 0.2px |
| Button Text | 15px | 600 | 1 | 0 (sentence case, not uppercase) |

**Rationale:** The reference headline mixes bold-black and regular-gray words within one sentence ("Connecting you **to the**" / bold "home" light-gray "you love" bold) — replicate by applying `font-weight` and `color` token pairs per `<span>`, never by changing font family. Body and small text stay quiet in weight/gray to keep focus on imagery and headline.

---

## 4. Spacing & Layout System

**Spacing Scale (4px base unit)**
```
4px   – micro (icon-to-label gaps)
8px   – tight (chip padding)
12px  – compact (input internal padding)
16px  – default (card internal gaps)
24px  – comfortable (component gaps)
32px  – section sub-gaps
48px  – card padding (large cards)
64px  – section vertical padding (mobile)
96px  – section vertical padding (desktop)
```

**Layout Rules**
- Page margin (desktop): 80px left/right
- Page margin (tablet): 40px
- Page margin (mobile): 20px
- Section vertical spacing: 96px desktop / 64px tablet / 48px mobile
- Card padding: 24–32px
- Grid gap: 24px (desktop), 16px (mobile)
- Max content width: 1280px, centered
- Hero content column max-width: 640px (keeps headline from overstretching)

**Breakpoints**
| Device | Width |
|---|---|
| Desktop | ≥1200px |
| Tablet | 768–1199px |
| Mobile | ≤767px |

---

## 5. Grid System

- **Desktop:** 12-column grid, 80px margins, 24px gutter. Hero splits ~45/55 (text column / image column).
- **Tablet:** 8-column grid, 40px margins, 20px gutter. Hero image moves below or beside a narrowed text column.
- **Mobile:** 4-column grid, 20px margins, 16px gutter. All multi-column sections stack to single column.

**Alignment:** Left-aligned text blocks throughout (no center-aligned headlines), consistent with an editorial, confident tone. Feature cards align to a right-hand column with a vertical divider rule separating the stats block from the feature-card list.

---

## 6. Component Library

**Navigation**
- Logo top-left (icon + wordmark, black text, orange icon mark)
- Primary menu center-left: text links, regular weight, black, 16px, 32px gap between items
- Secondary/utility menu top-right: "Add Property," "About Us," "Join" — same style, right-aligned
- Sticky on scroll, white/transparent background, 80px height

**Buttons**
- **Primary:** Solid `#1A1A1A` or Signal Orange background, white text, 48px height, 24px horizontal padding, fully rounded ends on pill-style search buttons (circular icon-only variant 48x48px, `border-radius: 50%`)
- **Secondary:** White background, 1px `#DDDAD0` border, black text, same height/radius family

**Segmented / Pill Tabs** (Buy / Rent / Sell)
- Height 40px, radius `9999px` (full pill), inactive = transparent text-only, active = white background with subtle shadow inside a gray pill track

**Cards**
- Border radius: 20–24px
- Shadow: soft, `0 8px 24px rgba(0,0,0,0.08)`
- Padding: 20–24px
- Content structure: eyebrow/title → description → price/meta row → action control (arrow buttons)
- Floating property card overlays the hero image bottom-right, breaking the image boundary — a signature layout motif

**Forms**
- Input height: 48–56px
- Radius: `9999px` (pill) for hero search, `12px` for standard forms/filter dropdowns
- Placeholder color: Muted Gray
- Label: 13px, semi-bold, above field
- Validation: red 1px border + 12px error caption below field

**Images**
- Hero image: large asymmetric shape with a cut/notched top-right corner (custom clip-path), aspect ratio ~4:5 to 1:1
- Card images: 16:9 or square, radius 16–20px
- Treatment: natural, warm-toned photography, no heavy filters, occasional soft gradient overlay for text legibility

**Sections**
- Hero (headline + search + image + floating stat card)
- Trust/Stats section (headline + stat numbers + avatar stack, paired with feature-card list)
- Feature cards with icon badge, title, description, arrow link
- CTA band (contrasting background shape with rounded "notch" corners) housing a multi-field search/filter bar
- Footer (implied — should continue same visual language: sand background, black text, orange accents)

---

## 7. Button Design System

**Primary Button**
- Normal: background `#1A1A1A`, text `#FFFFFF`, height 48px, padding 24px, radius `9999px`
- Hover: background lightens to `#333333`, cursor pointer, 150ms ease
- Active: scale `0.98`
- Disabled: background `#CFCFCF`, text `#FFFFFF`, no pointer events

**Secondary / Icon Button** (orange circular search icon)
- Normal: background Signal Orange, icon white, 48x48px, radius `50%`
- Hover: background `#D97F1C`, slight scale `1.03`
- Active: scale `0.97`
- Disabled: 40% opacity

**Typography:** 15px, weight 600, sentence case, icon (if present) left of label with 8px gap.

---

## 8. Iconography System

- **Style:** Outline icons, rounded joins/caps (not sharp), minimal detail — matches soft geometric brand mark.
- **Stroke thickness:** 1.5–2px
- **Corner style:** Rounded (2px radius on strokes)

**Sizes**
| Size | Dimension | Usage |
|---|---|---|
| Small | 16px | Inline with captions, chevrons |
| Medium | 20–24px | Nav icons, form icons |
| Large | 32–40px | Feature-card badge icons (on orange circular background) |

**Usage rule:** Icons inside colored badges always sit on a solid orange circle/rounded-square background with white icon fill/stroke; standalone icons stay black/gray outline only.

---

## 9. Border & Shadow System

**Border Radius**
| Token | Value | Usage |
|---|---|---|
| radius-sm | 8px | Small chips, tags |
| radius-md | 16px | Standard cards, inputs |
| radius-lg | 24px | Large cards, image containers |
| radius-pill | 9999px | Buttons, search bars, pill tabs |

**Shadow System**
| Token | Value | Usage |
|---|---|---|
| shadow-sm | `0 2px 6px rgba(0,0,0,0.05)` | Nav bar, subtle input focus |
| shadow-md | `0 8px 24px rgba(0,0,0,0.08)` | Standard content cards |
| shadow-lg | `0 16px 40px rgba(0,0,0,0.12)` | Floating overlay cards (e.g., property price card on hero image) |

---

## 10. Image & Media Style

- **Hero images:** Large-format, warm architectural/lifestyle photography; asymmetric container shape with one clipped corner (adds a distinctive silhouette rather than a plain rectangle).
- **Cards:** 16:9 or 1:1 crops, 16–20px radius, no heavy overlay unless text sits on top (then use a soft dark gradient 0–40% opacity bottom-up).
- **Gallery:** Uniform grid, 16px gaps, consistent aspect ratio, radius-md.
- **Background sections:** Flat warm sand or off-white shapes, not photographic, used to separate content bands and reset visual rhythm — corners of these bands use a "notch/cut" decorative shape echoing the hero image treatment.

---

## 11. Responsive Design Rules

**Desktop (≥1200px):** Full 12-col grid, side-by-side hero, 3-column feature/stat split, nav fully expanded.

**Tablet (768–1199px):** 8-col grid; hero text stacks above image or narrows to 60%; feature cards may go to 2-column; nav may collapse secondary links into a "More" menu.

**Mobile (≤767px):** 4-col grid, full stacking of all sections; hero image moves below headline and search; nav collapses to hamburger; feature cards become full-width stacked list; stat numbers wrap to 2-column grid; filter bar (Property/Location/Date/Price) stacks vertically or becomes a horizontally scrollable row.

**General scaling**
- Typography: Display 64px→40px, H1 48px→32px, H2 36px→26px on mobile.
- Spacing: section padding 96px→48px; card padding 24px→16px.
- Images: hero image height caps at ~50vh on mobile to preserve above-the-fold headline visibility.

---

## 12. UX Interaction Guidelines

- **Hover effects:** Buttons scale `1.02–1.03` with `200ms ease-out`; cards lift via shadow increase (`shadow-md` → `shadow-lg`) and `translateY(-4px)`.
- **Transitions:** All interactive state changes use `150–250ms ease` (no abrupt snaps).
- **Animations:** Subtle fade+slide-up (`opacity 0→1`, `translateY(16px→0)`) on scroll-into-view for section headlines and cards, staggered 80ms per item.
- **Loading states:** Skeleton blocks matching card radius/shape, sand-gray shimmer.
- **Scroll behavior:** Smooth scroll for in-page nav anchors; sticky nav bar with subtle shadow appearing after 40px scroll.
- **Micro-interactions:** Pill-tab switch (Buy/Rent/Sell) slides an active-state background between options over 200ms; arrow "next/prev" buttons on property card rotate/translate slightly on hover.

Example: *Button hover → "Scale 1.02 with 200ms ease transition."*

---

## 13. Design Tokens

```json
{
  "color": {
    "primary": "#1A1A1A",
    "background": "#E7E4D9",
    "surface": "#FFFFFF",
    "accent": "#F0932B",
    "accentHover": "#D97F1C",
    "textPrimary": "#1A1A1A",
    "textSecondary": "#5C5C58",
    "textMuted": "#8A8A85",
    "border": "#DDDAD0",
    "success": "#2E9E5B",
    "warning": "#E0A400",
    "error": "#D64545",
    "info": "#3B82C4"
  },
  "spacing": {
    "space-1": "4px",
    "space-2": "8px",
    "space-3": "12px",
    "space-4": "16px",
    "space-6": "24px",
    "space-8": "32px",
    "space-12": "48px",
    "space-16": "64px",
    "space-24": "96px"
  },
  "radius": {
    "radius-sm": "8px",
    "radius-md": "16px",
    "radius-lg": "24px",
    "radius-pill": "9999px"
  },
  "typography": {
    "display": { "size": "64px", "weight": 700, "lineHeight": 1.05 },
    "heading-xl": { "size": "48px", "weight": 700, "lineHeight": 1.1 },
    "heading-lg": { "size": "36px", "weight": 600, "lineHeight": 1.2 },
    "heading-md": { "size": "24px", "weight": 600, "lineHeight": 1.3 },
    "body": { "size": "16px", "weight": 400, "lineHeight": 1.6 },
    "caption": { "size": "13px", "weight": 500, "lineHeight": 1.4 }
  },
  "shadow": {
    "shadow-sm": "0 2px 6px rgba(0,0,0,0.05)",
    "shadow-md": "0 8px 24px rgba(0,0,0,0.08)",
    "shadow-lg": "0 16px 40px rgba(0,0,0,0.12)"
  }
}
```

---

## 14. Frontend Implementation Guide

**CSS Variables**
```css
:root {
  --color-primary: #1A1A1A;
  --color-background: #E7E4D9;
  --color-surface: #FFFFFF;
  --color-accent: #F0932B;
  --color-accent-hover: #D97F1C;
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #5C5C58;
  --color-text-muted: #8A8A85;
  --color-border: #DDDAD0;

  --font-heading: 'General Sans', -apple-system, sans-serif;
  --font-body: 'Inter', -apple-system, sans-serif;

  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-16: 64px;
  --space-24: 96px;

  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 9999px;

  --shadow-md: 0 8px 24px rgba(0,0,0,0.08);
  --shadow-lg: 0 16px 40px rgba(0,0,0,0.12);

  --transition-base: 200ms ease-out;
}
```

**Component Naming Convention:** BEM-style or utility-first — e.g., `.card`, `.card__title`, `.card--floating`; or Tailwind utility classes composed via a `Card`, `Button`, `PillTabs`, `SearchBar` component set.

**Folder Structure (recommended)**
```
/src
  /components
    /ui        → Button, Input, PillTabs, Card, Badge, IconBadge
    /sections  → Hero, TrustStats, FeatureList, CTASearchBand, Footer
    /layout    → Navbar, Container, Grid
  /styles
    tokens.css
    globals.css
  /assets
    /icons
    /images
```

**CSS Architecture:** Token-driven (CSS variables) + component-scoped styles (CSS Modules or Tailwind). Avoid hard-coded hex/px values in components — always reference tokens.

**Tailwind Config Extension (if applicable)**
```js
theme: {
  extend: {
    colors: {
      background: '#E7E4D9',
      accent: { DEFAULT: '#F0932B', hover: '#D97F1C' },
      ink: '#1A1A1A',
      muted: '#8A8A85',
    },
    borderRadius: {
      md: '16px', lg: '24px', pill: '9999px',
    },
    boxShadow: {
      card: '0 8px 24px rgba(0,0,0,0.08)',
      float: '0 16px 40px rgba(0,0,0,0.12)',
    },
    fontFamily: {
      heading: ['General Sans', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
  },
}
```

---

## 15. Final Design System Summary

- **Design System Name:** UiXSHUVO Real Estate UI Kit
- **Design Category:** Modern Editorial / Warm-Minimal SaaS
- **Core Principles:** Bold expressive typography + calm neutral palette + single vivid accent color + soft geometric shapes + generous whitespace
- **Visual Direction:** Warm, human, trustworthy — architecture-forward photography paired with confident black/gray editorial type
- **Recommended Website Type:** Real estate marketplaces, property listing platforms, agent directories, home-services SaaS landing pages
- **Implementation Priority:**
  1. Establish color & typography tokens first
  2. Build core components (Button, Input, Pill Tabs, Card) before sections
  3. Build Hero + CTA band (highest visual complexity: clipped-corner shapes, floating card)
  4. Ensure responsive stacking rules are tested at all three breakpoints
  5. Apply consistent radius/shadow scale everywhere — never introduce a one-off radius or shadow value outside the token set
