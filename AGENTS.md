# Repository Guidelines

## Project Structure & Module Organization
This repository is a static portfolio site with no build system.

- `index.html`: main document structure and content sections.
- `style.css`: global styles, CSS variables, theme definitions (`:root`, `body.dark`), layout, and animations.
- `script.js`: interactive behavior (theme toggle, GitHub repo metadata fetch, reveal-on-scroll effects).
- `smart-home.png`, `temmu.png`: project images used by the page.
- `README.md`: high-level overview and usage notes.

Keep files at the repo root unless there is a clear need to introduce directories.

## Build, Test, and Development Commands
No package manager or compile step is required.

- `python3 -m http.server 8080` — run a local dev server.
- Open `http://localhost:8080` — preview the site in a browser.
- `open index.html` (macOS) — quick direct-open check without a server.

When changing GitHub stats behavior, prefer testing through the local server to avoid browser restrictions on local file requests.

## Coding Style & Naming Conventions
- Use 2-space indentation in HTML, CSS, and JavaScript.
- Keep JavaScript in vanilla ES6+ style; prefer `const`/`let`, small functions, and early returns.
- Use semantic, kebab-case class names in HTML/CSS (e.g., `project-card`, `repo-meta`).
- Keep CSS organized by section, reusing variables instead of hardcoded colors.
- Preserve existing behavior hooks such as `data-repo`, `.reveal`, and `.repo-meta`.

## Testing Guidelines
There is no automated test suite currently; use manual verification for every change.

- Validate layout at desktop and mobile widths.
- Confirm theme toggle persists after reload.
- Confirm project cards with `data-repo` populate metadata.
- Confirm reveal animations trigger once while scrolling.

If adding non-trivial JavaScript logic, include a short reproducible test checklist in the PR description.

## Commit & Pull Request Guidelines
Recent history follows Conventional Commits (`feat:`, `refactor:`). Continue that style.

- Commit format: `type: short imperative summary`.
- Keep commits focused and logically scoped.
- PRs should include: purpose, key UI/behavior changes, manual test steps, and screenshots/GIFs for visual changes.
- Link related issues when applicable.
