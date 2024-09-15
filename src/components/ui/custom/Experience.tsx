"use client";

import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { PerspectiveCamera, useGLTF, Environment } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

export function Knife() {
  const { nodes, materials } = useGLTF("/cyberpunk_knife.glb");
  const node = nodes.Knife as THREE.Mesh;
  const knifeRef = useRef<THREE.Mesh>(null!);
  const [scale, setScale] = useState(1);

  // Adjust scale based on screen width
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 600) {
        setScale(80); // Smaller for small screens
      } else if (screenWidth >= 600 && screenWidth < 1600) {
        setScale(70); // Medium size for tablets
      } else {
        setScale(80); // Normal size for larger screens
      }
    };

    // Initial size calculation
    handleResize();

    // Update on window resize
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame((state, delta) => {
    knifeRef.current.rotation.y -= delta / 4;
  });

  return (
    <group dispose={null}>
      <mesh ref={knifeRef} rotation={[0, 1.3, 0]}>
        <mesh
          geometry={node.geometry}
          material={materials["Material.001"]}
          position={[-30, -30, 60]}
          scale={scale}
          rotation={[-0.9, -1.3, -4.2]}
        />
        <mesh />
        <mesh
          geometry={node.geometry}
          material={materials["Material.001"]}
          position={[30, 30, -60]}
          scale={scale}
          rotation={[0.2, 2.3, 0.1]}
        />
      </mesh>
    </group>
  );
}

const Experience = () => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <Environment preset="sunset" />
      <Knife />
      <PerspectiveCamera makeDefault position={[0, 0, 1000]} />
    </Canvas>
  );
};

useGLTF.preload("/cyberpunk_knife.glb");

export default Experience;
