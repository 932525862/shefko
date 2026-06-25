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
import {
  SkSwiper,
  SkWhy,
  SkTaqvo,
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
      {/* 1. Hero — always visible, no skeleton needed */}
      <Hero isOpen={isOpen} setIsOpen={setIsOpen} openModal={openModal} />

      {/* 2. About SHEFKO */}
      {ready ? (
        <div className="fade-in"><SwiperSection /></div>
      ) : (
        <SkSwiper />
      )}

      {/* 3. Why SHEFKO */}
      {ready ? (
        <div className="fade-in"><WhyShefko /></div>
      ) : (
        <SkWhy />
      )}

      {/* 4. Products */}
      {ready ? (
        <div className="fade-in"><Taqvo /></div>
      ) : (
        <SkTaqvo />
      )}

      {/* 5. Production Technology */}
      {ready ? (
        <div className="fade-in"><ProductionTechnology /></div>
      ) : (
        <SkProduction />
      )}

      {/* 6. Certificates */}
      {ready ? (
        <div className="fade-in"><Sertifikat /></div>
      ) : (
        <SkCertificates />
      )}

      {/* 7. Export Readiness */}
      {ready ? (
        <div className="fade-in"><ExportReadiness /></div>
      ) : (
        <SkExport />
      )}

      {/* 8. Become Distributor */}
      {ready ? (
        <div className="fade-in"><BecomeDistributor /></div>
      ) : (
        <SkDistributor />
      )}

      {/* 9. Contact */}
      {ready ? (
        <div className="fade-in"><Contact /></div>
      ) : null}
    </main>
  )
}

export default Home
