import { motion } from "motion/react";
import { Shield, Database, Lock, FileCheck, Scale, AlertCircle } from "lucide-react";
import { DiagonalShards } from "../components/DiagonalShards";

export function TrustCenter() {
  const sections = [
    {
      icon: Database,
      title: "Data Handling",
      items: [
        { label: "Access Controls", value: "Role-based with audit trails" },
        { label: "Data Retention", value: "Client-configurable (default: project + 2 years)" },
        { label: "Data Location", value: "EU/US regions per contract" },
        { label: "Subprocessors", value: "Disclosed in advance; DPA available" },
        { label: "Client Data Deletion", value: "On request within 30 days" }
      ]
    },
    {
      icon: Shield,
      title: "Security Posture",
      items: [
        { label: "SDLC Security", value: "Code review, SAST/DAST, dependency scanning" },
        { label: "Vulnerability Management", value: "Quarterly external pen tests; continuous monitoring" },
        { label: "Incident Response", value: "24/7 contact; disclosure within 72h" },
        { label: "Employee Background Checks", value: "Standard for all team members" },
        { label: "Security Training", value: "Annual refresher + onboarding" }
      ]
    },
    {
      icon: Lock,
      title: "Compliance Posture",
      items: [
        { label: "GDPR Baseline", value: "Art. 28 DPA template; DPIA support available" },
        { label: "PDPL (UAE)", value: "In progress (audit expected Q4 2026)" },
        { label: "SOC 2 Type II", value: "In progress (audit expected Q2 2026)" },
        { label: "US Vendor Readiness", value: "Standard MSA/BAA available" },
        { label: "Export Controls", value: "ITAR/EAR compliance review on request" }
      ]
    },
    {
      icon: FileCheck,
      title: "Delivery Standards",
      items: [
        //{ label: "Documentation of Decisions (DoD)", value: "All strategic decisions logged with rationale" },
        { label: "Change Control", value: "Formal approval for scope/architecture changes" },
        { label: "Acceptance Criteria", value: "Defined at stage-gate; evidence-based sign-off" },
        { label: "IP Assignment", value: "Clear ownership; work-for-hire where applicable" },
        { label: "Source Code Escrow", value: "Available for custom development" }
      ]
    },
    {
      icon: Scale,
      title: "Conflicts & Ethics (Fund)",
      items: [
        { label: "Portfolio Conflicts", value: "Disclosed pre-investment; board consent required" },
        { label: "Advisory/Fund Firewall", value: "Separate teams; information barriers enforced" },
        { label: "Side Letters", value: "Standard terms; no special economics without LP consent" },
        { label: "Co-Investment Rights", value: "Pro-rata for existing LPs" },
        { label: "Fund Reporting", value: "Quarterly NAV; annual audited financials" }
      ]
    },
    {
      icon: AlertCircle,
      title: "Incident & Contact",
      items: [
        { label: "Security Incident Contact", value: "info@maksat.pro" },
        { label: "Data Breach Notification", value: "72h to affected parties + regulators" },
        { label: "Whistleblower Channel", value: "info@maksat.pro (external review)" },
        { label: "DPO Contact", value: "info@maksat.pro" },
        { label: "Insurance", value: "Cyber liability + E&O coverage" }
      ]
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
              <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-light tracking-tight text-foreground/95 mb-5 sm:mb-6 leading-tight max-w-4xl">
                Trust Center
              </h1>
              
              <p className="text-[14px] sm:text-[16px] lg:text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-2xl mb-8">
                Transparent documentation of our operational, security, and compliance standards. Updated quarterly.
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span className="text-[12px] text-blue-400/90 font-light">
                  Last updated: February 2026
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Spec Sections */}
        <div className="space-y-8 sm:space-y-12">
          {sections.map((section, sectionIndex) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.05 }}
              className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] p-6 sm:p-10"
            >
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-foreground/60" strokeWidth={1.5} />
                </div>
                <h2 className="text-[22px] sm:text-[28px] lg:text-[32px] font-light tracking-tight text-foreground/90">
                  {section.title}
                </h2>
              </div>

              {/* Spec Rows (Apple-style) */}
              <div className="space-y-0 border-t border-white/[0.04]">
                {section.items.map((item, itemIndex) => (
                  <div 
                    key={item.label}
                    className={`grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 md:gap-12 py-5 ${
                      itemIndex !== section.items.length - 1 ? 'border-b border-white/[0.04]' : ''
                    }`}
                  >
                    <div className="text-[13px] sm:text-[14px] lg:text-[15px] text-muted-foreground/70 font-light">
                      {item.label}
                    </div>
                    <div className="text-[13px] sm:text-[14px] lg:text-[15px] text-foreground/85 font-light">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-[22px] sm:rounded-[24px] bg-white/[0.02] border border-white/[0.04]"
        >
          <h3 className="text-[16px] sm:text-[18px] font-light tracking-tight text-foreground/85 mb-3">
            Questions or Audit Requests
          </h3>
          <p className="text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed mb-4">
            For detailed security questionnaires, SOC 2 reports (when available), or custom compliance documentation, contact our compliance team.
          </p>
          <a 
            href="mailto:info@maksat.pro" 
            className="text-[13px] sm:text-[14px] text-foreground/80 hover:text-foreground font-light transition-colors"
          >
            info@maksat.pro →
          </a>
        </motion.div>

        {/* Disclaimer */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-[10px] sm:text-[11px] text-muted-foreground/40 font-light leading-relaxed max-w-3xl mx-auto">
            <b>Trust Center Notice</b><br />
            This Trust Center is provided for informational purposes only and does not create any contractual obligations. Any binding commitments are set out solely in duly executed agreements, including the Master Services Agreement (MSA) and, where applicable, the Data Processing Addendum (DPA) and/or Business Associate Agreement (BAA). Maksat may update these standards from time to time. Material changes will be communicated to active clients in accordance with the applicable agreement. For questions, contact info@maksat.pro
          </p>
        </div>
      </div>
    </div>
  );
}
