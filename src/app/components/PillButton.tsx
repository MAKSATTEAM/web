import { motion } from "motion/react";
import { ReactNode } from "react";

interface PillButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
}

export function PillButton({ 
  children, 
  variant = "primary", 
  href, 
  onClick,
  icon,
  className
}: PillButtonProps) {
  const baseClasses = "inline-flex items-center gap-2.5 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-[13px] sm:text-[14px] font-light tracking-tight transition-all duration-300";
  
  const variantClasses = {
    primary: "bg-white/10 text-foreground/95 border border-white/10 hover:bg-white/15 hover:border-white/20 backdrop-blur-sm shadow-[0_2px_12px_rgba(0,0,0,0.3)]",
    secondary: "bg-transparent text-muted-foreground/80 border border-white/5 hover:bg-white/5 hover:text-foreground/90 backdrop-blur-sm",
    ghost: "bg-transparent text-muted-foreground/70 hover:text-foreground/90 hover:bg-white/5"
  };

  const content = (
    <>
      {icon && (
        <span className="flex items-center justify-center">
          {icon}
        </span>
      )}
      {children}
    </>
  );

  const Component = motion.button;

  return (
    <Component
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className ?? ""}`}
      onClick={onClick}
    >
      {content}
    </Component>
  );
}
