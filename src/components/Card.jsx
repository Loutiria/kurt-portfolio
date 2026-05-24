export default function Card({ children, className = "" }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] md:backdrop-blur-xl ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: "linear-gradient(135deg,var(--accent-soft),transparent)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-40"
        style={{
          background: "linear-gradient(to bottom, var(--accent-soft), transparent)",
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}