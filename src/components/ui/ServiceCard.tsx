"use client";
import { cn } from "@/lib/utils";
import { useReservation } from "@/providers/ReservationProvider";
import { CheckCircle } from "@phosphor-icons/react";

interface ServiceCardProps {
  title: string;
  price?: number;
  price_desde?: number;
  duration?: number;
  durationLabel?: string;
  description: string;
  className?: string;
  index?: number;
}

export function ServiceCard({ title, price, price_desde, duration, durationLabel, description, className, index = 0 }: ServiceCardProps) {
  const { selectedService, setSelectedService } = useReservation();
  const isSelected = selectedService === title;

  const handleSelect = () => {
    setSelectedService(title);
    setTimeout(() => {
      document.getElementById('reservacion')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div
      onClick={handleSelect}
      className={cn(
        "group relative flex flex-col justify-between h-full min-h-[300px] rounded-[2rem] p-1.5 transition-all duration-500 cursor-pointer hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]",
        isSelected 
          ? "bg-brand-orange ring-1 ring-brand-orange shadow-[0_0_30px_rgba(212,175,55,0.3)]"
          : "bg-white/[0.02] ring-1 ring-white/10 hover:bg-white/[0.05]",
        className
      )}
    >
      <div className={cn(
        "relative h-full flex flex-col justify-between rounded-[calc(2rem-0.375rem)] p-8 overflow-hidden transition-all duration-500",
        isSelected ? "bg-[#111]" : "bg-brand-zinc shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
      )}>
        
        {/* Glow effect on hover or selected */}
        <div className={cn(
          "absolute top-0 right-0 w-32 h-32 rounded-full transition-opacity duration-700 pointer-events-none blur-[60px]",
          isSelected ? "bg-brand-orange/40 opacity-100" : "bg-brand-orange/20 opacity-0 group-hover:opacity-100"
        )} />

        <div className="absolute top-6 right-6 flex items-center justify-center">
          {isSelected ? (
            <CheckCircle size={28} weight="fill" className="text-brand-orange" />
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src="/4.jpg" alt="Barber Icon" className="w-8 h-8 opacity-40 transition-opacity group-hover:opacity-60 object-contain invert mix-blend-screen" />
          )}
        </div>

        <div className="relative z-10 pr-8">
          <h3 className={cn(
            "text-2xl font-semibold tracking-tight mb-3 transition-colors duration-500",
            isSelected ? "text-brand-orange" : "text-white group-hover:text-brand-orange"
          )}>{title}</h3>
          <p className="text-sm leading-relaxed text-zinc-400 font-light">{description}</p>
        </div>
        
        <div className="mt-8 flex items-end justify-between border-t border-white/5 pt-6 relative z-10">
          <div className="flex flex-col">
            <span className={cn("text-[10px] uppercase tracking-widest mb-1 font-medium", isSelected ? "text-brand-orange/60" : "text-zinc-500")}>Precio</span>
            <div className="flex items-center gap-1">
              {price_desde && <span className="text-sm text-zinc-400">desde</span>}
              <span className="text-xl font-semibold text-white">
                ${price || price_desde}
              </span>
            </div>
          </div>
          {(duration || durationLabel) && (
            <div className="flex flex-col items-end">
              <span className={cn("text-[10px] uppercase tracking-widest mb-1 font-medium", isSelected ? "text-brand-orange/60" : "text-zinc-500")}>Duración</span>
              <span className="text-sm text-zinc-300 font-medium">{durationLabel || `${duration} min`}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
