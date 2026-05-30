import { company } from "../data/company.js";
import PageHeader from "../components/PageHeader.jsx";
import CTASection from "../components/CTASection.jsx";
import Icon from "../components/Icon.jsx";

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Building trusted trade between global supply and regional demand"
        subtitle="Luxora Nova Trading is a Dubai free-zone wholesale company connecting world-class technology and electronics with the markets that need them."
        crumbs={[{ label: "About" }]}
      />

      {/* Story */}
      <section className="section">
        <div className="container split">
          <div className="split__text">
            <span className="eyebrow">Our story</span>
            <h2>Founded on integrity, built for scale</h2>
            <p>
              {company.name} was established as a free-zone company under the{" "}
              {company.issuingAuthority}, operating from the IFZA business
              ecosystem in Dubai Silicon Oasis. We were created to solve a clear
              problem: businesses across the region need a single, dependable
              wholesale source for genuine technology and electronics — without
              compromising on price, authenticity, or delivery.
            </p>
            <p>
              From that foundation we have grown into a multi-division trading
              house spanning computer systems and software, computing
              peripherals, mobile devices, household appliances, and commercial
              brokerage. Whether a customer needs a single pallet or a recurring
              supply programme, we bring the sourcing power, pricing, and
              logistics to make it happen.
            </p>
            <p>
              Our free-zone status gives partners a real advantage: streamlined
              import, re-export, and customs efficiency, combined with the
              transparency and accountability of a single trusted counterparty.
            </p>
          </div>
          <aside className="info-card">
            <h3>Company at a glance</h3>
            <ul className="info-list">
              <li>
                <span>Legal name</span>
                <strong>{company.name}</strong>
              </li>
              <li>
                <span>License number</span>
                <strong>{company.licenseNumber}</strong>
              </li>
              <li>
                <span>Legal status</span>
                <strong>{company.legalStatus}</strong>
              </li>
              <li>
                <span>Issuing authority</span>
                <strong>{company.issuingAuthority}</strong>
              </li>
              <li>
                <span>Manager</span>
                <strong>{company.manager}</strong>
              </li>
              <li>
                <span>Location</span>
                <strong>
                  {company.address.area}, {company.address.city}
                </strong>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section section--alt">
        <div className="container grid grid--2">
          <div className="feature-block">
            <span className="feature-block__icon">
              <Icon name="spark" size={26} />
            </span>
            <h3>Our mission</h3>
            <p>
              To empower businesses by supplying genuine, world-class computing
              systems, mobile solutions, and home electronics at competitive
              wholesale terms — backed by logistics and service that partners
              can build on.
            </p>
          </div>
          <div className="feature-block">
            <span className="feature-block__icon">
              <Icon name="globe" size={26} />
            </span>
            <h3>Our vision</h3>
            <p>
              To be the region's most trusted wholesale partner for technology
              and electronics — known for authenticity, reliability, and
              relationships that help our customers grow year after year.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">What drives us</span>
            <h2>Our core values</h2>
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

      {/* Why us */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">Why partner with us</span>
            <h2>The Luxora Nova advantage</h2>
          </div>
          <div className="grid grid--2">
            {company.whyUs.map((w) => (
              <div key={w.title} className="mini-card mini-card--lg">
                <Icon name="check" size={20} />
                <div>
                  <h4>{w.title}</h4>
                  <p>{w.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's build a supply relationship that lasts"
        text="Reach out to discuss your sourcing needs, request a catalogue, or open a wholesale account."
      />
    </>
  );
}
