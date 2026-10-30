import { MessageCircle } from "lucide-react";
import { prices, waLink } from "@/lib/site-data";

export function Pricing() {
  return (
    <section
      id="precios"
      className="bg-[#f4f4f0] px-6 py-35 text-[#111113] md:px-8"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-22 flex flex-col items-center gap-4.5 text-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#c5a880] uppercase">
            Carta
          </span>
          <h2 className="text-[clamp(40px,5vw,64px)] font-bold">
            Tarifas <em className="font-serif italic">Transparentes</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-x-24 gap-y-14 md:grid-cols-2">
          {prices.map((p) => (
            <div key={p.name} className="flex flex-col gap-2.5">
              {p.featured && (
                <span className="self-start border-b border-fuchsia-500 pb-0.5 text-[10px] font-bold tracking-[0.24em] text-purple-500">
                  ESPECIALIDAD DE LA CASA
                </span>
              )}
              <div className="flex items-baseline gap-3.5">
                <h3 className="text-2xl font-bold whitespace-nowrap">{p.name}</h3>
                <span className="min-w-6 flex-1 -translate-y-1.5 border-b border-dotted border-zinc-400" />
                <span className="text-xl font-semibold tracking-wide">
                  {p.price}
                </span>
              </div>
              <p className="text-sm text-zinc-500">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-22 flex justify-center">
          <a
            href={waLink()}
            target="_blank"
            className="inline-flex items-center gap-3 rounded-sm bg-[#111113] px-8 py-4.5 text-[13px] font-bold tracking-[0.1em] text-zinc-50 uppercase transition-shadow hover:shadow-[0_0_0_1px_#d946ef,0_10px_40px_rgba(217,70,239,0.35)]"
          >
            <MessageCircle className="h-[17px] w-[17px]" />
            <span>Reservar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
