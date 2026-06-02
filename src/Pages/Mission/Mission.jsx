import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Target,
  Eye,
  Layers3,
  BarChart3,
  LineChart,
  Zap,
  Shield,
  Users,
  Globe,
  Lightbulb,
  Compass,
  Heart,
  Rocket,
  Quote,
  Star,
  Search,
} from "lucide-react";

/* ───────── Floating Particles ───────── */
const FloatingParticles = () => {
  const particles = React.useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 10 + 8,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.16 + 0.04,
      })),
    []
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
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

/* ───────── Inline Audit CTA ───────── */
const InlineAuditCTA = ({
  title = "Want clarity on your digital growth opportunities?",
  text = "Get your free audit and discover where your business can improve visibility, conversions and long-term digital performance.",
  buttonText = "Get Your Free Audit",
}) => {
  return (
    <section className="relative py-8 md:py-10">
      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-8">
        <FadeIn>
          <div
            className="relative overflow-hidden rounded-[24px] border border-[#1C3F63]/50
                       bg-gradient-to-r from-[#0B1F3A]/75 via-[#0F2A44]/65 to-[#0A1A2E]/80
                       backdrop-blur-sm px-6 py-7 md:px-8 md:py-8
                       shadow-[0_18px_50px_rgba(0,0,0,0.24)]"
          >
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#0FA3A3]/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[#D4A437]/10 blur-3xl pointer-events-none" />
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[1px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(15,163,163,0.45), transparent)",
              }}
            />

            <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div
                  className="inline-flex items-center gap-2 rounded-full
                             border border-[#1C3F63]/60 bg-[#0F2A44]/45
                             px-4 py-2 text-[10px] uppercase tracking-[0.18em]
                             text-[#8FA7C0] mb-3"
                >
                  <Search className="w-3.5 h-3.5 text-[#0FA3A3]" />
                  Free Digital Audit
                </div>

                <h3 className="text-[1.2rem] md:text-[1.45rem] font-bold text-white mb-2 leading-snug">
                  {title}
                </h3>

                <p className="text-[13px] md:text-[14px] leading-[1.75] text-[#8FA7C0]">
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
const valueCards = [
  {
    title: "Marketing Expertise",
    text: "We align strategy, messaging and channel execution to attract the right audience and generate meaningful business opportunities.",
    icon: Target,
    color: "#0FA3A3",
    colorLight: "rgba(15,163,163,0.12)",
    colorBorder: "rgba(15,163,163,0.25)",
  },
  {
    title: "Technology-Driven Systems",
    text: "We build smart digital systems that support lead generation, conversion tracking and sustainable business growth at scale.",
    icon: Layers3,
    color: "#D4A437",
    colorLight: "rgba(212,164,55,0.12)",
    colorBorder: "rgba(212,164,55,0.25)",
  },
  {
    title: "Analytics & Performance",
    text: "We use data, reporting and continuous optimisation to ensure every strategy is measurable and continuously improving.",
    icon: BarChart3,
    color: "#47C7FF",
    colorLight: "rgba(71,199,255,0.12)",
    colorBorder: "rgba(71,199,255,0.25)",
  },
];

const testimonials = [
  {
    name: "James Walker",
    role: "Founder, GrowthEdge",
    text: "The team brought real clarity to our digital strategy. We didn’t just get better marketing — we got a complete system that improved lead flow and business confidence.",
    rating: 5,
    color: "#0FA3A3",
  },
  {
    name: "Sophie Bennett",
    role: "Director, Elevate Studio",
    text: "From the website to performance strategy, everything felt intentional and measured. Their approach helped us move from guesswork to a much stronger growth model.",
    rating: 5,
    color: "#D4A437",
  },
  {
    name: "Daniel Foster",
    role: "Managing Partner, Apex Advisory",
    text: "What stood out most was their strategic thinking. They understood our business goals and translated them into digital systems that actually supported long-term growth.",
    rating: 5,
    color: "#47C7FF",
  },
];

const coreValues = [
  {
    icon: Shield,
    title: "Transparency",
    text: "Honest communication, clear reporting and full visibility — always.",
    color: "#0FA3A3",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "Continuously exploring new strategies and technologies for better results.",
    color: "#5ED4D4",
  },
  {
    icon: Users,
    title: "Partnership",
    text: "We work as an extension of your team, invested in your success.",
    color: "#D4A437",
  },
  {
    icon: Compass,
    title: "Strategic Thinking",
    text: "Every decision is guided by data, market insight and business goals.",
    color: "#47C7FF",
  },
];

/* ═══════════════════════════════════════
   MISSION & VISION PAGE
   ═══════════════════════════════════════ */
const MissionVisionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#060F1E] text-white overflow-x-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_1200px_700px_at_50%_-10%,rgba(15,40,70,0.95),rgba(6,15,30,1))]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(15,163,163,0.20) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(15,163,163,0.20) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <FloatingParticles />

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-22">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#0FA3A3]/[0.06] blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute top-[20%] right-[8%] w-[280px] h-[280px] bg-[#5ED4D4]/[0.04] blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-8 text-center">
          <FadeIn>
            <div
              className="inline-flex items-center gap-2.5 rounded-full
                         border border-[#1C3F63]/60 bg-[#0F2A44]/45
                         backdrop-blur-md px-5 py-2.5
                         text-[10px] md:text-[11px] tracking-[0.22em]
                         uppercase text-[#7A96B4]
                         shadow-[0_4px_20px_rgba(0,0,0,0.2)] mb-7"
            >
              <Sparkles className="w-4 h-4 text-[#D4A437]" />
              Mission • Vision • Testimonials
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1
              className="text-[2.1rem] sm:text-4xl md:text-5xl lg:text-[3.2rem]
                         font-extrabold leading-[1.1] tracking-tight mb-5"
            >
              Built on Strategy,
              <span
                className="block mt-2 bg-gradient-to-r from-[#0FA3A3] via-[#5ED4D4] to-[#D4A437]
                           bg-clip-text text-transparent"
              >
                Focused on Growth
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="mx-auto max-w-xl text-[15px] md:text-base leading-[1.85] text-[#9AB4CC] mb-9">
              We build digital growth systems designed to help businesses
              attract customers, generate leads and scale effectively with
              clarity, performance and long-term direction.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2.5
                             px-7 py-3.5 rounded-2xl font-semibold text-white text-[15px]
                             bg-gradient-to-r from-[#0FA3A3] to-[#0D8F8F]
                             shadow-[0_8px_28px_rgba(15,163,163,0.25)]
                             hover:shadow-[0_12px_36px_rgba(15,163,163,0.35)]
                             transition-shadow duration-300"
                >
                  Book Free Growth Consultation
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="#testimonials"
                  className="inline-flex items-center gap-2
                             px-7 py-3.5 rounded-2xl font-semibold text-[15px]
                             text-[#B4C4D4] bg-[#0F2A44]/35 backdrop-blur-sm
                             border border-[#1C3F63]/70 hover:border-[#0FA3A3]/50
                             hover:text-white transition-all duration-300"
                >
                  View Testimonials
                </a>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="relative py-16 md:py-24">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(28,63,99,0.4), transparent)",
          }}
        />
        <div className="absolute top-[30%] left-[5%] w-[250px] h-[250px] bg-[#0FA3A3]/[0.03] blur-[110px] rounded-full pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
          <FadeIn>
            <div className="text-center mb-12 md:mb-14">
              <div
                className="inline-flex items-center gap-2 rounded-full
                           border border-[#1C3F63]/60 bg-[#0F2A44]/40
                           px-5 py-2.5 text-[10px] uppercase tracking-[0.2em]
                           text-[#7A96B4] mb-6"
              >
                <Globe className="w-3.5 h-3.5 text-[#5ED4D4]" />
                Our Purpose
              </div>
              <h2
                className="text-2xl sm:text-3xl md:text-[2.3rem] font-extrabold text-white
                           leading-[1.15] tracking-tight mb-4"
              >
                Driven by Purpose,{" "}
                <span className="bg-gradient-to-r from-[#0FA3A3] to-[#D4A437] bg-clip-text text-transparent">
                  Guided by Vision
                </span>
              </h2>
              <p className="text-[15px] text-[#8FA7C0] max-w-lg mx-auto leading-relaxed">
                Two pillars that define everything we do and every decision we
                make for our clients.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-7 md:gap-8 lg:grid-cols-2">
            <FadeIn delay={0.06} direction="right">
              <div className="group relative h-full rounded-[26px] border border-[#1C3F63]/50 bg-gradient-to-b from-[#0B1F3A]/50 to-[#060F1E]/65 backdrop-blur-sm overflow-hidden p-7 md:p-9 hover:border-[#0FA3A3]/35 hover:shadow-[0_16px_50px_rgba(0,0,0,0.22)] transition-all duration-500">
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-[55%] h-[1px] opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(15,163,163,0.5), transparent)",
                  }}
                />
                <div className="absolute -top-14 -right-14 w-28 h-28 bg-[#0FA3A3]/[0.04] rounded-full blur-[50px] group-hover:bg-[#0FA3A3]/[0.07] transition-all duration-700" />

                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-[#0FA3A3]/10 border border-[#0FA3A3]/25 group-hover:scale-105 transition-transform duration-300">
                  <Target className="w-6 h-6 text-[#5ED4D4]" />
                </div>

                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5ED4D4] mb-3 block">
                  Our Mission
                </span>

                <h3 className="text-xl md:text-2xl font-bold text-white leading-snug mb-4">
                  Simple in purpose. Powerful in execution.
                </h3>

                <p className="text-[15px] leading-[1.85] text-[#B4C4D4] mb-3">
                  Our mission is simple:
                </p>

                <p className="text-base font-semibold leading-[1.7] text-white mb-4">
                  To build digital growth systems that help businesses attract
                  customers, generate leads and scale effectively.
                </p>

                <p className="text-[14px] leading-[1.85] text-[#8FA7C0]">
                  We combine expertise in marketing, technology and analytics to
                  create strategies that deliver measurable results for
                  Australian businesses.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.12} direction="left">
              <div className="group relative h-full rounded-[26px] border border-[#1C3F63]/50 bg-gradient-to-b from-[#0B1F3A]/50 to-[#060F1E]/65 backdrop-blur-sm overflow-hidden p-7 md:p-9 hover:border-[#D4A437]/35 hover:shadow-[0_16px_50px_rgba(0,0,0,0.22)] transition-all duration-500">
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-[55%] h-[1px] opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(212,164,55,0.5), transparent)",
                  }}
                />
                <div className="absolute -top-14 -right-14 w-28 h-28 bg-[#D4A437]/[0.04] rounded-full blur-[50px] group-hover:bg-[#D4A437]/[0.07] transition-all duration-700" />

                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-[#D4A437]/10 border border-[#D4A437]/25 group-hover:scale-105 transition-transform duration-300">
                  <Eye className="w-6 h-6 text-[#D4A437]" />
                </div>

                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4A437] mb-3 block">
                  Our Vision
                </span>

                <h3 className="text-xl md:text-2xl font-bold text-white leading-snug mb-4">
                  A trusted partner for digital growth
                </h3>

                <p className="text-[14px] leading-[1.85] text-[#8FA7C0] mb-7">
                  To become a trusted digital growth partner for businesses
                  across Australia and global markets — helping them compete,
                  grow and thrive in an increasingly digital world.
                </p>

                <div className="rounded-xl border border-[#1C3F63]/40 bg-[#081629]/50 p-4 hover:border-[#1C3F63]/60 transition-colors duration-300">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center bg-[#47C7FF]/10 border border-[#47C7FF]/20">
                      <LineChart className="w-4 h-4 text-[#47C7FF]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">
                        Growth with Trust & Clarity
                      </h4>
                      <p className="text-[12px] leading-[1.7] text-[#8FA7C0]">
                        Built around long-term partnerships, strategic thinking
                        and consistent digital performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <InlineAuditCTA
        title="Need a clearer picture of your business’s digital potential?"
        text="Get your free audit and uncover the biggest opportunities to improve your visibility, lead generation and overall digital growth."
      />

      {/* CORE VALUES */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_400px_at_50%_50%,rgba(15,40,70,0.18),transparent)]" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1C3F63]/60 bg-[#0F2A44]/40 px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] text-[#7A96B4] mb-6">
                <Heart className="w-3.5 h-3.5 text-[#D4A437]" />
                Our Values
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-[2.2rem] font-extrabold text-white leading-[1.15] tracking-tight">
                The Values That{" "}
                <span className="bg-gradient-to-r from-[#0FA3A3] to-[#5ED4D4] bg-clip-text text-transparent">
                  Drive Us
                </span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((item, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="group h-full rounded-2xl border border-[#1C3F63]/50 bg-gradient-to-b from-[#0B1F3A]/40 to-[#060F1E]/55 backdrop-blur-sm p-6 hover:border-[#1C3F63]/70 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.22)] transition-all duration-400">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300"
                    style={{
                      background: `${item.color}14`,
                      border: `1.5px solid ${item.color}25`,
                    }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-[15px] font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[12px] leading-[1.7] text-[#8FA7C0]">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE COMBINE */}
      {/* <section className="relative py-16 md:py-24">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(28,63,99,0.3), transparent)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-8">
          <FadeIn>
            <div className="text-center mb-12 md:mb-14">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1C3F63]/60 bg-[#0F2A44]/40 px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] text-[#7A96B4] mb-6">
                <Layers3 className="w-3.5 h-3.5 text-[#0FA3A3]" />
                What We Combine
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-[2.2rem] font-extrabold text-white leading-[1.15] tracking-tight mb-4">
                Marketing, Technology &{" "}
                <span className="bg-gradient-to-r from-[#0FA3A3] to-[#D4A437] bg-clip-text text-transparent">
                  Analytics
                </span>
              </h2>
              <p className="text-[14px] text-[#8FA7C0] max-w-lg mx-auto leading-relaxed">
                The key disciplines required to build digital systems that are
                attractive, measurable and scalable.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {valueCards.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.09}>
                <div className="group relative h-full rounded-[22px] border border-[#1C3F63]/50 bg-gradient-to-b from-[#0B1F3A]/45 to-[#060F1E]/60 backdrop-blur-sm p-7 overflow-hidden hover:border-[#1C3F63]/75 hover:shadow-[0_16px_48px_rgba(0,0,0,0.22)] hover:-translate-y-1 transition-all duration-500">
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[45%] h-[1px] opacity-35 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${item.color}50, transparent)`,
                    }}
                  />

                  <div
                    className="w-13 h-13 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300"
                    style={{
                      width: 52,
                      height: 52,
                      background: item.colorLight,
                      border: `1.5px solid ${item.colorBorder}`,
                    }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-[13px] leading-[1.8] text-[#8FA7C0]">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section> */}

      <InlineAuditCTA
        title="Want to identify what’s holding back your digital growth?"
        text="Get your free audit and we’ll highlight the strongest opportunities across strategy, performance, visibility and conversion."
      />

      {/* TESTIMONIALS */}
      <section id="testimonials" className="relative py-16 md:py-24">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(28,63,99,0.3), transparent)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
          <FadeIn>
            <div className="text-center mb-12 md:mb-14">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1C3F63]/60 bg-[#0F2A44]/40 px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] text-[#7A96B4] mb-6">
                <Quote className="w-3.5 h-3.5 text-[#D4A437]" />
                Testimonials
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-[2.2rem] font-extrabold text-white leading-[1.15] tracking-tight mb-4">
                What Our Clients{" "}
                <span className="bg-gradient-to-r from-[#0FA3A3] to-[#D4A437] bg-clip-text text-transparent">
                  Say About Us
                </span>
              </h2>
              <p className="text-[14px] text-[#8FA7C0] max-w-lg mx-auto leading-relaxed">
                Real feedback from businesses we've helped with strategy,
                performance and long-term digital growth.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item, i) => (
              <FadeIn key={item.name} delay={i * 0.08}>
                <div className="group relative h-full rounded-[22px] border border-[#1C3F63]/50 bg-gradient-to-b from-[#0B1F3A]/45 to-[#060F1E]/60 backdrop-blur-sm p-7 overflow-hidden hover:border-[#1C3F63]/75 hover:shadow-[0_16px_48px_rgba(0,0,0,0.22)] hover:-translate-y-1 transition-all duration-500">
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[45%] h-[1px] opacity-35 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${item.color}50, transparent)`,
                    }}
                  />

                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(item.rating)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-4 h-4 fill-[#D4A437] text-[#D4A437]"
                      />
                    ))}
                  </div>

                  <Quote
                    className="w-8 h-8 mb-4"
                    style={{ color: item.color, opacity: 0.75 }}
                  />

                  <p className="text-[14px] leading-[1.9] text-[#B4C4D4] mb-6">
                    “{item.text}”
                  </p>

                  <div className="pt-4 border-t border-[#1C3F63]/40">
                    <h4 className="text-[15px] font-bold text-white">
                      {item.name}
                    </h4>
                    <p className="text-[12px] text-[#8FA7C0] mt-1">
                      {item.role}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <InlineAuditCTA
        title="Ready to see where your business can grow next?"
        text="Get your free audit and uncover practical opportunities to improve performance, sharpen your strategy and scale with more confidence."
      />

      
      
    </main>
  );
};

export default MissionVisionPage;