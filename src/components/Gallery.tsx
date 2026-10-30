import { gallery } from "@/lib/site-data";
import { ImageSlot } from "./ImageSlot";

export function Gallery() {
  return (
    <section className="bg-zinc-950 py-1">
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
        {gallery.map((g) => (
          <div
            key={g.id}
            className="h-[520px] grayscale transition-[filter] duration-500 hover:grayscale-0"
          >
            <ImageSlot label={g.label} />
          </div>
        ))}
      </div>
    </section>
  );
}
