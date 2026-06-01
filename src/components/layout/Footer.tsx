"use client";
import { InstagramLogo, WhatsappLogo, MapPin } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="w-full relative border-t border-white/10 bg-[#050505] px-4 py-12 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none z-0"
        style={{ backgroundImage: "url('/2.jpg')" }}
      />
      <div className="mx-auto max-w-5xl flex flex-col items-center text-center gap-12 relative z-10">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Mati_Studio_vector-2.svg" alt="Mati Studio" className="h-12 w-auto mx-auto mb-6" />
          <p className="text-zinc-400 font-light max-w-md mx-auto">
            Redefiniendo el cuidado masculino con una experiencia superior.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="flex flex-col items-center gap-3">
            <MapPin size={24} className="text-brand-orange" weight="light" />
            <span className="text-sm text-zinc-300 font-light max-w-[200px]">
              Timon y Turipache, esquina, Planta baja 22, 77586 Puerto Morelos
            </span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <WhatsappLogo size={24} className="text-brand-orange" weight="light" />
            <span className="text-sm text-zinc-300 font-light">
              99 83 40 20 11
            </span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-2 text-brand-orange">
              <InstagramLogo size={24} weight="light" />
            </div>
            <span className="text-sm text-zinc-300 font-light">
              @mati.studio0
            </span>
          </div>
        </div>

        <div className="w-full border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-zinc-500 uppercase tracking-widest font-light">
            © {new Date().getFullYear()} MATI STUDIO. Todos los derechos reservados.
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-zinc-500 uppercase tracking-widest hover:text-brand-orange transition-colors">Privacidad</a>
            <a href="#" className="text-xs text-zinc-500 uppercase tracking-widest hover:text-brand-orange transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
