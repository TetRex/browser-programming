# Lecture 02 – Semantic HTML & Structure

## 1. What I implemented this lecture
- Created a semantic HTML structure for the portfolio page
- Added header, main content sections, and footer using appropriate semantic elements
- Included portfolio section with images, links, and embedded video
- Added areas of interest section with a list
- Implemented accessibility features like skip link and alt text for images

## 2. Semantic decisions I made (REQUIRED)

Explain at least **three semantic choices** you made in your HTML.

### Decision 1
- Element(s) used: `<header>`
- Where in the page: At the top of the page, containing the name and personal information
- Why this element is semantically correct: The `<header>` element represents introductory content for its nearest ancestor sectioning content or sectioning root element. It contains the main heading and personal details that introduce the portfolio, making it semantically appropriate for site-wide or section-specific introductory content.

### Decision 2
- Element(s) used: `<section>` for portfolio and interests, `<article>` for individual projects
- Where in the page: In the main content area, grouping the portfolio works and interests
- Why this element is semantically correct: `<section>` is used to group related content into thematic sections, such as the portfolio and interests areas. `<article>` is used for individual projects within the portfolio as they represent self-contained compositions that could stand alone, improving the document's structure and accessibility.

### Decision 3
- Element(s) used: `<figure>` and `<figcaption>`
- Where in the page: Around images and the embedded video in the portfolio section
- Why this element is semantically correct: `<figure>` is used to mark up self-contained content like images or diagrams that is referenced from the main content. `<figcaption>` provides a caption for the figure, which is essential for accessibility and provides context for screen readers and users.

## 3. Accessibility considerations
- Added a skip link at the top of the page (`<a href="#main">Skip to content</a>`) to allow keyboard users to bypass navigation and jump directly to the main content.
- Used proper heading hierarchy (h1 for main title, h2 for sections, h3 for subsections) to create a logical document outline for screen readers.
- Added descriptive alt text for all images to ensure users with visual impairments can understand the content.
- Used semantic HTML elements to provide better structure and meaning to assistive technologies.

## 4. What I learned
- The importance of semantic HTML for better accessibility and SEO
- How to structure a webpage using proper heading hierarchy and sectioning elements
- The role of `<figure>` and `<figcaption>` for media content
- Implementing basic accessibility features like skip links
