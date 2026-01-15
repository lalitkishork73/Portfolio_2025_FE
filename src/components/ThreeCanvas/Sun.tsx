// import * as THREE from 'three'

export function Sun () {
    return (
        <>
            {/* Sun mesh */}
            <mesh position={[15, 10, -20]}>
                <sphereGeometry args={[3, 64, 64]} />
                <meshBasicMaterial color="#ffaa33" />
            </mesh>

            {/* Sun light */}
            <pointLight
                position={[15, 10, -20]}
                intensity={25}
                color="#ffddaa"
            />
        </>
    )
}
