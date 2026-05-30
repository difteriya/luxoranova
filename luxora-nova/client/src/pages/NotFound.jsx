import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";

export default function NotFound() {
  return (
    <section className="section notfound">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>Page not found</h1>
        <p>
          The page you're looking for doesn't exist or may have moved. Let's get
          you back on track.
        </p>
        <div className="hero__actions">
          <Link to="/" className="btn btn--primary btn--lg">
            Back to home <Icon name="arrow" size={18} />
          </Link>
          <Link to="/services" className="btn btn--ghost btn--lg">
            View services
          </Link>
        </div>
      </div>
    </section>
  );
}
