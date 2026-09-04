import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import tushoImg from "../../assets/mol.jpg";
import skefkoImg from "../../assets/skefko1.png";
import kavobImg from "../../assets/tovuq.jpg";
import { ImgSkeleton } from "../ui/Skeleton";
import {
  FaFireAlt,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaBuilding,
  FaUtensils,
  FaInfoCircle,
  FaDrumstickBite,
  FaLeaf,
  FaWater,
  FaPepperHot,
  FaTemperatureLow,
  FaCheckCircle,
  FaAward,
  FaDna,
  FaClock,
  FaSeedling,
  FaCube,
  FaPlay
} from "react-icons/fa";
import { GiMeat, GiMeatHook, GiMuscleUp, GiDroplets, GiWheat } from "react-icons/gi";

// Products dataset (3 SHEFKO Products with 5-Language support)
const products = {
  beef_tushonka: {
    id: "beef_tushonka",
    badgeIcon: GiMeat,
    tabLabel: "Mol Tushonka",
    images: [tushoImg],
    languages: {
      uz: {
        code: "uz",
        label: "UZB",
        name: "O'zbekcha",
        flag: "🇺🇿",
        dir: "ltr",
        title: "DÖNER — Mol Tushonka",
        subtitle: "Mol go‘shtidan tayyorlangan tushonka \"SHEFKO\"",
        tagline: "Energy Rich • High Protein",
        manufacturerTitle: "Ishlab chiqaruvchi",
        manufacturer: '"BM ESTATES AND TRADING" MCHJ',
        addressTitle: "Manzil",
        address: "O‘zbekiston Respublikasi, Toshkent shahri, Olmazor tumani, Ibrohim Ota MFY, Qorasaroy ko‘chasi, 324-uy.",
        ingredientsTitle: "Tarkibi",
        ingredients: [
          { name: "Mol go‘shti", icon: GiMeat },
          { name: "Dafna yaprog‘i", icon: FaLeaf },
          { name: "Murch", icon: FaPepperHot },
          { name: "Tuz", icon: FaCube },
          { name: "Suv", icon: FaWater }
        ],
        nutritionTitle: "100 g mahsulot tarkibi",
        nutrition: [
          { label: "Oqsil", val: "45 g", pct: 90, icon: GiMuscleUp, color: "bg-[#c0392b]" },
          { label: "Yog‘lar", val: "17 g", pct: 34, icon: GiDroplets, color: "bg-[#a78861]" },
          { label: "Energiya qiymati", val: "213 kkal", pct: 75, icon: FaFireAlt, color: "bg-[#d1ab7d]" }
        ],
        storageTitle: "Saqlash sharoitlari",
        storageText: "Ishlab chiqarilgan kundan boshlab 24 oy davomida 0°C dan +20°C gacha bo‘lgan haroratda saqlansin. Qadoq ochilgandan keyin mahsulotni +2°C dan +6°C gacha bo‘lgan haroratda 48 soatdan ortiq saqlamaslik tavsiya etiladi.",
        recommendationTitle: "Tavsiya",
        recommendationText: "Iste'mol qilishdan oldin isitish tavsiya etiladi."
      },
      ru: {
        code: "ru",
        label: "RUS",
        name: "Русский",
        flag: "🇷🇺",
        dir: "ltr",
        title: "DÖNER — Тушенка",
        subtitle: 'Тушенка из говядины "SHEFKO"',
        tagline: "Energy Rich • High Protein",
        manufacturerTitle: "Производитель",
        manufacturer: 'ООО "BM ESTATES AND TRADING"',
        addressTitle: "Адрес",
        address: "Республика Узбекистан, г. Ташкент, Алмазарский район, ССГ Иброхим Ота, ул. Карасарай, д. 324.",
        ingredientsTitle: "Состав",
        ingredients: [
          { name: "Говядина", icon: GiMeat },
          { name: "Лавровый лист", icon: FaLeaf },
          { name: "Перец", icon: FaPepperHot },
          { name: "Соль", icon: FaCube },
          { name: "Вода", icon: FaWater }
        ],
        nutritionTitle: "Пищевая ценность на 100 г продукта",
        nutrition: [
          { label: "Белки", val: "45 г", pct: 90, icon: GiMuscleUp, color: "bg-[#c0392b]" },
          { label: "Жиры", val: "17 г", pct: 34, icon: GiDroplets, color: "bg-[#a78861]" },
          { label: "Энерг. ценность", val: "213 ккал", pct: 75, icon: FaFireAlt, color: "bg-[#d1ab7d]" }
        ],
        storageTitle: "Условия хранения",
        storageText: "Хранить при температуре от 0°C до +20°C в течение 24 месяцев со дня изготовления. После вскрытия упаковки рекомендуется хранить продукт при температуре от +2°C до +6°C не более 48 часов.",
        recommendationTitle: "Рекомендация",
        recommendationText: "Перед употреблением рекомендуется разогреть."
      },
      en: {
        code: "en",
        label: "ENG",
        name: "English",
        flag: "🇬🇧",
        dir: "ltr",
        title: "DÖNER — Beef Stew",
        subtitle: 'Stewed Beef "SHEFKO"',
        tagline: "Energy Rich • High Protein",
        manufacturerTitle: "Manufacturer",
        manufacturer: '"BM ESTATES AND TRADING" LLC',
        addressTitle: "Address",
        address: "324 Qarasaroy str., Ibrohim Ota MFY, Olmazor district, Tashkent city, Republic of Uzbekistan.",
        ingredientsTitle: "Ingredients",
        ingredients: [
          { name: "Beef", icon: GiMeat },
          { name: "Bay leaf", icon: FaLeaf },
          { name: "Black pepper", icon: FaPepperHot },
          { name: "Salt", icon: FaCube },
          { name: "Water", icon: FaWater }
        ],
        nutritionTitle: "Nutritional value per 100 g",
        nutrition: [
          { label: "Protein", val: "45 g", pct: 90, icon: GiMuscleUp, color: "bg-[#c0392b]" },
          { label: "Fats", val: "17 g", pct: 34, icon: GiDroplets, color: "bg-[#a78861]" },
          { label: "Energy value", val: "213 kcal", pct: 75, icon: FaFireAlt, color: "bg-[#d1ab7d]" }
        ],
        storageTitle: "Storage conditions",
        storageText: "Store at temperatures from 0°C to +20°C for 24 months from the date of manufacture. After opening, it is recommended to store the product at temperatures from +2°C to +6°C for no more than 48 hours.",
        recommendationTitle: "Recommendation",
        recommendationText: "Heating before consumption is recommended."
      },
      ar: {
        code: "ar",
        label: "ARAB",
        name: "العربية",
        flag: "🇦🇪",
        dir: "rtl",
        title: "دونر — لحم بقر معلب",
        subtitle: 'لحم بقر معلب "شيفكو" (SHEFKO)',
        tagline: "Energy Rich • High Protein",
        manufacturerTitle: "المُصنّع",
        manufacturer: 'شركة ذ.م.م "BM ESTATES AND TRADING"',
        addressTitle: "العنوان",
        address: "جمهورية أوزباكستان، مدينة طشقند، حي ألمازار، محلة إبراهيم أتا، شارع قاراصراي، منزل 324.",
        ingredientsTitle: "المكونات",
        ingredients: [
          { name: "لحم بقر", icon: GiMeat },
          { name: "ورق غار", icon: FaLeaf },
          { name: "فلفل أسود", icon: FaPepperHot },
          { name: "ملح", icon: FaCube },
          { name: "ماء", icon: FaWater }
        ],
        nutritionTitle: "القيمة الغذائية لكل 100 غرام",
        nutrition: [
          { label: "بروتين", val: "45 غ", pct: 90, icon: GiMuscleUp, color: "bg-[#c0392b]" },
          { label: "دهون", val: "17 غ", pct: 34, icon: GiDroplets, color: "bg-[#a78861]" },
          { label: "الطاقة", val: "213 سعرة", pct: 75, icon: FaFireAlt, color: "bg-[#d1ab7d]" }
        ],
        storageTitle: "شروط التخزين",
        storageText: "يُحفظ في درجة حرارة من 0° مئوية إلى +20° مئوية لمدة 24 شهرًا من تاريخ الإنتاج. بعد فتح العبوة، يُوصى بعدم حفظ المنتج لأكثر من 48 ساعة في درجة حرارة من +2° مئوية إلى +6° مئوية.",
        recommendationTitle: "توصية",
        recommendationText: "يُوصى بالتسخين قبل الاستهلاك."
      },
      tr: {
        code: "tr",
        label: "TURK",
        name: "Türkçe",
        flag: "🇹🇷",
        dir: "ltr",
        title: "DÖNER — Dana Konserve",
        subtitle: 'Dana Etli Konserve (Tuşonka) "SHEFKO"',
        tagline: "Energy Rich • High Protein",
        manufacturerTitle: "Üretici",
        manufacturer: '"BM ESTATES AND TRADING" LLC',
        addressTitle: "Adres",
        address: "Özbekistan Cumhuriyeti, Taşkent şehri, Olmazor ilçesi, İbrohim Ota MFY, Qorasaroy caddesi, No: 324.",
        ingredientsTitle: "İçindekiler",
        ingredients: [
          { name: "Dana eti", icon: GiMeat },
          { name: "Defne yaprağı", icon: FaLeaf },
          { name: "Karabiber", icon: FaPepperHot },
          { name: "Tuz", icon: FaCube },
          { name: "Su", icon: FaWater }
        ],
        nutritionTitle: "100 g ürün için besin değeri",
        nutrition: [
          { label: "Protein", val: "45 g", pct: 90, icon: GiMuscleUp, color: "bg-[#c0392b]" },
          { label: "Yağ", val: "17 g", pct: 34, icon: GiDroplets, color: "bg-[#a78861]" },
          { label: "Enerji değeri", val: "213 kcal", pct: 75, icon: FaFireAlt, color: "bg-[#d1ab7d]" }
        ],
        storageTitle: "Saklama Koşulları",
        storageText: "Üretim tarihinden itibaren 24 ay boyunca 0°C ile +20°C arasındaki sıcaklıkta saklayınız. Ambalaj açıldıktan sonra ürünün +2°C ile +6°C arasındaki sıcaklıkta 48 saatten fazla saklanmaması tavsiye edilir.",
        recommendationTitle: "Tavsiye",
        recommendationText: "Tüketmeden önce ısıtılması tavsiye edilir."
      }
    }
  },
  beef_doner: {
    id: "beef_doner",
    badgeIcon: GiMeatHook,
    tabLabel: "Mol Donar Konservasi",
    images: [tushoImg],
    languages: {
      uz: {
        code: "uz",
        label: "UZB",
        name: "O'zbekcha",
        flag: "🇺🇿",
        dir: "ltr",
        title: "DÖNER — Mol Donar Konservasi",
        subtitle: "Mol go‘shtidan tayyorlangan donar konservasi \"SHEFKO\"",
        tagline: "Energy Rich • Premium Taste",
        manufacturerTitle: "Ishlab chiqaruvchi",
        manufacturer: '"BM ESTATES AND TRADING" MCHJ',
        addressTitle: "Manzil",
        address: "O‘zbekiston Respublikasi, Toshkent shahri, Olmazor tumani, Ibrohim Ota MFY, Qorasaroy ko‘chasi, 324-uy.",
        ingredientsTitle: "Tarkibi",
        ingredients: [
          { name: "Mol go‘shti", icon: GiMeat },
          { name: "Mol yog‘i", icon: GiDroplets },
          { name: "Ziravorlar", icon: FaSeedling },
          { name: "Tuz", icon: FaCube },
          { name: "Eritilgan sariyog‘", icon: FaCube },
          { name: "Piyoz", icon: FaSeedling }
        ],
        nutritionTitle: "100 g mahsulot tarkibi",
        nutrition: [
          { label: "Oqsil", val: "15 g", pct: 38, icon: GiMuscleUp, color: "bg-[#c0392b]" },
          { label: "Yog‘lar", val: "43 g (sariyog'dan 33 g)", pct: 86, icon: GiDroplets, color: "bg-[#a78861]" },
          { label: "Uglevodlar", val: "0,7 g", pct: 15, icon: GiWheat, color: "bg-[#d1ab7d]" },
          { label: "Energiya qiymati", val: "450 kkal", pct: 95, icon: FaFireAlt, color: "bg-[#800000]" }
        ],
        storageTitle: "Saqlash sharoitlari",
        storageText: "Ishlab chiqarilgan kundan boshlab 24 oy davomida 0°C dan +20°C gacha bo'lgan haroratda saqlansin. Qadoq ochilgandan keyin mahsulotni +2°C dan +6°C gacha bo'lgan haroratda 24 soatdan ortiq saqlamang.",
        recommendationTitle: "Tavsiya",
        recommendationText: "Iste'mol qilishdan oldin isitish tavsiya etiladi."
      },
      ru: {
        code: "ru",
        label: "RUS",
        name: "Русский",
        flag: "🇷🇺",
        dir: "ltr",
        title: "DÖNER — Говяжий Донер",
        subtitle: 'Консервы из говядины (говяжий донер) "SHEFKO"',
        tagline: "Energy Rich • Premium Taste",
        manufacturerTitle: "Производитель",
        manufacturer: 'ООО "BM ESTATES AND TRADING"',
        addressTitle: "Адрес",
        address: "Республика Узбекистан, г. Ташкент, Алмазарский район, ССГ Иброхим Ота, ул. Карасарай, д. 324.",
        ingredientsTitle: "Состав",
        ingredients: [
          { name: "Говядина", icon: GiMeat },
          { name: "Говяжий жир", icon: GiDroplets },
          { name: "Специи", icon: FaSeedling },
          { name: "Соль", icon: FaCube },
          { name: "Топленое сливочное масло", icon: FaCube },
          { name: "Лук", icon: FaSeedling }
        ],
        nutritionTitle: "Пищевая ценность на 100 г продукта",
        nutrition: [
          { label: "Белки", val: "15 г", pct: 38, icon: GiMuscleUp, color: "bg-[#c0392b]" },
          { label: "Жиры", val: "43 г (из них сливочное 33 г)", pct: 86, icon: GiDroplets, color: "bg-[#a78861]" },
          { label: "Углеводы", val: "0,7 г", pct: 15, icon: GiWheat, color: "bg-[#d1ab7d]" },
          { label: "Энерг. ценность", val: "450 ккал", pct: 95, icon: FaFireAlt, color: "bg-[#800000]" }
        ],
        storageTitle: "Условия хранения",
        storageText: "Хранить при температуре от 0°C до +20°C в течение 24 месяцев со дня изготовления. После вскрытия упаковки не хранить продукт при температуре от +2°C до +6°C более 24 часов.",
        recommendationTitle: "Рекомендация",
        recommendationText: "Перед употреблением рекомендуется разогреть."
      },
      en: {
        code: "en",
        label: "ENG",
        name: "English",
        flag: "🇬🇧",
        dir: "ltr",
        title: "DÖNER — Beef Doner Canned",
        subtitle: 'Canned Beef Doner "SHEFKO"',
        tagline: "Energy Rich • Premium Taste",
        manufacturerTitle: "Manufacturer",
        manufacturer: '"BM ESTATES AND TRADING" LLC',
        addressTitle: "Address",
        address: "324 Qarasaroy str., Ibrohim Ota MFY, Olmazor district, Tashkent city, Republic of Uzbekistan.",
        ingredientsTitle: "Ingredients",
        ingredients: [
          { name: "Beef", icon: GiMeat },
          { name: "Beef fat", icon: GiDroplets },
          { name: "Spices", icon: FaSeedling },
          { name: "Salt", icon: FaCube },
          { name: "Ghee (Melted butter)", icon: FaCube },
          { name: "Onion", icon: FaSeedling }
        ],
        nutritionTitle: "Nutritional value per 100 g",
        nutrition: [
          { label: "Protein", val: "15 g", pct: 38, icon: GiMuscleUp, color: "bg-[#c0392b]" },
          { label: "Fats", val: "43 g (33 g ghee)", pct: 86, icon: GiDroplets, color: "bg-[#a78861]" },
          { label: "Carbohydrates", val: "0.7 g", pct: 15, icon: GiWheat, color: "bg-[#d1ab7d]" },
          { label: "Energy value", val: "450 kcal", pct: 95, icon: FaFireAlt, color: "bg-[#800000]" }
        ],
        storageTitle: "Storage conditions",
        storageText: "Store at temperatures from 0°C to +20°C for 24 months from the date of manufacture. After opening, do not store for more than 24 hours at +2°C to +6°C.",
        recommendationTitle: "Recommendation",
        recommendationText: "Heating before consumption is recommended."
      },
      ar: {
        code: "ar",
        label: "ARAB",
        name: "العربية",
        flag: "🇦🇪",
        dir: "rtl",
        title: "دونر — لحم بقر دونر",
        subtitle: 'دونر لحم بقر معلب "شيفكو" (SHEFKO)',
        tagline: "Energy Rich • Premium Taste",
        manufacturerTitle: "المُصنّع",
        manufacturer: 'شركة ذ.م.م "BM ESTATES AND TRADING"',
        addressTitle: "العنوان",
        address: "جمهورية أوزباكستان، مدينة طشقند، حي ألمازار، محلة إبراهيم أتا، شارع قاراصراي، منزل 324.",
        ingredientsTitle: "المكونات",
        ingredients: [
          { name: "لحم بقر", icon: GiMeat },
          { name: "دهن بقر", icon: GiDroplets },
          { name: "بهارات", icon: FaSeedling },
          { name: "ملح", icon: FaCube },
          { name: "سمن مذاب", icon: FaCube },
          { name: "بصل", icon: FaSeedling }
        ],
        nutritionTitle: "القيمة الغذائية لكل 100 غرام",
        nutrition: [
          { label: "بروتين", val: "15 غ", pct: 38, icon: GiMuscleUp, color: "bg-[#c0392b]" },
          { label: "دهون", val: "43 غ (33 غ سمن)", pct: 86, icon: GiDroplets, color: "bg-[#a78861]" },
          { label: "كربوهيدرات", val: "0.7 غ", pct: 15, icon: GiWheat, color: "bg-[#d1ab7d]" },
          { label: "الطاقة", val: "450 سعرة", pct: 95, icon: FaFireAlt, color: "bg-[#800000]" }
        ],
        storageTitle: "شروط التخزين",
        storageText: "يُحفظ في درجة حرارة من 0° مئوية إلى +20° مئوية لمدة 24 شهرًا من تاريخ الإنتاج. بعد فتح العبوة، لا تحفظ المنتج لأكثر من 24 ساعة في درجة حرارة من +2° مئوية إلى +6° مئوية.",
        recommendationTitle: "توصية",
        recommendationText: "يُوصى بالتسخين قبل الاستهلاك."
      },
      tr: {
        code: "tr",
        label: "TURK",
        name: "Türkçe",
        flag: "🇹🇷",
        dir: "ltr",
        title: "DÖNER — Dana Döner Konserve",
        subtitle: 'Dana Etli Döner Konservesi "SHEFKO"',
        tagline: "Energy Rich • Premium Taste",
        manufacturerTitle: "Üretici",
        manufacturer: '"BM ESTATES AND TRADING" LLC',
        addressTitle: "Adres",
        address: "Özbekistan Cumhuriyeti, Taşkent şehri, Olmazor ilçesi, İbrohim Ota MFY, Qorasaroy caddesi, No: 324.",
        ingredientsTitle: "İçindekiler",
        ingredients: [
          { name: "Dana eti", icon: GiMeat },
          { name: "Dana yağı", icon: GiDroplets },
          { name: "Baharatlar", icon: FaSeedling },
          { name: "Tuz", icon: FaCube },
          { name: "Eritilmiş tereyağı", icon: FaCube },
          { name: "Soğan", icon: FaSeedling }
        ],
        nutritionTitle: "100 g ürün için besin değeri",
        nutrition: [
          { label: "Protein", val: "15 g", pct: 38, icon: GiMuscleUp, color: "bg-[#c0392b]" },
          { label: "Yağ", val: "43 g (33 g tereyağı)", pct: 86, icon: GiDroplets, color: "bg-[#a78861]" },
          { label: "Karbonhidrat", val: "0.7 g", pct: 15, icon: GiWheat, color: "bg-[#d1ab7d]" },
          { label: "Enerji değeri", val: "450 kcal", pct: 95, icon: FaFireAlt, color: "bg-[#800000]" }
        ],
        storageTitle: "Saklama Koşulları",
        storageText: "Üretim tarihinden itibaren 24 ay boyunca 0°C ile +20°C arasında saklayınız. Ambalaj açıldıktan sonra +2°C ile +6°C arasında 24 saatten fazla saklamayınız.",
        recommendationTitle: "Tavsiye",
        recommendationText: "Tüketmeden önce ısıtılması tavsiye edilir."
      }
    }
  },
  chicken_doner: {
    id: "chicken_doner",
    badgeIcon: FaDrumstickBite,
    tabLabel: "Tovuq Donar Konservasi",
    images: [kavobImg],
    languages: {
      uz: {
        code: "uz",
        label: "UZB",
        name: "O'zbekcha",
        flag: "🇺🇿",
        dir: "ltr",
        title: "DÖNER — Tovuq Donar Konservasi",
        subtitle: "Tovuq go‘shtidan tayyorlangan donar konservasi \"SHEFKO\"",
        tagline: "Energy Rich • Delicious Taste",
        manufacturerTitle: "Ishlab chiqaruvchi",
        manufacturer: '"BM ESTATES AND TRADING" MCHJ',
        addressTitle: "Manzil",
        address: "O‘zbekiston Respublikasi, Toshkent shahri, Olmazor tumani, Ibrohim Ota MFY, Qorasaroy ko‘chasi, 324-uy.",
        ingredientsTitle: "Tarkibi",
        ingredients: [
          { name: "Tovuq go‘shti", icon: FaDrumstickBite },
          { name: "Eritilgan sariyog‘ va/yoki o‘simlik yog‘i", icon: GiDroplets },
          { name: "Ziravorlar", icon: FaSeedling },
          { name: "Tuz", icon: FaCube },
          { name: "Piyoz", icon: FaSeedling }
        ],
        nutritionTitle: "100 g mahsulot tarkibi",
        nutrition: [
          { label: "Oqsil", val: "18 g", pct: 45, icon: GiMuscleUp, color: "bg-[#c0392b]" },
          { label: "Yog‘lar", val: "32 g", pct: 64, icon: GiDroplets, color: "bg-[#a78861]" },
          { label: "Uglevodlar", val: "0,7 g", pct: 15, icon: GiWheat, color: "bg-[#d1ab7d]" },
          { label: "Energiya qiymati", val: "365 kkal", pct: 90, icon: FaFireAlt, color: "bg-[#800000]" }
        ],
        storageTitle: "Saqlash sharoitlari va yaroqlilik muddati",
        storageText: "Ishlab chiqarilgan kundan boshlab 24 oydan oshmagan muddatda, 0°C dan +20°C gacha haroratda saqlansin. Qadoq ochilgandan keyin mahsulotni +2°C dan +6°C haroratda 24 soatdan ortiq saqlamaslik tavsiya etiladi.",
        recommendationTitle: "Tavsiya",
        recommendationText: "Iste'mol qilishdan oldin isitish tavsiya etiladi."
      },
      ru: {
        code: "ru",
        label: "RUS",
        name: "Русский",
        flag: "🇷🇺",
        dir: "ltr",
        title: "DÖNER — Куриный Донер",
        subtitle: 'Консервы из мяса птицы (куриный донер) "SHEFKO"',
        tagline: "Energy Rich • Delicious Taste",
        manufacturerTitle: "Производитель",
        manufacturer: 'ООО "BM ESTATES AND TRADING"',
        addressTitle: "Адрес",
        address: "Республика Узбекистан, г. Ташкент, Алмазарский район, ССГ Иброхим Ота, ул. Карасарай, д. 324.",
        ingredientsTitle: "Состав",
        ingredients: [
          { name: "Мясо курицы", icon: FaDrumstickBite },
          { name: "Топленое сливочное и/или растительное масло", icon: GiDroplets },
          { name: "Специи", icon: FaSeedling },
          { name: "Соль", icon: FaCube },
          { name: "Лук", icon: FaSeedling }
        ],
        nutritionTitle: "Пищевая ценность на 100 г продукта",
        nutrition: [
          { label: "Белки", val: "18 г", pct: 45, icon: GiMuscleUp, color: "bg-[#c0392b]" },
          { label: "Жиры", val: "32 г", pct: 64, icon: GiDroplets, color: "bg-[#a78861]" },
          { label: "Углеводы", val: "0,7 г", pct: 15, icon: GiWheat, color: "bg-[#d1ab7d]" },
          { label: "Энерг. ценность", val: "365 ккал", pct: 90, icon: FaFireAlt, color: "bg-[#800000]" }
        ],
        storageTitle: "Условия хранения и срок годности",
        storageText: "Хранить при температуре от 0°C до +20°C не более 24 месяцев со дня изготовления. После вскрытия упаковки рекомендуется хранить продукт при температуре от +2°C до +6°C не более 24 часов.",
        recommendationTitle: "Рекомендация",
        recommendationText: "Перед употреблением рекомендуется разогреть."
      },
      en: {
        code: "en",
        label: "ENG",
        name: "English",
        flag: "🇬🇧",
        dir: "ltr",
        title: "DÖNER — Chicken Doner",
        subtitle: 'Canned Chicken Doner "SHEFKO"',
        tagline: "Energy Rich • Delicious Taste",
        manufacturerTitle: "Manufacturer",
        manufacturer: '"BM ESTATES AND TRADING" LLC',
        addressTitle: "Address",
        address: "324 Qarasaroy str., Ibrohim Ota MFY, Olmazor district, Tashkent city, Republic of Uzbekistan.",
        ingredientsTitle: "Ingredients",
        ingredients: [
          { name: "Chicken meat", icon: FaDrumstickBite },
          { name: "Ghee and/or vegetable oil", icon: GiDroplets },
          { name: "Spices", icon: FaSeedling },
          { name: "Salt", icon: FaCube },
          { name: "Onion", icon: FaSeedling }
        ],
        nutritionTitle: "Nutritional value per 100 g",
        nutrition: [
          { label: "Protein", val: "18 g", pct: 45, icon: GiMuscleUp, color: "bg-[#c0392b]" },
          { label: "Fats", val: "32 g", pct: 64, icon: GiDroplets, color: "bg-[#a78861]" },
          { label: "Carbohydrates", val: "0.7 g", pct: 15, icon: GiWheat, color: "bg-[#d1ab7d]" },
          { label: "Energy value", val: "365 kcal", pct: 90, icon: FaFireAlt, color: "bg-[#800000]" }
        ],
        storageTitle: "Storage conditions & Shelf life",
        storageText: "Store at temperatures from 0°C to +20°C for no more than 24 months from the date of manufacture. After opening, it is recommended to store the product at temperatures from +2°C to +6°C for no more than 24 hours.",
        recommendationTitle: "Recommendation",
        recommendationText: "Heating before consumption is recommended."
      },
      ar: {
        code: "ar",
        label: "ARAB",
        name: "العربية",
        flag: "🇦🇪",
        dir: "rtl",
        title: "دونر — دجاج",
        subtitle: 'دونر دجاج معلب "شيفكو" (SHEFKO)',
        tagline: "Energy Rich • Delicious Taste",
        manufacturerTitle: "المُصنّع",
        manufacturer: 'شركة ذ.م.م "BM ESTATES AND TRADING"',
        addressTitle: "العنوان",
        address: "جمهورية أوزباكستان، مدينة طشقند، حي ألمازار، محلة إبراهيم أتا، شارع قاراصراي، منزل 324.",
        ingredientsTitle: "المكونات",
        ingredients: [
          { name: "لحم دجاج", icon: FaDrumstickBite },
          { name: "سمن مذاب و/أو زيت نباتي", icon: GiDroplets },
          { name: "بهارات", icon: FaSeedling },
          { name: "ملح", icon: FaCube },
          { name: "بصل", icon: FaSeedling }
        ],
        nutritionTitle: "القيمة الغذائية لكل 100 غرام",
        nutrition: [
          { label: "بروتين", val: "18 غ", pct: 45, icon: GiMuscleUp, color: "bg-[#c0392b]" },
          { label: "دهون", val: "32 غ", pct: 64, icon: GiDroplets, color: "bg-[#a78861]" },
          { label: "كربوهيدرات", val: "0.7 غ", pct: 15, icon: GiWheat, color: "bg-[#d1ab7d]" },
          { label: "الطاقة", val: "365 سعرة", pct: 90, icon: FaFireAlt, color: "bg-[#800000]" }
        ],
        storageTitle: "شروط التخزين ومدة الصلاحية",
        storageText: "يُحفظ في درجة حرارة من 0° مئوية إلى +20° مئوية لمدة لا تتجاوز 24 شهرًا من تاريخ الإنتاج. بعد فتح العبوة، يُوصى بعدم حفظ المنتج لأكثر من 24 ساعة في درجة حرارة من +2° مئوية إلى +6° مئوية.",
        recommendationTitle: "توصية",
        recommendationText: "يُوصى بالتسخين قبل الاستهلاك."
      },
      tr: {
        code: "tr",
        label: "TURK",
        name: "Türkçe",
        flag: "🇹🇷",
        dir: "ltr",
        title: "DÖNER — Tavuk Döner",
        subtitle: 'Tavuk Etli Döner Konservesi "SHEFKO"',
        tagline: "Energy Rich • Delicious Taste",
        manufacturerTitle: "Üretici",
        manufacturer: '"BM ESTATES AND TRADING" LLC',
        addressTitle: "Adres",
        address: "Özbekistan Cumhuriyeti, Taşkent şehri, Olmazor ilçesi, İbrohim Ota MFY, Qorasaroy caddesi, No: 324.",
        ingredientsTitle: "İçindekiler",
        ingredients: [
          { name: "Tavuk eti", icon: FaDrumstickBite },
          { name: "Eritilmiş tereyağı ve/veya bitkisel yağ", icon: GiDroplets },
          { name: "Baharatlar", icon: FaSeedling },
          { name: "Tuz", icon: FaCube },
          { name: "Soğan", icon: FaSeedling }
        ],
        nutritionTitle: "100 g ürün için besin değeri",
        nutrition: [
          { label: "Protein", val: "18 g", pct: 45, icon: GiMuscleUp, color: "bg-[#c0392b]" },
          { label: "Yağ", val: "32 g", pct: 64, icon: GiDroplets, color: "bg-[#a78861]" },
          { label: "Karbonhidrat", val: "0.7 g", pct: 15, icon: GiWheat, color: "bg-[#d1ab7d]" },
          { label: "Enerji değeri", val: "365 kcal", pct: 90, icon: FaFireAlt, color: "bg-[#800000]" }
        ],
        storageTitle: "Saklama Koşulları ve Raf Ömrü",
        storageText: "Üretim tarihinden itibaren 24 ayı geçmemek kaydıyla 0°C ile +20°C arasında saklayınız. Ambalaj açıldıktan sonra +2°C ile +6°C arasında 24 saatten fazla saklanmaması tavsiye edilir.",
        recommendationTitle: "Tavsiye",
        recommendationText: "Tüketmeden önce ısıtılması tavsiye edilir."
      }
    }
  }
};

const DonerProduct = () => {
  const { i18n } = useTranslation();
  const [selectedProductKey, setSelectedProductKey] = useState("beef_tushonka");
  const [activeLang, setActiveLang] = useState("uz");
  const [selectedImg, setSelectedImg] = useState(tushoImg);

  // Sync with global site i18n language
  useEffect(() => {
    const currentLang = i18n.language || "uz";
    if (products.beef_tushonka.languages[currentLang]) {
      setActiveLang(currentLang);
    }
  }, [i18n.language]);

  const handleProductSwitch = (prodKey) => {
    setSelectedProductKey(prodKey);
    setSelectedImg(products[prodKey].images[0]);
  };

  const activeProduct = products[selectedProductKey];
  const langData = activeProduct.languages[activeLang] || activeProduct.languages.uz;
  const ProductIcon = activeProduct.badgeIcon;

  return (
    <section id="doner-product" className="py-16 sm:py-24 bg-gray-50 text-gray-900 overflow-hidden relative">
      <div className="container relative z-10">

        {/* ── Section Header (Matches SHEFKO Site Style) ── */}
        <div className="text-center mb-12">
          <p className="text-[#c0392b] text-xs font-bold uppercase tracking-[4px] mb-3">
            MAHSULOTLAR / PRODUCTS
          </p>
          <h2 className="oswald text-3xl sm:text-5xl font-semibold text-gray-900 uppercase leading-tight">
            SHEFKO DÖNER
          </h2>
          <div className="w-16 h-[3px] bg-[#c0392b] mx-auto mt-4 rounded-full" />
        </div>

        {/* ── 1. Product Selector Tabs (Professional Gold/Red Styling) ── */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-white shadow-md border border-gray-200">
            {Object.keys(products).map((pKey) => {
              const pItem = products[pKey];
              const IconComp = pItem.badgeIcon;
              const isSelected = selectedProductKey === pKey;
              return (
                <button
                  key={pKey}
                  onClick={() => handleProductSwitch(pKey)}
                  className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 ${isSelected
                    ? "bg-red-800 text-white shadow-lg shadow-red-800/30 scale-102"
                    : "text-gray-600 hover:text-red-800 hover:bg-gray-100"
                    }`}
                >
                  <IconComp className={`text-base ${isSelected ? "text-[#d1ab7d]" : "text-red-800"}`} />
                  <span>{pItem.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 2. 5-Language Selector Bar ── */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-10">
          {Object.keys(activeProduct.languages).map((code) => {
            const item = activeProduct.languages[code];
            const isActive = activeLang === code;
            return (
              <button
                key={code}
                onClick={() => setActiveLang(code)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 ${isActive
                  ? "bg-[#441118] text-white shadow-md border border-[#a78861]"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-red-800/40 hover:bg-gray-50"
                  }`}
              >
                <span className="text-base">{item.flag}</span>
                <span>{item.label}</span>
                <span className="text-[11px] opacity-75 hidden sm:inline">({item.name})</span>
              </button>
            );
          })}
        </div>

        {/* ── 3. Main Split Card Container (Matches Site Aesthetics) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-200">

          {/* Left Column: Red Brand Panel & Image Showcase */}
          <div className="lg:col-span-5 bg-red-800 p-8 lg:p-10 text-white relative flex flex-col items-center justify-between overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full border border-white/10" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full border border-white/10" />

            {/* Top Badges */}
            <div className="w-full flex justify-between items-center z-10 mb-6">
              <span className="bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-xs font-bold text-[#d1ab7d] flex items-center gap-1.5">
                <FaShieldAlt className="text-[#d1ab7d]" /> 100% HALAL
              </span>
              <span className="bg-[#a78861] text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1">
                <ProductIcon className="text-sm" />
                {activeProduct.tabLabel}
              </span>
            </div>

            {/* Main Product Image */}
            <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-gray-900 group z-10">
              <ImgSkeleton
                src={selectedImg}
                alt={langData.title}
                className="w-full h-full"
                imgClass="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex items-center gap-3 mt-6 z-10">
              {activeProduct.images.map((imgSrc, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImg(imgSrc)}
                  className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all duration-300 ${selectedImg === imgSrc
                    ? "border-[#d1ab7d] scale-105 shadow-md"
                    : "border-white/30 opacity-60 hover:opacity-100"
                    }`}
                >
                  <img src={imgSrc} alt="thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Bottom Shelf Life Accent */}
            <div className="mt-6 z-10 text-center text-xs text-red-200 flex items-center gap-2">
              <FaClock className="text-[#d1ab7d]" />
              <span>Yaroqlilik muddati: 24 Oy / 24 Months</span>
            </div>
          </div>

          {/* Right Column: Detailed Product Info */}
          <div
            className={`lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between ${langData.dir === "rtl" ? "text-right" : "text-left"
              }`}
            dir={langData.dir}
          >
            {/* Title & Tagline */}
            <div>
              <p className="text-[#c0392b] text-xs font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
                <FaAward className="text-[#a78861]" /> {langData.tagline}
              </p>
              <h3 className="oswald text-3xl sm:text-4xl font-bold text-gray-900 uppercase leading-tight">
                {langData.title}
              </h3>
              <p className="text-lg text-gray-600 font-medium mt-1">
                {langData.subtitle}
              </p>
              <div className="w-12 h-1 bg-[#c0392b] mt-3 rounded-full" />
            </div>

            {/* Producer & Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 bg-gray-50 p-5 rounded-2xl border border-gray-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-800 text-[#d1ab7d] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <FaBuilding className="text-base" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold text-gray-400 block">
                    {langData.manufacturerTitle}
                  </span>
                  <p className="text-sm font-semibold text-gray-900 mt-0.5">
                    {langData.manufacturer}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#a78861] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <FaMapMarkerAlt className="text-base" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold text-gray-400 block">
                    {langData.addressTitle}
                  </span>
                  <p className="text-xs text-gray-700 mt-0.5 leading-snug">
                    {langData.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Ingredients (Tarkibi) */}
            <div className="mb-6">
              <h4 className="oswald text-base uppercase font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <FaUtensils className="text-[#c0392b]" /> {langData.ingredientsTitle}
              </h4>
              <div className="flex flex-wrap gap-2">
                {langData.ingredients.map((item, idx) => {
                  const IngredientIcon = item.icon;
                  return (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl bg-gray-100 border border-gray-200 text-xs font-semibold text-gray-800 flex items-center gap-2 shadow-xs"
                    >
                      <IngredientIcon className="text-[#c0392b] text-sm" />
                      <span>{item.name}</span>
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Nutritional Values */}
            <div className="mb-6 bg-red-50/60 p-5 rounded-2xl border border-red-100">
              <h4 className="oswald text-base uppercase font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FaDna className="text-[#c0392b]" /> {langData.nutritionTitle}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                {langData.nutrition.map((item, idx) => {
                  const NutIcon = item.icon;
                  return (
                    <div key={idx} className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
                      <span className="text-[11px] font-medium text-gray-500 block">{item.label}</span>
                      <div className="my-1 flex items-center justify-center gap-1">
                        <NutIcon className="text-red-800 text-xs" />
                        <span className="oswald text-lg font-bold text-gray-900">
                          {item.val}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                        <div className={`${item.color} h-full rounded-full`} style={{ width: `${item.pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Storage & Recommendation */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 text-xs">
              <div className="sm:col-span-8 bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-start gap-3">
                <FaTemperatureLow className="text-red-800 text-lg shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-gray-900 block mb-0.5">{langData.storageTitle}:</span>
                  <p className="text-gray-600 leading-snug">{langData.storageText}</p>
                </div>
              </div>
              <div className="sm:col-span-4 bg-red-800 text-white p-4 rounded-xl flex items-center justify-center text-center shadow-sm">
                <div>
                  <span className="font-bold text-[#d1ab7d] block mb-0.5 flex items-center justify-center gap-1">
                    <FaFireAlt /> {langData.recommendationTitle}
                  </span>
                  <p className="text-red-100 font-medium leading-snug">{langData.recommendationText}</p>
                  <a
                    href="#heating"
                    className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full bg-[#a78861] hover:bg-[#d1ab7d] text-white text-[11px] font-semibold transition-all shadow-xs"
                  >
                    <FaPlay className="text-[9px]" /> Videoni ko'rish
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DonerProduct;
