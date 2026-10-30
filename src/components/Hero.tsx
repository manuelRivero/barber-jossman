import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { waLink } from "@/lib/site-data";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[70vh] flex-1 items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_30%_20%,#18181b_0%,#09090b_60%)]"
    >
      <div className="absolute inset-0">
        <Image
          src="/barber-hero.jpeg"
          alt="Busto del David · taper fade · gafas oscuras · neón magenta/cian"
          fill
          priority
          className="object-cover object-[center_22%]"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 via-black/20 to-black/35" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_60%,rgba(217,70,239,0.18),transparent_40%),radial-gradient(circle_at_85%_35%,rgba(6,182,212,0.16),transparent_40%)]" />
      <div className="relative z-10 flex max-w-[1100px] flex-col items-center gap-8 px-6 py-30 text-center">
        <span className="pointer-events-none text-xs font-semibold tracking-[0.3em] text-cyan-400 uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          Estudio de barbería de autor
        </span>
        <h1 className="pointer-events-none text-[clamp(48px,8.5vw,124px)] leading-[0.98] font-bold tracking-tight text-zinc-50 text-balance drop-shadow-[0_4px_30px_rgba(0,0,0,0.85)]">
          El arte clásico del{" "}
          <em className="font-serif font-bold italic text-zinc-50 underline decoration-fuchsia-500 decoration-2 underline-offset-[14px]">
            corte moderno.
          </em>
        </h1>
        <a
          href={waLink()}
          target="_blank"
          className="group pointer-events-auto inline-flex items-center gap-3 rounded-sm bg-zinc-50 px-9 py-5 text-sm font-bold tracking-[0.08em] text-zinc-950 uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[-10px_0_40px_rgba(217,70,239,0.55),10px_0_40px_rgba(6,182,212,0.55)]"
        >
          <MessageCircle className="h-[18px] w-[18px]" />
          <span>Reservar turno por WhatsApp</span>
        </a>
      </div>
      <div className="pointer-events-none absolute bottom-9 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <div className="flex h-9 w-5.5 items-start justify-center rounded-full border border-zinc-50/50 pt-1.5">
          <div className="h-2 w-0.5 animate-[scroll-dot_1.8s_ease-in-out_infinite] rounded-full bg-cyan-400" />
        </div>
        <span className="text-[10px] tracking-[0.3em] text-zinc-500 uppercase">Scroll</span>
      </div>
    </section>
  );
}
