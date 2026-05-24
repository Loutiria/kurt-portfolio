import {
  CheckCircle,
  Sparkles,
  ArrowRight,
  Download,
  MapPin,
  Mail,
  Briefcase,
  Clock,
} from "lucide-react";

import MotionSection from "../components/MotionSection";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

import {
  atsKeywords,
  metrics,
  trustIndicators,
} from "../data/portfolioData";

export function RecruiterSnapshot({ goToPage }) {
  return (
    <MotionSection className="mx-auto max-w-7xl px-6 py-16">
      <div
        className="rounded-[2rem] border p-8 md:p-10"
        style={{
          borderColor: "var(--accent)",
          background:
            "linear-gradient(135deg, var(--accent-soft), rgba(255,255,255,0.04), transparent)",
        }}
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p
              className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em]"
              style={{ color: "var(--accent)" }}
            >
              <Briefcase size={16} />
              Recruiter Snapshot
            </p>

            <h2 className="text-3xl font-black tracking-tight md:text-5xl">
              30-second hiring overview.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Detail-oriented college student with experience in student
              leadership, documentation workflows, liquidation records, event
              coordination, digital organization, web projects, and creative
              support.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Virtual Assistant",
                "Administrative Support",
                "Documentation",
                "Data Entry",
                "Event Coordination",
                "Digital Operations",
                "Canva",
                "Google Workspace",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <Card className="p-6">
            <div className="grid gap-4 text-sm">
              <div className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-2 text-slate-400">
                  <MapPin size={16} /> Location
                </span>
                <span className="font-semibold text-white">
                  Iloilo City, PH
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-2 text-slate-400">
                  <Clock size={16} /> Availability
                </span>
                <span className="font-semibold text-emerald-300">
                  Open
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-2 text-slate-400">
                  <Briefcase size={16} /> Best Fit
                </span>
                <span className="text-right font-semibold text-white">
                  VA / Admin / Ops
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-2 text-slate-400">
                  <Mail size={16} /> Email
                </span>
                <span className="text-right font-semibold text-white">
                  kurutopanorino@gmail.com
                </span>
              </div>
            </div>

            <div className="mt-8 grid gap-3">
              <a
                href="/Kurt-Panolino-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-semibold text-slate-950 transition hover:opacity-90"
                style={{ background: "var(--accent-gradient)" }}
              >
                Download Resume <Download size={18} />
              </a>

              <button
                type="button"
                onClick={() => goToPage("contact")}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-5 py-3 font-semibold text-slate-200 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Contact Me <ArrowRight size={18} />
              </button>
            </div>
          </Card>
        </div>
      </div>
    </MotionSection>
  );
}

export default function RecruiterTrust({ goToPage }) {
  return (
    <>
      <RecruiterSnapshot goToPage={goToPage} />

      <MotionSection className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-4 md:grid-cols-4">
          {metrics.map(([value, label]) => (
            <Card key={label}>
              <p
                className="text-2xl font-black"
                style={{ color: "var(--accent)" }}
              >
                {value}
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                {label}
              </p>
            </Card>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          label="ATS Keywords"
          title="Recruiter-friendly keywords integrated naturally."
          description="These terms match the kind of work expected in Virtual Assistant, administrative support, and digital operations roles."
        />

        <div className="flex flex-wrap gap-3">
          {atsKeywords.map((keyword) => (
            <span
              key={keyword}
              className="rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-sm text-slate-300"
            >
              {keyword}
            </span>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          label="Recruiter Trust"
          title="Signals that support reliability, structure, and practical experience."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {trustIndicators.map((item) => (
            <Card key={item}>
              <CheckCircle className="text-emerald-300" />
              <p className="mt-4 font-semibold text-slate-200">
                {item}
              </p>
            </Card>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="mx-auto max-w-7xl px-6 py-20">
        <div
          className="rounded-[2rem] border bg-white/[0.055] p-8 md:p-12"
          style={{
            borderColor: "var(--accent)",
            background:
              "linear-gradient(135deg, var(--accent-soft), rgba(255,255,255,0.04), rgba(59,130,246,0.08))",
          }}
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p
                className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em]"
                style={{ color: "var(--accent)" }}
              >
                <Sparkles size={16} />
                Recruiter CTA
              </p>

              <h2 className="max-w-3xl text-3xl font-black tracking-tight md:text-5xl">
                Looking for organized operational support?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                I’m open to remote administrative, coordination, documentation,
                creative, and digital support opportunities.
              </p>
            </div>

            <button
              onClick={() => goToPage("contact")}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl px-6 py-4 font-semibold text-slate-950 transition hover:opacity-90"
              style={{ background: "var(--accent-gradient)" }}
            >
              Start a Conversation <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </MotionSection>
    </>
  );
}