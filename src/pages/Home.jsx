import React, { useState, useEffect } from 'react'
import Hero from '../components/home/Hero'
import Contact from '../components/Contact'
import SwiperSection from '../components/swiper/SwiperSection'
import Sertifikat from "../components/Sertifikat"
import RevealSection from '../components/ui/RevealSection'
import {
  SkSwiper,
  SkCertificates,
} from '../components/ui/Skeleton'

const Home = ({ isOpen, setIsOpen, openModal }) => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 700)
    return () => clearTimeout(t)
  }, [])

  return (
    <main>
      {/* 1. Hero */}
      <Hero isOpen={isOpen} setIsOpen={setIsOpen} openModal={openModal} />

      {/* 2. About SHEFKO */}
      <section id="about">
        {ready ? (
          <RevealSection>
            <SwiperSection />
          </RevealSection>
        ) : (
          <SkSwiper />
        )}
      </section>

      {/* 3. Certificates */}
      <section id="certificates">
        {ready ? (
          <RevealSection>
            <Sertifikat />
          </RevealSection>
        ) : (
          <SkCertificates />
        )}
      </section>

      {/* 4. Contact */}
      <section id="contact">
        {ready ? (
          <RevealSection>
            <Contact />
          </RevealSection>
        ) : null}
      </section>
    </main>
  )
}

export default Home

