import { motion } from "motion/react";
import { PillButton } from "../components/PillButton";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <div className="pt-32 pb-24 px-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <h1 className="text-[64px] font-light tracking-tight text-foreground/95 mb-6 leading-tight">
            Get in Touch
          </h1>
          
          <p className="text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-2xl mx-auto">
            Whether you need advisory, investment, or custom development — we start with a discovery call to understand your requirements.
          </p>
        </motion.div>

        {/* Contact Options */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-8 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mx-auto mb-6">
              <Mail className="w-5 h-5 text-foreground/60" strokeWidth={1.5} />
            </div>
            <h3 className="text-[20px] font-light tracking-tight text-foreground/85 mb-2">
              Email
            </h3>
            <a 
              href="mailto:hello@nexus.example" 
              className="text-[14px] text-muted-foreground/70 hover:text-foreground/90 font-light transition-colors"
            >
              hello@nexus.example
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-8 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mx-auto mb-6">
              <Phone className="w-5 h-5 text-foreground/60" strokeWidth={1.5} />
            </div>
            <h3 className="text-[20px] font-light tracking-tight text-foreground/85 mb-2">
              Call
            </h3>
            <p className="text-[14px] text-muted-foreground/70 font-light">
              +971 (0) 4 XXX XXXX
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-8 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-5 h-5 text-foreground/60" strokeWidth={1.5} />
            </div>
            <h3 className="text-[20px] font-light tracking-tight text-foreground/85 mb-2">
              Office
            </h3>
            <p className="text-[14px] text-muted-foreground/70 font-light">
              Dubai, UAE
            </p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-[700px] mx-auto rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] p-10"
        >
          <h2 className="text-[28px] font-light tracking-tight text-foreground/90 mb-8 text-center">
            Send a Message
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-[13px] text-muted-foreground/70 font-light mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[14px] text-foreground/90 font-light focus:bg-white/[0.05] focus:border-white/[0.15] transition-all outline-none"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-[13px] text-muted-foreground/70 font-light mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[14px] text-foreground/90 font-light focus:bg-white/[0.05] focus:border-white/[0.15] transition-all outline-none"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-[13px] text-muted-foreground/70 font-light mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[14px] text-foreground/90 font-light focus:bg-white/[0.05] focus:border-white/[0.15] transition-all outline-none"
                placeholder="john@company.com"
              />
            </div>

            <div>
              <label className="block text-[13px] text-muted-foreground/70 font-light mb-2">
                Interest Area
              </label>
              <select className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[14px] text-foreground/90 font-light focus:bg-white/[0.05] focus:border-white/[0.15] transition-all outline-none">
                <option value="">Select...</option>
                <option value="advisory">Advisory</option>
                <option value="fund">Venture Fund</option>
                <option value="build">Custom Development</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-[13px] text-muted-foreground/70 font-light mb-2">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[14px] text-foreground/90 font-light focus:bg-white/[0.05] focus:border-white/[0.15] transition-all outline-none resize-none"
                placeholder="Tell us about your project or inquiry..."
              />
            </div>

            <div className="text-center pt-4">
              <PillButton variant="primary">
                Send Message
              </PillButton>
            </div>
          </form>
        </motion.div>

        {/* Additional Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-[13px] text-muted-foreground/60 font-light leading-relaxed mb-4">
            For security incidents, compliance questions, or whistleblower reports, see our{" "}
            <a href="/trust-center" className="text-foreground/80 hover:text-foreground transition-colors">
              Trust Center
            </a>
            .
          </p>
          <p className="text-[11px] text-muted-foreground/40 font-light">
            All inquiries are handled confidentially. We typically respond within 1 business day.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
