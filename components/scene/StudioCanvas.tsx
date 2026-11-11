"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { getSceneMood } from "@/lib/scene-mood";

const moodColor: Record<string, string> = {
  gold: "#c6a36a",
  ivory: "#f3ecdf",
  green: "#7dbaa4",
};

function createStarGeometry(radius: number, depth: number) {
  const shape = new THREE.Shape();
  const spikes = 8;
  const inner = radius * 0.42;
  const total = spikes * 2;

  for (let i = 0; i < total; i += 1) {
    const distance = i % 2 === 0 ? radius : inner;
    const angle = (i / total) * Math.PI * 2 - Math.PI / 2;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }

  shape.closePath();

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelThickness: 0.018,
    bevelSize: 0.016,
    bevelSegments: 2,
    curveSegments: 1,
  });
  geometry.center();
  return geometry;
}

function Sculpture() {
  const root = useRef<THREE.Group>(null);
  const rings = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const core = useRef<THREE.MeshStandardMaterial>(null);
  const light = useRef<THREE.PointLight>(null);
  const color = useMemo(() => new THREE.Color("#c6a36a"), []);
  const target = useMemo(() => new THREE.Color("#c6a36a"), []);

  const star = useMemo(() => createStarGeometry(0.92, 0.07), []);
  const starInner = useMemo(() => createStarGeometry(0.62, 0.05), []);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      pointer.current.x = event.clientX / window.innerWidth - 0.5;
      pointer.current.y = event.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [star, starInner]);

  useFrame((_, delta) => {
    if (!root.current || !rings.current) return;

    const targetY = pointer.current.x * 0.55;
    const targetX = pointer.current.y * -0.28;
    root.current.rotation.y = THREE.MathUtils.damp(root.current.rotation.y, targetY, 2.4, delta);
    root.current.rotation.x = THREE.MathUtils.damp(root.current.rotation.x, targetX, 2.4, delta);
    rings.current.rotation.y += delta * 0.16;
    rings.current.rotation.z += delta * 0.035;

    target.set(moodColor[getSceneMood()] ?? moodColor.gold);
    color.lerp(target, 0.08);
    if (core.current) {
      core.current.emissive.copy(color);
      core.current.color.copy(color);
    }
    if (light.current) light.current.color.copy(color);
  });

  return (
    <group ref={root} position={[0.72, 0.2, 0]}>
      <group ref={rings}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.78, 0.012, 12, 180]} />
          <meshStandardMaterial color="#f3e6cc" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh rotation={[1.15, 0.35, 0.15]}>
          <torusGeometry args={[2.02, 0.008, 12, 180]} />
          <meshStandardMaterial color="#c6a36a" metalness={0.88} roughness={0.26} />
        </mesh>
        <mesh rotation={[0.35, 0.2, Math.PI / 2]}>
          <torusGeometry args={[1.46, 0.008, 12, 160]} />
          <meshStandardMaterial color="#8fb9a8" metalness={0.82} roughness={0.3} />
        </mesh>
      </group>

      <mesh geometry={star} rotation={[0.15, 0.2, 0.08]}>
        <meshStandardMaterial color="#e7d3a8" metalness={0.78} roughness={0.28} />
      </mesh>
      <mesh geometry={starInner} rotation={[0.65, 0.85, 0.25]}>
        <meshStandardMaterial color="#9a7a45" metalness={0.84} roughness={0.32} />
      </mesh>

      <mesh>
        <sphereGeometry args={[0.18, 40, 40]} />
        <meshStandardMaterial
          ref={core}
          color="#c6a36a"
          emissive="#c6a36a"
          emissiveIntensity={0.85}
          roughness={0.35}
        />
      </mesh>
      <pointLight ref={light} intensity={6} distance={4.5} color="#c6a36a" />
    </group>
  );
}

function Dust() {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 220;
    const values = new Float32Array(count * 3);
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i += 1) {
      const y = 1 - (i / (count - 1)) * 2;
      const ring = Math.sqrt(1 - y * y);
      const theta = golden * i;
      const spread = 2.15 + (i % 7) * 0.22;
      values[i * 3] = Math.cos(theta) * ring * spread + 1.1;
      values[i * 3 + 1] = y * spread * 0.72;
      values[i * 3 + 2] = Math.sin(theta) * ring * spread;
    }
    return values;
  }, []);

  useFrame((_, delta) => {
    if (points.current) points.current.rotation.y += delta * 0.03;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#e6d3ae" size={0.015} sizeAttenuation transparent opacity={0.7} />
    </points>
  );
}

export default function StudioCanvas() {
  const [live, setLive] = useState(true);
  const wide = typeof window !== "undefined" && window.innerWidth > 900;

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY < window.innerHeight * 0.95;
      setLive((current) => (current === next ? current : next));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Canvas
      className="studio-canvas"
      frameloop={live ? "always" : "demand"}
      dpr={wide ? [1, 1.6] : 1}
      camera={{ position: wide ? [0.2, 0.1, 6.1] : [1.2, 0.2, 7.4], fov: wide ? 32 : 38 }}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.setClearColor("#090807");
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.18;
      }}
    >
      <hemisphereLight args={["#f4ecdf", "#10241f", 0.55]} />
      <ambientLight intensity={0.18} color="#f3ecdf" />
      <directionalLight position={[4.5, 5.5, 6]} intensity={3.4} color="#fff6e8" />
      <directionalLight position={[-5, -1.5, -3]} intensity={1.5} color="#6ea894" />
      <Sculpture />
      <Dust />
    </Canvas>
  );
}
