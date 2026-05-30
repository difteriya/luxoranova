import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";

export default function CTASection({
  title = "Ready to source with confidence?",
  text = "Tell us what you need and our trade desk will put together a competitive wholesale quote.",
  primary = { label: "Request a Quote", to: "/contact" },
  secondary = { label: "Explore Services", to: "/services" },
}) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-band__actions">
          <Link to={primary.to} className="btn btn--primary btn--lg">
            {primary.label} <Icon name="arrow" size={18} />
          </Link>
          {secondary && (
            <Link to={secondary.to} className="btn btn--ghost btn--lg">
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
