import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { PillButton } from "../components/PillButton";
import { Mail, MapPin, Phone } from "lucide-react";
import { DiagonalShards } from "../components/DiagonalShards";

export function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interest: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status !== "idle") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "sending") return;

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        const message = typeof data?.message === "string" ? data.message : "Something went wrong.";
        throw new Error(message);
      }

      setStatus("success");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        interest: "",
        message: "",
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong.";
      setStatus("error");
      setErrorMessage(message);
    }
  };

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <div className="relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#1a1d26]/70 via-[#12141a]/85 to-[#1a1d26]/70 border border-white/[0.06] backdrop-blur-2xl overflow-hidden">
            <DiagonalShards />
            <div className="relative px-6 sm:px-10 lg:px-12 py-10 sm:py-12">
              <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-light tracking-tight text-foreground/95 mb-5 sm:mb-6 leading-tight">
                Get in Touch
              </h1>
              
              <p className="text-[14px] sm:text-[16px] lg:text-[17px] text-muted-foreground/70 font-light leading-relaxed max-w-2xl mx-auto">
                Whether you need advisory, investment, or custom development — we start with a discovery call to understand your requirements.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-[22px] sm:rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-8 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mx-auto mb-6">
              <Mail className="w-5 h-5 text-foreground/60" strokeWidth={1.5} />
            </div>
            <h3 className="text-[18px] sm:text-[20px] font-light tracking-tight text-foreground/85 mb-2">
              Email
            </h3>
            <a 
              href="mailto:info@maksat.pro" 
              className="text-[13px] sm:text-[14px] text-muted-foreground/70 hover:text-foreground/90 font-light transition-colors"
            >
              info@maksat.pro
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-[22px] sm:rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-8 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mx-auto mb-6">
              <Phone className="w-5 h-5 text-foreground/60" strokeWidth={1.5} />
            </div>
            <h3 className="text-[18px] sm:text-[20px] font-light tracking-tight text-foreground/85 mb-2">
              Call
            </h3>
            <p className="text-[13px] sm:text-[14px] text-muted-foreground/70 font-light">
              +7 (960) 055 1842
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-[22px] sm:rounded-[24px] bg-gradient-to-br from-[#1a1d26]/50 via-[#12141a]/60 to-[#1a1d26]/50 border border-white/[0.06] p-6 sm:p-8 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-5 h-5 text-foreground/60" strokeWidth={1.5} />
            </div>
            <h3 className="text-[18px] sm:text-[20px] font-light tracking-tight text-foreground/85 mb-2">
              Office
            </h3>
            <p className="text-[13px] sm:text-[14px] text-muted-foreground/70 font-light">
              Cupertino, US
            </p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-[700px] mx-auto rounded-[26px] sm:rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] p-6 sm:p-10"
        >
          <h2 className="text-[22px] sm:text-[28px] font-light tracking-tight text-foreground/90 mb-8 text-center">
            Send a Message
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-[13px] text-muted-foreground/70 font-light mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[13px] sm:text-[14px] text-foreground/90 font-light focus:bg-white/[0.05] focus:border-white/[0.15] transition-all outline-none"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-[13px] text-muted-foreground/70 font-light mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[13px] sm:text-[14px] text-foreground/90 font-light focus:bg-white/[0.05] focus:border-white/[0.15] transition-all outline-none"
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
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[13px] sm:text-[14px] text-foreground/90 font-light focus:bg-white/[0.05] focus:border-white/[0.15] transition-all outline-none"
                placeholder="john@company.com"
              />
            </div>

            <div>
              <label className="block text-[13px] text-muted-foreground/70 font-light mb-2">
                Interest Area
              </label>
              <select
                name="interest"
                value={form.interest}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[13px] sm:text-[14px] text-foreground/90 font-light focus:bg-white/[0.05] focus:border-white/[0.15] transition-all outline-none"
              >
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
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[13px] sm:text-[14px] text-foreground/90 font-light focus:bg-white/[0.05] focus:border-white/[0.15] transition-all outline-none resize-none"
                placeholder="Tell us about your project or inquiry..."
              />
            </div>

            <div className="text-center pt-4">
              <PillButton
                variant="primary"
                type="submit"
                disabled={status === "sending"}
                className="w-full sm:w-auto justify-center"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </PillButton>
            </div>

            <div className="min-h-[20px] text-center" aria-live="polite">
              {status === "success" && (
                <p className="text-[12px] sm:text-[13px] text-foreground/80 font-light">
                  Thanks! Your message has been sent.
                </p>
              )}
              {status === "error" && (
                <p className="text-[12px] sm:text-[13px] text-red-400/90 font-light">
                  {errorMessage || "We couldn’t send your message. Please try again."}
                </p>
              )}
            </div>
          </form>
        </motion.div>

        {/* Additional Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-[12px] sm:text-[13px] text-muted-foreground/60 font-light leading-relaxed mb-4">
            For security incidents, compliance questions, or whistleblower reports, see our{" "}
            <Link to="/trust-center" className="text-foreground/80 hover:text-foreground transition-colors">
              Trust Center
            </Link>
            .
          </p>
          <p className="text-[10px] sm:text-[11px] text-muted-foreground/40 font-light">
            All inquiries are handled confidentially. We typically respond within 1 business day. By submitting, you agree to our{" "}
            <Link to="/terms" className="text-muted-foreground/60 hover:text-foreground/80 transition-colors">Terms</Link>
            {" "}and{" "}
            <Link to="/privacy" className="text-muted-foreground/60 hover:text-foreground/80 transition-colors">Privacy Policy</Link>.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
