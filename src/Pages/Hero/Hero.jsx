import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroVideo from "../img/h3.mp4";
import mobileresponsive from "../img/h5.mp4";

const HERO_CONTENT = {
  tag: "YOUR GROWTH ARCHITECT",
  heading: "Digital Growth Solutions",
  highlight: "for Australian Businesses",
  sub: "Strategic SEO, High-Performance Websites and Lead Generation Systems",
  cta1Label: "Book Free Growth Consultation",
  cta1Link: "/contact",
  cta2Label: "Get Free Website Audit",
  cta2Link: "/contact",
};

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = HERO_CONTENT.highlight;
  const desktopVideoRef = useRef(null);

  /* ✅ Typewriter Effect */
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [fullText]);

  /* ✅ Slow Desktop Video Slightly */
  useEffect(() => {
    if (desktopVideoRef.current) {
      desktopVideoRef.current.playbackRate = 0.8; // Slightly slow (1 = normal)
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* ✅ Desktop Video (Slowed) */}
      <video
        ref={desktopVideoRef}
        autoPlay
        loop
        muted
        playsInline
        className="hidden md:block absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* ✅ Mobile Video (Normal Speed) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="md:hidden absolute inset-0 w-full h-full object-cover"
      >
        <source src={mobileresponsive} type="video/mp4" />
      </video>

      {/* ✅ Desktop Overlay */}
      <div className="hidden md:block absolute inset-0 bg-black/30 z-10" />

      {/* ✅ Desktop Content */}
      <div className="hidden md:flex relative z-20 items-start justify-center h-full px-6 pt-36">
        <div className="text-center max-w-4xl">

          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-[0.2em] text-teal-300 uppercase border border-teal-400/30 bg-teal-400/10 rounded-full backdrop-blur-sm">
            {HERO_CONTENT.tag}
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            {HERO_CONTENT.heading}
          </h1>

          <div className="mt-3 mb-6 min-h-[80px] flex items-center justify-center">
            <span className="text-5xl md:text-6xl font-bold 
              bg-gradient-to-r from-teal-400 via-cyan-300 to-yellow-400 
              bg-clip-text text-transparent">
              {text}
              <span className="animate-pulse text-white">|</span>
            </span>
          </div>

          <p className="max-w-xl mx-auto mb-8 text-gray-200 text-base leading-relaxed">
            {HERO_CONTENT.sub}
          </p>

          <div className="flex justify-center items-center gap-4">
            <Link
              to={HERO_CONTENT.cta1Link}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 
              text-sm font-semibold text-white rounded-xl 
              bg-gradient-to-r from-teal-500 to-teal-600 
              hover:scale-105 hover:shadow-xl 
              transition-all duration-300 shadow-md shadow-teal-500/30"
            >
              {HERO_CONTENT.cta1Label}
              <ArrowRight size={18} />
            </Link>

            <Link
              to={HERO_CONTENT.cta2Link}
              className="px-8 py-3.5 text-sm font-semibold text-white 
              border border-white/20 rounded-xl 
              bg-white/10 backdrop-blur-md 
              hover:bg-white/20 hover:scale-105 
              transition-all duration-300"
            >
              {HERO_CONTENT.cta2Label}
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;