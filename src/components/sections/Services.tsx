import { ServicesFilter } from "./ServicesFilter";

export function Services({ data }: { data: any }) {
  if (!data || !data.categorias || data.categorias.length === 0) {
    return null;
  }

  return (
    <section id="servicios" className="relative w-full py-32 px-4 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none z-0"
        style={{ backgroundImage: "url('/2.jpg')" }}
      />
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="inline-block rounded-full px-4 py-1.5 text-xs uppercase tracking-widest font-medium ring-1 ring-white/10 bg-white/5 text-brand-orange mb-6">
            Nuestra Oferta
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Experiencia superior.
          </h2>
        </div>
        
        <ServicesFilter categorias={data.categorias} />
      </div>
    </section>
  );
}
