# Viget Startups &nbsp;&nbsp;&nbsp;[![Netlify Status](https://api.netlify.com/api/v1/badges/b4ea76dd-97db-4305-87fd-d7aeee751929/deploy-status)](https://app.netlify.com/sites/viget-startups/deploys)

[**Demo Link**](https://trailbuddy-astro-view-transition-demo.netlify.app/)

The Viget Startups page is a public facing marketing site by [Viget](https://www.viget.com) to help promote and showcase some of our startup specific client work. The site is built on the [Astro](https://astro.build/) Framework and features quite a bit of animation work being powered by [GSAP](https://gsap.com/).

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/~/github.com/vigetlabs/viget-startups)

## 🔥 Getting Started

To get started with this project, you'll need to have `Node.js` and `npm` installed on your machine. Once you have those installed, you can follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the project dependencies.
4. Run `npm run dev` to start the development server.
5. Open your web browser and navigate to `http://localhost:4321`.

## 🚀 Project Structure

This project leverages [Astro's Content Collections](https://docs.astro.build/en/tutorials/add-content-collections/) to handle the various section content. As such, the project structure contains the following folders and files:

```text
/
├── public/
│   └── ...
├── src/
│   ├── assets/
│   │   └── ...
│   ├── components/
│   │   └── ...
│   ├── content/
│   │   └── ...
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

## ✏️ Updating Content

All of the section copy exists within markdown files inside of the `content` directory. Generally speaking each section boilerplate copy will be inside of `content/sections`, however a few sections have additional blocks that exists in their own specific content directories. To help identify which directory to go to for content changes, see the following breakdown.

<details><summary><code>content/sections</code> - The markdown content for the section core content, such as <strong>Headings</strong>, <strong>Descriptions</strong>, and <strong>CTAs</strong>.</summary>
  <img src="https://github.com/vigetlabs/viget-startups/assets/8878152/c8ca2405-e26c-4379-a58d-2179e844bfb4" alt="" />
</details>

<details><summary><code>content/case-studies</code> - The markdown content for each of the Case Study cards.</summary>
  <img src="https://github.com/vigetlabs/viget-startups/assets/8878152/e64b0d29-2de6-44b7-b4ef-b97f7b37a5ef" alt="" />
</details>

<details><summary><code>content/clients</code> - The markdown content for each of the clients and their associated logo as found in the marquee.</summary>
  <img src="https://github.com/vigetlabs/viget-startups/assets/8878152/9eba6800-ebbf-4d18-a6a4-b8af1501f2e0" alt="" />
</details>

<details><summary><code>content/testimonials</code> - The markdown content for each client testimonial.</summary>
  <img src="https://github.com/vigetlabs/viget-startups/assets/8878152/62ee99ae-ce24-4a6e-bb5c-726111caf756" alt="" />
</details>

<br>

When making copy edits, simply update the markdown file to reflect the copy change as needed.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
