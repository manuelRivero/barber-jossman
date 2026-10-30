import { Atmosphere } from "@/components/Atmosphere";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { Services } from "@/components/Services";
import { Studio } from "@/components/Studio";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-950">
      <div className="flex min-h-dvh flex-col">
        <Navbar />
        <Hero />
      </div>
      <Studio />
      <Services />
      <Gallery />
      <Pricing />
      <Atmosphere />
      <Team />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
