import { motion } from "motion/react";
import { PillButton } from "../components/PillButton";

export function Fund() {
  const thesisPoints = [
    {
      title: "SportsTech",
      description: "Solutions for Clubs, Leagues and end clients addressing US/MENA/CIS digitization with proven PMF."
    },
    {
      title: "WelnessTech",
      description: "Industrial efficiency, wellbeing management, and wareable quipments integration with hard metrics."
    },
    {
      title: "Regulated Infrastructure",
      description: "Fintech, regtech, and cross-border payment rails requiring compliance-first architecture."
    }
  ];

  const portfolio = [
    { 
      name: "Confidential Regulated Infrastructure", 
      sector: "Cross-border payments for athlets to take part of competitions", 
      geography: "UAE → EU",
      status: "Active"
    },
    { 
      name: "Confidential RegTech for fans", 
      sector: "Compliance automation", 
      geography: "MENA",
      status: "Active"
    },
    { 
      name: "Confidential WellnessTech Project", 
      sector: "Industrial efficiency", 
      geography: "KSA",
      status: "Pipeline"
    },
    { 
      name: "Confidential SaaS", 
      sector: "Enterprise operations for Sports Clubs", 
      geography: "Qatar → GCC",
      status: "Pipeline"
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
            <div className="w-1.5 h-1.5 rounded-full bg-foreground/60" />
            <span className="text-[13px] text-muted-foreground/60 font-light uppercase tracking-wider">
              Capital
            </span>
          </div>
          
          <h1 className="text-[64px] font-light tracking-tight text-foreground/95 mb-6 leading-tight max-w-4xl">
            Thesis-driven venture for regulated cross-border infrastructure
          </h1>
          
          <p className="text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-2xl mb-10">
            Early-stage investments (Seed to Series A) in companies building compliant, evidence-based infrastructure across emerging markets.
          </p>

          <div className="flex items-center gap-4">
            <PillButton variant="primary">
              Submit deck
            </PillButton>
            <PillButton variant="secondary">
              Download thesis
            </PillButton>
          </div>
        </motion.div>

        {/* Investment Thesis */}
        <section className="mb-24">
          <h2 className="text-[36px] font-light tracking-tight text-foreground/90 mb-4">
            Investment Thesis
          </h2>
          <p className="text-[15px] text-muted-foreground/60 font-light leading-relaxed max-w-3xl mb-12">
            We back founders building regulated infrastructure in markets where compliance is a moat, not a burden.
          </p>

          <div className="grid grid-cols-3 gap-6">
            {thesisPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-8"
              >
                <div className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-4">
                  Focus Area {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-[22px] font-light tracking-tight text-foreground/90 mb-3">
                  {point.title}
                </h3>
                <p className="text-[14px] text-muted-foreground/70 font-light leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Portfolio Preview */}
        <section className="mb-24">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-[36px] font-light tracking-tight text-foreground/90 mb-3">
                Portfolio
              </h2>
              <p className="text-[14px] text-muted-foreground/60 font-light">
                Select active investments and pipeline (some anonymized per founder request).
              </p>
            </div>
          </div>

          <div className="rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] overflow-hidden">
            <div className="divide-y divide-white/[0.04]">
              {portfolio.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 hover:bg-white/[0.02] transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-[18px] font-light text-foreground/85 mb-1">
                        {company.name}
                      </h3>
                      <p className="text-[13px] text-muted-foreground/60 font-light">
                        {company.sector}
                      </p>
                    </div>
                    <div className="flex items-center gap-12">
                      <div className="text-right">
                        <div className="text-[11px] text-muted-foreground/40 font-light uppercase tracking-wider mb-1">
                          Geography
                        </div>
                        <div className="text-[13px] text-muted-foreground/70 font-light">
                          {company.geography}
                        </div>
                      </div>
                      <div className="min-w-[100px] text-right">
                        <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-light ${
                          company.status === 'Active' 
                            ? 'bg-green-500/10 text-green-400/80 border border-green-500/20' 
                            : 'bg-blue-500/10 text-blue-400/80 border border-blue-500/20'
                        }`}>
                          {company.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Criteria */}
        <section>
          <h2 className="text-[36px] font-light tracking-tight text-foreground/90 mb-12">
            What We Look For
          </h2>

          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-[24px] bg-white/[0.02] border border-white/[0.04] p-8">
              <h3 className="text-[20px] font-light tracking-tight text-foreground/85 mb-6">
                Stage & Check Size
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-[13px] text-muted-foreground/50 font-light mb-1">Stage</div>
                  <div className="text-[15px] text-foreground/80 font-light">Seed to Series A</div>
                </div>
                <div>
                  <div className="text-[13px] text-muted-foreground/50 font-light mb-1">Initial Check</div>
                  <div className="text-[15px] text-foreground/80 font-light">$250K - $2M</div>
                </div>
                <div>
                  <div className="text-[13px] text-muted-foreground/50 font-light mb-1">Follow-on Reserves</div>
                  <div className="text-[15px] text-foreground/80 font-light">Up to 3x initial</div>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] bg-white/[0.02] border border-white/[0.04] p-8">
              <h3 className="text-[20px] font-light tracking-tight text-foreground/85 mb-6">
                Founder Profile
              </h3>
              <div className="space-y-3 text-[14px] text-muted-foreground/70 font-light leading-relaxed">
                <p>• Domain expertise in regulated industries</p>
                <p>• Evidence of PMF (revenue, LOIs, pilot results)</p>
                <p>• Willingness to operate in compliance-first mode</p>
                <p>• Cross-border ambition with local grounding</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
