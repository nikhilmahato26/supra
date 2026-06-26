import { motion } from 'framer-motion'
import { Check, Wrench } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import { ELECTRODE_TYPES } from '../data/content'

export default function ElectrodeTypes() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Common Electrode Types"
          title="Know your “Big Three”"
          subtitle="Mild steel electrodes are the glue that fuses two pieces of metal into one solid structure. Here is what each grade does best."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {ELECTRODE_TYPES.map((t, i) => (
            <Reveal key={t.code} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="flex h-full flex-col rounded-3xl border border-brand/10 bg-white p-8 shadow-card"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-5xl text-brand">{t.code}</h3>
                  <span className="rounded-full bg-yellow/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-dark">
                    {t.label}
                  </span>
                </div>

                <div className="mt-7">
                  <p className="text-xs font-semibold uppercase tracking-widest text-ink/45">
                    Advantages
                  </p>
                  <ul className="mt-3 space-y-2">
                    {t.advantages.map((a) => (
                      <li key={a} className="flex items-center gap-2 text-sm text-ink/75">
                        <Check size={16} className="text-brand" /> {a}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-brand/10 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-ink/45">
                    Use Cases
                  </p>
                  <ul className="mt-3 space-y-2">
                    {t.useCases.map((u) => (
                      <li key={u} className="flex items-center gap-2 text-sm text-ink/75">
                        <Wrench size={15} className="text-yellow" /> {u}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
