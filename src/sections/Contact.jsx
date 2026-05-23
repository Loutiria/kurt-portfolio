import { useState } from "react";
import { Mail, Phone, MapPin, ExternalLink, Clock, Target, Send } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    botField: "",
  });

  const [formError, setFormError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
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
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setFormError("Please complete all fields before sending.");
      return;
    }

    if (!emailPattern.test(formData.email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    if (formData.message.length < 20) {
      setFormError("Please write a more complete message before sending.");
      return;
    }

    if (formData.message.length > 1200) {
      setFormError("Please keep the message under 1,200 characters.");
      return;
    }

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "portfolio-contact",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          botField: formData.botField,
        }),
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
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
        title="Let’s connect for administrative, operations, or project support roles."
        description="Submit the form below to send a message through Netlify Forms."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <h3 className="text-2xl font-bold">Contact Information</h3>

          <div className="mt-7 space-y-5 text-slate-300">
            <a
              href="mailto:kurutopanorino@gmail.com"
              className="flex items-center gap-4 transition hover:text-cyan-300"
            >
              <Mail className="text-cyan-300" /> kurutopanorino@gmail.com
            </a>

            <p className="flex items-center gap-4">
              <Phone className="text-cyan-300" /> Phone available upon request
            </p>

            <p className="flex items-center gap-4">
              <MapPin className="text-cyan-300" /> Iloilo City, Philippines
            </p>

            <a
              href="https://www.linkedin.com/in/kurt-panolino-8a5ab4410/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 transition hover:text-cyan-300"
            >
              <ExternalLink className="text-cyan-300" /> LinkedIn Profile
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-slate-400">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <Clock className="mb-3 text-cyan-300" />
              Responsive within available hours
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <Target className="mb-3 text-cyan-300" />
              Open to remote support roles
            </div>
          </div>
        </Card>

        <Card>
          <form
            name="portfolio-contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="botField"
            className="grid gap-4"
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

            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Your Name"
                required
                className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/60"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email Address"
                required
                className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/60"
              />
            </div>

            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              type="text"
              placeholder="Subject"
              required
              className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/60"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              className="min-h-36 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/60"
            />

            {formError && (
              <p className="rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {formError}
              </p>
            )}

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-4 font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Send Message <Send size={18} />
            </button>

            <p className="text-xs leading-6 text-slate-500">
              Protected with required fields, email validation, message length
              limits, and a hidden anti-spam honeypot.
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
}