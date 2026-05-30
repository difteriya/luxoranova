import { Link } from "react-router-dom";
import { company } from "../data/company.js";
import { services } from "../data/services.js";
import ServiceCard from "../components/ServiceCard.jsx";
import CTASection from "../components/CTASection.jsx";
import Icon from "../components/Icon.jsx";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          <span className="hero__orb hero__orb--1" />
          <span className="hero__orb hero__orb--2" />
          <span className="hero__grid" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="eyebrow eyebrow--light">
              <span className="dot" /> Dubai Silicon Oasis · IFZA Free Zone
            </span>
            <h1>{company.tagline}</h1>
            <p>{company.intro}</p>
            <div className="hero__actions">
              <Link to="/services" className="btn btn--primary btn--lg">
                Our Services <Icon name="arrow" size={18} />
              </Link>
              <Link to="/contact" className="btn btn--ghost btn--lg">
                Request a Quote
              </Link>
            </div>
            <div className="hero__trust">
              <Icon name="shield" size={18} />
              <span>
                Licensed by {company.issuingAuthority} · License #
                {company.licenseNumber}
              </span>
            </div>
          </div>

          <div className="hero__panel">
            <div className="hero__panel-head">
              <Icon name="globe" size={20} />
              <span>Trading divisions</span>
            </div>
            <ul className="hero__list">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`}>
                    <Icon name={s.icon} size={20} />
                    <span>{s.short}</span>
                    <Icon name="arrow" size={16} className="hero__list-arrow" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="container stats__grid">
          {company.stats.map((s) => (
            <div key={s.label} className="stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Intro / about teaser */}
      <section className="section">
        <div className="container split">
          <div className="split__text">
            <span className="eyebrow">Who we are</span>
            <h2>A trusted wholesale partner at the heart of modern commerce</h2>
            <p>
              {company.shortName} is a free-zone trading company established in
              Dubai Silicon Oasis. We bridge global manufacturers and regional
              markets, supplying genuine technology and electronics to
              retailers, integrators, developers, and enterprises.
            </p>
            <p>
              Our strength is range and reliability: a broad catalogue across
              five trading divisions, competitive wholesale pricing, and
              logistics built to deliver at any volume — backed by the
              efficiency of an IFZA free-zone license.
            </p>
            <Link to="/about" className="btn btn--outline">
              More about us <Icon name="arrow" size={16} />
            </Link>
          </div>
          <div className="split__cards">
            {company.whyUs.map((w) => (
              <div key={w.title} className="mini-card">
                <Icon name="check" size={18} />
                <div>
                  <h4>{w.title}</h4>
                  <p>{w.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">What we trade</span>
            <h2>Five divisions, one accountable partner</h2>
            <p>
              From computing infrastructure to the appliances that power homes,
              our divisions cover the full spectrum of technology and
              electronics wholesale.
            </p>
          </div>
          <div className="grid grid--3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">Our principles</span>
            <h2>Values that guide every transaction</h2>
          </div>
          <div className="grid grid--4">
            {company.values.map((v) => (
              <div key={v.title} className="value-card">
                <span className="value-card__icon">
                  <Icon name={v.icon} size={24} />
                </span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
