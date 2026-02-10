import { motion } from "motion/react";
import { PillButton } from "../components/PillButton";
import { CheckCircle2 } from "lucide-react";

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
    <div className="pt-32 pb-24 px-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-foreground/70" />
            <span className="text-[13px] text-muted-foreground/60 font-light uppercase tracking-wider">
              Primary Focus
            </span>
          </div>
          
          <h1 className="text-[64px] font-light tracking-tight text-foreground/95 mb-6 leading-tight max-w-4xl">
            Advisory for teams that need proof — not promises
          </h1>
          
          <p className="text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-2xl mb-10">
            Stage-gated engagements designed for family offices, PE firms, and C-suites requiring evidence-based transformation and due diligence.
          </p>

          <div className="flex items-center gap-4">
            <PillButton variant="primary">
              Book discovery call
            </PillButton>
            <PillButton variant="secondary">
              Download case studies
            </PillButton>
          </div>
        </motion.div>

        {/* Capabilities Grid */}
        <section className="mb-24">
          <h2 className="text-[36px] font-light tracking-tight text-foreground/90 mb-12">
            Core Capabilities
          </h2>

          <div className="grid grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-8 hover:border-white/[0.1] transition-all duration-500"
              >
                <h3 className="text-[24px] font-light tracking-tight text-foreground/90 mb-3">
                  {capability.title}
                </h3>
                <p className="text-[14px] text-muted-foreground/70 font-light leading-relaxed mb-6">
                  {capability.description}
                </p>
                
                <div className="space-y-2">
                  <div className="text-[12px] text-muted-foreground/50 font-light uppercase tracking-wider mb-3">
                    Typical Deliverables
                  </div>
                  {capability.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-foreground/40" strokeWidth={1.5} />
                      <span className="text-[13px] text-muted-foreground/60 font-light">
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
        <section className="mb-24">
          <h2 className="text-[36px] font-light tracking-tight text-foreground/90 mb-12">
            Stage-Gated Process
          </h2>

          <div className="rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] p-10">
            <div className="grid grid-cols-4 gap-8">
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
                  <h3 className="text-[20px] font-light tracking-tight text-foreground/85 mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-[13px] text-muted-foreground/60 font-light">
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
          <h2 className="text-[36px] font-light tracking-tight text-foreground/90 mb-8">
            Geographic Coverage
          </h2>
          
          <div className="grid grid-cols-4 gap-6">
            {[
              { region: "MENA", priority: "Primary", description: "UAE, KSA, Qatar" },
              { region: "United States", priority: "Secondary", description: "West Coast focus" },
              { region: "EU", priority: "Tertiary", description: "Select markets" },
              { region: "Russia", priority: "Select", description: "On request" }
            ].map((geo) => (
              <div 
                key={geo.region}
                className="p-6 rounded-[20px] bg-white/[0.02] border border-white/[0.04]"
              >
                <div className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-2">
                  {geo.priority}
                </div>
                <h3 className="text-[18px] font-light text-foreground/85 mb-2">
                  {geo.region}
                </h3>
                <p className="text-[13px] text-muted-foreground/60 font-light">
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
