interface BadgeProps {
  children: string;
  variant?: "primary" | "secondary" | "success" | "warning";
}

export function Badge({ children, variant = "primary" }: BadgeProps) {
  const variants = {
    primary: "bg-blue-500/10 text-blue-400/80 border border-blue-500/20",
    secondary: "bg-purple-500/10 text-purple-400/80 border border-purple-500/20",
    success: "bg-green-500/10 text-green-400/80 border border-green-500/20",
    warning: "bg-orange-500/10 text-orange-400/80 border border-orange-500/20"
  };

  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-light uppercase tracking-wider ${variants[variant]}`}>
      <div className="w-1 h-1 rounded-full bg-current" />
      {children}
    </span>
  );
}
