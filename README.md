# Personal Portfolio / CV

A static personal portfolio and CV site. No build step, no dependencies, no package manager.

## Getting started

Open `index.html` directly in a browser, or serve locally:

```bash
python3 -m http.server 8080
```

## Structure

| File | Purpose |
|------|---------|
| `index.html` | All content and structure (About, Education, Skills, Projects, Interests) |
| `style.css` | All styling; theme variables on `:root` (light) and `body.dark` (dark mode) |
| `script.js` | Theme toggle, GitHub repo stats fetching, scroll-reveal |

## Features

- **Dark/light mode** — toggled via a button in the header, persisted to `localStorage`
- **GitHub repo stats** — project cards with `data-repo="Owner/Repo"` automatically fetch star count and last-push date from the GitHub API
- **Scroll-reveal animations** — elements with class `reveal` animate in via `IntersectionObserver`; cards inside revealed sections get a staggered `fadeUp` effect

## Adding a project card

```html
<article class="card project-card" data-repo="Owner/Repo">
  <h3>Project Name</h3>
  <p>Description</p>
  <div class="repo-meta"></div>
  <div class="tags">
    <span class="tag">Technology</span>
    <span class="tag tag-learning">In Progress</span>
  </div>
</article>
```

The `data-repo` attribute is picked up by `loadProjectStats()` to populate `.repo-meta` with live stats.
