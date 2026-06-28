import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import { SPECS } from '../data/content'

const COLS = ['SWG', 'Size (mm)', 'No. of Electrodes', 'Current Range', 'Current Type']

export default function Specifications() {
  return (
    <section id="specs" className="bg-light-cream py-24 lg:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Product Specifications"
          title="Technical specifications"
          subtitle="Standard SUPRA mild steel electrode sizes, packing and recommended current ranges."
        />

        {/* Welding imagery */}
        <Reveal delay={0.05}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-brand/10 shadow-card">
            <img
              src="/assets/electrodes-e6013.jpg"
              alt="SUPRA E6013 mild steel welding electrodes"
              loading="lazy"
              className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105 md:h-96"
            />
          </div>
        </Reveal>

        {/* Desktop / tablet table */}
        <Reveal delay={0.1}>
          <div className="mt-12 hidden overflow-hidden rounded-3xl border border-brand/10 shadow-card md:block">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-brand text-white">
                  {COLS.map((c) => (
                    <th key={c} className="px-6 py-5 font-display text-lg tracking-wide">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SPECS.map((row, i) => (
                  <tr
                    key={row.swg}
                    className={`${i % 2 === 0 ? 'bg-white' : 'bg-cream'} transition-colors hover:bg-yellow/10`}
                  >
                    <td className="px-6 py-5 font-display text-2xl text-brand">{row.swg}</td>
                    <td className="px-6 py-5 font-medium text-ink/80">{row.size}</td>
                    <td className="px-6 py-5 text-ink/75">{row.count}</td>
                    <td className="px-6 py-5 text-ink/75">{row.current}</td>
                    <td className="px-6 py-5">
                      <span className="rounded-full bg-brand/5 px-3 py-1 text-sm font-medium text-brand">
                        {row.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Mobile cards */}
        <div className="mt-10 space-y-4 md:hidden">
          {SPECS.map((row, i) => (
            <Reveal key={row.swg} delay={i * 0.08}>
              <div className="rounded-3xl border border-brand/10 bg-white p-6 shadow-card">
                <div className="flex items-center justify-between border-b border-brand/10 pb-4">
                  <span className="font-display text-4xl text-brand">SWG {row.swg}</span>
                  <span className="rounded-full bg-brand/5 px-3 py-1 text-xs font-medium text-brand">
                    {row.type}
                  </span>
                </div>
                <dl className="mt-4 space-y-3 text-sm">
                  {[
                    ['Size (mm)', row.size],
                    ['No. of Electrodes', row.count],
                    ['Current Range', row.current],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4">
                      <dt className="text-ink/50">{k}</dt>
                      <dd className="text-right font-medium text-ink/85">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
