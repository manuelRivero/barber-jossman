import { brands } from "@/lib/site-data";
import { ImageSlot } from "./ImageSlot";

export function Atmosphere() {
  return (
    <section className="bg-[radial-gradient(ellipse_at_50%_0%,#18181b_0%,#09090b_70%)] px-6 py-30 md:px-8">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-22">
        <div className="relative h-[clamp(360px,52vw,680px)] overflow-hidden border border-zinc-50/10">
          <div className="absolute inset-0">
            <ImageSlot label="Still cinematográfico del estudio de noche" />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/20 to-zinc-950/75" />
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-7">
            <a
              href="https://instagram.com"
              target="_blank"
              aria-label="Ver reel"
              className="pointer-events-auto relative flex h-28 w-28 items-center justify-center rounded-full border border-zinc-50/60 bg-zinc-50/10 text-zinc-50 backdrop-blur-sm transition-colors hover:bg-fuchsia-500/25"
            >
              <span className="absolute inset-[-1px] rounded-full border border-fuchsia-500 [animation:pulse-ring_2.2s_ease-out_infinite]" />
              <span className="relative pl-1 text-[13px] font-bold tracking-[0.28em]">
                PLAY
              </span>
            </a>
            <span className="font-serif text-[clamp(22px,2.4vw,32px)] italic text-zinc-50">
              Una noche en el estudio
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-9">
          <span className="text-[11px] tracking-[0.3em] text-zinc-500 uppercase">
            Trabajamos con
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-18 gap-y-6">
            {brands.map((b) => (
              <span
                key={b.name}
                className={`text-2xl text-zinc-400 uppercase transition-colors hover:text-zinc-50 ${b.className}`}
              >
                {b.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
