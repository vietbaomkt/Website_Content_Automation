import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "default" | "secondary" | "destructive" | "outline";
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants: Record<string, string> = {
    default: "border-transparent bg-foreground text-background",
    secondary: "border-transparent bg-muted text-foreground",
    destructive: "border-transparent bg-red-500 text-white",
    outline: "text-foreground",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
