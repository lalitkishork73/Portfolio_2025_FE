import { HeroProfileCard } from "./HeroProfileCard"
import { HeroSystemCard } from "./HeroSystemCard"

export default function HeroStatic () {
  return (
    <div className="md:min-h-screen bg-black relative flex items-center justify-center py-24 md:py-0">
      <div className="absolute inset-0 bg-[url('/nasa-space.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2  gap-3 md:gap-10 max-w-5xl w-full overflow-scroll md:overflow-visible">
        <HeroProfileCard />
        {/* <HeroSystemCard /> */}
      </div>
    </div>
  )
}
