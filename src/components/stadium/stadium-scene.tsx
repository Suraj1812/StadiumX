"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float, Sparkles } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Group, Mesh } from "three";
import * as THREE from "three";

function CricketBall() {
  const group = useRef<Group>(null);
  const ball = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.44;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.55) * 0.12;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.08;
    }

    if (ball.current) {
      ball.current.rotation.z -= delta * 0.28;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.8}>
      <group ref={group} position={[0.15, 0.1, 0]}>
        <mesh ref={ball} castShadow receiveShadow>
          <sphereGeometry args={[1.18, 96, 96]} />
          <meshStandardMaterial
            color="#7c1014"
            roughness={0.46}
            metalness={0.12}
            emissive="#250305"
            emissiveIntensity={0.25}
          />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.205, 0.018, 12, 180]} />
          <meshStandardMaterial color="#f4d7a1" emissive="#e6b325" emissiveIntensity={0.18} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, Math.PI / 2.8]}>
          <torusGeometry args={[1.18, 0.01, 10, 160]} />
          <meshStandardMaterial color="#fff2d0" emissive="#ffffff" emissiveIntensity={0.15} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, -Math.PI / 2.8]}>
          <torusGeometry args={[1.18, 0.01, 10, 160]} />
          <meshStandardMaterial color="#fff2d0" emissive="#ffffff" emissiveIntensity={0.15} />
        </mesh>
        {Array.from({ length: 22 }).map((_, index) => {
          const angle = (index / 22) * Math.PI * 2;
          return (
            <mesh
              key={index}
              position={[Math.cos(angle) * 0.14, Math.sin(angle) * 1.205, Math.cos(angle) * 1.15]}
              rotation={[0, angle, Math.PI / 5]}
            >
              <boxGeometry args={[0.035, 0.13, 0.012]} />
              <meshStandardMaterial color="#f6e8bf" emissive="#e6b325" emissiveIntensity={0.24} />
            </mesh>
          );
        })}
      </group>
    </Float>
  );
}

function StadiumRim() {
  const rim = useRef<Group>(null);

  useFrame((state) => {
    if (rim.current) {
      rim.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.035;
    }
  });

  return (
    <group ref={rim} position={[0, -1.18, -1.4]} rotation={[0.3, 0, 0]}>
      <mesh receiveShadow>
        <cylinderGeometry args={[5.2, 5.8, 0.18, 96, 1, true, 0, Math.PI * 2]} />
        <meshStandardMaterial
          color="#08150f"
          emissive="#0B3D2E"
          emissiveIntensity={0.42}
          side={THREE.DoubleSide}
        />
      </mesh>
      {Array.from({ length: 48 }).map((_, index) => {
        const angle = (index / 48) * Math.PI * 2;
        const radius = 5.05;
        return (
          <mesh
            key={index}
            position={[Math.cos(angle) * radius, 0.16, Math.sin(angle) * radius]}
            rotation={[0, -angle, 0]}
          >
            <boxGeometry args={[0.08, 0.34 + (index % 3) * 0.06, 0.18]} />
            <meshStandardMaterial
              color={index % 6 === 0 ? "#E6B325" : index % 4 === 0 ? "#FF3B3B" : "#12392e"}
              emissive={index % 6 === 0 ? "#E6B325" : "#5CFF8F"}
              emissiveIntensity={index % 6 === 0 ? 0.7 : 0.2}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function FloodRig() {
  return (
    <>
      <spotLight position={[-4.6, 4.4, 2.2]} angle={0.42} penumbra={0.85} intensity={180} color="#dfffea" castShadow />
      <spotLight position={[4.6, 4.2, 2.2]} angle={0.42} penumbra={0.85} intensity={150} color="#f8df8a" />
      <pointLight position={[0, 1.6, 2]} intensity={22} color="#FF3B3B" />
      <pointLight position={[0, 2.2, -2.8]} intensity={25} color="#5CFF8F" />
    </>
  );
}

export function StadiumScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        shadows
        dpr={[1, 1.75]}
        camera={{ position: [0, 0.35, 5.8], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={["#050505"]} />
          <fog attach="fog" args={["#050505", 4, 10]} />
          <ambientLight intensity={0.65} color="#8beea7" />
          <FloodRig />
          <StadiumRim />
          <CricketBall />
          <Sparkles count={70} scale={[6, 2.8, 4]} size={2.2} speed={0.32} color="#5CFF8F" opacity={0.42} />
          <ContactShadows position={[0, -1.35, 0]} opacity={0.45} scale={7} blur={2.8} far={4} />
        </Suspense>
      </Canvas>
    </div>
  );
}
