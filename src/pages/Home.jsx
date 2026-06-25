import React from 'react'
import Hero from '../components/home/Hero'
import WhyShefko from '../components/home/WhyShefko'
import ProductionTechnology from '../components/home/ProductionTechnology'
import ExportReadiness from '../components/home/ExportReadiness'
import BecomeDistributor from '../components/home/BecomeDistributor'
import Contact from '../components/Contact'
import Taqvo from '../components/Taqvo'
import SwiperSection from '../components/swiper/SwiperSection'
import Sertifikat from "../components/Sertifikat"

const Home = ({isOpen, setIsOpen, openModal}) => {
  return (
    <main>
        {/* 1. Hero Banner */}
        <Hero isOpen={isOpen} setIsOpen={setIsOpen} openModal={openModal}/>
        {/* 2. About SHEFKO */}
        <SwiperSection/>
        {/* 3. Why SHEFKO */}
        <WhyShefko/>
        {/* 4. Products */}
        <Taqvo/>
        {/* 5. Production Technology */}
        <ProductionTechnology/>
        {/* 6. Certificates */}
        <Sertifikat/>
        {/* 7. Export Readiness */}
        <ExportReadiness/>
        {/* 8. Become Distributor */}
        <BecomeDistributor/>
        {/* 9. Contact */}
        <Contact/>
    </main>
  )
}

export default Home