import { Mail, MapPin } from "lucide-react";

import MotionSection from "../components/MotionSection";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

export default function Contact() {
  return (
    <MotionSection className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        label="Contact"
        title="Open for digital support, project assistance, and coordination work."
        description="For opportunities, collaborations, or operational support inquiries."
      />

      <div className="grid gap-8">
        <Card className="relative overflow-hidden border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-transparent">
          {/* Ambient Glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(circle at top left, var(--accent-soft), transparent 45%)",
            }}
          />

          <div className="relative z-10 space-y-8">
            <div>
              <h3 className="text-3xl font-black">
                Contact Information
              </h3>

              <p className="mt-4 max-w-3xl leading-8 text-slate-300">
                Available for administrative support,
                coordination assistance, documentation
                workflows, and digital project tasks.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {/* EMAIL */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=kurutopanorino@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-black/20 p-6 transition duration-300 hover:-translate-y-1 hover:border-red-400/40 hover:bg-black/30"
              >
                <div
                  className="rounded-2xl p-4 transition group-hover:scale-110"
                  style={{
                    backgroundColor:
                      "rgba(239,68,68,0.12)",
                  }}
                >
                  <Mail
                    size={22}
                    style={{
                      color: "#f87171",
                    }}
                  />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Email
                  </p>

                  <p className="mt-1 text-lg font-semibold text-white break-all">
                    kurutopanorino@gmail.com
                  </p>
                </div>
              </a>

              {/* LOCATION */}
              <a
                href="https://maps.google.com/?q=Iloilo+City+Philippines"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-black/20 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-black/30"
              >
                <div
                  className="rounded-2xl p-4 transition group-hover:scale-110"
                  style={{
                    backgroundColor:
                      "rgba(59,130,246,0.12)",
                  }}
                >
                  <MapPin
                    size={22}
                    style={{
                      color: "#60a5fa",
                    }}
                  />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Location
                  </p>

                  <p className="mt-1 text-lg font-semibold text-white">
                    Iloilo City, Philippines
                  </p>
                </div>
              </a>

              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/kurt.panolino.819085"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-black/20 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-black/30"
              >
                <div
                  className="flex h-[56px] w-[56px] items-center justify-center rounded-2xl transition group-hover:scale-110"
                  style={{
                    backgroundColor:
                      "rgba(37,99,235,0.14)",
                  }}
                >
                  <span
                    className="text-[34px] font-black leading-none"
                    style={{
                      color: "#3b82f6",
                      fontFamily:
                        "Arial, Helvetica, sans-serif",
                    }}
                  >
                    f
                  </span>
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Facebook
                  </p>

                  <p className="mt-1 text-lg font-semibold text-white">
                    kurt.panolino.819085
                  </p>
                </div>
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/639929758058"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-black/20 p-6 transition duration-300 hover:-translate-y-1 hover:border-green-400/40 hover:bg-black/30"
              >
                <div
                  className="flex h-[56px] w-[56px] items-center justify-center rounded-2xl transition group-hover:scale-110"
                  style={{
                    backgroundColor:
                      "rgba(34,197,94,0.14)",
                  }}
                >
                  <span
                    className="text-sm font-black tracking-[0.08em]"
                    style={{
                      color: "#22c55e",
                    }}
                  >
                    WA
                  </span>
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-lg font-semibold text-white">
                    +63 992 975 8058
                  </p>
                </div>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </MotionSection>
  );
}