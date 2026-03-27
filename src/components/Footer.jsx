import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LiaTelegram } from "react-icons/lia";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation()
  return (
    <div className="bg-red-800 pb-10 pt-20">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-y-5 text-white">
          <p className="max-w-[564px] text-center">
          {t("footer.title")}
          </p>
		  
          <div className="flex gap-x-5 text-white/60">
            <Link to={"https://www.instagram.com"} className="text-2xl hover:scale-105">
              <FaInstagram />
            </Link>
            <Link to={"/"} className="text-2xl hover:scale-105">
            <LiaTelegram />
            </Link>
          </div>
          <p>© {t("footer.secret")}</p>
          <a href="https://www.limsa.uz/" target="_blank" className="text-white/60">{t("footer.by")}</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
