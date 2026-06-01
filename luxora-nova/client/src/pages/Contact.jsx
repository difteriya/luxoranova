import { useState } from "react";
import { company } from "../data/company.js";
import { services } from "../data/services.js";
import PageHeader from "../components/PageHeader.jsx";
import Icon from "../components/Icon.jsx";

// Web3Forms access key (free, tied to info@luxoranova.com).
// Generate one at https://web3forms.com and paste it below — submissions
// are delivered straight to the inbox, no backend required.
const WEB3FORMS_ACCESS_KEY = "77670afa-c348-4510-960c-2049c68c31d8";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const update = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: form.name,
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: `Website enquiry — ${form.subject || "General enquiry"}`,
          message: form.message,
        }),
      });

      // Guard against non-JSON responses (e.g. an HTML error page) so the
      // user never sees a cryptic "Unexpected token '<'" message.
      const contentType = res.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        throw new Error("Something went wrong. Please try again later.");
      }

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      setStatus({
        state: "success",
        message:
          "Thank you for contacting LUXORA NOVA TRADING. Our team will get back to you within one business day.",
      });
      setForm(initialForm);
    } catch (err) {
      setStatus({ state: "error", message: err.message });
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk trade"
        subtitle="Open a wholesale account, request a quote, or ask about a specific product line. Our trade desk replies within one business day."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="section">
        <div className="container contact-layout">
          {/* Info */}
          <div className="contact-info">
            <h2>Reach our trade desk</h2>
            <p>
              Based in the IFZA free zone at Dubai Silicon Oasis, we serve
              partners across the region and beyond. Get in touch through any
              channel below.
            </p>

            <ul className="contact-cards">
              <li>
                <span className="contact-cards__icon">
                  <Icon name="mail" size={22} />
                </span>
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${company.contact.email}`}>
                    {company.contact.email}
                  </a>
                </div>
              </li>
              <li>
                <span className="contact-cards__icon">
                  <Icon name="phone" size={22} />
                </span>
                <div>
                  <strong>Phone & WhatsApp</strong>
                  <a href={`tel:${company.contact.phone.replace(/\s/g, "")}`}>
                    {company.contact.phone}
                  </a>
                  <span>{company.contact.whatsapp}</span>
                </div>
              </li>
              <li>
                <span className="contact-cards__icon">
                  <Icon name="pin" size={22} />
                </span>
                <div>
                  <strong>Office</strong>
                  <span>
                    {company.address.building}, {company.address.premises}
                    <br />
                    {company.address.area}
                    <br />
                    {company.address.city}, {company.address.country}
                  </span>
                </div>
              </li>
              <li>
                <span className="contact-cards__icon">
                  <Icon name="clock" size={22} />
                </span>
                <div>
                  <strong>Business hours</strong>
                  <span>{company.contact.hours}</span>
                </div>
              </li>
            </ul>

            <div className="contact-license">
              <Icon name="shield" size={18} />
              <span>
                {company.name} · License #{company.licenseNumber} ·{" "}
                {company.legalStatus}
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send us a message</h3>

              <div className="field-row">
                <label className="field">
                  <span>Full name *</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={update}
                    required
                    placeholder="Your name"
                  />
                </label>
                <label className="field">
                  <span>Email *</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={update}
                    required
                    placeholder="you@company.com"
                  />
                </label>
              </div>

              <div className="field-row">
                <label className="field">
                  <span>Phone</span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={update}
                    placeholder="+971 ..."
                  />
                </label>
                <label className="field">
                  <span>Topic</span>
                  <select name="subject" value={form.subject} onChange={update}>
                    <option value="">General enquiry</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.short}>
                        {s.short}
                      </option>
                    ))}
                    <option value="Wholesale account">
                      Open a wholesale account
                    </option>
                  </select>
                </label>
              </div>

              <label className="field">
                <span>Message *</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={update}
                  required
                  rows={5}
                  placeholder="Tell us what you'd like to source, expected volumes, and timeline."
                />
              </label>

              <button
                type="submit"
                className="btn btn--primary btn--lg btn--block"
                disabled={status.state === "loading"}
              >
                {status.state === "loading" ? "Sending..." : "Send message"}
                {status.state !== "loading" && <Icon name="arrow" size={18} />}
              </button>

              {status.state === "success" && (
                <p className="form-note form-note--ok">
                  <Icon name="check" size={18} /> {status.message}
                </p>
              )}
              {status.state === "error" && (
                <p className="form-note form-note--err">{status.message}</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
