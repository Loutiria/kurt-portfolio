export default function SectionDivider() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="relative h-px overflow-hidden bg-white/5">
        <div
          className="absolute inset-y-0 left-0 w-40"
          style={{
            background: `linear-gradient(to right, transparent, var(--accent), transparent)`,
          }}
        />
      </div>
    </div>
  );
}