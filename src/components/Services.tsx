import { Crown, Droplets, Scissors, Sparkles, type LucideIcon } from "lucide-react";
import { services } from "@/lib/site-data";

const icons: Record<string, LucideIcon> = {
  Scissors,
  Droplets,
  Sparkles,
  Crown,
};

export function Services() {
  return (
    <section
      id="servicios"
      className="bg-[#f4f4f0] px-6 pt-10 pb-35 text-[#111113] md:px-8"
    >
      <div className="mx-auto max-w-[1280px] border-t border-zinc-300 pt-30">
        <h2 className="mb-20 text-center text-[clamp(40px,5vw,64px)] font-bold">
          Nuestros{" "}
          <em className="font-serif italic underline decoration-fuchsia-500 decoration-[1.5px] underline-offset-[12px]">
            Servicios
          </em>
        </h2>
        <div className="grid grid-cols-1 border-l border-zinc-300 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = icons[s.icon];
            return (
              <div
                key={s.title}
                className="flex flex-col gap-5 border-r border-zinc-300 px-9 pt-4 pb-6 transition-colors hover:bg-[#ecece6]"
              >
                <Icon className="h-[34px] w-[34px] stroke-[1.2]" />
                <h3 className="text-[28px] leading-[1.1] font-bold">{s.title}</h3>
                <p className="flex-1 text-[15px] leading-[1.65] text-zinc-600">
                  {s.desc}
                </p>
                <span className="self-start border border-[#111113] px-3 py-2 text-[11px] font-bold tracking-[0.22em]">
                  DESDE {s.from}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
