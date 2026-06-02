import React, { useEffect, useRef, useState, memo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  Sparkles,
  Eye,
  Rocket,
  Star,
  Zap,
  X,
  Award,
  TrendingUp,
  Globe,
  BarChart3,
} from "lucide-react";
import CountUp from "../../Components/CountUp";

import homeServicesImg from "../img/homeservice.webp";
import realEstateImg from "../img/rea.webp";
import lawFirmImg from "../img/la.webp";
import seoProof from "../img/seovideo.mp4";
import seoProof2 from "../img/seovideo2.mp4";
import dentistimg from "../img/d.webp";
import growth1Img from "../img/l.webp";
import growth2Img from "../img/l2.png";

const websiteItems = [
  {
    title: "Home Services Website",
    type: "Service Business",
    image: homeServicesImg,
    link: "https://australia-project-fe.vercel.app/",
    text: "Clean and modern service website built for home experts with a strong conversion-focused user journey.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    color: "#0FA3A3",
    gradient: "linear-gradient(135deg, #0FA3A3, #14B8A6)",
  },
  {
    title: "Real Estate Website",
    type: "Property Showcase",
    image: realEstateImg,
    link: "https://real-estate-flax-pi.vercel.app/",
    text: "Premium real estate website with a polished browsing experience, strong visual hierarchy and modern layout.",
    tech: ["React", "Responsive", "Modern UI"],
    color: "#D4A437",
    gradient: "linear-gradient(135deg, #D4A437, #F59E0B)",
  },
  {
    title: "Law Firm Website",
    type: "Legal Business",
    image: lawFirmImg,
    link: "https://law-firm-gamma-five.vercel.app/",
    text: "Elegant legal business website with a premium dark theme and authority-driven presentation.",
    tech: ["React", "Dark Theme", "Deployed"],
    color: "#A855F7",
    gradient: "linear-gradient(135deg, #A855F7, #8B5CF6)",
  },
  {
    title: "Dentist Website",
    type: "Healthcare Website",
    image: dentistimg,
    link: "https://dentist-project-flax.vercel.app/",
    text: "A clean and trust-focused dental website built for appointment generation and stronger healthcare presentation.",
    tech: ["Healthcare UI", "Responsive", "Conversion"],
    color: "#06B6D4",
    gradient: "linear-gradient(135deg, #06B6D4, #22D3EE)",
  },
];

const growthItems = [
  {
    title: "Brand Growth Strategy",
    type: "Business Growth",
    image: growth1Img,
    text: "Strategic growth planning focused on market expansion, customer acquisition, and brand scaling.",
    tech: ["Strategy", "Scaling", "Growth"],
    color: "#10B981",
    gradient: "linear-gradient(135deg, #10B981, #34D399)",
  },
  {
    title: "Performance Optimization",
    type: "Scale & Optimize",
    image: growth2Img,
    text: "Data-driven approaches to tracking performance metrics and optimizing user funnels for rapid scaling.",
    tech: ["Analytics", "Optimization", "Data"],
    color: "#F43F5E",
    gradient: "linear-gradient(135deg, #F43F5E, #FB7185)",
  },
];

const stats = [
  {
    number: "50+",
    label: "Projects Delivered",
    icon: <Briefcase size={20} />,
    color: "#0FA3A3",
  },
  {
    number: "35+",
    label: "Happy Clients",
    icon: <Star size={20} />,
    color: "#D4A437",
  },
  {
    number: "99%",
    label: "Client Satisfaction",
    icon: <Award size={20} />,
    color: "#A855F7",
  },
  {
    number: "24/7",
    label: "Dedicated Support",
    icon: <Zap size={20} />,
    color: "#06B6D4",
  },
];

const OptimizedImage = memo(
  ({ src, alt, className, priority = false, heightClass = "" }) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    return (
      <div
        className={`pf-img-loader-wrap ${heightClass} ${loaded ? "loaded" : ""}`}
      >
        {!loaded && !error && <div className="pf-img-skeleton" />}
        {!error ? (
          <img
            src={src}
            alt={alt}
            className={className}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            draggable="false"
          />
        ) : (
          <div className="pf-img-fallback">Image not available</div>
        )}
      </div>
    );
  }
);

/** Re-usable video card */
const SeoVideoCard = ({
  mountVideo,
  src,
  title,
  desc,
  stat1Num,
  stat1Label,
  stat2Num,
  stat2Label,
  isVisible,
}) => {
  return (
    <div className="pf-video-card">
      <div className="pf-video-wrap">
        {mountVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="pf-video-el"
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <div className="pf-video-placeholder">Loading preview...</div>
        )}
        <div className="pf-video-overlay" />
      </div>

      <div className="pf-video-info">
        <div className="pf-video-info-left">
          <span className="pf-video-badge">
            <BarChart3 size={11} /> SEO Results
          </span>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>

        <div className="pf-video-info-stats">
          <div className="pf-video-stat">
            <span className="pf-video-stat-num">
              <CountUp value={stat1Num} isVisible={isVisible} />
            </span>
            <span className="pf-video-stat-label">{stat1Label}</span>
          </div>
          <div className="pf-video-stat">
            <span className="pf-video-stat-num">
              <CountUp value={stat2Num} isVisible={isVisible} />
            </span>
            <span className="pf-video-stat-label">{stat2Label}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const SeoVideoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mountVideo, setMountVideo] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setMountVideo(true);
        }
      },
      { threshold: 0.15, rootMargin: "200px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`pf-video-section ${isVisible ? "visible" : ""}`}
    >
      <div className="pf-section-head pf-section-head-always">
        <div className="pf-section-icon">
          <TrendingUp />
        </div>
        <h2>
          SEO Proof & <span className="pf-gradient-text">Results</span>
        </h2>
        <div className="pf-section-divider" />
      </div>

      {/* DONO VIDEO UPAR-NICHE (NOT SIDE BY SIDE) */}
      <div className="pf-video-stack">
        <SeoVideoCard
          mountVideo={mountVideo}
          isVisible={isVisible}
          src={seoProof}
          title="Performance Proof"
          desc="Witness the impact of organic growth strategy on real-world business performance."
          stat1Num="340"
          stat1Label="Organic %"
          stat2Num="280"
          stat2Label="Leads %"
        />

        <SeoVideoCard
          mountVideo={mountVideo}
          isVisible={isVisible}
          src={seoProof2}
          title="Performance Proof"
          desc="Witness the impact of organic growth strategy on real-world business performance."
          stat1Num="210"
          stat1Label="Traffic %"
          stat2Num="165"
          stat2Label="Calls %"
        />
      </div>
    </section>
  );
};

const PortfolioPage = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [previewReady, setPreviewReady] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [webHeadVisible, setWebHeadVisible] = useState(false);

  const statsRef = useRef(null);
  const ctaRef = useRef(null);
  const webHeadRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setHeaderVisible(true), 120);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setPreviewImage(null);
        setPreviewReady(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target === statsRef.current) setStatsVisible(true);
          if (entry.target === ctaRef.current) setCtaVisible(true);
          if (entry.target === webHeadRef.current) setWebHeadVisible(true);
        });
      },
      { threshold: 0.1, rootMargin: "120px 0px" }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    if (webHeadRef.current) observer.observe(webHeadRef.current);

    return () => observer.disconnect();
  }, []);

  const openPreview = (src) => {
    setPreviewReady(false);
    setPreviewImage(src);

    const img = new Image();
    img.src = src;

    if (img.decode) {
      img
        .decode()
        .then(() => setPreviewReady(true))
        .catch(() => setPreviewReady(true));
    } else {
      img.onload = () => setPreviewReady(true);
      img.onerror = () => setPreviewReady(true);
    }
  };

  const closePreview = () => {
    setPreviewImage(null);
    setPreviewReady(false);
  };

  const renderCard = (item, index) => {
    const isPriority = index < 2;

    return (
      <div
        key={item.title}
        className="pf-card"
        style={{ "--card-color": item.color }}
      >
        <div className="pf-card-shine" />
        <div
          className="pf-card-glow"
          style={{
            background: `radial-gradient(600px circle at 50% 0%, ${item.color}12, transparent 70%)`,
          }}
        />

        <button
          className="pf-img-wrap"
          onClick={() => openPreview(item.image)}
          type="button"
        >
          <OptimizedImage
            src={item.image}
            alt={item.title}
            className="pf-img"
            priority={isPriority}
          />
          <div className="pf-img-gradient" />
          <div className="pf-img-overlay">
            <div className="pf-preview-btn">
              <Eye size={16} /> Open Preview
            </div>
          </div>

          <div className="pf-img-corner-badge">
            <Globe size={12} />
          </div>
        </button>

        <div className="pf-content">
          <div className="pf-type-row">
            <span
              className="pf-type"
              style={{
                background: `${item.color}12`,
                border: `1px solid ${item.color}25`,
                color: item.color,
              }}
            >
              <span className="pf-type-dot" style={{ background: item.color }} />
              {item.type}
            </span>
          </div>

          <h3>{item.title}</h3>
          <p>{item.text}</p>

          <div className="pf-tech-row">
            {item.tech.map((t) => (
              <span key={t} className="pf-tech-tag">
                {t}
              </span>
            ))}
          </div>

          <div className="pf-card-footer">
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="pf-visit"
              style={{ background: item.gradient }}
            >
              Visit Website <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="pf-root">
      <style>{`
        .pf-root {
          background: #030712;
          min-height: 100vh;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: #94A3B8;
          overflow-x: hidden;
          position: relative;
        }

        .pf-wrap {
          max-width: 1440px;
          margin: 0 auto;
          padding: 145px 24px 120px;
          position: relative;
          z-index: 2;
        }

        .pf-header {
          text-align: center;
          margin-bottom: 56px;
          opacity: 0;
          transform: translateY(24px);
          transition: all 0.45s ease;
        }

        .pf-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .pf-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 22px;
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(15,163,163,0.1), rgba(168,85,247,0.06));
          border: 1px solid rgba(15,163,163,0.15);
          color: #0FA3A3;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 28px;
        }

        .pf-header h1 {
          margin: 0 0 20px;
          font-family: 'Space Grotesk', 'Inter', sans-serif;
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          line-height: 1.08;
          font-weight: 700;
          letter-spacing: -0.04em;
          color: #F8FAFC;
        }

        .pf-header h1 span {
          display: block;
          margin-top: 6px;
          background: linear-gradient(135deg, #0FA3A3 0%, #D4A437 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .pf-header p {
          max-width: 600px;
          margin: 0 auto;
          font-size: 16px;
          line-height: 1.85;
          color: #64748B;
        }

        .pf-header-line {
          width: 60px;
          height: 3px;
          border-radius: 99px;
          background: linear-gradient(90deg, #0FA3A3, #D4A437);
          margin: 28px auto 0;
          opacity: 0.5;
        }

        .pf-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 64px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.45s ease;
        }

        .pf-stats.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .pf-stat-item {
          text-align: center;
          padding: 28px 16px;
          border-radius: 20px;
          background: rgba(15,23,42,0.5);
          border: 1px solid rgba(30,41,59,0.6);
          backdrop-filter: blur(14px);
        }

        .pf-stat-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 14px;
          margin-bottom: 14px;
          background: rgba(15,163,163,0.12);
          color: #0FA3A3;
          border: 1px solid rgba(15,163,163,0.2);
        }

        .pf-stat-number {
          display: block;
          font-family: 'Space Grotesk', 'Inter', sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 6px;
        }

        .pf-stat-label {
          font-size: 12px;
          color: #64748B;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .pf-section-head {
          margin: 0 0 36px;
          text-align: center;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.45s ease;
        }

        .pf-section-head.visible,
        .pf-section-head-always {
          opacity: 1;
          transform: translateY(0);
        }

        .pf-section-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(15,163,163,0.12), rgba(15,163,163,0.04));
          border: 1px solid rgba(15,163,163,0.15);
          color: #0FA3A3;
          margin-bottom: 16px;
        }

        .pf-section-head h2 {
          margin: 0;
          font-family: 'Space Grotesk', 'Inter', sans-serif;
          font-size: clamp(1.6rem, 3.2vw, 2.5rem);
          font-weight: 700;
          color: #F8FAFC;
          letter-spacing: -0.03em;
        }

        .pf-gradient-text {
          background: linear-gradient(135deg, #0FA3A3, #D4A437);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .pf-section-head p {
          max-width: 580px;
          margin: 12px auto 0;
          font-size: 15px;
          line-height: 1.8;
          color: #64748B;
        }

        .pf-section-divider {
          width: 40px;
          height: 3px;
          border-radius: 99px;
          background: linear-gradient(90deg, #0FA3A3, transparent);
          margin: 16px auto 0;
          opacity: 0.4;
        }

        .pf-grid-web {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .pf-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          background: rgba(15,23,42,0.45);
          border: 1px solid rgba(30,41,59,0.5);
          backdrop-filter: blur(14px);
          transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
          content-visibility: auto;
          contain-intrinsic-size: 420px;
        }

        .pf-card:hover {
          border-color: var(--card-color, rgba(15,163,163,0.25));
          transform: translateY(-8px);
          box-shadow: 0 24px 50px rgba(0,0,0,0.28);
        }

        .pf-card-shine {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
          z-index: 2;
        }

        .pf-card-glow {
          position: absolute;
          inset: 0;
          border-radius: 24px;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .pf-card:hover .pf-card-glow {
          opacity: 1;
        }

        .pf-img-wrap {
          position: relative;
          border: none;
          background: transparent;
          width: 100%;
          padding: 0;
          cursor: pointer;
        }

        .pf-img-loader-wrap {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
          background: #0f172a;
        }

        .pf-img-skeleton {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(30, 41, 59, 0.82) 25%,
            rgba(51, 65, 85, 0.96) 50%,
            rgba(30, 41, 59, 0.82) 75%
          );
          background-size: 200% 100%;
          animation: pf-loading 1.15s linear infinite;
        }

        @keyframes pf-loading {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .pf-img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          object-position: top;
          display: block;
          opacity: 0;
          transition: opacity 0.28s ease, transform 0.45s ease;
        }

        .pf-img-loader-wrap.loaded .pf-img {
          opacity: 1;
        }

        .pf-img-fallback {
          width: 100%;
          height: 240px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94A3B8;
          font-size: 14px;
          background: #0f172a;
        }

        .pf-card:hover .pf-img {
          transform: scale(1.04);
        }

        .pf-img-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60px;
          background: linear-gradient(to top, rgba(3,7,18,0.7), transparent);
          z-index: 2;
        }

        .pf-img-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(3,7,18,0.45);
          opacity: 0;
          transition: opacity 0.25s ease;
          z-index: 3;
        }

        .pf-card:hover .pf-img-overlay {
          opacity: 1;
        }

        .pf-preview-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          border-radius: 14px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.15);
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          backdrop-filter: blur(12px);
        }

        .pf-img-corner-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.7);
          z-index: 4;
        }

        .pf-content {
          padding: 20px 22px 24px;
        }

        .pf-type-row {
          margin-bottom: 14px;
        }

        .pf-type {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 14px;
          border-radius: 10px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-family: 'Space Grotesk', 'Inter', sans-serif;
        }

        .pf-type-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .pf-content h3 {
          margin: 0 0 10px;
          font-family: 'Space Grotesk', 'Inter', sans-serif;
          color: #F1F5F9;
          font-size: 19px;
          font-weight: 700;
          line-height: 1.3;
        }

        .pf-content p {
          margin: 0 0 16px;
          color: #64748B;
          font-size: 13.5px;
          line-height: 1.75;
        }

        .pf-tech-row {
          display: flex;
          gap: 8px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }

        .pf-tech-tag {
          padding: 5px 12px;
          border-radius: 8px;
          font-size: 10px;
          font-weight: 600;
          background: rgba(30,41,59,0.5);
          border: 1px solid rgba(51,65,85,0.4);
          color: #94A3B8;
          font-family: 'Space Grotesk', 'Inter', sans-serif;
        }

        .pf-card-footer {
          padding-top: 4px;
        }

        .pf-visit {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 20px;
          border-radius: 12px;
          text-decoration: none;
          font-size: 12.5px;
          font-weight: 700;
          color: #fff;
          border: none;
          cursor: pointer;
        }

        .pf-section-gap {
          margin-top: 80px;
        }

        .pf-growth-container {
          display: flex;
          flex-direction: column;
          gap: 60px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .pf-growth-item {
          display: flex;
          align-items: center;
          gap: 48px;
          background: rgba(15,23,42,0.35);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 32px;
          padding: 40px;
          backdrop-filter: blur(10px);
          transition: transform 0.28s ease, box-shadow 0.28s ease;
          content-visibility: auto;
          contain-intrinsic-size: 540px;
        }

        .pf-growth-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.24);
        }

        .pf-growth-item:nth-child(even) {
          flex-direction: row-reverse;
        }

        .pf-growth-img-box {
          flex: 1;
          border-radius: 20px;
          overflow: hidden;
          background: var(--bg-color, rgba(15,163,163,0.05));
          min-height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .pf-growth-img {
          width: 100%;
          height: 380px;
          object-fit: contain;
          object-position: center;
          display: block;
        }

        .pf-growth-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .pf-growth-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: var(--bg-color, rgba(15,163,163,0.1));
          color: var(--item-color, #0FA3A3);
          border-radius: 99px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          width: fit-content;
        }

        .pf-growth-info h3 {
          font-family: 'Space Grotesk', 'Inter', sans-serif;
          font-size: 28px;
          color: #fff;
          margin: 0;
        }

        .pf-growth-info p {
          color: #94A3B8;
          font-size: 16px;
          line-height: 1.7;
          margin: 0;
        }

        .pf-growth-tags {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 8px;
        }

        .pf-growth-tag {
          padding: 5px 12px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          color: #64748B;
          font-size: 11px;
          font-weight: 600;
        }

        .pf-video-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0;
          transform: translateY(24px);
          transition: all 0.55s ease;
        }

        .pf-video-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* IMPORTANT: stack container for videos (upar-niche) */
        .pf-video-stack {
          width: 100%;
          max-width: 980px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .pf-video-card {
          width: 100%;
          border-radius: 28px;
          overflow: hidden;
          background: rgba(15,23,42,0.5);
          border: 1px solid rgba(30,41,59,0.5);
          backdrop-filter: blur(16px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.28);
        }

        .pf-video-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #050b17;
          overflow: hidden;
        }

        .pf-video-el {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .pf-video-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94A3B8;
          background: linear-gradient(135deg, #07101f, #0b1628);
          font-size: 14px;
        }

        .pf-video-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.3));
          pointer-events: none;
        }

        .pf-video-info {
          padding: 28px 32px 32px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 32px;
        }

        .pf-video-info-left {
          flex: 1;
        }

        .pf-video-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 16px;
          border-radius: 999px;
          background: rgba(15,163,163,0.1);
          border: 1px solid rgba(15,163,163,0.18);
          color: #0FA3A3;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .pf-video-info h3 {
          margin: 0 0 10px;
          color: #F1F5F9;
          font-size: 22px;
          font-family: 'Space Grotesk', 'Inter', sans-serif;
          font-weight: 700;
        }

        .pf-video-info p {
          margin: 0;
          color: #64748B;
          font-size: 14px;
          line-height: 1.8;
          max-width: 450px;
        }

        .pf-video-info-stats {
          display: flex;
          gap: 16px;
          flex-shrink: 0;
          padding-top: 4px;
        }

        .pf-video-stat {
          text-align: center;
          padding: 14px 16px;
          border-radius: 16px;
          background: rgba(15,163,163,0.05);
          border: 1px solid rgba(15,163,163,0.12);
          min-width: 110px;
        }

        .pf-video-stat-num {
          display: block;
          font-family: 'Space Grotesk', 'Inter', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #0FA3A3;
          margin-bottom: 4px;
        }

        .pf-video-stat-label {
          font-size: 10px;
          color: #64748B;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .pf-cta {
          margin-top: 80px;
          text-align: center;
          padding: 60px 36px;
          border-radius: 32px;
          background: rgba(15,23,42,0.5);
          border: 1px solid rgba(30,41,59,0.5);
          backdrop-filter: blur(18px);
          opacity: 0;
          transform: translateY(24px);
          transition: all 0.45s ease;
        }

        .pf-cta.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .pf-cta-sparkle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(15,163,163,0.12), rgba(212,164,55,0.08));
          border: 1px solid rgba(15,163,163,0.15);
          margin-bottom: 24px;
          color: #0FA3A3;
        }

        .pf-cta h2 {
          margin: 0 0 14px;
          font-family: 'Space Grotesk', 'Inter', sans-serif;
          color: #F1F5F9;
          font-size: clamp(1.7rem, 3.5vw, 2.6rem);
          font-weight: 700;
          line-height: 1.15;
        }

        .pf-cta h2 span {
          background: linear-gradient(135deg, #0FA3A3, #D4A437);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .pf-cta-sub {
          color: #64748B;
          font-size: 15px;
          max-width: 500px;
          margin: 0 auto 32px;
          line-height: 1.8;
        }

        .pf-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          border-radius: 16px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
          background: linear-gradient(135deg, #0FA3A3, #0C8C8C);
          color: #fff;
          border: 1px solid rgba(15,163,163,0.3);
        }

        .pf-lightbox {
          position: fixed;
          inset: 0;
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .pf-lightbox-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(2,6,23,0.88);
          backdrop-filter: blur(8px);
        }

        .pf-lightbox-content {
          position: relative;
          z-index: 2;
          max-width: min(92vw, 1200px);
          max-height: 88vh;
          border-radius: 20px;
          overflow: hidden;
          background: #0f172a;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 24px 80px rgba(0,0,0,0.42);
        }

        .pf-lightbox-loading {
          width: min(92vw, 1200px);
          max-width: 100%;
          height: min(70vh, 700px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94A3B8;
          background: #0f172a;
        }

        .pf-lightbox-img {
          display: block;
          width: 100%;
          height: auto;
          max-height: 88vh;
          object-fit: contain;
          background: #020617;
        }

        .pf-lightbox-close {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 3;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(0,0,0,0.55);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        @media (max-width: 1200px) {
          .pf-grid-web {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 900px) {
          .pf-growth-item,
          .pf-growth-item:nth-child(even) {
            flex-direction: column;
            padding: 24px;
            gap: 24px;
          }

          .pf-growth-img-box {
            width: 100%;
            min-height: 260px;
            padding: 14px;
          }

          .pf-growth-img {
            width: 100%;
            height: 230px;
          }

          .pf-video-info {
            flex-direction: column;
            padding: 24px;
            gap: 20px;
          }

          .pf-video-info-stats {
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .pf-grid-web {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .pf-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .pf-wrap {
            padding: 120px 20px 90px;
          }
        }

        @media (max-width: 640px) {
          .pf-wrap {
            padding: 110px 16px 80px;
          }

          .pf-img-loader-wrap,
          .pf-img,
          .pf-img-fallback {
            height: 220px;
          }

          .pf-content {
            padding: 18px;
          }

          .pf-cta {
            padding: 42px 20px;
          }

          .pf-cta-btn {
            width: 100%;
            justify-content: center;
          }

          .pf-video-info-stats {
            flex-wrap: wrap;
          }
        }
      `}</style>

      <div className="pf-wrap">
        <header className={`pf-header ${headerVisible ? "visible" : ""}`}>
          <div className="pf-badge">
            <Sparkles />
            <span>Our Portfolio</span>
          </div>
          <h1>
            A Showcase of
            <span>Creative Mastery</span>
          </h1>
          <p>
            Explore our curated collection of thoughtfully designed and expertly
            built digital products that help brands grow, connect and dominate
            their industry.
          </p>
          <div className="pf-header-line" />
        </header>

        <div
          ref={statsRef}
          className={`pf-stats ${statsVisible ? "visible" : ""}`}
        >
          {stats.map((item, index) => (
            <div key={index} className="pf-stat-item">
              <div
                className="pf-stat-icon"
                style={{
                  background: `${item.color}14`,
                  color: item.color,
                  border: `1px solid ${item.color}20`,
                }}
              >
                {item.icon}
              </div>
              <span className="pf-stat-number">
                <CountUp value={item.number} isVisible={statsVisible} />
              </span>
              <span className="pf-stat-label">{item.label}</span>
            </div>
          ))}
        </div>

        <div
          ref={webHeadRef}
          className={`pf-section-head ${webHeadVisible ? "visible" : ""}`}
        >
          <div className="pf-section-icon">
            <Globe />
          </div>
          <h2>
            Live Website <span className="pf-gradient-text">Projects</span>
          </h2>
          <p>
            Fully developed websites built for real businesses with premium UI,
            full responsiveness and conversion-first architecture.
          </p>
          <div className="pf-section-divider" />
        </div>

        <div className="pf-grid-web">
          {websiteItems.map((item, index) => renderCard(item, index))}
        </div>

        <div className="pf-section-gap">
          <div className="pf-section-head visible">
            <div className="pf-section-icon">
              <TrendingUp />
            </div>
            <h2>
              Business <span className="pf-gradient-text">Growth</span>
            </h2>
            <p>
              Data-backed strategies and impactful visuals designed to scale
              revenue and expand your market presence.
            </p>
            <div className="pf-section-divider" />
          </div>

          <div className="pf-growth-container">
            {growthItems.map((item, index) => (
              <div
                key={item.title}
                className="pf-growth-item"
                style={{
                  "--item-color": item.color,
                  "--bg-color": `${item.color}15`,
                }}
              >
                <div
                  className="pf-growth-img-box"
                  onClick={() => openPreview(item.image)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="pf-growth-img"
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    draggable="false"
                  />
                </div>

                <div className="pf-growth-info">
                  <span className="pf-growth-badge">
                    <Sparkles size={12} /> {item.type}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>

                  <div className="pf-growth-tags">
                    {item.tech.map((t) => (
                      <span key={t} className="pf-growth-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div style={{ marginTop: "12px" }}>
                    <button
                      className="pf-visit"
                      style={{ background: item.gradient, padding: "10px 24px" }}
                      onClick={() => openPreview(item.image)}
                    >
                      View Growth <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pf-section-gap">
          <SeoVideoSection />
        </div>

        <div ref={ctaRef} className={`pf-cta ${ctaVisible ? "visible" : ""}`}>
          <div className="pf-cta-sparkle">
            <Rocket />
          </div>
          <h2>
            Ready to build something <span>amazing</span>?
          </h2>
          <p className="pf-cta-sub">
            Let's transform your vision into a stunning digital reality. Start
            with a free consultation and see the difference.
          </p>
          <Link to="/contact" className="pf-cta-btn">
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {previewImage && (
        <div className="pf-lightbox">
          <div className="pf-lightbox-backdrop" onClick={closePreview} />
          <div className="pf-lightbox-content">
            <button className="pf-lightbox-close" onClick={closePreview}>
              <X />
            </button>

            {!previewReady ? (
              <div className="pf-lightbox-loading">Opening preview...</div>
            ) : (
              <img src={previewImage} alt="Preview" className="pf-lightbox-img" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;