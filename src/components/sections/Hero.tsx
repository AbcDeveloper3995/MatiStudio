"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "../ui/Button";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col justify-center items-center px-4">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div 
          className="absolute inset-0 bg-cover bg-top opacity-50 mix-blend-luminosity"
          style={{ backgroundImage: "url('/3.jpg')" }}
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/10 via-[#050505]/30 to-[#050505] pointer-events-none" />
      </motion.div>

      {/* Background Mesh Gradients */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] h-[600px] w-[600px] rounded-full bg-brand-orange/20 blur-[120px]" 
        />
      </div>

      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-10 flex flex-col items-center text-center mt-12 w-full max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest font-medium ring-1 ring-white/10 bg-white/5 text-brand-orange mb-8 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            Premium Grooming Studio
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[1.1]"
        >
          Redefiniendo el cuidado <br className="hidden md:block"/>
          <span className="text-brand-orange">masculino.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mt-8 leading-relaxed font-light"
        >
          Cortes clásicos, arreglos de barba y tratamientos especializados en un entorno de alta gama diseñado exclusivamente para ti.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className="flex flex-col sm:flex-row items-center gap-6 mt-12"
        >
          <Button onClick={() => document.getElementById('reservacion')?.scrollIntoView({ behavior: 'smooth' })}>
            Reservar experiencia
          </Button>
          <Button variant="secondary" showIcon={false} onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}>
            Explorar servicios
          </Button>
        </motion.div>
      </motion.div>

      {/* Floating Tools Animation */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img 
        src="/tools.png" 
        alt="Tools"
        animate={{ y: [0, -20, 0], rotate: [-10, -5, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[5%] top-[30%] w-32 md:w-48 opacity-40 mix-blend-screen pointer-events-none z-[2] hidden md:block"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img 
        src="/tools.png" 
        alt="Tools"
        animate={{ y: [0, 20, 0], rotate: [20, 25, 20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[5%] bottom-[20%] w-32 md:w-48 opacity-40 mix-blend-screen pointer-events-none z-[2] hidden md:block"
      />
    </section>
  );
}
