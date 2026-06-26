import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import {
  Building2,
  Cog,
  Car,
  Hammer,
  Ship,
  Construction,
  Pipette,
  Factory,
} from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const ICONS = {
  Construction: Building2,
  'Heavy Engineering': Cog,
  Automotive: Car,
  Fabrication: Hammer,
  Shipbuilding: Ship,
  Bridges: Construction,
  Pipelines: Pipette,
  'Industrial Plants': Factory,
}

const ITEMS = Object.keys(ICONS)

export default function Applications() {
  return (
    <section id="applications" className="bg-brand-dark py-24 lg:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow text-yellow">Applications</span>
          <h2 className="heading mt-3 text-4xl text-white sm:text-5xl lg:text-6xl">
            Where SUPRA gets to work
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            From car frames and gates to bridges and pipelines — versatile, cost-effective
            and forgiving across every industry that builds with steel.
          </p>
        </div>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={false}
            loop
            autoplay={{ delay: 2600, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.4 },
              1440: { slidesPerView: 4.2 },
            }}
            className="!px-6 md:!px-10 !pb-14"
          >
            {ITEMS.map((label) => {
              const Icon = ICONS[label]
              return (
                <SwiperSlide key={label}>
                  <div className="group relative h-72 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-7">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-yellow/10 blur-2xl transition-all duration-500 group-hover:bg-yellow/20" />
                    <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow text-brand-dark">
                      <Icon size={26} />
                    </span>
                    <div className="absolute bottom-7 left-7 right-7">
                      <h3 className="font-display text-3xl leading-none text-white">{label}</h3>
                      <p className="mt-2 text-sm text-white/55">Industrial fabrication & repair</p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </Reveal>
    </section>
  )
}
