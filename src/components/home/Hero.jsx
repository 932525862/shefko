import React from "react";
import Marquee from "react-fast-marquee";
import buka from "../../assets/shefkologo.png";
import video from "../../assets/bg.mp4";
import { useTranslation } from "react-i18next";
const Hero = ({ openModal }) => {
  const { t } = useTranslation()
  return (
    <section className="relative h-[70vh] lg:h-screen bg-red-800">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 hidden lg:block"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-[75%] lg:top-[30%] z-20 w-full overflow-hidden">
        <Marquee direction="left" gradient={false}>
          <div className="oswald text-[12vw] uppercase text-white font-medium mr-4">
            {t("hero.title")}{" "}
          </div>
        </Marquee>
      </div>
      <div className="container relative z-10 h-full">
        <div className="flex items-start pt-36 lg:pt-0 lg:items-end h-full pb-14">
          <div className="flex lg:flex-row flex-col gap-6 items-center  justify-between w-full">
            <div className="max-w-[460px] text-center lg:text-left lg:max-w-[350px] text-[#ffffff] text-xl font-bold">
            {t("hero.text")}
            </div>
            <div className="w-[158px] h-[158px] rounded-full border border-[#ece6e6] p-[10px] cursor-pointer relative">
              <div className="lg:flex w-[145px] h-[145px] rounded-full bg-red-950 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden items-center justify-center">
                <img className="w-[110px] h-[110px]" src={buka} alt="" />
              </div>
              <div
                onClick={openModal}
                className="w-[145px] h-[145px] rounded-full bg-[#d1ab7d] text-[#fff] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase flex items-center justify-center text-[20px] font-medium opacity-100 lg:opacity-0 hover:opacity-100 transition-opacity duration-300"
              >
                {t("hero.btn")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
