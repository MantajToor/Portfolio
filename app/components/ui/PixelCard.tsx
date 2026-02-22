"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PixelCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "gold" | "muted";
}

export default function PixelCard({
  children,
  className,
  variant = "muted",
}: PixelCardProps) {
  return (
    <motion.div
      className={cn(
        variant === "gold" ? "rpg-panel" : "rpg-panel-muted",
        "p-5 transition-colors duration-200",
        variant === "muted" && "hover:border-gold/40",
        className,
      )}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.div>
  );
}
