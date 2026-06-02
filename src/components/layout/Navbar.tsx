"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { Button } from "../ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const links = [
    { name: "Servicios", href: "#servicios" },
    { name: "Reservación", href: "#reservacion" },
  ];

  return (
    <>
      <header className="fixed top-0 z-50 w-full px-4 pt-6 transition-all duration-500">
        <div 
          className={cn(
            "mx-auto flex h-16 max-w-5xl items-center justify-between rounded-full px-6 transition-all duration-500",
            scrolled ? "bg-white/5 backdrop-blur-xl ring-1 ring-white/10 shadow-2xl" : "bg-transparent"
          )}
        >
          <a href="#" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Mati_Studio_vector-2.svg" alt="Mati Studio" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10 bg-white/5 p-1" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
                {link.name}
              </a>
            ))}
            <Button variant="primary" showIcon={false} className="px-5 py-2 text-sm h-10" onClick={() => document.getElementById('reservacion')?.scrollIntoView({ behavior: 'smooth' })}>
              Reservar cita
            </Button>
          </nav>

          <button 
            className="group relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={cn("h-[2px] w-6 bg-white transition-all duration-500", isOpen ? "translate-y-[8px] rotate-45" : "")} />
            <span className={cn("h-[2px] w-6 bg-white transition-all duration-500", isOpen ? "opacity-0" : "")} />
            <span className={cn("h-[2px] w-6 bg-white transition-all duration-500", isOpen ? "-translate-y-[8px] -rotate-45" : "")} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-brand-black/90 backdrop-blur-3xl md:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-8 px-4">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 48 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.1, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className="text-4xl font-medium tracking-tight text-white"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 48 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              >
                <Button variant="primary" onClick={() => { setIsOpen(false); document.getElementById('reservacion')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  Reservar cita
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
