function About() {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 py-24 md:grid-cols-2"
    >
      <div>
        <p className="mb-6 flex items-center gap-3 text-xs tracking-[0.2em] text-text-mute uppercase">
          About me
          <span className="h-px flex-1 bg-border" />
        </p>

        <h2 className="mb-8 text-4xl font-medium leading-tight md:text-5xl">
          I'm Aniket, a{' '}
          <span className="font-accent text-5xl italic md:text-6xl">
            backend-leaning
          </span>{' '}
          full-stack engineer.
        </h2>

        <p className="mb-6 text-lg leading-relaxed text-text-dim">
          I'm a Software Engineer at TCS, where I work on Genisys — an
          enterprise insurance configurator — building out the Accounts
          module. I care most about the parts of software people don't see:
          clean data models, predictable APIs, and systems that hold up
          under real usage.
        </p>

        <p className="mb-6 text-lg leading-relaxed text-text-dim">
          Outside of work, I build full-stack projects end to end —
          architecture, deployment, and all — and spend time on data
          structures and algorithms, because I like understanding why
          something works, not just that it does.
        </p>

        <div className="mt-8 border-t border-border pt-6">
          <p className="text-lg text-text">
            I believe in shipping things that actually work.
          </p>
        </div>
      </div>

      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card" />
    </section>
  )
}

export default About