import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Clock,
  Target,
  Send,
  Download,
  CheckCircle,
} from "lucide-react";

import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    botField: "",
  });

  const [formError, setFormError] = useState("");

  const gmailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=kurutopanorino@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Kurt%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError("");

    const emailPattern = /^[^ @]+@[^ @]+\.[^ @]+$/;

    if (formData.botField) return;

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setFormError("Please complete all fields before sending.");
      return;
    }

    if (!emailPattern.test(formData.email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    if (formData.message.length < 15) {
      setFormError("Please write a more complete message before sending.");
      return;
    }

    if (formData.message.length > 700) {
      setFormError("Please keep the message under 700 characters.");
      return;
    }

    try {
      await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encode({
          "form-name": "portfolio-contact",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          botField: formData.botField,
        }),
      });

      setFormData({
        name: "",
        email: "",
        message: "",
        botField: "",
      });

      alert("Message sent successfully.");
    } catch {
      setFormError("Message failed to send. Please email me directly instead.");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        label="Contact"
        title="Let’s work together."
        description="Open to Virtual Assistant, administrative support, documentation, coordination, and digital operations support opportunities."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <Card className="p-8">
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium"
            style={{
              borderColor: "var(--accent)",
              backgroundColor: "var(--accent-soft)",
              color: "var(--accent)",
            }}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            Currently available for remote and part-time roles
          </div>

          <h3 className="text-3xl font-black tracking-tight text-white">
            Need organized support for admin, events, or digital workflows?
          </h3>

          <p className="mt-5 max-w-2xl leading-8 text-slate-300">
            I can support teams with documentation, file organization, data
            entry, event coordination, expense tracking, email communication,
            and structured digital operations.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Virtual Assistant Support",
              "Administrative Documentation",
              "Event Coordination",
              "Digital Operations Support",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-slate-300"
              >
                <CheckCircle
                  size={18}
                  style={{ color: "var(--accent)" }}
                />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href={gmailLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-[var(--accent)]"
            >
              <Mail style={{ color: "var(--accent)" }} />
              <div>
                <p className="font-semibold text-slate-200">Email</p>
                <p className="text-sm text-slate-400">
                  kurutopanorino@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/kurt-panolino-8a5ab4410/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-[var(--accent)]"
            >
              <ExternalLink style={{ color: "var(--accent)" }} />
              <div>
                <p className="font-semibold text-slate-200">LinkedIn</p>
                <p className="text-sm text-slate-400">View profile</p>
              </div>
            </a>

            <a
              href="/Kurt-Panolino-Resume.pdf"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-[var(--accent)]"
            >
              <Download style={{ color: "var(--accent)" }} />
              <div>
                <p className="font-semibold text-slate-200">Resume</p>
                <p className="text-sm text-slate-400">Download PDF</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
              <MapPin style={{ color: "var(--accent)" }} />
              <div>
                <p className="font-semibold text-slate-200">Location</p>
                <p className="text-sm text-slate-400">
                  Iloilo City, Philippines
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-slate-400">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <Clock className="mb-3" style={{ color: "var(--accent)" }} />
              Responsive within available hours
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <Target className="mb-3" style={{ color: "var(--accent)" }} />
              Open to remote support roles
            </div>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-2xl font-bold text-white">Quick Inquiry</h3>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Send a short message. For formal applications, email or LinkedIn is
            recommended.
          </p>

          <form
            name="portfolio-contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="botField"
            className="mt-6 grid gap-4"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="portfolio-contact" />

            <p className="hidden">
              <label>
                Do not fill this out:
                <input
                  name="botField"
                  value={formData.botField}
                  onChange={handleChange}
                />
              </label>
            </p>

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Your Name"
              required
              className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-[var(--accent)]"
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email Address"
              required
              className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-[var(--accent)]"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Short message"
              required
              className="min-h-28 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-[var(--accent)]"
            />

            {formError && (
              <p className="rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {formError}
              </p>
            )}

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 font-semibold text-slate-950 transition hover:opacity-90"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Send Message <Send size={18} />
            </button>

            <p className="text-xs leading-6 text-slate-500">
              Protected with required fields, email validation, message length
              limits, and an anti-spam honeypot.
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
}