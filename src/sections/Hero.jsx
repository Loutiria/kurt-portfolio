import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Phone, MapPin, Layers } from "lucide-react";
import Card from "../components/Card";

function AvailabilityBadge() {
  return (
    <motion.div
      animate={{
        boxShadow: [
          "0 0 0px var(--accent-soft)",
          "0 0 28px var(--accent-soft)",
          "0 0 0px var(--accent-soft)",
        ],
      }}
      transition={{ repeat: Infinity, duration: 2.4 }}
      className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
      style={{
        borderColor: "var(--accent)",
        backgroundColor: "var(--accent-soft)",
        color: "var(--accent)",
      }}
    >
      <span className="h-2 w-2 rounded-full bg-emerald-300" />
      Available for VA and operations support roles
    </motion.div>
  );
}

function HeroVisual() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl"
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p
            className="text-sm uppercase tracking-[0.25em]"
            style={{ color: "var(--accent)" }}
          >
            Digital Operations Board
          </p>
          <h3 className="mt-2 text-2xl font-black">Kurt Panolino</h3>
        </div>

        <div
          className="grid h-14 w-14 place-items-center rounded-2xl border font-black"
          style={{
            borderColor: "var(--accent)",
            backgroundColor: "var(--accent-soft)",
            color: "var(--accent)",
          }}
        >
          KP
        </div>
      </div>

      {[
        ["Documentation", "Organized"],
        ["Expense Tracking", "Monitored"],
        ["Event Coordination", "Supported"],
        ["Digital Files", "Structured"],
      ].map(([task, status]) => (
        <div
          key={task}
          className="mb-3 flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
        >
          <span className="text-sm text-slate-300">{task}</span>
          <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
            {status}
          </span>
        </div>
      ))}
    </motion.div>
  );
}

export default function Hero({ scrollTo }) {
  return (
    <section
      id="hero"
      className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-[1.08fr_0.92fr]"
    >
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <AvailabilityBadge />

        <h1 className="mt-6 max-w-3xl bg-gradient-to-b from-white to-slate-300 bg-clip-text text-5xl font-black leading-[0.98] tracking-[-0.06em] text-transparent md:text-6xl">
          Organized digital support for cleaner workflows and reliable
          execution.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I support administrative tasks, documentation, data entry, event
          coordination, file organization, expense tracking, and creative or
          web-based project workflows with accuracy and structure.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <button
            onClick={() => scrollTo("experience")}
            className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 font-semibold text-slate-950 transition hover:opacity-90"
            style={{ backgroundColor: "var(--accent)" }}
          >
            View Resume <ArrowRight size={18} />
          </button>

          <button
            onClick={() => scrollTo("projects")}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-4 font-semibold transition hover:bg-white/10"
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
          >
            View Projects <Layers size={18} />
          </button>

          <a
            href="/Kurt-Panolino-Resume.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-4 font-semibold transition hover:bg-white/10"
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
          >
            Download Resume <Download size={18} />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <Card className="relative overflow-hidden p-8">
          <div
            className="absolute right-0 top-0 h-32 w-32 rounded-bl-full"
            style={{ backgroundColor: "var(--accent-soft)" }}
          />

          <p
            className="text-sm uppercase tracking-[0.3em]"
            style={{ color: "var(--accent)" }}
          >
            Profile
          </p>

          <h2 className="mt-5 text-4xl font-black">Kurt Panolino</h2>

          <p className="mt-3 text-lg text-slate-300">
            Virtual Assistant | Administrative & Digital Operations Support
          </p>

          <div className="mt-8 space-y-4 text-slate-300">
            <p className="flex items-center gap-3">
              <MapPin size={18} style={{ color: "var(--accent)" }} />
              Iloilo City, Philippines
            </p>

            <p className="flex items-center gap-3">
              <Mail size={18} style={{ color: "var(--accent)" }} />
              kurutopanorino@gmail.com
            </p>

            <p className="flex items-center gap-3">
              <Phone size={18} style={{ color: "var(--accent)" }} />
              Phone available upon request
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-sm leading-7 text-slate-400">Primary value</p>
            <p className="mt-1 font-semibold text-white">
              Reliable documentation, coordination, digital organization, and
              operations support.
            </p>
          </div>
        </Card>

        <div className="mt-6">
          <HeroVisual />
        </div>
      </motion.div>
    </section>
  );
}