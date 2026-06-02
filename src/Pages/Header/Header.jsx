import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Phone, Mail } from "lucide-react";
import logo from "../img/bb.webp";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About Us", path: "/about" },
  { name: "Case Studies", path: "/case-studies" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    if (path === "/services") return location.pathname.startsWith("/services");
    if (path === "/portfolio") return location.pathname.startsWith("/portfolio");
    if (path === "/case-studies") {
      return location.pathname.startsWith("/case-studies");
    }
    return location.pathname === path;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Contact Strip */}
      <div className="hidden border-b border-white/10 bg-[#0F2A44] text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5">
          <div className="flex items-center gap-7 text-[14px] text-slate-200">
           

            <a
              href="mailto:info@ventoriaglobal.com"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <Mail className="h-4 w-4" />
              <span>info@ventoriaglobal.com</span>
            </a>
          </div>

          <div className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#D4A437]">
            Trusted Global Business Partner
          </div>
        </div>
      </div>

      {/* Accent Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#0FA3A3] via-[#D4A437] to-[#0FA3A3]" />

      {/* Main Header */}
      <div
        className={[
          "transition-all duration-300",
          scrolled
            ? "border-b border-slate-200/80 bg-white/92 shadow-[0_12px_30px_rgba(15,42,68,0.10)] backdrop-blur-xl"
            : "border-b border-slate-200/60 bg-white/95 shadow-[0_6px_18px_rgba(15,42,68,0.05)] backdrop-blur-md",
        ].join(" ")}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[82px] items-center justify-between sm:h-[92px]">
            {/* Logo */}
            <Link
              to="/"
              className="relative flex items-center"
              aria-label="Ventoria Global"
            >
              <div className="absolute inset-0 rounded-full bg-[#D4A437]/10 blur-2xl" />
              <img
                src={logo}
                alt="Ventoria Global"
                className={[
                  "relative z-10 w-auto object-contain select-none transition-all duration-300",
                  scrolled
                    ? "h-[48px] sm:h-[58px] md:h-[66px]"
                    : "h-[56px] sm:h-[66px] md:h-[76px]",
                ].join(" ")}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center md:flex">
              <div className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/90 p-1.5 shadow-[0_6px_18px_rgba(15,42,68,0.05)]">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={[
                      "relative rounded-full px-4 py-2.5 text-[14px] font-semibold transition-all duration-300",
                      isActive(link.path)
                        ? "bg-[#0F2A44] text-white shadow-sm"
                        : "text-[#4A6A8A] hover:bg-slate-50 hover:text-[#0FA3A3]",
                    ].join(" ")}
                  >
                    {link.name}
                    {isActive(link.path) && (
                      <span className="absolute bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#D4A437]" />
                    )}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-[#D4A437] to-[#C89222] px-5 py-3 text-[14px] font-semibold text-white shadow-[0_10px_22px_rgba(212,164,55,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(212,164,55,0.28)] md:inline-flex"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>

              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0F2A44] shadow-sm transition hover:bg-slate-50 md:hidden"
                onClick={() => setOpen((prev) => !prev)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                {open ? <X size={21} /> : <Menu size={21} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="pb-4 md:hidden">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,42,68,0.10)]">
                <div className="bg-gradient-to-r from-[#0F2A44] via-[#12375A] to-[#0F2A44] px-5 py-4">
                  <p className="text-[15px] font-semibold text-white">
                    Ventoria Global
                  </p>
                  <p className="mt-1 text-xs text-slate-300">
                    Smart solutions for business growth
                  </p>
                </div>

                <div className="p-3">
                  <div className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setOpen(false)}
                        className={[
                          "rounded-2xl px-4 py-3.5 text-[15px] font-medium transition-all duration-300",
                          isActive(link.path)
                            ? "bg-[#0F2A44] text-white"
                            : "text-[#4A6A8A] hover:bg-slate-50 hover:text-[#0FA3A3]",
                        ].join(" ")}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#D4A437] to-[#C89222] px-5 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_22px_rgba(212,164,55,0.22)] transition-all duration-300 hover:opacity-95"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <div className="mt-3 grid grid-cols-1 gap-2">
                    <a
                      href="tel:+919827198000"
                      className="flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-[#0F2A44]"
                    >
                      <Phone className="h-4 w-4 text-[#0FA3A3]" />
                      <span>+91 98765 43210</span>
                    </a>

                    <a
                      href="mailto:info@ventoriaglobal.com"
                      className="flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-[#0F2A44]"
                    >
                      <Mail className="h-4 w-4 text-[#0FA3A3]" />
                      <span>info@ventoriaglobal.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}