import { Link } from "react-router-dom";

export default function Logo({ footer = false }) {
  return (
    <Link to="/" className={`logo ${footer ? "logo--footer" : ""}`}>
      <span className="logo__mark" aria-hidden="true">
        <svg viewBox="0 0 40 40" width="34" height="34">
          <rect width="40" height="40" rx="10" fill="var(--navy)" />
          <path
            d="M13 10v20h14"
            fill="none"
            stroke="var(--orange)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="27" cy="13" r="4" fill="var(--orange)" />
        </svg>
      </span>
      <span className="logo__text">
        <strong>LUXORA NOVA</strong>
        <em>Trading — FZCO</em>
      </span>
    </Link>
  );
}
