const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
]

function Navbar() {
  return (
    <header>
      {/* Logo*/}
      <div className="fixed top-6 left-6 z-50 text-lg font-semibold tracking-tight text-text">
        AT
      </div>

      {/* Floating pill nav, fixed top-center */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 rounded-full border border-border bg-white/[0.03] px-2 py-2 backdrop-blur-md">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-4 py-2 text-sm text-text-dim transition hover:text-text"
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
    </header>
  )
}

export default Navbar