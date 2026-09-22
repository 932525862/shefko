import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import {
  FiMessageSquare,
  FiClipboard,
  FiStar,
  FiAlertCircle,
  FiUser,
  FiPhone,
  FiSend,
  FiShield,
  FiMessageCircle,
} from "react-icons/fi";

const TOKEN = "8280988771:AAGDFvfQN1eF-NxvqcFwCB7Lw8qt0UQlwMo";
const CHAT_ID = -1004376730000;
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const TABS = [
  { key: "idea", icon: <FiMessageSquare />, emoji: "💡" },
  { key: "request", icon: <FiClipboard />, emoji: "📋" },
  { key: "suggestion", icon: <FiStar />, emoji: "⭐" },
  { key: "complaint", icon: <FiAlertCircle />, emoji: "⚠️" },
];

const Feedback = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("idea");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const tab = TABS.find((tb) => tb.key === activeTab);
    const categoryLabel = t(`feedback.tab-${activeTab}`);
    const message =
      `${tab?.emoji} Kategoriya: ${categoryLabel}\n` +
      `👤 Ism: ${data.name}\n` +
      `📞 Telefon: ${data.phone}\n` +
      `📝 Xabar: ${data.message}`;

    try {
      const res = await axios.post(TELEGRAM_API_URL, {
        chat_id: CHAT_ID,
        text: message,
      });
      if (res?.data?.ok) {
        toast.success(t("feedback.success"));
        reset();
      } else {
        toast.error(t("feedback.error"));
      }
    } catch {
      toast.error(t("feedback.error"));
    }
    setLoading(false);
  };

  const getTabColor = (key) => {
    switch (key) {
      case "idea":
        return {
          gradient: "from-red-600 via-red-700 to-red-800",
          lightBg: "bg-red-50 text-red-700 border-red-200",
          iconBg: "bg-red-600 text-white",
        };
      case "request":
        return {
          gradient: "from-red-700 via-red-800 to-red-900",
          lightBg: "bg-red-50 text-red-800 border-red-200",
          iconBg: "bg-red-700 text-white",
        };
      case "suggestion":
        return {
          gradient: "from-amber-600 via-red-700 to-red-800",
          lightBg: "bg-amber-50 text-amber-800 border-amber-200",
          iconBg: "bg-amber-600 text-white",
        };
      case "complaint":
        return {
          gradient: "from-rose-600 via-red-700 to-red-900",
          lightBg: "bg-rose-50 text-rose-800 border-rose-200",
          iconBg: "bg-rose-600 text-white",
        };
      default:
        return {
          gradient: "from-red-600 to-red-800",
          lightBg: "bg-red-50 text-red-700 border-red-200",
          iconBg: "bg-red-600 text-white",
        };
    }
  };

  const currentTabTheme = getTabColor(activeTab);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-50 via-red-50/20 to-slate-100 text-slate-800 pt-32 pb-24 font-sans overflow-hidden">
      {/* Decorative Red & White Ambient Light Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-red-100/60 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 max-w-4xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 border border-red-200 text-red-800 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <FiShield className="text-sm text-red-600" />
            <span>Mijozlarni Qo'llab-quvvatlash</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            {t("feedback.title")}
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            {t("feedback.subtitle")}
          </p>
        </div>

        {/* Corporate White Segmented Tab Selector */}
        <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 p-2 rounded-2xl mb-10 max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2 shadow-xl shadow-slate-200/50">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => {
                  setActiveTab(tab.key);
                  reset();
                }}
                className={`flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white shadow-lg shadow-red-600/30 scale-[1.02]"
                    : "text-slate-600 hover:text-red-700 hover:bg-red-50/60"
                }`}
              >
                <span className="text-base shrink-0">{tab.icon}</span>
                <span>{t(`feedback.tab-${tab.key}`)}</span>
              </button>
            );
          })}
        </div>

        {/* Corporate White Form Card */}
        <div className="relative bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-2xl shadow-slate-300/40 overflow-hidden">
          {/* Top Red Gradient Line */}
          <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${currentTabTheme.gradient}`} />

          {/* Active Category Indicator inside Form */}
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
            <div className={`w-12 h-12 rounded-2xl ${currentTabTheme.iconBg} flex items-center justify-center text-white text-xl shadow-md shrink-0`}>
              {TABS.find((t) => t.key === activeTab)?.icon}
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-widest text-red-600 font-extrabold">
                Tanlangan Kategoriya
              </span>
              <h2 className="text-xl font-bold text-slate-900">
                {t(`feedback.tab-${activeTab}`)}
              </h2>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Input 1: Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                {t("feedback.name")} <span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <FiUser className="text-base" />
                </div>
                <input
                  {...register("name", { required: t("feedback.name-err") })}
                  placeholder="Ismingizni kiriting"
                  className="w-full bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 rounded-xl pl-11 pr-4 py-3.5 outline-none focus:bg-white focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all text-sm font-medium"
                />
              </div>
              {errors.name && (
                <p className="text-red-600 text-xs font-semibold mt-1.5 flex items-center gap-1">
                  <FiAlertCircle /> {errors.name.message}
                </p>
              )}
            </div>

            {/* Input 2: Phone */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                {t("feedback.phone")} <span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <FiPhone className="text-base" />
                </div>
                <input
                  {...register("phone", { required: t("feedback.phone-err") })}
                  placeholder="+998 (90) 123-45-67"
                  type="tel"
                  className="w-full bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 rounded-xl pl-11 pr-4 py-3.5 outline-none focus:bg-white focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all text-sm font-medium"
                />
              </div>
              {errors.phone && (
                <p className="text-red-600 text-xs font-semibold mt-1.5 flex items-center gap-1">
                  <FiAlertCircle /> {errors.phone.message}
                </p>
              )}
            </div>

            {/* Input 3: Message */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                {t("feedback.message")} <span className="text-red-600">*</span>
              </label>
              <textarea
                {...register("message", { required: t("feedback.message-err") })}
                placeholder="Xabaringizni batafsil yozib qoldiring..."
                rows={5}
                className="w-full bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 rounded-xl p-4 outline-none focus:bg-white focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all text-sm font-medium resize-none"
              />
              {errors.message && (
                <p className="text-red-600 text-xs font-semibold mt-1.5 flex items-center gap-1">
                  <FiAlertCircle /> {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:to-red-900 active:scale-[0.99] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-red-600/25 text-sm sm:text-base cursor-pointer"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  <span>Yuborilmoqda...</span>
                </>
              ) : (
                <>
                  <FiSend className="text-base" />
                  <span>{t("feedback.btn")}</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Direct Contact Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="tel:+998555118080"
            className="group p-5 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-red-300 transition-all duration-300 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-105 transition-transform">
              <FiPhone className="text-xl" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-semibold">Tezkor Aloqa Markazi</div>
              <div className="text-slate-900 font-extrabold text-base tracking-wide group-hover:text-red-700 transition-colors">
                +998 55 511 80 80
              </div>
            </div>
          </a>

          <a
            href="https://t.me/shefko_donar"
            target="_blank"
            rel="noreferrer"
            className="group p-5 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-red-300 transition-all duration-300 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-105 transition-transform">
              <FiMessageCircle className="text-xl" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-semibold">Telegram Operator</div>
              <div className="text-slate-900 font-extrabold text-base tracking-wide group-hover:text-red-700 transition-colors">
                @shefko_donar
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
