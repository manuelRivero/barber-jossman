import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["500", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "David Barbería · Rosario",
  description:
    "Estudio de barbería de autor en Rosario. Corte clásico, fade moderno y ritual de barba.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="bg-zinc-950 text-zinc-50 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
