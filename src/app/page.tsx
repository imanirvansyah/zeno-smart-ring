/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { MouseIcon } from '@/components/icons/mouse'
import { DescriptionSection } from '@/components/sections/description'
import { FeaturesSection } from '@/components/sections/features'
import { FollowUpSection } from '@/components/sections/follow-up'
import { HeroSection } from '@/components/sections/hero'
import { SpecSection } from '@/components/sections/specs'
import { SupportAppSection } from '@/components/sections/support-app'

import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three';

export default function Home() {
  return (
    <div>
      <Canvas3D />
      <HeroSection />
      <DescriptionSection />
      <FeaturesSection />
      <SpecSection />
      <SupportAppSection />
      <FollowUpSection />
      <div className="scroll_indicator">
        <MouseIcon />
        <span>Scroll to discover</span>
      </div>
    </div>
  );
}


export const Canvas3D = () => {
  return (
    <div id="canvas-container" style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
      <Canvas>
        {/* <ambientLight intensity={0.2} /> */}
        <directionalLight />
        {/* <OrbitControls /> */}
        <Box />
        {/* <Ico /> */}
      </Canvas>
    </div>
  )
}

const Box = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (!meshRef) return;

    meshRef.current.rotation.x += delta
    meshRef.current.rotation.y += delta
  })


  const { nodes, materials } = useGLTF('/models/black-ring.glb');

  return (
    /* @ts-ignore */
    <group ref={meshRef} isGroup>
      <mesh
        /* @ts-ignore */
        geometry={nodes?.Ring.geometry}
        scale={2}
        material={materials["darkBlue"]}
        position={[0, 0, 0]}>
        {/* <boxGeometry /> */}
      </mesh>
      <mesh
        /* @ts-ignore */
        geometry={nodes?.Ring2.geometry}
        scale={2}
        material={materials["Black"]}
        position={[0, .001, 0]}>
      </mesh>
      <mesh
        /* @ts-ignore */
        geometry={nodes?.Ring001.geometry}
        scale={2}
        material={materials["darkBlue"]}
        position={[0, .002, 0]}>
      </mesh>
    </group>
    // <mesh ref={meshRef} position={[0, 0, 0]} >
    //   <ambientLight intensity={0.2} />
    //   <boxGeometry args={[1, 1, 1]} />
    //   <meshNormalMaterial />
    // </mesh>
  )
}
