# SEO Strategy

## Goals
- Improve organic visibility in the Ghana real estate market
- Generate qualified leads and consultation bookings
- Build search authority ahead of the Phase 2 listings launch

---

## Market Research (July 2026)

### High-volume search queries in Ghana
- "How to buy a house in Ghana" — the #1 most-Googled property query in Ghana
- "Properties for sale in Ghana" / "Houses for sale in Accra"
- "Ghana property prices"
- "Best areas to live in Ghana / Accra"
- "How to sell a property in Ghana"

### Location demand signals
- Accra accounts for ~65% of national property transactions; searches up 38% month-on-month (June 2026)
- **East Legon is the single most-searched neighbourhood in Ghana**
- Other high-demand areas: Tema, Spintex, Cantonments, Airport Residential, Ridge, Adenta, East Legon Hills
- Rentals lead search demand: 47.5% "for rent" vs 29.7% "for sale"

### Competitive landscape
- **Listing portals (avoid head-on competition):** Meqasa (40,000+ listings), Ghana Property Centre, Ownkey, Prophunt, Loop Ghana. These dominate "houses for sale in Accra" style keywords.
- **Service keyword competitors (weaker, winnable):** Propy Mould, Vaal, Rosewood target property management and diaspora keywords, but the field is thin.

### Primary keyword targets (by winnability)
1. **Service keywords:** "property management company Accra", "property management services Ghana", "real estate brokerage Accra", "real estate asset management Ghana", "tenant screening Accra", "rent collection services Ghana"
2. **Diaspora keywords (biggest opportunity):** "buy property in Ghana from abroad", "diaspora property management Accra", "remote property management Ghana", "hands-off property management". Ghana receives ~$4.6B/year in diaspora remittances; diaspora buyers are the most active segment in East Legon. Content converts on trust: legal verification, transparent reporting, remote oversight.
3. **Informational keywords:** "how to buy a house in Ghana", "property manager cost Ghana" (market rate: 8–15% of monthly rent), neighbourhood guides.

---

## Implemented (Phase 1 site)

### Technical SEO
- [x] Unique, location-keyworded title tags on all 9 pages (pattern: `{Service} in Accra, Ghana | RECTAX`)
- [x] Unique meta descriptions on all pages
- [x] Canonical URLs (base domain: `https://rectax.org/`)
- [x] Open Graph + Twitter card tags on all pages (`og:locale: en_GH`)
- [x] Social share image (1200x630 PNG) via `og:image` + `twitter:card: summary_large_image` on all pages
- [x] Favicon (`brand assets/rectax favicon.svg`) on all pages
- [x] `robots.txt` with sitemap reference
- [x] `sitemap.xml` covering all 9 pages

### Schema markup (JSON-LD)
- [x] `RealEstateAgent` on homepage and contact page — full NAP (No. 28 Anum Tessa Ave., Accra / +233558582333 / info@rectax.org), geo coordinates, `areaServed` neighbourhoods
- [x] `Service` schema on brokerage, property management, and asset management pages
- [x] `FAQPage` schema on resources page (mirrors on-page FAQs)

---

## To Do

### Local SEO (highest impact, do first)
- [ ] Create and verify Google Business Profile — category "Real Estate Agency"; NAP must exactly match the website
- [ ] Post weekly to GBP (market updates, tips); systematically request client reviews
- [ ] Build local citations (Ghana business directories) with consistent NAP
- [ ] Replace placeholder social links in footer with real profiles, then add them to schema `sameAs`

### Technical follow-ups
- [ ] Submit sitemap in Google Search Console
- [ ] Self-host hero images (currently Unsplash hotlinks) and add descriptive, keyword-relevant alt text

### Content roadmap (priority order)
1. Diaspora guides: "How to buy property in Ghana from abroad", "Managing your Accra property while living overseas"
2. Definitive guide: "How to buy a house in Ghana" (targets the #1 national query)
3. Neighbourhood pages: East Legon first, then Cantonments, Airport Residential, Spintex, Tema — foundation for Phase 2 listings SEO
4. Service-adjacent posts: "What does a property manager cost in Ghana?", "Questions to ask before hiring a property management company"
5. Turn the three placeholder insight cards on resources.html into real articles

### Ongoing
- Keep sitemap `lastmod` dates updated when pages change
- Add `RealEstateListing` schema when Phase 2 property listings launch
- Monitor rankings for target keywords; expand neighbourhood coverage based on demand data
