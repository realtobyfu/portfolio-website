
import { Canvas } from '@react-three/fiber';
import { Float, Sphere, Box, Torus } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Extend JSX namespace for Three.js elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      meshStandardMaterial: any;
      ambientLight: any;
      pointLight: any;
    }
  }
}

const FloatingShape = ({ position, color, shape }: { position: [number, number, number], color: string, shape: 'sphere' | 'box' | 'torus' }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const renderShape = () => {
    switch (shape) {
      case 'sphere':
        return <Sphere ref={meshRef} args={[0.5]} />;
      case 'box':
        return <Box ref={meshRef} args={[0.8, 0.8, 0.8]} />;
      case 'torus':
        return <Torus ref={meshRef} args={[0.6, 0.2, 8, 20]} />;
      default:
        return <Sphere ref={meshRef} args={[0.5]} />;
    }
  };

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh position={position}>
        {renderShape()}
        <meshStandardMaterial color={color} transparent opacity={0.7} />
      </mesh>
    </Float>
  );
};

const FloatingGeometry = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-20">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <FloatingShape position={[-4, 2, 0]} color="#10b981" shape="sphere" />
        <FloatingShape position={[4, -2, 0]} color="#8b5cf6" shape="box" />
        <FloatingShape position={[-2, -3, 0]} color="#3b82f6" shape="torus" />
        <FloatingShape position={[3, 3, 0]} color="#f59e0b" shape="sphere" />
        <FloatingShape position={[5, 0, 0]} color="#ef4444" shape="box" />
        <FloatingShape position={[-5, -1, 0]} color="#06b6d4" shape="torus" />
      </Canvas>
    </div>
  );
};

export default FloatingGeometry;
