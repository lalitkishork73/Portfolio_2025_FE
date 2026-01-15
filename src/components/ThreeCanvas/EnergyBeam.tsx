import * as THREE from 'three'

export function EnergyBeam () {
    return (
        <>
            <mesh>
                <cylinderGeometry args={[0.05, 0.05, 4, 32]} />
                <meshBasicMaterial
                    color="#00eaff"
                    transparent
                    opacity={0.6}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            {/* glow layer */}
            <mesh>
                <cylinderGeometry args={[0.15, 0.15, 4, 32]} />
                <meshBasicMaterial
                    color="#00eaff"
                    transparent
                    opacity={0.15}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>
        </>
    )
}
