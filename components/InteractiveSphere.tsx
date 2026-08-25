'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function OuterSphere({ theme, isMobile }: { theme: 'dark' | 'light'; isMobile: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const color = '#00f3ff'; // Holographic Cyan
  const count = isMobile ? 550 : 1500;
  const points = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.1 + Math.random() * 0.3;
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.08;
      ref.current.rotation.x += delta * 0.03;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[points, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={isMobile ? 0.045 : 0.035}
        transparent
        opacity={0.65}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function InnerSphere({ theme, isMobile }: { theme: 'dark' | 'light'; isMobile: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const color = '#ff9f00'; // Jarvis Gold
  const count = isMobile ? 300 : 800;
  const points = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.3 + Math.random() * 0.25;
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y -= delta * 0.12;
      ref.current.rotation.z += delta * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[points, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={isMobile ? 0.05 : 0.04}
        transparent
        opacity={0.75}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function OrbitRings({ theme }: { theme: 'dark' | 'light' }) {
  const ref1 = useRef<THREE.LineLoop>(null);
  const ref2 = useRef<THREE.LineLoop>(null);
  
  const color = '#00a8ff'; // Tech Blue

  const ringGeometry = useMemo(() => {
    const pts = [];
    const segments = 64;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(theta) * 2.5, 0, Math.sin(theta) * 2.5));
    }
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, []);

  useFrame((state, delta) => {
    if (ref1.current) {
      ref1.current.rotation.y += delta * 0.18;
      ref1.current.rotation.x = Math.PI / 4;
    }
    if (ref2.current) {
      ref2.current.rotation.y -= delta * 0.24;
      ref2.current.rotation.z = -Math.PI / 6;
    }
  });

  return (
    <group>
      <lineLoop ref={ref1} geometry={ringGeometry}>
        <lineBasicMaterial color={color} transparent opacity={theme === 'dark' ? 0.35 : 0.25} />
      </lineLoop>
      <lineLoop ref={ref2} geometry={ringGeometry}>
        <lineBasicMaterial color={color} transparent opacity={theme === 'dark' ? 0.35 : 0.25} />
      </lineLoop>
    </group>
  );
}

function SceneContainer({ theme, isMobile }: { theme: 'dark' | 'light'; isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Only listen to mouse movements on desktop
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      if (isMobile) {
        // Slow auto-rotation on mobile since there is no mouse movement
        groupRef.current.rotation.y += delta * 0.15;
      } else {
        // Smooth follow of the cursor on desktop
        const targetX = mouse.x * 0.4;
        const targetY = mouse.y * 0.4;
        groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05;
        groupRef.current.rotation.x += (targetY - groupRef.current.rotation.x) * 0.05;
      }
    }
  });

  return (
    <group ref={groupRef}>
      <OuterSphere theme={theme} isMobile={isMobile} />
      <InnerSphere theme={theme} isMobile={isMobile} />
      <OrbitRings theme={theme} />
    </group>
  );
}

export default function InteractiveSphere() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkSize();
    window.addEventListener('resize', checkSize);

    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
    };

    checkTheme();

    // Create a MutationObserver to react to html class changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      window.removeEventListener('resize', checkSize);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full h-full min-h-[350px] md:min-h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 60 }}
        dpr={isMobile ? [1, 1.2] : [1, 2]}
        gl={{ 
          antialias: !isMobile, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <ambientLight intensity={theme === 'dark' ? 0.4 : 0.6} />
        <SceneContainer theme={theme} isMobile={isMobile} />
      </Canvas>
    </div>
  );
}
