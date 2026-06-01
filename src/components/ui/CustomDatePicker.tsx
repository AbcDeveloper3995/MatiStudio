"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CaretLeft, CaretRight, CalendarBlank } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

interface CustomDatePickerProps {
  value: string; // ISO date string (YYYY-MM-DD)
  onChange: (date: string) => void;
  hasError?: boolean;
}

export function CustomDatePicker({ value, onChange, hasError = false }: CustomDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Start with today's date or the selected date
  const initialDate = value ? new Date(value + 'T12:00:00') : new Date();
  const [currentMonth, setCurrentMonth] = useState(initialDate.getMonth());
  const [currentYear, setCurrentYear] = useState(initialDate.getFullYear());
  
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Calendar logic
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time for accurate comparison

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // 0 is Sunday
  
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (day: number) => {
    // Format YYYY-MM-DD
    const monthStr = String(currentMonth + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');
    onChange(`${currentYear}-${monthStr}-${dayStr}`);
    setIsOpen(false);
  };

  const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  // Display value
  let displayValue = "Seleccionar fecha";
  if (value) {
    const d = new Date(value + 'T12:00:00');
    displayValue = `${d.getDate()} de ${monthNames[d.getMonth()]} del ${d.getFullYear()}`;
  }

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between rounded-2xl bg-black/40 px-5 py-4 text-left transition-all",
          "ring-1 focus:outline-none focus:ring-brand-orange focus:bg-black/60",
          hasError ? "ring-red-500" : (isOpen ? "ring-brand-orange bg-black/60" : "ring-white/10"),
          value ? "text-white" : "text-zinc-600"
        )}
      >
        <span className="truncate">{displayValue}</span>
        <CalendarBlank size={20} className={isOpen || value ? "text-brand-orange" : "text-zinc-500"} />
      </button>

      {/* Calendar Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full md:w-[320px] mt-2 rounded-2xl bg-[#111] ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)] overflow-hidden p-4"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <button 
                type="button" 
                onClick={handlePrevMonth}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              >
                <CaretLeft size={16} />
              </button>
              <span className="text-white font-medium">
                {monthNames[currentMonth]} {currentYear}
              </span>
              <button 
                type="button" 
                onClick={handleNextMonth}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              >
                <CaretRight size={16} />
              </button>
            </div>

            {/* Days of week */}
            <div className="grid grid-cols-7 gap-1 mb-2 text-center">
              {['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'].map(d => (
                <span key={d} className="text-xs font-medium text-zinc-500">{d}</span>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-7 gap-1">
              {/* Empty slots */}
              {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                <div key={`empty-${i}`} className="w-8 h-8" />
              ))}
              
              {/* Days */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const cellDate = new Date(currentYear, currentMonth, day);
                cellDate.setHours(0,0,0,0);
                
                const isPast = cellDate < today;
                
                // Check if it's the selected date
                let isSelected = false;
                if (value) {
                  const selDate = new Date(value + 'T12:00:00');
                  selDate.setHours(0,0,0,0);
                  isSelected = cellDate.getTime() === selDate.getTime();
                }

                return (
                  <button
                    key={`day-${day}`}
                    type="button"
                    disabled={isPast}
                    onClick={() => handleDateClick(day)}
                    className={cn(
                      "w-8 h-8 flex items-center justify-center rounded-full text-sm transition-colors mx-auto",
                      isPast ? "text-zinc-700 cursor-not-allowed" : "cursor-pointer hover:bg-white/10 hover:text-white",
                      isSelected ? "bg-brand-orange text-black hover:bg-brand-orange/90 hover:text-black font-semibold" : (!isPast && "text-zinc-300")
                    )}
                  >
                    {day}
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
