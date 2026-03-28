import React from "react";


import img1 from "../../public/img/2.jpg";
import img2 from "../assets/1.jpg";
import img3 from "../assets/2.jpg";
import img4 from "../assets/3.png";
import img5 from "../assets/4.jpg";
import img6 from "../assets/5.jpg";
import img7 from "../assets/6.jpg";
import img8 from "../assets/7.jpg";
import img9 from "../assets/8.jpg";

import photo1 from "../assets/8.jpg";
import photo2 from "../assets/9.jpg";
import photo3 from "../assets/10.jpg";
import photo4 from "../assets/11.jpg";
import photo5 from "../assets/12.jpg";
import photo6 from "../assets/13.jpg";
import photo7 from "../assets/14.jpg";
import photo8 from "../assets/15.jpg";
import photo9 from "../assets/16.jpg";
import photo10 from "../assets/17.jpg";
import photo11 from "../assets/18.jpg";

import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";

const Taqvo = () => {
  const {t} = useTranslation()
  return (
    <section className="bg-red-800 py-[50px] ss:py-[70px]">
      <div className="container">
        <div className="flex justify-between text-white items-center">
          <div className="relative ">
            <h1 className="text-[25px] sm:text-[32px] max-w-[415px]">
            {t("taqvo.title")}
            </h1>
            <div className="absolute -bottom-[50px] sm:-bottom-[30px] right-0 sm:-right-[100px]">
              
            </div>
          </div>
         
          <div className="hidden lg:flex items-center flex-col gap-[10px] w-[260px]">
            <a
              href="https://www.instagram.com/blog_abdulaziz?igsh=MTJmbG85emd1ZWl1Mw%3D%3D&utm_source=qr"
              className="w-full font-medium border border-white rounded-full py-[15px] text-[15px] hover:bg-white hover:text-navy-900 hover:text-red-800 transition-colors duration-300 flex justify-center items-center"
            >
              {t("taqvo.ins-1")}
            </a>
             <a
              href="https://t.me/shefko_donar"
              className="w-full font-medium border border-white rounded-full py-[15px] text-[15px] hover:bg-white hover:text-navy-900 hover:text-red-800 transition-colors duration-300 flex justify-center items-center"
            >
               {t("taqvo.tg-1")}
            </a>
            {/* <button className="w-full font-medium border border-white rounded-full py-[15px] text-[15px] hover:bg-white hover:text-navy-900 hover:text-red-800 transition-colors duration-300">
              {t("taqvo.tg-1")}
            </button> */}
          </div>
        </div>
      </div>
      <div className="mt-[100px] ">
        <div className="mb-[30px]">
          <Marquee direction="left">
            <div className="mr-[20px]">
              <img
                className="w-[200px] ss:w-[250px] sm:w-[280px] lg:w-[300px] h-[200px] ss:h-[250px] sm:h-[280px] lg:h-[300px] object-cover rounded-[20px]"
                src={img1}
                alt="photo"
              />
            </div>
            <div className="mr-[20px]">
              <img
                className="w-[200px] ss:w-[250px] sm:w-[280px] lg:w-[300px] h-[200px] ss:h-[250px] sm:h-[280px] lg:h-[300px] object-cover rounded-[20px]"
                src={img2}
                alt="photo"
              />
            </div>
            <div className="mr-[20px]">
              <img
                className="w-[200px] ss:w-[250px] sm:w-[280px] lg:w-[300px] h-[200px] ss:h-[250px] sm:h-[280px] lg:h-[300px] object-cover rounded-[20px]"
                src={img3}
                alt="photo"
              />
            </div>
            <div className="mr-[20px]">
              <img
                className="w-[200px] ss:w-[250px] sm:w-[280px] lg:w-[300px] h-[200px] ss:h-[250px] sm:h-[280px] lg:h-[300px] object-cover rounded-[20px]"
                src={img4}
                alt="photo"
              />
            </div>
            <div className="mr-[20px]">
              <img
                className="w-[200px] ss:w-[250px] sm:w-[280px] lg:w-[300px] h-[200px] ss:h-[250px] sm:h-[280px] lg:h-[300px] object-cover rounded-[20px]"
                src={img5}
                alt="photo"
              />
            </div>
            <div className="mr-[20px]">
              <img
                className="w-[200px] ss:w-[250px] sm:w-[280px] lg:w-[300px] h-[200px] ss:h-[250px] sm:h-[280px] lg:h-[300px] object-cover rounded-[20px]"
                src={img6}
                alt="photo"
              />
            </div>
            <div className="mr-[20px]">
              <img
                className="w-[200px] ss:w-[250px] sm:w-[280px] lg:w-[300px] h-[200px] ss:h-[250px] sm:h-[280px] lg:h-[300px] object-cover rounded-[20px]"
                src={img7}
                alt="photo"
              />
            </div>
            <div className="mr-[20px]">
              <img
                className="w-[200px] ss:w-[250px] sm:w-[280px] lg:w-[300px] h-[200px] ss:h-[250px] sm:h-[280px] lg:h-[300px] object-cover rounded-[20px]"
                src={img8}
                alt="photo"
              />
            </div>
            <div className="mr-[20px]">
              <img
                className="w-[200px] ss:w-[250px] sm:w-[280px] lg:w-[300px] h-[200px] ss:h-[250px] sm:h-[280px] lg:h-[300px] object-cover rounded-[20px]"
                src={img9}
                alt="photo"
              />
            </div>
          </Marquee>
        </div>
        <Marquee direction="right" >
          <div className="mr-[20px]">
            <img
              className="w-[140px] h-[140px] ss:w-[160px] ss:h-[160px] sm:h-[180px] sm:w-[180px] lg:w-[200px] lg:h-[200px] object-cover rounded-[20px]"
              src={photo1}
              alt="photo"
            />
          </div>
          <div className="mr-[20px]">
            <img
              className="w-[140px] h-[140px] ss:w-[160px] ss:h-[160px] sm:h-[180px] sm:w-[180px] lg:w-[200px] lg:h-[200px] object-cover rounded-[20px]"
              src={photo2}
              alt="photo"
            />
          </div>
          <div className="mr-[20px]">
            <img
              className="w-[140px] h-[140px] ss:w-[160px] ss:h-[160px] sm:h-[180px] sm:w-[180px] lg:w-[200px] lg:h-[200px] object-cover rounded-[20px]"
              src={photo3}
              alt="photo"
            />
          </div>
          <div className="mr-[20px]">
            <img
              className="w-[140px] h-[140px] ss:w-[160px] ss:h-[160px] sm:h-[180px] sm:w-[180px] lg:w-[200px] lg:h-[200px] object-cover rounded-[20px]"
              src={photo4}
              alt="photo"
            />
          </div>
          <div className="mr-[20px]">
            <img
              className="w-[140px] h-[140px] ss:w-[160px] ss:h-[160px] sm:h-[180px] sm:w-[180px] lg:w-[200px] lg:h-[200px] object-cover rounded-[20px]"
              src={photo5}
              alt="photo"
            />
          </div>
          <div className="mr-[20px]">
            <img
              className="w-[140px] h-[140px] ss:w-[160px] ss:h-[160px] sm:h-[180px] sm:w-[180px] lg:w-[200px] lg:h-[200px] object-cover rounded-[20px]"
              src={photo6}
              alt="photo"
            />
          </div>
          <div className="mr-[20px]">
            <img
              className="w-[140px] h-[140px] ss:w-[160px] ss:h-[160px] sm:h-[180px] sm:w-[180px] lg:w-[200px] lg:h-[200px] object-cover rounded-[20px]"
              src={photo7}
              alt="photo"
            />
          </div>
          <div className="mr-[20px]">
            <img
              className="w-[140px] h-[140px] ss:w-[160px] ss:h-[160px] sm:h-[180px] sm:w-[180px] lg:w-[200px] lg:h-[200px] object-cover rounded-[20px]"
              src={photo8}
              alt="photo"
            />
          </div>
          <div className="mr-[20px]">
            <img
              className="w-[140px] h-[140px] ss:w-[160px] ss:h-[160px] sm:h-[180px] sm:w-[180px] lg:w-[200px] lg:h-[200px] object-cover rounded-[20px]"
              src={photo9}
              alt="photo"
            />
          </div>
          <div className="mr-[20px]">
            <img
              className="w-[140px] h-[140px] ss:w-[160px] ss:h-[160px] sm:h-[180px] sm:w-[180px] lg:w-[200px] lg:h-[200px] object-cover rounded-[20px]"
              src={photo10}
              alt="photo"
            />
          </div>
          <div className="mr-[20px]">
            <img
              className="w-[140px] h-[140px] ss:w-[160px] ss:h-[160px] sm:h-[180px] sm:w-[180px] lg:w-[200px] lg:h-[200px] object-cover rounded-[20px]"
              src={photo11}
              alt="photo"
            />
          </div>
        </Marquee>
      </div>
      <div className="container">
        <div className="lg:hidden flex items-center gap-[10px] w-full mt-[30px]">
          {/* <button className="w-full font-medium border border-white rounded-full py-[15px] ">
          {t("taqvo.ins-2")}
          </button> */}
		       <a
              href="https://www.instagram.com/aqvo_jiz/"
              className="w-full font-medium border border-white rounded-full py-[15px] flex items-center justify-center text-[#fff] text-[14px] ss:text-[15px]"
            >
              {t("taqvo.ins-1")}
            </a>
            <a
              href="https://t.me/shefko_donar"
              className="w-full font-medium border border-white rounded-full py-[15px] flex items-center justify-center text-[#fff] text-[14px] ss:text-[15px]"
            >
              {t("taqvo.tg-1")}
            </a>
          {/* <button className="w-full font-medium border border-white rounded-full py-[15px] ">
          {t("taqvo.tg-2")}
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Taqvo;
