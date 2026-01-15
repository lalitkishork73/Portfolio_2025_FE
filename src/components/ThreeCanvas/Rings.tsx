import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export function Rings ({ position }: { position: [number, number, number] }) {
    const group = useRef<THREE.Group>(null!)

    // useFrame((_, delta) => {
    //     group.current.rotation.z += delta * 0.3
    // })

    useFrame((_, delta) => {
        group.current.rotation.z += delta * 0.4
        group.current.rotation.y += delta * 0.15
    })

    return (
        <group ref={group} position={position} rotation={[Math.PI / 3, Math.PI / 8, 0]}>
            <mesh>
                <torusGeometry args={[1.4, 0.12, 32, 160]} />
                <meshBasicMaterial
                    color="#00eaff"
                    transparent
                    opacity={0.9}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            <mesh rotation={[0, 0, Math.PI / 4]}>
                <torusGeometry args={[1.1, 0.02, 16, 100]} />
                <meshBasicMaterial
                    color="#00eaff"
                    transparent
                    opacity={0.6}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>
        </group>
    )
}
