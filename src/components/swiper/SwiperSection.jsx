import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import aboutImg3 from "../../assets/uzun.png";
import Aqvo1 from "../../assets/bgimg.png"; // import Aqvo1
import Aqvo2 from "../../assets/bgimg3.png"; // import Aqvo2
import Aqvo3 from "../../assets/bgimg4.png"; // import Aqvo3
import { Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

const SwiperSection = () => {
  const {t} = useTranslation()
  return (
    <section>
			<div className="w-full rounded-xl overflow-hidden">
            <img
              src={aboutImg3}
              alt="taqvo image"
              className="h-full w-full object-cover"
            />
          </div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="h-[600px] w-full flex justify-center items-center flex-col gap-6 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${Aqvo1})` }} // Background image for Aqvo1
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>{" "}
            {/* Overlay for better text visibility */}
            <h3 className="oswald text-white text-[35px] ss:text-[50px] md:text-[76px] lg:text-[86px] max-w-[620px] lg:max-w-[760px] text-center uppercase leading-[110%] font-semibold z-10">
            {t("swiper.title-1")}{" "}
            </h3>
            <p className="text-white text-[15px] ss:text-[16px] md:text-[17px] lg:text-[18px] max-w-[620px] lg:max-w-[760px] text-center z-10">
            {t("swiper.text-1")}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[600px] w-full flex justify-center items-center flex-col gap-6 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${Aqvo2})` }} // Background image for Aqvo2
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>{" "}
            {/* Overlay for better text visibility */}
            <h3 className="oswald text-white text-[35px] ss:text-[50px] md:text-[76px] lg:text-[86px] max-w-[620px] lg:max-w-[760px] text-center uppercase leading-[110%] font-semibold z-10">
            {t("swiper.title-2")}
            </h3>
            <p className="text-white text-[15px] ss:text-[16px] md:text-[17px] lg:text-[18px] max-w-[620px] lg:max-w-[760px] text-center z-10">
            {t("swiper.text-2")}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[600px] w-full flex justify-center items-center flex-col gap-6 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${Aqvo3})` }} // Background image for Aqvo3
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>{" "}
            {/* Overlay for better text visibility */}
            <h3 className="oswald text-white text-[35px] ss:text-[50px] md:text-[76px] lg:text-[86px] max-w-[620px] lg:max-w-[760px] text-center uppercase leading-[110%] font-semibold z-10">
            {t("swiper.title-3")}
            </h3>
            <p className="text-white text-[15px] ss:text-[16px] md:text-[17px] lg:text-[18px] max-w-[620px] lg:max-w-[760px] text-center z-10">
            {t("swiper.text-3")}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SwiperSection;
