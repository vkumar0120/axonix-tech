# Axonix Technologies

Axonix Technologies is a digital transformation company focused on secure software delivery, operational automation, data visibility, and public-sector modernization.

## Overview

This project is a React + Vite landing page for Axonix Technologies with a contact flow powered by an Express API and Resend email integration.

## Local development

```bash
npm install
npm run dev
```

This starts the backend API and the Vite frontend together.

## Production build

```bash
npm install
npm run build
NODE_ENV=production npm start
```

## Environment variables

Create a `.env` file based on `.env.example` before running in production.

```env
PORT=4000
RESEND_API_KEY=your_resend_key
FROM_ADDRESS=your_verified_sender@example.com
TO_ADDRESS=support@axonixtechnologies.com
```

## Deployment notes

- The backend serves the built frontend from `dist/` when `NODE_ENV=production` is set.
- The app is also compatible with container-based deployments via the included Dockerfile.

```bash
docker build -t axonix-tech .
docker run -p 4000:4000 --env-file .env axonix-tech
```

## Scripts

- `npm run dev` — local development mode
- `npm run build` — production build
- `npm run preview` — preview the built app locally
- `npm start` — production server startup
