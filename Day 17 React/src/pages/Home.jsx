import React from 'react'

const watches = [
  {
    name: 'Chronos No. 01',
    type: 'Automatic · 40 mm',
    price: '₹48,000',
    image:
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Midnight Steel',
    type: 'Quartz · 38 mm',
    price: '₹32,000',
    image:
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Terra Classic',
    type: 'Automatic · 42 mm',
    price: '₹54,000',
    image:
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=900&q=85',
  },
]

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

const Home = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f1eb] font-sans text-[#171717]">
      <section id="top" className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-8 lg:grid-cols-[1fr_1.08fr] lg:items-center lg:px-10 lg:pb-28 lg:pt-14">
        <div className="order-2 lg:order-1">
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#a5793d]">
            <span className="h-px w-10 bg-[#a5793d]" /> Swiss-inspired timepieces
          </p>
          <h1 className="max-w-xl font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            Time, made
            <span className="block italic text-[#a5793d]">remarkable.</span>
          </h1>
          <p className="mt-7 max-w-md text-base leading-7 text-neutral-600">
            Designed for the moments that define you. Aurel watches pair enduring mechanics with a quietly confident modern form.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a href="#collection" className="inline-flex items-center gap-3 bg-[#171717] px-6 py-4 text-xs font-medium uppercase tracking-[0.16em] text-white transition hover:bg-[#a5793d]">
              Discover collection <ArrowUpRight />
            </a>
            <a href="#craft" className="border-b border-[#171717] pb-1 text-xs font-semibold uppercase tracking-[0.15em] transition hover:border-[#a5793d] hover:text-[#a5793d]">
              Our craft
            </a>
          </div>
        </div>

        <div className="relative order-1 h-[430px] overflow-hidden bg-[#d7c7b3] sm:h-[560px] lg:order-2 lg:h-[650px]">
          <img
            src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1200&q=90"
            alt="A luxury wristwatch"
            className="h-full w-full object-cover object-center grayscale-[15%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          <p className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.22em] text-white">The signature series · 2026</p>
          <div className="absolute right-6 top-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/70 text-center text-[10px] uppercase leading-4 tracking-[0.12em] text-white backdrop-blur-sm">
            Est.<br />1987
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#e9e3d8]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-black/10 px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-10">
          {[
            ['50 hours', 'Power reserve'],
            ['10 ATM', 'Water resistance'],
            ['5 years', 'International warranty'],
          ].map(([number, label]) => (
            <div key={label} className="py-7 text-center">
              <p className="font-serif text-3xl">{number}</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="collection" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a5793d]">Selected timepieces</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">The new collection</h2>
          </div>
          <a href="#all" className="inline-flex items-center gap-2 border-b border-black pb-1 text-xs font-semibold uppercase tracking-[0.14em]">View all <ArrowUpRight /></a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {watches.map((watch) => (
            <article key={watch.name} className="group">
              <div className="relative h-80 overflow-hidden bg-[#e6dfd3] sm:h-96">
                <img src={watch.image} alt={watch.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <button aria-label={`Add ${watch.name} to favourites`} className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-lg transition hover:bg-[#171717] hover:text-white">♡</button>
              </div>
              <div className="flex items-start justify-between gap-3 pt-4">
                <div>
                  <h3 className="font-serif text-xl">{watch.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-neutral-500">{watch.type}</p>
                </div>
                <p className="text-sm font-medium">{watch.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="craft" className="bg-[#1c1c1b] px-6 py-20 text-[#f4f1eb] lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="h-80 overflow-hidden sm:h-[470px]">
            <img src="https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1000&q=85" alt="Watchmaking detail" className="h-full w-full object-cover" />
          </div>
          <div className="max-w-xl lg:pl-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c4965a]">Built with intent</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Precision that you can feel.</h2>
            <p className="mt-6 leading-7 text-neutral-300">Every Aurel movement is assembled, adjusted, and tested by hand. The result is a watch that feels just as considered on its thousandth day as on its first.</p>
            <a href="#story" className="mt-8 inline-flex items-center gap-3 border-b border-[#f4f1eb] pb-1 text-xs font-semibold uppercase tracking-[0.16em]">Explore our process <ArrowUpRight /></a>
          </div>
        </div>
      </section>

      <footer id="story" className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-xs uppercase tracking-[0.14em] text-neutral-500 md:flex-row md:items-center md:justify-between lg:px-10">
        <p>© 2026 Aurel Watches</p>
        <div className="flex gap-6"><a href="#instagram">Instagram</a><a href="#contact">Contact</a><a href="#privacy">Privacy</a></div>
      </footer>
    </main>
  )
}

export default Home
