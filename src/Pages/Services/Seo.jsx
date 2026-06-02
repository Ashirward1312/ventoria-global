import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  TrendingUp,
  Target,
  ArrowRight,
  ArrowLeft,
  Zap,
  BarChart3,
  Globe,
  FileSearch,
  Link2,
  MapPin,
  PenTool,
  Settings,
  Eye,
  Users,
  Clock,
  Shield,
  Award,
  ChevronRight,
  Sparkles,
  LineChart,
} from "lucide-react";
import CtaSection from "../../Components/CtaSection";


import seoHero from "../img/l11.webp";
import seoConcept from "../img/l12.webp";
import seoGraph from "../img/l2.webp";

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
const InlineAuditCTA = ({
  title = "Want to know how your website is performing?",
  desc = "Get a free SEO audit and discover the biggest opportunities to improve your rankings, traffic and leads.",
}) => {
  return (
    <section className="relative py-10 md:py-12">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <FadeIn>
          <div
            className="relative overflow-hidden rounded-[22px] border border-slate-200/80
                       bg-gradient-to-r from-white via-sky-50/60 to-teal-50/40
                       px-6 py-7 md:px-8 md:py-8
                       shadow-lg shadow-slate-200/40"
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-sky-200/30 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-8 w-32 h-32 rounded-full bg-teal-200/30 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-semibold text-sky-700 mb-3">
                  <Search className="w-3.5 h-3.5 text-[#0FA3A3]" />
                  Free SEO Audit
                </div>
                <h3 className="text-lg md:text-[1.35rem] font-bold text-slate-900 mb-2">
                  {title}
                </h3>
                <p className="text-[13px] md:text-[14px] leading-[1.75] text-slate-600">
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
                             px-6 py-3 rounded-xl font-semibold text-[14px]
                             text-white bg-slate-900
                             shadow-md hover:bg-slate-800 hover:shadow-lg
                             transition-all duration-300"
                >
                  Get Free SEO Audit
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
const benefitsData = [
  {
    icon: Target,
    title: "High-Intent Traffic",
    desc: "Organic search brings users actively looking for a solution. These visitors are far more likely to convert into paying customers.",
    color: "#0FA3A3",
    lightBg: "bg-teal-50",
  },
  {
    icon: Shield,
    title: "Brand Trust & Authority",
    desc: "When your business consistently appears at the top of search results, it signals credibility and leadership to potential clients.",
    color: "#0EA5E9",
    lightBg: "bg-sky-50",
  },
  {
    icon: TrendingUp,
    title: "Compounding ROI",
    desc: "Once established, the content and links we build continue to drive free, high-quality traffic for years to come.",
    color: "#D4A437",
    lightBg: "bg-amber-50",
  },
  {
    icon: Users,
    title: "Competitive Advantage",
    desc: "While competitors rely on paid ads, SEO positions your business to capture organic market share sustainably.",
    color: "#8B5CF6",
    lightBg: "bg-violet-50",
  },
  {
    icon: Clock,
    title: "24/7 Visibility",
    desc: "Unlike paid campaigns that stop when the budget runs out, SEO works around the clock driving traffic and leads.",
    color: "#10B981",
    lightBg: "bg-emerald-50",
  },
  {
    icon: BarChart3,
    title: "Measurable Results",
    desc: "Every aspect of your SEO performance is tracked — rankings, traffic, conversions and ROI — so you know what works.",
    color: "#0FA3A3",
    lightBg: "bg-teal-50",
  },
];

const approachSteps = [
  {
    icon: Settings,
    title: "Technical SEO & Speed",
    desc: "Ensuring your site architecture is flawless, fast, and easily readable by search engine crawlers.",
    color: "#0FA3A3",
  },
  {
    icon: PenTool,
    title: "Content Strategy",
    desc: "Publishing high-value, optimised content that answers user intent and secures featured snippets.",
    color: "#0EA5E9",
  },
  {
    icon: Link2,
    title: "Authority Building",
    desc: "Acquiring high-quality backlinks from reputable websites to increase your domain authority.",
    color: "#D4A437",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    desc: "Optimising your Google Business Profile to capture local traffic and dominate service area searches.",
    color: "#8B5CF6",
  },
];

const processSteps = [
  {
    num: "01",
    title: "SEO Audit",
    desc: "Comprehensive analysis of your current site health, rankings and opportunities.",
    color: "#0EA5E9",
  },
  {
    num: "02",
    title: "Keyword Strategy",
    desc: "Identifying high-value keywords your ideal customers are actually searching for.",
    color: "#0FA3A3",
  },
  {
    num: "03",
    title: "On-Page Optimisation",
    desc: "Optimising site structure, metadata, content and internal linking for impact.",
    color: "#8B5CF6",
  },
  {
    num: "04",
    title: "Off-Page & Links",
    desc: "Strategic link-building and digital PR to grow your search visibility.",
    color: "#D4A437",
  },
  {
    num: "05",
    title: "Monitor & Scale",
    desc: "Ongoing tracking, reporting and refinement to continuously improve rankings.",
    color: "#10B981",
  },
];

/* ═══════════════════════════════════════
   SEO PAGE
   ═══════════════════════════════════════ */
const SeoPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen text-slate-900 overflow-x-hidden">
      {/* ═══════ HERO ═══════ */}
      <section className="relative overflow-hidden border-b border-slate-100 -mt-[1px] pt-12 pb-20 md:pt-16 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/80 via-white to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-10%,rgba(15,163,163,0.10),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.06),transparent_40%)]" />
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(14,165,233,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(14,165,233,0.05) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-200/25 blur-[120px] rounded-full pointer-events-none" />

        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onClick={() => navigate(-1)}
          className="absolute top-6 md:top-8 left-6 md:left-8 z-20
                     group inline-flex items-center gap-2
                     px-4 py-2 rounded-xl
                     border border-slate-200 bg-white/80
                     backdrop-blur-md
                     text-[12px] font-semibold text-slate-500
                     hover:border-sky-300 hover:text-sky-700
                     hover:bg-white
                     transition-all duration-300
                     shadow-sm"
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
                             border border-sky-200/80 bg-white/80
                             backdrop-blur-md shadow-sm shadow-sky-100/50
                             px-5 py-2.5 text-[10px] md:text-[11px]
                             tracking-[0.2em] uppercase text-sky-700
                             font-semibold mb-7"
                >
                  <Search className="w-4 h-4 text-[#0FA3A3]" />
                  Search Engine Optimisation
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                <h1
                  className="text-[2.2rem] sm:text-4xl md:text-5xl
                             font-extrabold leading-[1.08]
                             tracking-tight text-slate-900 mb-5"
                >
                  Rank Higher.
                  <span
                    className="block mt-2 bg-gradient-to-r from-[#0FA3A3] via-sky-500 to-[#D4A437]
                               bg-clip-text text-transparent"
                  >
                    Grow Faster.
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.14}>
                <p className="text-[15px] md:text-base leading-[1.85] text-slate-600 mb-8">
                  Stop missing out on organic traffic. We build robust SEO
                  strategies that put your business directly in front of
                  customers actively searching for your products and services.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center justify-center gap-2
                                 px-7 py-3.5 rounded-2xl font-semibold text-white text-[14px]
                                 bg-slate-900 shadow-lg shadow-slate-900/15
                                 hover:bg-slate-800 hover:shadow-xl
                                 transition-all duration-300"
                    >
                      Get Free SEO Audit
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2
                                 px-7 py-3.5 rounded-2xl font-semibold text-[14px]
                                 text-slate-700 bg-white border border-slate-200
                                 hover:border-sky-300 hover:text-sky-700
                                 shadow-sm transition-all duration-300"
                    >
                      View Case Studies
                    </Link>
                  </motion.div>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.12} direction="left">
              <div className="relative w-full">
                <div
                  className="rounded-[24px] overflow-hidden border border-slate-200/80
                             shadow-xl shadow-slate-200/50"
                >
                  <img
                    src={seoHero}
                    alt="SEO Strategy"
                    className="w-full h-auto min-h-[300px] md:min-h-[400px] object-cover"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 md:-bottom-5 md:-left-5 z-10"
                >
                  <div
                    className="rounded-xl border border-slate-200 bg-white
                               px-4 py-3 shadow-lg shadow-slate-200/60"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200/60 flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-[#0FA3A3]" />
                      </div>
                      <div>
                        <div className="text-slate-900 font-bold text-xs">+300% Traffic</div>
                        <div className="text-[9px] text-slate-500 uppercase tracking-wider">Avg. Growth</div>
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
                    className="rounded-lg border border-amber-200/60 bg-white
                               px-3 py-2 shadow-lg shadow-slate-200/60"
                  >
                    <div className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#D4A437]" />
                      <span className="text-slate-900 font-bold text-[11px]">#1 Rankings</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════ WHAT IS SEO ═══════ */}
      <section className="relative py-20 md:py-28">
        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
            <FadeIn direction="right">
              <div className="w-full rounded-[22px] overflow-hidden border border-slate-200/80 shadow-xl shadow-slate-200/40">
                <img
                  src={seoConcept}
                  alt="SEO Concepts"
                  className="w-full h-auto min-h-[300px] md:min-h-[400px] object-cover"
                />
              </div>
            </FadeIn>

            <div className="max-w-lg">
              <FadeIn>
                <div
                  className="inline-flex items-center gap-2 rounded-full
                             border border-sky-200/80 bg-sky-50/60
                             px-4 py-2 text-[10px] uppercase tracking-[0.2em]
                             text-sky-700 font-semibold mb-6"
                >
                  <FileSearch className="w-3.5 h-3.5 text-[#0FA3A3]" />
                  Understanding SEO
                </div>
              </FadeIn>

              <FadeIn delay={0.06}>
                <h2 className="text-2xl sm:text-3xl md:text-[2.2rem] font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-4">
                  What is <span className="text-[#0FA3A3]">SEO?</span>
                </h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="text-[14px] md:text-[15px] leading-[1.85] text-slate-600 mb-4">
                  SEO (Search Engine Optimisation) is the process of improving
                  your website so it ranks higher in search engines like Google.
                </p>
              </FadeIn>

              <FadeIn delay={0.14}>
                <p className="text-[14px] md:text-[15px] leading-[1.85] text-slate-500 mb-7">
                  Unlike paid ads that stop working the moment you stop paying,
                  SEO builds a sustainable, long-term asset that generates
                  compounding organic traffic, trust, and authority over time.
                </p>
              </FadeIn>

              <FadeIn delay={0.18}>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Eye, text: "Increased Visibility", color: "#0FA3A3" },
                    { icon: Users, text: "More Customers", color: "#0EA5E9" },
                    { icon: LineChart, text: "Organic Growth", color: "#D4A437" },
                    { icon: Shield, text: "Long-Term Asset", color: "#8B5CF6" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 rounded-xl
                                 border border-slate-200/80 bg-slate-50/50
                                 px-3.5 py-2.5 hover:border-sky-200
                                 hover:bg-sky-50/30
                                 transition-colors duration-300"
                    >
                      <item.icon className="w-3.5 h-3.5 shrink-0" style={{ color: item.color }} />
                      <span className="text-[12px] text-slate-700 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <InlineAuditCTA
        title="Get a free SEO audit for your website"
        desc="We’ll identify technical issues, missed keyword opportunities and quick wins that can improve your visibility on Google."
      />

      {/* ═══════ WHY YOUR BUSINESS NEEDS SEO ═══════ */}
      <section className="relative py-20 md:py-28 bg-slate-50/60 border-y border-slate-100">
        <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-8">
          <FadeIn>
            <div className="text-center mb-12 md:mb-14">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 mb-4">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Why SEO Matters
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-[2.2rem] font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-4">
                Why Your Business <span className="text-[#0FA3A3]">Needs SEO</span>
              </h2>
              <p className="text-[14px] text-slate-600 max-w-lg mx-auto leading-relaxed">
                A beautiful website is useless if no one can find it. Here's how
                SEO directly impacts your bottom line.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefitsData.map((item, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div
                  className="group relative h-full rounded-[20px] border border-slate-200/80
                             bg-white p-6
                             shadow-sm shadow-slate-100
                             hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60
                             hover:border-sky-200/80
                             transition-all duration-400"
                >
                  <div
                    className={`w-11 h-11 rounded-xl ${item.lightBg} flex items-center justify-center mb-4
                               group-hover:scale-105 transition-transform duration-300`}
                  >
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>

                  <h3 className="text-[15px] font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-[12px] leading-[1.75] text-slate-600">{item.desc}</p>

                  <span
                    className="absolute top-5 right-6 text-[36px] font-extrabold leading-none
                               text-slate-100 group-hover:text-slate-200/80
                               transition-colors duration-500 select-none"
                  >
                    0{i + 1}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <InlineAuditCTA
        title="See what’s stopping your site from ranking higher"
        desc="Get a free SEO audit and uncover the exact issues affecting your search traffic, lead flow and online visibility."
      />

      {/* ═══════ OUR SEO APPROACH ═══════ */}
      <section className="relative py-20 md:py-28">
        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
            <FadeIn direction="right">
              <div className="relative w-full">
                <div className="rounded-[22px] overflow-hidden border border-slate-200/80 shadow-xl shadow-slate-200/40">
                  <img
                    src={seoGraph}
                    alt="SEO Analytics"
                    className="w-full h-auto min-h-[300px] md:min-h-[400px] object-cover"
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
                    className="rounded-xl border border-slate-200 bg-white
                               px-4 py-3 shadow-lg shadow-slate-200/60"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200/60 flex items-center justify-center">
                        <Globe className="w-4 h-4 text-[#D4A437]" />
                      </div>
                      <div>
                        <div className="text-slate-900 font-bold text-xs">Data-Driven</div>
                        <div className="text-[9px] text-slate-500 uppercase tracking-wider">Methodology</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>

            <div className="max-w-lg">
              <FadeIn>
                <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 mb-4">
                  <Settings className="w-4 h-4 text-[#0FA3A3]" />
                  Our Approach
                </span>
              </FadeIn>

              <FadeIn delay={0.06}>
                <h2 className="text-2xl sm:text-3xl md:text-[2.2rem] font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-4">
                  Our <span className="text-[#0FA3A3]">SEO Approach</span>
                </h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="text-[14px] md:text-[15px] leading-[1.85] text-slate-600 mb-7">
                  We don't guess; we test and measure. Our data-driven
                  methodology ensures we target the right keywords, fix
                  technical issues, and build authority rapidly and safely.
                </p>
              </FadeIn>

              <div className="space-y-3.5">
                {approachSteps.map((step, i) => (
                  <FadeIn key={i} delay={0.14 + i * 0.06} direction="left">
                    <div
                      className="group flex items-start gap-3.5 rounded-xl
                                 border border-slate-200/80 bg-white
                                 p-4 shadow-sm
                                 hover:-translate-y-0.5 hover:shadow-md
                                 hover:border-sky-200
                                 transition-all duration-300"
                    >
                      <div
                        className="w-9 h-9 shrink-0 rounded-lg flex items-center justify-center mt-0.5
                                   group-hover:scale-105 transition-transform duration-300"
                        style={{
                          backgroundColor: `${step.color}12`,
                          border: `1.5px solid ${step.color}25`,
                        }}
                      >
                        <step.icon className="w-4 h-4" style={{ color: step.color }} />
                      </div>
                      <div>
                        <h4 className="text-[14px] font-bold text-slate-900 mb-1">{step.title}</h4>
                        <p className="text-[12px] leading-[1.7] text-slate-600">{step.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <InlineAuditCTA
        title="Not sure where your SEO stands right now?"
        desc="Request a free SEO audit and get expert insights into your rankings, speed, content structure and growth opportunities."
      />

      {/* ═══════ PROCESS ═══════ */}
      <section className="relative py-20 md:py-28 bg-slate-50/60 border-y border-slate-100">
        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
          <FadeIn>
            <div className="text-center mb-12 md:mb-14">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 mb-4">
                <Zap className="w-4 h-4 text-amber-500" />
                Our Process
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-[2.2rem] font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-4">
                How We Deliver <span className="text-[#0FA3A3]">SEO Results</span>
              </h2>
              <p className="text-[14px] text-slate-600 max-w-lg mx-auto leading-relaxed">
                A proven five-step process refined over hundreds of projects to
                deliver consistent, measurable SEO growth.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-5 md:grid-cols-5">
            {processSteps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="group relative h-full">
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:flex absolute top-10 -right-3 z-10">
                      <ChevronRight className="w-4 h-4 text-slate-300" />
                    </div>
                  )}

                  <div
                    className="relative h-full rounded-2xl border border-slate-200/80 bg-white
                               p-5 shadow-sm
                               hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/60
                               hover:border-sky-200
                               transition-all duration-400"
                  >
                    <span
                      className="text-[28px] font-extrabold leading-none block mb-3 select-none
                                 text-slate-100 group-hover:text-slate-200
                                 transition-colors duration-500"
                    >
                      {step.num}
                    </span>
                    <h3 className="text-[14px] font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-[11px] leading-[1.7] text-slate-600">{step.desc}</p>

                    <div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[2px] rounded-full
                                 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ backgroundColor: step.color }}
                    />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CtaSection 
        title="Ready to Dominate Google Search Results?"
        subtitle="Our data-driven SEO strategies help Australian businesses get more organic traffic, higher rankings and more conversions. Let's start with a free audit."
        ctaText="Get Free SEO Audit"
      />

    </div>
  );
};

export default SeoPage;