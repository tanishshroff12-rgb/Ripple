export default function Card({ title, subtitle, children }) {
  return (
    <div className="rounded-2xl bg-white border border-black/10 shadow-soft p-6">
      <div className="text-sm text-neutral-600">{subtitle}</div>
      <h3 className="mt-1 text-xl font-semibold">{title}</h3>
      <div className="mt-4 text-neutral-700">{children}</div>
    </div>
  );
}
