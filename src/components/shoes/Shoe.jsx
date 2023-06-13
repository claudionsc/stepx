import React from 'react'
import '../../styles/test.css'
import {ContactShadows } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Sneaker } from './shoes3d/sneaker'
import { OrbitControls } from '@react-three/drei'




export const Shoe = () => {



  return (
    <div className='shoe'>
        <Canvas eventSource={document.getElementById('root')} eventPrefix='client' camera={{ position: [0, 0, 3], fov: 40 }}>
          <ambientLight intensity={0.7} />
          <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, -5]} castShadow />
          
          <ContactShadows resolution={512} position={[0, -0.8, 0]} opacity={1} scale={10} blur={2} far={0.8} />
          <Sneaker rotation={[0.3, Math.PI / 1.6, 0]} />
         
        </Canvas>
    </ div>
  )
}





