"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CaretDown, CaretUp, Check } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  hasError?: boolean;
}

export function CustomSelect({ value, onChange, options, placeholder = "Seleccionar", hasError = false }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between rounded-xl bg-black/40 px-5 py-4 text-left transition-all",
          "ring-1 focus:outline-none focus:ring-brand-orange focus:bg-black/60",
          hasError ? "ring-red-500" : (isOpen ? "ring-brand-orange bg-black/60" : "ring-white/10"),
          selectedOption ? "text-white" : "text-zinc-600"
        )}
      >
        <span className="truncate">{selectedOption ? selectedOption.label : placeholder}</span>
        {isOpen ? <CaretUp size={16} className="text-brand-orange shrink-0" /> : <CaretDown size={16} className="text-zinc-400 shrink-0" />}
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 rounded-xl bg-[#111] ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)] overflow-hidden max-h-[250px] overflow-y-auto hide-scrollbar"
          >
            <div className="p-1.5 flex flex-col gap-1">
              {options.length === 0 && (
                <div className="px-4 py-3 text-sm text-zinc-500 text-center">No hay opciones</div>
              )}
              {options.map((option) => {
                const isSelected = option.value === value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      onChange(option.value);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm transition-all text-left",
                      isSelected
                        ? "bg-brand-orange/10 text-brand-orange font-medium"
                        : "text-zinc-300 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <span className="truncate">{option.label}</span>
                    {isSelected && <Check size={16} className="shrink-0" weight="bold" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
