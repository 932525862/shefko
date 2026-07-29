import React, { useState, useEffect } from 'react'
import Hero from '../components/home/Hero'
import WhyShefko from '../components/home/WhyShefko'
import ProductionTechnology from '../components/home/ProductionTechnology'
import ExportReadiness from '../components/home/ExportReadiness'
import BecomeDistributor from '../components/home/BecomeDistributor'
import Contact from '../components/Contact'
import Taqvo from '../components/Taqvo'
import SwiperSection from '../components/swiper/SwiperSection'
import Sertifikat from "../components/Sertifikat"
import RevealSection from '../components/ui/RevealSection'
import DonerProduct from '../components/home/DonerProduct'
import {
  SkSwiper,
  SkWhy,
  SkTaqvo,
  SkDoner,
  SkProduction,
  SkCertificates,
  SkExport,
  SkDistributor,
} from '../components/ui/Skeleton'

const Home = ({ isOpen, setIsOpen, openModal }) => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 700)
    return () => clearTimeout(t)
  }, [])

  return (
    <main>
      {/* 1. Hero — scroll animatsiyasiz */}
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

      {/* 3. Why SHEFKO */}
      <section id="why">
        {ready ? (
          <RevealSection>
            <WhyShefko />
          </RevealSection>
        ) : (
          <SkWhy />
        )}
      </section>

      {/* 4. Products */}
      <section id="products">
        {ready ? (
          <RevealSection>
            <Taqvo />
          </RevealSection>
        ) : (
          <SkTaqvo />
        )}
      </section>

      {/* 4.5. DÖNER Detailed Product Specs */}
      <section id="doner">
        {ready ? (
          <RevealSection>
            <DonerProduct />
          </RevealSection>
        ) : (
          <SkDoner />
        )}
      </section>

      {/* 5. Production Technology */}
      <section id="production">
        {ready ? (
          <RevealSection>
            <ProductionTechnology />
          </RevealSection>
        ) : (
          <SkProduction />
        )}
      </section>

      {/* 6. Certificates */}
      <section id="certificates">
        {ready ? (
          <RevealSection>
            <Sertifikat />
          </RevealSection>
        ) : (
          <SkCertificates />
        )}
      </section>

      {/* 7. Export Readiness */}
      <section id="export">
        {ready ? (
          <RevealSection>
            <ExportReadiness />
          </RevealSection>
        ) : (
          <SkExport />
        )}
      </section>

      {/* 8. Become Distributor */}
      <section id="distributor">
        {ready ? (
          <RevealSection>
            <BecomeDistributor />
          </RevealSection>
        ) : (
          <SkDistributor />
        )}
      </section>

      {/* 9. Contact */}
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
