import { useGLTF ,useAnimations} from '@react-three/drei'
import { useEffect,useRef } from 'react'
import * as THREE from 'three'

export function ModelLalit () {
    const group = useRef<THREE.Group>(null!)
    const gltf = useGLTF('./lalit2.glb')

    const { actions, names } = useAnimations(gltf.animations, group)


    useEffect(() => {
        if (!actions || !names.length) return

        // Play the first animation automatically
        actions[names[0]]?.reset().fadeIn(0.5).play()

        return () => {
            actions[names[0]]?.fadeOut(0.3)
        }
    }, [actions, names])

    return (
        <primitive
            object={gltf.scene}
            ref={group}
            scale={2.7}
            position={[0, -2, 0]}
            rotation={[0, Math.PI, 0]}
            castShadow
            receiveShadow
        />
    )
}
