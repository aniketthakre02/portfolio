import { experience } from '../../data/experience'

function Experience() {
    return (
        <section id="work" className="mx-auto max-w-5xl px-6 py-24">
            <p className="mb-6 flex items-center gap-3 text-xs tracking-[0.2em] text-text-mute uppercase">
                June 2023 — Present
                <span className="h-px flex-1 bg-border" />
            </p>

            <h2 className="mb-16 text-4xl font-medium md:text-5xl">
                Professional{' '}
                <span className="font-accent text-5xl italic md:text-6xl">
                    experience.
                </span>
            </h2>

            <div className="relative">
                {/* Single continuous line — one element spanning the whole list, sitting behind the dots */}
                <div className="absolute left-[5px] top-2 bottom-2 w-px bg-border" />

                <div className="space-y-20">
                    {experience.map((job) => (
                        <div key={job.id} className="group relative pl-10">
                            {/* Dot — solid gray at rest, glows on hover; the shadow ring matches the page
            background so the line visually appears to pass behind it, not through it */}
                            <div
                                className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-text-mute shadow-[0_0_0_4px_var(--color-bg),0_0_0_5px_var(--color-border)] transition-shadow duration-300 group-has-[h3:hover]:shadow-[0_0_14px_4px_rgba(139,128,245,0.7),0_0_0_4px_var(--color-bg),0_0_0_5px_var(--color-accent-dim)]"
                            />
                            <div className="mb-1 flex flex-wrap items-start justify-between gap-4">
                                <div>
                                    <p className="mb-2 text-xs uppercase tracking-wide text-text-mute">
                                        {job.duration}
                                    </p>
                                    <h3 className="w-fit cursor-default text-2xl font-medium md:text-3xl">
                                        {job.company}
                                    </h3>
                                    <p className="mt-1 text-text-dim">{job.location}</p>
                                </div>
                                <span className="whitespace-nowrap rounded-full border border-border bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-wide text-text-dim">
                                    {job.role}
                                </span>
                            </div>

                            <ul className="mt-6 max-w-2xl space-y-4">
                                {job.points.map((point, i) => (
                                    <li key={i} className="flex gap-4 text-lg leading-relaxed text-text-dim">
                                        <span className="text-accent">/</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience