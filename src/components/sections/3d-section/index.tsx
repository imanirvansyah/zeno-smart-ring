/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useGLTF } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { RingModel } from '@/components/fragments/RingModel';

export const Canvas3D = () => {
  return (
    <div id="canvas-container" style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
      <Canvas>
        <directionalLight />
        <Suspense fallback={null}>
          <RingModel />
        </Suspense>
      </Canvas>
    </div>
  )
}



useGLTF.preload('/models/black-ring.glb');