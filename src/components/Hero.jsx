import React from 'react'

export default function Hero({t}){
  const marqueeItems = [t.hero.marquee, t.hero.marquee, t.hero.marquee]

  return (
    <section className="pt-20 md:pt-36 pb-20 md:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-12 gap-8 items-stretch">
        <div className="md:col-span-7 flex flex-col justify-center min-w-0">
          <div className="font-mono text-xs uppercase text-[var(--text-secondary-light)]">{t.hero.eyebrow}</div>
          {/* Static display name with hover treatment (inspired by personal-portfolio reference) */}
          <div className="mt-6">
            <h1 className="display-name">
              <span className="block font-display font-extrabold uppercase leading-[0.82] tracking-tight text-[clamp(3.5rem,10vw,6rem)]">MATEUS</span>
              <span className="block font-display font-extrabold uppercase leading-[0.82] tracking-tight text-[clamp(3.5rem,10vw,6rem)]">MONTEIRO</span>
            </h1>

            {/* Secondary moving stripe with details about Mateus — pauses on hover */}
            <div className="marquee-wrapper secondary mt-4">
              <div className="marquee-content secondary" aria-hidden="true">
                {marqueeItems.map((item, index) => (
                  <span key={index} className="marquee-text-secondary">{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 border-t pt-4 border-[var(--border-light)]">
            <p className="text-lg max-w-2xl">{t.hero.statement}</p>
            <div className="mt-4 font-mono text-sm uppercase text-[var(--text-secondary-light)]">{t.hero.status}</div>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="hero-image-wrapper w-full bg-[var(--near-black)] overflow-hidden relative min-w-0">
            <img src="./mateusmonteiro.jpeg" alt="Portrait of Mateus Monteiro" className="hero-image absolute inset-0 transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:filter-none filter grayscale-20 contrast-90" />
            <div className="absolute left-0 right-0 bottom-0 border-t border-[var(--border-dark)] bg-[rgba(0,0,0,0.12)] text-white font-mono text-xs uppercase py-2 px-4 flex justify-between items-center">
              <div>Portrait · 2026</div>
              <div className="opacity-80">↗</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
