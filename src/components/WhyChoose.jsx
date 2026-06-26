import { motion } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import { WHY_SUPRA } from '../data/content'

export default function WhyChoose() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Why Choose SUPRA"
          title="Built to perform, certified to last"
          subtitle="Six reasons fabricators across India rely on SUPRA for every critical weld."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_SUPRA.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group h-full rounded-3xl border border-brand/10 bg-white p-8 shadow-card"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <item.icon size={26} />
                </span>
                <h3 className="mt-6 font-display text-2xl text-brand-dark">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{item.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
