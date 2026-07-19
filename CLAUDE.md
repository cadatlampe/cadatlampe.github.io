# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal website (single page) of Mellouki Cadat-Lampe, deployed via GitHub Pages from the `main` branch root. Fully static — no build tooling, no package manager, no tests, no linter. To preview locally, open `index.html` in a browser or serve the directory (e.g. `python3 -m http.server`).

**All site content and the README are in Dutch** (`<html lang="nl">`). Keep new content, alt text, and aria-labels in Dutch.

## Structure

Three files make up the site:

- `index.html` — all content in one page, organized as anchor-linked sections: hero, `#over`, `#themas`, `#tijdlijn`, `#werk`, `#bijdragen`, `#contact`. The `<head>` carries substantial SEO/social metadata (Open Graph, Twitter card, JSON-LD `Person` schema, canonical URL `https://cadat.nl/`) — keep it in sync when biographical facts change.
- `style.css` — design tokens (colors, radii, layout vars) live in `:root`; a Sahara-inspired palette (sand/ochre/sky/green). Responsive breakpoints at 980px and 740px (mobile nav). Honors `prefers-reduced-motion`.
- `script.js` — three small behaviors: mobile nav toggle, timeline expand/collapse (`#timeline-list` starts in `.compact` mode hiding `.extra` items), and an IntersectionObserver adding `.visible` to `.reveal` elements for scroll-in animation. New sections that should animate need the `reveal` class.

Fonts (Instrument Sans, Newsreader) load from Google Fonts; the favicon is an inline SVG data URI in `index.html`.

## Conventions

- Headings use Newsreader (serif); body uses Instrument Sans — the shared heading rule in `style.css` lists selectors explicitly (`.hero h1, .section h2, ...`), so new heading contexts must be added there.
- Timeline entries beyond the initial visible set need the `extra` class on the `<li>` so the expand/collapse button works.
