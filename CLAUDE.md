# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static, single-page personal website for Brieuc-Yves (Mellouki) Cadat-Lampe, served via GitHub Pages. Content is in Dutch (`<html lang="nl">`). There is **no build tooling, no framework, and no dependencies** — the site is three hand-written files plus an image, served as-is from the repository root.

## Development & Deployment

- **Preview locally:** open `index.html` directly in a browser, or run a static server such as `python3 -m http.server` from the repo root.
- **No build, lint, or test step exists.** Changes are the raw files.
- **Deploy:** GitHub Pages serves the `main` branch root. Pushing to `main` publishes the site (custom domain `cadat.nl` / user site `cadatlampe.github.io`).

## Architecture

The whole page is one document; the three files map to structure, style, and a small amount of behavior:

- **`index.html`** — all content and structure. Sections are addressed by `id` (`#over`, `#themas`, `#tijdlijn`, `#werk`, `#bijdragen`, `#contact`) and the in-page nav links jump to these anchors. The `<head>` carries SEO/social metadata that must be kept consistent when content changes: `<title>`, `meta description`, Open Graph / Twitter tags, and a JSON-LD `Person` schema block (name, jobTitle, knowsAbout, sameAs links, etc.).
- **`style.css`** — all styling, including a warm gold/cream design system driven by CSS custom properties, responsive `@media` breakpoints, and the animation/visibility classes described below.
- **`script.js`** — progressive-enhancement behavior only; the page is fully readable without it. Every handler guards for element existence before binding. It powers four things, each coupled to specific hooks in the HTML/CSS:
  - Mobile nav toggle (`.nav-toggle` / `.site-nav`, toggles `.open` and `aria-expanded`).
  - Auto-filled copyright year (`#year`).
  - Collapsible timeline: `#timeline-list` starts with the `compact` class; `#expand-timeline` toggles it and swaps the button label between "Toon alles" / "Toon minder".
  - Scroll-reveal: elements with class `reveal` gain `visible` via `IntersectionObserver`.

### Conventions to preserve when editing

- Keep changes to plain HTML/CSS/JS — do not introduce a build step, package manager, or framework.
- When adding a section, wire it up in three places: the section `id`, the nav `<a href="#...">`, and any relevant `.reveal` class for the scroll animation.
- Class names and element `id`s are the contract between `script.js` and the markup — renaming one requires updating the other.
- Maintain accessibility patterns already in place: skip link, `aria-expanded` state, `aria-controls`, `aria-hidden` on decorative elements.
- Keep the `<head>` metadata (title, description, OG/Twitter tags, JSON-LD) in sync with visible content.
- UI text and content are Dutch; match the existing language and tone.
