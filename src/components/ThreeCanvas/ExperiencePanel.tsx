import { Html } from "@react-three/drei"

export default function ExperiencePanel () {
    return (
        <Html
            position={[3.5, 0.8, 0]} // opposite side of main panel
            transform
            distanceFactor={3.5}
            occlude={false}
        >
            <div
                className="
          font-terminal
          relative
          bg-black/65 backdrop-blur-xl
          border border-cyan-400/40
          rounded-xl
          px-5 py-4
          w-[320px]
          text-cyan-200
          shadow-[0_0_35px_rgba(0,255,255,0.18)]
        "
            >
                {/* Header */}
                <p className="text-[11px] tracking-[0.3em] text-cyan-400 mb-3">
                    SYSTEM PROFILE
                </p>

                {/* Experience Level */}
                <div className="mb-3">
                    <p className="text-xs text-cyan-300">EXPERIENCE LEVEL</p>
                    <p className="text-sm mt-1 text-white">
                        Mid-Level · Product-Focused
                    </p>
                </div>

                {/* Years */}
                <div className="mb-4">
                    <p className="text-xs text-cyan-300">PROFESSIONAL EXPERIENCE</p>
                    <p className="text-lg text-white font-semibold">
                        ~2 Years
                    </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-cyan-400/25 my-3" />

                {/* Core Domains */}
                <div className="mb-4">
                    <p className="text-xs text-cyan-300 mb-2">CORE DOMAINS</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                        {["Backend", "Full-Stack", "System Design"].map(domain => (
                            <span
                                key={domain}
                                className="
                  border border-cyan-400/40
                  px-2 py-1
                  rounded
                  text-cyan-200
                "
                            >
                                {domain}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="space-y-2 text-xs">
                    <Stat label="APIs Designed" value="30+" />
                    <Stat label="Dashboards Built" value="10+" />
                    <Stat label="Systems Deployed" value="5+" />
                </div>

                {/* Footer */}
                <div className="mt-4 text-[11px] text-cyan-400/80">
                    STATUS: ACTIVE · AVAILABLE
                </div>
            </div>
        </Html>
    )
}

function Stat ({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex justify-between">
            <span className="text-white/70">{label}</span>
            <span className="text-cyan-400">{value}</span>
        </div>
    )
}
