# Project Atlas – SEO Content Strategy Platform

Project Atlas is a full-stack SaaS application that helps SEO teams visualize topical maps, plan internal linking, and manage content publishing with clarity and speed.

---

## Live Demo

[👉 \[Check it out\]](https://project-atlas-weld.vercel.app/)

---

## Key Features

- **Topical Map Visualizer**  
  Interactive graph view of your content strategy (pillar → cluster → supporting).
- **Post Planner Drawer**  
  Click a topic to slide out a metadata editor with fields like:

  - Focus keyword
  - Search intent
  - Target URL
  - Internal links
  - AI suggestions for new content (mocked in MVP)

- **Performance Insights Panel**  
  Displays real-time data on bundle size, FPS, and load time across frameworks.

- **Modular Frontends**  
  Built with three separate frontends to compare performance and DX:
  - `frontend-react`
  - `frontend-vue`
  - `frontend-svelte`

---

## Tech Stack

| Layer          | Tech                                  |
| -------------- | ------------------------------------- |
| Backend        | Node.js (Fastify), Prisma, PostgreSQL |
| Frontends      | React (Vite), Vue 3 (Vite), SvelteKit |
| UI Libraries   | Tailwind CSS, shadcn/ui (React)       |
| Graph Viz      | Cytoscape.js                          |
| AI Stub        | Mocked OpenAI Suggestions             |
| Auth (Planned) | Clerk or Supabase                     |
| Deployment     | Vercel, Netlify, Render               |
| Testing        | Cypress, Vitest, Lighthouse           |

---

## Architecture Overview

```plaintext
  ┌───────────────────────────┐
  │        Client App         │
  │ (React / Vue / SvelteKit) │
  └────────────┬──────────────┘
                │ Fetch API
  ┌────────────▼──────────────┐
  │        Fastify API        │
  │  /topics, /topics/:id     │
  └────────────┬──────────────┘
                │ ORM
  ┌────────────▼──────────────┐
  │        PostgreSQL         │
  │     (via Prisma ORM)      │
  └───────────────────────────┘
```

---

## Project Structure

```plaintext
/api-server        → Fastify backend w/ Prisma
/frontend-react    → React app w/ topic map + drawer
/frontend-vue      → Vue app
/frontend-svelte   → SvelteKit app
/shared            → Shared types, utils (optional)
```

---

## How to Run Locally

1. Clone the Repo

```plaintext
git clone https://github.com/your-username/content-atlas.git
cd content-atlas
```

2. Start the Backend

```plaintext
cd api-server
npm install
npx prisma migrate dev
npm run dev
```

3. Start a Frontend (React Example)

```plaintext
cd ../frontend-react
npm install
npm run dev
Repeat for frontend-vue and frontend-svelte.
```

---

Author

Brian Acebo
[\[Portfolio\]](https://brianacebo.com) · [\[LinkedIn\]](https://www.linkedin.com/in/brianacebo/)

---

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
