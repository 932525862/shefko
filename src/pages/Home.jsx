import React, { useState, useEffect } from 'react'
import Hero from '../components/home/Hero'
import DonerProduct from '../components/home/DonerProduct'
import WhyShefko from '../components/home/WhyShefko'
import ProductionTechnology from '../components/home/ProductionTechnology'
import Sertifikat from "../components/Sertifikat"
import ExportReadiness from '../components/home/ExportReadiness'
import BecomeDistributor from '../components/home/BecomeDistributor'
import Contact from '../components/Contact'
import RevealSection from '../components/ui/RevealSection'
import {
  SkDoner,
  SkWhy,
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
    <main className="bg-gradient-to-b from-[#1a0305] to-[#0f0000]">
      {/* 1. Hero */}
      <Hero isOpen={isOpen} setIsOpen={setIsOpen} openModal={openModal} />

      {/* 2. Products */}
      <section id="products">
        {ready ? (
          <RevealSection>
            <DonerProduct />
          </RevealSection>
        ) : (
          <SkDoner />
        )}
      </section>

      {/* 3. Company (Why Us) */}
      <section id="about">
        {ready ? (
          <RevealSection>
            <WhyShefko />
          </RevealSection>
        ) : (
          <SkWhy />
        )}
      </section>

      {/* 4. Factory/Production */}
      <section id="production">
        {ready ? (
          <RevealSection>
            <ProductionTechnology />
          </RevealSection>
        ) : (
          <SkProduction />
        )}
      </section>

      {/* 5. Quality/Certificates */}
      <section id="certificates">
        {ready ? (
          <RevealSection>
            <Sertifikat />
          </RevealSection>
        ) : (
          <SkCertificates />
        )}
      </section>

      {/* 6. Export & Distribution */}
      <section id="export">
        {ready ? (
          <RevealSection>
            <ExportReadiness />
            <BecomeDistributor />
          </RevealSection>
        ) : (
          <>
            <SkExport />
            <SkDistributor />
          </>
        )}
      </section>

      {/* 7. Contact */}
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

