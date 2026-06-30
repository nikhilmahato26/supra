import { ArrowUp } from 'lucide-react'
import { PRODUCTS } from '../data/content'

const COLUMNS = [
  {
    title: 'Products',
    links: PRODUCTS.map((p) => p.code),
  },
  {
    title: 'Certifications',
    links: ['ISO 9001:2015', 'MSME Registered', 'Ministry of MSME', 'Govt. of India'],
  },
  {
    title: 'Quick Links',
    links: ['About', 'Why SUPRA', 'Applications', 'Quality'],
  },
  {
    title: 'Contact',
    links: ['Dealer Enquiry', 'Distributor Enquiry', 'Download Catalogue', 'WhatsApp'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <img
              src="/assets/logo.png"
              alt="SUPRA"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Premium  welding electrodes manufactured by SUPRA ELECTOWELD INDIA.
              ISO 9001:2015 certified · MSME registered.
            </p>
            <div className="mt-6 space-y-1.5 text-sm text-white/70">
              <p>
                <a
                  href="mailto:sales@supraelectroweld.com"
                  className="transition-colors hover:text-yellow"
                >
                  sales@supraelectroweld.com
                </a>
              </p>
              <p>Ahmedabad, Gujarat, India</p>
            </div>
            <p className="mt-6 font-display text-2xl tracking-wide text-yellow">
              Spark of Strength
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-white/45">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#contact"
                        className="text-sm text-white/70 transition-colors hover:text-yellow"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} SUPRA ElectroWeld India. All rights reserved.
          </p>
          <a
            href="#home"
            className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/70 transition-colors hover:border-yellow hover:text-yellow"
          >
            Back to top <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}
