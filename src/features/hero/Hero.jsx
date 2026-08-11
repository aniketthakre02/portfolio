import avatar from "../../assets/avatar2.jpeg"
function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center"
        >
            {/* Horizon glow — the atmospheric gradient from the reference design */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(139,128,245,0.16), transparent 60%), radial-gradient(ellipse 60% 40% at 20% 0%, rgba(139,128,245,0.08), transparent 60%)',
                }}
            />
            {/* Horizon arc — giant ellipse, mostly hidden below the section, only its top curve visible */}
            <div
                className="pointer-events-none absolute left-1/2 h-[500px] w-[160%] -translate-x-1/2 rounded-[50%]"
                style={{
                    bottom: '-260px',
                    background: 'var(--color-bg-2)',
                    boxShadow:
                        '0 -1px 0 rgba(139,128,245,0.5), 0 -30px 80px -10px rgba(139,128,245,0.35), 0 -70px 160px -20px rgba(139,128,245,0.18)',
                }}
            />

            {/* Availability badge */}
            <div className="group relative mb-10 flex items-center gap-2 overflow-hidden rounded-full border border-green/40 bg-white/[0.03] px-4 py-1.5 text-xs tracking-wide text-green transition-all duration-300 hover:border-green hover:bg-green/10 hover:shadow-[inset_0_0_16px_rgba(52,211,153,0.45)]">
                <span className="h-1.5 w-1.5 rounded-full bg-green shadow-[0_0_6px_2px_rgba(52,211,153,0.6)]" />
                Open to new opportunities
            </div>

            {/* Headline */}
            <h1 className="relative max-w-4xl text-5xl font-medium leading-[1.08] tracking-tight md:text-7xl">
                I turn complex requirements into{' '}
                <span className="font-accent text-6xl italic md:text-8xl">
                    reliable software.
                </span>
            </h1>

            {/* Sub-line */}
            {/* Sub-line */}
            <div className="relative mt-10 flex items-center gap-3 text-lg text-text-dim">
                <span>Hello, I'm Aniket Thakre</span>
                <img
                    src={avatar}
                    alt="Aniket Thakre"
                    className="h-13 w-13 rounded-full border border-border object-cover"
                />
                <span>a Software Engineer</span>
            </div>

            {/* CTAs */}
            <div className="relative mt-14 flex items-center gap-4">
                <a
                    href="#contact"
                    className="flex items-center gap-3 rounded-full bg-text py-2 pl-6 pr-2 font-medium text-bg transition hover:bg-white/90"
                >
                    Let's Connect
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10">
                        →
                    </span>
                </a>
                <a
                    href="mailto:aniketthakre2005@gmail.com"
                    className="flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-5 py-2.5 text-sm text-text-dim transition hover:text-text"
                >
                    ✉ aniketthakre2005@gmail.com
                </a>
            </div>
        </section>
    )
}

export default Hero