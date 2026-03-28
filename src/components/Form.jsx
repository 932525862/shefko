import { useForm } from "react-hook-form";
import InputField from "./InputFielad";
import FormSelect from "./FormSelect";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const TOKEN = "8388662397:AAGjTkfSIH1yvz2TY2oPzY7h4WctKRTnSBY";
const CHAT_ID = -1003638232244;
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const Form = () => {
  const [loading, setLoading] = useState(false);
  const { t, i18n } = useTranslation()
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      telegramUsername: "",
      region: "",
      service: "",
      message: "",
    },
  });
  
  const onSubmit = async (data) => {
    setLoading(true);

    const message = resetMessage(data);

    let response = await axios.post(TELEGRAM_API_URL, {
      chat_id: CHAT_ID,
      text: message,
    });

    if (response?.data?.ok) {
      toast.success("Success!");
      setLoading(false);
      reset();
    } else {
      toast.error("Error!");
      setLoading(false);
    }
  };

  const resetMessage = (data) => {
    let fullName =
      data?.firstName || data?.lastName
        ? `👤 F.I: ${data?.firstName} ${data?.lastName}`
        : "";

    let phone = data?.phoneNumber ? `\n📞 Telefon: ${data?.phoneNumber}` : "";

    let address = data?.region ? `\n🏠 Manzil: ${data?.region}` : "";

    let telegram = data?.telegramUsername
      ? `\n💬 Telegram: ${data?.telegramUsername}`
      : "";

    let service = data?.service ? `\n🛠 Xizmat turi: ${data?.service}` : "";

    let xabar = data?.message ? `\n📝 Izoh: ${data?.message}` : "";

    let message = fullName + phone + address + telegram + service + xabar;

    return message;
  };

  const regionOptions = {
    uz: [
      { label: "Mahsulot", value: "Mahsulot" },
      { label: "Franshiza", value: "Franshiza" },
    ],
    ru: [
      { label: "Продукт", value: "Продукт" },
      { label: "Франшиза", value: "Франшиза" },
    ],
    en: [
      { label: "Product", value: "Product" },
      { label: "Franchise", value: "Franchise" },
    ],
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="flex gap-4 w-full">
        <div className="w-full">
          <InputField
            name="firstName"
            placeholder={t("form.name")}
            type="text"
            control={control}
            rules={{ required: t("form.name-error") }}
          />
          {errors.firstName && (
            <p className="text-red-600 text-[13px] mt-[2px]">
              {errors?.firstName?.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <InputField
            name="lastName"
            placeholder={t("form.lastName")}
            type="text"
            control={control}
            rules={{ required: t("form.lastName-error") }}
          />
          {errors?.lastName && (
            <p className="text-red-600 text-[13px] mt-[2px]">
              {errors?.lastName?.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-full">
          <InputField
            name="phoneNumber"
            placeholder={t("form.phone")}
            type="tel"
            control={control}
            rules={{ required: t("form.phone-error") }}
          />
          {errors?.phoneNumber && (
            <p className="text-red-600 text-[13px] mt-[2px]">
              {errors?.phoneNumber?.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <InputField
            name="telegramUsername"
            placeholder={t("form.tg")}
            type="text"
            control={control}
            rules={{ required: t("form.tg-error") }}
          />
          {errors?.telegramUsername && (
            <p className="text-red-600 text-[13px] mt-[2px]">
              {errors?.telegramUsername?.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-4 flex-col ss:flex-row">
        <div className="w-full">
          <InputField
            name="region"
            placeholder={t("form.area")}
            control={control}
            rules={{ required: t("form.area-error") }}
          ></InputField>
          {errors?.region && (
            <p className="text-red-600 text-[13px] mt-[2px]">
              {errors?.region?.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <FormSelect
            name="service"
            placeholder={t("form.service")}
            control={control}
            options={i18n.language == 'uz' ? regionOptions?.uz : i18n.language == 'ru' ? regionOptions?.ru : regionOptions?.en}
            rules={{ required: t("form.service") }}
          />
          {errors?.service && (
            <p className="text-red-600 text-[13px] mt-[2px]">
              {errors?.service?.message}
            </p>
          )}
        </div>
      </div>

      <InputField
        name="message"
        placeholder={t("form.message")}
        type="text"
        control={control}
        isTextArea
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 mt-4 bg-[#e67e22] font-medium text-white rounded-md"
      >
        {loading ? `${t("form.btn")}...` : t("form.btn")}
      </button>
    </form>
  );
};

export default Form;
