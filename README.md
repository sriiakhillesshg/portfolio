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

## Before you deploy

- `src/data.js` — update the placeholder email, LinkedIn, and GitHub handles
  in the `contact` object.
- Swap the phone number in `data.js` if you don't want it public.
- All content (skills, experience, projects, education) lives in `src/data.js`
  — edit there rather than in the JSX components.
