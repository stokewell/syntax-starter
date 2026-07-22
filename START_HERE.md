# Start Here

This is a finished starting point, not a finished website.

You do not need to understand a framework before using it. Most projects begin by editing three files:

```text
index.html   Your words and page structure
site.css     Your visual identity
site.js      Optional behavior
```

## 1. Clone your new repository

After creating a repository from this template:

```bash
git clone https://github.com/YOUR-NAME/YOUR-REPOSITORY.git
cd YOUR-REPOSITORY
```

Do not type the `%` or `$` symbols sometimes shown before Terminal commands. They are prompts, not part of the command.

## 2. Install the development tools

```bash
npm install
npx playwright install chromium
```

This installs the local preview server and browser tests. The published website itself has no runtime package dependency.

## 3. Preview the site

```bash
npm run serve
```

Open:

```text
http://127.0.0.1:4173/
```

Stop the server with `Control-C`.

## 4. Replace the placeholder content

Open `index.html` and replace:

- the page title and description;
- the site name;
- the hero heading and introduction;
- the example sections and cards;
- the footer credit.

Keep the semantic elements—`header`, `main`, `section`, `article`, and `footer`—unless the content genuinely needs a different structure.

## 5. Give it a visual identity

Open `site.css`. The first block contains the main project controls:

```css
:root {
  --project-accent: #067474;
  --project-accent-deep: #045858;
  --project-paper: #fbfaf8;
  --project-ink: #24211f;
}
```

Changing these variables should be your first styling move. Add project-specific composition below them. Avoid editing `syntax.css` for ordinary customization.

## 6. Add images

Put image files inside `assets/` and reference them with relative paths:

```html
<img src="./assets/your-image.jpg" alt="A useful description" />
```

Use meaningful alternative text. Decorative images can use `alt=""`.

## 7. Run the checks

```bash
npm test
```

The tests confirm that:

- the page loads;
- the main heading exists;
- the navigation works;
- there is no horizontal overflow;
- there are no serious or critical accessibility violations.

Update the expected title and heading in `tests/site.spec.js` after renaming the project.

## 8. Save the first clean version

```bash
git add .
git commit -m "Customize starter site"
git push origin main
```

`git add .` stages the files. `git commit` saves a local snapshot. `git push` uploads it to GitHub.

## 9. Publish with GitHub Pages

On GitHub:

1. Open **Settings**.
2. Select **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select `main` and `/(root)`.
5. Save.

Your site will normally appear at:

```text
https://YOUR-NAME.github.io/YOUR-REPOSITORY/
```

## Common problems

### `cd: no such file or directory`

Check where you are:

```bash
pwd
ls
```

Then use the full path to your project:

```bash
cd ~/Projects/YOUR-REPOSITORY
```

### `EADDRINUSE`

Another local server is already using port `4173`. Stop it with `Control-C`, or preview on another port:

```bash
npx http-server . -p 4174 -c-1
```

The automated tests still expect port `4173` unless you update `playwright.config.js` too.

### The tests show another website

A different server is probably running on port `4173`. Stop it before running `npm test`. The test configuration deliberately refuses to reuse an unrelated server.

### `.DS_Store` appeared

macOS created it automatically. It is already ignored by `.gitignore`.

## A good request to give an AI coding assistant

> Turn this Syntax Starter into a focused editorial site about [topic]. Preserve the semantic structure and accessibility. Replace the placeholder copy, create a distinctive project-owned visual system in `site.css`, use JavaScript only when genuinely needed, and keep all tests passing.
