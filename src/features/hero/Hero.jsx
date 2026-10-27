import { useEffect, useState } from 'react'
import { LuCheck, LuCopy, LuMail } from 'react-icons/lu'
import avatar from '../../assets/avatar2.jpeg'

const EMAIL = 'aniketthakre2005@gmail.com'

function Hero() {
    const [copied, setCopied] = useState(false)

    // Reset the "copied" tick after 2s. The cleanup cancels the timer
    // if the component unmounts or the button is clicked again first.
    useEffect(() => {
        if (!copied) return
        const timer = setTimeout(() => setCopied(false), 2000)
        return () => clearTimeout(timer)
    }, [copied])

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL)
            setCopied(true)
        } catch {
            // Clipboard access can be blocked; the mailto link still works.
        }
    }

    return (
        <section
            id="home"
            className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16 text-center"
        >
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(139,128,245,0.16), transparent 60%), radial-gradient(ellipse 60% 40% at 20% 0%, rgba(139,128,245,0.08), transparent 60%)',
                }}
            />
            <div
                className="pointer-events-none absolute left-1/2 h-[500px] w-[160%] -translate-x-1/2 rounded-[50%]"
                style={{
                    bottom: '-260px',
                    background: 'var(--color-bg-2)',
                    boxShadow:
                        '0 -1px 0 rgba(139,128,245,0.5), 0 -30px 80px -10px rgba(139,128,245,0.35), 0 -70px 160px -20px rgba(139,128,245,0.18)',
                }}
            />

            <div className="group relative mb-8 flex items-center gap-2 overflow-hidden rounded-full border border-green/40 bg-white/[0.03] px-4 py-1.5 text-xs tracking-wide text-green transition-all duration-300 hover:border-green hover:bg-green/10 hover:shadow-[inset_0_0_16px_rgba(52,211,153,0.45)]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green shadow-[0_0_6px_2px_rgba(52,211,153,0.6)]" />
                Open to new opportunities
            </div>

            <h1 className="relative max-w-3xl text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
                I turn complex requirements into{' '}
                <span className="block font-accent text-4xl italic sm:text-5xl lg:text-6xl">
                    reliable software.
                </span>
            </h1>

            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-lg text-text">
                <span>Hello, I'm Aniket Thakre</span>
                <img
                    src={avatar}
                    alt="Aniket Thakre"
                    className="h-11 w-11 shrink-0 rounded-full border border-border object-cover md:h-12 md:w-12"
                />
                <span>a Software Engineer</span>
            </div>

            <div className="relative mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
                <a
                    href="#contact"
                    className="flex h-11 items-center gap-3 rounded-full bg-text pl-6 pr-1.5 text-sm font-medium text-bg transition hover:-translate-y-0.5 hover:bg-white/90"
                >
                    Let's Connect
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10">
                        →
                    </span>
                </a>

                <div className="flex h-11 items-center rounded-full border border-border bg-white/[0.03] text-sm">
                    <a
                        href={`mailto:${EMAIL}`}
                        className="flex items-center gap-2 pl-5 pr-3 text-text-dim transition hover:text-text"
                    >
                        <LuMail size={16} />
                        {EMAIL}
                    </a>
                    <button
                        type="button"
                        onClick={copyEmail}
                        aria-label="Copy email address"
                        className="mr-1.5 flex h-8 w-8 items-center justify-center rounded-full text-text-dim transition hover:bg-white/10 hover:text-text"
                    >
                        {copied ? (
                            <LuCheck size={16} className="text-green" />
                        ) : (
                            <LuCopy size={16} />
                        )}
                    </button>
                    <span className="sr-only" role="status">
                        {copied ? 'Email address copied' : ''}
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Hero