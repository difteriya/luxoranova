import { Link } from "react-router-dom";

export default function Logo({ footer = false }) {
  // Horizontal lockup: brand mark on the left, two-line Orbitron wordmark on
  // the right. The mark's navy blade and the wordmark inherit theme colours
  // via CSS (navy on light, white on dark); the footer forces white because it
  // always sits on a dark background.
  return (
    <Link
      to="/"
      className={`logo ${footer ? "logo--footer" : ""}`}
      aria-label="Luxora Nova Trading — home"
    >
      <span className="logo__mark" aria-hidden="true">
        <svg viewBox="0 0 240 303" role="img">
          <path
            d="M167.42 134.225V197.104L52.387 273.493V273.499H0V0H52.387V210.614L167.42 134.225Z"
            fill="#34B889"
          />
          <path
            className="logo__blade"
            d="M72.5693 168.416V105.537L187.602 29.1477V29.1417H239.989V302.641H187.602V92.0267L72.5693 168.416Z"
          />
        </svg>
      </span>
      <span className="logo__word">
        <span className="logo__word-1">LUXORA NOVA</span>
        <span className="logo__word-2">TRADING FZCO</span>
      </span>
    </Link>
  );
}
