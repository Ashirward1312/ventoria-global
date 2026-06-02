import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  LineChart,
  ShieldCheck,
  Building2,
  HeartPulse,
  Home,
  ShoppingBag,
  BriefcaseBusiness,
  SearchCheck,
  Settings2,
  Megaphone,
  RefreshCw,
  Sparkles,
  Zap,
  ChevronRight,
  Globe,
  Target,
} from "lucide-react";

/* ───────── Fade-in wrapper ───────── */
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
const InlineGrowthCTA = ({
  title = "Need a growth strategy built around your business?",
  text = "Book a free growth consultation and discover how Ventoria Global can help you attract more customers, generate leads and scale with clarity.",
  buttonText = "Book Free Growth Consultation",
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
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-cyan-300/10 blur-3xl pointer-events-none" />
            <div className="absolute left-1/2 top-0 h-[1px] w-[40%] -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />

            <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-200">
                  <Zap className="h-3.5 w-3.5 text-amber-400" />
                  Growth CTA
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
const advantages = [
  {
    title: "Clear Marketing Strategies",
    text: "We create focused digital strategies with clear direction, priorities and measurable business outcomes that align with your goals.",
    icon: ClipboardList,
    color: "#0EA5E9",
    gradient: "from-sky-500 to-cyan-500",
    lightBg: "bg-sky-50",
  },
  {
    title: "Transparent Reporting",
    text: "You always know what's happening with honest communication, clear reporting, detailed analytics and full visibility into every campaign.",
    icon: ShieldCheck,
    color: "#10B981",
    gradient: "from-emerald-500 to-teal-500",
    lightBg: "bg-emerald-50",
  },
  {
    title: "Scalable Digital Systems",
    text: "We build strong digital foundations that support lead generation, performance tracking and long-term sustainable expansion.",
    icon: Settings2,
    color: "#8B5CF6",
    gradient: "from-violet-500 to-indigo-500",
    lightBg: "bg-violet-50",
  },
  {
    title: "Australian Market Expertise",
    text: "Our strategies are tailored to the needs, competition and opportunities within Australian markets across all major cities and regions.",
    icon: BarChart3,
    color: "#F59E0B",
    gradient: "from-amber-500 to-orange-500",
    lightBg: "bg-amber-50",
  },
];

const industries = [
  {
    title: "Professional Services",
    icon: BriefcaseBusiness,
    text: "Law firms, consultants, accountants and service-based businesses looking to grow their client base.",
    color: "#0EA5E9",
    lightBg: "bg-sky-50",
  },
  {
    title: "Healthcare & Clinics",
    icon: HeartPulse,
    text: "Medical clinics, allied health practices and wellness providers seeking more patient bookings.",
    color: "#EF4444",
    lightBg: "bg-red-50",
  },
  {
    title: "Real Estate & Property",
    icon: Building2,
    text: "Agencies, property groups and real estate professionals wanting to dominate local search.",
    color: "#8B5CF6",
    lightBg: "bg-violet-50",
  },
  {
    title: "Home Services Businesses",
    icon: Home,
    text: "Trades, maintenance, renovations and local service providers aiming for consistent leads.",
    color: "#10B981",
    lightBg: "bg-emerald-50",
  },
  {
    title: "E-Commerce Brands",
    icon: ShoppingBag,
    text: "Online stores focused on visibility, conversions, repeat purchases and sustainable growth.",
    color: "#F59E0B",
    lightBg: "bg-amber-50",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Strategy & Analysis",
    text: "We analyse your business, industry, competitors and digital presence to identify growth opportunities.",
    icon: SearchCheck,
    color: "#0EA5E9",
  },
  {
    number: "02",
    title: "Digital Architecture",
    text: "We build the digital systems, websites and funnels required for lead generation and online growth.",
    icon: Settings2,
    color: "#8B5CF6",
  },
  {
    number: "03",
    title: "Campaign Execution",
    text: "Our team implements targeted marketing campaigns across search, web and social platforms.",
    icon: Megaphone,
    color: "#10B981",
  },
  {
    number: "04",
    title: "Continuous Optimisation",
    text: "We monitor performance metrics and continuously refine strategies to maximise your results.",
    icon: RefreshCw,
    color: "#F59E0B",
  },
];

/* ═══════════════════════════════════════════════════════════════
   WHY CHOOSE PAGE
═══════════════════════════════════════════════════════════════ */
const WhyChoosePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/80 via-white to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-10%,rgba(14,165,233,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.08),transparent_40%)]" />

        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(14,165,233,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(14,165,233,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-200/25 blur-[110px] pointer-events-none" />
        <div className="absolute right-[10%] top-16 h-[180px] w-[180px] rounded-full bg-amber-200/20 blur-[90px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-14 pt-24 md:px-8 md:pb-16 md:pt-28">
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn>
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-sky-200/80 bg-white/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-700 shadow-sm shadow-sky-100/50 backdrop-blur-md md:text-[11px]">
                <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
                Ventoria Global
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="mb-4 text-[2rem] font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-[3.2rem]">
                Why Choose
                <span className="mt-1.5 block bg-gradient-to-r from-sky-600 via-cyan-500 to-amber-500 bg-clip-text text-transparent">
                  Ventoria Global
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.14}>
              <p className="mx-auto mb-8 max-w-2xl text-[15px] leading-[1.8] text-slate-600 md:text-base">
                Businesses choose Ventoria Global because we focus on results,
                strategy and long-term growth. We don't just run marketing
                campaigns — we build growth architectures that support
                sustainable business expansion.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2.5 rounded-2xl bg-slate-900 px-6 py-3.5 text-[14px] font-semibold text-white shadow-lg shadow-slate-900/15 transition-all duration-300 hover:bg-slate-800 hover:shadow-xl"
                  >
                    Book Free Growth Consultation
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>

                {/* <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <a
                    href="#process"
                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-[14px] font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-sky-300 hover:text-sky-700"
                  >
                    View Our Process
                  </a>
                </motion.div> */}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-14 md:py-18">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <FadeIn>
            <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
              <span className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                <Sparkles className="h-4 w-4 text-amber-500" />
                Our Advantages
              </span>
              <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                Strategy-led, performance-focused
                <span className="block text-sky-600">and built for growth</span>
              </h2>
              <p className="mx-auto max-w-xl text-[15px] leading-[1.8] text-slate-600">
                Our approach combines clarity, transparency and scalable systems
                so your business can grow with confidence.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {advantages.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={i * 0.08}>
                  <div className="group relative h-full rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-100 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200/80 hover:shadow-lg hover:shadow-slate-200/50">
                    <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${item.lightBg} transition-transform duration-300 group-hover:scale-105`}>
                      <Icon className="h-5 w-5" style={{ color: item.color }} />
                    </div>

                    <h3 className="mb-2.5 text-[16px] font-bold leading-snug text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mb-5 text-[13.5px] leading-[1.75] text-slate-600">
                      {item.text}
                    </p>

                    <div className={`h-1 w-14 rounded-full bg-gradient-to-r ${item.gradient} transition-all duration-500 group-hover:w-20`} />

                    <span className="absolute right-6 top-5 select-none text-[34px] font-extrabold leading-none text-slate-100 transition-colors duration-500 group-hover:text-slate-200/80">
                      0{i + 1}
                    </span>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <InlineGrowthCTA
        title="Want a digital growth partner that thinks beyond short-term campaigns?"
        text="Book a free growth consultation and let’s map out a strategy that improves visibility, lead flow and long-term business growth."
      />

      {/* INDUSTRIES */}
      <section className="border-y border-slate-100 bg-slate-50/70 py-14 md:py-18">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
            <div>
              <FadeIn>
                <span className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                  <Globe className="h-4 w-4 text-amber-500" />
                  Industries We Serve
                </span>
              </FadeIn>

              <FadeIn delay={0.06}>
                <h2 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-[2rem]">
                  Supporting Australian businesses
                  <span className="block text-sky-600">
                    across diverse industries
                  </span>
                </h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="mb-6 text-[15px] leading-[1.8] text-slate-600">
                  Our services support businesses across a wide range of
                  industries, with strategies tailored to help them compete
                  effectively in today's digital landscape.
                </p>
              </FadeIn>

              <FadeIn delay={0.14}>
                <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-50">
                      <LineChart className="h-5 w-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="mb-1.5 text-[16px] font-bold text-slate-900">
                        Industry-Aware Digital Strategy
                      </h3>
                      <p className="text-[13.5px] leading-[1.75] text-slate-600">
                        We adapt messaging, channels and conversion strategies
                        based on your specific market, audience behaviour and
                        business goals.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.18}>
                <div className="mt-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-50">
                      <Target className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="mb-1.5 text-[16px] font-bold text-slate-900">
                        Tailored for Australian Markets
                      </h3>
                      <p className="text-[13.5px] leading-[1.75] text-slate-600">
                        Every strategy is built with Australian consumer
                        behaviour, local competition and regional market dynamics
                        in mind.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {industries.map((item, index) => {
                const Icon = item.icon;
                return (
                  <FadeIn
                    key={item.title}
                    delay={index * 0.07}
                    direction="left"
                    className={index === industries.length - 1 ? "sm:col-span-2" : ""}
                  >
                    <div className="group h-full rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-md">
                      <div className="flex items-start gap-4">
                        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${item.lightBg} transition-transform duration-300 group-hover:scale-105`}>
                          <Icon className="h-5 w-5" style={{ color: item.color }} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="mb-1 text-[15px] font-bold text-slate-900 md:text-base">
                            {item.title}
                          </h3>
                          <p className="text-[13px] leading-[1.7] text-slate-600 md:text-sm">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <InlineGrowthCTA
        title="Looking for a strategy that fits your industry and market?"
        text="Book a free growth consultation and we’ll show you how a tailored digital system can support stronger leads, better visibility and smarter growth."
      />

      {/* PROCESS */}
      {/* <section id="process" className="py-14 md:py-18">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <FadeIn>
            <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
              <span className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                <Zap className="h-4 w-4 text-amber-500" />
                Our Process
              </span>
              <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                A clear process built to
                <span className="block text-sky-600">drive digital growth</span>
              </h2>
              <p className="mx-auto max-w-xl text-[15px] leading-[1.8] text-slate-600">
                From analysis to optimisation, every step is designed to build
                momentum and improve business results.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-5 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <FadeIn key={step.number} delay={index * 0.08}>
                  <div className="group relative h-full">
                    {index < processSteps.length - 1 && (
                      <div className="absolute left-[calc(100%+2px)] top-10 z-0 hidden w-[calc(100%-16px)] lg:block">
                        <div className="h-[2px] w-full bg-gradient-to-r from-sky-200 via-sky-100 to-transparent" />
                        <ChevronRight className="absolute -right-1 -top-[7px] h-4 w-4 text-sky-300" />
                      </div>
                    )}

                    <div className="relative h-full rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200/80 hover:shadow-lg hover:shadow-slate-200/50">
                      <div className="mb-5 flex items-center justify-between">
                        <span
                          className="text-sm font-extrabold tracking-[0.2em]"
                          style={{ color: step.color }}
                        >
                          {step.number}
                        </span>
                        <div
                          className="flex h-11 w-11 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
                          style={{ backgroundColor: `${step.color}12` }}
                        >
                          <Icon className="h-5 w-5" style={{ color: step.color }} />
                        </div>
                      </div>

                      <h3 className="mb-2.5 text-[17px] font-bold text-slate-900">
                        {step.title}
                      </h3>

                      <p className="mb-4 text-[13.5px] leading-[1.75] text-slate-600">
                        {step.text}
                      </p>

                      <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                        <span>Growth-focused step</span>
                      </div>

                      <span className="pointer-events-none absolute bottom-4 right-5 select-none text-[42px] font-extrabold leading-none text-slate-50 transition-colors duration-500 group-hover:text-slate-100">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* <InlineGrowthCTA
        title="Want a clear roadmap for attracting more customers online?"
        text="Book a free growth consultation and let’s identify the right strategy, systems and next steps to move your business forward."
      /> */}

      {/* FINAL CTA */}
      {/* <section className="py-14 md:py-18">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 px-6 py-10 text-white shadow-2xl shadow-slate-900/15 md:px-10 md:py-12">
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-sky-400/15 blur-[70px]" />
              <div className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-cyan-300/10 blur-[70px]" />
              <div className="absolute left-1/2 top-0 h-[1px] w-[45%] -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />

              <div className="relative z-10 mx-auto max-w-3xl text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-200 backdrop-blur-md">
                  <Zap className="h-3.5 w-3.5 text-amber-400" />
                  Ready to Grow?
                </div>

                <h2 className="mb-4 text-2xl font-extrabold leading-[1.15] tracking-tight sm:text-3xl md:text-4xl">
                  Ready to Grow Your
                  <span className="mt-1 block bg-gradient-to-r from-sky-300 via-cyan-300 to-amber-300 bg-clip-text text-transparent">
                    Business Online?
                  </span>
                </h2>

                <p className="mx-auto mb-8 max-w-xl text-[15px] leading-[1.8] text-slate-300">
                  Let's discuss how Ventoria Global can help you attract more
                  customers, generate consistent leads and scale your digital
                  presence.
                </p>

                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center gap-2.5 rounded-2xl bg-white px-6 py-3.5 text-[14px] font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:bg-slate-50 hover:shadow-xl"
                    >
                      Book Your Free Growth Consultation
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3.5 text-[14px] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/15"
                    >
                      Explore Our Services
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section> */}
    </main>
  );
};

export default WhyChoosePage;