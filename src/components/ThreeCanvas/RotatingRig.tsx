import { useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"
import { ModelLalit } from "./ModelLalit"
import { ModelLalitPlatform } from "./ModelPlatform"

export function RotatingRig () {
    const group = useRef<THREE.Group>(null!)
    const { invalidate } = useThree()

    useFrame((state, delta) => {
        if (!group.current) return

        const t = state.clock.getElapsedTime()

        // Gentle, slow rotation (GPU friendly)
        group.current.rotation.y += delta * 0.25
        group.current.rotation.x = Math.sin(t * 0.8) * 0.05

        // 🔥 Tell R3F to render ONLY this frame
        invalidate()
    })

    return (
        <group ref={group}>
            <ModelLalit />
            <ModelLalitPlatform />
        </group>
    )
}
