import { featuredProjects, moreProjects } from '../../data/projects'

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-6 flex items-center gap-3 text-xs tracking-[0.2em] text-text-mute uppercase">
        Selected works
        <span className="h-px flex-1 bg-border" />
      </p>

      <h2 className="mb-16 text-5xl font-medium leading-[1.05] md:text-6xl">
        Crafting{' '}
        <span className="font-accent text-6xl italic md:text-7xl">
          reliable systems.
        </span>
      </h2>

      {/* Featured case study */}
      <div className="space-y-24">
        {featuredProjects.map((project) => (
          <div key={project.id} className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-border bg-card">
              <span className="font-accent text-2xl italic text-text-mute">
                project preview
              </span>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full border border-accent-dim bg-accent/10 px-3 py-1 text-xs uppercase tracking-wide text-accent">
                  {project.type}
                </span>
                <span className="text-xs uppercase tracking-wide text-text-mute">
                  {project.year} project
                </span>
              </div>

              <h3 className="mb-4 text-3xl font-medium text-accent md:text-4xl">
                {project.title}
              </h3>

              <p className="mb-8 text-lg leading-relaxed text-text-dim">
                {project.description}
              </p>

              <div className="space-y-4 border-t border-border pt-6">
                {project.points.map((point, i) => (
                  <p key={i} className="flex gap-4 text-text-dim">
                    <span className="font-medium text-accent">
                      {String(i + 1).padStart(2, '0')}.
                    </span>
                    {point}
                  </p>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-full bg-text py-2 pl-6 pr-2 text-sm font-medium text-bg transition hover:bg-white/90"
                >
                  View Project
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10">
                    →
                  </span>
                </a>
                <a
                  href={project.links.frontendRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border bg-white/[0.03] px-5 py-2.5 text-sm text-text-dim transition hover:text-text"
                >
                  Frontend
                </a>
                <a
                  href={project.links.backendRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border bg-white/[0.03] px-5 py-2.5 text-sm text-text-dim transition hover:text-text"
                >
                  Backend
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lighter project cards */}
      <div className="mt-24">
        <p className="mb-8 flex items-center gap-3 text-xs tracking-[0.2em] text-text-mute uppercase">
          More projects
          <span className="h-px flex-1 bg-border" />
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {moreProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent-dim"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-wide text-text-mute">
                  {project.type}
                </span>
                <span className="text-xs uppercase tracking-wide text-text-mute">
                  {project.year}
                </span>
              </div>

              <h3 className="mb-3 text-xl font-medium">{project.title}</h3>

              <p className="mb-6 flex-1 text-text-dim">{project.description}</p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-text-dim"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-accent hover:text-text transition"
                >
                  Live →
                </a>
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-dim hover:text-text transition"
                >
                  Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects