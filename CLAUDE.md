# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A static personal CV/portfolio site — no build step, no dependencies, no package manager. Open `index.html` directly in a browser or serve with any static server:

```bash
python3 -m http.server 8080
```

## Architecture

Three files do everything:

- **`index.html`** — all content and structure. Sections in order: About, Education, Skills, Projects, Interests.
- **`style.css`** — all styling, organised with section comment headers (e.g. `/* === Projects Grid === */`). Theme variables are defined on `:root` (light) and `body.dark` (dark mode).
- **`script.js`** — three responsibilities: theme toggle (persisted to `localStorage`), async GitHub repo stats fetching (via `https://api.github.com/repos/:owner/:repo`), and scroll-reveal via `IntersectionObserver`.

## Key conventions

**Adding a project card:** Add an `<article class="card project-card" data-repo="Owner/Repo">` inside `.projects-grid`. The `data-repo` attribute is picked up automatically by `loadProjectStats()` in `script.js` to fetch and render star count and last-push date into the `.repo-meta` div.

**Scroll-reveal:** Any element with class `reveal` is observed by `IntersectionObserver` and gets class `visible` added when it enters the viewport. All `<section>` elements use this. Child `.card` elements inside a revealed section get a staggered `fadeUp` animation automatically via CSS.

**Tags:** Use `<span class="tag">` for skills/technologies. Use `<span class="tag tag-learning">` for in-progress skills (renders in yellow instead of blue).

**Theme:** Dark mode is toggled by adding class `dark` to `<body>`. All colour values use CSS custom properties defined in `:root` / `body.dark`.
