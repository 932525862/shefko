import Form from "./Form";
import backgroundImage from "../assets/bgimg.png";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="relative pt-[50px] sm:pt-[100px] pb-[50px]">
      <div
        className="absolute inset-0 bg-cover bg-center -z-[999]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        }}
      ></div>
      <div className="container">
        <div className="flex justify-between lg:flex-row flex-col">
          <div className="max-w-full lg:max-w-[500px] text-black">
            <h3 className="oswald text-[32px] text-[#fff] uppercase font-semibold mb-[10px]">
              {t("contact.title")}
            </h3>
            <p className="text-[15px] text-[#fff]">{t("contact.text")}</p>
            <p className="text-[15px] text-[#fff] mt-[30px]">
              {t("contact.tel")}
            </p>
            <div className="text-[15px] text-[#fff] mt-[5px] space-y-[5px]">
              <p>
                <a href="tel:+998957724444">Tel: +998957724444</a>
              </p>
              <p>
                <a href="tel:+998996440101">Tel: +998996440101</a>
              </p>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
