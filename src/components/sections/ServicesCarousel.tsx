"use client";
import { ServiceCard } from "../ui/ServiceCard";
import { useRef } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

export function ServicesCarousel({ servicios }: { servicios: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full group/carousel">
      <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-black/50 backdrop-blur-md text-white ring-1 ring-white/10 hover:bg-brand-orange hover:text-black hover:ring-brand-orange transition-all rounded-full -ml-4 opacity-0 group-hover/carousel:opacity-100 hidden md:flex cursor-pointer">
        <CaretLeft size={24} weight="bold" />
      </button>
      
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 pb-8 pt-4 px-4 snap-x snap-mandatory hide-scrollbar"
      >
        {servicios.map((servicio, idx) => (
          <div key={servicio.nombre} className="min-w-[85vw] md:min-w-[380px] snap-center">
            <ServiceCard 
              title={servicio.nombre}
              price={servicio.precio}
              price_desde={servicio.precio_desde}
              duration={servicio.duracion_minutos}
              description={servicio.descripcion}
              index={idx}
            />
          </div>
        ))}
      </div>

      <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-black/50 backdrop-blur-md text-white ring-1 ring-white/10 hover:bg-brand-orange hover:text-black hover:ring-brand-orange transition-all rounded-full -mr-4 opacity-0 group-hover/carousel:opacity-100 hidden md:flex cursor-pointer">
        <CaretRight size={24} weight="bold" />
      </button>
    </div>
  );
}
