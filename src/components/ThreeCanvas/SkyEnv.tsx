import { useThree } from "@react-three/fiber"
import { useEffect } from "react"
import * as THREE from "three"

export function SkyEnvironment () {
    const { scene } = useThree()

    useEffect(() => {
        const loader = new THREE.CubeTextureLoader()
        const texture = loader.load([
            "/env/px.jpg"
        ])

        scene.background = texture
        scene.environment = texture

        return () => {
            texture.dispose()
        }
    }, [scene])

    return null
}
