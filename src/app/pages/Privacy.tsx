import { motion } from "motion/react";
import { Link } from "react-router";
import { DiagonalShards } from "../components/DiagonalShards";

export function Privacy() {
  const sections = [
    {
      title: "Data Collection",
      content:
        "We collect information you provide directly (name, email, company, inquiry details) when contacting us or using our services. We may collect usage data and cookies for site functionality. Data is retained only as long as necessary for the purpose or as required by law.",
    },
    {
      title: "Use of Information",
      content:
        "Your data is used to respond to inquiries, deliver services, improve our offerings, and comply with legal obligations. We do not sell your personal data to third parties. Data may be shared with service providers under strict confidentiality agreements.",
    },
    {
      title: "Security & Retention",
      content:
        "We implement technical and organizational measures to protect your data. Retention periods are defined per engagement and documented in our Data Processing Agreements. You may request deletion of your data where applicable under GDPR or other regulations.",
    },
    {
      title: "Your Rights",
      content:
        "You have the right to access, rectify, erase, restrict processing, and port your data where legally applicable. Contact us at info@maksat.pro to exercise these rights. You may also lodge a complaint with your supervisory authority.",
    },
    {
      title: "Cookies",
      content:
        "We use essential cookies for site operation. Analytics cookies may be used in anonymized form. You can adjust cookie preferences in your browser settings.",
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
                Privacy Policy
              </h1>

              <p className="text-[14px] sm:text-[16px] lg:text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-2xl mb-8">
                How we collect, use, and protect your data. Updated February 2026.
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

        {/* Contact */}
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
            For privacy-related inquiries or to exercise your rights, contact us at{" "}
            <a
              href="mailto:info@maksat.pro"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              info@maksat.pro
            </a>
            . See also our{" "}
            <Link to="/terms" className="text-foreground/80 hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </div>
  );
}
