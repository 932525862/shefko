import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { toast } from "react-toastify";
import InputField from "../InputFielad";
import FormSelect from "../FormSelect";

const TOKEN = "8388662397:AAGjTkfSIH1yvz2TY2oPzY7h4WctKRTnSBY";
const CHAT_ID = -1003638232244;
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const benefitKeys = ["b1", "b2", "b3", "b4", "b5"];

const businessTypeOptions = {
  uz: [
    { label: "Distribyutor",       value: "Distributor" },
    { label: "Ulgurji savdogar",   value: "Wholesaler" },
    { label: "Supermarket tarmog'i", value: "Supermarket Chain" },
    { label: "Ovqatlanish xizmati", value: "Food Service" },
  ],
  en: [
    { label: "Distributor",        value: "Distributor" },
    { label: "Wholesaler",         value: "Wholesaler" },
    { label: "Supermarket Chain",  value: "Supermarket Chain" },
    { label: "Food Service",       value: "Food Service" },
  ],
  ru: [
    { label: "Дистрибьютор",       value: "Distributor" },
    { label: "Оптовик",            value: "Wholesaler" },
    { label: "Сеть супермаркетов", value: "Supermarket Chain" },
    { label: "Сфера питания",      value: "Food Service" },
  ],
};

const volumeOptions = {
  uz: [
    { label: "500 kg gacha",     value: "<500kg" },
    { label: "500 kg – 2 tonna", value: "500kg-2t" },
    { label: "2 – 5 tonna",      value: "2-5t" },
    { label: "5 tonnadan ortiq", value: ">5t" },
  ],
  en: [
    { label: "Up to 500 kg",   value: "<500kg" },
    { label: "500 kg – 2 tons", value: "500kg-2t" },
    { label: "2 – 5 tons",     value: "2-5t" },
    { label: "Over 5 tons",    value: ">5t" },
  ],
  ru: [
    { label: "До 500 кг",      value: "<500kg" },
    { label: "500 кг – 2 тонны", value: "500kg-2t" },
    { label: "2 – 5 тонн",    value: "2-5t" },
    { label: "Более 5 тонн",  value: ">5t" },
  ],
};

const BecomeDistributor = () => {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const lang = i18n.language === "ru" ? "ru" : i18n.language === "en" ? "en" : "uz";

  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      company: "", country: "", contact: "",
      email: "", phone: "", businessType: "", volume: "", message: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const msg =
      `🤝 SHEFKO — Distributor Request\n\n` +
      `🏢 Company: ${data.company}\n` +
      `🌍 Country: ${data.country}\n` +
      `👤 Contact: ${data.contact}\n` +
      `📧 Email: ${data.email}\n` +
      `📞 Phone: ${data.phone}\n` +
      `🏷 Business Type: ${data.businessType}\n` +
      `📦 Monthly Volume: ${data.volume}\n` +
      (data.message ? `📝 Message: ${data.message}` : "");
    try {
      const res = await axios.post(TELEGRAM_API_URL, { chat_id: CHAT_ID, text: msg });
      if (res?.data?.ok) { toast.success("Success!"); reset(); }
      else toast.error("Error!");
    } catch { toast.error("Error!"); }
    setLoading(false);
  };

  return (
    <section className="bg-red-800 py-16 sm:py-24 relative overflow-hidden">
      {/* decorative background circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/[0.06]" />
      <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full border border-white/[0.06]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full border border-white/[0.06]" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── LEFT ── */}
          <div>
            <p className="text-red-300 text-[10px] font-bold uppercase tracking-[4px] mb-3">
              {t("distributor.subtitle")}
            </p>
            <h2 className="oswald text-3xl sm:text-4xl font-semibold text-white uppercase leading-tight mb-4">
              {t("distributor.title")}
            </h2>
            <div className="w-14 h-[3px] bg-white/40 mb-6 rounded-full" />

            <p className="text-red-100 text-[15px] leading-relaxed mb-4">
              {t("distributor.text1")}
            </p>
            <p className="text-red-100 text-[15px] leading-relaxed mb-10">
              {t("distributor.text2")}
            </p>

            {/* benefit list */}
            <ul className="space-y-3">
              {benefitKeys.map((k) => (
                <li key={k} className="flex items-center gap-3 text-white">
                  <div className="w-5 h-5 rounded-full bg-white/20 border border-white/30 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                  <span className="text-sm leading-snug">{t(`distributor.${k}`)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── RIGHT — form card ── */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 sm:p-8">
            <h3 className="oswald text-white text-lg font-semibold uppercase mb-6 tracking-wide">
              {t("distributor.form-title")}
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

              {/* Company */}
              <div>
                <InputField name="company" placeholder={t("distributor.f.company")} type="text" control={control} rules={{ required: true }} />
                {errors.company && <p className="text-red-200 text-xs mt-1">{t("distributor.f.company-err")}</p>}
              </div>

              {/* Country + Contact */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <InputField name="country" placeholder={t("distributor.f.country")} type="text" control={control} rules={{ required: true }} />
                  {errors.country && <p className="text-red-200 text-xs mt-1">{t("distributor.f.country-err")}</p>}
                </div>
                <div>
                  <InputField name="contact" placeholder={t("distributor.f.contact")} type="text" control={control} rules={{ required: true }} />
                  {errors.contact && <p className="text-red-200 text-xs mt-1">{t("distributor.f.contact-err")}</p>}
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <InputField name="email" placeholder={t("distributor.f.email")} type="email" control={control} rules={{ required: true }} />
                  {errors.email && <p className="text-red-200 text-xs mt-1">{t("distributor.f.email-err")}</p>}
                </div>
                <div>
                  <InputField name="phone" placeholder={t("distributor.f.phone")} type="tel" control={control} rules={{ required: true }} />
                  {errors.phone && <p className="text-red-200 text-xs mt-1">{t("distributor.f.phone-err")}</p>}
                </div>
              </div>

              {/* Business Type + Volume */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <FormSelect name="businessType" placeholder={t("distributor.f.btype")} control={control} options={businessTypeOptions[lang]} rules={{ required: true }} />
                  {errors.businessType && <p className="text-red-200 text-xs mt-1">{t("distributor.f.btype-err")}</p>}
                </div>
                <div>
                  <FormSelect name="volume" placeholder={t("distributor.f.volume")} control={control} options={volumeOptions[lang]} rules={{ required: true }} />
                  {errors.volume && <p className="text-red-200 text-xs mt-1">{t("distributor.f.volume-err")}</p>}
                </div>
              </div>

              {/* Message */}
              <InputField name="message" placeholder={t("distributor.f.message")} control={control} isTextArea />

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-white text-red-800 font-bold rounded-xl oswald text-base uppercase tracking-widest hover:bg-red-50 transition-colors duration-300 disabled:opacity-60 mt-2"
              >
                {loading ? "..." : t("distributor.f.btn")}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BecomeDistributor;
