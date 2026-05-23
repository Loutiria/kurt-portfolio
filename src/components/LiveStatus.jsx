import { useEffect, useState } from "react";

export default function LiveStatus() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("en-PH", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    update();

    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <p
        className="text-xs uppercase tracking-[0.25em]"
        style={{ color: "var(--accent)" }}
      >
        System Status
      </p>

      <div className="mt-4 grid gap-3 text-sm">
        <div className="flex justify-between">
          <span className="text-slate-400">Availability</span>
          <span className="text-emerald-300">Open</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Timezone</span>
          <span className="text-slate-200">
            Philippines
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Local Time</span>
          <span className="text-slate-200">{time}</span>
        </div>
      </div>
    </div>
  );
}