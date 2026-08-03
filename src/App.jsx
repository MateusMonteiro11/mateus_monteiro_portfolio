import React, {useState} from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

const translations = {
  en: {
    languageToggle: 'PT-BR',
    roleLabel: 'Software / Data Engineering',
    nav: {
      home: '01 / Home',
      projects: '02 / Selected Work',
      contact: "03 / Let's talk",
      menu: 'Menu',
      close: 'Close'
    },
    hero: {
      eyebrow: 'Computer Science · FEI · São Bernardo do Campo, SP',
      marquee: 'Computer Science · Actively interviewing · React · Vite · Tailwind · Supabase · Python · Java · SQL ·',
      statement: 'Software Engineering & Data Engineering. Building end-to-end systems from RLS-secured Postgres schemas to production React interfaces.',
      status: '4th semester · Actively interviewing · Brasil, SP'
    },
    projects: {
      sectionLabel: '02 / Selected Work',
      title: 'Selected Work',
      year: '2025—26',
      projectCards: [
        {
          id: '01',
          title: 'Gym.io',
          tag: 'Full-stack',
          description: 'A full-stack application developed by me for organizing, customizing, and tracking workouts, with a focus on data security and user experience.',
          live: 'https://gym-io-omega.vercel.app',
          repo: null,
          year: '2026'
        },
        {
          id: '02',
          title: 'Stock Manager',
          tag: 'Desktop Tool',
          description: 'Multi-marketplace inventory consolidation tool (Mercado Livre, Shopee, Amazon). Developed using Python, PySimpleGUI, SQLite, OpenPyXL.',
          live: null,
          repo: 'https://github.com/MateusMonteiro11/stock_manager',
          year: '2026'
        },
        {
          id: '03',
          title: 'Streaming App',
          tag: 'Java Desktop',
          description: 'Java Swing desktop tool for liking and building playlists of series and films, backed by a PostgreSQL media database.',
          live: null,
          repo: 'https://github.com/MateusMonteiro11/streaming_java_app',
          year: '2026'
        },
        {
          id: '04',
          title: 'Pacman Game',
          tag: 'JavaScript',
          description: 'Recreation of the classic Pac-Man arcade game with JavaScript, canvas rendering, keyboard controls and game state management.',
          live: null,
          repo: 'https://github.com/MateusMonteiro11/pacman-game',
          year: '2025'
        }
      ]
    },
    contact: {
      sectionLabel: "03 / Let's talk",
      emailLabel: 'contato@mateusmonteiro.dev',
      links: {
        linkedin: 'LinkedIn ↗',
        github: 'GitHub ↗',
        resume: 'Resume ↗'
      },
      based: 'Based in São Paulo, BR',
      form: {
        name: 'Your name',
        email: 'Your e-mail',
        message: 'Your message',
        send: 'Send'
      },
      hint: 'Or use the mailto link at left if you prefer.'
    }
  },
  pt: {
    languageToggle: 'EN',
    roleLabel: 'Engenheiro de Software / Dados',
    nav: {
      home: '01 / Início',
      projects: '02 / Projetos Selecionados',
      contact: '03 / Vamos conversar',
      menu: 'Menu',
      close: 'Fechar'
    },
    hero: {
      eyebrow: 'Ciência da Computação · FEI · São Bernardo do Campo, SP',
      marquee: 'Ciência da Computação · Em processo seletivo · React · Vite · Tailwind · Supabase · Python · Java · SQL ·',
      statement: 'Engenheiro de Software e Dados. Construindo sistemas de ponta a ponta, desde esquemas Postgres com RLS até interfaces React em produção.',
      status: '4º semestre · Em processo seletivo · Brasil, SP'
    },
    projects: {
      sectionLabel: '02 / Projetos Selecionados',
      title: 'Projetos Selecionados',
      year: '2025—26',
      projectCards: [
        {
          id: '01',
          title: 'Gym.io',
          tag: 'Full-stack',
          description: 'Aplicação full-stack desenvolvida por mim para organizar, personalizar e acompanhar treinos, com foco em segurança de dados e experiência do usuário.',
          live: 'https://gym-io-omega.vercel.app',
          repo: null,
          year: '2026'
        },
        {
          id: '02',
          title: 'Stock Manager',
          tag: 'Ferramenta Desktop',
          description: 'Ferramenta de consolidação de inventário multicanal (Mercado Livre, Shopee, Amazon). Desenvolvida com Python, PySimpleGUI, SQLite e OpenPyXL.',
          live: null,
          repo: 'https://github.com/MateusMonteiro11/stock_manager',
          year: '2026'
        },
        {
          id: '03',
          title: 'Streaming App',
          tag: 'Java Desktop',
          description: 'Ferramenta Java Swing para curtir e montar playlists de séries e filmes, apoiada por um banco de dados PostgreSQL de mídia.',
          live: null,
          repo: 'https://github.com/MateusMonteiro11/streaming_java_app',
          year: '2026'
        },
        {
          id: '04',
          title: 'Pacman Game',
          tag: 'JavaScript',
          description: 'Recriação do clássico Pac-Man em JavaScript, com renderização em canvas, controles de teclado e gerenciamento de estado do jogo.',
          live: null,
          repo: 'https://github.com/MateusMonteiro11/pacman-game',
          year: '2025'
        },
      ]
    },
    contact: {
      sectionLabel: '03 / Vamos conversar',
      emailLabel: 'contato@mateusmonteiro.dev',
      links: {
        linkedin: 'LinkedIn ↗',
        github: 'GitHub ↗',
        resume: 'Currículo ↗'
      },
      based: 'Baseado em São Paulo, BR',
      form: {
        name: 'Seu nome',
        email: 'Seu e-mail',
        message: 'Sua mensagem',
        send: 'Enviar'
      },
      hint: 'Ou use o link mailto à esquerda se preferir.'
    }
  }
}

export default function App(){
  const [lang, setLang] = useState('en')
  const t = translations[lang]
  const toggleLanguage = () => setLang((current) => current === 'en' ? 'pt' : 'en')

  return (
    <div className="min-h-screen font-body">
      <Header t={t} onToggleLanguage={toggleLanguage} />
      <main>
        <section id="topboard"><Hero t={t} /></section>
        <section id="projects"><Projects t={t} projects={t.projects.projectCards} /></section>
        <section id="contact"><Contact t={t} /></section>
      </main>
    </div>
  )
}
