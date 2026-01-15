import { heroData } from "../data/heroData"

type Props = {
    variant?: "static" | "three"
}

export function HeroSystemCard ({ variant = "static" }: Props) {
    const exp = heroData.experience

    return (
        <div
            className={`
        bg-black/65 backdrop-blur-xl
        border border-cyan-400/40
        rounded-xl
        px-5 py-4
        text-cyan-200
        shadow-[0_0_35px_rgba(0,255,255,0.18)]
        ${variant === "three" ? "w-[320px]" : ""}
      `}
        >
            <p className="text-[11px] tracking-[0.3em] text-cyan-400 mb-3">
                SYSTEM PROFILE
            </p>

            <div className="mb-3">
                <p className="text-xs text-cyan-300">EXPERIENCE LEVEL</p>
                <p className="text-sm text-white mt-1">{exp.level}</p>
            </div>

            <div className="mb-4">
                <p className="text-xs text-cyan-300">PROFESSIONAL EXPERIENCE</p>
                <p className="text-lg font-semibold text-white">{exp.years}</p>
            </div>

            <div className="h-px bg-cyan-400/25 my-3" />

            <div className="mb-4">
                <p className="text-xs text-cyan-300 mb-2">CORE DOMAINS</p>
                <div className="flex flex-wrap gap-2 text-xs">
                    {exp.domains.map(domain => (
                        <span
                            key={domain}
                            className="border border-cyan-400/40 px-2 py-1 rounded"
                        >
                            {domain}
                        </span>
                    ))}
                </div>
            </div>

            <div className="space-y-2 text-xs">
                {exp.stats.map(stat => (
                    <div key={stat.label} className="flex justify-between">
                        <span className="text-white/70">{stat.label}</span>
                        <span className="text-cyan-400">{stat.value}</span>
                    </div>
                ))}
            </div>

            <div className="mt-4 text-[11px] text-cyan-400/80">
                STATUS: {exp.status}
            </div>
        </div>
    )
}
