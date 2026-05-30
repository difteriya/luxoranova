import { services } from "../data/services.js";
import { company } from "../data/company.js";
import PageHeader from "../components/PageHeader.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import CTASection from "../components/CTASection.jsx";
import Icon from "../components/Icon.jsx";

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title="Wholesale trading across five specialised divisions"
        subtitle="Everything Luxora Nova trades, in one place — from computer systems and software to mobile, appliances, and commercial brokerage."
        crumbs={[{ label: "Services" }]}
      />

      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">How we work</span>
            <h2>A simple, transparent trading process</h2>
            <p>
              Across every division we follow the same disciplined flow, so you
              always know what happens next.
            </p>
          </div>
          <div className="steps">
            {[
              { n: "01", t: "Understand", d: "We scope your requirement, volume, specification, and timeline." },
              { n: "02", t: "Source & quote", d: "Genuine stock through authorised channels at transparent wholesale pricing." },
              { n: "03", t: "Fulfil", d: "Consolidation, documentation, and coordinated logistics to your door." },
              { n: "04", t: "Support", d: "Warranty-backed after-sales and ongoing replenishment." },
            ].map((s) => (
              <div key={s.n} className="step">
                <span className="step__n">{s.n}</span>
                <h4>{s.t}</h4>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section">
        <div className="container split">
          <div className="split__text">
            <span className="eyebrow">Built for volume</span>
            <h2>Capabilities that scale with your business</h2>
            <p>
              Whether you are placing a one-off order or running a recurring
              supply programme, our infrastructure is designed to keep pace.
            </p>
            <ul className="check-list">
              <li><Icon name="check" size={18} /> Wholesale and bulk-volume pricing tiers</li>
              <li><Icon name="check" size={18} /> Authorised, warranty-backed sourcing</li>
              <li><Icon name="check" size={18} /> Mixed-SKU order consolidation</li>
              <li><Icon name="check" size={18} /> Free-zone import, export & re-export efficiency</li>
              <li><Icon name="check" size={18} /> Coordinated regional logistics</li>
              <li><Icon name="check" size={18} /> Dedicated account management</li>
            </ul>
          </div>
          <div className="split__cards">
            {company.stats.map((s) => (
              <div key={s.label} className="stat stat--card">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which division fits your needs?"
        text="Send us your requirement and our trade desk will route it to the right division and respond with a tailored quote."
        secondary={{ label: "About Luxora Nova", to: "/about" }}
      />
    </>
  );
}
