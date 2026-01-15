import { useEffect, useRef } from "react"
import { gsap ,ScrollTrigger} from "../lib/gsap"
import { useScrollFade } from "../utils/useScrollFade"

export default function About () {
    const sectionRef = useScrollFade()
    const cardsRef = useRef<HTMLDivElement[]>([])

    useEffect(() => {
        if (!sectionRef.current || !cardsRef.current.length) return

        const ctx = gsap.context(() => {
            gsap.fromTo(
                cardsRef.current,
                {
                    y: 80,
                    opacity: 0,
                    scale: 0.95,
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 2,
                    ease: "power3.out",
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: sectionRef.current,

                        // 🔑 THESE TWO LINES ARE CRITICAL
                        start: "top 75%",
                        toggleActions: "play none none reverse",
                    },
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])


    return (
        <section
            ref={sectionRef}
            className="h-screen flex flex-col items-center justify-center px-6 text-center bg-black text-white"
        >
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
                I build systems, not just interfaces
            </h2>

            {/* Description */}
            <p className="max-w-2xl text-white/80 text-lg leading-relaxed">
                I’m a software engineer focused on designing scalable backend systems
                and crafting immersive frontend experiences.
                My work emphasizes clean architecture, performance, and long-term
                maintainability.
            </p>

            {/* Pillars */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl w-full">
                {[
                    {
                        title: "System Thinking",
                        desc: "Designed with scalability and future evolution in mind.",
                    },
                    {
                        title: "Clean Architecture",
                        desc: "Readable, maintainable code over clever hacks.",
                    },
                    {
                        title: "Performance",
                        desc: "Fast APIs, efficient queries, optimized UI rendering.",
                    },
                    {
                        title: "Immersive UI",
                        desc: "3D and motion where it genuinely adds value.",
                    },
                ].map((item, i) => (
                    <div
                        key={item.title}
                        ref={(el) => {
                            if (el) cardsRef.current[i] = el
                        }}
                        className="
                            border border-white/10
                            rounded-xl
                            p-5
                            bg-white/5
                            backdrop-blur-md
                            will-change-transform
                        "
                    >
                        <h3 className="text-lg font-medium mb-2 text-cyan-400">
                            {item.title}
                        </h3>
                        <p className="text-sm text-white/70">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* Scroll hint */}
            <div className="mt-12 text-sm text-white/50">
                Scroll to see what I’ve built ↓
            </div>
        </section>
    )
}
