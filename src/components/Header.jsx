import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shefkologo.png";
import LanguageSelect from "./LanguageSelect";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useTranslation } from "react-i18next";

const Header = ({openModal}) => {
  const [open, setOpen] = useState(false);
  const {t} = useTranslation()
  const menuRef = useRef(null);

  // Tashqarida bosilganda menyuni yopish
  const buttonRef = useRef(null);

  // Menyu ochish tugmasi bosilganda
  const handleMenuToggle = () => {
    setOpen((prev) => !prev);
  };

  // Tashqarida bosilganda menyuni yopish
  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) && // Menyu tarkibida emas
      buttonRef.current &&
      !buttonRef.current.contains(event.target) // Menyu tugmasi tarkibida emas
    ) {
      setOpen(false); // Menyuni yopish
    }
  };

  // Global hodisaga yozish
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header>
      {/* Mobil menyu */}
      <div
        ref={menuRef}
        className={`fixed h-screen w-[300px] bg-white/80 backdrop-blur-3xl z-[9999999] transition-all duration-300 p-[10px] ${
          open ? "right-0" : "-right-full"
        }`}
      >
        <div className="flex flex-col">
          <div onClick={() => setOpen(false)} className="self-end">
            <IoMdClose className="text-red-800 text-[30px]" />
          </div>
          <ul className="mt-5 space-y-4 text-red-800 flex flex-col gap-[10px] font-medium">
            <li>
              <Link to="/">
                <img
                  className="h-[110px] w-[120px]"
                  src={logo}
                  alt="taqvo logo"
                />
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setOpen(false)}>
                {t("header.home")}
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setOpen(false)}>
              {t("header.about")}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Header */}
      <div className="fixed w-full top-[15px] z-50 text-[18px]">
        <div className="container">
          <div className="bg-[#441118a1] backdrop-blur-md text-[#fff] flex justify-between items-center rounded-[30px] pl-5 lg:pl-10 pr-5 lg:pr-[7px] py-[7px]">
            {/* Navigatsiya */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                <li>
                  <Link to="/">{t("header.home")}</Link>
                </li>
                <li>
                  <Link to="/about">{t("header.about")}</Link>
                </li>
              </ul>
            </div>
            {/* Logo */}
          <Link to="/" className="h-[40px] w-[90px]">
  <h2
    style={{
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 800,
      fontSize: '30px'
    }}
  >
    SHEFKO
  </h2>
</Link>
            {/* Til tanlash va tugma */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSelect />
              <button onClick={openModal} className="font-[500] w-[240px] h-[44px] bg-[#a78861] transition-all duration-300 rounded-[30px] hover:bg-[#d1ab7d]">
              {t("header.btn")}
              </button>
            </div>
            {/* Mobil til tanlash va menyu tugmasi */}
            <div className="flex lg:hidden items-center gap-2">
              <LanguageSelect />
              <div
                ref={buttonRef}
                onClick={handleMenuToggle}
              >
                <HiMenu className="text-[28px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
