# Nidhi — Portfolio

A modern, animated portfolio built with **React**, **Vite**, and **Framer Motion**.

## Tech Stack
- React 18
- Vite 5
- Framer Motion 11
- Lucide React (icons)
- DM Sans + DM Serif Display (Google Fonts)

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start dev server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

### 3. Build for production
```bash
npm run build
```

## Project Structure
```
src/
  components/
    Navbar.jsx        — Sticky nav with scroll effects
    Hero.jsx          — Animated hero with floating badges & stats
    Projects.jsx      — Project cards with hover animations
    Skills.jsx        — Skill category cards
    Education.jsx     — Education timeline cards
    Contact.jsx       — Contact section with social links
    Footer.jsx        — Footer
  App.jsx             — Root component
  main.jsx            — Entry point
  index.css           — Global styles & CSS variables
```

## Customization
- Update personal info in each component
- Change colors in `src/index.css` (CSS variables)
- Swap project data in `src/components/Projects.jsx`
- Add your own Unsplash images or local assets
