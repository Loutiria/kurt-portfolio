import { CheckCircle, Sparkles, ArrowRight } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import { atsKeywords, metrics, trustIndicators } from "../data/portfolioData";

export default function RecruiterTrust({ scrollTo }) {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-4 md:grid-cols-4">
          {metrics.map(([value, label]) => (
            <Card key={label}>
              <p
                className="text-2xl font-black"
                style={{ color: "var(--accent)" }}
              >
                {value}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{label}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
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
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          label="Recruiter Trust"
          title="Signals that support reliability, structure, and practical experience."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {trustIndicators.map((item) => (
            <Card key={item}>
              <CheckCircle className="text-emerald-300" />
              <p className="mt-4 font-semibold text-slate-200">{item}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
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
                <Sparkles size={16} /> Recruiter CTA
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
              onClick={() => scrollTo("contact")}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl px-6 py-4 font-semibold text-slate-950 transition hover:opacity-90"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Start a Conversation <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}