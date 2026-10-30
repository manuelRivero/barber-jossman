import { ArrowUpRight } from "lucide-react";
import { promos, team, waLink } from "@/lib/site-data";
import { ImageSlot } from "./ImageSlot";
import { InstagramIcon } from "./icons/SocialIcons";

export function Team() {
  return (
    <section
      id="barberos"
      className="bg-[#f4f4f0] px-6 py-35 text-[#111113] md:px-8"
    >
      <div className="mx-auto flex max-w-[1320px] flex-col gap-18">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-4.5">
            <span className="text-xs font-semibold tracking-[0.3em] text-[#c5a880] uppercase">
              El Equipo
            </span>
            <h2 className="text-[clamp(40px,5vw,64px)] font-bold">
              Maestros <em className="font-serif italic">Barberos</em>
            </h2>
          </div>
          <p className="max-w-95 text-[15px] leading-[1.65] text-zinc-600">
            Cuatro manos distintas, una misma obsesión por el detalle. Elegí
            con quién reservar.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((t) => (
            <div
              key={t.id}
              className="group relative aspect-3/4 overflow-hidden bg-zinc-900"
            >
              <div className="absolute inset-0 grayscale contrast-[1.15]">
                <ImageSlot label={`Retrato B/N · ${t.name}`} />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/85 to-transparent px-5.5 py-5 text-zinc-50">
                <span className="font-serif text-xl font-bold">{t.name}</span>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end gap-2.5 bg-gradient-to-t from-zinc-950 from-0% via-purple-900/55 via-55% to-cyan-500/15 to-100% p-7 text-zinc-50 opacity-0 transition-opacity duration-450 group-hover:opacity-100">
                <h3 className="text-[28px] font-bold">{t.name}</h3>
                <p className="text-sm text-zinc-300">{t.role}</p>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="mt-1.5 flex items-center gap-2 text-xs tracking-[0.14em] text-cyan-400"
                >
                  <InstagramIcon className="h-[15px] w-[15px]" />
                  <span>{t.ig}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {promos.map((pr) => (
            <div
              key={pr.id}
              className="relative grid min-h-75 grid-cols-1 overflow-hidden border border-zinc-800 bg-zinc-950 text-zinc-50 transition-colors sm:grid-cols-[1.1fr_1fr]"
              style={{ borderColor: undefined }}
            >
              <div className="flex flex-col justify-end gap-4 p-10">
                <h3 className="text-[clamp(26px,2.6vw,34px)] leading-[1.1] font-bold">
                  {pr.title}
                </h3>
                <p className="text-sm leading-[1.6] text-zinc-400">{pr.desc}</p>
                <a
                  href={waLink()}
                  target="_blank"
                  className="mt-2 flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase"
                >
                  Reservar <ArrowUpRight className="h-[15px] w-[15px]" />
                </a>
              </div>
              <div className="relative grayscale">
                <ImageSlot label={pr.img} />
              </div>
              <span
                className="absolute top-4.5 right-4.5 border px-2.5 py-1.5 text-[10px] font-bold tracking-[0.22em] text-zinc-50"
                style={{ borderColor: pr.accent, background: "#09090b" }}
              >
                {pr.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
