import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Phone, MessageCircle, Download, Send, CheckCircle2, Mail, MapPin } from 'lucide-react'
import Reveal from './Reveal'

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const [sent, setSent] = useState(false)

  const onSubmit = (data) => {
    // Wire to your backend / email service here.
    console.log('Enquiry submitted:', data)
    setSent(true)
    reset()
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="bg-light-cream py-24 lg:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        {/* Left — info */}
        <div>
          <span className="eyebrow">Contact</span>
          <h2 className="heading mt-3 text-4xl sm:text-5xl lg:text-6xl">
            Become a SUPRA <span className="text-brand">dealer or distributor</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/65">
            Tell us about your requirement — dealer enquiry, distributor partnership or bulk
            order — and our team will get back to you with pricing and the full catalogue.
          </p>

          <div className="mt-10 space-y-4">
            <a href="tel:+919054592545" className="flex items-center gap-4 group">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <Phone size={20} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-ink/45">Call us</span>
                <span className="font-medium text-ink/85">+91 90545 92545</span>
              </span>
            </a>
            <a href="mailto:sales@supraelectroweld.com" className="flex items-center gap-4 group">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <Mail size={20} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-ink/45">Email</span>
                <span className="font-medium text-ink/85">sales@supraelectroweld.com</span>
              </span>
            </a>
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                <MapPin size={20} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-ink/45">Manufactured by</span>
                <span className="font-medium text-ink/85">SUPRA ElectroWeld India</span>
              </span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://wa.me/919054592545"
              target="_blank"
              rel="noreferrer"
              className="btn-yellow"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a href="#" className="btn-ghost">
              <Download size={16} /> Download Catalogue
            </a>
          </div>
        </div>

        {/* Right — form */}
        <Reveal variant="right">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-3xl border border-brand/10 bg-white p-8 shadow-card sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" error={errors.name}>
                <input
                  {...register('name', { required: 'Name is required' })}
                  className="input"
                  placeholder="Your name"
                />
              </Field>
              <Field label="Company" error={errors.company}>
                <input {...register('company')} className="input" placeholder="Company (optional)" />
              </Field>
              <Field label="Phone" error={errors.phone}>
                <input
                  {...register('phone', {
                    required: 'Phone is required',
                    pattern: { value: /^[0-9+\s-]{7,15}$/, message: 'Enter a valid phone' },
                  })}
                  className="input"
                  placeholder="+91 ..."
                />
              </Field>
              <Field label="Email" error={errors.email}>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/, message: 'Enter a valid email' },
                  })}
                  className="input"
                  placeholder="you@email.com"
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Enquiry Type" error={errors.type}>
                <select {...register('type', { required: true })} className="input">
                  <option value="">Select…</option>
                  <option>Dealer Enquiry</option>
                  <option>Distributor Enquiry</option>
                  <option>Bulk Order</option>
                  <option>General Enquiry</option>
                </select>
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Message" error={errors.message}>
                <textarea
                  {...register('message', { required: 'Please add a message' })}
                  rows={4}
                  className="input resize-none"
                  placeholder="Tell us about your requirement…"
                />
              </Field>
            </div>

            <button type="submit" className="btn-primary mt-6 w-full">
              {sent ? (
                <>
                  <CheckCircle2 size={18} /> Enquiry Sent
                </>
              ) : (
                <>
                  Send Enquiry <Send size={16} />
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.9rem;
          border: 1px solid rgba(74,97,184,0.18);
          background: #FFF8E7;
          padding: 0.8rem 1rem;
          font-size: 0.9rem;
          color: #3A3A3A;
          outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        .input:focus {
          border-color: #4A61B8;
          box-shadow: 0 0 0 3px rgba(74,97,184,0.12);
        }
      `}</style>
    </section>
  )
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-ink/50">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-500">{error.message || 'Required'}</span>}
    </label>
  )
}
