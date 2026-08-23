import React from 'react'

const services = [
  {
    number: '01',
    title: 'Complete service',
    text: 'A full inspection, movement clean, lubrication, calibration, and water-resistance test—performed by trained specialists.',
    time: 'Estimated 4–6 weeks',
  },
  {
    number: '02',
    title: 'Restoration',
    text: 'Bring a treasured timepiece back to life with careful case refinishing, crystal replacement, and dial restoration.',
    time: 'Tailored assessment',
  },
  {
    number: '03',
    title: 'Personal fitting',
    text: 'Reserve a private appointment to discover the collection, find your ideal fit, or select a strap for every season.',
    time: 'By appointment',
  },
]

const Services = () => {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#1d1b18]">
      <section className="border-b border-black/10 px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#aa7a3c]">Aurel care</p>
          <div className="mt-5 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h1 className="max-w-3xl font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">Made to move with <span className="italic text-[#aa7a3c]">your life.</span></h1>
            <p className="max-w-md leading-7 text-neutral-600">Your watch marks the moments that matter. Our care services help make sure it keeps doing so beautifully, year after year.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative h-[370px] overflow-hidden bg-[#ddd5ca] sm:h-[500px]">
            <img src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=1100&q=85" alt="A watch being carefully serviced" className="h-full w-full object-cover grayscale-[15%]" />
            <p className="absolute bottom-5 left-5 text-[10px] font-medium uppercase tracking-[0.2em] text-white">Care, without compromise</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#aa7a3c]">Services</p>
            <div className="mt-5 divide-y divide-black/10 border-t border-black/10">
              {services.map((service) => (
                <article key={service.number} className="group grid gap-4 py-7 sm:grid-cols-[44px_1fr_auto] sm:gap-6">
                  <p className="text-xs tracking-[0.16em] text-[#aa7a3c]">{service.number}</p>
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl">{service.title}</h2>
                    <p className="mt-3 max-w-md text-sm leading-6 text-neutral-600">{service.text}</p>
                  </div>
                  <p className="self-start text-[10px] font-semibold uppercase tracking-[0.13em] text-neutral-500 sm:text-right">{service.time}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e9e3d8] px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#aa7a3c]">Five-year assurance</p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">Confidence comes standard.</h2>
            <p className="mt-6 max-w-xl leading-7 text-neutral-600">Every Aurel timepiece includes our five-year international warranty. Our team remains available for advice, repairs, and anything your watch needs along the way.</p>
          </div>
          <div className="border border-[#1d1b18]/15 bg-[#f7f5f0] p-7 sm:p-10">
            <p className="font-serif text-2xl">Need assistance?</p>
            <p className="mt-3 text-sm leading-6 text-neutral-600">Book a complimentary consultation with an Aurel care specialist.</p>
            <a href="#book-service" className="mt-7 inline-flex items-center gap-3 bg-[#1d1b18] px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-[#aa7a3c]">Book a service <span>↗</span></a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services
