import { useRef, useEffect, useState } from "react"
import { gsap, ScrollTrigger } from "../lib/gsap"

import HeroStatic from "./HeroStatic"
import Hero3D from "./ThreeCanvas/Hero3D"
import HeroLoader from "./HeroLoader"
import { canUseWebGL } from "../utils/canUseWebGL"

export default function Hero () {
    const sectionRef = useRef<HTMLDivElement>(null)

    const [use3D, setUse3D] = useState(false)
    const [isReady, setIsReady] = useState(false)
    const [showHero, setShowHero] = useState(false)

    /* ----------------------------------
       Decide 3D vs Static
    ---------------------------------- */
    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches

        const isMobile = window.innerWidth < 1024
        const webgl = canUseWebGL()

        setUse3D(webgl && !prefersReducedMotion && !isMobile)

        // Simulated boot time
        const t = setTimeout(() => {
            setIsReady(true)
        }, 900)

        return () => clearTimeout(t)
    }, [])

    /* ----------------------------------
       Reveal Hero AFTER loader fades
    ---------------------------------- */
    useEffect(() => {
        if (!isReady) return

        const t = setTimeout(() => {
            setShowHero(true)
        }, 1000)

        return () => clearTimeout(t)
    }, [isReady])

    /* ----------------------------------
       GSAP Pin (after hero visible)
    ---------------------------------- */
    useEffect(() => {
        if (!sectionRef.current || !showHero) return

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
    }, [showHero])

    return (
        <>
            {/* Loader */}
            <div
                className={`fixed inset-0 z-50 transition-opacity duration-700 ease-out ${isReady ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
            >
                <HeroLoader />
            </div>

            {/* Hero */}
            <section
                ref={sectionRef}
                className={`relative h-screen md:h-[calc(100vh-4rem)] bg-black overflow-hidden transition-opacity duration-700 ease-out py-12 px-2 md:py-0 ${!showHero ? "opacity-100" : "opacity-0"
                    }`}
            >
                {use3D ? <Hero3D /> : <HeroStatic />}
            </section>
        </>
    )
}
