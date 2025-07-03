/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useGLTF } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { RingModel } from '@/components/fragments/RingModel';

export const Canvas3D: React.FC<{
  isRotating: boolean;
}> = ({ isRotating }) => {
  return (
    <Canvas>
      <directionalLight />
      <Suspense fallback={null}>
        <RingModel isRotating={isRotating} />
      </Suspense>
    </Canvas>
  )
}



useGLTF.preload('/models/black-ring.glb');