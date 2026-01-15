import { useEffect, useRef, useState } from "react"
import { gsap, ScrollTrigger } from "../lib/gsap"
import { experienceData } from "../data/experienceData"
import ExperienceModal from "./ExperienceModal"


export default function Experience () {
    const sectionRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)

    const [activeItem, setActiveItem] = useState<any>(null)

    useEffect(() => {
        if (!sectionRef.current || !trackRef.current) return

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches

        if (prefersReducedMotion) return

        const ctx = gsap.context(() => {
            const track = trackRef.current!
            const section = sectionRef.current!

            const getScrollDistance = () =>
                track.scrollWidth - window.innerWidth

            gsap.to(track, {
                x: () => -getScrollDistance(),
                ease: "none",
                force3D: true,
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${track.scrollWidth}`,
                    scrub: 0.8,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            })
        }, sectionRef)

        const resizeObserver = new ResizeObserver(() => {
            ScrollTrigger.refresh()
        })

        resizeObserver.observe(trackRef.current)

        return () => {
            resizeObserver.disconnect()
            ctx.revert()
        }
    }, [])

    return (
        <>
            <section
                ref={sectionRef}
                className="relative h-screen bg-black text-white overflow-hidden "
            >
                {/* Title */}
                <div className="absolute inset-0 md:top-20 left-1/2 -translate-x-1/2 z-20">
                    <h2 className="text-4xl md:text-5xl font-semibold text-center">
                        Experience
                    </h2>
                </div>

                {/* Horizontal Track */}
                <div
                    ref={trackRef}
                    className="
                        absolute top-1/2 left-0
                        flex gap-20
                        px-[20vw]
                        -translate-y-1/2
                        will-change-transform
                        transform-gpu
                    "
                >
                    {experienceData.map((item) => (
                        <div key={item.id} className="relative min-w-[440px] md:min-w-[600px]  ">
                            {/* Year Line */}
                            <div className="absolute -top-16 left-4 flex flex-col items-center">
                                <span className="text-sm text-cyan-400 font-medium">
                                    {item.date}
                                </span>
                                <div className="w-px h-12 bg-cyan-400/40" />
                            </div>

                            {/* Card */}
                            <div
                                className="
                                    bg-white/5 backdrop-blur-md
                                    border border-white/10
                                    rounded-xl
                                    p-6
                                    transition-transform duration-300
                                    hover:-translate-y-2
                                    hover:shadow-[0_20px_40px_rgba(0,255,255,0.15)]
                                "
                            >
                                <h3 className="text-lg font-semibold text-cyan-400">
                                    {item.role}
                                </h3>

                                <p className="text-sm text-white/70">
                                    {item.company} · {item.location}
                                </p>

                                <p className="text-xs text-white/50 mt-1">
                                    {item.date} · {item.duration}
                                </p>

                                <ul className="mt-4 space-y-2 text-sm text-white/80">
                                    {item.description.slice(0, 3).map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="text-cyan-400 mt-[6px]">▹</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                {item.description.length > 3 && (
                                    <button
                                        onClick={() => setActiveItem(item)}
                                        className="mt-4 text-sm text-cyan-400 hover:underline"
                                    >
                                        View more →
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {activeItem && (
                <ExperienceModal
                    item={activeItem}
                    onClose={() => setActiveItem(null)}
                />
            )}
        </>
    )
}
