---
inclusion: always
---

# Salem Mukuri Portfolio — Design System

This document captures the visual language, component patterns, and layout conventions used across the portfolio. Reference this whenever building new pages or components.

---

## Brand Identity

- Owner: Salem Mukuri — Product Designer & Product Owner
- Tone: Clean, minimal, confident, slightly playful
- Feel: Editorial meets portfolio — lots of whitespace, strong typography, subtle interactions

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `primary` | `#000000` | Navbar background, CTA buttons, footer |
| `accent` | `#D6FD3A` | Highlight pills, underline gradients, phase badges, border accents |
| `link-hover` / `custom-primary` | `#7CA300` | Hover states on links, bullet dots, active nav, skill bars |
| `neutral` | `#F3F4F6` | Section backgrounds (alternating with white) |
| `text-primary` | `#333333` | All body and heading text |
| `text-secondary` | `#757575` | Subtitles, intro text, muted labels |
| `text-muted` | `#999999` | Captions, small labels |
| `white` | `#FFFFFF` | Card backgrounds, content sections |
| `black` | `#000000` | Footer, primary buttons |

Accent gradient used on title underlines: `linear-gradient(90deg, #D6FD3A, #7CA300)`

---

## Typography

Font family: **Proxima Nova** (fallback: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif)

### Type Scale

| Role | Size | Weight | Line Height | Letter Spacing | Color |
|---|---|---|---|---|---|
| Page Title (hero) | 96px → 48px (tablet) → 48px (mobile) | 700 | 1.2 | -0.02em | `#333333` |
| Hero Title (case study) | 48px → 36px (mobile) | 700 | 1.2 | -0.02em | `#333333` |
| Section Heading | 36px | 500 | 1.3 | 0.01em | `#333333` |
| Skills Heading | 48px | 300 | 1.2 | -0.02em | `#757575` |
| Intro / Subtitle | 24px → 20px (mobile) | 400 | 1.4 | 0.02em | `#757575` |
| Body Text | 18px | 300 | 1.6 | 0.06em | `#333333` |
| Nav / Link Text | 18px | 300 | 1.6 | 0.06em | `#333333` |
| Small Labels (metadata) | 13–14px | 400–500 | 1.5 | 0.05em | `#6B7280` |
| Phase / Tag Pills | 14px | 500 | — | — | black on `#D6FD3A` |

### Title Underline Effect
Headings in the hero section use an animated underline:
```css
.title:after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #D6FD3A, #7CA300);
  border-radius: 2px;
  transition: width 0.3s ease;
}
.title:hover:after { width: 60%; }
```

---

## Spacing & Layout

- Max content width: `max-w-6xl` (1152px), `max-w-5xl` for long-form reading sections
- Horizontal padding: `px-8 sm:px-12 lg:px-16`
- Section vertical padding: `py-20` (standard), `py-16` (tighter sections)
- Grid gap: `gap-16` (two-column layouts), `gap-8` (card grids)
- Card grid: `grid-cols-1 md:grid-cols-3 gap-8`
- Two-column content: `grid-cols-1 lg:grid-cols-2 gap-16 items-center`

---

## Section Backgrounds (Alternating Pattern)

Pages alternate between white and neutral gray to create visual rhythm:

```
bg-gray-50  →  bg-white  →  bg-gray-50  →  bg-white ...
```

Case study process sections use `bg-neutral` (`#F3F4F6`) as the container background with white cards inside.

---

## Components

### Navbar
- Background: `bg-primary` (black), fixed, full width, `z-50`
- Height: `h-20`
- Logo: image, max height `max-h-10 md:max-h-12`
- Links: `text-p hover:text-accent`, active link gets `text-accent`
- Behavior: hides on scroll down, reappears on scroll up (translate-y animation)
- Mobile: hamburger menu with slide-down drawer

### Footer
- Background: `bg-black text-white`, `py-12`
- Three columns: copyright | nav links | social icons
- Scroll-to-top button: half-circle rising from top center, hover lifts it
- Social icons hover to `text-accent`

### Phase / Section Badges
Used in case studies to label design process phases:
```jsx
<div className="bg-accent text-black px-4 py-2 rounded-full text-sm font-medium">
  DISCOVERY
</div>
<div className="flex-1 h-px bg-gray-300"></div>
```

### Bullet List Items
Green dot bullets used throughout for lists:
```jsx
<span className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" style={{ backgroundColor: '#7CA300' }} />
```

### Project Cards (Portfolio)
- Background: `bg-white rounded-lg overflow-hidden shadow-md`
- Hover: `translateY(-5px)`, increased shadow, title color → `#7CA300`
- Image: `h-48 object-cover rounded-t-lg`
- Protected projects show a `🔒 NDA` badge (top-right, dark semi-transparent pill)
- Category label: small, light weight, gray
- Title: 18px, weight 400

### Content Cards (Case Study sections)
```jsx
<div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
```
Used to wrap each design process step.

### Highlight / Callout Block
Accent-tinted left-border callout for key insights:
```jsx
<div className="bg-accent/10 border-l-4 border-custom-primary p-6 rounded-r-lg">
```

### CTA Button (Primary)
```jsx
<Link className="cta-button"> // or inline styles:
// bg: #000, color: #fff, padding: 12px 32px, border-radius: 8px
// hover: bg #333
```

### Back Navigation Link
```jsx
<Link className="nav-link inline-flex items-center">
  <ArrowLeft className="w-4 h-4 mr-2" />
  Back to ...
</Link>
```

### Form Inputs
- Border: `border border-gray-300 rounded-lg`
- Focus: `focus:ring-2 focus:ring-accent focus:border-accent`
- Padding: `px-4 py-2.5`

### Submit Button
```jsx
<button className="w-full py-3 px-6 bg-black text-white rounded-lg hover:bg-gray-800">
```

---

## Interactions & Animations

- Link hover color: `#7CA300` (transition 0.3s ease)
- Card hover: `translateY(-5px)` + shadow increase (0.3s ease)
- Navbar: `transition-transform duration-300` (slide up/down)
- Hero split image: clip-path animation on hover (0.6s cubic-bezier)
- Load-in: `.animate-on-load` — opacity 0 → 1, translateY 20px → 0 (0.6s ease-in-out via IntersectionObserver)
- PhilaFun logo: `float-infinity` keyframe animation (12s loop)
- Scroll indicator: `animate-bounce` + `animate-pulse`

---

## Images & Media

- Hero images: full-width, `object-cover`, `rounded-lg`
- Gallery thumbnails: `w-full h-full object-cover`, hover `scale-105`
- Case study process images: wrapped in `bg-gray-50 p-6 rounded-xl`
- GIFs (walkthroughs): `w-full md:w-3/4 mx-auto rounded-lg`
- All images should have descriptive `alt` text

---

## Page Structure Template

Every page follows this shell:

```
<Navbar /> (fixed, always present)
  <div className="pt-16 min-h-screen bg-[gray-50 or white]">
    <section className="py-20 bg-[alternating]">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        ...content
      </div>
    </section>
    ...more sections
  </div>
<Footer />
```

Case study pages use `pt-0` and start with a full-bleed hero image/section before the content container.

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| Mobile (`< 768px`) | Single column, reduced font sizes, mobile hero image shown |
| Tablet (`769px–1024px`) | Intermediate font sizes, some two-column layouts collapse |
| Desktop (`> 1024px`) | Full layout, split hero, skills chart visible |

Notable mobile-only rules:
- Hero split image hidden, replaced with `/mobile-hero.png`
- Skills bar chart hidden (`hidden lg:block`)
- Page title scales: 96px → 48px

---

## Tone & Content Style

- Page titles use lowercase with a period: `about.` — casual, confident
- Section headings are sentence case, no period
- Body copy is conversational, first-person, slightly humorous
- CTAs are direct: "Let's Work Together", "Read my story", "View the design system"
- External links use `<ExternalLink className="w-4 h-4 ml-2" />` icon inline
