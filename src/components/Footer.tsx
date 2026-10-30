import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site-data";
import { ImageSlot } from "./ImageSlot";
import { InstagramIcon } from "./icons/SocialIcons";

export function Footer() {
  return (
    <footer
      id="ubicacion"
      className="border-t border-zinc-900 bg-zinc-950 px-6 pt-30 pb-10 md:px-8"
    >
      <div className="mx-auto flex max-w-[1320px] flex-col gap-24">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-7">
            <span className="text-xs font-semibold tracking-[0.3em] text-cyan-400 uppercase">
              Ubicación
            </span>
            <h2 className="text-[clamp(40px,5vw,64px)] leading-[1.05] font-bold">
              Tu próximo corte <em className="font-serif italic">te espera.</em>
            </h2>
            <div className="grid grid-cols-2 gap-7 text-[15px] leading-[1.7] text-zinc-300">
              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] tracking-[0.22em] text-[#c5a880] uppercase">
                  Dirección
                </span>
                <span>
                  Bv. Oroño 1234
                  <br />
                  Rosario, Santa Fe
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] tracking-[0.22em] text-[#c5a880] uppercase">
                  Horarios
                </span>
                <span>
                  Mar a Sáb · 10 a 21 h
                  <br />
                  Dom y Lun · Cerrado
                </span>
              </div>
            </div>
            <a
              href={waLink()}
              target="_blank"
              className="inline-flex self-start items-center gap-3 rounded-sm bg-zinc-50 px-8 py-4.5 text-[13px] font-bold tracking-[0.1em] text-zinc-950 uppercase transition-shadow hover:shadow-[-8px_0_32px_rgba(217,70,239,0.5),8px_0_32px_rgba(6,182,212,0.5)]"
            >
              <MessageCircle className="h-[17px] w-[17px]" />
              <span>Reservar turno por WhatsApp</span>
            </a>
          </div>
          <div className="h-105 border border-zinc-800 grayscale invert-[0.92]">
            <ImageSlot label="Mapa / fachada del local" />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-5 border-t border-zinc-900 pt-8 text-xs tracking-[0.06em] text-zinc-500">
          <span className="font-serif text-xl font-extrabold tracking-[0.22em] text-zinc-50">
            DAVID
          </span>
          <span>© 2026 David Barbería de Autor · Rosario</span>
          <div className="flex gap-4 text-zinc-50">
            <a href="https://instagram.com" target="_blank" aria-label="Instagram">
              <InstagramIcon className="h-[17px] w-[17px]" />
            </a>
            <a href={waLink()} target="_blank" aria-label="WhatsApp">
              <MessageCircle className="h-[17px] w-[17px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
