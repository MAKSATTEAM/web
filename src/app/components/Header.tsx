import { Link } from "react-router";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Switch } from "./ui/switch";

interface HeaderProps {
  reducedMotion: boolean;
  onToggleReducedMotion: () => void;
}

export function Header({ reducedMotion, onToggleReducedMotion }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/advisory", label: "Advisory" },
    { to: "/fund", label: "Fund" },
    { to: "/cases", label: "Cases" },
    { to: "/trust-center", label: "Trust Center" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-xl bg-background/80">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-4 sm:py-6 flex items-center justify-between">
          {/* Left: Logo + Descriptor */}
          <Link to="/" className="flex items-baseline gap-3 group">
            <span className="text-[15px] sm:text-[17px] tracking-tight text-foreground/95 transition-colors group-hover:text-foreground">
              maksat.PRO
            </span>
            <span className="hidden sm:inline text-[13px] text-muted-foreground/70 font-light">
              Advisory · Fund · Build
            </span>
          </Link>

          {/* Right: Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button 
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-muted-foreground/80" strokeWidth={1.5} />
            </button>
            <button 
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors"
              aria-label="Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="w-4 h-4 text-muted-foreground/80" strokeWidth={1.5} />
              ) : (
                <Menu className="w-4 h-4 text-muted-foreground/80" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Navigation Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl"
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex items-center justify-center min-h-screen">
              <motion.nav
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="space-y-2"
                onClick={(event) => event.stopPropagation()}
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      className="block text-[36px] sm:text-[56px] font-light tracking-tight text-foreground/60 hover:text-foreground/95 transition-colors py-2"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-6 flex items-center justify-center gap-3 text-[12px] text-muted-foreground/60 font-light">
                  <span>Reduce Motion</span>
                  <Switch
                    checked={reducedMotion}
                    onCheckedChange={onToggleReducedMotion}
                    aria-label="Reduce motion"
                  />
                </div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}