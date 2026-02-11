import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollProgress } from "./ScrollProgress";

export function Root() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0" style={{ background: "var(--gradient-bg)" }} />
        <div
          className="absolute -top-48 left-1/2 h-[520px] w-[900px] -translate-x-1/2 opacity-60 blur-3xl"
          style={{ background: "var(--glow-subtle)" }}
        />
      </div>
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}