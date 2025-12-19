# Aditya Kumar Singh — Personal Portfolio

A fast, responsive personal portfolio built with Vite + React + TypeScript and Tailwind CSS. Includes sections for projects, experience, skills, contact, and utility components like a calculator and weather widget.

**Live demo:** (deployed via GitHub Pages or your preferred host)

**Resume download:** Uses a direct Google Drive download link. To serve a local copy, place `resume.pdf` into the `public/` folder.

**Tech stack**

- **Framework:** Vite + React + TypeScript
- **Styling:** Tailwind CSS
- **Icons:** lucide-react

**Repository structure (selected)**

- **`src/`**: application source
  - **`components/`**: React components such as `Hero.tsx`, `Header.tsx`, `Footer.tsx`, `Projects.tsx`, etc.
- **`index.html`**, **`vite.config.ts`**, **`package.json`**: project config & entry

**Setup (local development)**

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open the URL printed by Vite (usually `http://localhost:5173`).

**Build & Preview**

```bash
npm run build
npm run preview
```

**Customizing**

- Update your name, bio, and profile image in `src/components/Hero.tsx`.
- Edit the navigation and sections in `src/App.tsx`.
- To change the resume link, update the anchor in `src/components/Hero.tsx` or add a local file at `public/resume.pdf`.

**Deploying**

- Deploy the `dist/` folder to GitHub Pages, Netlify, Vercel, or any static host. For GitHub Pages, you can use the `gh-pages` package or a GitHub Actions workflow.

**Notes & Troubleshooting**

- If the resume download doesn't start, ensure the Drive link is public and accessible. For consistent behavior, adding a local `public/resume.pdf` is recommended.
- If Tailwind styles don't appear, confirm `npm run dev` succeeded and Tailwind is configured in `tailwind.config.js`.

**Components**

- `Hero.tsx` — landing section with download button
- `Header.tsx` / `Footer.tsx` — site chrome
- `Projects.tsx`, `Skills.tsx`, `Experience.tsx`, `Education.tsx`, `Contact.tsx` — content sections
- Utility: `Calculator.tsx`, `LoveCalculator.tsx`, `Weather.tsx`, `Blog.tsx`

**License**
This repository includes a `LICENSE` file. Modify as needed.

**Contact**
Update contact details in `src/components/Contact.tsx`.
