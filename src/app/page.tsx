import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Reservation } from "@/components/sections/Reservation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getMatiStudioData } from "@/lib/data";

export default async function Home() {
  const data = await getMatiStudioData();

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#050505]">
      <Navbar />
      <Hero />
      <Services data={data} />
      
      {/* Mensaje de masaje relajante */}
      <div className="w-full flex justify-center bg-[#050505] py-8 z-10 relative">
        <div className="flex items-center gap-3 bg-[#111] border border-brand-orange/20 px-6 py-4 rounded-full shadow-[0_0_30px_rgba(212,175,55,0.15)]">
          <span className="text-2xl">💆‍♂️</span>
          <p className="text-zinc-300 text-sm md:text-base font-medium tracking-wide">
            Masaje relajante al finalizar tu servicio
          </p>
        </div>
      </div>

      <Reservation data={data} />
      <Footer />
    </main>
  );
}
