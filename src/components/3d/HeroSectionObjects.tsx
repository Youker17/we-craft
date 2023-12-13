'use client'

import { OrbitControls, OrthographicCamera } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useAnimation, useScroll } from 'framer-motion'
import { motion } from 'framer-motion-3d'
import { Suspense, useState } from 'react'


// @ts-ignore
export default function Scene({ container }) {
    // const container = useRef(null)
    return (
        <div ref={container} className="h-full ">
            <Canvas className="">

                <Suspense fallback={null}>
                    <scene>
                        <OrbitControls enableZoom={false} enabled={false} />
                        {/* <color attach="background" args={["#ffffff"]} /> */}
                        <ambientLight intensity={1.5} />
                        {/* <pointLight position={[15, 20, 0]} castShadow /> */}
                        <directionalLight position={[0, 20, 0]} intensity={20} color={"#fffff"} />

                        <Square containerRef={container} />
                        {/* <Triangle /> */}

                        <OrthographicCamera makeDefault position={[0, 0, 100]} zoom={50} />
                        {/* <hemisphereLight name="Default Ambient Light" intensity={3} position={[10,40,0]} color="#ffffff" /> */}
                        {/* Hemisphere light with shadows */}
                        <hemisphereLight name="Default Ambient Light" intensity={3} position={[10, 40, 0]} color="#ffffff" castShadow />
                        {/* Directional light for shadows */}
                        <directionalLight position={[15, 10, 0]} intensity={1} castShadow shadow-mapSize={{ width: 1024, height: 1024 }} />
                    </scene>
                </Suspense>
            </Canvas>
        </div>
    )
}




// @ts-ignore
const Square = ({ containerRef }) => {
    const controls = useAnimation();
    const { scrollYProgress } = useScroll({ target: containerRef })
    const [floatEnabled, setFloatEnabled] = useState<boolean>(true)

    useFrame((state, delta) => {
        const offset = scrollYProgress.get()
        if (offset > 0.5) {
            setFloatEnabled(false)
        } else {
            setFloatEnabled(true)
        }

        // console.log(offset)
        // console.log((-offset * 10) + "y transition")
        // console.log(1 + (offset * 0.5) + "scale transition")
        controls.start({
            y: offset === 0 ? -6 : ((offset <= .5) && (offset !== 0) ? -3 : 0),
            scale: offset === 0 ? 1 : ((offset <= .5) && (offset !== 0) ? .75 : 0.5),
            rotateX: offset === 0 ? .5 : ((offset <= .5) && (offset !== 0) ? .25 : 0),
            rotateY: offset === 0 ? .5 : ((offset <= .5) && (offset !== 0) ? .25 : 0),
            rotateZ: offset === 0 ? .5 : ((offset <= .5) && (offset !== 0) ? .25 : 0),
        })
    }
    )
    return (
        // <Float enabled={floatEnabled}>

        <motion.group
            initial={{ x: 10 }}
            animate={controls}
            transition={{ duration: .5 }}
            rotation={[5, 15, 20]}>
            {/* <Float enabled={floatEnabled}> */}
            <motion.mesh
                transition={{ duration: .01, ease: "easeOut" }}
                position={[0, 0, 0]}
            >
                <boxGeometry args={[7, 7, 7]} />
                <meshStandardMaterial color="white" opacity={.9} roughness={0} metalness={.8} />
                {/* <meshPhongMaterial color="#474747" opacity={1} /> */}
            </motion.mesh>
            {/* </Float> */}
        </motion.group>
        // </Float>
    )
}




