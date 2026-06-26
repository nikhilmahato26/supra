import { motion } from 'framer-motion'

export default function Wordmark() {
  return (
    <section className="overflow-hidden bg-cream pb-4 pt-10">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="select-none text-center font-display text-[28vw] leading-[0.8] tracking-tight text-brand"
      >
        SUPRA
      </motion.h2>
      <p className="text-center font-body text-sm font-semibold uppercase tracking-[0.6em] text-brand-dark">
        Spark of Strength
      </p>
    </section>
  )
}
