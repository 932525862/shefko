import React from "react";
import { useTranslation } from "react-i18next";

/* x = (lon+180)*2.778  |  y = (90−lat)*2.778 */
const markers = [
  { cx: 200, cy: 138 }, // North America  (42°N 74°W ≈ NY)
  { cx: 525, cy: 103 }, // Europe         (54°N 8°E ≈ Germany)
  { cx: 637, cy: 175 }, // Middle East    (27°N 46°E ≈ Saudi)
  { cx: 860, cy: 140 }, // East Asia      (41°N 122°E ≈ China)
  { cx: 350, cy: 340 }, // South America  (28°S 52°E ≈ Brazil)
  { cx: 510, cy: 272 }, // Africa         (7°S 5°E ≈ Central)
  { cx: 880, cy: 338 }, // Australia      (34°S 151°E ≈ Sydney)
];

const routes = [
  [200, 138, 525, 103],
  [525, 103, 637, 175],
  [525, 103, 860, 140],
  [525, 103, 510, 272],
  [637, 175, 860, 140],
  [860, 140, 880, 338],
];

const WorldMap = () => (
  <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    <defs>
      <pattern id="bgDots" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
        <circle cx="9" cy="9" r="1.3" fill="#e5e7eb" />
      </pattern>
    </defs>
    <rect width="1000" height="500" fill="url(#bgDots)" />

    {/* ── Greenland ── */}
    <path d="M300,38 L383,20 L445,38 L415,60 L383,75 L345,78 L308,65 Z"
          fill="#c0392b" opacity="0.12"/>

    {/* ── North America ── clockwise: Arctic→Atlantic→Gulf→Pacific */}
    <path d="M36,61 L64,53 L150,44 L222,28 L281,44
             L319,75 L344,106 L353,119
             L322,125 L289,153 L275,181
             L258,167 L231,178 L228,189
             L247,211 L267,219 L283,228
             L258,228 L247,211
             L211,200 L194,186 L158,147 L142,111 L44,100 Z"
          fill="#c0392b" opacity="0.15"/>

    {/* ── South America ── */}
    <path d="M283,228 L294,219 L328,222 L342,233 L361,244
             L394,261 L400,261 L389,300 L378,317
             L356,333 L342,356 L339,394
             L319,400 L308,386
             L297,333 L286,283 L278,256 L286,239 Z"
          fill="#c0392b" opacity="0.15"/>

    {/* ── Iceland ── */}
    <path d="M442,72 L450,67 L461,69 L461,75 L453,78 L442,75 Z"
          fill="#c0392b" opacity="0.11"/>

    {/* ── Great Britain ── */}
    <path d="M486,100 L492,94 L500,94 L503,100 L500,108 L489,108 Z"
          fill="#c0392b" opacity="0.12"/>

    {/* ── Ireland ── */}
    <path d="M472,103 L478,100 L483,103 L481,108 L472,108 Z"
          fill="#c0392b" opacity="0.11"/>

    {/* ── Scandinavia ── SW→N tip→Baltic states→back */}
    <path d="M514,83 L539,69 L572,53 L578,58
             L575,72 L569,83 L567,89
             L556,97 L533,100 L528,94 Z"
          fill="#c0392b" opacity="0.15"/>

    {/* ── Europe (main body) ── */}
    <path d="M475,147 L475,131 L494,119 L506,108
             L522,100 L533,100 L553,97 L567,89
             L578,83 L572,97 L564,108
             L553,111 L556,128 L561,144
             L547,136 L536,131 L519,131
             L500,139 L486,150 Z"
          fill="#c0392b" opacity="0.15"/>

    {/* ── Italy ── */}
    <path d="M525,128 L536,128 L542,136 L550,139
             L544,147 L536,150 L525,147 L519,139 Z"
          fill="#c0392b" opacity="0.13"/>

    {/* ── Africa ── */}
    <path d="M483,150 L525,147 L556,158 L586,164
             L639,219 L639,244
             L614,261 L597,300 L589,328
             L558,347 L547,331 L533,311
             L525,256 L508,236 L472,236
             L461,222 L456,186 L469,172 Z"
          fill="#c0392b" opacity="0.15"/>

    {/* ── Madagascar ── */}
    <path d="M608,289 L614,281 L619,289 L617,300 L611,303 Z"
          fill="#c0392b" opacity="0.11"/>

    {/* ── Asia (Turkey→Siberia→SE Asia coast→India→Arabia→back) ── */}
    <path d="M572,147 L583,133 L617,125 L650,89
             L667,83 L694,61 L750,47 L833,50
             L972,67 L944,106
             L867,131 L839,150 L800,206
             L786,222 L789,247
             L775,222 L739,217 L722,225
             L717,228 L706,219 L700,194
             L683,181 L664,189 L625,217
             L589,167 L597,161 L583,150 Z"
          fill="#c0392b" opacity="0.15"/>

    {/* ── Japan – Honshu ── */}
    <path d="M875,131 L897,136 L903,144 L897,153 L878,156 L861,150 L864,139 Z"
          fill="#c0392b" opacity="0.12"/>

    {/* ── Japan – Kyushu/Shikoku ── */}
    <path d="M858,156 L867,153 L875,158 L872,164 L861,164 Z"
          fill="#c0392b" opacity="0.11"/>

    {/* ── Sumatra ── */}
    <path d="M764,236 L789,242 L800,256 L789,264 L775,264 L758,244 Z"
          fill="#c0392b" opacity="0.11"/>

    {/* ── Borneo ── */}
    <path d="M814,236 L836,236 L847,244 L836,258 L822,261 L811,253 L808,244 Z"
          fill="#c0392b" opacity="0.11"/>

    {/* ── Java ── */}
    <path d="M792,264 L811,261 L822,267 L814,275 L800,275 Z"
          fill="#c0392b" opacity="0.10"/>

    {/* ── Australia ── */}
    <path d="M817,306 L861,283 L894,278
             L925,325 L919,344 L903,356
             L878,347 L825,347 L817,331 Z"
          fill="#c0392b" opacity="0.15"/>

    {/* ── New Zealand ── */}
    <path d="M978,350 L986,347 L989,356 L983,364 L975,361 Z"
          fill="#c0392b" opacity="0.11"/>
    <path d="M972,367 L981,364 L983,375 L975,383 L967,378 Z"
          fill="#c0392b" opacity="0.11"/>

    {/* ── Route lines ── */}
    {routes.map(([x1, y1, x2, y2], i) => {
      const mx = (x1 + x2) / 2;
      const my = Math.min(y1, y2) - 55;
      return (
        <path key={i}
          d={`M${x1},${y1} Q${mx},${my} ${x2},${y2}`}
          fill="none" stroke="#c0392b"
          strokeWidth="1.2" strokeDasharray="5 5" opacity="0.35"/>
      );
    })}

    {/* ── Markers ── */}
    {markers.map(({ cx, cy }, i) => (
      <g key={i}>
        <circle cx={cx} cy={cy} r="20" fill="#c0392b" opacity="0.07"/>
        <circle cx={cx} cy={cy} r="11" fill="#c0392b" opacity="0.16"/>
        <circle cx={cx} cy={cy} r="5"  fill="#c0392b" opacity="0.95"/>
      </g>
    ))}
  </svg>
);

/* ── Feature cards ── */
const cards = [
  { key: "international", icon: "🌍" },
  { key: "shelf",         icon: "📦" },
  { key: "logistics",     icon: "🚚" },
  { key: "halal",         icon: "🕌" },
];

const ExportReadiness = () => {
  const { t } = useTranslation();
  const advantages = t("export.advantages", { returnObjects: true });

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: world map ── */}
          <div className="relative">
            {/* decorative label above */}
            <p className="text-[#c0392b] text-[10px] font-bold uppercase tracking-[4px] text-center mb-4">
              {t("export.map-label")}
            </p>

            <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-xl border border-gray-100">
              <WorldMap />

              {/* legend dots */}
              <div className="flex items-center justify-center gap-6 mt-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#c0392b] opacity-80 inline-block" />
                  <span className="text-xs text-gray-400">{t("export.legend-market")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="20" height="8"><line x1="0" y1="4" x2="20" y2="4" stroke="#c0392b" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6"/></svg>
                  <span className="text-xs text-gray-400">{t("export.legend-route")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: info ── */}
          <div>
            {/* header */}
            <p className="text-[#c0392b] text-[10px] font-bold uppercase tracking-[4px] mb-3">
              {t("export.subtitle")}
            </p>
            <h2 className="oswald text-3xl sm:text-4xl font-semibold text-gray-900 uppercase leading-tight mb-2">
              {t("export.header")}
            </h2>
            <div className="w-14 h-[3px] bg-[#c0392b] mb-5 rounded-full" />
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
              {t("export.text")}
            </p>

            {/* 2×2 cards */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {cards.map(({ key, icon }) => (
                <div
                  key={key}
                  className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:border-[#c0392b] hover:shadow-md transition-all duration-300 group"
                >
                  <span className="text-2xl block mb-2">{icon}</span>
                  <h4 className="oswald text-gray-900 font-semibold text-sm uppercase mb-1 group-hover:text-[#c0392b] transition-colors duration-300 leading-tight">
                    {t(`export.cards.${key}.title`)}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {t(`export.cards.${key}.text`)}
                  </p>
                </div>
              ))}
            </div>

            {/* Export Advantages red panel */}
            <div className="bg-red-800 rounded-2xl px-6 py-5">
              <h4 className="oswald text-white font-semibold text-base uppercase mb-4 tracking-wide">
                {t("export.advantages-title")}
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                {Array.isArray(advantages) && advantages.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-red-100 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExportReadiness;
