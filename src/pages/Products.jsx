import React, { useState, useEffect } from 'react'
import DonerProduct from '../components/home/DonerProduct'
import HeatingGuide from '../components/home/HeatingGuide'
import Taqvo from '../components/Taqvo'
import RevealSection from '../components/ui/RevealSection'
import { SkDoner, SkHeating, SkTaqvo } from '../components/ui/Skeleton'
import { useTranslation } from 'react-i18next'

const Products = () => {
  const [ready, setReady] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-[#1a0305] to-[#0f0000]">
      {/* Page Header */}
      <div className="container py-10 sm:py-14">
        <div className="text-center mb-2">
          <span className="inline-block bg-white/10 text-white/60 text-xs tracking-widest uppercase px-4 py-1 rounded-full mb-4 border border-white/10">
            SHEFKO
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t('header.products')}
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-[#a78861] to-[#d1ab7d] mx-auto rounded-full" />
        </div>
      </div>

      {/* Products Section */}
      <section id="products-detail">
        {ready ? (
          <RevealSection>
            <DonerProduct />
          </RevealSection>
        ) : (
          <SkDoner />
        )}
      </section>

      {/* Instagram/Telegram */}
      <section id="products-gallery">
        {ready ? (
          <RevealSection>
            <Taqvo />
          </RevealSection>
        ) : (
          <SkTaqvo />
        )}
      </section>

      {/* Heating Guide */}
      <section id="heating-guide">
        {ready ? (
          <RevealSection>
            <HeatingGuide />
          </RevealSection>
        ) : (
          <SkHeating />
        )}
      </section>
    </div>
  )
}

export default Products
