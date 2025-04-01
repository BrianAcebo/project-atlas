# Project Atlas – SEO Content Strategy Platform

Project Atlas is a front-end SaaS application that helps SEO teams visualize topical maps, plan internal linking, and manage content publishing with clarity and speed.

---

## Live Demo

[👉 \[Check it out\]](https://project-atlas-weld.vercel.app/)

---

## Key Features

- **Topical Map Visualizer**  
  Interactive graph view of your content strategy (pillar → cluster → supporting).

- **Post Planner Drawer**  
  Click a topic to slide out a metadata editor with fields like:

  - Title
  - Published Status
  - Internal links

  Coming soon

  - Search intent
  - Target URL
  - Focus keyword

---

## Tech Stack

| Layer        | Tech                               |
| ------------ | ---------------------------------- |
| Backend      | Good ol' local storage 😉          |
| Frontend     | React + Vite                       |
| UI Libraries | Tailwind CSS                       |
| Graph Viz    | React Flow                         |
| Deployment   | Vercel                             |
| Testing      | Vitest, Testing Library, Storybook |

## How to Run Locally

1. Clone the Repo

```plaintext
git clone https://github.com/BrianAcebo/project-atlas.git
cd project-atlas
```

2. Start it up

```plaintext
npm install --legacy-peer-deps
npm run dev
```

2. tEsT iT?

```plaintext
npm run test / npm run test:ui (Opens the Vitest UI)
or
npm run storybook
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
