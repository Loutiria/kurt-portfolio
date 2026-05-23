import { useState } from "react";
import { CheckCircle, Download } from "lucide-react";

export default function DownloadResumeButton({
  className = "",
}) {
  const [downloaded, setDownloaded] =
    useState(false);

  const handleDownload = () => {
    setDownloaded(true);

    setTimeout(() => {
      window.location.href =
        "/Kurt-Panolino-Resume.pdf";
    }, 350);

    setTimeout(() => {
      setDownloaded(false);
    }, 1800);
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-4 font-semibold transition hover:bg-white/10 ${className}`}
      onMouseEnter={(e) =>
        (e.currentTarget.style.borderColor =
          "var(--accent)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderColor = "")
      }
    >
      {downloaded ? (
        <>
          Ready{" "}
          <CheckCircle
            size={18}
            style={{
              color: "var(--accent)",
            }}
          />
        </>
      ) : (
        <>
          Download Resume{" "}
          <Download size={18} />
        </>
      )}
    </button>
  );
}