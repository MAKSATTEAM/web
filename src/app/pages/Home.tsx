import { PillButton } from "../components/PillButton";
import { ProofChip } from "../components/ProofChip";
import { DiagonalShards } from "../components/DiagonalShards";
import { Link } from "react-router";
import { motion } from "motion/react";

export function Home() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section with Premium Dark Canvas */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 py-20 sm:py-24">
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-20"
            style={{
              background: 'radial-gradient(circle at 50% 0%, rgba(88, 91, 112, 0.15) 0%, transparent 70%)'
            }}
          />
        </div>

        {/* Main Hero Canvas/Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-[1440px] w-full"
        >
          {/* Large Dark Panel with Diagonal Shards */}
          <div className="relative rounded-[28px] sm:rounded-[32px] lg:rounded-[36px] bg-gradient-to-br from-[#1a1d26]/80 via-[#12141a]/90 to-[#1a1d26]/80 border border-white/[0.06] backdrop-blur-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
            {/* Diagonal Glossy Panels (Background) */}
            <DiagonalShards />

            {/* Content */}
            <div className="relative px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20">
              {/* Hero Text - Left Aligned with Manual Line Breaks */}
              <div className="max-w-[720px]">
                <h1 className="text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.1] tracking-[-0.03em] mb-5 sm:mb-6">
                  <span className="text-foreground/95 font-light block">
                    Investment-grade advisory
                  </span>
                  <span className="text-foreground/95 font-light block">
                    and venture for teams
                  </span>
                  <span className="text-foreground/95 font-light block">
                    that need proof — not hype
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-[13px] sm:text-[15px] text-muted-foreground/70 font-light tracking-tight mb-8 sm:mb-10 leading-relaxed">
                  Stage-gated de-risking across MENA → US → EU → RU.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 sm:mb-16">
                  <PillButton 
                    variant="primary"
                    icon={<div className="w-2 h-2 rounded-full bg-foreground/60" />}
                    className="w-full sm:w-auto justify-center"
                  >
                    Book a call
                  </PillButton>
                  
                  <span className="text-[12px] sm:text-[13px] text-muted-foreground/40 font-light">or</span>
                  
                  <PillButton 
                    variant="secondary"
                    icon={<div className="w-2 h-2 rounded-full bg-foreground/40" />}
                    className="w-full sm:w-auto justify-center"
                  >
                    View thesis
                  </PillButton>
                </div>

                {/* Proof Chips */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <ProofChip>Stage-gates</ProofChip>
                  <ProofChip>FO-safe deliverables</ProofChip>
                  <ProofChip>Compliance posture</ProofChip>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Three Directions - Visual Priority */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Advisory - Primary (Largest) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7"
          >
            <Link to="/advisory" className="group block">
              <div className="h-auto lg:h-[420px] rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/60 via-[#12141a]/70 to-[#1a1d26]/60 border border-white/[0.08] p-8 sm:p-10 hover:border-white/[0.12] transition-all duration-500 hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)]">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground/70" />
                      <span className="text-[13px] text-muted-foreground/60 font-light uppercase tracking-wider">
                        Primary Focus
                      </span>
                    </div>
                    <h3 className="text-[42px] font-light tracking-tight text-foreground/95 mb-4 leading-tight">
                      Advisory
                    </h3>
                    <p className="text-[15px] text-muted-foreground/70 font-light leading-relaxed max-w-md">
                      Stage-gated transformation and due diligence for enterprises requiring investment-grade evidence trails.
                    </p>
                  </div>
                  <div className="text-[13px] text-muted-foreground/50 font-light group-hover:text-muted-foreground/70 transition-colors">
                    Learn more →
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Fund - Secondary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5"
          >
            <Link to="/fund" className="group block">
              <div className="h-auto lg:h-[420px] rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-8 sm:p-10 hover:border-white/[0.1] transition-all duration-500">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                      <span className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider">
                        Capital
                      </span>
                    </div>
                    <h3 className="text-[36px] font-light tracking-tight text-foreground/90 mb-4 leading-tight">
                      Venture Fund
                    </h3>
                    <p className="text-[14px] text-muted-foreground/65 font-light leading-relaxed">
                      Thesis-driven investments in regulated, cross-border infrastructure.
                    </p>
                  </div>
                  <div className="text-[13px] text-muted-foreground/50 font-light group-hover:text-muted-foreground/70 transition-colors">
                    View thesis →
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Build - Tertiary (Smallest, Secondary Treatment) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-12"
          >
            <div className="rounded-[22px] sm:rounded-[24px] bg-gradient-to-br from-[#1a1d26]/30 via-[#12141a]/40 to-[#1a1d26]/30 border border-white/[0.04] p-6 sm:p-8 hover:border-white/[0.06] transition-all duration-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="inline-flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-foreground/30" />
                    <span className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider">
                      Custom Development
                    </span>
                  </div>
                  <h3 className="text-[22px] sm:text-[24px] font-light tracking-tight text-foreground/70">
                    Build
                  </h3>
                  <p className="text-[13px] text-muted-foreground/50 font-light max-w-lg">
                    Bespoke software for select clients requiring compliance-first architecture.
                  </p>
                </div>
                <div className="text-[12px] text-muted-foreground/40 font-light">
                  On request
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Center Preview */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] p-8 sm:p-10"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-8">
            <div>
              <h3 className="text-[26px] sm:text-[32px] font-light tracking-tight text-foreground/90 mb-3">
                Trust Center
              </h3>
              <p className="text-[14px] text-muted-foreground/60 font-light max-w-lg">
                Transparent documentation of our operational, security, and compliance standards.
              </p>
            </div>
            <Link 
              to="/trust-center"
              className="text-[13px] text-muted-foreground/60 hover:text-foreground/80 font-light transition-colors"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <Link to="/trust-center" className="group">
              <div className="p-6 rounded-[20px] bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-300">
                <h4 className="text-[16px] font-light text-foreground/85 mb-2 group-hover:text-foreground/95 transition-colors">
                  Data Handling
                </h4>
                <p className="text-[13px] text-muted-foreground/60 font-light leading-relaxed">
                  Access controls, retention policies, NDA/DPA readiness
                </p>
              </div>
            </Link>

            <Link to="/trust-center" className="group">
              <div className="p-6 rounded-[20px] bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-300">
                <h4 className="text-[16px] font-light text-foreground/85 mb-2 group-hover:text-foreground/95 transition-colors">
                  Security Posture
                </h4>
                <p className="text-[13px] text-muted-foreground/60 font-light leading-relaxed">
                  SDLC practices, vulnerability management, incident contacts
                </p>
              </div>
            </Link>

            <Link to="/trust-center" className="group">
              <div className="p-6 rounded-[20px] bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-300">
                <h4 className="text-[16px] font-light text-foreground/85 mb-2 group-hover:text-foreground/95 transition-colors">
                  Compliance Posture
                </h4>
                <p className="text-[13px] text-muted-foreground/60 font-light leading-relaxed">
                  GDPR / PDPL baseline, US vendor readiness
                </p>
              </div>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-8 mb-16">
        <p className="text-[10px] sm:text-[11px] text-muted-foreground/40 font-light text-center leading-relaxed">
          Numbers are illustrative. No guarantee. Some cases anonymized. Past performance does not indicate future results.
        </p>
      </section>
    </div>
  );
}