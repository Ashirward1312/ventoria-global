import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Zap, Target, TrendingUp } from "lucide-react";

const CtaSection = ({ 
  title = "Ready to Supercharge Your Business Growth?", 
  subtitle = "Let’s build targeted campaigns that drive awareness, leads and measurable ROI. Our experts are ready to help you scale.",
  ctaText = "Get Free Consultation",
  ctaLink = "/contact"
}) => {
  return (
    <section className="relative py-12 overflow-hidden bg-[#F8FAFC]">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0FA3A3]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#D4A437]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[24px] bg-[#0F2A44] p-8 md:p-12 text-center shadow-2xl shadow-slate-900/20 border border-white/5"
        >
          {/* Internal Glows */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#0FA3A3]/20 rounded-full blur-[80px]" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#D4A437]/15 rounded-full blur-[80px]" />

          <div className="relative z-20 max-w-xl mx-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-teal-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm"
            >
              <Zap size={14} className="text-yellow-500" />
              TAKE THE NEXT STEP
            </motion.div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-[1.2] tracking-tight">
              {title}
            </h2>

            <p className="text-slate-400 text-[13px] md:text-[15px] mb-8 leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to={ctaLink}
                  className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#0FA3A3] to-[#0D8F8F] px-6 py-3 text-[13px] font-bold text-white shadow-xl shadow-[#0FA3A3]/20 transition-all duration-300"
                >
                  {ctaText}
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 px-6 py-3 text-[13px] font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10"
                >
                  View Our Work
                </Link>
              </motion.div>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 border-t border-white/5 pt-7">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold tracking-wide">
                <Target size={16} className="text-teal-500" />
                <span>ROI FOCUSED</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold tracking-wide">
                <MessageSquare size={16} className="text-teal-500" />
                <span>24/7 SUPPORT</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold tracking-wide">
                <TrendingUp size={16} className="text-teal-500" />
                <span>DATA DRIVEN</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
