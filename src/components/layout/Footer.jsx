const GENERAL_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
]

const CONNECT_LINKS = [
  { label: 'GitHub', href: 'https://github.com/aniketthakre02' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aniket-thakre21/' }, 
  { label: 'Email', href: 'mailto:aniketthakre2005@gmail.com' },
]

function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-4xl px-6 py-24 text-center">
      <a
        href="mailto:aniket.email@gmail.com"
        className="mb-16 inline-flex items-center gap-3 rounded-full bg-text py-3 pl-8 pr-3 text-lg font-medium text-bg transition hover:bg-white/90"
      >
        Get In Touch
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/10">
          →
        </span>
      </a>

      <p className="mx-auto mb-6 max-w-2xl text-xl leading-relaxed text-text-dim md:text-2xl">
        I'm open to full-time roles and interesting side projects. I enjoy
        building dependable backend systems and the clean UI that sits on
        top of them.
      </p>

      <div className="mb-24 flex items-center justify-center gap-2 text-xs uppercase tracking-wide text-green">
        <span className="h-1.5 w-1.5 rounded-full bg-green shadow-[0_0_6px_2px_rgba(52,211,153,0.6)]" />
        Available for work
      </div>

      <div className="grid grid-cols-2 gap-10 border-t border-border pt-16 text-left md:grid-cols-3">
        <div>
          <p className="mb-4 text-xs uppercase tracking-wide text-text-mute">
            Identity
          </p>
          <p className="leading-relaxed text-text-dim">
            Aniket Thakre — a software engineer focused on dependable
            systems and clean architecture.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-wide text-text-mute">
            General
          </p>
          <div className="flex flex-col gap-2">
            {GENERAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-dim transition hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-wide text-text-mute">
            Connect
          </p>
          <div className="flex flex-col gap-2">
            {CONNECT_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-text-dim transition hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col justify-between gap-4 border-t border-border pt-8 text-xs uppercase tracking-wide text-text-mute md:flex-row">
        <span>© 2026 Aniket Thakre. Built with care.</span>
        <span>Thane, India · GMT +5:30</span>
      </div>
    </footer>
  )
}

export default Footer