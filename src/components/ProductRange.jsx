import { motion } from 'framer-motion'
import { Download, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import { PRODUCTS } from '../data/content'

export default function ProductRange() {
  return (
    <section id="products" className="bg-light-cream py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Product Range"
            title="The SUPRA electrode line"
            subtitle="Engineered grades for every job — from everyday fabrication to mission-critical structures."
          />
          <Reveal delay={0.1}>
            <a href="#specs" className="btn-ghost shrink-0">
              View Specifications <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.code} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand/10 bg-white shadow-card"
              >
                {/* product visual */}
                <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-b from-cream to-light-cream">
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow/20 blur-2xl" />
                  </div>
                  <motion.img
                    src="/assets/product-box.png"
                    alt={p.code}
                    className="relative z-10 w-44 drop-shadow-[0_18px_28px_rgba(53,74,138,0.22)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                  />
                  <span className="absolute right-4  top-2 rounded-full bg-brand px-3 py-1 font-display text-sm tracking-wide text-white">
                    {p.code}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <span className="text-xs font-semibold uppercase tracking-widest text-yellow">
                    {p.tagline}
                  </span>
                  <h3 className="mt-2 font-display text-3xl text-brand-dark">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{p.desc}</p>

                  <div className="mt-5  flex flex-wrap gap-2">
                    {p.apps.map((a) => (
                      <span
                        key={a}
                        className="rounded-full bg-brand/5 px-3 py-1 text-xs font-medium text-brand"
                      >
                        {a}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                  >
                    <Download size={16} /> Download Datasheet
                  </a>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
