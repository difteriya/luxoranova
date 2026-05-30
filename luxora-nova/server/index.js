import express from "express";
import cors from "cors";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Simple request logger
app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

const MESSAGES_FILE = path.join(__dirname, "messages.json");

function readMessages() {
  try {
    return JSON.parse(fs.readFileSync(MESSAGES_FILE, "utf8"));
  } catch {
    return [];
  }
}

function writeMessages(messages) {
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2));
}

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", company: "LUXORA NOVA TRADING - FZCO" });
});

// Contact form submission
app.post("/api/contact", (req, res) => {
  const { name, email, phone, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      ok: false,
      error: "Name, email and message are required fields.",
    });
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return res
      .status(400)
      .json({ ok: false, error: "Please provide a valid email address." });
  }

  const entry = {
    id: Date.now().toString(36),
    name,
    email,
    phone: phone || "",
    subject: subject || "General enquiry",
    message,
    receivedAt: new Date().toISOString(),
  };

  const messages = readMessages();
  messages.push(entry);
  writeMessages(messages);

  console.log(`New enquiry from ${name} <${email}>`);

  res.json({
    ok: true,
    message:
      "Thank you for contacting LUXORA NOVA TRADING. Our team will get back to you within one business day.",
    id: entry.id,
  });
});

// Serve the built client in production.
// Checks several common layouts so it works regardless of how the files
// are arranged on the host (e.g. Hostinger's Node.js / Passenger setup).
const distCandidates = [
  process.env.CLIENT_DIST, // explicit override
  path.join(__dirname, "..", "client", "dist"),
  path.join(__dirname, "public"),
  path.join(__dirname, "dist"),
].filter(Boolean);

const clientDist = distCandidates.find((p) => fs.existsSync(p));

if (clientDist) {
  console.log(`Serving static client from: ${clientDist}`);
  app.use(express.static(clientDist));
  // SPA fallback for React Router — but never swallow API routes.
  app.get("*", (req, res, next) => {
    if (req.path.startsWith("/api/")) return next();
    res.sendFile(path.join(clientDist, "index.html"));
  });
} else {
  console.warn(
    "No client build found. Run `npm run build` and deploy client/dist."
  );
}

app.listen(PORT, () => {
  console.log(`LUXORA NOVA API running on http://localhost:${PORT}`);
});
