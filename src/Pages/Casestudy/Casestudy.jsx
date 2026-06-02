import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  BarChart3,
  Target,
  ArrowRight,
  Stethoscope,
  Home,
  Building2,
  MonitorSmartphone,
  Activity,
  Users,
  BadgeDollarSign,
  Trophy,
  AlertCircle,
  Lightbulb,
  ChevronRight,
  Rocket,
  CheckCircle2,
  Briefcase,
  Star,
} from "lucide-react";
import CtaSection from "../../Components/CtaSection";

import CountUp from "../../Components/CountUp";

export default function CaseStudies() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [topStatsVisible, setTopStatsVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  const cardRefs = useRef([]);
  const headerRef = useRef(null);
  const topStatsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headerRef.current) setHeaderVisible(true);
            if (entry.target === topStatsRef.current) setTopStatsVisible(true);
            if (entry.target === ctaRef.current) setCtaVisible(true);

            const cardIndex = cardRefs.current.indexOf(entry.target);
            if (cardIndex !== -1) {
              setVisibleCards((prev) =>
                prev.includes(cardIndex) ? prev : [...prev, cardIndex]
              );
            }
          }
        });
      },
      { threshold: 0.12 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (topStatsRef.current) observer.observe(topStatsRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    cardRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  const caseStudies = [
    {
      id: "01",
      industry: "Healthcare",
      business: "Dental Clinic",
      icon: Stethoscope,
      accentColor: "#0FA3A3",
      accentLight: "rgba(15,163,163,0.08)",
      accentSoft: "rgba(15,163,163,0.14)",
      gradient: "linear-gradient(135deg, #0FA3A3 0%, #14B8A6 100%)",
      challenge:
        "The clinic had a strong reputation offline but struggled to rank in local search and convert website visitors into consistent appointment enquiries.",
      solution:
        "We implemented a local SEO strategy with service-focused landing pages, Google Business Profile optimisation, technical fixes and high-intent keyword targeting.",
      stats: [
        { icon: TrendingUp, value: "180%+", label: "Organic Traffic" },
        { icon: Users, value: "95%+", label: "Enquiry Growth" },
        { icon: Target, value: "Top 3", label: "Local Rankings" },
      ],
      tags: ["Local SEO", "GBP Optimisation", "Content Strategy"],
    },
    {
      id: "02",
      industry: "Services",
      business: "Home Services Company",
      icon: Home,
      accentColor: "#D4A437",
      accentLight: "rgba(212,164,55,0.08)",
      accentSoft: "rgba(212,164,55,0.14)",
      gradient: "linear-gradient(135deg, #D4A437 0%, #F59E0B 100%)",
      challenge:
        "The business offered multiple services but lacked a clear digital funnel, resulting in weak local visibility and low-quality lead generation.",
      solution:
        "We redesigned the website structure, improved UX, created location-based service pages and strengthened enquiry paths with conversion-focused CTAs.",
      stats: [
        { icon: Users, value: "3X", label: "Lead Enquiries" },
        { icon: Activity, value: "68%", label: "Conv. Rate" },
        { icon: Target, value: "Local", label: "Search Boost" },
      ],
      tags: ["Web Redesign", "Lead Generation", "UX Optimisation"],
    },
    {
      id: "03",
      industry: "Property",
      business: "Australian Real Estate Agency",
      icon: Building2,
      accentColor: "#6366F1",
      accentLight: "rgba(99,102,241,0.08)",
      accentSoft: "rgba(99,102,241,0.14)",
      gradient: "linear-gradient(135deg, #6366F1 0%, #818CF8 100%)",
      challenge:
        "The agency needed a more predictable lead generation system, but paid campaigns were underperforming due to weak landing pages and poor targeting consistency.",
      solution:
        "We built a conversion-focused paid funnel with better targeting, improved landing pages, stronger form flow and retargeting to capture warmer prospects.",
      stats: [
        { icon: BadgeDollarSign, value: "250%+", label: "Ad ROI" },
        { icon: Users, value: "Qualified", label: "Property Leads" },
        { icon: BarChart3, value: "45%", label: "Lower CPL" },
      ],
      tags: ["Paid Ads", "Landing Pages", "Retargeting"],
    },
    {
      id: "04",
      industry: "Technology",
      business: "Business Website Transformation",
      icon: MonitorSmartphone,
      accentColor: "#EC4899",
      accentLight: "rgba(236,72,153,0.08)",
      accentSoft: "rgba(236,72,153,0.14)",
      gradient: "linear-gradient(135deg, #EC4899 0%, #F472B6 100%)",
      challenge:
        "The client needed a premium website that loaded faster, built stronger trust and generated more enquiries without relying only on paid traffic.",
      solution:
        "We delivered a modern responsive website with clear messaging, better performance, stronger visual hierarchy and a conversion-focused structure.",
      stats: [
        { icon: MonitorSmartphone, value: "Premium", label: "Brand Feel" },
        { icon: TrendingUp, value: "2X", label: "Page Speed" },
        { icon: Target, value: "Higher", label: "Conversions" },
      ],
      tags: ["Web Development", "Performance", "SEO Ready"],
    },
  ];

  const topStats = [
    { value: "50+", label: "Projects Delivered", icon: Briefcase, color: "#0FA3A3" },
    { value: "180%+", label: "Traffic Growth", icon: TrendingUp, color: "#D4A437" },
    { value: "3X", label: "Lead Increase", icon: Users, color: "#0FA3A3" },
    { value: "99%", label: "Client Satisfaction", icon: Star, color: "#D4A437" },
  ];

  return (
    <section className="cs-premium">
      <style>{`
        .cs-premium {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at top left, rgba(15,163,163,0.07), transparent 26%),
            radial-gradient(circle at bottom right, rgba(212,164,55,0.06), transparent 24%),
            linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
          padding: 96px 0 110px;
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
        }

        .cs-grid-pattern {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(to right, rgba(15,42,68,0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15,42,68,0.035) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(circle at center, black 30%, transparent 85%);
        }

        .cs-orb-1,
        .cs-orb-2,
        .cs-orb-3 {
          position: absolute;
          border-radius: 999px;
          filter: blur(80px);
          pointer-events: none;
        }

        .cs-orb-1 {
          top: -120px;
          left: -100px;
          width: 420px;
          height: 420px;
          background: rgba(15,163,163,0.12);
        }

        .cs-orb-2 {
          bottom: -120px;
          right: -80px;
          width: 360px;
          height: 360px;
          background: rgba(212,164,55,0.12);
        }

        .cs-orb-3 {
          top: 30%;
          left: 50%;
          transform: translateX(-50%);
          width: 580px;
          height: 240px;
          background: rgba(99,102,241,0.08);
        }

        .cs-wrap {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .cs-header {
          max-width: 840px;
          margin: 0 auto 34px;
          text-align: center;
          opacity: 0;
          transform: translateY(28px);
          transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cs-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .cs-badge {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 10px 20px;
          border-radius: 999px;
          background: rgba(255,255,255,0.92);
          border: 1px solid rgba(15,163,163,0.16);
          box-shadow: 0 10px 30px rgba(15,42,68,0.05);
          color: #0FA3A3;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 24px;
          backdrop-filter: blur(12px);
        }

        .cs-badge svg {
          width: 14px;
          height: 14px;
          color: #D4A437;
        }

        .cs-header h2 {
          margin: 0 0 18px;
          font-size: clamp(2rem, 5vw, 3.4rem);
          line-height: 1.08;
          letter-spacing: -0.03em;
          font-weight: 700;
          color: #0F2A44;
        }

        .cs-header h2 span {
          display: block;
          margin-top: 4px;
          background: linear-gradient(135deg, #0FA3A3 0%, #22c7c7 35%, #D4A437 75%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cs-header p {
          margin: 0 auto;
          max-width: 700px;
          color: #64748B;
          font-size: 15px;
          line-height: 1.85;
          font-weight: 400;
        }

        .cs-header p strong {
          font-weight: 600;
          color: #475569;
        }

        .cs-top-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          max-width: 980px;
          margin: 0 auto 60px;
        }

        .cs-top-stat {
          padding: 24px 20px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(15, 42, 68, 0.08);
          box-shadow: 0 10px 40px rgba(15, 23, 42, 0.04);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cs-top-stat:hover {
          transform: translateY(-6px);
          background: #fff;
          border-color: rgba(15, 163, 163, 0.2);
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.1);
        }

        .cs-top-stat-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 4px;
        }

        .cs-top-stat-icon svg {
          width: 20px;
          height: 20px;
        }

        .cs-top-stat strong {
          display: block;
          color: #0F2A44;
          font-size: clamp(24px, 3vw, 32px);
          line-height: 1;
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        .cs-top-stat span {
          display: block;
          color: #64748B;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .cs-grid {
          display: grid;
          gap: 28px;
          grid-template-columns: 1fr;
        }

        @media (min-width: 1100px) {
          .cs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .cs-card {
          position: relative;
          overflow: hidden;
          border-radius: 28px;
          background: rgba(255,255,255,0.95);
          border: 1px solid rgba(15,23,42,0.06);
          box-shadow:
            0 14px 34px rgba(15,23,42,0.05),
            0 1px 0 rgba(255,255,255,0.7) inset;
          opacity: 0;
          transform: translateY(42px) scale(0.985);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cs-card.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .cs-card:hover {
          transform: translateY(-6px);
          box-shadow:
            0 22px 54px rgba(15,23,42,0.08),
            0 1px 0 rgba(255,255,255,0.9) inset;
        }

        .cs-card-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
        }

        .cs-card-glow {
          position: absolute;
          top: -40px;
          right: -30px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          filter: blur(70px);
          opacity: 0.5;
          transition: all 0.45s ease;
          pointer-events: none;
        }

        .cs-card:hover .cs-card-glow {
          transform: scale(1.12);
          opacity: 0.75;
        }

        .cs-card-inner {
          position: relative;
          z-index: 2;
          padding: 32px 28px 28px;
        }

        .cs-card-id {
          position: absolute;
          top: 22px;
          right: 24px;
          font-size: 54px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.04em;
          color: rgba(15,23,42,0.035);
          user-select: none;
          pointer-events: none;
        }

        .cs-top {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 20px;
        }

        .cs-icon-box {
          width: 58px;
          height: 58px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 12px 26px rgba(15,23,42,0.04);
          transition: all 0.35s ease;
        }

        .cs-card:hover .cs-icon-box {
          transform: scale(1.04) rotate(-3deg);
        }

        .cs-icon-box svg {
          width: 25px;
          height: 25px;
        }

        .cs-meta {
          flex: 1;
          min-width: 0;
          padding-top: 2px;
        }

        .cs-industry {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .cs-industry-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .cs-title {
          margin: 0;
          color: #0F2A44;
          font-size: 22px;
          line-height: 1.22;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .cs-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 0 0 22px;
        }

        .cs-tag {
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(15,23,42,0.03);
          border: 1px solid rgba(15,23,42,0.05);
          color: #64748B;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .cs-block {
          margin-bottom: 18px;
        }

        .cs-label {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 9px;
        }

        .cs-label-box {
          width: 28px;
          height: 28px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cs-label-box svg {
          width: 14px;
          height: 14px;
        }

        .cs-label span {
          color: #94A3B8;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .cs-text {
          margin: 0;
          padding-left: 37px;
          color: #64748B;
          font-size: 13.5px;
          line-height: 1.85;
          font-weight: 400;
        }

        .cs-divider {
          height: 1px;
          margin: 22px 0 18px;
          background: linear-gradient(90deg, transparent, rgba(15,23,42,0.08), transparent);
        }

        .cs-results-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 14px;
          flex-wrap: wrap;
        }

        .cs-results-head-left {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .cs-results-head-left svg {
          width: 15px;
          height: 15px;
          color: #94A3B8;
        }

        .cs-results-head-left span {
          color: #94A3B8;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .cs-results-chip {
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(34,197,94,0.08);
          color: #16A34A;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .cs-results-chip svg {
          width: 12px;
          height: 12px;
        }

        .cs-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .cs-stat {
          position: relative;
          overflow: hidden;
          text-align: center;
          border-radius: 18px;
          border: 1px solid rgba(15,23,42,0.05);
          background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,250,252,1) 100%);
          padding: 16px 10px 14px;
          transition: all 0.35s ease;
          box-shadow: 0 6px 18px rgba(15,23,42,0.03);
        }

        .cs-card:hover .cs-stat {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(15,23,42,0.06);
        }

        .cs-stat-icon {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 10px;
          transition: transform 0.3s ease;
        }

        .cs-card:hover .cs-stat-icon {
          transform: scale(1.06);
        }

        .cs-stat-icon svg {
          width: 17px;
          height: 17px;
        }

        .cs-stat-value {
          display: block;
          color: #0F2A44;
          font-size: 17px;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 4px;
        }

        .cs-stat-label {
          display: block;
          color: #94A3B8;
          font-size: 9px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .cs-card-bar {
          height: 4px;
          width: 50px;
          border-radius: 999px;
          margin-top: 22px;
          transition: width 0.45s ease;
        }

        .cs-card:hover .cs-card-bar {
          width: 92px;
        }

        .cs-cta {
          margin-top: 74px;
          opacity: 0;
          transform: translateY(34px);
          transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cs-cta.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .cs-cta-box {
          position: relative;
          overflow: hidden;
          border-radius: 30px;
          background: linear-gradient(135deg, #0F2A44 0%, #153756 40%, #0b2034 100%);
          padding: 54px 32px;
          border: 1px solid rgba(255,255,255,0.08);
          text-align: center;
          box-shadow: 0 26px 70px rgba(15,42,68,0.18);
        }

        .cs-cta-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 44%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
        }

        .cs-cta-box::after {
          content: '';
          position: absolute;
          inset: auto auto -140px 50%;
          transform: translateX(-50%);
          width: 640px;
          height: 320px;
          background: radial-gradient(ellipse, rgba(15,163,163,0.10) 0%, transparent 70%);
          pointer-events: none;
        }

        .cs-cta-orb-a,
        .cs-cta-orb-b {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
        }

        .cs-cta-orb-a {
          top: -50px;
          left: -20px;
          width: 200px;
          height: 200px;
          background: rgba(15,163,163,0.10);
        }

        .cs-cta-orb-b {
          right: -20px;
          bottom: -50px;
          width: 220px;
          height: 220px;
          background: rgba(212,164,55,0.08);
        }

        .cs-cta-icon {
          position: relative;
          z-index: 2;
          width: 56px;
          height: 56px;
          margin: 0 auto 20px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(15,163,163,0.12);
          border: 1px solid rgba(15,163,163,0.24);
          box-shadow: 0 12px 30px rgba(15,163,163,0.12);
        }

        .cs-cta-icon svg {
          width: 23px;
          height: 23px;
          color: #0FA3A3;
        }

        .cs-cta-title {
          position: relative;
          z-index: 2;
          margin: 0 0 14px;
          font-size: clamp(1.75rem, 4vw, 2.45rem);
          line-height: 1.12;
          font-weight: 700;
          color: white;
          letter-spacing: -0.03em;
        }

        .cs-cta-title span {
          background: linear-gradient(135deg, #0FA3A3 0%, #30d5d5 35%, #D4A437 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cs-cta-desc {
          position: relative;
          z-index: 2;
          max-width: 650px;
          margin: 0 auto 32px;
          color: rgba(226,232,240,0.82);
          font-size: 14px;
          line-height: 1.9;
          font-weight: 400;
        }

        .cs-cta-actions {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .cs-btn-primary,
        .cs-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 26px;
          border-radius: 15px;
          text-decoration: none;
          font-size: 13.5px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .cs-btn-primary {
          background: linear-gradient(135deg, #0FA3A3 0%, #0C8C8C 100%);
          color: white;
          box-shadow: 0 16px 34px rgba(15,163,163,0.20);
          border: 1px solid rgba(15,163,163,0.35);
        }

        .cs-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 44px rgba(15,163,163,0.28);
        }

        .cs-btn-primary svg {
          width: 15px;
          height: 15px;
          transition: transform 0.3s ease;
        }

        .cs-btn-primary:hover svg {
          transform: translateX(4px);
        }

        .cs-btn-secondary {
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.92);
          border: 1px solid rgba(255,255,255,0.14);
          backdrop-filter: blur(10px);
        }

        .cs-btn-secondary:hover {
          background: rgba(255,255,255,0.12);
          transform: translateY(-2px);
        }

        @media (max-width: 960px) {
          .cs-top-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .cs-premium {
            padding: 72px 0 84px;
          }

          .cs-wrap {
            padding: 0 18px;
          }

          .cs-header {
            margin-bottom: 28px;
          }

          .cs-top-stats {
            gap: 10px;
            margin-bottom: 42px;
          }

          .cs-top-stat {
            padding: 18px 10px;
            border-radius: 18px;
          }

          .cs-top-stat strong {
            font-size: 20px;
          }

          .cs-card-inner {
            padding: 24px 18px 20px;
          }

          .cs-card-id {
            font-size: 42px;
            right: 16px;
            top: 16px;
          }

          .cs-title {
            font-size: 19px;
          }

          .cs-text {
            padding-left: 0;
            font-size: 13px;
          }

          .cs-stats {
            gap: 8px;
          }

          .cs-stat {
            padding: 14px 8px 12px;
            border-radius: 15px;
          }

          .cs-stat-value {
            font-size: 16px;
          }

          .cs-stat-label {
            font-size: 8px;
          }

          .cs-cta-box {
            padding: 40px 20px;
            border-radius: 26px;
          }

          .cs-cta-actions {
            flex-direction: column;
          }

          .cs-btn-primary,
          .cs-btn-secondary {
            width: 100%;
          }
        }
      `}</style>

      <div className="cs-grid-pattern" />
      <div className="cs-orb-1" />
      <div className="cs-orb-2" />
      <div className="cs-orb-3" />

      <div className="cs-wrap">
        <div ref={headerRef} className={`cs-header ${headerVisible ? "visible" : ""}`}>
          <div className="cs-badge">
            <Trophy />
            Featured Case Studies
          </div>
          <h2>
            Real Australian Business
            <span>Growth Case Studies</span>
          </h2>
          <p>
            From healthcare and home services to real estate and business websites,
            these examples show how the <strong>right digital strategy</strong> creates
            stronger traffic, better conversions and measurable business growth.
          </p>
        </div>

        <div ref={topStatsRef} className="cs-top-stats">
          {topStats.map((item, i) => {
            const StatIcon = item.icon;
            return (
              <div key={i} className="cs-top-stat">
                <div
                  className="cs-top-stat-icon"
                  style={{
                    background: `${item.color}12`,
                    color: item.color,
                  }}
                >
                  <StatIcon />
                </div>
                <strong>
                  <CountUp value={item.value} isVisible={topStatsVisible} />
                </strong>
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>

        <div className="cs-grid">
          {caseStudies.map((item, index) => {
            const Icon = item.icon;
            const isCardVisible = visibleCards.includes(index);

            return (
              <div
                key={item.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`cs-card ${isCardVisible ? "visible" : ""}`}
              >
                <div className="cs-card-line" style={{ background: item.gradient }} />
                <div className="cs-card-glow" style={{ background: item.accentSoft }} />

                <div className="cs-card-inner">
                  <div className="cs-card-id">{item.id}</div>

                  <div className="cs-top">
                    <div
                      className="cs-icon-box"
                      style={{
                        background: item.accentLight,
                        boxShadow: `0 10px 24px ${item.accentLight}`,
                      }}
                    >
                      <Icon style={{ color: item.accentColor }} />
                    </div>

                    <div className="cs-meta">
                      <div
                        className="cs-industry"
                        style={{
                          background: item.accentLight,
                          color: item.accentColor,
                        }}
                      >
                        <span
                          className="cs-industry-dot"
                          style={{ background: item.accentColor }}
                        />
                        {item.industry}
                      </div>
                      <h3 className="cs-title">{item.business}</h3>
                    </div>
                  </div>

                  <div className="cs-tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="cs-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="cs-block">
                    <div className="cs-label">
                      <div
                        className="cs-label-box"
                        style={{ background: "rgba(239,68,68,0.08)" }}
                      >
                        <AlertCircle style={{ color: "#EF4444" }} />
                      </div>
                      <span>Challenge</span>
                    </div>
                    <p className="cs-text">{item.challenge}</p>
                  </div>

                  <div className="cs-block">
                    <div className="cs-label">
                      <div
                        className="cs-label-box"
                        style={{ background: "rgba(34,197,94,0.08)" }}
                      >
                        <Lightbulb style={{ color: "#22C55E" }} />
                      </div>
                      <span>Solution</span>
                    </div>
                    <p className="cs-text">{item.solution}</p>
                  </div>

                  <div className="cs-divider" />

                  <div className="cs-results-head">
                    <div className="cs-results-head-left">
                      <BarChart3 />
                      <span>Results Overview</span>
                    </div>
                    <div className="cs-results-chip">
                      <CheckCircle2 />
                      Verified Growth
                    </div>
                  </div>

                  <div className="cs-stats">
                    {item.stats.map((stat, idx) => {
                      const StatIcon = stat.icon;
                      return (
                        <div key={idx} className="cs-stat">
                          <div
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              height: 3,
                              background: item.gradient,
                            }}
                          />
                          <div
                            className="cs-stat-icon"
                            style={{ background: item.accentLight }}
                          >
                            <StatIcon style={{ color: item.accentColor }} />
                          </div>
                          <span className="cs-stat-value">
                            <CountUp value={stat.value} isVisible={isCardVisible} />
                          </span>
                          <span className="cs-stat-label">{stat.label}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="cs-card-bar" style={{ background: item.gradient }} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
      <CtaSection 
        title="Want Results Like These for Your Business?"
        subtitle="Whether you're in healthcare, real estate or home services, we can build the right strategy for measurable long-term growth. Let's discuss your goals."
        ctaText="Book Free Consultation"
      />

    </section>
  );
}