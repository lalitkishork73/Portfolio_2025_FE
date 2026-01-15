import { Html } from "@react-three/drei"
import { HeroSystemCard } from "../HeroSystemCard"

export default function ExperiencePanel () {
    return (
        <Html position={[3.5, 0.8, 0]} transform distanceFactor={3.5}>
            <HeroSystemCard variant="three" />
        </Html>
    )
}
