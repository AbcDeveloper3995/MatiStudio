"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ServicesCarousel } from "./ServicesCarousel";
import { cn } from "@/lib/utils";
import { Scissors, Drop, Sparkle, Star, PaintBrush, HandsClapping, PersonSimpleRun } from "@phosphor-icons/react";
import { useReservation } from "@/providers/ReservationProvider";

const getCategoryIcon = (name: string) => {
  const lower = name.toLowerCase();
  if (lower === "barbería") return <Scissors size={18} />;
  if (lower === "depilación facial") return <Sparkle size={18} />;
  if (lower === "uñas") return <HandsClapping size={18} />;
  if (lower === "depilación corporal") return <PersonSimpleRun size={18} />;
  if (lower === "corte y servicios de dama") return <Scissors size={18} />;
  if (lower === "peinados") return <Star size={18} />;
  if (lower === "tratamientos capilares") return <Drop size={18} />;
  if (lower === "procesos capilares") return <PaintBrush size={18} />;
  if (lower === "masajes") return <HandsClapping size={18} />;
  return <Star size={18} />;
};

export function ServicesFilter({ categorias }: { categorias: any[] }) {
  const [activeCategory, setActiveCategory] = useState(categorias[0]?.nombre || "");
  const { setSelectedCategory } = useReservation();

  const currentCategory = categorias.find(c => c.nombre === activeCategory);

  const handleCategoryClick = (name: string) => {
    setActiveCategory(name);
    // Also store it globally so the form knows about it
    setSelectedCategory(name);
  };

  return (
    <div className="flex flex-col gap-12 w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {categorias.map(categoria => (
          <button
            key={categoria.nombre}
            onClick={() => handleCategoryClick(categoria.nombre)}
            className={cn(
              "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 outline-none flex items-center gap-2",
              activeCategory === categoria.nombre 
                ? "bg-brand-orange text-black shadow-[0_0_20px_rgba(212,175,55,0.4)]" 
                : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white ring-1 ring-white/10"
            )}
          >
            {getCategoryIcon(categoria.nombre)}
            {categoria.nombre}
          </button>
        ))}
      </div>

      {/* Carousel Container */}
      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          >
            {currentCategory && currentCategory.servicios && (
              <ServicesCarousel servicios={currentCategory.servicios} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
