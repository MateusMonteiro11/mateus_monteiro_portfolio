import React, { useEffect, useRef, useState } from 'react'

const SCRAMBLE_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&*'
const DISPLAY_NAME = ['MATEUS', 'MONTEIRO']

function ScrambleName() {
  const [characters, setCharacters] = useState(() => DISPLAY_NAME.map(word => [...word]))
  const timeouts = useRef([])

  const clearScramble = () => {
    timeouts.current.forEach(window.clearTimeout)
    timeouts.current = []
  }

  useEffect(() => clearScramble, [])

  const scramble = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    clearScramble()
    setCharacters(DISPLAY_NAME.map(word => [...word]))

    DISPLAY_NAME.forEach((word, wordIndex) => {
      const center = (word.length - 1) / 2

      ;[...word].forEach((letter, letterIndex) => {
        const staggerDelay = Math.abs(letterIndex - center) * 42
        const frames = 24

        for (let frame = 0; frame <= frames; frame += 1) {
          const timeout = window.setTimeout(() => {
            setCharacters(current => current.map((currentWord, currentWordIndex) => {
              if (currentWordIndex !== wordIndex) return currentWord

              const nextWord = [...currentWord]
              nextWord[letterIndex] = frame === frames
                ? letter
                : SCRAMBLE_CHARACTERS[Math.floor(Math.random() * SCRAMBLE_CHARACTERS.length)]
              return nextWord
            }))
          }, staggerDelay + frame * 78)

          timeouts.current.push(timeout)
        }
      })
    })
  }

  return (
    <h1
      className="display-name"
      aria-label="Mateus Monteiro"
      onMouseEnter={scramble}
    >
      {DISPLAY_NAME.map((word, wordIndex) => (
        <span
          key={word}
          className="scramble-word block font-display font-extrabold uppercase leading-[0.82] tracking-tight text-[clamp(3.5rem,10vw,6rem)]"
          aria-hidden="true"
        >
          {[...word].map((letter, letterIndex) => (
            <span className="scramble-character" key={`${word}-${letterIndex}`}>
              <span className="scramble-character-sizer">{letter}</span>
              <span className="scramble-character-value">{characters[wordIndex][letterIndex]}</span>
            </span>
          ))}
        </span>
      ))}
    </h1>
  )
}

export default function Hero({t}){
  const marqueeItems = [t.hero.marquee, t.hero.marquee, t.hero.marquee]
  const heroImage = `${import.meta.env.BASE_URL}mateusmonteiro.jpeg`

  return (
    <section className="pt-20 md:pt-36 pb-20 md:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-12 gap-8 items-stretch">
        <div className="md:col-span-7 flex flex-col justify-center min-w-0">
          <div className="font-mono text-xs uppercase text-[var(--text-secondary-light)]">{t.hero.eyebrow}</div>
          <div className="mt-6">
            <ScrambleName />

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
            <img src={heroImage} alt="Portrait of Mateus Monteiro" className="hero-image absolute inset-0 w-full h-full object-cover transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] filter hover:grayscale" />
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
