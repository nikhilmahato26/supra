import Reveal from './Reveal'

export default function SectionHeader({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="heading mt-3 text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base leading-relaxed text-ink/65">{subtitle}</p>
        </Reveal>
      )}
    </div>
  )
}
