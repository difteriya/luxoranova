import { Link } from "react-router-dom";

export default function PageHeader({ eyebrow, title, subtitle, crumbs = [] }) {
  return (
    <section className="page-header">
      <div className="page-header__glow" aria-hidden="true" />
      <div className="container">
        {crumbs.length > 0 && (
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {crumbs.map((c) => (
              <span key={c.label}>
                <span className="crumbs__sep">/</span>
                {c.to ? <Link to={c.to}>{c.label}</Link> : <em>{c.label}</em>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <span className="eyebrow eyebrow--light">{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p className="page-header__sub">{subtitle}</p>}
      </div>
    </section>
  );
}
