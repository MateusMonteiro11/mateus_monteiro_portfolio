import React, {useState, useEffect} from 'react'

export default function Header({t, onToggleLanguage}){
  const [scrolled, setScrolled] = useState(false)
  useEffect(()=>{
    const onScroll = ()=> setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <header className={`fixed w-full top-0 z-40 backdrop-blur-sm transition-border ${scrolled ? 'border-b' : ''} border-[var(--border-light)] bg-[rgba(255,255,255,0.6)]/30`}> 
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-4">
          <div className="font-mono text-xs uppercase tracking-widest">MM</div>
          <div className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary-light)] hidden md:block">{t.roleLabel}</div>
        </div>
        <nav className="hidden md:flex gap-6 items-center font-mono text-xs uppercase tracking-[0.14em]">
          <a href="#projects" className="nav-link">{t.nav.projects}</a>
          <a href="#contact" className="nav-link">{t.nav.contact}</a>
          <button onClick={onToggleLanguage} className="font-mono uppercase tracking-[0.18em] text-xs border border-[var(--black)] px-3 py-2 hover:bg-[var(--black)] hover:text-[var(--white)] transition-colors">{t.languageToggle}</button>
        </nav>
        <div className="flex items-center gap-3 md:hidden relative">
          <button onClick={onToggleLanguage} className="font-mono uppercase tracking-[0.18em] text-xs border border-[var(--black)] px-3 py-2 hover:bg-[var(--black)] hover:text-[var(--white)] transition-colors">{t.languageToggle}</button>
          <MobileMenu t={t} />
        </div>
      </div>
    </header>
  )
}

function MobileMenu({t}){
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button aria-label="menu" onClick={()=>setOpen(v=>!v)} className="font-mono uppercase tracking-[0.18em] text-sm">{t.nav.menu}</button>
      {open && (
        <div className="fixed left-0 right-0 top-[4rem] bg-[var(--near-black)] text-white border-t border-[var(--border-dark)] shadow-xl z-50 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border-dark)]">
            <div className="font-mono text-xs uppercase tracking-[0.2em]">{t.nav.menu}</div>
            <button onClick={()=>setOpen(false)} className="font-mono text-xs uppercase tracking-[0.18em]">{t.nav.close}</button>
          </div>
          <nav className="flex flex-col px-4 py-4 gap-4 font-mono uppercase tracking-[0.16em] text-sm">
            <a href="#topboard" onClick={()=>setOpen(false)} className="block text-white hover:text-[var(--text-secondary-dark)] transition-colors">{t.nav.home}</a>
            <a href="#projects" onClick={()=>setOpen(false)} className="block text-white hover:text-[var(--text-secondary-dark)] transition-colors">{t.nav.projects}</a>
            <a href="#contact" onClick={()=>setOpen(false)} className="block text-white hover:text-[var(--text-secondary-dark)] transition-colors">{t.nav.contact}</a>
          </nav>
        </div>
      )}
    </div>
  )
}
