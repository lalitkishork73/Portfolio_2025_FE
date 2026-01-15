import { heroData } from "../data/heroData";

export default function HeroStatic() {


  return (
    <div    
      className="
               md:h-screen
               h-screen
                bg-black
                text-white
                flex items-center justify-center
                px-10
                relative
                overflow-hidden
            "
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/nasa-space.jpg)",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Panel */}
        <div className="bg-black/60 backdrop-blur-xl border border-cyan-400/50 rounded-xl p-6 shadow-[0_0_40px_rgba(0,255,255,0.25)]">
          <p className="text-cyan-400 text-xs tracking-widest mb-1">
            $ INIT_PORTFOLIO
          </p>

          <h1 className="text-3xl font-semibold">{heroData.name}</h1>

          <p className="text-cyan-300 text-sm mt-1">{heroData.title}</p>

          <div className="h-px bg-cyan-400/30 my-4" />

          <p className="text-sm text-white/80 leading-relaxed">
            {heroData.tagline}
          </p>

          <div className="mt-5">
            <p className="text-cyan-300 text-xs mb-2 tracking-wide">
              CORE STACK
            </p>

            <div className="flex flex-wrap gap-2 text-xs">
              {heroData.coreStack.map((skill) => (
                <span
                  key={skill}
                  className="border border-cyan-400/40 px-2 py-1 rounded text-cyan-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="bg-black/65 backdrop-blur-xl border border-cyan-400/40 rounded-xl p-6 text-cyan-200 shadow-[0_0_35px_rgba(0,255,255,0.18)]">
          <p className="text-[11px] tracking-[0.3em] text-cyan-400 mb-3">
            SYSTEM PROFILE
          </p>

          <div className="mb-3">
            <p className="text-xs text-cyan-300">EXPERIENCE LEVEL</p>
            <p className="text-sm text-white mt-1">
              {heroData.experience.level}
            </p>
          </div>

          <div className="mb-4">
            <p className="text-xs text-cyan-300">PROFESSIONAL EXPERIENCE</p>
            <p className="text-lg font-semibold text-white">
              {heroData.experience.years}
            </p>
          </div>

          <div className="h-px bg-cyan-400/25 my-3" />

          <div className="mb-4">
            <p className="text-xs text-cyan-300 mb-2">CORE DOMAINS</p>
            <div className="flex flex-wrap gap-2 text-xs">
              {heroData.experience.domains.map((domain) => (
                <span
                  key={domain}
                  className="border border-cyan-400/40 px-2 py-1 rounded"
                >
                  {domain}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2 text-xs">
            {heroData.experience.stats.map((stat) => (
              <div key={stat.label} className="flex justify-between">
                <span className="text-white/70">{stat.label}</span>
                <span className="text-cyan-400">{stat.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 text-[11px] text-cyan-400/80">
            STATUS: {heroData.experience.status}
          </div>
        </div>
      </div>
    </div>
  );
}
