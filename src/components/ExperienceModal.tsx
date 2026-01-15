interface Props {
    item: any
    onClose: () => void
}

export default function ExperienceModal ({ item, onClose }: Props) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div
                className="
                    relative max-w-2xl w-full mx-4
                    bg-[#0b0b0b]
                    border border-white/10
                    rounded-xl
                    p-8
                "
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/60 hover:text-white"
                >
                    ✕
                </button>

                <h3 className="text-2xl font-semibold text-cyan-400">
                    {item.role}
                </h3>

                <p className="text-sm text-white/70 mt-1">
                    {item.company} · {item.location}
                </p>

                <p className="text-xs text-white/50 mt-1">
                    {item.date} · {item.duration}
                </p>

                <ul className="mt-6 space-y-3 text-sm text-white/80">
                    {item.description.map((point: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-[6px]">▹</span>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
