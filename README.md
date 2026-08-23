# Srii Akhillessh Gaddam — Portfolio

React + Vite portfolio, served in production by nginx via Docker.

## Local development (Node)

```bash
npm install
npm run dev        # http://localhost:5173
```

## Production build

```bash
npm run build       # outputs to dist/
npm run preview     # sanity-check the build locally
```

## Serve with nginx (Docker)

```bash
docker compose up --build
# → http://localhost:8080
```

This runs a two-stage build: **Node 20** installs deps and runs `vite build`,
then the static `dist/` output is copied into an **nginx:alpine** image
(`nginx.conf` handles SPA routing + gzip + asset caching). Only the nginx
stage ships in the final image — no Node runtime in production.

To build/run without compose:

```bash
docker build -t srii-portfolio .
docker run -p 8080:80 srii-portfolio
```

## Deploy to GitHub Pages

A workflow at `.github/workflows/deploy.yml` builds and publishes the site
automatically on every push to `main` — no manual build step needed.

1. **Set the base path.** In `vite.config.js`, `base` must match your repo
   name: `base: '/your-repo-name/'`. It's currently set to
   `/portfolio/` — change it if you name the repo something else.
   (If you're deploying to a `<username>.github.io` repo instead of a
   project repo, set `base: '/'`.)
2. **Create the GitHub repo** and push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
3. **Enable Pages.** In the repo, go to Settings → Pages, and under
   "Build and deployment" set Source to **GitHub Actions**.
4. **Push again** (or re-run the workflow from the Actions tab) if Pages
   wasn't enabled before your first push. The site will build and deploy
   automatically — check the Actions tab for progress.
5. Your site will be live at `https://<your-username>.github.io/portfolio/`.

## Before you deploy

- `src/data.js` — update the placeholder email, LinkedIn, and GitHub handles
  in the `contact` object.
- Swap the phone number in `data.js` if you don't want it public.
- All content (skills, experience, projects, education) lives in `src/data.js`
  — edit there rather than in the JSX components.
