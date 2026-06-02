import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Globe,
  Layout,
  Smartphone,
  ShoppingCart,
  ArrowRight,
  ArrowLeft,
  Monitor,
  Zap,
  Sparkles,
  Code2,
  Palette,
  Shield,
  Search,
  BarChart3,
  MousePointerClick,
  Layers,
  Eye,
  Settings,
  TrendingUp,
  Award,
  ChevronRight,
} from "lucide-react";

import webHero from "../img/l5.webp";
import webConcept from "../img/l3.webp";
import webGraph from "../img/l4.webp";

/* ───────── Particles ───────── */
const FloatingParticles = () => {
  const particles = React.useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 10 + 8,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.15 + 0.04,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#0FA3A3]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [-15, 15, -15],
            x: [-8, 8, -8],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

/* ───────── FadeIn ───────── */
const FadeIn = ({ children, delay = 0, direction = "up", className = "" }) => {
  const dirs = {
    up: { y: 28, x: 0 },
    down: { y: -28, x: 0 },
    left: { y: 0, x: 28 },
    right: { y: 0, x: -28 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...dirs[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ───────── Inline CTA ───────── */
const InlineWebsiteCTA = ({
  title = "Need a high-performing website for your business?",
  desc = "Book a free website consultation and let’s map out a custom website that looks premium, loads fast and converts better.",
  buttonText = "Book Free Website Consultation",
}) => {
  return (
    <section className="relative py-10 md:py-12">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <FadeIn>
          <div
            className="relative overflow-hidden rounded-[24px] border border-[#1C3F63]/55
                       bg-gradient-to-r from-[#0B1F3A]/85 via-[#102846]/80 to-[#0A1C31]/90
                       backdrop-blur-xl px-6 py-7 md:px-8 md:py-8
                       shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
          >
            <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-[#0FA3A3]/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-10 w-36 h-36 rounded-full bg-[#D4A437]/10 blur-3xl pointer-events-none" />
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[1px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(15,163,163,0.45), transparent)",
              }}
            />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div className="max-w-2xl">
                <div
                  className="inline-flex items-center gap-2 rounded-full
                             border border-[#1C3F63]/60 bg-[#0F2A44]/45
                             px-4 py-2 text-[10px] uppercase tracking-[0.18em]
                             text-[#8FA7C0] mb-3"
                >
                  <Globe className="w-3.5 h-3.5 text-[#0FA3A3]" />
                  Website Consultation
                </div>

                <h3 className="text-[1.2rem] md:text-[1.45rem] font-bold text-white mb-2 leading-snug">
                  {title}
                </h3>

                <p className="text-[13px] md:text-[14px] leading-[1.75] text-[#8FA7C0]">
                  {desc}
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="shrink-0"
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2
                             px-6 py-3.5 rounded-xl font-semibold text-[13px] md:text-[14px]
                             text-[#060F1E] bg-[#D4A437]
                             shadow-[0_8px_24px_rgba(212,164,55,0.22)]
                             hover:shadow-[0_12px_30px_rgba(212,164,55,0.32)]
                             transition-all duration-300"
                >
                  {buttonText}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

/* ───────── Data ───────── */
const webTypes = [
  { icon: Monitor, text: "Business Websites", color: "#0FA3A3" },
  { icon: Layout, text: "Corporate Websites", color: "#5ED4D4" },
  { icon: Smartphone, text: "Landing Pages", color: "#47C7FF" },
  { icon: ShoppingCart, text: "E-Commerce Platforms", color: "#D4A437" },
];

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    desc: "Optimised code ensures your site loads instantly, keeping users engaged and satisfying Google's Core Web Vitals.",
    color: "#0FA3A3",
  },
  {
    icon: Smartphone,
    title: "Flawless Mobile Experience",
    desc: "Over 60% of traffic is mobile. Your site responds perfectly across all devices with a premium experience.",
    color: "#D4A437",
  },
  {
    icon: MousePointerClick,
    title: "UX & Conversion Strategy",
    desc: "Strategic CTAs, intuitive navigation and frictionless paths designed to maximise your conversion rate.",
    color: "#5ED4D4",
  },
  {
    icon: Search,
    title: "SEO-Ready Architecture",
    desc: "Clean code, proper structure and metadata optimised for search engine visibility from day one.",
    color: "#47C7FF",
  },
];

const whyCards = [
  {
    icon: Code2,
    title: "Custom Development",
    desc: "No templates. Every website is custom-built to match your brand and goals.",
    color: "#0FA3A3",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    desc: "Enterprise-grade security, SSL, regular backups and 99.9% uptime guarantee.",
    color: "#5ED4D4",
  },
  {
    icon: Palette,
    title: "Premium Design",
    desc: "Stunning, modern design that builds trust and sets you apart from competitors.",
    color: "#D4A437",
  },
  {
    icon: BarChart3,
    title: "Analytics Integration",
    desc: "Full tracking setup to measure traffic, conversions and user behaviour.",
    color: "#47C7FF",
  },
  {
    icon: Settings,
    title: "Easy to Manage",
    desc: "User-friendly CMS to update content and pages without technical knowledge.",
    color: "#0FA3A3",
  },
  {
    icon: TrendingUp,
    title: "Built to Scale",
    desc: "Architecture designed to grow — add pages, features and integrations anytime.",
    color: "#D4A437",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We learn about your business, goals and audience to plan the perfect website.",
    color: "#47C7FF",
  },
  {
    num: "02",
    title: "Design",
    desc: "Custom wireframes and visuals crafted to reflect your brand and maximise conversions.",
    color: "#5ED4D4",
  },
  {
    num: "03",
    title: "Development",
    desc: "Clean, fast, responsive code built with modern technologies and SEO best practices.",
    color: "#0FA3A3",
  },
  {
    num: "04",
    title: "Launch",
    desc: "Thorough testing, seamless launch and ongoing support to keep your site performing.",
    color: "#D4A437",
  },
];

/* ═══════════════════════════════════════
   WEBSITE PAGE
   ═══════════════════════════════════════ */
const WebsitePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#060F1E] min-h-screen">
      {/* ═══════ HERO ═══════ */}
      <section className="relative overflow-hidden -mt-[1px] pt-12 pb-20 md:pt-16 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_1400px_800px_at_50%_-15%,rgba(15,40,70,0.90),rgba(6,15,30,1))]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(15,163,163,0.22) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(15,163,163,0.22) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#0FA3A3]/[0.06] blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-[8%] w-[400px] h-[400px] bg-[#D4A437]/[0.04] blur-[140px] rounded-full pointer-events-none" />

        <FloatingParticles />

        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onClick={() => navigate(-1)}
          className="absolute top-6 md:top-8 left-6 md:left-8 z-20
                     group inline-flex items-center gap-2
                     px-4 py-2 rounded-xl
                     border border-[#1C3F63]/50 bg-[#0F2A44]/40
                     backdrop-blur-md
                     text-[12px] font-semibold text-[#8FA7C0]
                     hover:border-[#0FA3A3]/40 hover:text-white
                     hover:bg-[#0F2A44]/60
                     transition-all duration-300
                     shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
          Back
        </motion.button>

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid items-center gap-10 lg:gap-14 lg:grid-cols-2">
            <div className="max-w-xl pt-14 md:pt-16 lg:pt-10">
              <FadeIn>
                <div
                  className="inline-flex items-center gap-2.5 rounded-full
                             border border-[#1C3F63]/60 bg-[#0F2A44]/45
                             backdrop-blur-md px-5 py-2.5
                             text-[10px] md:text-[11px] tracking-[0.22em]
                             uppercase text-[#7A96B4]
                             shadow-[0_4px_20px_rgba(0,0,0,0.2)] mb-7"
                >
                  <Globe className="w-4 h-4 text-[#0FA3A3]" />
                  Web Design & Development
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                <h1
                  className="text-[2.2rem] sm:text-4xl md:text-5xl
                             font-extrabold text-white leading-[1.08]
                             tracking-tight mb-5"
                >
                  Professional Websites
                  <span
                    className="block mt-2 bg-gradient-to-r from-[#0FA3A3] via-[#5ED4D4] to-[#D4A437]
                               bg-clip-text text-transparent"
                  >
                    Built to Perform.
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.14}>
                <p className="text-[15px] md:text-base leading-[1.85] text-[#9AB4CC] mb-8">
                  Every website we build is designed for performance, user
                  experience and conversion — combining stunning visuals with
                  architecture that turns visitors into customers.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center justify-center gap-2
                                 px-7 py-3.5 rounded-2xl font-semibold text-white text-[14px]
                                 bg-gradient-to-r from-[#0FA3A3] to-[#0D8F8F]
                                 shadow-[0_8px_28px_rgba(15,163,163,0.25)]
                                 hover:shadow-[0_12px_36px_rgba(15,163,163,0.35)]
                                 transition-shadow duration-300"
                    >
                      Start Your Project
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2
                                 px-7 py-3.5 rounded-2xl font-semibold text-[14px]
                                 text-[#B4C4D4] bg-[#0F2A44]/35 backdrop-blur-sm
                                 border border-[#1C3F63]/70 hover:border-[#0FA3A3]/50
                                 hover:text-white transition-all duration-300"
                    >
                      View Our Work
                    </Link>
                  </motion.div>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.12} direction="left">
              <div className="relative w-full">
                <div
                  className="relative rounded-[24px] overflow-hidden border border-[#1C3F63]/40
                             shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
                >
                  <img
                    src={webHero}
                    alt="Website Design"
                    className="w-full h-auto min-h-[300px] md:min-h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060F1E]/30 via-transparent to-transparent" />
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 md:-bottom-5 md:-left-5 z-10"
                >
                  <div
                    className="rounded-xl border border-[#1C3F63]/60
                               bg-[#0B1F3A]/85 backdrop-blur-md
                               px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#0FA3A3]/15 border border-[#0FA3A3]/25 flex items-center justify-center">
                        <Zap className="w-4 h-4 text-[#0FA3A3]" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-xs">99+ Speed</div>
                        <div className="text-[9px] text-[#7A96B4] uppercase tracking-wider">
                          Performance
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="absolute -top-3 -right-3 md:-top-4 md:-right-4 z-10"
                >
                  <div
                    className="rounded-lg border border-[#D4A437]/30
                               bg-[#0B1F3A]/85 backdrop-blur-md
                               px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                  >
                    <div className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#D4A437]" />
                      <span className="text-white font-bold text-[11px]">
                        Custom Built
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════ WHAT WE BUILD ═══════ */}
      <section className="relative py-20 md:py-28">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(28,63,99,0.4), transparent)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
            <div className="max-w-lg">
              <FadeIn>
                <div
                  className="inline-flex items-center gap-2 rounded-full
                             border border-[#1C3F63]/60 bg-[#0F2A44]/40
                             px-5 py-2.5 text-[10px] uppercase tracking-[0.2em]
                             text-[#7A96B4] mb-6"
                >
                  <Layers className="w-3.5 h-3.5 text-[#5ED4D4]" />
                  What We Build
                </div>
              </FadeIn>

              <FadeIn delay={0.06}>
                <h2
                  className="text-2xl sm:text-3xl md:text-[2.2rem] font-extrabold text-white
                             leading-[1.15] tracking-tight mb-4"
                >
                  Digital Experiences That{" "}
                  <span className="bg-gradient-to-r from-[#0FA3A3] to-[#5ED4D4] bg-clip-text text-transparent">
                    Drive Results
                  </span>
                </h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="text-[14px] md:text-[15px] leading-[1.85] text-[#9AB4CC] mb-8">
                  Whether you need a sleek corporate presence or a complex
                  e-commerce engine, we build robust digital assets tailored to
                  your business goals.
                </p>
              </FadeIn>

              <div className="space-y-3">
                {webTypes.map((item, i) => (
                  <FadeIn key={i} delay={0.14 + i * 0.05}>
                    <div
                      className="group flex items-center gap-3.5 rounded-xl
                                 border border-[#1C3F63]/40 bg-[#0F2A44]/20
                                 backdrop-blur-sm px-4 py-3.5
                                 hover:border-[#0FA3A3]/30 hover:bg-[#0F2A44]/30
                                 transition-all duration-300"
                    >
                      <div
                        className="w-9 h-9 shrink-0 rounded-lg flex items-center justify-center"
                        style={{
                          background: `${item.color}12`,
                          border: `1px solid ${item.color}22`,
                        }}
                      >
                        <item.icon className="w-4 h-4" style={{ color: item.color }} />
                      </div>
                      <span className="text-[14px] font-semibold text-white">
                        {item.text}
                      </span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            <FadeIn direction="left" delay={0.08}>
              <div className="w-full rounded-[22px] overflow-hidden border border-[#1C3F63]/40 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                <img
                  src={webConcept}
                  alt="Website Mockups"
                  className="w-full h-auto min-h-[320px] md:min-h-[420px] object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <InlineWebsiteCTA
        title="Need a custom website built around your business goals?"
        desc="Book a free website consultation and we’ll help you plan the right structure, design and strategy for better conversions."
      />

      {/* ═══════ FEATURES ═══════ */}
      <section className="relative py-20 md:py-28">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(28,63,99,0.35), transparent)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
            <FadeIn direction="right">
              <div className="relative w-full">
                <div className="rounded-[22px] overflow-hidden border border-[#1C3F63]/40 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                  <img
                    src={webGraph}
                    alt="Website Performance"
                    className="w-full h-auto min-h-[320px] md:min-h-[420px] object-cover"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute -bottom-4 -right-4 md:-bottom-5 md:-right-5 z-10"
                >
                  <div
                    className="rounded-xl border border-[#D4A437]/30
                               bg-[#0B1F3A]/85 backdrop-blur-md
                               px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#D4A437]/15 border border-[#D4A437]/25 flex items-center justify-center">
                        <Eye className="w-4 h-4 text-[#D4A437]" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-xs">
                          Conversion-First
                        </div>
                        <div className="text-[9px] text-[#7A96B4] uppercase tracking-wider">
                          Approach
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>

            <div className="max-w-lg">
              <FadeIn>
                <div
                  className="inline-flex items-center gap-2 rounded-full
                             border border-[#1C3F63]/60 bg-[#0F2A44]/40
                             px-5 py-2.5 text-[10px] uppercase tracking-[0.2em]
                             text-[#7A96B4] mb-6"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#D4A437]" />
                  Key Features
                </div>
              </FadeIn>

              <FadeIn delay={0.06}>
                <h2
                  className="text-2xl sm:text-3xl md:text-[2.2rem] font-extrabold text-white
                             leading-[1.15] tracking-tight mb-4"
                >
                  Conversion-Focused{" "}
                  <span className="bg-gradient-to-r from-[#0FA3A3] to-[#D4A437] bg-clip-text text-transparent">
                    Architecture
                  </span>
                </h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="text-[14px] leading-[1.85] text-[#8FA7C0] mb-7">
                  We engineer high-performing platforms that turn visitors into
                  loyal customers.
                </p>
              </FadeIn>

              <div className="space-y-3.5">
                {features.map((item, i) => (
                  <FadeIn key={i} delay={0.14 + i * 0.06} direction="left">
                    <div
                      className="group flex items-start gap-3.5 rounded-xl
                                 border border-[#1C3F63]/40 bg-[#0F2A44]/20
                                 backdrop-blur-sm p-4
                                 hover:border-[#0FA3A3]/30 hover:bg-[#0F2A44]/30
                                 transition-all duration-300"
                    >
                      <div
                        className="w-9 h-9 shrink-0 rounded-lg flex items-center justify-center mt-0.5"
                        style={{
                          background: `${item.color}12`,
                          border: `1px solid ${item.color}22`,
                        }}
                      >
                        <item.icon className="w-4 h-4" style={{ color: item.color }} />
                      </div>
                      <div>
                        <h4 className="text-[14px] font-bold text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-[12px] leading-[1.7] text-[#8FA7C0]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <InlineWebsiteCTA
        title="Want a website that looks premium and converts better?"
        desc="Let’s build a fast, responsive and conversion-focused website that supports your growth from day one."
      />

      {/* ═══════ WHY CHOOSE US ═══════ */}
      <section className="relative py-20 md:py-28">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(28,63,99,0.35), transparent)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-8">
          <FadeIn>
            <div className="text-center mb-12 md:mb-14">
              <div
                className="inline-flex items-center gap-2 rounded-full
                           border border-[#1C3F63]/60 bg-[#0F2A44]/40
                           px-5 py-2.5 text-[10px] uppercase tracking-[0.2em]
                           text-[#7A96B4] mb-6"
              >
                <Award className="w-3.5 h-3.5 text-[#D4A437]" />
                Why Choose Us
              </div>
              <h2
                className="text-2xl sm:text-3xl md:text-[2.2rem] font-extrabold text-white
                           leading-[1.15] tracking-tight mb-4"
              >
                What Makes Our Websites{" "}
                <span className="bg-gradient-to-r from-[#0FA3A3] to-[#5ED4D4] bg-clip-text text-transparent">
                  Different
                </span>
              </h2>
              <p className="text-[14px] text-[#8FA7C0] max-w-lg mx-auto leading-relaxed">
                Every website we deliver is built with purpose, precision and a
                deep understanding of what drives online success.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((item, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div
                  className="group relative h-full rounded-[20px] border border-[#1C3F63]/50
                             bg-gradient-to-b from-[#0B1F3A]/45 to-[#060F1E]/60
                             backdrop-blur-sm p-6 overflow-hidden
                             hover:border-[#1C3F63]/75
                             hover:shadow-[0_16px_44px_rgba(0,0,0,0.20)]
                             hover:-translate-y-1
                             transition-all duration-500"
                >
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[1px]
                               opacity-30 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${item.color}50, transparent)`,
                    }}
                  />

                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4
                               group-hover:scale-105 transition-transform duration-300"
                    style={{
                      background: `${item.color}12`,
                      border: `1.5px solid ${item.color}22`,
                    }}
                  >
                    <item.icon className="w-4 h-4" style={{ color: item.color }} />
                  </div>

                  <h3 className="text-[15px] font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[12px] leading-[1.75] text-[#8FA7C0]">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <InlineWebsiteCTA
        title="Ready to discuss your new business website?"
        desc="Book a free website consultation and get expert guidance on design, structure, performance and next steps for your project."
      />

      {/* ═══════ PROCESS ═══════ */}
      <section className="relative py-20 md:py-28">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(28,63,99,0.35), transparent)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-8">
          <FadeIn>
            <div className="text-center mb-12 md:mb-14">
              <div
                className="inline-flex items-center gap-2 rounded-full
                           border border-[#1C3F63]/60 bg-[#0F2A44]/40
                           px-5 py-2.5 text-[10px] uppercase tracking-[0.2em]
                           text-[#7A96B4] mb-6"
              >
                <Settings className="w-3.5 h-3.5 text-[#0FA3A3]" />
                Our Process
              </div>
              <h2
                className="text-2xl sm:text-3xl md:text-[2.2rem] font-extrabold text-white
                           leading-[1.15] tracking-tight mb-4"
              >
                How We Build Your{" "}
                <span className="bg-gradient-to-r from-[#0FA3A3] to-[#D4A437] bg-clip-text text-transparent">
                  Website
                </span>
              </h2>
              <p className="text-[14px] text-[#8FA7C0] max-w-lg mx-auto leading-relaxed">
                A proven four-step process ensuring every project is delivered
                on time, on budget and above expectations.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-5 md:grid-cols-4">
            {processSteps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="group relative h-full">
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:flex absolute top-10 -right-3 z-10">
                      <ChevronRight className="w-4 h-4 text-[#1C3F63]/50" />
                    </div>
                  )}

                  <div
                    className="relative h-full rounded-2xl border border-[#1C3F63]/50
                               bg-[#0B1F3A]/30 backdrop-blur-sm p-5
                               hover:border-[#1C3F63]/70 hover:-translate-y-1
                               transition-all duration-400"
                  >
                    <span
                      className="text-[32px] font-extrabold leading-none block mb-3 select-none
                                 opacity-[0.07] group-hover:opacity-[0.13] transition-opacity duration-500"
                      style={{ color: step.color }}
                    >
                      {step.num}
                    </span>
                    <h3 className="text-[15px] font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[12px] leading-[1.7] text-[#8FA7C0]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="relative py-14 md:py-18">
        <div className="relative z-10 mx-auto max-w-3xl px-6 md:px-8">
          <FadeIn>
            <div
              className="relative rounded-2xl border border-[#1C3F63]/50
                         bg-gradient-to-r from-[#0B1F3A]/60 to-[#0D2440]/50
                         backdrop-blur-sm overflow-hidden
                         px-7 py-8 md:px-10 md:py-10
                         flex flex-col md:flex-row items-center gap-5 md:gap-8"
            >
              <div className="absolute -top-10 left-1/3 w-[250px] h-[120px] bg-[#D4A437]/[0.04] blur-[70px] rounded-full pointer-events-none" />
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[35%] h-[1px]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(212,164,55,0.3), transparent)",
                }}
              />

              <div className="relative z-10 flex-1 text-center md:text-left">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1.5">
                  Ready to Build Your New Website?
                </h3>
                <p className="text-[12px] md:text-[13px] leading-[1.7] text-[#8FA7C0]">
                  Let's create a high-performing website that drives real
                  results.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="relative z-10 shrink-0"
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2
                             px-6 py-3 rounded-xl font-semibold text-[13px]
                             text-[#060F1E] bg-[#D4A437]
                             shadow-[0_6px_20px_rgba(212,164,55,0.25)]
                             hover:shadow-[0_10px_28px_rgba(212,164,55,0.35)]
                             transition-shadow duration-300"
                >
                  Start Your Project
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default WebsitePage;