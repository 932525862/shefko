import React, { useState } from "react";
import { productInfoData } from "../data/productInfoData";
import logo from "../assets/shefkologo.png";
import { FiCopy, FiPrinter, FiCheck, FiShield, FiAward, FiInfo } from "react-icons/fi";
import { BsQrCode } from "react-icons/bs";
import { toast } from "react-toastify";

const ProductInfoDoc = () => {
  const [activeLang, setActiveLang] = useState("uz");
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopied(true);
    toast.success("Hujjat havolasi nusxalandi! Endi buni QR kod tayyorlash uchun ishlatishingiz mumkin.");
    setTimeout(() => setCopied(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  const keys = ["uz", "ru", "en", "ar", "tr"];

  const renderSingleDoc = (langKey, isMulti = false) => {
    const data = productInfoData[langKey];
    const isRtl = data.dir === "rtl";

    return (
      <div
        key={langKey}
        dir={isRtl ? "rtl" : "ltr"}
        className={`bg-white text-gray-900 rounded-xl shadow-xl border-2 border-[#b8955f] p-6 sm:p-10 relative overflow-hidden transition-all ${
          isMulti ? "mb-10" : ""
        }`}
      >
        {/* Certificate Watermark Seal Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] w-96 h-96 flex items-center justify-center">
          <img src={logo} alt="SHEFKO Watermark" className="w-full h-full object-contain" />
        </div>

        {/* Decorative Gold Header Bar */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#441118] via-[#a78861] to-[#441118]" />

        {/* Top Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pb-6 border-b-2 border-dashed border-[#d1ab7d] gap-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 p-2 bg-[#441118]/5 rounded-xl border border-[#a78861]/30 flex items-center justify-center">
              <img src={logo} alt="SHEFKO Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-[#441118] tracking-wider uppercase font-serif">
                SHEFKO
              </h1>
              <p className="text-xs font-bold text-[#a78861] uppercase tracking-widest">
                Premium Quality Canned Foods
              </p>
              <p className="text-[10px] text-gray-500 font-mono mt-0.5">
                DOC ID: PASSPORT-SHEFKO-BEEF-2024
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-end">
            <div className="flex items-center gap-1.5 bg-[#441118] text-[#d1ab7d] text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
              <FiShield className="text-sm text-[#d1ab7d]" />
              <span>RASMIY MAHSULOT PASPORTI</span>
            </div>
            <span className="text-xs font-bold text-gray-500 mt-1 flex items-center gap-1">
              <span>{data.flag}</span> {data.langName}
            </span>
          </div>
        </div>

        {/* Document Title Banner */}
        <div className="my-6 py-3 px-4 bg-gradient-to-r from-[#441118]/90 via-[#441118] to-[#441118]/90 text-white rounded-lg text-center shadow-inner">
          <h2 className="text-base sm:text-lg font-bold tracking-wide uppercase font-serif text-[#f3e5ab]">
            {data.docTitle}
          </h2>
        </div>

        {/* Structured Data Content */}
        <div className="space-y-6 text-sm">
          {/* Product Name */}
          <div className="p-4 bg-[#fcf8f2] rounded-lg border-l-4 border-[#441118] shadow-sm">
            <span className="block text-xs font-bold text-[#a78861] uppercase tracking-wider mb-1">
              {data.productNameLabel}
            </span>
            <p className="text-lg font-extrabold text-[#441118]">
              {data.productName}
            </p>
          </div>

          {/* Manufacturer & Address Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                {data.manufacturerLabel}
              </span>
              <p className="font-semibold text-gray-900 text-base">
                {data.manufacturer}
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                {data.addressLabel}
              </span>
              <p className="text-gray-800 leading-relaxed font-medium">
                {data.address}
              </p>
            </div>
          </div>

          {/* Ingredients */}
          <div className="p-4 bg-amber-50/50 rounded-lg border border-amber-200/80">
            <span className="block text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">
              {data.ingredientsLabel}
            </span>
            <p className="text-gray-900 font-medium leading-relaxed">
              {data.ingredients}
            </p>
          </div>

          {/* Nutrition Table */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-[#441118] text-[#f3e5ab] px-4 py-2.5 font-bold text-xs uppercase tracking-wider flex items-center justify-between">
              <span>{data.nutritionTitle}</span>
              <FiAward className="text-base" />
            </div>
            <div className="p-4 bg-white grid grid-cols-3 gap-3 text-center divide-x divide-gray-100">
              <div className="px-2">
                <span className="block text-xs text-gray-500 font-medium">
                  {data.proteinLabel}
                </span>
                <span className="block text-lg font-bold text-[#441118] mt-0.5">
                  {data.proteinValue}
                </span>
              </div>
              <div className="px-2">
                <span className="block text-xs text-gray-500 font-medium">
                  {data.fatLabel}
                </span>
                <span className="block text-lg font-bold text-[#441118] mt-0.5">
                  {data.fatValue}
                </span>
              </div>
              <div className="px-2">
                <span className="block text-xs text-gray-500 font-medium">
                  {data.energyLabel}
                </span>
                <span className="block text-lg font-bold text-[#a78861] mt-0.5">
                  {data.energyValue}
                </span>
              </div>
            </div>
          </div>

          {/* Storage & Expiry Conditions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-sky-50/60 rounded-lg border border-sky-200">
              <span className="block text-xs font-bold text-sky-900 uppercase tracking-wider mb-1">
                {data.storageTitle}
              </span>
              <p className="text-sky-950 font-medium leading-relaxed">
                {data.storageDetails}
              </p>
            </div>

            <div className="p-4 bg-rose-50/60 rounded-lg border border-rose-200">
              <span className="block text-xs font-bold text-rose-900 uppercase tracking-wider mb-1">
                {data.afterOpenedLabel}
              </span>
              <p className="text-rose-950 font-medium leading-relaxed">
                {data.afterOpenedDetails}
              </p>
            </div>
          </div>

          {/* Recommendation */}
          <div className="p-4 bg-emerald-50/70 rounded-lg border border-emerald-300 flex items-start gap-3">
            <div className="p-2 bg-emerald-600 text-white rounded-full text-xs mt-0.5">
              <FiInfo />
            </div>
            <div>
              <span className="block text-xs font-bold text-emerald-900 uppercase tracking-wider">
                {data.recommendationLabel}
              </span>
              <p className="text-emerald-950 font-semibold mt-0.5">
                {data.recommendation}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Seal & Verification */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full border-2 border-[#a78861] p-1 flex items-center justify-center text-[#441118]">
              <FiAward className="text-lg text-[#a78861]" />
            </div>
            <div>
              <p className="font-bold text-gray-800">ISO & HALOL SERTIFIKATLANGAN</p>
              <p className="text-[11px]">BM ESTATES AND TRADING MCHJ — barcha huquqlar himoyalangan.</p>
            </div>
          </div>

          {/* Simulated Barcode */}
          <div className="flex flex-col items-center">
            <div className="h-8 flex items-end gap-1 opacity-80">
              <div className="w-0.5 h-full bg-gray-800" />
              <div className="w-1 h-full bg-gray-800" />
              <div className="w-0.5 h-full bg-gray-800" />
              <div className="w-1.5 h-full bg-gray-800" />
              <div className="w-0.5 h-full bg-gray-800" />
              <div className="w-1 h-full bg-gray-800" />
              <div className="w-2 h-full bg-gray-800" />
              <div className="w-0.5 h-full bg-gray-800" />
              <div className="w-1 h-full bg-gray-800" />
              <div className="w-1.5 h-full bg-gray-800" />
            </div>
            <span className="font-mono text-[10px] tracking-widest text-gray-600 mt-1">
              4780012398571
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Top Control Bar (Hidden on Print) */}
        <div className="print:hidden bg-white p-4 rounded-xl shadow-md mb-8 border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-[#441118] text-white rounded-lg">
              <BsQrCode className="text-xl" />
            </div>
            <div>
              <h2 className="font-bold text-gray-900 text-sm">
                QR Kod va Skanerlash Hujjati (/info)
              </h2>
              <p className="text-xs text-gray-500">
                Ushbu sahifa faqat to'g'ridan-to'g'ri URL yoki QR kod orqali kirilganda ko'rinadi.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={handleCopyLink}
              className={`flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                copied
                  ? "bg-emerald-600 text-white"
                  : "bg-[#441118] hover:bg-[#5e1822] text-white shadow-sm"
              }`}
            >
              {copied ? <FiCheck /> : <FiCopy />}
              <span>{copied ? "Nusxalandi!" : "Havolani nusxalash"}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg text-sm font-semibold transition-all shadow-sm"
            >
              <FiPrinter />
              <span>Chop etish</span>
            </button>
          </div>
        </div>

        {/* Language Tabs (Hidden on Print) */}
        <div className="print:hidden mb-6 flex flex-wrap items-center justify-center gap-2 bg-white/70 p-2 rounded-xl border border-gray-200 backdrop-blur-md">
          {keys.map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveLang(lang)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeLang === lang
                  ? "bg-[#441118] text-[#f3e5ab] shadow-md scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <span>{productInfoData[lang].flag}</span>
              <span>{productInfoData[lang].langName}</span>
            </button>
          ))}

          <button
            onClick={() => setActiveLang("all")}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeLang === "all"
                ? "bg-[#a78861] text-white shadow-md scale-105"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            🌐 <span>Barcha tillar (All Languages)</span>
          </button>
        </div>

        {/* Main Document Render */}
        <div className="print:p-0">
          {activeLang === "all" ? (
            keys.map((k) => renderSingleDoc(k, true))
          ) : (
            renderSingleDoc(activeLang)
          )}
        </div>

        {/* Information Callout for User / Admin */}
        <div className="print:hidden mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-3">
          <FiInfo className="text-lg text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold mb-1">QR Kod yaratish bo'yicha yo'riqnoma:</p>
            <p>
              Ushbu sahifa manzili (masalan, <code className="bg-amber-100 px-1 py-0.5 rounded font-mono font-bold text-amber-950">https://sizningsaytingiz.uz/info</code>) orqali istalgan QR kod generatorida (masalan, qr-code-generator.com) QR kod yasab, bankalarning yorlig'iga yoki qadog'iga joylashtirishingiz mumkin. Haridorlar skanerlaganda ushbu 5 tildagi rasmiy mahsulot pasporti ochiladi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoDoc;
