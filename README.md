# Syntax Starter

A polished blank-slate website template built from the best parts of [Syntax](https://github.com/stokewell/syntax).

This repository is intentionally small. It gives you a beautiful, accessible starting point without copying the Syntax framework workshop, generator, demos, or internal tooling into every project.

## Start here

1. Click **Use this template** on GitHub.
2. Create your new repository.
3. Clone it to your computer.
4. Read [`START_HERE.md`](START_HERE.md).
5. Replace the placeholder content in `index.html`.
6. Customize the project layer in `site.css`.
7. Put images in `assets/`.
8. Run the site and tests.

```bash
npm install
npx playwright install chromium
npm test
npm run serve
```

Open `http://127.0.0.1:4173/`.

## The three files you will edit most

- `index.html` — your content and page structure
- `site.css` — your colors, typography, layout, and visual identity
- `site.js` — optional project behavior

`syntax.css` is the stable foundation. Leave it alone unless you deliberately want to change the underlying system.

## What is included

- Semantic HTML starter page
- Typography and layout foundation
- Light, dark, and system themes
- Project-owned visual layer
- Responsive examples for articles and cards
- No runtime dependencies
- Playwright smoke and accessibility tests
- GitHub Actions checks
- GitHub Pages-friendly file structure

## Publishing

For GitHub Pages, open **Settings → Pages**, choose **Deploy from a branch**, then select `main` and `/(root)`.

## License

MIT.
