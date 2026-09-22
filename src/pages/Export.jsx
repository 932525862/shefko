import React, { useState, useEffect } from 'react'
import ExportReadiness from '../components/home/ExportReadiness'
import BecomeDistributor from '../components/home/BecomeDistributor'
import RevealSection from '../components/ui/RevealSection'
import { SkExport, SkDistributor } from '../components/ui/Skeleton'
import { useTranslation } from 'react-i18next'

const Export = () => {
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
            {t('header.export')}
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-[#a78861] to-[#d1ab7d] mx-auto rounded-full" />
        </div>
      </div>

      {/* Export Readiness */}
      <section id="export-readiness">
        {ready ? (
          <RevealSection>
            <ExportReadiness />
          </RevealSection>
        ) : (
          <SkExport />
        )}
      </section>

      {/* Become Distributor */}
      <section id="become-distributor">
        {ready ? (
          <RevealSection>
            <BecomeDistributor />
          </RevealSection>
        ) : (
          <SkDistributor />
        )}
      </section>
    </div>
  )
}

export default Export
