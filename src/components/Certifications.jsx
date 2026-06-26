import { motion } from 'framer-motion'
import { Landmark } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import { CERTIFICATIONS } from '../data/content'

const ICONS = [null, null, Landmark]
// per-card logo + whether it needs the brand-blue tint (black source art)
const LOGOS = ['/assets/iso-logo.png', '/assets/msme-logo.png', null]
const TINTED = [false, true, false]
const BLUE_TINT =
  'brightness(0) saturate(100%) invert(36%) sepia(58%) saturate(560%) hue-rotate(196deg) brightness(92%) contrast(89%)'

export default function Certifications() {
  return (
    <section className="bg-light-cream py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader
          center
          eyebrow="Certifications"
          title="Quality you can verify"
          subtitle="A Quality Product by SUPRA ElectroWeld India — certified, registered and accountable."
        />

        <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
          {CERTIFICATIONS.map((c, i) => {
            const Icon = ICONS[i]
            const logo = LOGOS[i]
            return (
              <Reveal key={c.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="flex h-full flex-col items-center rounded-3xl border border-brand/10 bg-white p-10 text-center shadow-card"
                >
                  {logo ? (
                    <img
                      src={logo}
                      alt={`${c.title} — ${c.subtitle}`}
                      className="my-auto h-32 w-52 max-w-full object-contain"
                      style={TINTED[i] ? { filter: BLUE_TINT } : undefined}
                    />
                  ) : (
                    <>
                      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <Icon size={36} />
                      </span>
                      <span className="mt-6 rounded-full bg-yellow/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-dark">
                        {c.tag}
                      </span>
                      <h3 className="mt-4 font-display text-4xl text-brand-dark">{c.title}</h3>
                      <p className="mt-2 text-sm text-ink/60">{c.subtitle}</p>
                    </>
                  )}
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
