import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import CountUpObj from "react-countup";
const CountUp = CountUpObj.default || CountUpObj;

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  ComposedChart,
  Line,
} from "recharts";

import {
  ArrowRight,
  Zap,
  TrendingUp,
  Users,
  Building,
  MousePointerClick,
  CalendarDays,
  Eye,
  Sparkles,
  ChevronDown,
  Activity,
  CheckCircle2,
  Star,
  Award,
  Phone,
} from "lucide-react";

import irefLogo from "../Img/iref logo.png";
import vbLogo from "../Img/vbtower logo.jpg";
import raghavLogo from "../Img/raghav logo.png";
import maheshLogo from "../Img/maheshventures logo.png";
import aarogyaLogo from "../Img/aarogya logo.png";

/* ─── Tooltip (LIGHT theme) ─── */
const TT = {
  borderRadius: "14px",
  border: "1px solid rgba(148,163,184,0.35)",
  boxShadow: "0 24px 70px rgba(15,23,42,0.12)",
  background: "rgba(255,255,255,0.98)",
  color: "#0f172a",
  fontSize: "0.8rem",
  backdropFilter: "blur(10px)",
};
const TICK = { fill: "#64748b", fontSize: 11 };

/* ─── Framer FadeIn ─── */
const FadeIn = ({ children, delay = 0, y = 18, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── Gradient defs for charts ─── */
const Defs = () => (
  <svg width="0" height="0" style={{ position: "absolute" }}>
    <defs>
      {[
        ["sky", "#38BDF8", "#0EA5E9"],
        ["emerald", "#34D399", "#10B981"],
        ["violet", "#A78BFA", "#8B5CF6"],
        ["amber", "#FCD34D", "#F59E0B"],
        ["rose", "#FB7185", "#F43F5E"],
      ].map(([id, c1, c2]) => (
        <React.Fragment key={id}>
          <linearGradient id={`bar-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={c1} />
            <stop offset="100%" stopColor={c2} />
          </linearGradient>
          <linearGradient id={`area-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={c2} stopOpacity={0.22} />
            <stop offset="100%" stopColor={c2} stopOpacity={0.02} />
          </linearGradient>
        </React.Fragment>
      ))}
    </defs>
  </svg>
);

/* ─── Stat pill (LIGHT) ─── */
function Stat({ icon: Icon, label, value, accent }) {
  return (
    <div
      className="relative flex flex-col items-center justify-center rounded-2xl p-4 text-center overflow-hidden border bg-white min-w-0"
      style={{ borderColor: `${accent}25` }}
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{ background: `radial-gradient(circle at 50% 0%, ${accent}, transparent 65%)` }}
      />
      <div className="relative z-10 min-w-0">
        <div className="flex items-center justify-center gap-1 mb-2" style={{ color: accent }}>
          <Icon className="h-3.5 w-3.5" />
          <span className="text-[11px] font-medium tracking-[0.08em] opacity-80 truncate">
            {label}
          </span>
        </div>
        <div className="text-[20px] font-bold text-slate-900 leading-none break-words">
          {value}
        </div>
      </div>
    </div>
  );
}

/* ─── Info block (LIGHT) ─── */
function InfoBlock({ icon: Icon, title, accent, children }) {
  return (
    <div className="rounded-2xl p-6 border border-slate-200 bg-white overflow-hidden shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
      <h4 className="flex items-center gap-2.5 text-[14px] font-medium text-slate-900 mb-4 pb-3 border-b border-slate-200">
        <span
          className="flex h-8 w-8 items-center justify-center rounded-xl flex-shrink-0"
          style={{ background: `${accent}16` }}
        >
          <Icon className="h-4 w-4" style={{ color: accent }} />
        </span>
        <span className="truncate">{title}</span>
      </h4>
      {children}
    </div>
  );
}

/* ─── Result tag (LIGHT) ─── */
const ResultTag = ({ text }) => (
  <div className="flex items-start gap-2.5 py-1.5">
    <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
    <span className="text-[14px] text-slate-700 leading-[1.75] break-words">{text}</span>
  </div>
);

/* ─── Case card config ─── */
const CASES = [
  {
    id: "iref",
    logo: irefLogo,
    name: "IREF – Institute of Real Estate & Finance",
    tag: "Education & Finance",
    accent: "#2563EB",
    accentDark: "#1D4ED8",
    badgeBg: "bg-blue-600/10 text-blue-700 border-blue-600/20",
    results: [
      "200+ verified leads generated in 30 days",
      "High-quality admissions across all programs",
      "Improved brand visibility citywide",
    ],
    stats: [
      { icon: Users, label: "Leads", value: null, countEnd: 250, suffix: "+" },
      { icon: CalendarDays, label: "Duration", value: "30 Days" },
      { icon: MousePointerClick, label: "Conv. Rate", value: null, countEnd: 10, suffix: "%+" },
    ],
    did: [
      "Meta Ads – Lead Form & Conversion Campaigns",
      "High-Quality Lead Generation Strategy",
      "Social Media Marketing (Facebook + Instagram)",
      "New Website Design + Pixel Tracking",
      "AI-Powered Audience Targeting & Optimization",
      "Branding & Full Marketing Strategy",
      "Telecalling for Lead Verification",
      "Strategic Webinar Arrangement",
    ],
    process: [
      "Competitive Analysis + Audience Research",
      "Website & Landing Page Setup",
      "Meta Campaign Setup & Launch",
      "Influencer Marketing Campaign",
      "Monthly Optimization & Reporting",
    ],
    chartType: "bar",
    chartData: [
      { label: "Target", value: 200 },
      { label: "Achieved", value: 250 },
    ],
    chartKey: "value",
    chartLabel: "Leads Delivered",
  },
  {
    id: "vb",
    logo: vbLogo,
    name: "VB Tower – Commercial Complex",
    tag: "Real Estate",
    accent: "#10B981",
    accentDark: "#059669",
    badgeBg: "bg-emerald-600/10 text-emerald-700 border-emerald-600/20",
    results: [
      "High-quality commercial property enquiries delivered",
      "Stronger site visits and bookings recorded",
      "Better brand visibility and investor trust built",
    ],
    stats: [
      { icon: Building, label: "Outcome", value: "Site Visits" },
      { icon: Activity, label: "Status", value: "Growing" },
      { icon: MousePointerClick, label: "Conv.", value: "2–3%" },
    ],
    did: [
      "Meta Ads (Lead Generation + Messages)",
      "Outdoor Hoardings & Society Branding",
      "Full Branding & Marketing Strategy",
      "Influencer Marketing Campaign",
      "Telecalling Support for Verification",
    ],
    process: [
      "Property Photos, Videos & Brochure Design",
      "Lead Generation Campaign Setup",
      "Hyperlocal Targeting for Investors",
      "Site-Visit Push via Reminders & Follow-Ups",
      "Regular Optimization + Broker Coordination",
    ],
    chartType: "area",
    chartData: [
      { label: "Wk 1", value: 5 },
      { label: "Wk 2", value: 18 },
      { label: "Wk 3", value: 32 },
      { label: "Wk 4", value: 48 },
    ],
    chartKey: "value",
    chartLabel: "Site Visits Per Week",
  },
  {
    id: "raghav",
    logo: raghavLogo,
    name: "Raghav Public School",
    tag: "Education",
    accent: "#7C3AED",
    accentDark: "#6D28D9",
    badgeBg: "bg-violet-600/10 text-violet-700 border-violet-600/20",
    results: [
      "Strong and professional digital presence established",
      "Significant increase in admission inquiries",
      "Improved local search visibility (Top of Google SERP)",
      "Increased parent trust through professional branding",
    ],
    stats: [
      { icon: Eye, label: "Video Views", value: null, countEnd: 300, suffix: "K+" },
      { icon: Users, label: "Leads", value: null, countEnd: 200, suffix: "+" },
      { icon: CalendarDays, label: "Duration", value: "3 Months" },
    ],
    did: [
      "Strategic Digital Marketing Planning",
      "Targeted Lead Generation Campaigns via Meta",
      "SEO & Google Profile Optimization",
      "Social Media Marketing — Instagram & Facebook",
      "Professional Photoshoot & Video Production",
      "Creative Content (Reels, Carousels, Promo Videos)",
      "Brand Building & Online Presence Enhancement",
    ],
    process: [
      "Brand Identity & Digital Audit",
      "Meta Campaign Launch",
      "SEO & Local Search Optimization",
      "Video & Reel Production",
      "Performance Monitoring & Growth Reporting",
    ],
    chartType: "composed",
    chartData: [
      { label: "Mo 1", value: 75 },
      { label: "Mo 2", value: 185 },
      { label: "Mo 3", value: 300 },
    ],
    chartKey: "value",
    chartLabel: "Video Views (Thousands)",
  },
  {
    id: "mahesh",
    logo: maheshLogo,
    name: "Mahesh Ventures",
    tag: "Real Estate",
    accent: "#F59E0B",
    accentDark: "#D97706",
    badgeBg: "bg-amber-600/10 text-amber-700 border-amber-600/20",
    results: [
      "Strong and professional digital presence established",
      "Consistent generation of qualified property inquiries",
      "Centralized lead management through a custom CRM",
      "Higher engagement across social media platforms",
    ],
    stats: [
      { icon: Eye, label: "Video Views", value: null, countEnd: 300, suffix: "K+" },
      { icon: Users, label: "Leads", value: null, countEnd: 200, suffix: "+" },
      { icon: Building, label: "Properties", value: null, countEnd: 20, suffix: "+" },
    ],
    did: [
      "Strategic Social Media Management & Content Planning",
      "Targeted Lead Generation via Meta Ads",
      "Property-Focused Creative Design & Content",
      "Reels, Property Walkthroughs & Video Marketing",
      "Brand Positioning & Online Presence Enhancement",
      "Custom CRM Development for Lead Management",
      "Lead Tracking, Follow-up & Sales Pipeline Setup",
    ],
    process: [
      "Market Research & Audience Mapping",
      "Brand & Visual Identity Setup",
      "Meta Lead Gen Campaign Launch",
      "CRM Integration & Lead Tracking",
      "Continuous Optimization & Reporting",
    ],
    chartType: "area",
    chartData: [
      { label: "Mo 1", value: 40 },
      { label: "Mo 2", value: 90 },
      { label: "Mo 3", value: 160 },
      { label: "Mo 4", value: 200 },
    ],
    chartKey: "value",
    chartLabel: "Qualified Leads Per Month",
  },
  {
    id: "aarogya",
    logo: aarogyaLogo,
    name: "Aarogya Hospital",
    tag: "Healthcare",
    accent: "#F43F5E",
    accentDark: "#E11D48",
    badgeBg: "bg-rose-600/10 text-rose-700 border-rose-600/20",
    results: [
      "Significantly increased monthly patient inquiries and footfall",
      "Enhanced hospital reputation through online visibility",
      "Achieved top ranking in local searches for key specialties",
      "Consistent growth in community engagement and awareness",
    ],
    stats: [
      { icon: Users, label: "Monthly Inq.", value: null, countEnd: 200, suffix: "+" },
      { icon: Activity, label: "Traffic", value: null, countEnd: 10, suffix: "K+" },
      { icon: CalendarDays, label: "Duration", value: "4 Months" },
    ],
    did: [
      "Robust digital marketing strategy for healthcare",
      "Targeted Meta Ads to reach local patients",
      "Google My Business profile management",
      "Educational healthcare content & awareness videos",
      "Lead follow-up and appointment scheduling optimization",
    ],
    process: [
      "Healthcare Digital Audit",
      "Local SEO & GMB Setup",
      "Meta Campaign for Patient Inquiries",
      "Content & Awareness Video Creation",
      "Lead Nurturing & Follow-up Optimization",
    ],
    chartType: "area",
    chartData: [
      { label: "Mo 1", value: 40 },
      { label: "Mo 2", value: 90 },
      { label: "Mo 3", value: 150 },
      { label: "Mo 4", value: 200 },
    ],
    chartKey: "value",
    chartLabel: "Patient Inquiries Per Month",
  },
];

/* ─── Mini chart renderer ─── */
function MiniChart({ cs }) {
  const { chartType, chartData, chartKey, chartLabel, accent, accentDark, id } = cs;
  const areaId = `area-chart-${id}`;

  const barFill = `url(#bar-${id === "iref" ? "sky" : id === "vb" ? "emerald" : id === "raghav" ? "violet" : id === "mahesh" ? "amber" : "rose"
    })`;

  return (
    <div className="overflow-hidden">
      <p className="text-[12px] font-medium text-slate-600 mb-3 tracking-[0.08em] uppercase">
        {chartLabel}
      </p>

      <div className="overflow-hidden rounded-xl">
        <ResponsiveContainer width="100%" height={210}>
          {chartType === "bar" ? (
            <BarChart data={chartData} barSize={56}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148,163,184,0.25)" />
              <XAxis dataKey="label" tick={TICK} tickLine={false} axisLine={false} />
              <YAxis tick={TICK} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={TT} cursor={{ fill: `${accent}10` }} allowEscapeViewBox={{ x: false, y: false }} />
              <Bar dataKey={chartKey} fill={barFill} radius={[10, 10, 0, 0]} />
            </BarChart>
          ) : chartType === "composed" ? (
            <ComposedChart data={chartData}>
              <defs>
                <linearGradient id={areaId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={accentDark} stopOpacity={0.22} />
                  <stop offset="100%" stopColor={accentDark} stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148,163,184,0.25)" />
              <XAxis dataKey="label" tick={TICK} tickLine={false} axisLine={false} />
              <YAxis tick={TICK} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={TT} allowEscapeViewBox={{ x: false, y: false }} />
              <Area type="monotone" dataKey={chartKey} fill={`url(#${areaId})`} stroke="transparent" />
              <Line type="monotone" dataKey={chartKey} stroke={accent} strokeWidth={2.6} dot={{ r: 5, fill: accentDark, stroke: "#ffffff", strokeWidth: 2 }} />
            </ComposedChart>
          ) : (
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id={areaId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={accentDark} stopOpacity={0.22} />
                  <stop offset="100%" stopColor={accentDark} stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148,163,184,0.25)" />
              <XAxis dataKey="label" tick={TICK} tickLine={false} axisLine={false} />
              <YAxis tick={TICK} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={TT} allowEscapeViewBox={{ x: false, y: false }} />
              <Area type="monotone" dataKey={chartKey} stroke={accent} strokeWidth={2.6} fill={`url(#${areaId})`} dot={{ r: 4, fill: accentDark, stroke: "#ffffff", strokeWidth: 2 }} />
            </AreaChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/* ─── Individual Case Card ─── */
function CaseCard({ cs, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <FadeIn delay={index * 0.07}>
      <div
        className="rounded-[32px] overflow-hidden border bg-white transition-all duration-500"
        style={{
          borderColor: open ? `${cs.accent}30` : "rgba(226,232,240,1)",
          boxShadow: open ? "0 35px 100px rgba(15,23,42,0.12)" : "0 18px 60px rgba(15,23,42,0.10)",
        }}
      >
        <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${cs.accent}, ${cs.accentDark})` }} />

        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left p-7 md:p-10 flex items-center justify-between gap-5 group"
          style={{ background: open ? `linear-gradient(135deg, ${cs.accent}10 0%, transparent 60%)` : undefined }}
        >
          <div className="flex items-center gap-5 min-w-0">
            <div
              className="relative flex h-20 w-20 md:h-[84px] md:w-[84px] shrink-0 items-center justify-center rounded-2xl overflow-hidden border bg-white shadow-sm"
              style={{ borderColor: `${cs.accent}25` }}
            >
              <img
                src={cs.logo}
                alt={cs.name}
                className="h-14 w-14 md:h-[60px] md:w-[60px] object-contain"
              />
            </div>

            <div className="min-w-0">


              {/* heading ko "extra bold" se normal किया */}
              <h2 className="text-[18px] md:text-[22px] font-bold leading-[1.25] tracking-[-0.02em] text-[rgb(29,41,61)] transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[rgb(0,173,216)] group-hover:to-[rgb(0,183,166)] group-hover:bg-clip-text">
                {cs.name}
              </h2>
            </div>
          </div>

          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border bg-white text-slate-600 group-hover:text-slate-900 transition-colors"
            style={{ borderColor: open ? `${cs.accent}25` : "rgba(226,232,240,1)" }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div className="px-7 md:px-10 pb-10">
                <div className="h-px mb-8 bg-slate-200" />

                <div className="grid gap-7 xl:grid-cols-12">
                  {/* LEFT */}
                  <div className="xl:col-span-7 space-y-5 min-w-0">
                    <InfoBlock icon={Zap} title="What We Did" accent={cs.accent}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {cs.did.map((d, i) => (
                          <div key={i} className="flex items-start gap-2.5 min-w-0">
                            <span className="mt-[10px] h-1.5 w-1.5 rounded-full shrink-0" style={{ background: cs.accent }} />
                            {/* content ko halka sa bada किया */}
                            <span className="text-[14px] md:text-[15px] text-slate-700 leading-[1.8] break-words">
                              {d}
                            </span>
                          </div>
                        ))}
                      </div>
                    </InfoBlock>

                    <InfoBlock icon={Activity} title="Our Process" accent={cs.accent}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {cs.process.map((p, i) => (
                          <div key={i} className="flex items-start gap-3 min-w-0">
                            <span
                              className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-medium"
                              style={{ background: `${cs.accent}16`, color: cs.accentDark }}
                            >
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="text-[14px] md:text-[15px] text-slate-700 leading-[1.8] break-words">
                              {p}
                            </span>
                          </div>
                        ))}
                      </div>
                    </InfoBlock>
                  </div>

                  {/* RIGHT */}
                  <div className="xl:col-span-5 space-y-5 min-w-0">
                    <InfoBlock icon={TrendingUp} title="Results Achieved" accent={cs.accent}>
                      <div className="space-y-1">
                        {cs.results.map((r, i) => (
                          <ResultTag key={i} text={r} />
                        ))}
                      </div>
                    </InfoBlock>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {cs.stats.map((s, i) => (
                        <Stat
                          key={i}
                          icon={s.icon}
                          label={s.label}
                          accent={cs.accent}
                          value={
                            s.value ? (
                              s.value
                            ) : (
                              <>
                                <CountUp end={s.countEnd} duration={2.4} enableScrollSpy scrollSpyOnce />
                                {s.suffix}
                              </>
                            )
                          }
                        />
                      ))}
                    </div>

                    <div className="rounded-2xl p-6 border border-slate-200 bg-white overflow-hidden shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
                      <MiniChart cs={cs} />
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                      <Link
                        to="/contact"
                        className="group flex w-full items-center justify-center gap-2.5 rounded-2xl px-7 py-4 text-[15px] font-medium text-white shadow-lg transition-all duration-300"
                        style={{ background: `linear-gradient(135deg, ${cs.accent}, ${cs.accentDark})` }}
                      >
                        Start Your Campaign
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  );
}

/* PAGE */
export default function CaseStudy() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main className="relative min-h-screen overflow-x-hidden font-sans bg-white">
      <Defs />

      {/* Background grid + glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
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
      </div>

      {/* HERO */}
      <section className="relative z-10 pt-28 pb-12">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-blue-200 bg-white/70 px-5 py-2.5 backdrop-blur">
              <Award className="h-4 w-4 text-blue-700" />
              <span className="text-[12px] font-medium tracking-[0.18em] text-slate-700 uppercase">
                Proven Client Results
              </span>
            </div>
          </FadeIn>

          {/* heading ko extra-bold se normal/balanced किया */}
          <FadeIn delay={0.08}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-4 leading-[1.1]">
              Real Campaigns.{" "}
              <span className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
                Extraordinary Results.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="mx-auto mb-8 max-w-2xl text-[16px] leading-[1.9] text-slate-600">
              Explore how we’ve helped businesses scale their digital presence, multiply leads and drive growth.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-2xl bg-[rgb(29,41,61)] px-7 py-4 text-[15px] font-medium text-white shadow-lg shadow-slate-900/20 transition-all duration-300 hover:bg-[rgb(22,32,48)] hover:shadow-slate-900/30"
                >
                  <Sparkles className="h-4 w-4" />
                  Get Free Strategy Call
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>


            </div>
          </FadeIn>
        </div>
      </section>

      {/* CASE CARDS */}
      <section className="relative z-10 pb-20">
        <div className="mx-auto max-w-7xl px-6 space-y-6">
          {CASES.map((cs, i) => (
            <CaseCard key={cs.id} cs={cs} index={i} />
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[36px] p-10 md:p-16 text-center border border-blue-200 bg-white/75 backdrop-blur shadow-[0_25px_90px_rgba(15,23,42,0.12)]">
              <div
                className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full opacity-35"
                style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.25), transparent 70%)" }}
              />

              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-2">
                  <Zap className="h-4 w-4 text-blue-700" />
                  <span className="text-[12px] font-medium tracking-[0.18em] text-slate-700 uppercase">
                    Ready to Scale?
                  </span>
                </div>

                <div className="relative text-center">

                  <h2 className="mb-4 text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                    Want Results Like These{" "}
                    <span className="block mt-2 bg-gradient-to-r from-[rgb(0,173,216)] to-[rgb(0,183,166)] bg-clip-text text-transparent">
                      For Your Business?
                    </span>
                  </h2>

                  <p className="mx-auto mb-10 max-w-2xl text-[17px] leading-[1.9] text-slate-600">
                    Book a free growth consultation and let’s build a strategy that
                    generates more leads, higher conversions, and sustainable revenue growth.
                  </p>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center gap-3 rounded-2xl bg-[rgb(29,41,61)] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(29,41,61,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(29,41,61,0.35)]"
                    >
                      Book Free Growth Consultation
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </Link>
                  </motion.div>

                </div>


              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}