import React from 'react'
import { Nike } from './shoes3d/Nike.jsx'
import { Shoe } from './shoes3d/Shoe.jsx'
import '../../styles/test.css'
import { useGLTF, ContactShadows, Environment } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'




export const NikeShoe = () => {
  return (
    <>
      <div>

        <Canvas eventSource={document.getElementById('root')} eventPrefix='client' camera={{ position: [0, 0, 4], fov: 40 }}>
          <ambientLight intensity={0.7} />
          <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, -5]} castShadow />
          
          <ContactShadows resolution={512} position={[0, -0.8, 0]} opacity={1} scale={10} blur={2} far={0.8} />
          <Nike rotation={[0.3, Math.PI / 1.6, 0]} />
        </Canvas>
      </div>
      {/* <div>

        <Canvas eventSource={document.getElementById('root')} eventPrefix='client' camera={{ position: [0, 0, 32], fov: 80 }}>
          <ambientLight intensity={0.7} />
          <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, -5]} castShadow />
          <Environment preset="city" background blur={1} />
          <ContactShadows resolution={512} position={[0, -0.8, 0]} opacity={1} scale={10} blur={2} far={0.8} />
          <Shoe rotation={[0.3, Math.PI / 1.6, 0]} />
        </Canvas>
      </div> */}
    </>
  )
}





