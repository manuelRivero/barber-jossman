import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Studio() {
  return (
    <section
      id="estudio"
      className="bg-[#f4f4f0] px-6 py-35 text-[#111113] md:px-8"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-24 lg:grid-cols-2">
        <div className="flex max-w-[540px] flex-col gap-7">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#c5a880] uppercase">
            El Estudio
          </span>
          <h2 className="text-[clamp(40px,5vw,68px)] leading-[1.04] font-bold text-balance">
            Esculpiendo estilo con <em className="font-serif italic">precisión quirúrgica.</em>
          </h2>
          <p className="text-[17px] leading-[1.7] text-zinc-700 text-pretty">
            Entrás, te servimos un trago de cortesía y suena buena música. Acá el
            turno no es un trámite: es una hora para vos, en un estudio pensado
            como una galería.
          </p>
          <p className="text-[17px] leading-[1.7] text-zinc-700 text-pretty">
            Trabajamos con técnica clásica de tijera y navaja, y con el lenguaje
            urbano del fade. Cada corte se estudia según tu cráneo, tu pelo y tu
            forma de llevarlo.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-8">
            <a
              href="#servicios"
              className="rounded-sm bg-[#111113] px-8 py-4.5 text-[13px] font-bold tracking-[0.1em] text-zinc-50 uppercase transition-colors hover:bg-zinc-800"
            >
              Ver servicios
            </a>
            <a
              href="#barberos"
              className="flex items-center gap-2.5 border-b border-[#111113] pb-1 text-[13px] font-bold tracking-[0.1em] uppercase hover:border-purple-500 hover:text-purple-500"
            >
              Conocer al equipo <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="relative grid grid-cols-1 gap-6 lg:block lg:h-[620px] lg:gap-0">
          <div className="relative aspect-[3/4] w-full lg:absolute lg:top-0 lg:right-0 lg:aspect-[518/482] lg:w-[68%]">
            <span className="pointer-events-none absolute -top-3 -left-3 h-9 w-9 border-t-2 border-l-2 border-[#c5a880]" />
            <span className="pointer-events-none absolute -top-1.5 -left-1.5 h-5 w-5 border-t-2 border-l-2 border-[#c5a880]/60" />
            <span className="pointer-events-none absolute -right-3 -bottom-3 h-9 w-9 border-r-2 border-b-2 border-[#c5a880]" />
            <span className="pointer-events-none absolute -right-1.5 -bottom-1.5 h-5 w-5 border-r-2 border-b-2 border-[#c5a880]/60" />
            <div className="relative h-full w-full overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)] lg:shadow-[0_40px_80px_rgba(0,0,0,0.35)]">
              <div className="absolute inset-0 bg-[#09090b]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(217,70,239,0.16),transparent_55%),radial-gradient(circle_at_85%_90%,rgba(6,182,212,0.14),transparent_55%)]" />
              <Image
                src="/image-fade.png"
                alt="Interior del estudio · sillón de barbero"
                fill
                className="relative object-cover grayscale contrast-125"
              />
            </div>
          </div>
          <div className="relative aspect-[3/4] w-full lg:absolute lg:bottom-0 lg:left-0 lg:aspect-[417/599] lg:w-[52%]">
            <span className="pointer-events-none absolute -top-3 -left-3 h-9 w-9 border-t-2 border-l-2 border-[#c5a880]" />
            <span className="pointer-events-none absolute -top-1.5 -left-1.5 h-5 w-5 border-t-2 border-l-2 border-[#c5a880]/60" />
            <span className="pointer-events-none absolute -right-3 -bottom-3 h-9 w-9 border-r-2 border-b-2 border-[#c5a880]" />
            <span className="pointer-events-none absolute -right-1.5 -bottom-1.5 h-5 w-5 border-r-2 border-b-2 border-[#c5a880]/60" />
            <div className="relative h-full w-full overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)] lg:shadow-[0_40px_90px_rgba(0,0,0,0.45)]">
              <div className="absolute inset-0 bg-[#09090b]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(217,70,239,0.16),transparent_55%),radial-gradient(circle_at_85%_90%,rgba(6,182,212,0.14),transparent_55%)]" />
              <Image
                src="/image-barba.png"
                alt="Detalle · navaja sobre nuca"
                fill
                className="relative object-cover grayscale contrast-125"
              />
            </div>
          </div>
          <div className="hidden lg:absolute lg:top-10 lg:left-[8%] lg:block lg:h-35 lg:w-px lg:bg-[#c5a880]" />
        </div>
      </div>
    </section>
  );
}
