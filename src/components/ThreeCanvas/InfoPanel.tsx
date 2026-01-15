import { Html } from "@react-three/drei"
import { HeroProfileCard } from "../HeroProfileCard"

export default function InfoPanel () {
    return (
        <Html position={[-4, 1, 0]} transform distanceFactor={4}>
            <HeroProfileCard variant="three" />
        </Html>
    )
}
