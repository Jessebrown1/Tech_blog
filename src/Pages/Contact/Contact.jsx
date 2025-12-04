import React, { useState } from "react";
import "./Contact.css";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    // Simulate network submit — replace with fetch/axios to your endpoint
    setTimeout(() => {
      if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
        setStatus("error");
        return;
      }
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 700);
  }

  return (
    <section className="contact-wrapper" aria-labelledby="contact-heading">
      <div className="contact-container">
        {/* LEFT: Image panel with overlay */}
        <div
          className="contact-image-panel"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop')",
          }}
          aria-hidden="true"
        >
          <div className="overlay">
            <h1 id="contact-heading">Let's Connect</h1>
            <p>
              Have a question or collaboration idea? Reach out — I usually reply within 24 hours.
            </p>
          </div>
        </div>

        {/* RIGHT: Contact form */}
        <form className="contact-form" onSubmit={handleSubmit} noValidate aria-describedby="form-status">
          <h2>Send a Message</h2>

          <div className="row">
            <label className="field">
              <span>Name</span>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </label>

            <label className="field">
              <span>Email</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </label>
          </div>

          <label className="field">
            <span>Subject</span>
            <input
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
            />
          </label>

          <label className="field">
            <span>Message</span>
            <textarea
              name="message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </label>

          <button className="send-btn" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          <div id="form-status" role="status" aria-atomic="true">
            {status === "success" && <p className="msg success">Message sent — I’ll reply soon.</p>}
            {status === "error" && <p className="msg error">Please fill in all required fields.</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
