import { useRef, useEffect, useState } from "react"
import { gsap, ScrollTrigger } from "../lib/gsap"
import HeroStatic from "./HeroStatic"
import Hero3D from "./ThreeCanvas/Hero3D"
import { canUseWebGL } from "../utils/canUseWebGL"

export default function Hero () {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [use3D, setUse3D] = useState(false)

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches

        const isMobile = window.innerWidth < 1024
        const webgl = canUseWebGL()

        setUse3D(webgl && !prefersReducedMotion && !isMobile)
    }, [])

    useEffect(() => {
        if (!sectionRef.current) return

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
        if (prefersReducedMotion) return

        const ctx = gsap.context(() => {
            ScrollTrigger.refresh()

            gsap.to(sectionRef.current, {
                opacity: 0,
                y: -50,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=300%",
                    pin: true,
                    pinSpacing: false,
                    scrub: true,
                    anticipatePin: 1,
                },
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="relative h-screen">
            {use3D ? <Hero3D /> : <HeroStatic />}
        </section>
    )
}
