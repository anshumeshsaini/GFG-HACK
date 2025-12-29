import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logogfg.png";

const navItems = [
  { label: "Home", sectionId: "home" },
  { label: "About", sectionId: "about" },
  { label: "Tracks", sectionId: "tracks" },
  { label: "Why Join", sectionId: "why-join" },
  { label: "Prizes", sectionId: "prizes" },
  { label: "Judges", sectionId: "judges" },
  { label: "Sponsors", sectionId: "sponsors" },
  { label: "Register", sectionId: "register" },
];

const CircularNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  /* 🔴 Smooth scroll */
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  /* 🔴 Outside click */
  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", close);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("mousedown", close);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  /* 🔴 ESC */
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, []);

  return (
    <>
      {/* MENU BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* LOGO */}
      <div
        onClick={() => handleScroll("home")}
        className="fixed top-6 left-6 z-50 flex items-center gap-3 cursor-pointer"
      >
        <div className="w-16 h-16 rounded-full bg-white border-2 border-red-600 flex items-center justify-center shadow-md">
  <img
    src={logo}
    alt="logo"
    className="w-12 h-12 object-contain"
  />
</div>

        <span className="hidden md:block text-lg font-bold text-red-600">
          GREEKVERSE
        </span>
      </div>

      {/* OVERLAY */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-white/95 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* CIRCULAR NAV */}
        <nav className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[500px] h-[500px] max-w-[90vw] max-h-[90vh]">

            {/* CENTER */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-24 h-24 rounded-full border-2 border-red-600 animate-pulse" />
            </div>

            {/* ITEMS */}
            {navItems.map((item, i) => {
              const angle = (i * 360) / navItems.length - 90;
              const r = 180;
              const x = r * Math.cos((angle * Math.PI) / 180);
              const y = r * Math.sin((angle * Math.PI) / 180);

              return (
                <div
                  key={item.sectionId}
                  className={`absolute top-1/2 left-1/2 transition-all duration-500 ${
                    isOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    transitionDelay: `${i * 60}ms`,
                  }}
                >
                  <button
                    onClick={() => handleScroll(item.sectionId)}
                    className="px-6 py-3 rounded-full bg-white border-2 border-red-600 text-red-600 font-semibold hover:bg-red-600 hover:text-white transition-all"
                  >
                    {item.label}
                  </button>
                </div>
              );
            })}

            {/* OUTER RING */}
            <svg
              className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none"
              viewBox="0 0 500 500"
            >
              <circle
                cx="250"
                cy="250"
                r="180"
                fill="none"
                stroke="#dc2626"
                strokeWidth="1.5"
                strokeDasharray="10 10"
                opacity="0.4"
              />
            </svg>
          </div>
        </nav>
      </div>
    </>
  );
};

export default CircularNav;
