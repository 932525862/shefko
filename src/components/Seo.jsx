import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE = "https://www.shefko.uz";

const pages = {
  "/": {
    title: "Shefko — Halol Tushonka, Doner va Qozon Kabob | O‘zbekiston",
    description:
      "SHEFKO — O‘zbekistonda ishlab chiqarilgan 100% halol go‘sht konservalari: mol go‘shtidan tushonka, doner va qozon kabob. Tabiiy tarkib, 24 oy saqlash muddati.",
  },
  "/products": {
    title: "Mahsulotlar — Tushonka, Doner, Qozon Kabob | Shefko",
    description:
      "SHEFKO mahsulotlari: mol go‘shtidan tushonka, doner va qozon kabob. Tarkibi, ozuqaviy qiymati va saqlash shartlari.",
  },
  "/about": {
    title: "Biz haqimizda | Shefko",
    description:
      "SHEFKO brendi va “BM ESTATES AND TRADING” MCHJ haqida: halol go‘sht konservalarini ishlab chiqaruvchi O‘zbekiston kompaniyasi.",
  },
  "/production": {
    title: "Ishlab chiqarish texnologiyasi | Shefko",
    description:
      "SHEFKO go‘sht konservalari qanday ishlab chiqariladi: zamonaviy uskunalar, sifat nazorati va halol standartlari.",
  },
  "/export": {
    title: "Eksport va hamkorlik | Shefko",
    description:
      "SHEFKO halol go‘sht konservalarini eksport qilish va distribyutor bo‘lish imkoniyatlari.",
  },
  "/feedback": {
    title: "Aloqa | Shefko",
    description: "SHEFKO bilan bog‘laning: buyurtma, ulgurji savdo va hamkorlik bo‘yicha savollar.",
  },
  "/info": {
    title: "Mahsulot haqida ma’lumot | Shefko",
    description: "SHEFKO tushonka mahsuloti haqida to‘liq ma’lumot: tarkibi, ozuqaviy qiymati, saqlash shartlari.",
  },
};

const setMeta = (selector, attr, value) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = pages[pathname] || pages["/"];
    const url = SITE + (pathname === "/" ? "/" : pathname);

    document.title = page.title;
    setMeta('meta[name="description"]', "content", page.description);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:title"]', "content", page.title);
    setMeta('meta[property="og:description"]', "content", page.description);
  }, [pathname]);

  return null;
};

export default Seo;
