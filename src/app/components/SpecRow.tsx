interface SpecRowProps {
  label: string;
  value: string;
  isLast?: boolean;
}

export function SpecRow({ label, value, isLast = false }: SpecRowProps) {
  return (
    <div 
      className={`grid grid-cols-2 gap-12 py-5 ${
        !isLast ? 'border-b border-white/[0.04]' : ''
      }`}
    >
      <div className="text-[15px] text-muted-foreground/70 font-light">
        {label}
      </div>
      <div className="text-[15px] text-foreground/85 font-light">
        {value}
      </div>
    </div>
  );
}
