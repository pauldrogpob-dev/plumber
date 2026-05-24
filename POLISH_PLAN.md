# Production Polish & Optimization Plan (POLISH_PLAN.md)

This plan details the step-by-step checklist to turn the WJ McNabb Plumbing website into a high-performance, legally compliant, fully optimized production-ready site, with all traces of AI-generation removed and professional credits added.

---

## Production Polish Checklist

### Phase 1: AI Clean-Up & Credits
- [x] **Step 1: Clean Up README.md & Delete Bolt Configs**
  - Remove all Bolt.new open-in buttons, links, and badges from `README.md`.
  - Delete the `.bolt` directory completely from the project structure.
  - *Verification:* Verify `.bolt` is gone and `README.md` is clean and standard.

- [x] **Step 2: Add VINNOVIA Footer Credit Line**
  - Add the credit line at the bottom of the footer: `Website & Digital Marketing by [VINNOVIA]` linking to `https://vinnovia.com/`.
  - *Verification:* Confirm the link is present in the footer, opens in a new tab, and is styled elegantly.

---

### Phase 2: SEO & Meta Tag Optimization
- [ ] **Step 3: Update Main Title and Meta Description**
  - Update the `<title>` in `index.html` to target the updated `50+ Years` and local search.
  - Add a high-converting, professional `<meta name="description">` that mentions WJ McNabb's services, local focus, and 24/7 service.
  - *Verification:* Check page source to verify `<title>` and `<meta description>` tags.

- [ ] **Step 4: Complete Open Graph & Twitter Social Metadata**
  - Remove all references to `bolt.new` in `index.html` metadata.
  - Create and register a professional og-image (social-share preview image) saved as `public/og-image.png`.
  - Point all Open Graph and Twitter tags in `index.html` to reference `og-image.png` and updated page titles.
  - *Verification:* Check `<head>` to confirm the tags are fully updated and pointing to the local assets.

- [ ] **Step 5: Semantic HTML & Accessibility Validation**
  - Verify every image tag (especially `/image.png` in the "Why Choose Us" section) has a highly descriptive, accessible `alt` text attribute.
  - Validate the heading hierarchy in `App.tsx` (exactly one `<h1>` in Hero, sequential `<h2>` and `<h3>` tags for subsections).
  - *Verification:* Inspect headings structure and image alt attributes to verify WCAG and SEO alignment.

---

### Phase 3: Performance & Optimization
- [ ] **Step 6: Preconnect & Preload Fonts**
  - Add standard preconnect link headers for Google Fonts API and Gstatic in `index.html` to eliminate font-blocking render delays.
  - *Verification:* Verify fonts load without layout shifts or render blocking in the browser.

- [ ] **Step 7: Optimize Images & Lazy Loading**
  - Implement modern image optimizations (add `loading="lazy"` and `decoding="async"` attributes to standard img tags).
  - List instructions for compressing `/image.png` to a highly compressed web-format.
  - *Verification:* Verify images load lazily as the user scrolls, with zero impact on the Initial Contentful Paint.

---

### Phase 4: Legal & Compliance Features
- [ ] **Step 8: Implement Cookie Consent Banner**
  - Build a sleek, modern, non-intrusive React cookie-consent banner at the bottom of the page.
  - Integrate `localStorage` to persist the user's preference after acceptance.
  - *Verification:* Verify the banner animates in smoothly, and disappears permanently once accepted (even upon page refreshes).

- [ ] **Step 9: Add Legal Notice & Privacy Policy Modals**
  - Create professional Legal Notice and Privacy Policy modals (or toggleable sheets) accessible via elegant footer links.
  - Pre-populate these documents with compliant, sensible default content (addressing data handling, contact forms, cookies, and local business information).
  - *Verification:* Click footer links to ensure the legal modals open smoothly, are readable, and close without breaking the main viewport scroll.

---

### Phase 5: Responsiveness & Polish
- [ ] **Step 10: Responsive Layout Verification & Contrast Audit**
  - Audit margins, paddings, and column wraps on mobile, tablet, and desktop views to ensure elements do not overflow or clip.
  - Run contrast checks on all updated sections to guarantee they remain readable and WCAG-compliant.
  - *Verification:* Test on responsive simulator to verify perfect alignment on all viewports.
