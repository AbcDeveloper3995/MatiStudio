"use client";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  showIcon?: boolean;
}

export function Button({ children, variant = "primary", showIcon = true, className, ...props }: ButtonProps) {
  const isPrimary = variant === "primary";
  
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative flex items-center justify-center gap-3 rounded-full px-6 py-3 font-medium transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
        isPrimary 
          ? "bg-brand-orange text-brand-black hover:brightness-110" 
          : "bg-white/5 text-white ring-1 ring-white/10 hover:bg-white/10",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {showIcon && (
        <span className={cn(
          "flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-[1px] group-hover:translate-x-1 group-hover:scale-105",
          isPrimary ? "bg-black/15" : "bg-white/10"
        )}>
          <ArrowUpRight weight="bold" className="h-4 w-4" />
        </span>
      )}
    </motion.button>
  );
}
