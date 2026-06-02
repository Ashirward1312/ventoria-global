import React from "react";
import {
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function FloatingSocials() {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61582189805599",
      label: "Facebook",
      color: "#1877F2",
      shadow: "rgba(24,119,242,0.4)",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/ventoriaglobal?igsh=NnJ6eG9vMzZubG4x",
      label: "Instagram",
      color: "#E4405F",
      shadow: "rgba(228,64,95,0.4)",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/ventoria-global",
      label: "LinkedIn",
      color: "#0A66C2",
      shadow: "rgba(10,102,194,0.4)",
    }
  ];

  return (
    <>
      <style>{`
        .social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(15,42,68,0.85);
          color: #94a3b8;
          backdrop-filter: blur(12px);
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-btn:hover {
          transform: translateY(-3px);
          border-color: transparent;
          color: #fff;
        }

        .social-sidebar {
          position: fixed;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 40;
          display: none;
          flex-direction: column;
          gap: 10px;
        }

        @media (min-width: 1280px) {
          .social-sidebar {
            display: flex;
          }
        }

        .whatsapp-btn {
          position: fixed;
          bottom: 24px;
          left: 24px;
          z-index: 50;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #25D366;
          color: #fff;
          text-decoration: none;
          box-shadow: 0 8px 28px rgba(37,211,102,0.35);
          transition: all 0.3s ease;
        }

        .whatsapp-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 14px 36px rgba(37,211,102,0.45);
        }
      `}</style>

      <div className="social-sidebar">
        {socialLinks.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="social-btn"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = item.color;
                e.currentTarget.style.boxShadow = `0 8px 24px ${item.shadow}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(15,42,68,0.85)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>

      <a
        href="https://wa.me/610466099308"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="whatsapp-btn"
      >
        <MessageCircle size={24} />
      </a>
    </>
  );
}