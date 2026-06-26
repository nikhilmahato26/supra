import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import { QUALITY_STEPS } from '../data/content'

export default function Quality() {
  return (
    <section id="quality" className="bg-cream py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Manufacturing Quality"
          title="From raw material to reliable weld"
          subtitle="Every batch is carefully monitored through a controlled, certified manufacturing process."
        />

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-brand/15 lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {QUALITY_STEPS.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.1}>
                <div className="relative">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-brand font-display text-2xl text-white shadow-soft">
                    {s.step}
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-brand-dark">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
