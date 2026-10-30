"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { quotes, stats } from "@/lib/site-data";

const AUTOPLAY_MS = 7000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(
    undefined
  );

  function go(delta: number) {
    setIndex((i) => (i + delta + quotes.length) % quotes.length);
  }

  function startAuto() {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => go(1), AUTOPLAY_MS);
  }

  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const quote = quotes[index];

  return (
    <section className="bg-[radial-gradient(ellipse_at_50%_100%,#18181b_0%,#09090b_65%)] px-6 py-35 md:px-8">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-14 text-center">
        <span className="h-10 font-serif text-[96px] leading-[0.5] text-[#c5a880]">
          &ldquo;
        </span>
        <blockquote className="flex min-h-[3.9em] items-center font-serif text-[clamp(28px,3.6vw,48px)] leading-[1.3] font-medium text-balance italic">
          {quote.text}
        </blockquote>
        <div className="flex flex-col gap-1.5">
          <span className="text-[13px] font-bold tracking-[0.22em] uppercase">
            {quote.author}
          </span>
          <span className="text-[13px] text-zinc-500">{quote.detail}</span>
        </div>
        <div className="flex items-center gap-5">
          <button
            onClick={() => {
              go(-1);
              startAuto();
            }}
            aria-label="Anterior"
            className="flex h-12 w-12 items-center justify-center border border-zinc-700 text-zinc-50 transition-colors hover:border-cyan-500"
          >
            <ChevronLeft className="h-[18px] w-[18px]" />
          </button>
          <div className="flex gap-2">
            {quotes.map((_, i) => (
              <span
                key={i}
                className="h-0.5 w-7 transition-colors"
                style={{ background: i === index ? "#d946ef" : "#3f3f46" }}
              />
            ))}
          </div>
          <button
            onClick={() => {
              go(1);
              startAuto();
            }}
            aria-label="Siguiente"
            className="flex h-12 w-12 items-center justify-center border border-zinc-700 text-zinc-50 transition-colors hover:border-fuchsia-500"
          >
            <ChevronRight className="h-[18px] w-[18px]" />
          </button>
        </div>
        <div className="mt-10 grid w-full grid-cols-1 border-t border-zinc-800 sm:grid-cols-3">
          {stats.map((st) => (
            <div key={st.label} className="flex flex-col gap-2.5 px-6 pt-12">
              <span className="font-serif text-[56px] font-bold">
                {st.value}
              </span>
              <span className="text-xs tracking-[0.22em] text-zinc-400 uppercase">
                {st.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
