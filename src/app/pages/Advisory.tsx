import { motion } from "motion/react";
import { PillButton } from "../components/PillButton";
import { CheckCircle2 } from "lucide-react";
import { DiagonalShards } from "../components/DiagonalShards";

export function Advisory() {
  const capabilities = [
    {
      title: "Strategic Transformation",
      description: "Multi-year roadmaps with quarterly stage-gates and CFO-ready business cases.",
      deliverables: ["Business case models", "Roadmap documentation", "Risk registers"]
    },
    {
      title: "Technical Due Diligence",
      description: "Investment-grade assessments for M&A, pre-IPO, or governance reviews.",
      deliverables: ["Architecture reviews", "Code quality audits", "Security assessments"]
    },
    {
      title: "Compliance Advisory",
      description: "GDPR, PDPL, SOC 2 readiness with evidence-first documentation.",
      deliverables: ["Gap analysis", "Control frameworks", "Audit preparation"]
    },
    {
      title: "Cross-border Expansion",
      description: "Market entry strategy for MENA, US, EU, and RU jurisdictions.",
      deliverables: ["Market analysis", "Legal structure design", "Vendor selection"]
    }
  ];

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20 lg:mb-24"
        >
          <div className="relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#1a1d26]/70 via-[#12141a]/85 to-[#1a1d26]/70 border border-white/[0.06] backdrop-blur-2xl overflow-hidden">
            <DiagonalShards />
            <div className="relative px-6 sm:px-10 lg:px-12 py-10 sm:py-12">
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/70" />
                <span className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light uppercase tracking-wider">
                  Primary Focus
                </span>
              </div>
              
              <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-light tracking-tight text-foreground/95 mb-5 sm:mb-6 leading-tight max-w-4xl">
                Advisory for teams that need proof — not promises
              </h1>
              
              <p className="text-[14px] sm:text-[16px] lg:text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-2xl mb-8 sm:mb-10">
                Stage-gated engagements designed for family offices, PE firms, and C-suites requiring evidence-based transformation and due diligence.
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <PillButton variant="primary" className="w-full sm:w-auto justify-center">
                  Book discovery call
                </PillButton>
                <PillButton variant="secondary" className="w-full sm:w-auto justify-center">
                  Download case studies
                </PillButton>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Capabilities Grid */}
        <section className="mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-light tracking-tight text-foreground/90 mb-8 sm:mb-12">
            Core Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-[22px] sm:rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-8 hover:border-white/[0.1] transition-all duration-500"
              >
                <h3 className="text-[20px] sm:text-[24px] font-light tracking-tight text-foreground/90 mb-3">
                  {capability.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed mb-6">
                  {capability.description}
                </p>
                
                <div className="space-y-2">
                  <div className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider mb-3">
                    Typical Deliverables
                  </div>
                  {capability.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-foreground/40" strokeWidth={1.5} />
                      <span className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-light tracking-tight text-foreground/90 mb-8 sm:mb-12">
            Stage-Gated Process
          </h2>

          <div className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] p-6 sm:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { stage: "01", title: "Discovery", duration: "2-3 weeks" },
                { stage: "02", title: "Assessment", duration: "4-6 weeks" },
                { stage: "03", title: "Design", duration: "6-8 weeks" },
                { stage: "04", title: "Implementation", duration: "Ongoing" }
              ].map((phase, index) => (
                <div key={phase.stage}>
                  <div className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-2">
                    Stage {phase.stage}
                  </div>
                  <h3 className="text-[18px] sm:text-[20px] font-light tracking-tight text-foreground/85 mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light">
                    {phase.duration}
                  </p>
                  {index < 3 && (
                    <div className="mt-4 h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Geography Focus */}
        <section>
          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-light tracking-tight text-foreground/90 mb-6 sm:mb-8">
            Geographic Coverage
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { region: "MENA", priority: "Primary", description: "UAE, KSA, Qatar" },
              { region: "United States", priority: "Secondary", description: "West Coast focus" },
              { region: "EU", priority: "Tertiary", description: "Select markets" },
              { region: "Russia", priority: "Select", description: "On request" }
            ].map((geo) => (
              <div 
                key={geo.region}
                className="p-5 sm:p-6 rounded-[18px] sm:rounded-[20px] bg-white/[0.02] border border-white/[0.04]"
              >
                <div className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-2">
                  {geo.priority}
                </div>
                <h3 className="text-[16px] sm:text-[18px] font-light text-foreground/85 mb-2">
                  {geo.region}
                </h3>
                <p className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light">
                  {geo.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
