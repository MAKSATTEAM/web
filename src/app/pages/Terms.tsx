import { motion } from "motion/react";
import { Link } from "react-router";
import { DiagonalShards } from "../components/DiagonalShards";

export function Terms() {
  const sections = [
    {
      title: "Agreement",
      content:
        "By accessing this website or engaging our advisory, fund, or custom development services, you agree to these terms. If you represent an organization, you warrant that you have authority to bind it. We may update these terms; continued use constitutes acceptance.",
    },
    {
      title: "Services",
      content:
        "We provide advisory, venture investment, and custom software development. Scope, deliverables, and terms for each engagement are defined in separate agreements (MSA, SOW, LP agreements). Nothing on this site constitutes investment advice or an offer to sell securities.",
    },
    {
      title: "Intellectual Property",
      content:
        "Our pre-existing IP, methodologies, and tools remain our property. Client-specific work is assigned per contract. Confidential information is governed by NDAs. You may not reproduce, distribute, or use our materials without prior written consent.",
    },
    {
      title: "Limitation of Liability",
      content:
        "To the fullest extent permitted by law, our liability is limited to fees paid for the relevant engagement. We are not liable for indirect, consequential, or punitive damages. Certain jurisdictions may not allow these limitations.",
    },
    {
      title: "Termination & Governing Law",
      content:
        "Either party may terminate engagements as set forth in the applicable agreement. These terms are governed by the laws specified in our MSA. Disputes shall be resolved as agreed in the engagement contract.",
    },
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
                Terms of Service
              </h1>

              <p className="text-[14px] sm:text-[16px] lg:text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-2xl mb-8">
                Legal terms governing use of our website and services. Updated February 2026.
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08]">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                <span className="text-[12px] text-muted-foreground/80 font-light">
                  Last updated: February 2026
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] p-6 sm:p-10"
            >
              <h2 className="text-[22px] sm:text-[26px] font-light tracking-tight text-foreground/90 mb-4">
                {section.title}
              </h2>
              <p className="text-[14px] sm:text-[15px] text-muted-foreground/70 font-light leading-relaxed">
                {section.content}
              </p>
            </motion.section>
          ))}
        </div>

        {/* Contact & Related */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-[22px] sm:rounded-[24px] bg-white/[0.02] border border-white/[0.04]"
        >
          <h3 className="text-[16px] sm:text-[18px] font-light tracking-tight text-foreground/85 mb-3">
            Questions
          </h3>
          <p className="text-[13px] sm:text-[14px] text-muted-foreground/70 font-light leading-relaxed mb-4">
            For questions about these terms, contact us at{" "}
            <a
              href="mailto:info@maksat.pro"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              info@maksat.pro
            </a>
            . See also our{" "}
            <Link to="/privacy" className="text-foreground/80 hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </div>
  );
}
