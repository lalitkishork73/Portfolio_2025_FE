import { useEffect, useState } from "react";
import { Canvas} from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useInView } from "react-intersection-observer";

import { RotatingRig } from "./RotatingRig";
import InfoPanel from "./InfoPanel";
import ExperiencePanel from "./ExperiencePanel";
import HeroLoader from "../HeaderLoader";

export default function Hero3D() {
  const [mountCanvas, setMountCanvas] = useState(false);

  // Detect if Hero is visible
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  // Delay mount (prevents layout race)
  useEffect(() => {
    const id = requestAnimationFrame(() => setMountCanvas(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div ref={ref} className="fixed inset-0 z-0 pointer-events-none bg-black">
      {!mountCanvas && <HeroLoader />}

      {mountCanvas && inView && (
        <Canvas
          frameloop="demand" // 🔥 MOST IMPORTANT
          dpr={[1, 1.25]} // 🔥 GPU safe
          camera={{ fov: 35, position: [-6, 5, 12] }}
          gl={{
            antialias: false,
            powerPreference: "high-performance",
          }}
          onCreated={({ gl }) => {
            gl.setClearColor("#000000ff");
          }}
        >
          {/* Background */}
          <Stars
            radius={70}
            depth={30}
            count={200} // 🔥 reduced
            factor={4}
            fade
          />

          {/* Lights */}
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[8, 12, 6]}
            intensity={1}
            color={"white"}
          />
          <directionalLight
            position={[-6, 4, 6]}
            intensity={0.5}
            color={"blue"}
          />
          <directionalLight
            position={[-8, 12, 6]}
            intensity={1}
            color={"white"}
          />
 
          {/* Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            // enableRotate={true}      // 🔥 no user input
            minPolarAngle={Math.PI / 8}
            maxPolarAngle={Math.PI / 1.8}
          />

          {/* Scene */}
          <RotatingRig />
          <InfoPanel />
          <ExperiencePanel />
        </Canvas>
      )}
    </div>
  );
}
