import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const steps = [
  { key: "raw",           icon: "🥩" },
  { key: "preparation",   icon: "⚙️" },
  { key: "vacuum",        icon: "📦" },
  { key: "sterilization", icon: "🔥" },
  { key: "quality",       icon: "🔍" },
  { key: "distribution",  icon: "🌍" },
];

const ProductionTechnology = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(null);

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container">

        {/* ── Section header ── */}
        <div className="text-center mb-12">
          <p className="text-[#c0392b] text-xs font-bold uppercase tracking-[4px] mb-3">
            {t("production.subtitle")}
          </p>
          <h2 className="oswald text-3xl sm:text-5xl font-semibold text-gray-900 uppercase leading-tight">
            {t("production.title")}
          </h2>
          <div className="w-16 h-[3px] bg-[#c0392b] mx-auto mt-5 rounded-full" />
        </div>

        {/* ── Main split card ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] rounded-3xl overflow-hidden shadow-2xl">

          {/* ── LEFT — red panel ── */}
          <div className="bg-red-800 relative overflow-hidden flex flex-col justify-center px-10 py-14 sm:px-14 sm:py-16">

            {/* decorative background circles */}
            <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full border border-white/10" />
            <div className="absolute -top-8  -left-8  w-48 h-48 rounded-full border border-white/10" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full border border-white/10" />
            <div className="absolute -bottom-10 -right-10 w-52 h-52 rounded-full border border-white/10" />

            {/* decorative big number */}
            <span className="absolute bottom-4 right-6 text-[130px] font-black text-white/[0.04] oswald leading-none select-none pointer-events-none">
              6
            </span>

            <p className="text-red-300 text-[10px] uppercase font-bold tracking-[3px] mb-4">
              Advanced Technology
            </p>

            <h3 className="oswald text-2xl sm:text-3xl text-white font-semibold leading-snug mb-6">
              {t("production.main-title")}
            </h3>

            <div className="w-14 h-[2px] bg-white/30 mb-6 rounded-full" />

            <p className="text-red-100 text-sm leading-[1.8] whitespace-pre-line">
              {t("production.main-text")}
            </p>

            {/* 121°C badge */}
            <div className="mt-10 flex items-center gap-4 bg-red-900/50 border border-white/15 rounded-2xl px-5 py-4 w-fit backdrop-blur-sm">
              <div className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-2xl flex-shrink-0">
                🔥
              </div>
              <div>
                <div className="text-white text-xl font-black oswald leading-none">121°C</div>
                <div className="text-red-200 text-[11px] mt-0.5 tracking-wide">
                  Sterilization Process
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT — timeline ── */}
          <div className="bg-gray-50 px-8 py-10 sm:px-12 sm:py-12">
            <div className="relative">

              {/* vertical connector line */}
              <div className="absolute left-[19px] top-10 bottom-10 w-[2px] bg-red-100 rounded-full" />

              <div className="flex flex-col gap-0">
                {steps.map(({ key, icon }, i) => (
                  <div
                    key={key}
                    className="flex items-start gap-5 cursor-pointer group"
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                  >
                    {/* ── Circle ── */}
                    <div
                      className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-base transition-all duration-300 shadow-md
                        ${active === i
                          ? "bg-[#c0392b] scale-110 shadow-red-200"
                          : "bg-white border-2 border-[#c0392b]"
                        }`}
                    >
                      {icon}
                    </div>

                    {/* ── Content ── */}
                    <div
                      className={`flex-1 py-4 pr-2 border-b border-gray-200 last:border-0 transition-all duration-300 ${
                        active === i ? "translate-x-1" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`text-[11px] font-black oswald tracking-widest transition-colors duration-300 ${
                            active === i ? "text-[#c0392b]" : "text-gray-300"
                          }`}
                        >
                          0{i + 1}
                        </span>
                        <div className="flex-1 h-px bg-gray-200" />
                      </div>

                      <h4 className={`oswald text-sm font-bold uppercase leading-tight mb-1 transition-colors duration-300 ${
                        active === i ? "text-[#c0392b]" : "text-gray-800"
                      }`}>
                        {t(`production.steps.${key}.title`)}
                      </h4>

                      <p className="text-gray-400 text-[13px] leading-relaxed">
                        {t(`production.steps.${key}.text`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductionTechnology;
