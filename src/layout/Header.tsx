import { useState, useEffect } from "react"

const NAV_ITEMS = [
    "Hero",
    "About",
    "Experience",
    "Skills",
    "Projects",
    "Contact",
]

export default function Header () {
    const [open, setOpen] = useState(false)

    // Close drawer on ESC
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false)
        }
        window.addEventListener("keydown", onKeyDown)
        return () => window.removeEventListener("keydown", onKeyDown)
    }, [])

    return (
        <>
            <header
                className="
                    fixed top-0 left-0 w-full z-50
                    bg-black/60 backdrop-blur-xl
                    border-b border-cyan-400/20
                "
            >
                <nav
                    className="
                        max-w-7xl mx-auto
                        flex items-center justify-between
                        px-6 py-4
                        text-white
                    "
                >
                    {/* Logo */}
                    <div
                        className="
                            font-terminal
                            text-lg tracking-[0.35em]
                            text-cyan-400
                            select-none
                        "
                    >
                        EVANGELION
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-8 text-sm font-terminal">
                        {NAV_ITEMS.map(item => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="
                                        relative
                                        text-white/70
                                        transition-colors duration-300
                                        hover:text-cyan-400
                                        after:absolute after:left-0 after:-bottom-1
                                        after:h-[1px] after:w-0
                                        after:bg-cyan-400
                                        after:transition-all after:duration-300
                                        hover:after:w-full
                                    "
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(true)}
                        className="
                            md:hidden
                            text-cyan-400
                            focus:outline-none
                        "
                        aria-label="Open menu"
                    >
                        <svg
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M3 6h18M3 12h18M3 18h18" />
                        </svg>
                    </button>
                </nav>
            </header>

            {/* Backdrop */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="
                        fixed inset-0 z-40
                        bg-black/60
                        backdrop-blur-sm
                    "
                />
            )}

            {/* Mobile Drawer */}
            <aside
                className={`
                    fixed top-0 right-0 h-full w-[280px] z-50
                    bg-black/90 backdrop-blur-xl
                    border-l border-cyan-400/20
                    transform transition-transform duration-300
                    ${open ? "translate-x-0" : "translate-x-full"}
                `}
            >
                <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-400/20">
                    <span className="font-terminal text-cyan-400 tracking-widest">
                        MENU
                    </span>

                    <button
                        onClick={() => setOpen(false)}
                        className="text-cyan-400"
                        aria-label="Close menu"
                    >
                        ✕
                    </button>
                </div>

                <ul className="flex flex-col gap-6 px-6 py-8 text-sm font-terminal">
                    {NAV_ITEMS.map(item => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setOpen(false)}
                                className="
                                    block
                                    text-white/80
                                    hover:text-cyan-400
                                    transition-colors
                                "
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    )
}
