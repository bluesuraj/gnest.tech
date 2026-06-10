"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  PresentationControls,
  Environment,
  RoundedBox,
  Text,
} from "@react-three/drei";
import * as THREE from "three";

/* ── Receipt that slides out of the tablet ────────────────── */
function Receipt() {
  const ref = useRef<THREE.Group>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate receipt sliding out after a short delay
    const timeout = setTimeout(() => {
      setProgress(1);
    }, 800);
    return () => clearTimeout(timeout);
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    const target = progress;
    const current = ref.current.position.y;
    ref.current.position.y = THREE.MathUtils.lerp(
      current,
      target * -1.6,
      delta * 2
    );
    // Slight unfurl rotation
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      target * 0.05,
      delta * 2
    );
  });

  return (
    <group ref={ref} position={[0, 0, 0.06]}>
      {/* Receipt paper */}
      <RoundedBox args={[1.1, 1.8, 0.02]} radius={0.02} position={[0, -0.1, 0]}>
        <meshStandardMaterial color="#FAF6EF" roughness={0.9} />
      </RoundedBox>

      {/* Receipt content — mono text lines */}
      <group position={[0, 0.5, 0.02]}>
        <Text
          fontSize={0.08}
          color="#2B1D16"
          font="/fonts/JetBrainsMono-Regular.woff"
          anchorX="center"
          anchorY="top"
          maxWidth={0.9}
        >
          {"--- RECEIPT ---"}
        </Text>
        {[
          "Cappuccino x2     ₹340",
          "Croissant x1      ₹180",
          "Flat White x1     ₹200",
          "────────────────────",
          "Subtotal          ₹720",
          "GST (5%)           ₹36",
          "────────────────────",
          "TOTAL             ₹756",
        ].map((line, i) => (
          <Text
            key={i}
            fontSize={0.055}
            color="#1A1A1A"
            font="/fonts/JetBrainsMono-Regular.woff"
            anchorX="center"
            anchorY="top"
            position={[0, -0.12 - i * 0.1, 0]}
            maxWidth={0.9}
          >
            {line}
          </Text>
        ))}
      </group>

      {/* Torn bottom edge — zigzag geometry */}
      <mesh position={[0, -1.0, 0.01]}>
        <planeGeometry args={[1.1, 0.06]} />
        <meshStandardMaterial
          color="#FAF6EF"
          roughness={1}
          transparent
          opacity={0.9}
        />
      </mesh>
    </group>
  );
}

/* ── Tablet device ────────────────────────────────────────── */
function Tablet() {
  const groupRef = useRef<THREE.Group>(null);

  return (
    <group ref={groupRef}>
      {/* Tablet body */}
      <RoundedBox args={[1.5, 2.2, 0.08]} radius={0.08}>
        <meshStandardMaterial color="#1A1A1A" roughness={0.3} metalness={0.8} />
      </RoundedBox>

      {/* Screen */}
      <RoundedBox
        args={[1.3, 2.0, 0.01]}
        radius={0.04}
        position={[0, 0, 0.045]}
      >
        <meshStandardMaterial color="#2B1D16" roughness={0.2} metalness={0.1} />
      </RoundedBox>

      {/* POS UI elements on screen */}
      <group position={[0, 0, 0.055]}>
        {/* Header bar */}
        <mesh position={[0, 0.85, 0]}>
          <planeGeometry args={[1.2, 0.15]} />
          <meshStandardMaterial color="#C96F3D" />
        </mesh>

        {/* Menu grid items */}
        {[
          [-0.35, 0.45],
          [0.15, 0.45],
          [-0.35, 0.05],
          [0.15, 0.05],
          [-0.35, -0.35],
          [0.15, -0.35],
        ].map(([x, y], i) => (
          <mesh key={i} position={[x, y, 0]}>
            <planeGeometry args={[0.4, 0.3]} />
            <meshStandardMaterial
              color={i === 0 ? "#C96F3D" : "#FAF6EF"}
              roughness={0.8}
            />
          </mesh>
        ))}

        {/* Bottom total bar */}
        <mesh position={[0, -0.8, 0]}>
          <planeGeometry args={[1.2, 0.2]} />
          <meshStandardMaterial color="#3E7C59" />
        </mesh>
      </group>

      {/* Receipt slides out from bottom */}
      <group position={[0, -1.1, 0]}>
        <Receipt />
      </group>
    </group>
  );
}

/* ── Main scene ───────────────────────────────────────────── */
function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />

      <PresentationControls
        global
        speed={1.5}
        damping={0.2}
        snap={0.5}
        polar={[-0.2, 0.2]}
        azimuth={[-0.4, 0.4]}
      >
        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
          <group scale={1.1} rotation={[0.1, -0.2, 0]}>
            <Tablet />
          </group>
        </Float>
      </PresentationControls>
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="h-[400px] w-full md:h-[480px]">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
