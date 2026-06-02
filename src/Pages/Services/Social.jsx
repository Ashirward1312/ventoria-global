import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Share2,
  Users,
  Target,
  PenTool,
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  Eye,
  MessageSquare,
  Sparkles,
  Zap,
  BarChart3,
  Award,
  ChevronRight,
  Globe,
  Shield,
  MousePointerClick,
  LineChart,
  DollarSign,
  Layers,
  RefreshCw,
} from "lucide-react";
import CtaSection from "../../Components/CtaSection";


import socialHero from "../img/l7.webp";
import socialConcept from "../img/l8.webp";
import socialGraph from "../img/l9.webp";

/* ───────── FadeIn ───────── */
const FadeIn = ({ children, delay = 0, direction = "up", className = "" }) => {
  const dirs = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { y: 0, x: 24 },
    right: { y: 0, x: -24 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...dirs[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ───────── Inline CTA ───────── */
const InlineSocialCTA = ({
  title = "Need better returns from your social media ads?",
  text = "Book a free strategy call and let’s build a data-driven campaign that reaches the right audience and turns attention into enquiries.",
  buttonText = "Book Free Strategy Call",
}) => {
  return (
    <section className="py-8 md:py-10 bg-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <FadeIn>
          <div
            className="relative overflow-hidden rounded-[24px] border border-slate-200/80
                       bg-gradient-to-r from-slate-900 via-slate-800 to-sky-900
                       px-6 py-7 md:px-8 md:py-8
                       shadow-xl shadow-slate-900/10"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky-400/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-teal-400/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-200">
                  <TrendingUp className="h-3.5 w-3.5 text-[#0FA3A3]" />
                  Social Growth CTA
                </div>

                <h3 className="mb-2 text-[1.2rem] font-bold leading-snug text-white md:text-[1.45rem]">
                  {title}
                </h3>

                <p className="text-[13px] leading-[1.75] text-slate-300 md:text-[14px]">
                  {text}
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="shrink-0"
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl
                             bg-white px-6 py-3 text-[13px] font-semibold text-slate-900
                             shadow-lg transition-all duration-300 hover:bg-slate-50 hover:shadow-xl md:text-[14px]"
                >
                  {buttonText}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
const strategyCards = [
  {
    icon: TrendingUp,
    title: "Campaign Strategy",
    desc: "Scalable roadmap with exact channels, formats and budgets to hit your ROI targets.",
    color: "#0FA3A3",
    lightBg: "bg-teal-50",
  },
  {
    icon: Target,
    title: "Audience Targeting",
    desc: "Advanced pixel data and lookalike audiences to reach your most profitable prospects.",
    color: "#0EA5E9",
    lightBg: "bg-sky-50",
  },
  {
    icon: PenTool,
    title: "Creative Ad Design",
    desc: "Thumb-stopping visuals and compelling copy that capture attention instantly.",
    color: "#D4A437",
    lightBg: "bg-amber-50",
  },
  {
    icon: MousePointerClick,
    title: "Conversion Optimisation",
    desc: "Testing creatives, audiences and landing experiences to improve results over time.",
    color: "#8B5CF6",
    lightBg: "bg-violet-50",
  },
];

const impactMetrics = [
  {
    icon: Eye,
    title: "Brand Awareness",
    desc: "Keep your brand visible in front of the right audience and build recognition over time.",
    color: "#0FA3A3",
  },
  {
    icon: MessageSquare,
    title: "Engagement & Retargeting",
    desc: "Reconnect with users who visited, clicked or engaged but didn’t convert the first time.",
    color: "#0EA5E9",
  },
  {
    icon: Users,
    title: "Leads & Enquiries",
    desc: "Drive new enquiries and better business opportunities through targeted campaigns.",
    color: "#D4A437",
  },
];

const whyCards = [
  {
    icon: DollarSign,
    title: "ROI-Focused",
    desc: "Every campaign is measured and optimised to maximise return on ad spend.",
    color: "#0FA3A3",
  },
  {
    icon: Layers,
    title: "Multi-Platform",
    desc: "Campaigns across Facebook, Instagram, LinkedIn and other relevant channels.",
    color: "#0EA5E9",
  },
  {
    icon: Shield,
    title: "Full Transparency",
    desc: "Clear reporting so you always know where budget is going and what it’s delivering.",
    color: "#D4A437",
  },
  {
    icon: RefreshCw,
    title: "Continuous Testing",
    desc: "We keep improving creatives, audiences and ad structure for better results.",
    color: "#8B5CF6",
  },
  {
    icon: Globe,
    title: "Australian Market Focus",
    desc: "Strategies aligned with local business goals, customer behaviour and competition.",
    color: "#10B981",
  },
  {
    icon: LineChart,
    title: "Scalable Growth",
    desc: "Start smart, prove performance, then scale campaigns with confidence.",
    color: "#0FA3A3",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Audit & Goals",
    desc: "We analyse your current marketing and define the right campaign objectives.",
    color: "#0EA5E9",
  },
  {
    num: "02",
    title: "Audience Research",
    desc: "We identify the right audience segments, behaviours and targeting opportunities.",
    color: "#0FA3A3",
  },
  {
    num: "03",
    title: "Creative & Copy",
    desc: "We design ad creatives and messaging built to attract attention and clicks.",
    color: "#8B5CF6",
  },
  {
    num: "04",
    title: "Launch & Test",
    desc: "Campaigns go live with structured testing across creatives, placements and audiences.",
    color: "#D4A437",
  },
  {
    num: "05",
    title: "Optimise & Scale",
    desc: "We refine performance and scale the best-performing campaigns for stronger growth.",
    color: "#10B981",
  },
];

/* ═══════════════════════════════════════
   SOCIAL PAGE
═══════════════════════════════════════ */
const SocialPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/80 via-white to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-10%,rgba(15,163,163,0.10),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.06),transparent_40%)]" />
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(14,165,233,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(14,165,233,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -top-20 left-1/2 h-[300px] w-[620px] -translate-x-1/2 rounded-full bg-sky-200/20 blur-[110px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-14 pt-8 md:px-8 md:pb-18 md:pt-10">
          <FadeIn className="mb-8">
            <button
              onClick={() => navigate(-1)}
              className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/85 px-4 py-2 text-[12px] font-semibold text-slate-500 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-sky-300 hover:bg-white hover:text-sky-700"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
              Back
            </button>
          </FadeIn>

          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
            <div className="max-w-[580px] pt-2">
              <FadeIn>
                <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-sky-200/80 bg-white/80 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-700 shadow-sm shadow-sky-100/50 backdrop-blur-md md:text-[11px]">
                  <Share2 className="h-4 w-4 text-[#0FA3A3]" />
                  Social Media Advertising
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                <h1 className="mb-4 text-[2.2rem] font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                  Reach the Right
                  <span className="mt-2 block bg-gradient-to-r from-[#0FA3A3] via-sky-500 to-[#D4A437] bg-clip-text text-transparent">
                    Audience. Every Time.
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.14}>
                <p className="mb-7 text-[15px] leading-[1.9] text-slate-600 md:text-[16px]">
                  Targeted advertising campaigns that increase brand awareness,
                  generate qualified enquiries and create better opportunities
                  for business growth across major social platforms.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center gap-2 rounded-2xl
                                 bg-slate-900 px-7 py-3.5 text-[14px] font-semibold text-white
                                 shadow-lg shadow-slate-900/15 transition-all duration-300
                                 hover:bg-slate-800 hover:shadow-xl"
                    >
                      Launch Your Campaign
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <a
                      href="#impact"
                      className="inline-flex items-center gap-2 rounded-2xl border border-slate-200
                                 bg-white px-7 py-3.5 text-[14px] font-semibold text-slate-700
                                 shadow-sm transition-all duration-300 hover:border-sky-300 hover:text-sky-700"
                    >
                      View Results
                    </a>
                  </motion.div>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.12} direction="left">
              <div className="relative mx-auto w-full max-w-[500px] lg:ml-auto">
                <div className="overflow-hidden rounded-[24px] border border-slate-200/80 shadow-xl shadow-slate-200/40">
                  <img
                    src={socialHero}
                    alt="Social Media Marketing"
                    className="w-full h-auto block"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.45 }}
                  className="absolute -bottom-4 left-4 z-10 md:-bottom-5 md:left-5"
                >
                  <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg shadow-slate-200/60">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-teal-200/60 bg-teal-50">
                        <TrendingUp className="h-4 w-4 text-[#0FA3A3]" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">5x ROAS</div>
                        <div className="text-[9px] uppercase tracking-wider text-slate-500">
                          Avg. Return
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.6 }}
                  className="absolute right-4 top-4 z-10 md:right-5 md:top-5"
                >
                  <div className="rounded-lg border border-amber-200/60 bg-white px-3 py-2 shadow-lg shadow-slate-200/60">
                    <div className="flex items-center gap-1.5">
                      <Award className="h-3.5 w-3.5 text-[#D4A437]" />
                      <span className="text-[11px] font-bold text-slate-900">
                        Multi-Platform
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* STRATEGY */}
      <section className="relative py-16 md:py-20">
        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
            <div>
              <FadeIn>
                <span className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                  <Sparkles className="h-4 w-4 text-amber-500" />
                  Our Strategy
                </span>
              </FadeIn>

              <FadeIn delay={0.06}>
                <h2 className="mb-3 text-2xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-3xl md:text-[2.2rem]">
                  Strategy That <span className="text-[#0FA3A3]">Pays For Itself</span>
                </h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="mb-7 max-w-lg text-[15px] leading-[1.8] text-slate-600">
                  We build data-driven funnels across Facebook, Instagram,
                  LinkedIn and other key platforms that turn attention into
                  action.
                </p>
              </FadeIn>

              <div className="grid gap-4 sm:grid-cols-2">
                {strategyCards.map((item, i) => (
                  <FadeIn key={i} delay={0.12 + i * 0.05}>
                    <div className="group rounded-2xl border border-slate-200/80 bg-white p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200/80 hover:shadow-lg hover:shadow-slate-200/60">
                      <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${item.lightBg} transition-transform duration-300 group-hover:scale-105`}>
                        <item.icon className="h-5 w-5" style={{ color: item.color }} />
                      </div>
                      <h3 className="mb-2 text-[15px] font-bold text-slate-900 md:text-base">
                        {item.title}
                      </h3>
                      <p className="text-[13px] leading-[1.75] text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            <FadeIn direction="left" delay={0.08}>
              <div className="mx-auto w-full max-w-[500px] lg:ml-auto">
                <div className="overflow-hidden rounded-[20px] border border-slate-200/80 shadow-xl shadow-slate-200/40">
                  <img
                    src={socialConcept}
                    alt="Social Media Ad Structures"
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <InlineSocialCTA
        title="Need a smarter strategy for your paid social campaigns?"
        text="Book a free strategy call and let’s create a campaign structure designed to reach better audiences, lower wasted spend and improve returns."
      />

      {/* IMPACT */}
      <section
        id="impact"
        className="relative border-y border-slate-100 bg-slate-50/60 py-16 md:py-20 scroll-mt-24"
      >
        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
            <FadeIn direction="right">
              <div className="relative mx-auto w-full max-w-[500px]">
                <div className="overflow-hidden rounded-[20px] border border-slate-200/80 shadow-xl shadow-slate-200/40">
                  <img
                    src={socialGraph}
                    alt="Ad Performance Analytics"
                    className="w-full h-auto block"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="absolute -bottom-4 right-4 z-10"
                >
                  <div className="rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-lg shadow-slate-200/60">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md border border-teal-200/60 bg-teal-50">
                        <BarChart3 className="h-4 w-4 text-[#0FA3A3]" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-slate-900">Full Tracking</div>
                        <div className="text-[8px] uppercase tracking-wider text-slate-500">
                          Every Dollar
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>

            <div className="max-w-xl">
              <FadeIn>
                <span className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                  <BarChart3 className="h-4 w-4 text-[#0FA3A3]" />
                  The Impact
                </span>
              </FadeIn>

              <FadeIn delay={0.06}>
                <h2 className="mb-3 text-2xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-3xl md:text-[2.2rem]">
                  Track Every Dollar <span className="text-[#0FA3A3]">You Spend</span>
                </h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="mb-7 text-[15px] leading-[1.8] text-slate-600">
                  Complete transparency with advanced tracking across your
                  funnel so you can see how many impressions, clicks, leads and
                  conversions your campaigns are generating.
                </p>
              </FadeIn>

              <div className="space-y-4">
                {impactMetrics.map((item, i) => (
                  <FadeIn key={i} delay={0.12 + i * 0.05} direction="left">
                    <div className="group flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md">
                      <div
                        className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                        style={{
                          backgroundColor: `${item.color}12`,
                          border: `1.5px solid ${item.color}25`,
                        }}
                      >
                        <item.icon className="h-4 w-4" style={{ color: item.color }} />
                      </div>
                      <div>
                        <h4 className="mb-1 text-[15px] font-bold text-slate-900">
                          {item.title}
                        </h4>
                        <p className="text-[13px] leading-[1.75] text-slate-600">
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

      <InlineSocialCTA
        title="Want better visibility into your campaign performance?"
        text="Book a free strategy call and we’ll show you how to track clicks, leads and conversions with more clarity and better decision-making."
      />

      {/* WHY CHOOSE US */}
      <section className="relative py-16 md:py-20">
        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
          <FadeIn>
            <div className="mb-10 text-center md:mb-12">
              <span className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                <Award className="h-4 w-4 text-amber-500" />
                Why Choose Us
              </span>
              <h2 className="mb-3 text-2xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-3xl md:text-[2.2rem]">
                What Makes Our Campaigns <span className="text-[#0FA3A3]">Different</span>
              </h2>
              <p className="mx-auto max-w-xl text-[15px] leading-[1.75] text-slate-600">
                We don't just run ads — we build growth engines powered by data,
                creativity and ongoing optimisation.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="group relative h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-100 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200/80 hover:shadow-lg hover:shadow-slate-200/60">
                  <div
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: `${item.color}12`,
                      border: `1.5px solid ${item.color}22`,
                    }}
                  >
                    <item.icon className="h-5 w-5" style={{ color: item.color }} />
                  </div>

                  <h3 className="mb-2 text-[15px] font-bold text-slate-900 md:text-base">
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-[1.75] text-slate-600">
                    {item.desc}
                  </p>

                  <span className="absolute right-5 top-4 select-none text-[34px] font-extrabold leading-none text-slate-100 transition-colors duration-500 group-hover:text-slate-200/80">
                    0{i + 1}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <InlineSocialCTA
        title="Ready to scale with a more reliable social media strategy?"
        text="Let’s build campaigns that combine strong creative, precise targeting and continuous optimisation for long-term growth."
      />

      {/* PROCESS */}
      <section className="relative border-y border-slate-100 bg-slate-50/60 py-16 md:py-20">
        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
          <FadeIn>
            <div className="mb-10 text-center md:mb-12">
              <span className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                <Zap className="h-4 w-4 text-amber-500" />
                Our Process
              </span>
              <h2 className="mb-3 text-2xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-3xl md:text-[2.2rem]">
                How We Build Your <span className="text-[#0FA3A3]">Ad Campaigns</span>
              </h2>
              <p className="mx-auto max-w-xl text-[15px] leading-[1.75] text-slate-600">
                A proven process that ensures your campaigns are strategic,
                targeted and continuously improved.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="group relative h-full">
                  {i < processSteps.length - 1 && (
                    <div className="absolute -right-2.5 top-10 z-10 hidden xl:flex">
                      <ChevronRight className="h-4 w-4 text-slate-300" />
                    </div>
                  )}

                  <div className="relative h-full rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg hover:shadow-slate-200/60">
                    <span className="mb-3 block select-none text-[28px] font-extrabold leading-none text-slate-100 transition-colors duration-500 group-hover:text-slate-200">
                      {step.num}
                    </span>
                    <h3 className="mb-2 text-[15px] font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-[12px] leading-[1.7] text-slate-600">
                      {step.desc}
                    </p>

                    <div
                      className="absolute bottom-0 left-1/2 h-[2px] w-12 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
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
        title="Ready to Scale Your Brand with Social Advertising?"
        subtitle="Stop wasting budget on clicks that don't convert. Let’s build a high-performance social funnel that drives real revenue for your Australian business."
        ctaText="Start Scaling Now"
      />
    </div>
  );
};

export default SocialPage;