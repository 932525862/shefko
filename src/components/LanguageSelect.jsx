import React, { useState, useEffect, useRef } from "react";
import i18n from "../i18next";

const languages = [
  { code: "uz", label: "UZB", flag: "🇺🇿" },
  { code: "ru", label: "RU", flag: "🇷🇺" },
  { code: "en", label: "ENG", flag: "🇺🇸" },
];

const LanguageSelect = () => {
  const [selectedLang, setSelectedLang] = useState(localStorage.getItem("taqvoLng") || "uz");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("taqvoLng", lang);
    setSelectedLang(lang);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        className="rounded-md bg-transparent w-full text-left px-4 oswald py-2 flex justify-between items-center text-[#fff]"
      >
        <span className="flex items-center gap-2">
          {languages.find((lang) => lang.code === selectedLang)?.flag}
          {languages.find((lang) => lang.code === selectedLang)?.label || "Tilni tanlang"}
        </span>
        <span>{isDropdownOpen ? "▲" : "▼"}</span>
      </button>
      {isDropdownOpen && (
        <div className="absolute w-full mt-3 bg-white border border-gray-300 oswald rounded-md shadow-lg z-10 text-[#000]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleChange(lang.code)}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${lang.code === selectedLang ? "bg-gray-200" : ""}`}
            >
              <span className="flex items-center gap-2">
                {lang.flag} {lang.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;