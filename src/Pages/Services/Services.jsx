import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Search,
  TrendingUp,
  Share2,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import CtaSection from "../../Components/CtaSection";


/* ── Services data ─────────────────────────────────────────── */
const SERVICES = [
  {
    id: 0,
    icon: Globe,
    num: "01",
    title: "Website Design & Development",
    tagline: "Professional websites built to perform.",
    desc: "Every website we build is designed for performance, user experience and conversion — combining stunning visuals with conversion-focused architecture.",
    points: [
      "Business websites",
      "Corporate websites",
      "Landing pages",
      "E-commerce platforms",
    ],
    color: "#0FA3A3", // Teal
    colorRgb: "15,163,163",
    slug: "website-design-development",
    cta1: "Start Your Project",
    cta2: "Learn More",
  },
  {
    id: 1,
    icon: Search,
    num: "02",
    title: "Strategic SEO",
    tagline: "Rank higher. Attract the right traffic.",
    desc: "Our SEO services help businesses rank higher in search engines and attract qualified traffic that converts into real business opportunities.",
    points: [
      "Keyword optimisation",
      "Technical SEO",
      "Content optimisation",
      "Local SEO strategies",
    ],
    color: "#3B82F6", // Blue
    colorRgb: "59,130,246",
    slug: "strategic-seo",
    cta1: "Get Free SEO Audit",
    cta2: "Learn More",
  },
  {
    id: 2,
    icon: TrendingUp,
    num: "03",
    title: "High Quality Lead Generation",
    tagline: "Consistent enquiries. Targeted results.",
    desc: "We build systems that consistently generate new enquiries — ensuring your business receives high-quality, targeted leads around the clock.",
    points: [
      "Lead generation funnels",
      "Landing pages",
      "Paid search campaigns",
      "CRM integrations",
    ],
    color: "#F97316", // Orange
    colorRgb: "249,115,22",
    slug: "lead-generation",
    cta1: "Build Your Funnel",
    cta2: "Learn More",
  },
  {
    id: 3,
    icon: Share2,
    num: "04",
    title: "Social Media Advertising",
    tagline: "Reach the right audience. Every time.",
    desc: "Targeted advertising campaigns that increase brand awareness and generate new opportunities — with creative strategy built for conversion.",
    points: [
      "Campaign strategy",
      "Audience targeting",
      "Creative ad design",
      "Conversion optimisation",
    ],
    color: "#8B5CF6", // Purple
    colorRgb: "139,92,246",
    slug: "social-media-advertising",
    cta1: "Launch Campaign",
    cta2: "Learn More",
  },
];

/* ═══════════════════════ SERVICES PAGE ════════════════════════ */
const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="svc-root">
      <style>{`
        .svc-root {
          background: #F7F9FC;
          min-height: 100vh;
          font-family: 'Inter', 'Segoe UI', sans-serif;
          color: #0F2A44;
        }

        .svc-section {
          padding: 80px 24px 100px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .svc-top {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 56px;
        }

        .svc-top-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 18px;
          border-radius: 999px;
          background: rgba(15,163,163,0.08);
          border: 1px solid rgba(15,163,163,0.16);
          color: #0FA3A3;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .svc-top h1 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #0F2A44;
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin: 0 0 14px;
        }

        .svc-top p {
          color: #5A7A95;
          font-size: 15px;
          line-height: 1.8;
          margin: 0 auto;
          max-width: 620px;
        }

        .svc-cards {
          display: grid;
          gap: 28px;
          grid-template-columns: 1fr;
        }

        @media (min-width: 768px) {
          .svc-cards {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1100px) {
          .svc-cards {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .svc-card {
          background: #fff;
          border-radius: 22px;
          border: 1.5px solid #E5EDF5;
          box-shadow: 0 2px 16px rgba(15,42,68,0.06);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          position: relative;
        }

        .svc-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 52px rgba(15,42,68,0.12);
        }

        .svc-card-bar {
          height: 4px;
          width: 100%;
        }

        .svc-card-body {
          padding: 28px 24px 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .svc-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .svc-card-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease;
        }

        .svc-card:hover .svc-card-icon-wrap {
          transform: scale(1.06);
        }

        .svc-card-icon-wrap svg {
          width: 24px;
          height: 24px;
        }

        .svc-card-num {
          font-size: 36px;
          font-weight: 800;
          line-height: 1;
          opacity: 0.08;
          letter-spacing: -0.04em;
        }

        .svc-card-title {
          font-size: 17px;
          font-weight: 700;
          color: #0F2A44;
          margin: 0 0 4px;
          line-height: 1.35;
        }

        .svc-card-tagline {
          font-size: 12.5px;
          font-weight: 600;
          margin: 0 0 14px;
        }

        .svc-card-divider {
          height: 1px;
          background: #EEF3F8;
          margin: 14px 0;
        }

        .svc-card-desc {
          font-size: 13.5px;
          line-height: 1.78;
          color: #5A7A95;
          margin: 0 0 20px;
          flex: 1;
        }

        .svc-card-points {
          list-style: none;
          padding: 0;
          margin: 0 0 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .svc-card-point {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          font-weight: 500;
          color: #3A5A74;
        }

        .svc-card-check {
          width: 20px;
          height: 20px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .svc-card-check svg {
          width: 11px;
          height: 11px;
        }

        .svc-card-footer {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: auto;
        }

        .svc-btn-solid {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 11px;
          font-size: 13.5px;
          font-weight: 700;
          color: #fff;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: transform 0.22s, box-shadow 0.22s;
        }

        .svc-btn-solid:hover {
          transform: translateY(-2px);
        }

        .svc-btn-solid svg {
          width: 15px;
          height: 15px;
          transition: transform 0.22s;
        }

        .svc-btn-solid:hover svg {
          transform: translateX(4px);
        }

        .svc-btn-ghost {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 11px 20px;
          border-radius: 11px;
          font-size: 13.5px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.22s, border-color 0.22s, color 0.22s;
        }

        .svc-btn-ghost svg {
          width: 14px;
          height: 14px;
        }

        @media (max-width: 640px) {
          .svc-section {
            padding: 60px 20px 80px;
          }

          .svc-card-body {
            padding: 24px 20px 20px;
          }
        }
      `}</style>

      <section className="svc-section">
        <div className="svc-top">
          <div className="svc-top-badge">Our Services</div>
          <h1>Digital Growth Services</h1>
          <p>
            Ventoria Global provides strategic digital solutions designed to help
            businesses increase visibility, attract customers and generate leads.
          </p>
        </div>

        <div className="svc-cards">
          {SERVICES.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="svc-card"
                style={{
                  background: `linear-gradient(180deg, rgba(${svc.colorRgb},0.05) 0%, #ffffff 28%)`,
                  borderColor: `rgba(${svc.colorRgb},0.18)`,
                  boxShadow: `0 2px 16px rgba(${svc.colorRgb},0.10)`,
                }}
              >
                <div
                  className="svc-card-bar"
                  style={{
                    background: `linear-gradient(90deg, ${svc.color}, ${svc.color}88)`,
                  }}
                />

                <div className="svc-card-body">
                  <div className="svc-card-top">
                    <div
                      className="svc-card-icon-wrap"
                      style={{
                        background: `rgba(${svc.colorRgb},0.10)`,
                        border: `1.5px solid rgba(${svc.colorRgb},0.22)`,
                      }}
                    >
                      <Icon style={{ color: svc.color }} />
                    </div>

                    <span className="svc-card-num" style={{ color: svc.color }}>
                      {svc.num}
                    </span>
                  </div>

                  <h3 className="svc-card-title">{svc.title}</h3>
                  <p
                    className="svc-card-tagline"
                    style={{ color: svc.color }}
                  >
                    {svc.tagline}
                  </p>

                  <div className="svc-card-divider" />

                  <p className="svc-card-desc">{svc.desc}</p>

                  <ul className="svc-card-points">
                    {svc.points.map((pt, i) => (
                      <li key={i} className="svc-card-point">
                        <span
                          className="svc-card-check"
                          style={{
                            background: `rgba(${svc.colorRgb},0.10)`,
                            border: `1px solid rgba(${svc.colorRgb},0.20)`,
                          }}
                        >
                          <CheckCircle2 style={{ color: svc.color }} />
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="svc-card-footer">
                    <Link
                      to="/contact"
                      className="svc-btn-solid"
                      style={{
                        background: `linear-gradient(135deg, ${svc.color}, ${svc.color}CC)`,
                        boxShadow: `0 6px 20px rgba(${svc.colorRgb},0.28)`,
                      }}
                    >
                      {svc.cta1} <ArrowRight />
                    </Link>

                    <Link
                      to={`/services/${svc.slug}`}
                      className="svc-btn-ghost"
                      style={{
                        color: svc.color,
                        background: `rgba(${svc.colorRgb},0.05)`,
                        border: `1.5px solid rgba(${svc.colorRgb},0.20)`,
                      }}
                    >
                      {svc.cta2} <ChevronRight />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <CtaSection 
        title="Ready to Build a Strategic Growth Plan?"
        subtitle="Let's discuss how we can scale your business with our tailored digital marketing, SEO and web development solutions."
        ctaText="Book Free Consultation"
      />
    </div>
  );
};


export default ServicesPage;