# LUXORA NOVA TRADING — FZCO · Corporate Website

A modern corporate website for **LUXORA NOVA TRADING - FZCO**, a Dubai
free-zone wholesale trader of technology and electronics. Built with
**React (Vite)** on the frontend and **Node.js (Express)** on the backend.

## Theme

Modern style using a **dark blue (navy)** base with an **orange** accent.

## Pages

- **Home** — hero, stats, company intro, services overview, values, CTA
- **About** — company story, mission/vision, values, advantages, license details
- **Services** — overview of all five trading divisions + process & capabilities
- **Service detail** — a dedicated, content-rich page for each of the 5 services:
  - Computer Systems & Communication Equipment Software Trading
  - Computers & Peripheral Equipment Trading
  - Mobile Phones & Accessories Trading
  - Refrigerators, Washing Machines & Household Electrical Appliances Trading
  - Commercial Brokerage
- **Contact** — company details + working contact form (POSTs to the API)

## Project structure

```
luxora-nova/
├── client/          # React + Vite frontend
│   └── src/
│       ├── components/   # Navbar, Footer, Icon, cards, CTA, etc.
│       ├── data/         # company.js + services.js (all site content)
│       └── pages/        # Home, About, Services, ServiceDetail, Contact
└── server/          # Express backend (contact API, serves built client)
```

## Getting started

From the `luxora-nova` directory:

```bash
# 1. Install all dependencies (root + client + server)
npm install
npm run install:all

# 2. Run frontend + backend together (dev)
npm run dev
```

- Frontend dev server: http://localhost:5173
- Backend API: http://localhost:4000 (Vite proxies `/api` to it)

## Production build

```bash
npm run build      # builds the React client into client/dist
npm start          # Express serves the API + the built client on :4000
```

## API

- `GET  /api/health` — health check
- `POST /api/contact` — contact form submissions (saved to `server/messages.json`)

## Company details

Sourced from the official DIEZA trade license (No. 88391):
LUXORA NOVA TRADING - FZCO · Dubai Silicon Oasis, IFZA Properties (DSO-IFZA) ·
Manager: Afgan Akhundov · Issuing authority: Dubai Integrated Economic Zones
Authority.
