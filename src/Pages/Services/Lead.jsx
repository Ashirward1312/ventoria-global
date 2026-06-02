// ============================================================
//  Lead.jsx  –  Ventoria Global  |  Lead Generation Service Page
//  Dark theme, brand colours: Teal #0FA3A3, Gold #D4A437, Navy #0F2A44
// ============================================================

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  TrendingUp,
  Target,
  Filter,
  MousePointerClick,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Zap,
} from "lucide-react";
import CtaSection from "../../Components/CtaSection";


// Images
import leadHero from "../img/l10.webp";
import leadGraph from "../img/l1.webp";

const InlineLeadCTA = ({
  title = "Need more qualified leads for your business?",
  text = "Book a free strategy call and let’s build a lead generation system that attracts the right audience and converts them into enquiries.",
  buttonText = "Book Free Strategy Call",
}) => {
  return (
    <section className="lead-inline-cta-wrap">
      <div className="lead-inline-cta">
        <div className="lead-inline-cta-content">
          <div className="lead-inline-cta-badge">
            <TrendingUp />
            Lead Growth CTA
          </div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>

        <div className="lead-inline-cta-action">
          <Link to="/contact" className="lead-inline-cta-btn">
            {buttonText}
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

const LeadPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lead-root">
      <style>{`
        /* ── Base ────────────────────────────────────────────── */
        .lead-root {
          background: #060F1E;
          min-height: 100vh;
          font-family: 'Inter', 'Segoe UI', sans-serif;
          color: #B4C4D4;
          padding-top: 28px;
          overflow-x: hidden;
          margin-top: -1px;
        }

        /* ══════════════════════════════════════════════════════
           HERO SECTION
        ══════════════════════════════════════════════════════ */
        .lead-hero {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px 24px 80px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 42px;
          align-items: center;
        }

        @media (min-width: 900px) {
          .lead-hero {
            grid-template-columns: 1fr 1fr;
            padding: 36px 24px 90px;
            gap: 48px;
          }
        }

        .lead-back-btn {
          position: absolute;
          top: 0;
          left: 24px;
          z-index: 30;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 12px;
          background: rgba(15,42,68,0.65);
          border: 1px solid rgba(28,63,99,0.55);
          color: #C5D9EA;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.02em;
          backdrop-filter: blur(10px);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .lead-back-btn:hover {
          background: rgba(15,42,68,0.85);
          border-color: rgba(15,163,163,0.40);
          color: #fff;
          transform: translateY(-2px);
        }

        .lead-back-btn svg {
          width: 14px;
          height: 14px;
          transition: transform 0.25s ease;
        }

        .lead-back-btn:hover svg {
          transform: translateX(-3px);
        }

        .lead-hero::before {
          content: '';
          position: absolute;
          top: -100px;
          left: -100px;
          width: 600px;
          height: 600px;
          background: radial-gradient(ellipse, rgba(15,163,163,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .lead-hero::after {
          content: '';
          position: absolute;
          bottom: -100px;
          right: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(212,164,55,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .lead-hero-content {
          position: relative;
          z-index: 10;
          padding-top: 52px;
        }

        @media (min-width: 900px) {
          .lead-hero-content {
            padding-top: 46px;
          }
        }

        .lead-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 999px;
          background: rgba(212,164,55,0.1);
          border: 1px solid rgba(212,164,55,0.25);
          color: #D4A437;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .lead-hero-badge svg {
          width: 14px;
          height: 14px;
        }

        .lead-hero h1 {
          font-size: clamp(2.4rem, 4.5vw, 4rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.08;
          letter-spacing: -0.02em;
          margin: 0 0 20px;
        }

        .lead-hero h1 span {
          display: block;
          margin-top: 6px;
          background: linear-gradient(100deg, #D4A437 0%, #0FA3A3 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .lead-hero p {
          font-size: 16px;
          line-height: 1.8;
          color: #9AB4CC;
          margin: 0 0 32px;
          max-width: 500px;
        }

        .lead-hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 36px;
          border-radius: 14px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          color: #fff;
          background: linear-gradient(135deg, #0FA3A3 0%, #0C8C8C 100%);
          box-shadow: 0 8px 24px rgba(15,163,163,0.3);
          border: 1px solid rgba(15,163,163,0.5);
          transition: transform 0.25s, box-shadow 0.25s;
        }

        .lead-hero-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(15,163,163,0.45);
        }

        .lead-hero-img-box {
          position: relative;
          width: 100%;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(0,0,0,0.4);
          z-index: 10;
        }

        .lead-hero-img-box img {
          width: 100%;
          height: auto;
          aspect-ratio: 4/3;
          object-fit: cover;
          display: block;
        }

        .lead-hero-img-box::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,0.1);
          pointer-events: none;
        }

        /* ══════════════════════════════════════════════════════
           WHAT WE BUILD
        ══════════════════════════════════════════════════════ */
        .lead-concept {
          background: #0B1F3A;
          border-top: 1px solid rgba(28,63,99,0.5);
          border-bottom: 1px solid rgba(28,63,99,0.5);
          padding: 100px 24px;
          position: relative;
        }

        .lead-concept-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          align-items: center;
        }

        @media (min-width: 900px) {
          .lead-concept-inner {
            grid-template-columns: 1fr 1fr;
          }
        }

        .lead-concept-img {
          width: 100%;
          border-radius: 20px;
          box-shadow: 0 16px 48px rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.05);
        }

        .lead-concept-content h2 {
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 800;
          color: #fff;
          margin: 0 0 20px;
          letter-spacing: -0.01em;
        }

        .lead-concept-content p {
          font-size: 16px;
          line-height: 1.8;
          color: #9AB4CC;
          margin: 0 0 32px;
        }

        .lead-points {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .lead-point {
          display: flex;
          align-items: center;
          gap: 14px;
          background: rgba(6,15,30,0.4);
          padding: 16px 20px;
          border-radius: 12px;
          border: 1px solid rgba(28,63,99,0.4);
        }

        .lead-point-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(15,163,163,0.15);
          color: #0FA3A3;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .lead-point-icon svg {
          width: 16px;
          height: 16px;
        }

        .lead-point-text {
          font-size: 15px;
          font-weight: 600;
          color: #fff;
          margin: 0;
        }

        /* ══════════════════════════════════════════════════════
           INLINE CTA
        ══════════════════════════════════════════════════════ */
        .lead-inline-cta-wrap {
          max-width: 1140px;
          margin: 0 auto;
          padding: 34px 24px;
        }

        .lead-inline-cta {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          border: 1px solid rgba(28,63,99,0.5);
          background: linear-gradient(135deg, rgba(11,31,58,0.92) 0%, rgba(15,42,68,0.78) 50%, rgba(6,15,30,0.95) 100%);
          box-shadow: 0 18px 50px rgba(0,0,0,0.28);
          padding: 30px 28px;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .lead-inline-cta::before {
          content: '';
          position: absolute;
          top: -50px;
          right: -50px;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: rgba(15,163,163,0.10);
          filter: blur(40px);
          pointer-events: none;
        }

        .lead-inline-cta::after {
          content: '';
          position: absolute;
          bottom: -60px;
          left: -20px;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: rgba(212,164,55,0.10);
          filter: blur(50px);
          pointer-events: none;
        }

        @media (min-width: 900px) {
          .lead-inline-cta {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 34px 36px;
          }
        }

        .lead-inline-cta-content {
          position: relative;
          z-index: 2;
          max-width: 700px;
        }

        .lead-inline-cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(15,163,163,0.10);
          border: 1px solid rgba(15,163,163,0.22);
          color: #7DE3E3;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .lead-inline-cta-badge svg {
          width: 13px;
          height: 13px;
        }

        .lead-inline-cta h3 {
          margin: 0 0 10px;
          color: #fff;
          font-size: clamp(1.35rem, 2.5vw, 2rem);
          line-height: 1.2;
          font-weight: 800;
          letter-spacing: -0.01em;
        }

        .lead-inline-cta p {
          margin: 0;
          color: #9AB4CC;
          font-size: 14px;
          line-height: 1.8;
          max-width: 640px;
        }

        .lead-inline-cta-action {
          position: relative;
          z-index: 2;
          flex-shrink: 0;
        }

        .lead-inline-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px 24px;
          border-radius: 14px;
          text-decoration: none;
          background: #D4A437;
          color: #0F2A44;
          font-size: 14px;
          font-weight: 800;
          transition: all 0.25s ease;
          box-shadow: 0 10px 28px rgba(212,164,55,0.22);
        }

        .lead-inline-cta-btn:hover {
          transform: translateY(-3px);
          background: #E5B445;
          box-shadow: 0 14px 34px rgba(212,164,55,0.32);
        }

        .lead-inline-cta-btn svg {
          width: 16px;
          height: 16px;
          transition: transform 0.25s ease;
        }

        .lead-inline-cta-btn:hover svg {
          transform: translateX(4px);
        }

        /* ══════════════════════════════════════════════════════
           OUR SYSTEM / HOW IT WORKS
        ══════════════════════════════════════════════════════ */
        .lead-system {
          padding: 100px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .lead-s-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .lead-s-header h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #fff;
          margin: 0 0 16px;
          letter-spacing: -0.02em;
        }

        .lead-s-header p {
          font-size: 16px;
          color: #9AB4CC;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .lead-s-grid {
          display: grid;
          gap: 24px;
          grid-template-columns: 1fr;
        }

        @media (min-width: 768px) {
          .lead-s-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .lead-s-card {
          background: rgba(15,42,68,0.3);
          border-radius: 20px;
          padding: 36px 30px;
          border: 1px solid rgba(28,63,99,0.5);
          backdrop-filter: blur(10px);
          transition: transform 0.3s, border-color 0.3s, background 0.3s;
        }

        .lead-s-card:hover {
          transform: translateY(-5px);
          border-color: rgba(15,163,163,0.4);
          background: rgba(15,42,68,0.5);
        }

        .lead-s-icon {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: rgba(212,164,55,0.1);
          border: 1px solid rgba(212,164,55,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #D4A437;
          margin-bottom: 24px;
        }

        .lead-s-icon svg {
          width: 26px;
          height: 26px;
        }

        .lead-s-title {
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 12px;
        }

        .lead-s-desc {
          font-size: 14.5px;
          line-height: 1.75;
          color: #9AB4CC;
          margin: 0;
        }

        /* ══════════════════════════════════════════════════════
           FINAL CTA
        ══════════════════════════════════════════════════════ */
        .lead-cta {
          padding: 100px 24px;
          text-align: center;
          background: linear-gradient(135deg, rgba(15,42,68,0.8) 0%, rgba(6,15,30,1) 100%);
          border-top: 1px solid rgba(28,63,99,0.5);
          position: relative;
          overflow: hidden;
        }

        .lead-cta::before {
          content: '';
          position: absolute;
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(212,164,55,0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .lead-cta-inner {
          position: relative;
          z-index: 10;
          max-width: 650px;
          margin: 0 auto;
        }

        .lead-cta h2 {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 800;
          color: #fff;
          margin: 0 0 16px;
          line-height: 1.12;
        }

        .lead-cta p {
          color: #9AB4CC;
          font-size: 16px;
          line-height: 1.8;
          margin: 0 0 36px;
        }

        .lead-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 36px;
          border-radius: 14px;
          font-size: 15px;
          font-weight: 700;
          background: #D4A437;
          color: #0F2A44;
          text-decoration: none;
          transition: transform 0.25s, box-shadow 0.25s, background 0.25s;
        }

        .lead-cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(212,164,55,0.3);
          background: #E5B445;
        }

        .lead-cta-btn svg {
          width: 17px;
          height: 17px;
          transition: transform 0.25s ease;
        }

        .lead-cta-btn:hover svg {
          transform: translateX(4px);
        }

        @media (max-width: 640px) {
          .lead-root {
            padding-top: 20px;
          }

          .lead-hero {
            padding: 20px 20px 70px;
            gap: 34px;
          }

          .lead-back-btn {
            left: 20px;
            top: 0;
            padding: 9px 14px;
          }

          .lead-hero-content {
            padding-top: 52px;
          }

          .lead-hero-btn {
            width: 100%;
            justify-content: center;
          }

          .lead-inline-cta-wrap {
            padding: 24px 20px;
          }

          .lead-inline-cta {
            padding: 24px 20px;
          }

          .lead-inline-cta-btn {
            width: 100%;
          }

          .lead-cta {
            padding: 80px 20px;
          }

          .lead-cta-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="lead-hero">
        <button onClick={() => navigate(-1)} className="lead-back-btn">
          <ArrowLeft />
          Back
        </button>

        <div className="lead-hero-content">
          <div className="lead-hero-badge">
            <TrendingUp /> Lead Generation
          </div>
          <h1>
            Consistent Enquiries.
            <span>Targeted Results.</span>
          </h1>
          <p>
            We build systems that consistently generate new enquiries — ensuring
            your business receives high-quality, targeted leads around the clock.
          </p>
          <Link to="/contact" className="lead-hero-btn">
            Build Your Funnel <ArrowRight style={{ width: 18, height: 18 }} />
          </Link>
        </div>

        <div className="lead-hero-img-box">
          <img src={leadHero} alt="Lead Generation Dashboard" />
        </div>
      </section>

      {/* ── WHAT WE BUILD ───────────────────────────────────── */}
      <section className="lead-concept">
        <div className="lead-concept-inner">
          <img
            src={leadGraph}
            alt="High Quality Leads Graph"
            className="lead-concept-img"
          />

          <div className="lead-concept-content">
            <h2>Systems That Scale</h2>
            <p>
              Relying on referrals or cold calling is unpredictable. We engineer
              automated lead generation ecosystems that capture intent, nurture
              prospects, and deliver ready-to-buy customers directly to your sales team.
            </p>

            <div className="lead-points">
              <div className="lead-point">
                <div className="lead-point-icon">
                  <Filter />
                </div>
                <h4 className="lead-point-text">
                  High-Converting Lead Generation Funnels
                </h4>
              </div>

              <div className="lead-point">
                <div className="lead-point-icon">
                  <MousePointerClick />
                </div>
                <h4 className="lead-point-text">Optimised Landing Pages</h4>
              </div>

              <div className="lead-point">
                <div className="lead-point-icon">
                  <Target />
                </div>
                <h4 className="lead-point-text">Targeted Paid Search Campaigns</h4>
              </div>

              <div className="lead-point">
                <div className="lead-point-icon">
                  <CheckCircle2 />
                </div>
                <h4 className="lead-point-text">Seamless CRM Integrations</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InlineLeadCTA
        title="Need a system that brings in leads consistently?"
        text="Book a free strategy call and discover how we can build a predictable lead generation funnel tailored to your business."
      />

      {/* ── HOW IT WORKS ────────────────────────────────────── */}
      <section className="lead-system">
        <div className="lead-s-header">
          <h2>How The Engine Works</h2>
          <p>
            A multi-channel approach designed to capture demand, build trust, and
            lower your cost per acquisition over time.
          </p>
        </div>

        <div className="lead-s-grid">
          <div className="lead-s-card">
            <div className="lead-s-icon">
              <Target />
            </div>
            <h3 className="lead-s-title">1. Traffic Acquisition</h3>
            <p className="lead-s-desc">
              We deploy hyper-targeted ads across Google and Meta to capture users
              who are actively searching for or showing high interest in your services.
            </p>
          </div>

          <div className="lead-s-card">
            <div className="lead-s-icon">
              <Zap />
            </div>
            <h3 className="lead-s-title">2. Lead Capture</h3>
            <p className="lead-s-desc">
              Traffic is directed to perfectly optimised landing pages designed with
              a single goal: converting that visitor into a qualified lead.
            </p>
          </div>

          <div className="lead-s-card">
            <div className="lead-s-icon">
              <Filter />
            </div>
            <h3 className="lead-s-title">3. Qualification & Sync</h3>
            <p className="lead-s-desc">
              Leads are instantly routed into your CRM, filtered for quality, and
              your sales team is notified immediately to close the deal while it's hot.
            </p>
          </div>
        </div>
      </section>

      <InlineLeadCTA
        title="Want more qualified enquiries without relying on referrals?"
        text="Let’s create a lead generation system that captures demand, filters quality prospects and keeps your pipeline full."
      />

      {/* FINAL CTA */}
      <CtaSection 
        title="Ready to Build a Lead Generation System That Scales?"
        subtitle="Book a free strategy call and let’s map out a smarter funnel that attracts better leads, improves conversions and supports long-term growth for your business."
        ctaText="Book Free Strategy Call"
      />

    </div>
  );
};

export default LeadPage;