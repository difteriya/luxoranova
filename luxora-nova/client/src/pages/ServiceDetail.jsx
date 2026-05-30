import { useParams, Link } from "react-router-dom";
import { getService, services } from "../data/services.js";
import PageHeader from "../components/PageHeader.jsx";
import CTASection from "../components/CTASection.jsx";
import Icon from "../components/Icon.jsx";
import NotFound from "./NotFound.jsx";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) return <NotFound />;

  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      <PageHeader
        eyebrow="Service"
        title={service.title}
        subtitle={service.hero}
        crumbs={[{ label: "Services", to: "/services" }, { label: service.short }]}
      />

      {/* Overview */}
      <section className="section">
        <div className="container service-layout">
          <article className="service-main">
            <span className="eyebrow">Overview</span>
            <h2>{service.summary}</h2>
            {service.overview.map((p, i) => (
              <p key={i} className="lead-p">
                {p}
              </p>
            ))}

            <h3 className="service-sub">What we supply</h3>
            <ul className="offer-grid">
              {service.offerings.map((o) => (
                <li key={o}>
                  <Icon name="check" size={18} />
                  {o}
                </li>
              ))}
            </ul>

            <h3 className="service-sub">Why partners choose this division</h3>
            <div className="grid grid--3">
              {service.benefits.map((b) => (
                <div key={b.title} className="benefit-card">
                  <h4>{b.title}</h4>
                  <p>{b.text}</p>
                </div>
              ))}
            </div>

            <h3 className="service-sub">How it works</h3>
            <ol className="process-list">
              {service.process.map((p, i) => (
                <li key={p.step}>
                  <span className="process-list__n">{i + 1}</span>
                  <div>
                    <strong>{p.step}</strong>
                    <p>{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </article>

          {/* Sidebar */}
          <aside className="service-side">
            <div className="side-card side-card--accent">
              <span className="side-card__icon">
                <Icon name={service.icon} size={28} />
              </span>
              <h3>Request a quote</h3>
              <p>
                Tell us your requirement for {service.short.toLowerCase()} and
                we'll respond with wholesale pricing within one business day.
              </p>
              <Link to="/contact" className="btn btn--primary btn--block">
                Contact our trade desk <Icon name="arrow" size={16} />
              </Link>
            </div>

            <div className="side-card">
              <h4>Industries served</h4>
              <ul className="tag-list">
                {service.industries.map((ind) => (
                  <li key={ind}>{ind}</li>
                ))}
              </ul>
            </div>

            <div className="side-card">
              <h4>Other divisions</h4>
              <ul className="side-links">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link to={`/services/${o.slug}`}>
                      <Icon name={o.icon} size={18} />
                      <span>{o.short}</span>
                      <Icon name="arrow" size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTASection
        title={`Source ${service.short.toLowerCase()} with Luxora Nova`}
        text="Genuine stock, wholesale pricing, and reliable logistics — backed by a single accountable partner."
      />
    </>
  );
}
