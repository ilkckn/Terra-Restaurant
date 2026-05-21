import { useState } from "react";
import "./Contact.css";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="10" x2="17" y2="10" />
      <polyline points="11 4 17 10 11 16" />
    </svg>
  );
}

function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    occasion: "",
    guests: "",
    date: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">

      {/* ── HERO STRIP ── */}
      <div className="cp-hero">
        <div className="cp-hero-left">
          <span className="cp-hero-line" />
          <span className="cp-hero-tag">Contact & Reservations</span>
        </div>
        <span className="cp-hero-right">TERRA — EST. 2018</span>
      </div>

      {/* ── MAIN SPLIT ── */}
      <div className="cp-main">

        {/* LEFT */}
        <div className="cp-left">
          <div className="cp-left-top">
            <span className="cp-left-number">01 / 03</span>
            <h1 className="cp-left-heading">Let's talk</h1>
            <span className="cp-left-heading-italic">over dinner.</span>
            <p className="cp-left-desc">
              Whether it's a table for two or a private event for fifty,
              every reservation at TERRA begins with a conversation.
              We'd love to hear from you.
            </p>

            <div className="cp-info-grid">
              <div className="cp-info-block">
                <span className="cp-info-label">Address</span>
                <span className="cp-info-value">
                  Basler Straße 48<br />
                  79539 Lörrach, Germany
                </span>
              </div>

              <div className="cp-info-block">
                <span className="cp-info-label">Reservations</span>
                <span className="cp-info-value">
                  <a href="tel:+4976213456789">+49 7621 345 67 89</a><br />
                  <a href="mailto:hello@terra-loerrach.de">hello@terra-loerrach.de</a>
                </span>
              </div>

              <div className="cp-info-block">
                <span className="cp-info-label">Hours</span>
                <div className="cp-hours">
                  <div className="cp-hours-row">
                    <span className="cp-hours-day">Mon–Thu</span>
                    <span className="cp-hours-time">18:00 – 23:00</span>
                  </div>
                  <div className="cp-hours-row">
                    <span className="cp-hours-day">Fri–Sat</span>
                    <span className="cp-hours-time">17:00 – 00:00</span>
                  </div>
                  <div className="cp-hours-row">
                    <span className="cp-hours-day">Sunday</span>
                    <span className="cp-hours-time">Closed</span>
                  </div>
                </div>
              </div>

              <div className="cp-info-block">
                <span className="cp-info-label">Private Dining</span>
                <span className="cp-info-value">
                  Up to 50 guests<br />
                  Bespoke menus
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="cp-left-divider" />
            <div className="cp-socials">
              <span className="cp-social-label">Follow</span>
              <div className="cp-social-links">
                <a href="#" className="cp-social-link">IG</a>
                <a href="#" className="cp-social-link">FB</a>
                <a href="#" className="cp-social-link">TW</a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className="cp-right">
          {submitted ? (
            <div className="cp-form-header" style={{ textAlign: "center", padding: "4rem 0" }}>
              <span className="cp-form-tag">Message Received</span>
              <h2 className="cp-form-title">
                Thank you.<br /><em>We'll be in touch.</em>
              </h2>
              <p style={{ fontFamily: "var(--font-elegant)", fontSize: "2rem", fontStyle: "italic", color: "var(--text-muted)", marginTop: "2rem", lineHeight: 1.6 }}>
                Expect a reply within 24 hours.<br />
                In the meantime — we'll keep the fire going.
              </p>
            </div>
          ) : (
            <>
              <div className="cp-form-header">
                <span className="cp-form-tag">Make a Reservation</span>
                <h2 className="cp-form-title">
                  Reserve your<br /><em>table.</em>
                </h2>
              </div>

              <form className="cp-form" onSubmit={handleSubmit}>

                {/* Row 1: Ad Soyad */}
                <div className="cp-field-row">
                  <div className="cp-field">
                    <label className="cp-field-label" htmlFor="firstName">First Name</label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Marco"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="cp-field">
                    <label className="cp-field-label" htmlFor="lastName">Last Name</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Bellini"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Row 2: Email Telefon */}
                <div className="cp-field-row" style={{ borderTop: "none" }}>
                  <div className="cp-field">
                    <label className="cp-field-label" htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="marco@terra-loerrach.de"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="cp-field">
                    <label className="cp-field-label" htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+49 ___ ___ __ __"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Row 3: Occasion + Guests */}
                <div className="cp-field-row" style={{ borderTop: "none" }}>
                  <div className="cp-field">
                    <label className="cp-field-label" htmlFor="occasion">Occasion</label>
                    <select
                      id="occasion"
                      name="occasion"
                      value={form.occasion}
                      onChange={handleChange}
                    >
                      <option value="" disabled>Select one</option>
                      <option>Dinner</option>
                      <option>Anniversary</option>
                      <option>Business Dinner</option>
                      <option>Private Event</option>
                      <option>Birthday</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="cp-field">
                    <label className="cp-field-label" htmlFor="guests">Number of Guests</label>
                    <select
                      id="guests"
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                    >
                      <option value="" disabled>Select</option>
                      <option>1 – 2</option>
                      <option>3 – 4</option>
                      <option>5 – 8</option>
                      <option>9 – 15</option>
                      <option>16 – 30</option>
                      <option>30+</option>
                    </select>
                  </div>
                </div>

                {/* Date */}
                <div className="cp-field--full">
                  <label className="cp-field-label" htmlFor="date">Preferred Date</label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                  />
                </div>

                {/* Message */}
                <div className="cp-field--full">
                  <label className="cp-field-label" htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Any special requests, dietary requirements or notes for the kitchen..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                {/* Submit */}
                <div className="cp-submit-row">
                  <p className="cp-submit-note">
                    We respond within 24 hours. For same-day reservations, please call us directly.
                  </p>
                  <button className="cp-submit-btn" type="submit">
                    <span>Send Message</span>
                    <ArrowIcon />
                  </button>
                </div>

              </form>
            </>
          )}
        </div>
      </div>

      {/* ── BOTTOM STRIP ── */}
      <div className="cp-bottom-strip">
        <div className="cp-map-embed">
          <iframe
            title="TERRA Restaurant — Lörrach"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.8!2d7.6614!3d47.6154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791b6d1e2b2b2b3%3A0x1234567890abcdef!2sBasler+Str.+48%2C+79539+L%C3%B6rrach%2C+Germany!5e0!3m2!1sen!2sde!4v1700000000000!5m2!1sen!2sde"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="cp-coords">
          <h3 className="cp-coords-title">
            Find us in<br /><em>Lörrach.</em>
          </h3>
          <div className="cp-coords-list">
            <div className="cp-coords-item">
              <span className="cp-coords-icon">📍</span>
              <div className="cp-coords-text">
                <strong>Address</strong>
                Basler Straße 48<br />
                79539 Lörrach, Germany
              </div>
            </div>
            <div className="cp-coords-item">
              <span className="cp-coords-icon">🚆</span>
              <div className="cp-coords-text">
                <strong>By Train</strong>
                Lörrach Bahnhof — 6 min walk
              </div>
            </div>
            <div className="cp-coords-item">
              <span className="cp-coords-icon">🚗</span>
              <div className="cp-coords-text">
                <strong>Parking</strong>
                Parkhaus Stadtmitte — 3 min walk
              </div>
            </div>
            <div className="cp-coords-item">
              <span className="cp-coords-icon">🇨🇭</span>
              <div className="cp-coords-text">
                <strong>From Basel</strong>
                15 min by tram line 8 — Lörrach Zentrum
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Contact;
