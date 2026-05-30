import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";

export default function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.slug}`} className="service-card">
      <span className="service-card__icon">
        <Icon name={service.icon} size={26} />
      </span>
      <h3>{service.short}</h3>
      <p>{service.summary}</p>
      <span className="service-card__link">
        Learn more <Icon name="arrow" size={16} />
      </span>
    </Link>
  );
}
