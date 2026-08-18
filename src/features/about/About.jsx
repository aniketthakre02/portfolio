import { useEffect, useState } from 'react'
import { LuCode, LuMountain, LuCoffee } from 'react-icons/lu'
import code from "../../assets/about/code.png"
import cozy from "../../assets/about/cozy.png"
import Nature from "../../assets/about/Nature.png"

const SCENES = [
  { id: 'coding', image: code, caption: 'Building things.' },
  { id: 'nature', image: Nature, caption: 'Exploring.' },
  { id: 'balance', image: cozy, caption: 'Slowing down.' },
]


function About() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % SCENES.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  const scene = SCENES[activeIndex]
  const Icon = scene.icon

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

      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card">
        <div
          key={scene.id}
          className="animate-pop-in absolute inset-0"
        >
          <img
            src={scene.image}
            alt={scene.caption}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <p className="absolute bottom-16 left-6 font-accent text-2xl italic text-text">
            {scene.caption}
          </p>
        </div>

        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {SCENES.map((s, i) => (
            <span
              key={s.id}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-6 bg-text' : 'w-1.5 bg-text-mute'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About