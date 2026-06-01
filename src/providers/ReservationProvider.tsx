"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ReservationContextType {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedService: string;
  setSelectedService: (service: string) => void;
}

const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedService, setSelectedService] = useState("");

  return (
    <ReservationContext.Provider value={{ selectedCategory, setSelectedCategory, selectedService, setSelectedService }}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }
  return context;
}
