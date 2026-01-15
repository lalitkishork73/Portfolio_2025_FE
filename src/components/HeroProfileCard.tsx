import Typewriter from "typewriter-effect"
import { heroData } from "../data/heroData"

type Props = {
    variant?: "static" | "three"
}

export function HeroProfileCard ({ variant = "static" }: Props) {
    return (
        <div
            className={`
        bg-black/60 backdrop-blur-xl
        border border-cyan-400/50
        rounded-xl
        px-6 py-5
        text-white
        shadow-[0_0_40px_rgba(0,255,255,0.25)]
        ${variant === "three" ? "w-[420px]" : ""}
      `}
        >
            <p className="text-cyan-400 text-xs tracking-widest mb-1">
                $ INIT_PORTFOLIO
            </p>

            <h1 className="text-2xl font-semibold">
                {heroData.name}
            </h1>

            {/* ✅ FIX: div instead of p */}
            <div className="text-cyan-300 text-sm mt-1 min-h-[20px]">
                <Typewriter
                    options={{
                        strings: heroData.title,
                        autoStart: true,
                        loop: true,
                        delay: 40,
                        deleteSpeed: 25,
                    }}
                />
            </div>

            <div className="h-px bg-cyan-400/30 my-4" />

            <p className="text-sm text-white/80 leading-relaxed">
                {heroData.tagline}
            </p>

            <div className="mt-4">
                <p className="text-cyan-300 text-xs mb-2 tracking-wide">
                    CORE STACK
                </p>

                <div className="flex flex-wrap gap-2 text-xs">
                    {heroData.coreStack.map(skill => (
                        <span
                            key={skill}
                            className="border border-cyan-400/40 px-2 py-1 rounded text-cyan-200"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
