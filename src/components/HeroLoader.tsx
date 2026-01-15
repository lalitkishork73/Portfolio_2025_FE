export default function HeroLoader () {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            <div className="text-center relative">
                {/* Glow ring */}
                <div className="absolute inset-0 blur-2xl bg-cyan-400/20 animate-pulseSlow" />

                {/* Main Title */}
                <p className="relative font-terminal tracking-[0.35em] text-lg text-cyan-400 glitch">
                    EVANGELION
                </p>

                {/* Subtitle */}
                <p className="mt-3 text-xs text-white/60 tracking-widest typewriter">
                    INITIALIZING SYSTEM
                </p>

                {/* Loading bars */}
                <div className="mt-6 flex justify-center gap-1">
                    <span className="loader-bar" />
                    <span className="loader-bar animation-delay-150" />
                    <span className="loader-bar animation-delay-300" />
                </div>
            </div>
        </div>
    )
}
