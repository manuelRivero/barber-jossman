import Image from "next/image";
import { gallery } from "@/lib/site-data";

export function Gallery() {
  return (
    <section className="bg-zinc-950 py-1">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {gallery.map((g) => (
          <div
            key={g.id}
            className="relative h-[520px] grayscale transition-[filter] duration-500 hover:grayscale-0"
          >
            <div className="absolute inset-0 bg-[#09090b]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(217,70,239,0.16),transparent_55%),radial-gradient(circle_at_85%_90%,rgba(6,182,212,0.14),transparent_55%)]" />
            <Image
              src={g.image}
              alt={g.label}
              fill
              className="relative object-cover object-top"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
