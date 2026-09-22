import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Modal from '../components/contact-modal/Modal'
import { FiPhone } from 'react-icons/fi'

const Layout = ({isOpen, setIsOpen, openModal}) => {
  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Header openModal={openModal}/>
      <Outlet/>
      <Footer openModal={openModal} />
      {/* Floating Phone Button */}
      <a
        href="tel:+998555118080"
        title="+998 55 511 80 80"
        className="fixed bottom-6 right-6 group flex items-center gap-2 bg-gradient-to-br from-[#a78861] to-[#d1ab7d] text-white pl-4 pr-4 py-3.5 rounded-full shadow-2xl hover:shadow-[#a78861]/40 hover:scale-105 transition-all duration-300 z-[9999]"
      >
        <FiPhone className="text-xl shrink-0" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-[140px] transition-all duration-300 whitespace-nowrap text-sm font-semibold">
          55 511 80 80
        </span>
      </a>
    </>
  )
}

export default Layout