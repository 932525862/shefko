import React from "react";
import { useTranslation } from "react-i18next";
import advancedImg from "../../assets/1.jpg";
import meatImg from "../../assets/mit.jpg";
import packagingImg from "../../assets/7.jpg";
import exportImg from "../../assets/yet.jpg";

const cards = [
  { key: "advanced", img: advancedImg },
  { key: "meat", img: meatImg },
  { key: "packaging", img: packagingImg },
  { key: "export", img: exportImg },
];

const WhyShefko = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-[#c0392b] text-sm font-semibold uppercase tracking-widest mb-2">
            {t("why.subtitle")}
          </p>
          <h2 className="oswald text-3xl sm:text-4xl font-semibold text-gray-900 uppercase">
            {t("why.title")}
          </h2>
          <div className="w-16 h-1 bg-[#c0392b] mx-auto mt-4 rounded-full" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ key, img }) => (
            <div
              key={key}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Card image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={img}
                  alt={t(`why.${key}.title`)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Red top accent bar */}
              <div className="h-1 bg-[#c0392b]" />

              {/* Card body */}
              <div className="flex flex-col items-center text-center p-6 flex-1">
                <h3 className="oswald text-lg font-semibold text-gray-900 uppercase mb-3">
                  {t(`why.${key}.title`)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(`why.${key}.text`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyShefko;
