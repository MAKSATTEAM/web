interface FilterChipProps {
  children: string;
  active?: boolean;
  onClick?: () => void;
}

export function FilterChip({ children, active = false, onClick }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-[12px] sm:text-[13px] font-light tracking-tight transition-all duration-300 ${
        active
          ? 'bg-white/[0.12] text-foreground/95 border border-white/[0.15]'
          : 'bg-white/[0.03] text-muted-foreground/70 border border-white/[0.05] hover:bg-white/[0.06] hover:text-foreground/80'
      }`}
    >
      {children}
    </button>
  );
}
