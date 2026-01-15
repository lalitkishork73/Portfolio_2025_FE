import { useEffect } from "react"

interface Props {
    item: any
    onClose: () => void
}

export default function ExperienceModal ({ item, onClose }: Props) {
    /* ----------------------------------
       Lock body scroll
    ---------------------------------- */
    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = ""
        }
    }, [])

    return (
        <div
            className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/70 backdrop-blur-sm
        px-4
      "
        >
            {/* Modal */}
            <div
                className="
          relative
          w-full max-w-2xl
          bg-[#0b0b0b]
          border border-white/10
          rounded-xl
          flex flex-col
          max-h-[85vh] md:max-h-[90vh]
        "
            >
                {/* Header (sticky on mobile) */}
                <div className="sticky top-0 z-10 bg-[#0b0b0b] px-6 py-4 border-b border-white/10">
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 text-white/60 hover:text-white"
                        aria-label="Close modal"
                    >
                        ✕
                    </button>

                    <h3 className="text-xl md:text-2xl font-semibold text-cyan-400">
                        {item.role}
                    </h3>

                    <p className="text-sm text-white/70 mt-1">
                        {item.company} · {item.location}
                    </p>

                    <p className="text-xs text-white/50 mt-1">
                        {item.date} · {item.duration}
                    </p>
                </div>

                {/* Scrollable content */}
                <div className="px-6 py-6 overflow-y-auto">
                    <ul className="space-y-3 text-sm text-white/80">
                        {item.description.map((point: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                                <span className="text-cyan-400 mt-[6px]">▹</span>
                                <span className="leading-relaxed">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
