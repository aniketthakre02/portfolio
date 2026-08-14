import { useState } from 'react'
import { certificates } from '../../data/certificates'

function Certificates() {
  const [index, setIndex] = useState(0)
  const current = certificates[index]

  const goPrev = () => {
    setIndex((i) => (i === 0 ? certificates.length - 1 : i - 1))
  }

  const goNext = () => {
    setIndex((i) => (i === certificates.length - 1 ? 0 : i + 1))
  }

  return (
    <section id="certificates" className="mx-auto max-w-4xl px-6 py-24 text-center">
      <p className="mb-6 flex items-center justify-center gap-3 text-xs tracking-[0.2em] text-text-mute uppercase">
        <span className="h-px w-8 bg-border" />
        Certificates
        <span className="h-px w-8 bg-border" />
      </p>

      <h2 className="mb-16 text-4xl font-medium md:text-5xl">
        Courses &{' '}
        <span className="font-accent text-5xl italic md:text-6xl">
          credentials.
        </span>
      </h2>

      {/* Certificate image */}
      <div className="relative mx-auto mb-8 aspect-[4/3] max-w-2xl overflow-hidden rounded-2xl border border-border bg-card">
        <img
          src={current.image}
          alt={current.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Details */}
      <h3 className="mb-2 text-xl font-medium">{current.title}</h3>
      <a
        href={current.verifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:text-text transition"
      >
        {current.issuer}
      </a>
      <p className="mt-2 text-sm text-text-mute">{current.date}</p>

      {/* Prev/Next controls */}
      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          onClick={goPrev}
          aria-label="Previous certificate"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-text transition hover:bg-accent-dim"
        >
          ←
        </button>
        <button
          onClick={goNext}
          aria-label="Next certificate"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-text transition hover:bg-accent-dim"
        >
          →
        </button>
      </div>

      {/* Dot pagination */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {certificates.map((cert, i) => (
          <button
            key={cert.id}
            onClick={() => setIndex(i)}
            aria-label={`Go to certificate ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-accent' : 'w-2 bg-border'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Certificates