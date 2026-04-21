// Theme toggle with localStorage persistence
const themeButton = document.getElementById('theme-toggle');
let isDarkMode = false;

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark', isDarkMode);
    themeButton.textContent = isDarkMode ? '\u2600\ufe0f' : '\ud83c\udf19';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Restore saved theme on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    isDarkMode = true;
    document.body.classList.add('dark');
    themeButton.textContent = '\u2600\ufe0f';
}

themeButton.addEventListener('click', toggleTheme);

// ── Async GitHub repo stats ──────────────────────────────────────────────────
async function fetchRepoStats(repo) {
    const response = await fetch(`https://api.github.com/repos/${repo}`);
    if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
    return response.json();
}

async function loadProjectStats() {
    const articles = document.querySelectorAll('[data-repo]');

    // Fire all requests in parallel
    const results = await Promise.allSettled(
        Array.from(articles).map(article => fetchRepoStats(article.dataset.repo))
    );

    results.forEach((result, i) => {
        if (result.status !== 'fulfilled') return;
        const data = result.value;
        const metaEl = articles[i].querySelector('.repo-meta');
        if (!metaEl) return;

        const updated = new Date(data.pushed_at).toLocaleDateString('en-GB', {
            month: 'short',
            year: 'numeric',
        });
        metaEl.innerHTML =
            `<span class="repo-stat">\u2b50 ${data.stargazers_count}</span>` +
            `<span class="repo-stat">\ud83d\udd04 Updated ${updated}</span>`;
    });
}

// ── Scroll-reveal via IntersectionObserver ───────────────────────────────────
function initScrollReveal() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

loadProjectStats();
initScrollReveal();