export function ImageSlot({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center bg-zinc-800 ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_60%)]" />
      <span className="relative px-6 text-center text-xs uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </span>
    </div>
  );
}
