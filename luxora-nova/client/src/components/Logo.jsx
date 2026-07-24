import { Link } from "react-router-dom";

export default function Logo({ footer = false }) {
  // The footer sits on a permanently dark background, so it always uses the
  // white wordmark. In the navbar we render both variants and let CSS reveal
  // the correct one based on the active theme (data-theme on <html>).
  if (footer) {
    return (
      <Link to="/" className="logo logo--footer" aria-label="Luxora Nova Trading — home">
        <img className="logo__img" src="/logo-dark.svg" alt="Luxora Nova Trading" />
      </Link>
    );
  }

  return (
    <Link to="/" className="logo" aria-label="Luxora Nova Trading — home">
      <img
        className="logo__img logo__img--light"
        src="/logo-light.svg"
        alt="Luxora Nova Trading"
      />
      <img
        className="logo__img logo__img--dark"
        src="/logo-dark.svg"
        alt="Luxora Nova Trading"
        aria-hidden="true"
      />
    </Link>
  );
}
