import Reveal from './Reveal'
import Counter from './Counter'
import { STATS } from '../data/content'

const checks = ['Consistent Chemical Composition', 'Coating Integrity', 'Mechanical Strength']

export default function About() {
  return (
    <section id="about" className="bg-light-cream py-24 lg:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="eyebrow">About SUPRA</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading mt-3 text-4xl sm:text-5xl lg:text-6xl">
              A trusted name in <span className="text-brand">welding electrodes</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-ink/70">
              SUPRA welding electrodes are manufactured under strict quality control
              systems and subjected to rigorous mechanical testing, meeting the highest
              standards of performance and dependability.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              From small-scale fabrication to large-scale industrial operations, SUPRA
              remains the trusted choice for professionals who value strength, stability
              and long-term reliability in every weld.
            </p>
          </Reveal>

          <div className="mt-8 space-y-3">
            {checks.map((c, i) => (
              <Reveal key={c} delay={0.2 + i * 0.05} variant="left">
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                    ✓
                  </span>
                  <span className="font-medium text-ink/80">{c}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} variant="up">
              <div className="rounded-3xl border border-brand/10 bg-white p-7 shadow-card">
                <p className="font-display text-5xl text-brand">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-ink/60">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
