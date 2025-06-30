import gsap from 'gsap';
import { useGLTF } from '@react-three/drei';
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

type GLTFResult = GLTF & {
  nodes: {
    RingTop: THREE.Mesh;
    glow: THREE.Mesh;
    RingBottom: THREE.Mesh;
  };
  materials: {
    Black: THREE.Material;
    darkBlue: THREE.Material;
  };
};


export const RingModel = () => {
  const meshRef = useRef<THREE.Group>(null!);
  const scrollYRef = useRef(0);
  const lastScrollTime = useRef(0)

  const RingBottomRef = useRef<THREE.Mesh>(null!);
  const glowRef = useRef<THREE.Mesh>(null!);
  const RingTopRef = useRef<THREE.Mesh>(null!);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
      lastScrollTime.current = Date.now();
    }
    window.addEventListener("scroll", handleScroll);

    // gsap.to(RingBottomRef.current.position, {
    //   z: 2,
    //   scrollTrigger: {
    //     trigger: "#sec-5",
    //   },
    // })
    // gsap.to(glowRef.current.position, {
    //   z: 2,
    //   scrollTrigger: {
    //     trigger: "#sec-5",
    //   },
    // });

    // gsap.to(RingTopRef.current.position, {
    //   z: 2,
    //   scrollTrigger: {
    //     trigger: "#sec-5",
    //   },
    // });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    const now = Date.now();
    const timeSinceScroll = now - lastScrollTime.current;
    if (timeSinceScroll < 100) {
      meshRef.current.rotation.x = delta + scrollYRef.current * 0.002;
    } else {
      meshRef.current.rotation.x += delta * 0.3;
    }

  })


  const { nodes, materials } = useGLTF('/models/black-ring.glb') as GLTFResult;

  return (
    <group ref={meshRef} isGroup>
      <mesh
        ref={RingBottomRef}
        geometry={nodes?.RingBottom.geometry}
        scale={2}
        material={materials["darkBlue"]}
        position={[0, 0, 0]}>
      </mesh>
      <mesh
        ref={glowRef}
        geometry={nodes?.glow.geometry}
        scale={2}
        material={materials["Black"]}
        position={[0, 0, 0]}>
      </mesh>
      <mesh
        ref={RingTopRef}
        geometry={nodes?.RingTop.geometry}
        scale={2}
        material={materials["darkBlue"]}
        position={[0, 0, 0]}>
      </mesh>
    </group>
  )
}