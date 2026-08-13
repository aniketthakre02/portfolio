import { skillCategories } from '../../data/skills'

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-16 text-4xl font-medium md:text-5xl">
        Technical{' '}
        <span className="font-accent text-5xl italic md:text-6xl">
          toolkit.
        </span>
      </h2>

      <div className="space-y-16">
        {skillCategories.map((category) => (
          <div key={category.id}>
            <p className="mb-6 flex items-center gap-3 text-xs tracking-[0.2em] text-text-mute uppercase">
              {category.label}
              <span className="h-px flex-1 bg-border" />
            </p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {category.skills.map((skill) => {
                const Icon = skill.icon
                return (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-1 hover:border-accent-dim"
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                      style={{
                        backgroundColor: skill.bgLight
                          ? 'rgba(255,255,255,0.9)'
                          : `${skill.color}20`,
                      }}
                    >
                      <Icon
                        size={20}
                        style={{ color: skill.neutral ? skill.color : skill.color }}
                      />
                    </div>
                    <span className="text-sm font-medium tracking-wide">
                      {skill.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills