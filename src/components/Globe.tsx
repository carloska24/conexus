"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Sphere, useTexture, OrbitControls, Float } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function Earth() {
  const meshRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  const [texture, cloudsTexture] = useTexture([
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg",
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png"
  ]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.007; // Mais rápido
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.009; // Nuvens acompanham
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group>
      {/* Camada do Planeta */}
      <Sphere args={[1, 64, 64]} ref={meshRef}> {/* Escala 1.0 para mais margem */}
        <meshStandardMaterial 
          map={texture} 
          metalness={0.4} 
          roughness={0.5}
        />
      </Sphere>

      {/* Camada de Nuvens para Realismo Adicional */}
      <Sphere args={[1.02, 64, 64]} ref={cloudsRef}>
        <meshStandardMaterial 
          map={cloudsTexture}
          transparent
          opacity={0.6} // Nuvens mais visíveis
          depthWrite={false}
        />
      </Sphere>

      {/* Atmosfera / Glow Suave */}
      <Sphere args={[1.1, 32, 32]} ref={atmosphereRef}>
        <meshPhongMaterial
          color="#BE1A87"
          transparent
          opacity={0.25}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>
    </group>
  );
}

export function Globe() {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 40 }} // Foco mais fechado mas câmera longe = sem corte
        style={{ background: "transparent" }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={3.5} /> {/* Muito mais brilho para ver a 'terra' */}
          <pointLight position={[10, 10, 10]} intensity={4} color="#ffffff" />
          <pointLight position={[-10, 5, -10]} intensity={3} color="#BE1A87" />
          
          <Float 
            speed={2.5} 
            rotationIntensity={0.2} 
            floatIntensity={0.3}
          >
            <Earth />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}
