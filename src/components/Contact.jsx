import React from 'react'

export default function Contact({t}){

  return (
    <section className="py-20 md:py-28 bg-[var(--near-black)] text-white min-h-screen flex flex-col">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex-1">
        <div className="border-t pt-6 border-[var(--border-dark)]">
          <div className="font-mono text-xs uppercase text-[var(--text-secondary-dark)]">{t.contact.sectionLabel}</div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6">
            <a href={`mailto:${t.contact.emailLabel}`} className="block font-display font-extrabold uppercase text-[clamp(2rem,8vw,4rem)] leading-tight break-words">{t.contact.emailLabel}</a>

            <div className="mt-6 font-mono uppercase tracking-[0.14em] text-sm flex flex-wrap gap-6">
              <a href="https://www.linkedin.com/in/mateusmonteiro11/" target="_blank" rel="noreferrer">{t.contact.links.linkedin}</a>
              <a href="https://github.com/MateusMonteiro11" target="_blank" rel="noreferrer">{t.contact.links.github}</a>
              <a href={`${import.meta.env.BASE_URL}CV_MateusMonteiro.pdf`} target="_blank" rel="noreferrer">{t.contact.links.resume}</a>
            </div>

            <div className="mt-6 text-[var(--text-secondary-dark)] font-mono uppercase text-xs">{t.contact.based}</div>
          </div>

          <div className="md:col-span-6">
            <div className="bg-[rgba(255,255,255,0.03)] p-6 border border-[rgba(255,255,255,0.08)]">
              {/* Functional Formspree */}
              <form action="https://formspree.io/f/xbloarwp" method="POST" className="form-contato space-y-4" aria-label="Contact form">
                <div>
                  <input type="text" name="nome" placeholder={t.contact.form.name} required className="w-full mt-1 p-3 bg-transparent border border-[var(--border-dark)] text-white min-w-0" />
                </div>

                <div>
                  <input type="email" name="email" placeholder={t.contact.form.email} required className="w-full mt-1 p-3 bg-transparent border border-[var(--border-dark)] text-white min-w-0" />
                </div>

                <div>
                  <textarea name="mensagem" rows="6" placeholder={t.contact.form.message} required className="w-full mt-1 p-3 bg-transparent border border-[var(--border-dark)] text-white min-w-0" />
                </div>

                <div>
                  <button type="submit" className="btn font-mono uppercase tracking-[0.12em] w-full sm:w-auto">{t.contact.form.send}</button>
                </div>
              </form>

              <div className="mt-6 text-[var(--text-secondary-dark)]">{t.contact.hint}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-10 text-[var(--text-secondary-dark)]">© 2026 Mateus Monteiro</div>
    </section>
  )
}
