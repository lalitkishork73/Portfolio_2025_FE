import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register once, globally
gsap.registerPlugin(ScrollTrigger)

// Optional global defaults
ScrollTrigger.config({
    ignoreMobileResize: true,
})

export { gsap, ScrollTrigger }
