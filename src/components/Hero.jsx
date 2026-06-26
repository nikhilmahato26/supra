import { motion } from 'framer-motion'
import { ArrowRight, Download, Landmark } from 'lucide-react'

const BLUE_TINT =
  'brightness(0) saturate(100%) invert(36%) sepia(58%) saturate(560%) hue-rotate(196deg) brightness(92%) contrast(89%)'

const certs = [
  { logo: '/assets/iso-logo.png', title: 'ISO 9001:2015', sub: 'Certified Company' },
  { logo: '/assets/msme-logo.png', tinted: true, title: 'MSME', sub: 'Registered' },
  // { icon: Landmark, title: 'Govt. of India', sub: 'Ministry of MSME' },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream pt-28 md:pt-32">
      {/* soft brand glow backdrop */}
      <div className="pointer-events-none absolute -right-40 top-24 h-[480px] w-[480px] rounded-full bg-yellow/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-brand/10 blur-3xl" />

      <div className="container-x relative grid items-center gap-10 pb-20 lg:grid-cols-2 lg:gap-6 lg:pb-28">
        {/* LEFT — details */}
        <div className="order-2 lg:order-1">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            SUPRA · Spark of Strength
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="heading mt-5 text-[3.4rem] leading-[0.9] sm:text-7xl xl:text-[5.4rem]"
          >
            Strength That<br />
            Holds Steel<br />
            <span className="text-brand">Together</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-6 max-w-md text-base leading-relaxed text-ink/70"
          >
            Premium mild steel welding electrodes, manufactured under strict quality
            control and rigorous mechanical testing — for professionals who value
            strength, stability and long-term reliability in every weld.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#products" className="btn-primary">
              Explore Products <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              <Download size={16} /> Download Catalogue
            </a>
          </motion.div>

          {/* certifications row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 grid max-w-lg grid-cols-3 gap-3"
          >
            {certs.map((c) => (
              <div
                key={c.title}
                className="flex flex-col items-start gap-2 p-1 sm:flex-row sm:items-center"
              >
                {c.logo ? (
                  <img
                    src={c.logo}
                    alt={`${c.title} ${c.sub}`}
                    className="my-auto h-24 w-full object-contain"
                    style={c.tinted ? { filter: BLUE_TINT } : undefined}
                  />
                ) : (
                  <>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <c.icon size={20} />
                    </span>
                    <span>
                      <span className="block font-display text-lg leading-none text-brand-dark">
                        {c.title}
                      </span>
                      <span className="text-[11px] leading-tight text-ink/55">{c.sub}</span>
                    </span>
                  </>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — live product mockup */}
        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative">
            {/* pulsing spark halo */}
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 animate-spark rounded-full bg-yellow/30 blur-3xl" />
            <motion.img
              src="/assets/product-box.png"
              alt="SUPRA Welding Electrodes packaging"
              initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ rotate: 0, scale: 1.04 }}
              className="relative z-10 w-[88vw] max-w-[560px] animate-float drop-shadow-[0_40px_60px_rgba(53,74,138,0.28)]"
            />
            {/* floating spec chip */}
            {/* <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute -bottom-2 left-0 z-20 rounded-2xl border border-brand/10 bg-white px-4 py-3 shadow-card"
            >
              <p className="font-display text-2xl leading-none text-brand">E6013</p>
              <p className="text-[11px] text-ink/55">General Purpose</p>
            </motion.div> */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05 }}
              className="absolute -right-2 top-6 z-20 rounded-2xl border border-yellow/40 bg-yellow px-4 py-3 shadow-card"
            >
              <p className="font-display text-2xl leading-none text-brand-dark">AC / DC</p>
              <p className="text-[11px] text-brand-dark/70">All-Position</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
