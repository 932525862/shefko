import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import istshVideo from "../../assets/istsh.mp4";
import {
  FaPlay,
  FaPause,
  FaFireAlt,
  FaUtensils,
  FaClock,
  FaCheckCircle,
  FaExpand,
  FaVolumeMute,
  FaVolumeUp
} from "react-icons/fa";
import { GiBarbecue } from "react-icons/gi";

const HeatingGuide = () => {
  const { t, i18n } = useTranslation();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      }
    }
  };

  const currentLang = i18n.language || "uz";

  const content = {
    uz: {
      tag: "ISITISH YO'RIQNOMASI",
      title: "SHEFKO Mahsulotlarini Isitish Tartibi",
      desc: "SHEFKO konservalangan donar va tushonka mahsulotlarining barcha a'lo ta'mi va sariyog'li xushbo'yligini his etish uchun iste'mol qilishdan oldin isitish tavsiya etiladi.",
      stepsTitle: "Ketma-ket isitish bosqichlari:",
      step1Title: "1. Qadoqni Ochish",
      step1Desc: "Konserva qadoqini ehtiyotkorlik bilan oching.",
      step2Title: "2. Isitish (2-3 daqiqa)",
      step2Desc: "Mahsulotni tavaga yoki idishga solib, past olovda 2-3 daqiqa isiting.",
      step3Title: "3. Tanavvul Qilish",
      step3Desc: "Issiq, sharbatli va xushbo'y SHEFKO taomini saxiylik bilan ulashing!",
      videoBadge: "Video Qo'llanma",
      playText: "Videoni Tomosha Qilish"
    },
    ru: {
      tag: "ИНСТРУКЦИЯ ПО РАЗОГРЕВУ",
      title: "Как разогревать продукты SHEFKO",
      desc: "Чтобы сполна ощутить непревзойденный вкус и аромат консервированного донера и тушенки SHEFKO, рекомендуется разогреть продукт перед употреблением.",
      stepsTitle: "Пошаговая инструкция:",
      step1Title: "1. Вскрытие упаковки",
      step1Desc: "Аккуратно откройте консервную банку.",
      step2Title: "2. Разогрев (2-3 мин)",
      step2Desc: "Выложите продукт на сковороду или в емкость и разогрейте 2-3 минуты.",
      step3Title: "3. Подача к столу",
      step3Desc: "Наслаждайтесь сочным, горячим и ароматным блюдом SHEFKO!",
      videoBadge: "Видеоинструкция",
      playText: "Смотреть видео"
    },
    en: {
      tag: "HEATING GUIDE",
      title: "How to Heat SHEFKO Products",
      desc: "To fully enjoy the rich flavor and rich aroma of SHEFKO canned doner and stews, heating before consumption is recommended.",
      stepsTitle: "Step-by-step guide:",
      step1Title: "1. Open Container",
      step1Desc: "Carefully open the canned product container.",
      step2Title: "2. Heat Up (2-3 mins)",
      step2Desc: "Place contents into a pan or container and heat over low fire for 2-3 minutes.",
      step3Title: "3. Serve & Enjoy",
      step3Desc: "Enjoy your hot, juicy, and flavorful SHEFKO meal!",
      videoBadge: "Video Guide",
      playText: "Watch Video"
    }
  };

  const text = content[currentLang] || content.uz;

  return (
    <section id="heating" className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 via-[#200508] to-gray-900 text-white relative overflow-hidden">
      {/* Decorative Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-800/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="container relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-800/40 border border-red-500/30 text-[#d1ab7d] text-xs font-bold uppercase tracking-widest mb-4">
            <FaFireAlt className="text-red-500 animate-pulse" />
            {text.tag}
          </span>
          <h2 className="oswald text-3xl sm:text-5xl font-bold uppercase text-white tracking-wide leading-tight">
            {text.title}
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-red-600 via-[#a78861] to-red-600 mx-auto mt-4 rounded-full" />
          <p className="text-gray-300 text-sm sm:text-base mt-4 leading-relaxed font-light">
            {text.desc}
          </p>
        </div>

        {/* Grid layout: Video on Left / Steps & Info on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Interactive Video Player */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#a78861]/40 bg-black group">
              
              {/* Video Element */}
              <video
                ref={videoRef}
                src={istshVideo}
                className="w-full aspect-[9/16] sm:aspect-video object-cover max-h-[550px] mx-auto rounded-3xl"
                controls={false}
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onClick={togglePlay}
              />

              {/* Play Button Overlay (visible when paused) */}
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 bg-black/50 backdrop-blur-xs flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:bg-black/40 group"
                >
                  <button
                    aria-label="Play video"
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-red-800/90 text-white flex items-center justify-center shadow-2xl border-4 border-[#d1ab7d] transition-all duration-300 transform group-hover:scale-110 group-hover:bg-red-700"
                  >
                    <FaPlay className="text-2xl sm:text-3xl ml-1 text-[#d1ab7d]" />
                  </button>
                  <span className="mt-4 text-white font-semibold text-sm sm:text-base tracking-wide bg-black/60 px-5 py-2 rounded-full border border-white/20">
                    {text.playText}
                  </span>
                </div>
              )}

              {/* Video Top Bar Badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-red-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-red-500/40 text-xs font-semibold text-white">
                <FaFireAlt className="text-[#d1ab7d]" />
                <span>{text.videoBadge}</span>
              </div>

              {/* Bottom Custom Control Overlay Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex items-center justify-between z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={togglePlay}
                  className="text-white hover:text-[#d1ab7d] text-lg p-2 transition-colors"
                >
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>

                <div className="flex items-center gap-3">
                  <button
                    onClick={toggleMute}
                    className="text-white hover:text-[#d1ab7d] text-lg p-2 transition-colors"
                  >
                    {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                  </button>
                  <button
                    onClick={handleFullScreen}
                    className="text-white hover:text-[#d1ab7d] text-lg p-2 transition-colors"
                  >
                    <FaExpand />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Step-by-Step Instructions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">

            <div className="bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl">
              <h3 className="oswald text-xl sm:text-2xl font-bold uppercase text-[#d1ab7d] mb-6 flex items-center gap-2">
                <FaUtensils className="text-red-500" />
                {text.stepsTitle}
              </h3>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#a78861]/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-red-800 text-[#d1ab7d] flex items-center justify-center shrink-0 font-bold text-lg shadow-md">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-white">{text.step1Title}</h4>
                    <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-snug">{text.step1Desc}</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#a78861]/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#a78861] text-white flex items-center justify-center shrink-0 font-bold text-lg shadow-md">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-white flex items-center gap-2">
                      {text.step2Title}
                      <span className="text-xs bg-red-600/80 text-white px-2 py-0.5 rounded-full flex items-center gap-1 font-normal">
                        <FaClock className="text-[10px]" /> 2-3 MIN
                      </span>
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-snug">{text.step2Desc}</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#a78861]/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 font-bold text-lg shadow-md">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-white">{text.step3Title}</h4>
                    <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-snug">{text.step3Desc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick recommendation note */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-red-900/60 to-[#a78861]/30 border border-[#a78861]/40 flex items-center gap-4">
              <GiBarbecue className="text-4xl text-[#d1ab7d] shrink-0" />
              <p className="text-xs sm:text-sm text-red-100 leading-snug">
                <strong>Eslatma:</strong> SHEFKO mahsulotlari tayyor holatda bo'lib, isitilganda uning tabiiy yog'lari va sariyog'i erib, ajoyib ta'm beradi.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeatingGuide;
