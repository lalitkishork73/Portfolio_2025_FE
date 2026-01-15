export default function Footer () {
    return (
        <footer
            className="
                bg-black
                border-t border-cyan-400/20
                text-white
                h-full
            "
        >
            <div
                className="
                    max-w-7xl mx-auto
                    px-6 py-14
                    flex flex-col
                    items-center
                    gap-10
                "
            >
                {/* Brand */}
                <div className="text-center max-w-md">
                    <h3
                        className="
                            font-terminal
                            text-lg
                            tracking-[0.35em]
                            text-cyan-400
                            mb-3
                        "
                    >
                        EVANGELION
                    </h3>

                    <p className="text-sm text-white/60 leading-relaxed">
                        Engineering systems. Building immersive experiences.
                    </p>
                </div>

                {/* Navigation */}
                <nav aria-label="Footer Navigation">
                    <ul
                        className="
                            flex flex-wrap
                            justify-center
                            gap-x-6 gap-y-3
                            text-sm
                            font-terminal
                        "
                    >
                        {[
                            "Hero",
                            "About",
                            "Experience",
                            "Skills",
                            "Projects",
                            "Contact",
                        ].map(item => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="
                                        text-white/60
                                        transition-colors duration-300
                                        hover:text-cyan-400
                                        focus:outline-none
                                        focus:text-cyan-400
                                    "
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Divider */}
                <div className="w-full h-px bg-white/10" />

                {/* Bottom */}
                <div
                    className="
                        w-full
                        flex flex-col
                        md:flex-row
                        items-center
                        justify-between
                        gap-4
                        text-xs
                        text-white/50
                        text-center md:text-left
                    "
                >
                    <span>
                        © {new Date().getFullYear()}{" "}
                        <span className="text-white/70">
                            Lalitkishor Kanojiya
                        </span>
                        . All rights reserved.
                    </span>

                    <span className="font-terminal tracking-wide">
                        Built with React · Three.js · GSAP
                    </span>
                </div>
            </div>
        </footer>
    )
}
