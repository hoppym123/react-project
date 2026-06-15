import { useState } from 'react'

const faqs = [
  {
    q: 'What services do you provide?',
    a: 'We provide roof installation, repair, inspection, aluminum windows & siding, gutters, and custom exterior solutions for residential and commercial properties.',
  },
  {
    q: 'How long does a typical roof installation take?',
    a: 'Most standard residential installations take 2–5 days depending on size, complexity, and weather. We provide a project timeline during the estimate stage.',
  },
  {
    q: 'Do you offer warranties?',
    a: 'Yes. We offer workmanship and materials warranties. Specific terms depend on the chosen system — we outline coverage in your proposal.',
  },
  {
    q: 'How do you handle permits and inspections?',
    a: 'We can handle permit applications and coordinate inspections as part of the project management, or advise you on requirements if you prefer to manage permits directly.',
  },
  {
    q: 'What payment options do you accept?',
    a: 'We accept bank transfers, major credit cards, and verified financing options. Payment schedule is typically deposit, progress payment, and final payment upon completion.',
  },
  {
    q: 'Can you match existing roofing or window materials?',
    a: 'Yes — we source matching materials when available and propose closest high-quality alternatives when exact matches are discontinued.',
  },
  {
    q: 'How do I request a quote?',
    a: 'Use our contact form or call the number listed on the site. We will schedule an inspection or provide an accurate remote estimate based on photos and details you provide.',
  },
  {
    q: 'What should I expect during the project?',
    a: 'Expect a professional team, daily cleanup, project supervision, and clear communication. We protect landscaping and address safety on-site throughout the project.',
  },
]

export default function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = index => setOpenIndex(prev => (prev === index ? null : index))

  return (
    <section id="faq" className="bg-slate-900 px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-8" data-aos="fade-up">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-200">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">Frequently Asked Questions</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400">Answers to common questions about our roofing and aluminum services.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="rounded-2xl bg-slate-950/40 p-4 ring-1 ring-white/6" data-aos="slide-up" data-aos-delay={i * 50}>
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="text-sm font-semibold text-white">{item.q}</span>
                <span className="text-amber-200 text-xl">{openIndex === i ? '−' : '+'}</span>
              </button>

              {openIndex === i && (
                <div className="mt-3 text-slate-300 text-sm leading-7">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
