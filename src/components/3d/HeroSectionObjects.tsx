'use client'
/*
  Auto-generated by Spline
*/
import * as THREE from 'three'
import useSpline from '@splinetool/r3f-spline'
import { Float, OrbitControls, ScrollControls, useScroll, OrthographicCamera } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useEffect } from 'react'
import { motion } from 'framer-motion-3d'
import { useAnimation } from 'framer-motion'


export default function Scene({ ...props }) {
    return (
        <div className="h-full">
            <Canvas className="">
                <Suspense fallback={null}>
                    <scene>
                        <ScrollControls damping={0.1} >
                            <OrbitControls enableZoom={false} enabled={false} />
                            {/* <color attach="background" args={["#ffffff"]} /> */}
                            <ambientLight intensity={1.5} />
                            {/* <pointLight position={[15, 20, 0]} castShadow /> */}
                            <directionalLight position={[10, 10, 0]} intensity={10} color={"#fffff"} />
                            <motion.group position={[10, -6, 0]} rotation={[5, 15, 20]}>
                                <Square />
                            </motion.group>
                            <OrthographicCamera makeDefault position={[0, 0, 100]} zoom={50} />
                            {/* <hemisphereLight name="Default Ambient Light" intensity={3} position={[10,40,0]} color="#ffffff" /> */}
                            {/* Hemisphere light with shadows */}
                            <hemisphereLight name="Default Ambient Light" intensity={3} position={[10, 40, 0]} color="#ffffff" castShadow />
                            {/* Directional light for shadows */}
                            <directionalLight position={[15, 10, 0]} intensity={1} castShadow shadow-mapSize={{ width: 1024, height: 1024 }} />
                        </ScrollControls>
                    </scene>
                </Suspense>
            </Canvas>
        </div>
    )
}





const Square = () => {
    const controls = useAnimation();
    const data = useScroll();

    useFrame((state, delta) => {
        const { offset } = data
        console.log(offset)
        controls.start({
            x: offset * 100,
        })
    }
    )
    return (
        <Float>
            <motion.mesh
                animate={controls}
                // animate={controls}
                transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}

                position={[0, 0, 0]}
            // material={materials['Silver rough']}
            >
                <boxGeometry args={[7, 7, 7]} />
                <meshStandardMaterial color="#fffff" opacity={.5} roughness={0} metalness={.8} />
                <meshPhongMaterial color="#858585" opacity={1} />

            </motion.mesh>
        </Float>
    )
}