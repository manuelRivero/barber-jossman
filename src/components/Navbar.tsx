import { Phone } from "lucide-react";
import { navLinks } from "@/lib/site-data";
import { FacebookIcon, InstagramIcon } from "./icons/SocialIcons";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-50/10 bg-zinc-950/70 backdrop-blur-lg">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 items-center gap-6 px-6 py-4 md:grid-cols-[1fr_auto_1fr] md:px-8">
        <a
          href="tel:+5493410000000"
          className="hidden items-center gap-2 text-[13px] tracking-[0.06em] md:flex"
        >
          <Phone className="h-[15px] w-[15px] text-cyan-400" />
          <span>+54 9 341 000-0000</span>
        </a>
        <a
          href="#inicio"
          className="flex flex-col items-center gap-0.5 justify-self-start md:justify-self-auto"
        >
          <span className="font-serif text-2xl font-extrabold tracking-[0.22em] leading-none">
            DAVID
          </span>
          <span className="text-[9px] tracking-[0.42em] text-[#c5a880] uppercase">
            Barbería · Rosario
          </span>
        </a>
        <div className="flex items-center justify-end gap-6">
          <nav className="hidden gap-5 text-xs tracking-[0.12em] text-zinc-300 uppercase lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-fuchsia-400">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-3.5">
            <a href="https://instagram.com" target="_blank" aria-label="Instagram" className="hover:text-fuchsia-400">
              <InstagramIcon className="h-[17px] w-[17px]" />
            </a>
            <a href="https://facebook.com" target="_blank" aria-label="Facebook" className="hover:text-fuchsia-400">
              <FacebookIcon className="h-[17px] w-[17px]" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
