import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import logo from "../img/bb.webp";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "Contact", path: "/contact" },
];

const serviceLinks = [
  { name: "Website Design & Development", path: "/services/website-design-development" },
  { name: "Strategic SEO", path: "/services/strategic-seo" },
  { name: "Lead Generation", path: "/services/lead-generation" },
  { name: "Social Media Marketing", path: "/services/social-media-advertising" },
];

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 bg-[#f8fafc] text-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:pr-6">
            <Link
              to="/"
              onClick={handleScrollTop}
              className="inline-flex items-center"
              aria-label="Ventoria Global"
            >
              <img
                src={logo}
                alt="Ventoria Global"
                className="h-[95px] sm:h-[110px] md:h-[125px] w-auto object-contain"
              />
            </Link>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61582189805599"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:border-[#0FA3A3] hover:text-[#0FA3A3]"
              >
                <Facebook className="h-4 w-4" />
              </a>

              <a
                href="https://www.instagram.com/ventoriaglobal?igsh=NnJ6eG9vMzZubG4x"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:border-[#0FA3A3] hover:text-[#0FA3A3]"
              >
                <Instagram className="h-4 w-4" />
              </a>

              <a
                href="https://www.linkedin.com/company/ventoria-global"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:border-[#0FA3A3] hover:text-[#0FA3A3]"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#D4A437]">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={handleScrollTop}
                    className="text-sm text-slate-600 transition hover:text-[#0FA3A3]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#D4A437]">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={handleScrollTop}
                    className="text-sm text-slate-600 transition hover:text-[#0FA3A3]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#D4A437]">
              Contact
            </h3>

            <div className="mt-5 space-y-4">


              <a
                href="tel:+610466099308"
                className="flex items-start gap-3 text-sm text-slate-600 transition hover:text-[#0F2A44]"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#0FA3A3]" />
                <span>+61 0466099308</span>
              </a>

              <a
                href="mailto:info@ventoriaglobal.com"
                className="flex items-start gap-3 text-sm text-slate-600 transition hover:text-[#0F2A44]"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#0FA3A3]" />
                <span>info@ventoriaglobal.com</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-slate-600">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0FA3A3]" />
                <span>
                  LEVEL 1/457-459 ELIZABETH STREET,
                  <br />
                  SURRY HILLS NSW 2010, AUSTRALIA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-6 py-5 text-center text-xs text-slate-500 lg:px-8">
          <p>© {new Date().getFullYear()} Ventoria Global. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/privacy-policy"
              onClick={handleScrollTop}
              className="transition hover:text-[#0FA3A3]"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-conditions"
              onClick={handleScrollTop}
              className="transition hover:text-[#0FA3A3]"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}