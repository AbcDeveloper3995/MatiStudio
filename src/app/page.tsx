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
      <Reservation data={data} />
      <Footer />
    </main>
  );
}
