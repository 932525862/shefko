import React from "react";
import { Link } from "react-router-dom";
import leftArrowIcon from "../assets/left-arrow.svg";
import aboutImg1 from "../assets/tusho.jpg";
import aboutImg2 from "../assets/kavob.jpg";
import aboutImg3 from "../assets/uzun.png";
import sertificatImg1 from "../assets/sert1.jpg";
import sertificatImg2 from "../assets/sert4.png";
import sertificatImg3 from "../assets/sert3.png";

import { useTranslation } from "react-i18next";

const About = () => {
  const {t} = useTranslation()
  return (
    <div className="pt-20 sm:pt-32 bg-red-800">
      <div className="container">
        <div className="flex items-center mb-10">
          <Link
            to={"/"}
            className="w-[42px] h-[42px] flex items-center justify-center rounded-full transition hover:bg-color1"
          >
            <img
              src={leftArrowIcon}
              alt="arrow icon"
              className="w-[30px] h-[30px]"
            />
          </Link>{" "}
          <h2 className="w-full text-center text-3xl sm:text-4xl text-red-200 oswald ">
            {t("about.title-h")}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-y-5 gap-x-10 mb-16">
          <div className="lg:w-[46%] rounded-xl overflow-hidden">
            <img
              src={aboutImg1}
              alt="taqvo image"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-y-5 justify-between lg:w-[50%]">
            <h4 className="text-[24px] text-white font-medium">
              <span className="text-color1 block">{t("about.title-h1-1")}</span>{" "}
              {t("about.title-h2-1")}
            </h4>
            <p className="text-[15px] font-medium text-white">
            {t("about.text-1")}
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse gap-y-5 gap-x-10 mb-16">
          <div className="lg:w-[46%] rounded-xl overflow-hidden">
            <img
              src={aboutImg2}
              alt="taqvo image"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-y-5 justify-between lg:w-[50%]">
            <h4 className="text-[24px] text-white font-medium">
              <span className="text-color1 block">{t("about.title-h1-2")}</span> {t("about.title-h2-2")}
            </h4>
            <p className="text-[15px] font-medium text-white">
            {t("about.text-2")}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-5 mb-16">
          <div className="w-full rounded-xl overflow-hidden">
            <img
              src={aboutImg3}
              alt="taqvo image"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-y-5 justify-between">
            <p className="text-[15px] font-medium text-white">
            {t("about.text-3")}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center pb-20">
          <h3 className="oswald text-color1 text-3xl font-medium mb-5">
          {t("about.sertificate")}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <img src={sertificatImg1} alt="taqvo sertificat image" />
            <img src={sertificatImg2} alt="taqvo sertificat image" />
            <img src={sertificatImg3} alt="taqvo sertificat image" />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
