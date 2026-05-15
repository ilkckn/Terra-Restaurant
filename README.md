# 🍽️ TERRA Restaurant — Frontend Project

> A modern, elegant restaurant landing page built with React — designed and developed as part of the **MCCreative Studio** portfolio.

<br />

![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-Nested_CSS-264de4?style=flat-square&logo=css3&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?style=flat-square&logo=reactrouter&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Mobile_First-7A9E7E?style=flat-square)
![Status](https://img.shields.io/badge/Status-In_Progress-D4622A?style=flat-square)

<br />

## 📖 Overview

**TERRA** is a fine dining restaurant website crafted with a focus on clean design, smooth user experience, and mobile-first responsiveness. The project showcases a full landing page experience — from hero section to special events — built entirely with React and custom CSS.

This project was designed and developed by **MCCreative Studio** as a frontend portfolio piece, demonstrating real-world UI/UX implementation skills.

<br />

## ✨ Features

- 🎨 **Custom Design System** — A hand-crafted color palette (Terracotta, Sage Green, Warm Gold) with CSS variables for consistent theming
- 📱 **Fully Responsive** — Optimized for 375px, 390px, 410px, 430px, 768px, 820px, 1024px and beyond
- 🧩 **Component-Based Architecture** — Clean, reusable React components for every section
- 🍃 **Scattered Photo Collage** — Custom polaroid-style photo layout in the hero section
- 🍽️ **Interactive Menu Section** — Hover animations with smooth dark overlay transitions
- 🧑‍🍳 **Chef Profile Section** — Award timeline with elegant left-accent styling
- 💬 **Testimonials** — Customer reviews with gold-top card design
- 🎉 **Special Events** — Birthday, corporate, and romantic evening packages
- 📍 **Mobile Navigation** — Full-screen slide-out menu with overlay and close icon
- 🔗 **React Router** — Multi-page routing with active link highlighting

<br />

## 🗂️ Project Structure

```
src/
├── assets/
│   └── Landing-images/
│       ├── wine.jpg
│       ├── dish.jpg
│       └── chef.jpg
│
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── Landing-Sec2/
│   │   ├── Intermediate.jsx
│   │   └── Intermediate.css
│   ├── Landing-Sec3/
│   │   ├── Section3.jsx
│   │   └── Section3.css
│   ├── Landing-Sec4/
│   │   ├── Section4.jsx
│   │   └── Section4.css
│   ├── Landing-Sec5/
│   │   ├── Section5.jsx
│   │   └── Section5.css
│   └── Landing-Sec6/
│       ├── Section6.jsx
│       └── Section6.css
│
├── pages/
│   └── Home/
│       ├── Home.jsx
│       └── Home.css
│
├── styles/
│   └── global.css        ← CSS variables & design tokens
│
├── App.jsx
└── main.jsx
```

<br />

## 🎨 Design System

### Color Palette

| Variable | Hex | Usage |
|---|---|---|
| `--bg-page` | `#F8F6F1` | Page & hero background |
| `--bg-section-alt` | `#F2EFE9` | Alternate section background |
| `--bg-dark` | `#2D2D2B` | Dark sections, sidebar, events |
| `--bg-nav` | `#FFFFFF` | Navbar & footer background |
| `--text-heading` | `#2D2D2B` | H1, H2, logo text |
| `--text-body` | `#6B6B68` | Paragraphs & descriptions |
| `--text-muted` | `#A8A8A4` | Captions, secondary labels |
| `--text-on-dark` | `#F8F6F1` | Text on dark backgrounds |
| `--accent-primary` | `#D4622A` | Terracotta — CTA buttons, highlights |
| `--accent-primary-hover` | `#A8431A` | Button hover state |
| `--accent-primary-pale` | `#FAE5D9` | Card backgrounds |
| `--accent-secondary` | `#7A9E7E` | Sage green — tags, labels |
| `--accent-gold` | `#E8B84B` | Warm gold — prices, stars |
| `--border-default` | `#E0DCD4` | All borders and dividers |

### Typography

| Variable | Font | Usage |
|---|---|---|
| `--font-heading` | Playfair Display | H1, H2, logo, prices |
| `--font-elegant` | Cormorant Garamond | Descriptions, quotes, subtitles |
| `--font-body` | Montserrat | Navigation, buttons, labels |

<br />

## 📐 Responsive Breakpoints

| Breakpoint | Layout Changes |
|---|---|
| `> 1024px` | Full desktop layout, two-column grids |
| `≤ 1024px` | Hero becomes single column, reduced padding |
| `≤ 820px` | All two-column sections stack vertically |
| `≤ 768px` | Mobile navigation activates, buttons stack |
| `≤ 430px` | Compact padding, larger touch targets |
| `≤ 410px` | Fine-tuned spacing and font scaling |
| `≤ 390px` | Further reduction for small screens |
| `≤ 375px` | Minimum supported screen size |

<br />

## 🧱 Sections

| # | Component | Description |
|---|---|---|
| 1 | `Home` | Hero with scattered photo collage, headline & CTA buttons |
| 2 | `Intermediate` | Key stats — experience, ingredients, satisfaction |
| 3 | `Section3` | Tonight's special menu selection with hover animations |
| 4 | `Section4` | Chef profile with biography and award timeline |
| 5 | `Section5` | Customer testimonials with star ratings |
| 6 | `Section6` | Special events — birthday, corporate, romantic evening |

<br />

## 🚀 Getting Started

### Prerequisites

- Node.js `18+`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/terra-restaurant.git

# Navigate into the project
cd terra-restaurant

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

<br />

## 📦 Dependencies

```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-router-dom": "^6.x",
  "react-icons": "^5.x"
}
```

<br />

## 🔮 Roadmap

- [ ] Menu page — full dish catalog with category filters
- [ ] About page — restaurant story and values
- [ ] Our Chefs page — full chef team profiles
- [ ] Gallery page — photo grid with lightbox
- [ ] Contact page — contact form and map integration
- [ ] Reservation modal — booking form with date picker
- [ ] Animations — scroll-triggered entrance effects
- [ ] Dark mode support

<br />

## 👤 Author

**Musa Çekçen**
Frontend Developer & Digital Designer

> 🏢 [MCCreative Studio](https://github.com/your-username) — Web Development & Digital Design

<br />

## 📄 License

This project is licensed under the **MIT License**.  
Feel free to use it as inspiration — a credit is always appreciated. 🙏

<br />

---

<div align="center">
  <sub>Designed & developed with ❤️ by <strong>MCCreative Studio</strong></sub>
</div>