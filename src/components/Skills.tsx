import { useEffect, useRef } from "react"
import { gsap, } from "../lib/gsap"
import { skillsData } from "../data/skillsData"

export default function Skills () {
    const sectionRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<HTMLDivElement[]>([])

    useEffect(() => {
        if (!sectionRef.current) return

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches

        if (prefersReducedMotion) return

        const ctx = gsap.context(() => {
            gsap.fromTo(
                cardsRef.current,
                {
                    opacity: 0,
                    y: 80,
                    scale: 0.95,
                    willChange: "transform, opacity",
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    ease: "power3.out",
                    stagger: 0.15,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                        once: true,
                    },
                }
            )
        }, sectionRef)

        return () => {
            ctx.revert()
        }
    }, [])

    return (
        <section
            ref={sectionRef}
            className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-24"
        >
            <h2 className="text-4xl md:text-5xl font-semibold mb-12">
                Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
                {skillsData.map((group, i) => (
                    <div
                        key={group.category}
                        ref={(el) => {
                            if (el) cardsRef.current[i] = el
                        }}
                        className="
                            bg-white/5 backdrop-blur-md
                            border border-white/10
                            rounded-xl
                            p-6
                            transition-transform duration-300
                            hover:-translate-y-2
                            hover:shadow-[0_20px_40px_rgba(0,255,255,0.15)]
                            transform-gpu
                        "
                    >
                        <h3 className="text-xl font-semibold text-cyan-400 mb-1">
                            {group.category}
                        </h3>

                        <p className="text-sm text-white/60 mb-4">
                            {group.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="
                                        text-xs px-3 py-1 rounded-full
                                        border border-cyan-400/40
                                        text-cyan-200 bg-cyan-400/5
                                    "
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-sm text-white/50">
                Scroll to explore projects ↓
            </div>
        </section>
    )
}
