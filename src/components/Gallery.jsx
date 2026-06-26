import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Gallery() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Product Gallery"
          title="Premium by every measure"
          subtitle="Packaging, product and process — the SUPRA standard, up close."
        />

        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-5 lg:grid-cols-4">
          {/* Large packaging tile */}
          <Reveal className="col-span-2 row-span-2" delay={0}>
            <div className="group relative flex h-full items-center justify-center overflow-hidden rounded-3xl border border-brand/10 bg-gradient-to-br from-light-cream to-cream shadow-card">
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow/20 blur-3xl" />
              <motion.img
                src="/assets/product-box.png"
                alt="SUPRA packaging"
                className="relative z-10 w-3/4 drop-shadow-[0_30px_40px_rgba(53,74,138,0.25)] transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2"
              />
              <span className="absolute bottom-6 left-6 font-display text-2xl text-brand-dark">
                Welding Electrodes
              </span>
            </div>
          </Reveal>

          {/* Spark tile */}
          <Reveal delay={0.1}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-brand p-7 shadow-card">
              <span className="flex h-12 w-12 animate-spark items-center justify-center rounded-2xl bg-yellow text-brand-dark">
                <Zap size={24} />
              </span>
              <span className="font-display text-3xl leading-none text-white">
                Spark of<br />Strength
              </span>
            </div>
          </Reveal>

          {/* Yellow stat tile */}
          <Reveal delay={0.15}>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-yellow p-7 shadow-card">
              <span className="font-display text-5xl text-brand-dark">100%</span>
              <span className="text-sm font-semibold text-brand-dark/80">Batch tested for strength</span>
            </div>
          </Reveal>

          {/* Brochure tile */}
          <Reveal className="col-span-2" delay={0.2}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-brand/10 shadow-card">
              <img
                src="/assets/brochure.jpeg"
                alt="SUPRA brochure"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 to-transparent" />
              <span className="absolute bottom-6 left-6 font-display text-2xl text-white">
                A Quality Product by SUPRA ElectroWeld India
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
