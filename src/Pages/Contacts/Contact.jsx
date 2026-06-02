import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Monitor,
  TrendingUp,
  Zap,
  Shield,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════
   🎨 SLEEK BACKGROUND (Consistent with Global Theme)
═══════════════════════════════════════════════════════════════════ */
const BackgroundDecor = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 bg-white">
    {/* Gradient Mesh */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(15,163,163,0.06)_0%,transparent_50%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(212,164,55,0.06)_0%,transparent_50%)]" />

    {/* Subtle Grid Pattern */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(15,163,163,0.015)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(15,163,163,0.015)_1.5px,transparent_1.5px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   📇 SLEEK CONTACT INFO CARD
═══════════════════════════════════════════════════════════════════ */
const ContactInfoCard = ({ icon: Icon, title, desc, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    whileHover={{ y: -3 }}
    className="group relative"
  >
    <div className="flex items-center gap-4 p-4 bg-white/70 backdrop-blur-sm border border-slate-100/50 hover:border-[#0FA3A3]/20 hover:bg-white transition-all duration-300 rounded-2xl shadow-sm">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0FA3A3]/10 to-[#0FA3A3]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon size={18} className="text-[#0FA3A3]" strokeWidth={2} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-0.5">
          {title}
        </p>
        <p className="text-[14px] text-[#0F2A44] font-medium truncate">{desc}</p>
      </div>
      <ArrowUpRight
        size={14}
        className="text-slate-300 group-hover:text-[#0FA3A3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
      />
    </div>
  </motion.div>
);

/* ═══════════════════════════════════════════════════════════════════
   📝 SLEEK FORM FIELD
═══════════════════════════════════════════════════════════════════ */
const FormField = ({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
  isTextArea = false,
}) => (
  <div className="space-y-1.5">
    <label className="text-[11px] font-medium text-slate-400 uppercase tracking-wider pl-1">
      {label} {required && <span className="text-[#0FA3A3]">*</span>}
    </label>
    {isTextArea ? (
      <textarea
        name={name}
        required={required}
        rows={4}
        placeholder={placeholder}
        className="w-full bg-slate-50/50 border border-slate-200/60 rounded-xl px-4 py-3 text-[14px] text-slate-600 placeholder:text-slate-400 focus:bg-white focus:border-[#0FA3A3]/50 focus:outline-none transition-all duration-300 resize-none font-normal"
      />
    ) : (
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-slate-50/50 border border-slate-200/60 rounded-xl px-4 py-3 text-[14px] text-slate-600 placeholder:text-slate-400 focus:bg-white focus:border-[#0FA3A3]/50 focus:outline-none transition-all duration-300 font-normal"
      />
    )}
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   🎯 SLEEK SERVICE CARD
═══════════════════════════════════════════════════════════════════ */
const ServiceCard = ({ service, isSelected, onClick }) => {
  const { name, icon: Icon } = service;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative p-3 rounded-xl border transition-all duration-300 w-full
        ${isSelected
          ? "bg-[#0F2A44] border-[#0FA3A3]/30 shadow-md"
          : "bg-white/70 border-slate-100 hover:border-[#0FA3A3]/20 hover:bg-white"
        }
      `}
    >
      <div className="flex items-center gap-2.5">
        <div
          className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${isSelected ? "bg-white/10" : "bg-slate-50"
            }`}
        >
          <Icon
            size={16}
            className={isSelected ? "text-[#D4A437]" : "text-slate-500"}
            strokeWidth={2}
          />
        </div>
        <span className={`text-[12px] font-medium ${isSelected ? "text-white" : "text-slate-600"}`}>
          {name}
        </span>
      </div>
    </motion.button>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   🌟 MAIN CONTACT PAGE
═══════════════════════════════════════════════════════════════════ */
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const services = [
    { id: "web", name: "Website Design", icon: Monitor },
    { id: "seo", name: "Strategic SEO", icon: TrendingUp },
    { id: "lead", name: "Lead Generation", icon: Zap },
    { id: "ads", name: "Social Ads", icon: Shield },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const message = `
🚀 *New Inquiry - Ventoria Global*
━━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${data.first_name} ${data.last_name}
📧 *Email:* ${data.email}
📱 *Phone:* ${data.phone || "Not provided"}
🎯 *Service:* ${selectedService || "General Inquiry"}
📌 *Subject:* ${data.subject}

💬 *Message:*
${data.message}
━━━━━━━━━━━━━━━━━━━━━
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/610466099308?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
      setSubmitted(true);
      e.target.reset();
      setSelectedService("");
      setTimeout(() => setSubmitted(false), 4000);
    }, 1200);
  };

  return (
    <div className="min-h-screen relative font-sans selection:bg-[#0FA3A3]/20 text-slate-600">
      <BackgroundDecor />

      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24 relative z-10">

        {/* HEADER SECTION */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-medium text-[#0FA3A3] uppercase tracking-widest mb-6"
          >
            <Sparkles size={12} className="text-[#D4A437]" />
            Let's Connect
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#0F2A44] mb-6 tracking-tight leading-tight"
          >
            Get in Touch with{" "}
            <span className="text-[#0FA3A3]">
              Ventoria
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-base md:text-lg font-light leading-relaxed"
          >
            Transform your business with expert digital strategies. Our team delivers
            results-driven solutions tailored to your goals.
          </motion.p>
        </div>

        {/* TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-8 lg:gap-12 items-start">

          {/* LEFT COLUMN */}
          <div className="space-y-6">
            <div className="space-y-3">
              <ContactInfoCard icon={Mail} title="Email" desc="info@ventoriaglobal.com" delay={0.1} />
              <ContactInfoCard icon={Phone} title="Phone" desc="+61 0466 099 308" delay={0.2} />
              <ContactInfoCard icon={MapPin} title="Location" desc="LEVEL 1/457-459 ELIZABETH STREET, SURRY HILLS

" delay={0.3} />
              <ContactInfoCard icon={Clock} title="Working Hours" desc="Mon – Fri, 9AM – 5PM" delay={0.4} />
            </div>

            {/* Strategy Card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-[#0F2A44] rounded-2xl p-7 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0FA3A3]/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <h3 className="text-lg font-medium text-white mb-2">Strategy First</h3>
                <p className="text-slate-400 text-[13px] leading-relaxed mb-5 font-light">
                  We create tailored digital solutions focused on ROI and sustainable growth.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["SEO", "Conversion", "Growth"].map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-lg text-[9px] font-medium text-[#0FA3A3] uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Map Preview */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm"
            >
              <div className="p-4 border-b border-slate-50 flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-[#0F2A44] text-[14px]">Find Us On Google Maps</h4>
                  <p className="text-[11px] text-slate-400 font-light">LEVEL 1/457-459 ELIZABETH STREET, SURRY HILLS

</p>
                </div>
                <MapPin size={16} className="text-[#0FA3A3]" />
              </div>
              <div className="h-48 grayscale-[0.6] hover:grayscale-0 transition-all duration-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.1162143778265!2d151.20802490000003!3d-33.88666069999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae20520f4e97%3A0x5dce58667966c227!2sLEVEL%201%2F457-459%20Elizabeth%20St%2C%20Surry%20Hills%20NSW%202010%2C%20Australia!5e0!3m2!1sen!2sin!4v1778151591337!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - FORM */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/50 backdrop-blur-sm rounded-2xl p-7 sm:p-10 border border-slate-100"
          >
            <div className="mb-10">
              <h2 className="text-2xl font-medium text-[#0F2A44] mb-2 tracking-tight">Send a Message</h2>
              <p className="text-slate-500 text-[14px] font-light">Fill out the form and we'll respond within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField label="First Name" name="first_name" placeholder="John" />
                <FormField label="Last Name" name="last_name" placeholder="Doe" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField label="Work Email" name="email" type="email" placeholder="john@company.com" />
                <FormField label="Phone" name="phone" type="tel" placeholder="+61 --- --- ---" required={false} />
              </div>

              <div className="space-y-3">
                <label className="text-[11px] font-medium text-slate-400 uppercase tracking-wider pl-1">
                  Interest
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {services.map((service) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      isSelected={selectedService === service.name}
                      onClick={() => setSelectedService(service.name)}
                    />
                  ))}
                </div>
              </div>

              <FormField label="Subject" name="subject" placeholder="How can we help?" />
              <FormField label="Message" name="message" isTextArea placeholder="Tell us about your project..." />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0F2A44] hover:bg-[#153756] text-white font-medium py-3.5 px-6 rounded-xl transition-all duration-300 disabled:opacity-60 text-[15px]"
              >
                <div className="flex items-center justify-center gap-2.5">
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </motion.div>
                    ) : submitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 size={16} />
                        <span>Sent Successfully</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2"
                      >
                        <span>Send Message</span>
                        <Send size={15} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>

              <p className="text-center text-[11px] text-slate-400 font-light">
                By submitting, you agree to our{" "}
                <a href="/privacy" className="text-[#0FA3A3] hover:underline transition-all">
                  Privacy Policy
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;