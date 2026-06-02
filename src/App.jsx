import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Hero from "./Pages/Hero/Hero";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import FloatingSocials from "./Pages/Floating/Floating";

import About from "./Pages/About/About";
import Why from "./Pages/Why/Why";
import Mission from "./Pages/Mission/Mission";
import Services from "./Pages/Services/Services";
import Seo from "./Pages/Services/Seo";
import Lead from "./Pages/Services/Lead";
import Website from "./Pages/Services/Website";
import Social from "./Pages/Services/Social";
import Contact from "./Pages/Contacts/Contact";
import Casestudy from "./Pages/Casestudy/Casestudy";
import Portfolio from "./Pages/Portfolio/Portfolio";
import CtaSection from "./Components/CtaSection";


/* Home page component */
const HomePage = () => (
  <>
    <Hero />
    <Why />
    <Mission />
    <CtaSection 
      title="Ready to Transform Your Digital Presence?"
      subtitle="From high-converting websites to strategic SEO and lead generation, we have the expertise to help your business scale in the Australian market."
      ctaText="Book Free Consultation"
    />
  </>
);


/* About page component */
const AboutPage = () => (
  <>
    <About />
  </>
);

function App() {
  const location = useLocation();

  // ✅ FIX: route change par hamesha top par scroll
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* About */}
          <Route path="/about" element={<AboutPage />} />

          {/* Main Pages */}
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/case-studies" element={<Casestudy />} />
          <Route path="/contact" element={<Contact />} />

          {/* Individual Service Pages */}
          <Route path="/services/strategic-seo" element={<Seo />} />
          <Route path="/services/lead-generation" element={<Lead />} />
          <Route
            path="/services/website-design-development"
            element={<Website />}
          />
          <Route
            path="/services/social-media-advertising"
            element={<Social />}
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <FloatingSocials />
      <Footer />
    </div>
  );
}

export default App;