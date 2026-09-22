import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import {
  FiPhone,
  FiMapPin,
  FiClock,
  FiArrowUp,
  FiMessageSquare,
  FiChevronRight,
  FiCheckCircle,
  FiGlobe,
} from "react-icons/fi";
import logo from "../assets/shefkologo.png";

const Footer = ({ openModal }) => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { to: "/", label: t("header.home") },
    { to: "/products", label: t("footer.nav-products") },
    { to: "/export", label: t("footer.nav-export") },
    { to: "/production", label: t("footer.nav-production") },
    { to: "/about", label: t("footer.nav-about") },
    { to: "/feedback", label: t("footer.nav-feedback") },
  ];

  const productLinks = [
    { to: "/products", label: "Doner Go'shtli & Tovuqli" },
    { to: "/products", label: "TAQVO Premial Liniyasi" },
    { to: "/products", label: "Isitish yo'riqnomasi" },
    { to: "/export", label: "Xalqaro Distribyutorlik" },
    { to: "/production", label: "Zamonaviy Texnologiyalar" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#2b0407] via-[#1c0204] to-[#120102] text-white/80 overflow-hidden font-sans">
      {/* Top glowing decorative gradient line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />

      {/* Pre-Footer Call To Action Banner */}
      <div className="container pt-12 pb-6">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#38060a] via-[#240407] to-[#40080d] border border-red-500/30 p-8 md:p-10 shadow-2xl overflow-hidden group">
          {/* Ambient Glow background inside card */}
          <div className="absolute -right-16 -top-16 w-72 h-72 bg-red-600/15 rounded-full blur-3xl pointer-events-none group-hover:bg-red-600/25 transition-all duration-700" />
          <div className="absolute -left-16 -bottom-16 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-400/40 text-red-200 text-xs font-semibold uppercase tracking-wider mb-3">
                <FiCheckCircle className="text-sm text-red-400" />
                <span>SHEFKO Premium Quality</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Xalqaro Standartdagi Sifat va Halol Mahsulotlar
              </h3>
              <p className="text-white/70 text-sm mt-2 leading-relaxed">
                Fikr va takliflaringiz bormi yoki distribyutorlik bo'yicha hamkorlik qilmoqchimisiz?
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 shrink-0">
              <Link
                to="/feedback"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white font-bold text-sm shadow-lg shadow-red-900/40 hover:shadow-red-900/60 hover:scale-105 transition-all duration-300"
              >
                <FiMessageSquare className="text-base" />
                <span>Fikr & Taklif qoldirish</span>
              </Link>
              {openModal && (
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-sm transition-all duration-300 hover:border-[#a78861]/50"
                >
                  <FiPhone className="text-base text-[#d1ab7d]" />
                  <span>Bog'lanish</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand Info (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img
                src={logo}
                alt="SHEFKO Logo"
                className="h-11 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              {t("footer.title")}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white/70">
                <FiCheckCircle className="text-[#d1ab7d]" />
                100% Halol Sertifikat
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white/70">
                <FiGlobe className="text-[#d1ab7d]" />
                Xalqaro Eksport
              </span>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/blog_abdulaziz?igsh=MTJmbG85emd1ZWl1Mw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-[#a78861] hover:to-[#d1ab7d] border border-white/10 hover:border-transparent text-white/70 hover:text-white transition-all duration-300 shadow-sm"
              >
                <FaInstagram className="text-lg text-[#d1ab7d] group-hover:text-white transition-colors" />
                <span className="text-xs font-semibold">Instagram</span>
              </a>
              <a
                href="https://t.me/shefko_donar"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-[#a78861] hover:to-[#d1ab7d] border border-white/10 hover:border-transparent text-white/70 hover:text-white transition-all duration-300 shadow-sm"
              >
                <FaTelegramPlane className="text-lg text-[#d1ab7d] group-hover:text-white transition-colors" />
                <span className="text-xs font-semibold">Telegram</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d1ab7d]"></span>
              Navigatsiya
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ to, label }) => (
                <li key={to + label}>
                  <Link
                    to={to}
                    className="group inline-flex items-center gap-1.5 text-white/60 hover:text-[#d1ab7d] text-sm transition-all duration-200"
                  >
                    <FiChevronRight className="text-xs text-[#a78861] opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Product & Service Links (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d1ab7d]"></span>
              Mahsulot va Xizmatlar
            </h4>
            <ul className="flex flex-col gap-3">
              {productLinks.map(({ to, label }, index) => (
                <li key={index}>
                  <Link
                    to={to}
                    className="group inline-flex items-center gap-1.5 text-white/60 hover:text-[#d1ab7d] text-sm transition-all duration-200"
                  >
                    <FiChevronRight className="text-xs text-[#a78861] opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d1ab7d]"></span>
              {t("footer.contact")}
            </h4>

            {/* Primary Phone Card */}
            <a
              href="tel:+998555118080"
              className="group p-3.5 rounded-2xl bg-gradient-to-r from-red-600/20 to-red-800/10 border border-red-500/40 hover:border-red-500 transition-all duration-300 flex items-center gap-3 shadow-lg shadow-red-900/10"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <FiPhone className="text-lg" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-red-300 font-bold">
                  Markaziy aloqa liniyasi
                </div>
                <div className="text-white font-extrabold text-base tracking-wide group-hover:text-red-300 transition-colors">
                  +998 55 511 80 80
                </div>
              </div>
            </a>

            {/* Secondary Phone Card */}
            <a
              href="tel:+998993005700"
              className="group p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#d1ab7d] shrink-0">
                <FiPhone className="text-sm" />
              </div>
              <div className="text-white/80 font-medium text-sm group-hover:text-white transition-colors">
                +998 99 300 57 00
              </div>
            </a>

            {/* Location & Hours */}
            <div className="flex flex-col gap-2 pt-1 text-xs text-white/50">
              <div className="flex items-center gap-2">
                <FiMapPin className="text-[#d1ab7d] text-sm shrink-0" />
                <span>Toshkent shahri, O'zbekiston</span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="text-[#d1ab7d] text-sm shrink-0" />
                <span>Dushanba - Shanba: 09:00 - 18:00</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/40">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} SHEFKO. {t("footer.secret")}.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://www.limsa.uz/"
              target="_blank"
              rel="noreferrer"
              className="text-white/30 hover:text-[#d1ab7d] text-xs transition-colors"
            >
              Sayt yaratuvchisi: <span className="font-semibold text-white/50 hover:text-[#d1ab7d]">LIMSA</span>
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Top of page"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#a78861]/20 border border-white/10 text-xs text-white/70 hover:text-white transition-all duration-200 group"
            >
              <span>Yuqoriga</span>
              <FiArrowUp className="text-xs group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
