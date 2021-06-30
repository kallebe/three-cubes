import { useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial } from '@react-three/drei';
import React, { useRef, useState } from 'react';
import { a, useSpring } from '@react-spring/three';

const SpinningBox = ({ position, args, color, speed }) => {
  const mesh = useRef(null);
  const [doExpand, setDoExpand] = useState(false);
  
  // Rotate box
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  // Animate scale onClick
  const animation = useSpring({
    scale: doExpand ? [1.5, 1.5, 1.5] : [1, 1, 1]
  });

  return (
    <a.mesh
      castShadow
      position={position}
      ref={mesh}
      scale={animation.scale}
      onClick={() => setDoExpand(!doExpand)}
    >
      <boxBufferGeometry attach='geometry' args={args} />
      <MeshWobbleMaterial attach='material' color={color} speed={speed} factor={0.6} />
    </a.mesh>
  );
}

export default SpinningBox;
