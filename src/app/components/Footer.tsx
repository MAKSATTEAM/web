import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-32">
      <div className="max-w-[1440px] mx-auto px-12 py-12">
        <div className="flex items-center justify-between">
          {/* Left: Wordmark */}
          <div className="flex items-baseline gap-3">
            <span className="text-[15px] tracking-tight text-foreground/60">
              maksat.PRO
            </span>
            <span className="text-[12px] text-muted-foreground/50 font-light">
              Investment-grade operations
            </span>
          </div>

          {/* Right: Legal Links */}
          <div className="flex items-center gap-6 text-[13px] text-muted-foreground/60">
            <Link to="/trust-center" className="hover:text-foreground/80 transition-colors">
              Trust Center
            </Link>
            <a href="#" className="hover:text-foreground/80 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground/80 transition-colors">
              Terms
            </a>
            <span className="text-muted-foreground/40">
              © 2026
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
