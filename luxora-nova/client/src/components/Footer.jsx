import { Link } from "react-router-dom";
import { company, navLinks } from "../data/company.js";
import { services } from "../data/services.js";
import Logo from "./Logo.jsx";
import Icon from "./Icon.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo footer />
          <p>{company.intro}</p>
          <div className="footer__license">
            License No. {company.licenseNumber} · {company.legalStatus} ·{" "}
            {company.issuingAuthority}
          </div>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`}>{s.short}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Get in touch</h4>
          <ul className="footer__contact">
            <li>
              <Icon name="mail" size={18} />
              <a href={`mailto:${company.contact.email}`}>
                {company.contact.email}
              </a>
            </li>
            <li>
              <Icon name="phone" size={18} />
              <a href={`tel:${company.contact.phone.replace(/\s/g, "")}`}>
                {company.contact.phone}
              </a>
            </li>
            <li>
              <Icon name="pin" size={18} />
              <span>
                {company.address.building}, {company.address.premises}
                <br />
                {company.address.area}, {company.address.city},{" "}
                {company.address.country}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <span>
            © {company.founded} {company.name}. All rights reserved.
          </span>
          <span>Dubai Silicon Oasis · United Arab Emirates</span>
        </div>
      </div>
    </footer>
  );
}
