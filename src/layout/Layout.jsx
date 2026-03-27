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
        <Footer/>
        {/* Floating Phone Button */}
        <a
          href="tel:+998901234567"
          className="fixed bottom-5 right-5 bg-white text-red-800 p-4 rounded-full shadow-lg hover:bg-gray-100 hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none z-[9999]"
        >
          <FiPhone className="text-2xl" />
        </a>
    </>
  )
}

export default Layout