import React from 'react'

const values = [
  ['01', 'Purposeful design', 'Every curve, numeral, and material earns its place.'],
  ['02', 'Human precision', 'Our timepieces are adjusted by hand and made to stay with you.'],
  ['03', 'Enduring character', 'We design beyond trends—for today, and decades from now.'],
]

const About = () => {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#1d1b18]">
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:px-10 lg:py-24">
        <div className="pb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#aa7a3c]">The House of Aurel</p>
          <h1 className="mt-5 max-w-lg font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            A quieter kind of <span className="italic text-[#aa7a3c]">luxury.</span>
          </h1>
          <p className="mt-8 max-w-md text-base leading-7 text-neutral-600">
            Aurel creates timepieces for people who value the details that are felt, not shouted about.
          </p>
        </div>
        <div className="relative h-[430px] overflow-hidden bg-[#ddd4c6] sm:h-[540px]">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1300&q=85"
            alt="A close-up portrait representing Aurel's timeless character"
            className="h-full w-full object-cover grayscale-[25%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <p className="absolute bottom-6 left-6 text-[10px] font-medium uppercase tracking-[0.2em] text-white">Aurel · Founded with intention</p>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#e9e3d8] px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#aa7a3c]">Our philosophy</p>
          <div>
            <h2 className="max-w-3xl font-serif text-3xl leading-tight sm:text-5xl">Good design gives time a form worth keeping.</h2>
            <p className="mt-7 max-w-2xl leading-7 text-neutral-600">Born from a respect for classical horology and a love of contemporary restraint, Aurel is an independent watch house with a single belief: the things we wear every day should become more meaningful over time.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#aa7a3c]">Made for a lifetime</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">The beauty is in the making.</h2>
            <p className="mt-6 max-w-lg leading-7 text-neutral-600">From the first pencil mark to the final calibration, every stage is guided by patience. We work with considered materials, trusted specialists, and a commitment to making fewer things—better.</p>
            <a href="#collection" className="mt-8 inline-flex items-center gap-3 border-b border-[#1d1b18] pb-1 text-xs font-semibold uppercase tracking-[0.16em] transition hover:border-[#aa7a3c] hover:text-[#aa7a3c]">Explore our timepieces <span>↗</span></a>
          </div>
          <div className="order-1 h-80 overflow-hidden bg-[#d8d0c5] sm:h-[470px] lg:order-2">
            <img src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1100&q=85" alt="A refined wristwatch" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[#1d1b18] px-6 py-20 text-[#f7f5f0] lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c6975a]">What guides us</p>
          <div className="mt-10 grid gap-0 md:grid-cols-3 md:divide-x md:divide-white/15">
            {values.map(([number, title, text]) => (
              <article key={number} className="border-t border-white/15 py-7 md:border-t-0 md:px-8 md:first:pl-0 md:last:pr-0">
                <p className="text-xs tracking-[0.15em] text-[#c6975a]">{number}</p>
                <h3 className="mt-6 font-serif text-2xl">{title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-neutral-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
