interface ProofChipProps {
  children: string;
}

export function ProofChip({ children }: ProofChipProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
      <div className="w-1 h-1 rounded-full bg-foreground/40" />
      <span className="text-[12px] text-muted-foreground/70 font-light tracking-tight">
        {children}
      </span>
    </div>
  );
}
