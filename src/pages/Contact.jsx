import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    budget: "",
    timeline: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Message submitted! (Demo form)");
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      budget: "",
      timeline: "",
      message: "",
    });
  }

  return (
    <div className="page">
      <div className="contact-header">
        <h1>Get In Touch</h1 >
        <p>
          Ready to start your next project? I’d love to hear from you. Send a
          message and I’ll respond as soon as possible.
        </p>
      </div>

      <div className="contact-grid">
        {/* LEFT: CONTACT INFO */}
        <div className="contact-card">
          <h3>Contact Information</h3>

          <div className="info-item">
            <div className="info-icon">📧</div>
            <div>
              <strong>Email</strong>
              <p>foropo@my.centennialcollege.ca</p>
              <small>Send me an email anytime!</small>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📞</div>
            <div>
              <strong>Phone</strong>
              <p>+1 (647) 000-0000</p>
              <small>Mon–Fri from 9am to 6pm</small>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📍</div>
            <div>
              <strong>Location</strong>
              <p>Scarborough, ON, Canada</p>
              <small>Available for remote work</small>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">⏱️</div>
            <div>
              <strong>Response Time</strong>
              <p>Within 24 hours</p>
              <small>I’ll get back to you quickly</small>
            </div>
          </div>

          <hr />

          <h4 className="follow-title">Follow Me</h4>
          <p className="follow-links">
            GitHub: <a href="https://github.com/" target="_blank" rel="noreferrer">github.com</a>
            <br />
            LinkedIn: <a href="https://linkedin.com/" target="_blank" rel="noreferrer">linkedin.com</a>
          </p>
        </div>

        {/* RIGHT: FORM */}
        <div className="contact-card">
          <h3>Send Me a Message</h3>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="row-2">
              <div>
                <label>First Name *</label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="Your first name"
                  required
                />
              </div>

              <div>
                <label>Last Name *</label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Your last name"
                  required
                />
              </div>
            </div>

            <div className="row-2">
              <div>
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label>Phone Number</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label>Subject</label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
              />
            </div>

            <div className="row-2">
              <div>
                <label>Project Budget</label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                >
                  <option value="">Select budget range</option>
                  <option value="under-500">Under $500</option>
                  <option value="500-1000">$500 – $1,000</option>
                  <option value="1000-3000">$1,000 – $3,000</option>
                  <option value="3000-plus">$3,000+</option>
                </select>
              </div>

              <div>
                <label>Timeline</label>
                <select
                  name="timeline"
                  value={form.timeline}
                  onChange={handleChange}
                >
                  <option value="">Select timeline</option>
                  <option value="1-2-weeks">1–2 weeks</option>
                  <option value="3-4-weeks">3–4 weeks</option>
                  <option value="1-2-months">1–2 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div>
              <label>Message *</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project, goals, and any specific requirements..."
                required
              />
            </div>

            <button className="send-btn" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
