import { Download } from "lucide-react";

export default function DownloadResumeButton() {
  return (
    <a
      href="/Kurt-Panolino-Resume.pdf"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-4 font-semibold transition hover:border-[var(--accent)] hover:bg-white/10"
    >
      Download Resume <Download size={18} />
    </a>
  );
}