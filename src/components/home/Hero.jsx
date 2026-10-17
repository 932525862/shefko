import React from "react";
import { useTranslation } from "react-i18next";
import { FaPlay } from "react-icons/fa";
import video from "../../assets/bg.mp4";

const Hero = ({ openModal }) => {
  const { t } = useTranslation();

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[80vh] lg:h-screen bg-[#110203] overflow-hidden">
      {/* Background Video - More visible now */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Dark gradient from left to ensure text readability without hiding the video entirely */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      {/* Bottom gradient to blend smoothly into the next section */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#1a0305] via-transparent to-transparent"></div>

      <div className="container relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-3xl pt-20">
          
          {/* Badge - Removed generic glass border, made it solid industrial style */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c0392b] text-white text-[11px] font-bold uppercase tracking-[3px] mb-6 shadow-md">
            {t("header.production")}
          </div>

          {/* Title - Removed drop-shadow utility to fix CSS rendering artifacts */}
          <h1 className="oswald text-5xl sm:text-6xl md:text-[5rem] lg:text-[6rem] uppercase text-white font-bold leading-[1.05] tracking-tight mb-6 [text-shadow:_0_4px_12px_rgba(0,0,0,0.5)]">
            {t("hero.title") || "PREMIUM CANNED FOOD"}
          </h1>

          {/* Text - Removed drop-shadow utility to fix CSS rendering artifacts */}
          <p className="text-lg sm:text-xl text-gray-200 font-medium max-w-2xl leading-relaxed mb-10 [text-shadow:_0_2px_8px_rgba(0,0,0,0.6)]">
            {t("hero.text") || "High-quality preserved food products manufactured with advanced technology for international markets."}
          </p>

          {/* CTA Buttons - Solid, premium B2B look, no generic outlines */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={scrollToProducts}
              className="w-full sm:w-auto px-8 py-4 bg-[#c0392b] text-white font-bold uppercase tracking-widest text-sm hover:bg-red-800 transition-colors duration-300 shadow-xl"
            >
              {t("header.products")}
            </button>
            <button
              onClick={openModal}
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#110203] font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors duration-300 shadow-xl"
            >
              {t("hero.btn")}
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - clean and simple */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 opacity-70">
        <span className="text-[10px] text-white uppercase tracking-[4px] font-semibold">Scroll</span>
        <div className="w-[2px] h-10 bg-white/50"></div>
      </div>
    </section>
  );
};

export default Hero;
