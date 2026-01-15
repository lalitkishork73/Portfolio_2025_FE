import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { useRef } from 'react'

export function Earth () {
    const earthRef = useRef<THREE.Mesh>(null)

    const [
        colorMap,
        normalMap,
        specularMap,
    ] = useLoader(THREE.TextureLoader, [
        '/texture/earth/2k_earth_daymap.jpg',
        '/texture/earth/2k_earth_clouds.jpg',
        '/texture/earth/2k_earth_nightmap.jpg',
    ])

    useFrame((_, delta) => {
        if (earthRef.current) {
            earthRef.current.rotation.y += delta * 0.03 // slow rotation
        }
    })

    return (
        <mesh ref={earthRef} position={[0, -2, -10]}>
            <sphereGeometry args={[4, 64, 64]} />
            <meshPhongMaterial
                map={colorMap}
                normalMap={normalMap}
                specularMap={specularMap}
                specular={new THREE.Color('grey')}
                shininess={5}
            />
        </mesh>
    )
}
