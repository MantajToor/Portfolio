"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";

const TORONTO_LAT = 43.65;
const TORONTO_LON = -79.38;
const R = 1;

function latLonToVec3(lat: number, lon: number, r: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  );
}

function Earth() {
  const groupRef = useRef<THREE.Group>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  const [dayMap, specularMap, normalMap, cloudsMap] = useTexture([
    "/textures/earth_day.jpg",
    "/textures/earth_specular.jpg",
    "/textures/earth_normal.jpg",
    "/textures/earth_clouds.png",
  ]);

  // Ensure colour textures are interpreted in sRGB so colours look right
  useMemo(() => {
    dayMap.colorSpace = THREE.SRGBColorSpace;
    cloudsMap.colorSpace = THREE.SRGBColorSpace;
  }, [dayMap, cloudsMap]);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.05;
    if (cloudsRef.current) cloudsRef.current.rotation.y += delta * 0.015;
  });

  return (
    <group ref={groupRef}>
      {/* Earth surface */}
      <mesh>
        <sphereGeometry args={[R, 96, 96]} />
        <meshPhongMaterial
          map={dayMap}
          normalMap={normalMap}
          normalScale={new THREE.Vector2(0.6, 0.6)}
          specularMap={specularMap}
          specular={new THREE.Color("#1a3a5c")}
          shininess={12}
        />
      </mesh>

      {/* Cloud layer — slightly larger, rotates independently */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[R * 1.005, 64, 64]} />
        <meshLambertMaterial
          map={cloudsMap}
          transparent
          opacity={0.4}
          depthWrite={false}
        />
      </mesh>

      <TorontoMarker />
    </group>
  );
}

function TorontoMarker() {
  const dotRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const pos = latLonToVec3(TORONTO_LAT, TORONTO_LON, R + 0.015);
  const normal = pos.clone().normalize();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ringRef.current) {
      const s = 1 + 0.7 * Math.abs(Math.sin(t * 1.4));
      ringRef.current.scale.setScalar(s);
      (ringRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.8 - 0.7 * Math.abs(Math.sin(t * 1.4));
    }
    if (dotRef.current) {
      dotRef.current.scale.setScalar(1 + 0.2 * Math.sin(t * 3));
    }
  });

  const quaternion = useMemo(() => {
    const q = new THREE.Quaternion();
    q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal);
    return q;
  }, [normal]);

  return (
    <group>
      <mesh ref={dotRef} position={pos} renderOrder={2}>
        <sphereGeometry args={[0.022, 16, 16]} />
        <meshBasicMaterial color="#ffcf40" toneMapped={false} />
      </mesh>
      <mesh ref={ringRef} position={pos} quaternion={quaternion} renderOrder={2}>
        <ringGeometry args={[0.035, 0.05, 32]} />
        <meshBasicMaterial
          color="#ffcf40"
          transparent
          opacity={0.7}
          side={THREE.DoubleSide}
          toneMapped={false}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function Atmosphere() {
  // Two thin shells: inner FrontSide shell fades at the limb naturally;
  // no BackSide ring so there's no hard circular outline at the top.
  return (
    <>
      {/* Outer haze — very faint, FrontSide so it fades with viewing angle */}
      <mesh>
        <sphereGeometry args={[R * 1.025, 64, 64]} />
        <meshBasicMaterial
          color="#5aaee8"
          transparent
          opacity={0.05}
          side={THREE.FrontSide}
          depthWrite={false}
        />
      </mesh>
    </>
  );
}

export default function Globe() {
  return (
    <Canvas
      camera={{ position: [0, 0, 2.6], fov: 45 }}
      style={{ background: "transparent" }}
      gl={{ antialias: true, alpha: true }}
    >
      {/* Soft ambient so the night side isn't pitch-black */}
      <ambientLight intensity={0.25} />
      {/* Single "sun" — directional light, like real Earth */}
      <directionalLight position={[5, 2, 5]} intensity={1.6} color="#ffffff" />

      <Suspense fallback={null}>
        <Earth />
        <Atmosphere />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI * 0.15}
        maxPolarAngle={Math.PI * 0.85}
        rotateSpeed={0.5}
      />
    </Canvas>
  );
}
