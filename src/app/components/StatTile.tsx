interface StatTileProps {
  label: string;
  value: string;
  description?: string;
}

export function StatTile({ label, value, description }: StatTileProps) {
  return (
    <div className="p-6 rounded-[20px] bg-white/[0.02] border border-white/[0.04]">
      <div className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-2">
        {label}
      </div>
      <div className="text-[28px] font-light tracking-tight text-foreground/90 mb-1">
        {value}
      </div>
      {description && (
        <div className="text-[13px] text-muted-foreground/60 font-light">
          {description}
        </div>
      )}
    </div>
  );
}
