import { useGLTF } from '@react-three/drei'

export function ModelLalitPlatform () {
    const gltf = useGLTF('./sci-fi_platform__teleporter_padunity__unreal/scene.gltf')

    return (
        <primitive
            object={gltf.scene}
            scale={0.75}
            position={[-9.5, -2.6, 0]}
            receiveShadow
        />
    )
}
