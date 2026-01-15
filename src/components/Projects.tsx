import { useEffect, useRef } from "react"
import { gsap } from "../lib/gsap"
import { projectsData } from "../data/projectData"


export default function Projects () {
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
                    x: -30,
                    scale: 0.96,
                    willChange: "transform, opacity",
                },
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    scale: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
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
            <h2 className="text-4xl md:text-5xl font-semibold mb-14">
                Projects
            </h2>

            <div className="flex flex-col gap-12 max-w-5xl w-full">
                {projectsData.map((project, i) => (
                    <div
                        key={project.id}
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
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-semibold text-cyan-400">
                                    {project.title}
                                </h3>
                                <p className="text-xs text-white/50 mt-1">
                                    {project.duration} · {project.status}
                                </p>
                            </div>

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-cyan-400 hover:underline"
                            >
                                GitHub →
                            </a>
                        </div>

                        <p className="text-sm text-white/60 mt-3">
                            {project.category}
                        </p>

                        <ul className="mt-4 space-y-2 text-sm text-white/80">
                            {project.description.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-[6px]">▹</span>
                                    <span className="leading-relaxed">{point}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="
                                        text-xs px-3 py-1 rounded-full
                                        border border-cyan-400/40
                                        text-cyan-200 bg-cyan-400/5
                                    "
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="mt-4 text-xs text-white/60">
                            <strong className="text-cyan-400">Highlights:</strong>{" "}
                            {project.highlights.join(" · ")}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
