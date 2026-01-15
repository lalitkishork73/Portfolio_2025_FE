import { Html } from '@react-three/drei'

function InfoPanel () {
    return (
        <Html
            position={[-4, 1, 0]}
            transform
            distanceFactor={4}
            occlude={false}
        >
            <div
                className="
          bg-black/60 backdrop-blur-xl
          border border-cyan-400/60
          text-white
          px-6 py-5
          rounded-xl
          w-[420px]
          shadow-[0_0_40px_rgba(0,255,255,0.25)]
        "
            >
                {/* Header */}
                <p className="text-cyan-400 text-xs tracking-widest mb-1">
                    $ INIT_PORTFOLIO
                </p>

                <h1 className="text-2xl font-semibold text-white">
                    Lalitkishor Kanojiya
                </h1>

                <p className="text-cyan-300 text-sm mt-1">
                    Software Engineer · Full-Stack Developer
                </p>

                {/* Divider */}
                <div className="h-px bg-cyan-400/30 my-4" />

                {/* Description */}
                <p className="text-sm text-white/80 leading-relaxed">
                    I build scalable backend systems, interactive frontends,
                    and immersive 3D web experiences.
                    Focused on clean architecture, performance,
                    and future-ready design.
                </p>

                {/* Skills */}
                <div className="mt-4">
                    <p className="text-cyan-300 text-xs mb-2 tracking-wide">
                        CORE STACK
                    </p>

                    <div className="flex flex-wrap gap-2 text-xs">
                        {[
                            'Node.js',
                            'React',
                            'Three.js',
                            'MongoDB',
                            'System Design',
                            'AWS',
                            'WebGL'
                        ].map(skill => (
                            <span
                                key={skill}
                                className="
                  border border-cyan-400/40
                  px-2 py-1 rounded
                  text-cyan-200
                "
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-5 flex items-center justify-between text-xs">
                    <span className="text-white/60">
                        Building immersive web products
                    </span>

                    <span className="text-cyan-400">
                        ↓ Scroll to explore
                    </span>
                </div>
            </div>
        </Html>
    )
}

export default InfoPanel
