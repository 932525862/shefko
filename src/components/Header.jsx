import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/shefkologo.png";
import LanguageSelect from "./LanguageSelect";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const NAV_LINKS = [
  { to: "/", label: "header.home", exact: true },
  { to: "/products", label: "header.products" },
  { to: "/export", label: "header.export" },
  { to: "/production", label: "header.production" },
  { to: "/about", label: "header.about" },
  { to: "/feedback", label: "header.feedback" },
];

const Header = ({ openModal }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation();

  // Scroll detection for header style
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  const handleMenuToggle = () => setOpen((prev) => !prev);

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `relative text-[14px] font-medium transition-all duration-200 py-1 px-0.5
     after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-full after:transition-all after:duration-300
     ${isActive
      ? "text-[#d1ab7d] after:w-full after:bg-[#d1ab7d]"
      : "text-white/80 hover:text-white after:w-0 hover:after:w-full after:bg-white/40"
    }`;

  return (
    <header>
      {/* Mobile Drawer */}
      <div
        ref={menuRef}
        className={`fixed h-screen w-[300px] bg-[#110203] z-[9999999] transition-all duration-300 border-l border-white/10 shadow-2xl ${
          open ? "right-0" : "-right-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Drawer header */}
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center gap-2">
              <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "22px", color: "#fff" }}>
                SHEFKO
              </span>
            </Link>
            <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white transition-colors">
              <IoMdClose className="text-[26px]" />
            </button>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 mb-6" />

          {/* Nav links */}
          <nav className="flex flex-col gap-1 flex-1">
            {NAV_LINKS.map(({ to, label, exact }) => (
              <NavLink
                key={to}
                to={to}
                end={exact}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 font-semibold text-[14px] uppercase tracking-wide transition-all duration-200 ${
                    isActive
                      ? "bg-[#c0392b] text-white"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {t(label)}
              </NavLink>
            ))}
          </nav>

          {/* Bottom contact */}
          <div className="mt-auto pt-6 border-t border-white/10">
            <p className="text-white/40 text-xs mb-3 uppercase tracking-widest">{t("contact.tel")}</p>
            <a href="tel:+998993005700" className="flex items-center gap-2 text-white/70 hover:text-white text-sm mb-2 transition-colors">
              <FiPhone className="text-[#d1ab7d]" />
              +998 99 300 57 00
            </a>
            <a href="tel:+998555118080" className="flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors">
              <FiPhone className="text-[#d1ab7d]" />
              +998 55 511 80 80
            </a>
            <button
              onClick={() => { openModal(); setOpen(false); }}
              className="w-full py-3 bg-white text-[#110203] font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors text-xs"
            >
              {t("header.btn")}
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "py-0" : "py-0 lg:py-[10px]"}`}>
        <div className={`transition-all duration-300 ${scrolled ? "mx-0" : "container"}`}>
          <div
            className={`bg-[#110203] text-white flex justify-between items-center transition-all duration-300
            ${scrolled
              ? "px-5 lg:px-10 py-3 border-b border-white/10 shadow-xl"
              : "px-5 lg:px-8 py-2 lg:py-3 shadow-lg border border-white/10"
            }`}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <img src={logo} alt="SHEFKO Logo" className="h-9 sm:h-10 w-auto object-contain" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-6">
                {NAV_LINKS.map(({ to, label, exact }) => (
                  <li key={to}>
                    <NavLink to={to} end={exact} className={navLinkClass}>
                      {t(label)}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Side — Language + Phone + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Phone */}
              <a
                href="tel:+998555118080"
                className="flex items-center gap-1.5 text-white/70 hover:text-white text-[13px] transition-colors"
              >
                <FiPhone className="text-[#d1ab7d] text-sm" />
                <span>55 511 80 80</span>
              </a>
              <LanguageSelect />
              <button
                onClick={openModal}
                className="font-bold px-6 h-[40px] bg-[#c0392b] text-white uppercase tracking-widest transition-colors duration-300 hover:bg-red-800 text-[12px] whitespace-nowrap"
              >
                {t("header.btn")}
              </button>
            </div>

            {/* Mobile — Language + Burger */}
            <div className="flex lg:hidden items-center gap-3">
              <LanguageSelect />
              <div ref={buttonRef} onClick={handleMenuToggle} className="cursor-pointer p-1">
                <HiMenu className="text-[26px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
