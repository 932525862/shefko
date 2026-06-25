import React, { useState } from "react";

/* ─── Base block ──────────────────────────────────── */
export const Sk = ({ className = "" }) => (
  <div className={`animate-pulse bg-gray-200 rounded-lg ${className}`} />
);

/* ─── Image wrapper: shows skeleton until onLoad ──── */
export const ImgSkeleton = ({ src, alt = "", className = "", imgClass = "" }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-200 z-10" />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`${imgClass} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
};

/* ─── Section skeletons ──────────────────────────── */

/* 1. SwiperSection */
export const SkSwiper = () => (
  <section>
    <Sk className="h-[300px] sm:h-[400px] w-full rounded-none" />
    <div className="h-[600px] bg-gray-100 flex flex-col items-center justify-center gap-6 px-6">
      <Sk className="h-8 w-72 mx-auto" />
      <Sk className="h-4 w-full max-w-lg" />
      <Sk className="h-4 w-4/5 max-w-lg" />
      <Sk className="h-4 w-3/4 max-w-lg" />
      <div className="flex gap-2 mt-4">
        {[...Array(3)].map((_, i) => (
          <Sk key={i} className="w-3 h-3 rounded-full" />
        ))}
      </div>
    </div>
  </section>
);

/* 2. WhyShefko */
export const SkWhy = () => (
  <section className="py-16 sm:py-24 bg-gray-50">
    <div className="container">
      <div className="flex flex-col items-center gap-3 mb-12">
        <Sk className="h-3 w-32" />
        <Sk className="h-9 w-64" />
        <Sk className="h-1 w-16" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md">
            <Sk className="h-52 rounded-none" />
            <div className="h-1 bg-red-100" />
            <div className="p-6 flex flex-col items-center gap-3">
              <Sk className="h-4 w-3/4" />
              <Sk className="h-3 w-full" />
              <Sk className="h-3 w-5/6" />
              <Sk className="h-3 w-4/6" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* 3. Taqvo (Products) */
export const SkTaqvo = () => (
  <section className="bg-red-100 py-14">
    <div className="container mb-16">
      <div className="flex justify-between items-center">
        <Sk className="h-8 w-64 bg-red-200" />
        <Sk className="h-10 w-40 rounded-full bg-red-200 hidden lg:block" />
      </div>
    </div>
    <div className="flex gap-4 px-4 mb-4 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <Sk key={i} className="w-[280px] h-[280px] flex-shrink-0 rounded-2xl bg-red-200" />
      ))}
    </div>
    <div className="flex gap-4 px-4 overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <Sk key={i} className="w-[180px] h-[180px] flex-shrink-0 rounded-2xl bg-red-200" />
      ))}
    </div>
  </section>
);

/* 4. ProductionTechnology */
export const SkProduction = () => (
  <section className="py-16 sm:py-24 bg-white">
    <div className="container">
      <div className="flex flex-col items-center gap-3 mb-12">
        <Sk className="h-3 w-44" />
        <Sk className="h-9 w-80" />
        <Sk className="h-1 w-16" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] rounded-3xl overflow-hidden shadow-2xl">
        <div className="bg-red-100 px-10 py-14 flex flex-col gap-4">
          <Sk className="h-3 w-28 bg-red-200" />
          <Sk className="h-7 w-full bg-red-200" />
          <Sk className="h-7 w-4/5 bg-red-200" />
          <Sk className="h-[3px] w-14 bg-red-200" />
          {[...Array(4)].map((_, i) => (
            <Sk key={i} className="h-4 w-full bg-red-200" />
          ))}
          <Sk className="h-14 w-48 rounded-2xl bg-red-200 mt-6" />
        </div>
        <div className="bg-gray-50 px-10 py-12 flex flex-col gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-start gap-5">
              <Sk className="w-[54px] h-[54px] rounded-full flex-shrink-0" />
              <div className="flex-1 flex flex-col gap-2 pt-1">
                <div className="flex gap-2 items-center">
                  <Sk className="h-2 w-6" />
                  <Sk className="h-px flex-1" />
                </div>
                <Sk className="h-4 w-2/5" />
                <Sk className="h-3 w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* 5. Certificates */
export const SkCertificates = () => (
  <div className="pt-20 sm:pt-32 pb-20 bg-gray-200 animate-pulse">
    <div className="container flex flex-col items-center gap-8">
      <Sk className="h-8 w-56 bg-gray-300" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full">
        {[...Array(3)].map((_, i) => (
          <Sk key={i} className="h-80 bg-gray-300" />
        ))}
      </div>
    </div>
  </div>
);

/* 6. ExportReadiness */
export const SkExport = () => (
  <section className="py-16 sm:py-24 bg-gray-50">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex flex-col gap-4">
          <Sk className="h-3 w-40" />
          <Sk className="h-72 w-full rounded-3xl" />
          <div className="flex gap-6 justify-center mt-2">
            <Sk className="h-3 w-24" />
            <Sk className="h-3 w-28" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Sk className="h-3 w-32" />
          <Sk className="h-9 w-full" />
          <Sk className="h-9 w-3/4" />
          <Sk className="h-1 w-14" />
          <Sk className="h-4 w-full" />
          <Sk className="h-4 w-5/6" />
          <div className="grid grid-cols-2 gap-3 mt-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-sm flex flex-col gap-2">
                <Sk className="h-7 w-7" />
                <Sk className="h-4 w-3/4" />
                <Sk className="h-3 w-full" />
                <Sk className="h-3 w-4/5" />
              </div>
            ))}
          </div>
          <Sk className="h-28 rounded-2xl mt-2" />
        </div>
      </div>
    </div>
  </section>
);

/* 7. BecomeDistributor */
export const SkDistributor = () => (
  <section className="py-16 sm:py-24 bg-red-100">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div className="flex flex-col gap-4">
          <Sk className="h-3 w-32 bg-red-200" />
          <Sk className="h-9 w-full bg-red-200" />
          <Sk className="h-9 w-3/4 bg-red-200" />
          <Sk className="h-[3px] w-14 bg-red-200" />
          {[...Array(3)].map((_, i) => (
            <Sk key={i} className="h-4 w-full bg-red-200" />
          ))}
          <div className="flex flex-col gap-3 mt-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <Sk className="w-5 h-5 rounded-full flex-shrink-0 bg-red-200" />
                <Sk className="h-3 flex-1 bg-red-200" />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-red-200/40 rounded-3xl p-8 flex flex-col gap-4">
          <Sk className="h-5 w-48 bg-red-200" />
          <Sk className="h-10 rounded-lg bg-red-200" />
          <div className="grid grid-cols-2 gap-4">
            {[...Array(6)].map((_, i) => (
              <Sk key={i} className="h-10 rounded-lg bg-red-200" />
            ))}
          </div>
          <Sk className="h-24 rounded-lg bg-red-200" />
          <Sk className="h-12 rounded-xl bg-red-200 mt-1" />
        </div>
      </div>
    </div>
  </section>
);
