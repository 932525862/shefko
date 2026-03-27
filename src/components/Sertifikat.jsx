import React from "react";

import sertificatImg1 from "../assets/sert1.jpg";
import sertificatImg2 from "../assets/sert4.png";
import sertificatImg3 from "../assets/sert3.png";

import backimg from "../assets/img2/7.jpg";
import { useTranslation } from "react-i18next";

const Sertifikat = () => {
  const { t } = useTranslation();
  return (
    <div
      className="pt-20 sm:pt-32 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backimg})`,
      }}
    >
      {/* Qoraytirilgan qatlamni qoplovchi div */}
      <div className="container relative z-10">
        <div className="flex flex-col items-center pb-20">
          <h3 className="oswald text-white text-3xl font-medium mb-5">
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

export default Sertifikat;

