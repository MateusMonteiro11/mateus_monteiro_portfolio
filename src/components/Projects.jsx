import React, {useEffect, useRef} from 'react'

export default function Projects({t, projects}){
  const containerRef = useRef()

  useEffect(()=>{
    // Simple scroll reveal
    const els = containerRef.current?.querySelectorAll('.reveal') || []
    const io = new IntersectionObserver((entries)=>{
      entries.forEach((en,i)=>{
        if(en.isIntersecting){
          en.target.style.transitionDelay = `${i*100}ms`
          en.target.classList.add('revealed')
        }
      })
    },{threshold:0.08})
    els.forEach(el=>io.observe(el))
    return ()=> io.disconnect()
  },[])

  return (
    <section className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={containerRef}>
        <div className="border-t pt-6 border-[var(--border-light)]">
          <div className="font-mono text-xs uppercase text-[var(--text-secondary-light)]">{t.projects.sectionLabel}</div>
          <h2 className="mt-4 font-mono uppercase text-sm">{t.projects.title} <span className="ml-3 text-[var(--text-secondary-light)]">{t.projects.year}</span></h2>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          {projects.map((p, idx)=>{
            const isLarge = idx % 2 === 0
            const colClass = isLarge ? 'md:col-span-7' : 'md:col-span-5 md:mt-12'
            return (
              <article key={p.id} className={`reveal opacity-0 blur-sm translate-y-6 revealed:opacity-100 revealed:blur-0 revealed:translate-y-0 ${colClass}`}>
                <div className="flex justify-between items-start">
                  <div className="font-mono text-xs uppercase text-[var(--text-secondary-light)]">{p.id} · {p.tag}</div>
                  <div className="text-xs">{p.year}</div>
                </div>

                <a className="relative block mt-3 bg-[var(--off-white)] text-[var(--black)] p-6 no-underline hover:bg-[var(--black)] hover:text-[var(--white)] transition-transform transform hover:-translate-y-2" href={p.live||p.repo|| '#'} target="_blank" rel="noreferrer">
                  <h3 className="font-display font-extrabold uppercase tracking-tight text-2xl">{p.title}</h3>
                  <div className="absolute top-3 right-3 opacity-70">↗</div>
                </a>

                <p className="mt-3 text-[var(--text-secondary-light)]">{p.description}</p>

              </article>
            )
          })}

        </div>
      </div>
    </section>
  )
}
