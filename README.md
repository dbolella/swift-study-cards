# Swift Study Cards

A tiny, self-contained spaced-repetition flashcard app for Swift language features
and computer-science fundamentals. No build step, no dependencies — just a single
HTML file plus a `cards.js` deck.

**Live:** open `index.html` locally, or visit the GitHub Pages URL.

## Features
- Category filter (Swift members, algorithm patterns, complexity reasoning, …)
- Tap / Space to flip; grade **Again / Hard / Good / Easy**
- Lightweight Leitner-style spacing; review progress saved per-device in `localStorage`
- Works offline and on mobile (responsive, safe-area aware)

## Add a card
Append an object to the `window.CARDS` array in [`cards.js`](./cards.js) — the schema
and category list are documented at the top of that file. Give each card a stable,
unique `id` (review progress is keyed to it).
