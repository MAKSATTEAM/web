import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import { MotionConfig } from "motion/react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollProgress } from "./ScrollProgress";

export function Root() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.dataset.reduceMotion = reducedMotion ? "true" : "false";
    }
  }, [reducedMotion]);

  return (
    <MotionConfig reducedMotion={reducedMotion ? "always" : "user"}>
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0" style={{ background: "var(--gradient-bg)" }} />
          <div
            className="absolute -top-48 left-1/2 h-[520px] w-[900px] -translate-x-1/2 opacity-60 blur-3xl"
            style={{ background: "var(--glow-subtle)" }}
          />
        </div>
        <ScrollProgress />
        <Header
          reducedMotion={reducedMotion}
          onToggleReducedMotion={() => setReducedMotion((prev) => !prev)}
        />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}