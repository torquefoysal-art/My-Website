"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { getSceneMood } from "@/lib/scene-mood";

const moodColor: Record<string, string> = {
  gold: "#1a6fbf",
  ivory: "#f7fbff",
  green: "#7ec8ea",
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
  const color = useMemo(() => new THREE.Color("#1a6fbf"), []);
  const target = useMemo(() => new THREE.Color("#1a6fbf"), []);

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

  useFrame((state, delta) => {
    if (!root.current || !rings.current) return;

    const targetY = pointer.current.x * 0.55;
    const targetX = pointer.current.y * -0.28;
    root.current.rotation.y = THREE.MathUtils.damp(root.current.rotation.y, targetY + state.clock.elapsedTime * 0.08, 2.4, delta);
    root.current.rotation.x = THREE.MathUtils.damp(root.current.rotation.x, targetX, 2.4, delta);
    root.current.position.y = 0.12 + Math.sin(state.clock.elapsedTime * 0.7) * 0.08;
    rings.current.rotation.y += delta * 0.18;
    rings.current.rotation.z += delta * 0.04;

    target.set(moodColor[getSceneMood()] ?? moodColor.gold);
    color.lerp(target, 0.08);
    if (core.current) {
      core.current.emissive.copy(color);
      core.current.color.copy(color);
    }
    if (light.current) light.current.color.copy(color);
  });

  return (
    <group ref={root} position={[1.15, 0.12, 0]}>
      <group ref={rings}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.78, 0.012, 12, 180]} />
          <meshStandardMaterial color="#f7fbff" metalness={0.92} roughness={0.16} />
        </mesh>
        <mesh rotation={[1.15, 0.35, 0.15]}>
          <torusGeometry args={[2.02, 0.008, 12, 180]} />
          <meshStandardMaterial color="#1a6fbf" metalness={0.86} roughness={0.22} />
        </mesh>
        <mesh rotation={[0.35, 0.2, Math.PI / 2]}>
          <torusGeometry args={[1.46, 0.008, 12, 160]} />
          <meshStandardMaterial color="#7ec8ea" metalness={0.8} roughness={0.24} />
        </mesh>
      </group>

      <mesh geometry={star} rotation={[0.15, 0.2, 0.08]}>
        <meshStandardMaterial color="#d7ebf8" metalness={0.72} roughness={0.22} />
      </mesh>
      <mesh geometry={starInner} rotation={[0.65, 0.85, 0.25]}>
        <meshStandardMaterial color="#0b1f3a" metalness={0.84} roughness={0.28} />
      </mesh>

      <mesh>
        <sphereGeometry args={[0.18, 40, 40]} />
        <meshStandardMaterial
          ref={core}
          color="#1a6fbf"
          emissive="#7ec8ea"
          emissiveIntensity={0.7}
          roughness={0.28}
        />
      </mesh>
      <pointLight ref={light} intensity={8} distance={5.2} color="#7ec8ea" />
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
      <pointsMaterial color="#7ec8ea" size={0.016} sizeAttenuation transparent opacity={0.75} />
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
        gl.setClearColor("#e7f3fb");
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.12;
      }}
    >
      <hemisphereLight args={["#f7fbff", "#0b1f3a", 0.7]} />
      <ambientLight intensity={0.35} color="#f7fbff" />
      <directionalLight position={[4.5, 5.5, 6]} intensity={3.1} color="#ffffff" />
      <directionalLight position={[-5, -1.5, -3]} intensity={1.6} color="#7ec8ea" />
      <Sculpture />
      <Dust />
    </Canvas>
  );
}
