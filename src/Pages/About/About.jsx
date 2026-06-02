import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Globe,
  Search,
  TrendingUp,
  Share2,
  Sparkles,
  Target,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import CtaSection from "../../Components/CtaSection";

import img from "../img/b.webp";

/* ───────────────────────── Floating Particles ───────────────────── */
const FloatingParticles = () => {
  const particles = React.useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 4,
        opacity: Math.random() * 0.28 + 0.08,
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
            y: [-16, 16, -16],
            x: [-8, 8, -8],
            opacity: [p.opacity, p.opacity * 1.7, p.opacity],
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

/* ─────────────────────── Animated Network Lines ─────────────────── */
const AboutNetworkLines = () => {
  const uid = React.useMemo(
    () => `about-lines-${Math.random().toString(36).slice(2, 9)}`,
    []
  );

  const paths = [
    { d: "M 150 100 C 240 70, 320 130, 500 280", delay: 0 },
    { d: "M 150 460 C 240 490, 320 420, 500 280", delay: 1 },
    { d: "M 850 100 C 760 70, 680 130, 500 280", delay: 0.5 },
    { d: "M 850 460 C 760 490, 680 420, 500 280", delay: 1.5 },
  ];

  return (
    <svg
      viewBox="0 0 1000 560"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full pointer-events-none"
    >
      <defs>
        <filter id={`glow-${uid}`}>
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <linearGradient id={`grad-teal-${uid}`}>
          <stop offset="0%" stopColor="rgba(15,163,163,0)" />
          <stop offset="40%" stopColor="rgba(15,163,163,0.95)" />
          <stop offset="60%" stopColor="rgba(94,212,212,1)" />
          <stop offset="100%" stopColor="rgba(15,163,163,0)" />
        </linearGradient>
      </defs>

      {paths.map((p, i) => (
        <g key={i}>
          <path
            d={p.d}
            fill="none"
            stroke="rgba(28,63,99,0.38)"
            strokeWidth="1"
            strokeDasharray="6 4"
          />
          <motion.path
            d={p.d}
            fill="none"
            stroke={`url(#grad-teal-${uid})`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="45 1000"
            initial={{ strokeDashoffset: 1000 }}
            animate={{ strokeDashoffset: -1000 }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            }}
            filter={`url(#glow-${uid})`}
          />
        </g>
      ))}

      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx="500"
          cy="280"
          r="28"
          fill="none"
          stroke="rgba(212,164,55,0.14)"
          strokeWidth="1"
          initial={{ r: 28, opacity: 0.3 }}
          animate={{ r: 90, opacity: 0 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeOut",
          }}
        />
      ))}
    </svg>
  );
};

/* ────────────────────────── Service Node ────────────────────────── */
const Node = ({ icon: Icon, label, x, y, delay = 0, color = "#0FA3A3" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.6 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, type: "spring", stiffness: 150 }}
    className="absolute -translate-x-1/2 -translate-y-1/2 group"
    style={{ left: x, top: y }}
  >
    <div
      className="relative w-[70px] h-[70px] md:w-[88px] md:h-[88px] rounded-2xl
                 bg-gradient-to-br from-[#0F2A44]/90 to-[#0B1F3A]/95
                 border border-[#1C3F63]/70 backdrop-blur-sm
                 shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                 flex flex-col items-center justify-center gap-1.5
                 transition-all duration-500 ease-out
                 group-hover:border-[#0FA3A3]/50
                 group-hover:shadow-[0_8px_40px_rgba(15,163,163,0.15)]
                 group-hover:scale-105 group-hover:-translate-y-1"
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, ${color}12, transparent 70%)`,
        }}
      />

      <div
        className="relative w-8 h-8 md:w-9 md:h-9 rounded-xl flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${color}18, ${color}08)`,
          border: `1px solid ${color}30`,
        }}
      >
        <Icon className="w-4 h-4 md:w-[18px] md:h-[18px]" style={{ color }} />
      </div>

      <span className="relative text-[8px] md:text-[10px] text-[#B4C4D4] text-center leading-tight px-1 font-medium group-hover:text-white transition-colors duration-300">
        {label}
      </span>
    </div>
  </motion.div>
);

const services = [
  {
    title: "Website Design & Development",
    icon: Globe,
    color: "#47C7FF",
  },
  {
    title: "Strategic SEO",
    icon: Search,
    color: "#5ED4D4",
  },
  {
    title: "High Quality Lead Generation",
    icon: TrendingUp,
    color: "#0FA3A3",
  },
  {
    title: "Social Media Advertising",
    icon: Share2,
    color: "#D4A437",
  },
];

const tags = ["Results-Driven", "Performance", "Transparency", "Long-Term Growth"];

const approachPoints = [
  "Smart digital strategies tailored for Australian businesses.",
  "Clear communication and transparent reporting at every stage.",
  "A long-term growth mindset focused on measurable business outcomes.",
];

/* ═══════════════════════════ ABOUT ══════════════════════════════ */
const About = () => {
  const navigate = useNavigate();

  const handleStrategyCall = () => {
    navigate("/contact");
  };

  const handleExploreServices = () => {
    navigate("/services");
  };

  return (
    <>
      <section
      id="about"
      className="relative overflow-hidden bg-[#060F1E] py-24 md:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_1200px_700px_at_50%_-10%,rgba(15,40,70,0.95),rgba(6,15,30,1))]" />

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15,163,163,0.22) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15,163,163,0.22) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[860px] h-[420px] bg-cyan-400/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-[12%] w-[360px] h-[360px] bg-yellow-400/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-[8%] w-[300px] h-[300px] bg-cyan-400/10 blur-[120px] rounded-full pointer-events-none" />

      <FloatingParticles />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8">
        {/* ───────── Top Center Content ───────── */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#1C3F63]/60 bg-[#0F2A44]/45 px-5 py-2.5 text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-[#7A96B4] shadow-[0_4px_20px_rgba(0,0,0,0.2)] backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#D4A437]" />
            About Ventoria Global
          </div>

          <h2 className="mt-6 text-[1.8rem] sm:text-[2.2rem] md:text-[2.7rem] font-extrabold leading-[1.15] tracking-tight text-white">
            Results-Driven Digital Growth
            <span className="mt-2 block bg-gradient-to-r from-[#0FA3A3] via-[#5ED4D4] to-[#D4A437] bg-clip-text text-transparent">
              for Australian Businesses
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-[15px] md:text-base leading-8 text-[#B4C4D4]">
            Ventoria Global is a results-driven digital marketing and technology
            agency helping Australian businesses grow through smart digital
            strategies.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {tags.map((tag) => (
              <div
                key={tag}
                className="rounded-full border border-[#1C3F63]/60 bg-[#0F2A44]/35 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-[#7A96B4] transition-all duration-300 hover:border-[#0FA3A3]/40 hover:text-[#B4C4D4]"
              >
                {tag}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleStrategyCall}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl
                         bg-gradient-to-r from-[#0FA3A3] to-[#0D8F8F]
                         px-8 py-4 text-sm md:text-base font-semibold text-white
                         shadow-[0_10px_34px_rgba(15,163,163,0.28)]
                         transition-all duration-300 hover:shadow-[0_16px_46px_rgba(15,163,163,0.4)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#14caca] to-[#0FA3A3] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative z-10 flex items-center gap-2">
                Book Strategy Call
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleExploreServices}
              className="group inline-flex items-center justify-center gap-2 rounded-2xl
                         border border-[#1C3F63]/70 bg-[#0F2A44]/40 px-8 py-4
                         text-sm md:text-base font-semibold text-[#C3D1DE]
                         backdrop-blur-sm transition-all duration-300
                         hover:border-[#D4A437]/40 hover:bg-[#0F2A44]/60 hover:text-white"
            >
              <Target className="h-4 w-4 text-[#D4A437]" />
              Explore Services
            </motion.button>
          </div>
        </motion.div>

        {/* ───────── Bottom Grid ───────── */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_0.92fr] lg:gap-14">
          {/* Left Visual Panel */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div
              className="relative mx-auto w-full max-w-[580px] aspect-[1/1.03]
                         overflow-hidden rounded-[32px] border border-[#1C3F63]/45
                         bg-gradient-to-b from-[#0B1F3A]/35 to-[#060F1E]/55
                         shadow-[0_24px_64px_rgba(0,0,0,0.35)] backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,163,163,0.04),transparent_72%)]" />

              <AboutNetworkLines />

              <div className="absolute left-1/2 top-6 z-10 -translate-x-1/2">
                <div className="rounded-full border border-[#1C3F63]/60 bg-[#0F2A44]/40 px-5 py-2.5 text-[10px] uppercase tracking-[0.22em] text-[#7A96B4] backdrop-blur-md">
                  Smart Digital Strategy
                </div>
              </div>

              {/* Center Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 120 }}
                className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative h-40 w-40 md:h-48 md:w-48">
                  <motion.div
                    className="absolute -inset-4 rounded-[34px] opacity-70"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent, rgba(212,164,55,0.35), transparent, rgba(15,163,163,0.35), transparent)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />

                  <div className="absolute inset-0 rounded-[30px] border border-[#D4A437]/40 bg-gradient-to-br from-[#0F2A44]/95 to-[#0B1F3A]/95 shadow-[0_0_0_6px_rgba(212,164,55,0.04),0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-md overflow-hidden">
                    <img
                      src={img}
                      alt="Ventoria Global"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08182C]/55 via-transparent to-transparent" />
                  </div>
                </div>
              </motion.div>

              <Node
                icon={Globe}
                label="Website Design"
                x="15%"
                y="22%"
                delay={0.35}
                color="#47C7FF"
              />
              <Node
                icon={Search}
                label="Strategic SEO"
                x="15%"
                y="78%"
                delay={0.45}
                color="#5ED4D4"
              />
              <Node
                icon={TrendingUp}
                label="Lead Generation"
                x="85%"
                y="22%"
                delay={0.55}
                color="#0FA3A3"
              />
              <Node
                icon={Share2}
                label="Social Media Ads"
                x="85%"
                y="78%"
                delay={0.65}
                color="#D4A437"
              />
            </div>
          </motion.div>

          {/* Right Services / Info */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="rounded-[30px] border border-[#1C3F63]/60 bg-[#0F2A44]/28 p-6 md:p-7 backdrop-blur-sm">
              <div className="text-center">
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  We Specialise In
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#8FA7C0]">
                  Digital services designed to support visibility, conversions
                  and scalable growth.
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {services.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                      className="group rounded-2xl border border-[#1C3F63]/60 bg-[#08182C]/60 p-4 transition-all duration-300 hover:border-[#0FA3A3]/30 hover:bg-[#0D1E35]/70"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                          style={{
                            background: `linear-gradient(135deg, ${item.color}18, ${item.color}08)`,
                            border: `1px solid ${item.color}30`,
                          }}
                        >
                          <Icon className="h-4 w-4" style={{ color: item.color }} />
                        </div>

                        <div>
                          <p className="text-sm font-medium leading-6 text-[#D7E3EE] group-hover:text-white">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[30px] border border-[#1C3F63]/60 bg-[#0F2A44]/24 p-6 md:p-7 backdrop-blur-sm">
              <div className="text-center">
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  Our Approach
                </h3>
              </div>

              <div className="mt-5 space-y-4">
                {approachPoints.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex items-start gap-3 rounded-2xl border border-[#1C3F63]/50 bg-[#0B1C30]/55 p-4"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#0FA3A3]/20 bg-[#0FA3A3]/10">
                      <CheckCircle2 className="h-4 w-4 text-[#0FA3A3]" />
                    </div>
                    <p className="text-sm leading-7 text-[#B4C4D4]">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    <CtaSection 
      title="Partner With a Team That Cares About Your Growth"
      subtitle="We don't just provide services; we build long-term digital partnerships focused on measurable business outcomes. Let's start your journey."
      ctaText="Connect With Us"
    />
    </>
  );
};

export default About;