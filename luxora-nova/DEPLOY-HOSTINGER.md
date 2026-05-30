# Deploying LUXORA NOVA to Hostinger (Node.js app via hPanel)

This runs the Express server through Hostinger's **Node.js** feature (Phusion
Passenger). One app serves **both** the React site and the `/api` backend on the
same domain — so the contact form works with no extra configuration.

> Requires a plan that includes the **Node.js** app feature in hPanel
> (Business shared / Cloud / VPS). If your plan is static-only, you instead
> upload `client/dist` to `public_html` and the contact API won't run.

---

## 1. Build the site locally

```bash
cd luxora-nova
npm run build        # produces client/dist
```

## 2. Upload the project files

Using hPanel **File Manager** or FTP, create a folder (e.g. `luxoranova`) in
your home directory — **not** inside `public_html` — and upload so the layout is:

```
luxoranova/
├── server/
│   ├── index.js          ← startup file
│   └── package.json      ← has express + cors
└── client/
    └── dist/             ← the built site (index.html, assets/, ...)
```

**Do NOT upload** `node_modules/` (any of them) or the `client/src` source —
only `server/` and `client/dist/` are needed at runtime.

## 3. Create the Node.js application in hPanel

hPanel → **Advanced → Node.js → Create application**:

| Field                      | Value                          |
| -------------------------- | ------------------------------ |
| Node.js version            | 18.x or 20.x                   |
| Application mode           | Production                     |
| Application root           | `luxoranova/server`            |
| Application URL            | your domain (e.g. luxoranova.com) |
| Application startup file   | `index.js`                     |

## 4. Install dependencies & start

- On the Node.js app page, click **Run NPM Install** (installs `express` and
  `cors` from `server/package.json`).
- Click **Restart** (or Start) the application.

## 5. Verify

- Visit your domain → the site loads.
- Navigate to `/about`, `/services/...`, refresh → no 404 (Express SPA fallback).
- Submit the contact form → success message. Submissions are appended to
  `server/messages.json` on the host.

---

## Notes & troubleshooting

- **Relative paths:** `server/index.js` resolves the build via `../client/dist`,
  so keep `client/dist` as a sibling of `server/`. Alternatively, copy the build
  into `server/public/` (also auto-detected), or set the `CLIENT_DIST` env var to
  an absolute path in the Node.js app's environment variables.
- **Port:** the app calls `app.listen(process.env.PORT || 4000)`. Passenger
  manages the socket automatically — no port change needed.
- **403 Forbidden** usually means the request is being served by Apache from an
  empty `public_html` instead of the Node app. Make sure the domain is mapped to
  the Node.js application (step 3), and that the app is **started**.
- **Updating the site:** rebuild locally, re-upload `client/dist`, then
  **Restart** the Node app in hPanel.
- **Static-only fallback:** if you can't use Node, upload the *contents* of
  `client/dist` (including the hidden `.htaccess`) into `public_html`. The site
  works, but the contact form will error on submit until the API is hosted.
```
