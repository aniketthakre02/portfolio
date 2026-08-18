import { useState } from 'react'
import { useScrollSpy } from '../../hooks/useScrollSpy'

const NAV_LINKS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Work', href: '#work', id: 'work' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Certificates', href: '#certificates', id: 'certificates' },
]

const SECTION_IDS = NAV_LINKS.map((link) => link.id)

function Navbar() {
  const activeId = useScrollSpy(SECTION_IDS)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header>
      <div className="fixed top-6 left-6 z-50 text-lg font-semibold tracking-tight text-text">
        AT
      </div>

      {/* Desktop pill nav — hidden below md, shown at md and up */}
      <nav className="fixed top-6 left-1/2 z-50 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-border bg-white/[0.03] px-2 py-2 backdrop-blur-md md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
              activeId === link.id
                ? 'bg-text text-bg'
                : 'text-text-dim hover:bg-white/5 hover:text-text'
            }`}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="ml-1 rounded-full bg-text px-5 py-2 text-sm font-medium text-bg transition hover:bg-white/90"
        >
          Resume
        </a>
      </nav>

      {/* Hamburger button — shown below md, hidden at md and up */}
      <button
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        className="fixed top-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/[0.03] backdrop-blur-md md:hidden"
      >
        <span className="relative flex h-4 w-5 flex-col justify-between">
          <span
            className={`h-px w-full bg-text transition-transform duration-300 ${
              isOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-px w-full bg-text transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-px w-full bg-text transition-transform duration-300 ${
              isOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </span>
      </button>

      {/* Fullscreen mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-bg/98 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={`text-2xl font-medium transition ${
              activeId === link.id ? 'text-accent' : 'text-text-dim'
            }`}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="mt-4 rounded-full bg-text px-8 py-3 text-lg font-medium text-bg"
        >
          Resume
        </a>
      </div>
    </header>
  )
}

export default Navbar