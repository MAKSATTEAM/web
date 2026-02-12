import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const searchWrapRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const hasActiveSearch = searchValue.trim().length > 0;
  const { scrollY } = useScroll();
  const blurOpacity = useTransform(scrollY, [0, 120], [0, 0.95]);

  useEffect(() => {
    if (searchOpen) {
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) {
      return;
    }
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (searchWrapRef.current && !searchWrapRef.current.contains(target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [searchOpen]);

  useEffect(() => {
    if (location.pathname.startsWith("/cases")) {
      const query = new URLSearchParams(location.search).get("q") ?? "";
      setSearchValue(query);
    }
  }, [location.pathname, location.search]);

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const query = searchValue.trim();
    const params = new URLSearchParams();
    if (query) {
      params.set("q", query);
    }
    const queryString = params.toString();
    navigate(queryString ? `/cases?${queryString}` : "/cases");
    setSearchOpen(false);
  };

  const navLinks = [
    { to: "/advisory", label: "Advisory" },
    { to: "/fund", label: "Fund" },
    { to: "/cases", label: "Cases" },
    { to: "/trust-center", label: "Trust Center" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <motion.div
          className="absolute inset-0 backdrop-blur-xl pointer-events-none"
          style={{
            opacity: blurOpacity,
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.95))",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.95))",
          }}
        />
        <div className="relative max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-4 sm:py-6 flex items-center justify-between">
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
            <div className="flex items-center" ref={searchWrapRef}>
              <AnimatePresence>
                {searchOpen && (
                  <motion.form
                    initial={{ width: 0, opacity: 0, marginRight: 0 }}
                    animate={{ width: 220, opacity: 1, marginRight: 8 }}
                    exit={{ width: 0, opacity: 0, marginRight: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="overflow-hidden rounded-full p-[2px] h-9"
                    style={{ maxWidth: "clamp(160px, 40vw, 220px)" }}
                    onSubmit={handleSearchSubmit}
                  >
                    <input
                      ref={inputRef}
                      value={searchValue}
                      onChange={(event) => setSearchValue(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === "Escape") {
                          setSearchOpen(false);
                        }
                      }}
                      placeholder="Search cases..."
                      className="w-full h-full box-border rounded-full bg-white/5 border border-white/[0.08] text-[13px] text-foreground/90 placeholder:text-muted-foreground/50 px-[18px] py-[5px] focus:outline-none focus:ring-1 focus:ring-white/20 transition-colors"
                      aria-label="Search cases"
                    />
                  </motion.form>
                )}
              </AnimatePresence>
              <button 
                className={`w-9 h-9 flex items-center justify-center rounded-full transition-colors ${
                  hasActiveSearch
                    ? "bg-white/10 ring-1 ring-white/20 hover:bg-white/10"
                    : "hover:bg-white/5"
                }`}
                aria-label="Search"
                onClick={() => setSearchOpen((open) => !open)}
              >
                <Search
                  className={`w-4 h-4 ${hasActiveSearch ? "text-foreground/90" : "text-muted-foreground/80"}`}
                  strokeWidth={1.5}
                />
              </button>
            </div>
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
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
