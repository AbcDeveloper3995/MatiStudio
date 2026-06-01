"use client";
import { Button } from "../ui/Button";
import { useReservation } from "@/providers/ReservationProvider";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Info, X } from "@phosphor-icons/react";
import { CustomSelect } from "../ui/CustomSelect";
import { CustomDatePicker } from "../ui/CustomDatePicker";

// Mock available times
const AVAILABLE_TIMES = [
  { label: "10:00 AM", value: "10:00 AM" }, 
  { label: "10:30 AM", value: "10:30 AM" }, 
  { label: "11:00 AM", value: "11:00 AM" }, 
  { label: "11:30 AM", value: "11:30 AM" }, 
  { label: "12:00 PM", value: "12:00 PM" }, 
  { label: "12:30 PM", value: "12:30 PM" },
  { label: "01:00 PM", value: "01:00 PM" }, 
  { label: "01:30 PM", value: "01:30 PM" }, 
  { label: "02:00 PM", value: "02:00 PM" }, 
  { label: "02:30 PM", value: "02:30 PM" }, 
  { label: "03:00 PM", value: "03:00 PM" }, 
  { label: "03:30 PM", value: "03:30 PM" },
  { label: "04:00 PM", value: "04:00 PM" }, 
  { label: "04:30 PM", value: "04:30 PM" }, 
  { label: "05:00 PM", value: "05:00 PM" }, 
  { label: "05:30 PM", value: "05:30 PM" }, 
  { label: "06:00 PM", value: "06:00 PM" }, 
  { label: "06:30 PM", value: "06:30 PM" },
  { label: "07:00 PM", value: "07:00 PM" }, 
  { label: "07:30 PM", value: "07:30 PM" }, 
  { label: "08:00 PM", value: "08:00 PM" }
];

export function Reservation({ data }: { data: any }) {
  const { selectedCategory, selectedService, setSelectedCategory, setSelectedService } = useReservation();
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: ""
  });

  // Validation State
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = data?.categorias || [];
  
  const activeCategoryName = selectedCategory || categories[0]?.nombre || "";
  const currentCategoryObj = categories.find((c: any) => c.nombre === activeCategoryName) || categories[0];
  const servicesOptions = currentCategoryObj?.servicios || [];
  
  // Get full object of selected service to show in modal
  const selectedServiceObj = servicesOptions.find((s: any) => s.nombre === selectedService);

  useEffect(() => {
    if (!selectedCategory && activeCategoryName) {
      setSelectedCategory(activeCategoryName);
    }
  }, [selectedCategory, activeCategoryName, setSelectedCategory]);

  useEffect(() => {
    if (currentCategoryObj && selectedService) {
      const isValidService = currentCategoryObj.servicios.some((s: any) => s.nombre === selectedService);
      if (!isValidService) {
        setSelectedService("");
      }
    }
  }, [selectedCategory, currentCategoryObj, selectedService, setSelectedService]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    
    // Phone restriction (only numbers)
    if (id === "phone") {
      const val = value.replace(/\D/g, "");
      if (val.length <= 10) {
        setFormData(prev => ({ ...prev, [id]: val }));
        if (errors.phone) setErrors(prev => ({...prev, phone: ""}));
      }
      return;
    }
    
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors(prev => ({...prev, [id]: ""}));
  };

  const handleDateChange = (val: string) => {
    setFormData(prev => ({ ...prev, date: val }));
    if (errors.date) setErrors(prev => ({...prev, date: ""}));
  };

  const handleTimeChange = (val: string) => {
    setFormData(prev => ({ ...prev, time: val }));
    if (errors.time) setErrors(prev => ({...prev, time: ""}));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name || formData.name.length < 3) {
      newErrors.name = "El nombre debe tener al menos 3 caracteres.";
    }
    if (formData.phone.length !== 10) {
      newErrors.phone = "El teléfono debe tener exactamente 10 dígitos.";
    }
    if (formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Formato de correo electrónico no válido.";
      }
    }
    if (!formData.date) {
      newErrors.date = "Por favor selecciona una fecha.";
    }
    if (!formData.time) {
      newErrors.time = "Por favor selecciona una hora.";
    }
    if (!selectedService) {
      newErrors.service = "Por favor selecciona un servicio.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Reserva enviada exitosamente!");
      // Reset logic can go here
    }
  };

  // Prepare options for custom selects
  const categoryOptions = categories.map((c: any) => ({ label: c.nombre, value: c.nombre }));
  const serviceOptions = servicesOptions.map((s: any) => ({ label: s.nombre, value: s.nombre }));

  return (
    <section id="reservacion" className="relative w-full py-32 px-4 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none z-0"
        style={{ backgroundImage: "url('/2.jpg')" }}
      />
      
      {/* Decorative tools */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/tools.png" alt="Barber Tools" className="absolute left-0 bottom-0 w-64 opacity-10 mix-blend-screen pointer-events-none z-[1] hidden lg:block -rotate-45" />

      <div className="mx-auto max-w-4xl relative z-10">
        <div className="rounded-[2rem] bg-white/[0.02] p-2 ring-1 ring-white/10 relative">
          
          <div className="absolute -inset-10 bg-brand-orange/5 blur-[100px] rounded-full pointer-events-none -z-10" />

          <div className="rounded-[calc(2rem-0.5rem)] bg-brand-zinc px-6 py-12 md:px-16 md:py-20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] relative overflow-hidden">
            
            <div className="relative z-10 grid grid-cols-1 gap-12">
              <div className="flex flex-col gap-6 text-center items-center">
                <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium ring-1 ring-brand-orange/30 bg-brand-orange/10 text-brand-orange mb-2">
                  Haz tu cita
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                  Reserva tu espacio.
                </h2>
                <p className="text-zinc-400 leading-relaxed max-w-lg">
                  Asegura tu lugar en MatiStudio y experimenta un servicio de primer nivel diseñado exclusivamente para ti.
                </p>
              </div>

              <form className="flex flex-col gap-6 w-full max-w-2xl mx-auto" onSubmit={handleSubmit} noValidate>
                
                {/* Dependent Custom Selects for Category & Service */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#111] border border-brand-orange/20 p-6 rounded-2xl relative overflow-visible">
                  <div className="absolute inset-0 bg-brand-orange/5 pointer-events-none" />
                  
                  <div className="flex flex-col gap-2 relative z-20">
                    <label className="text-sm font-medium text-brand-orange pl-1">Categoría</label>
                    <CustomSelect 
                      value={activeCategoryName}
                      options={categoryOptions}
                      onChange={(val) => {
                        setSelectedCategory(val);
                        setSelectedService(""); // reset service when category changes
                        if (errors.service) setErrors(prev => ({...prev, service: ""}));
                      }}
                    />
                  </div>

                  <div className="flex flex-col gap-2 relative z-10">
                    <label className="text-sm font-medium text-brand-orange pl-1">Servicio</label>
                    <div className="relative flex items-center gap-2">
                      <div className="relative flex-1 min-w-0">
                        <CustomSelect 
                          value={selectedService}
                          options={serviceOptions}
                          placeholder="Selecciona un servicio"
                          hasError={!!errors.service}
                          onChange={(val) => {
                            setSelectedService(val);
                            if (errors.service) setErrors(prev => ({...prev, service: ""}));
                          }}
                        />
                      </div>
                      {/* Info Icon Button */}
                      <button 
                        type="button" 
                        disabled={!selectedService}
                        onClick={() => setIsModalOpen(true)}
                        className={`shrink-0 flex items-center justify-center w-[54px] h-[54px] rounded-xl ring-1 transition-all ${selectedService ? 'bg-brand-orange/10 text-brand-orange ring-brand-orange hover:bg-brand-orange/20 cursor-pointer' : 'bg-white/5 text-zinc-600 ring-white/5 cursor-not-allowed'}`}
                        title="Información del servicio"
                      >
                        <Info size={20} weight="bold" />
                      </button>
                    </div>
                    {errors.service && <span className="text-xs text-red-400 pl-1">{errors.service}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-400 pl-1">Nombre completo *</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full rounded-2xl bg-black/40 px-5 py-4 text-white ring-1 focus:outline-none focus:ring-brand-orange focus:bg-black/60 transition-all placeholder:text-zinc-600 ${errors.name ? 'ring-red-500' : 'ring-white/10'}`} 
                      placeholder="Ej. Juan Pérez" 
                    />
                    {errors.name && <span className="text-xs text-red-400 pl-1">{errors.name}</span>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-medium text-zinc-400 pl-1">Teléfono (10 dígitos) *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full rounded-2xl bg-black/40 px-5 py-4 text-white ring-1 focus:outline-none focus:ring-brand-orange focus:bg-black/60 transition-all placeholder:text-zinc-600 ${errors.phone ? 'ring-red-500' : 'ring-white/10'}`} 
                      placeholder="9983402011" 
                    />
                    {errors.phone && <span className="text-xs text-red-400 pl-1">{errors.phone}</span>}
                  </div>
                </div>

                {/* Email (Optional) */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-400 pl-1">Correo Electrónico (Opcional)</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full rounded-2xl bg-black/40 px-5 py-4 text-white ring-1 focus:outline-none focus:ring-brand-orange focus:bg-black/60 transition-all placeholder:text-zinc-600 ${errors.email ? 'ring-red-500' : 'ring-white/10'}`} 
                    placeholder="ejemplo@correo.com" 
                  />
                  {errors.email && <span className="text-xs text-red-400 pl-1">{errors.email}</span>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                  <div className="flex flex-col gap-2 relative z-20">
                    <label className="text-sm font-medium text-zinc-400 pl-1">Fecha *</label>
                    <CustomDatePicker 
                      value={formData.date}
                      onChange={handleDateChange}
                      hasError={!!errors.date}
                    />
                    {errors.date && <span className="text-xs text-red-400 pl-1">{errors.date}</span>}
                  </div>
                  <div className="flex flex-col gap-2 relative z-10">
                    <label className="text-sm font-medium text-zinc-400 pl-1">Hora *</label>
                    <CustomSelect 
                      value={formData.time}
                      onChange={handleTimeChange}
                      options={AVAILABLE_TIMES}
                      placeholder="Selecciona una hora"
                      hasError={!!errors.time}
                    />
                    {errors.time && <span className="text-xs text-red-400 pl-1">{errors.time}</span>}
                  </div>
                </div>
                
                <div className="mt-6 flex justify-center relative z-0">
                  <Button type="submit" className="w-full md:w-auto px-12 py-4">
                    Confirmar Reserva
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Service Info Modal */}
      <AnimatePresence>
        {isModalOpen && selectedServiceObj && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg rounded-3xl bg-[#111] border border-brand-orange/20 p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-[80px] rounded-full pointer-events-none" />
              
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-brand-orange mb-2 block">
                Detalles del Servicio
              </span>
              <h3 className="text-3xl font-bold text-white mb-4 pr-8">{selectedServiceObj.nombre}</h3>
              <p className="text-zinc-300 leading-relaxed font-light mb-8">
                {selectedServiceObj.descripcion}
              </p>
              
              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Precio</span>
                  <div className="flex items-center gap-1">
                    {selectedServiceObj.precio_desde && <span className="text-sm text-zinc-400">desde</span>}
                    <span className="text-2xl font-semibold text-white">
                      ${selectedServiceObj.precio || selectedServiceObj.precio_desde}
                    </span>
                  </div>
                </div>
                {selectedServiceObj.duracion_minutos && (
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Duración</span>
                    <span className="text-lg text-white font-medium">{selectedServiceObj.duracion_minutos} min</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
