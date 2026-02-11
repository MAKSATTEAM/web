import { motion } from "motion/react";
import { useState } from "react";
import { FilterChip } from "../components/FilterChip";
import { DiagonalShards } from "../components/DiagonalShards";

type FilterType = "All" | "Advisory" | "Fund" | "Build";

export function Cases() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const cases = [
    {
      id: 1,
      category: "Advisory" as const,
      title: "Family Office Digital Transformation",
      client: "Confidential MENA FO",
      description: "18-month roadmap for digitizing legacy investment operations across 12 entities.",
      metrics: ["$40M AUM digitized", "6-month payback", "SOC 2 ready"],
      geography: "UAE"
    },
    {
      id: 2,
      category: "Advisory" as const,
      title: "Pre-IPO Technical Due Diligence",
      client: "Confidential FinTech",
      description: "Investment-grade tech assessment for Series C → IPO readiness.",
      metrics: ["127-page report", "12 critical fixes", "Audit-ready"],
      geography: "Qatar → US"
    },
    {
      id: 3,
      category: "Fund" as const,
      title: "Cross-Border Payment Infrastructure",
      client: "Portfolio Company A",
      description: "Seed investment in regulated payment rail connecting MENA to EU.",
      metrics: ["$1.2M invested", "PMF achieved", "Active"],
      geography: "UAE → EU"
    },
    {
      id: 4,
      category: "Advisory" as const,
      title: "GDPR Compliance Roadmap",
      client: "Confidential SaaS",
      description: "6-month engagement to achieve GDPR baseline for EU expansion.",
      metrics: ["42 controls implemented", "DPA template", "Zero incidents"],
      geography: "KSA → EU"
    },
    {
      id: 5,
      category: "Build" as const,
      title: "Compliance Automation Platform",
      client: "Confidential PE Firm",
      description: "Custom regtech tool for portfolio company due diligence tracking.",
      metrics: ["4-month delivery", "Source escrow", "Maintained"],
      geography: "US"
    },
    {
      id: 6,
      category: "Fund" as const,
      title: "Industrial Efficiency Platform",
      client: "Portfolio Company B",
      description: "Series A investment in climate tech with proven ROI metrics.",
      metrics: ["$2M invested", "12% energy savings", "Pipeline"],
      geography: "KSA"
    }
  ];

  const filteredCases = activeFilter === "All" 
    ? cases 
    : cases.filter(c => c.category === activeFilter);

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <div className="relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#1a1d26]/70 via-[#12141a]/85 to-[#1a1d26]/70 border border-white/[0.06] backdrop-blur-2xl overflow-hidden">
            <DiagonalShards />
            <div className="relative px-6 sm:px-10 lg:px-12 py-10 sm:py-12">
              <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-light tracking-tight text-foreground/95 mb-5 sm:mb-6 leading-tight">
                Case Studies
              </h1>
              
              <p className="text-[14px] sm:text-[16px] lg:text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-2xl">
                Select engagements across advisory, venture, and custom development. Some details anonymized per client request.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {(["All", "Advisory", "Fund", "Build"] as FilterType[]).map((filter) => (
            <FilterChip
              key={filter}
              onClick={() => setActiveFilter(filter)}
              active={activeFilter === filter}
            >
              {filter}
            </FilterChip>
          ))}
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {filteredCases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-[22px] sm:rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-8 hover:border-white/[0.1] transition-all duration-500 group"
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-light uppercase tracking-wider ${
                  caseItem.category === 'Advisory' 
                    ? 'bg-blue-500/10 text-blue-400/80 border border-blue-500/20'
                    : caseItem.category === 'Fund'
                    ? 'bg-green-500/10 text-green-400/80 border border-green-500/20'
                    : 'bg-purple-500/10 text-purple-400/80 border border-purple-500/20'
                }`}>
                  <div className="w-1 h-1 rounded-full bg-current" />
                  {caseItem.category}
                </span>
                <span className="text-[11px] sm:text-[12px] text-muted-foreground/50 font-light">
                  {caseItem.geography}
                </span>
              </div>

              {/* Title & Client */}
              <h3 className="text-[20px] sm:text-[24px] font-light tracking-tight text-foreground/90 mb-2 group-hover:text-foreground/95 transition-colors">
                {caseItem.title}
              </h3>
              <p className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light mb-4">
                {caseItem.client}
              </p>

              {/* Description */}
              <p className="text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed mb-6">
                {caseItem.description}
              </p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2">
                {caseItem.metrics.map((metric) => (
                  <span 
                    key={metric}
                    className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] text-[11px] sm:text-[12px] text-muted-foreground/60 font-light"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-[10px] sm:text-[11px] text-muted-foreground/40 font-light leading-relaxed max-w-2xl mx-auto">
            Metrics are illustrative and reflect results achieved during engagement period. Client names withheld per NDA. 
            Past performance does not guarantee future results.
          </p>
        </motion.div>
      </div>
    </div>
  );
}