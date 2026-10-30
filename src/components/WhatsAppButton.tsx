import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site-data";

export function WhatsAppButton() {
  return (
    <a
      href={waLink()}
      target="_blank"
      aria-label="WhatsApp"
      className="fixed right-6 bottom-6 z-60 flex h-14.5 w-14.5 items-center justify-center rounded-full border border-fuchsia-500 bg-zinc-950 text-zinc-50 shadow-[0_0_24px_rgba(217,70,239,0.45)] transition-[box-shadow,border-color] hover:border-cyan-500 hover:shadow-[0_0_28px_rgba(6,182,212,0.6)]"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
