import React, { useEffect, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrthographicCamera, AsciiRenderer } from '@react-three/drei'
import { SpotLight } from 'three'
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js'
import { animate, motion, useMotionValue } from 'framer-motion'

import { cn } from '@/lib/utils'
import { colors } from '../../tailwind.config'

import type { ShapePath } from 'three'

const MovingLight = () => {
  const lightRef = useRef<SpotLight>(null)
  const intensity = useMotionValue(3000)

  useEffect(() => {
    const controls = animate(intensity, 200000, {
      delay: 500,
      duration: 5,
      ease: 'easeInOut',
      onUpdate: (value) => {
        if (lightRef.current) {
          lightRef.current.intensity = value
        }
      }
    })

    return () => controls.stop()
  }, [ intensity ])

  useFrame(({ clock }) => {
    if (lightRef.current) {
      const t = clock.getElapsedTime() * -1.5
      const radius = 4

      lightRef.current.position.set(
        Math.sin(t) * radius,
        Math.cos(t) * radius,
        4
      );
    }
  })

  return (
    <spotLight
      ref={lightRef}
      position={[-2, 2, 2]}
      angle={Math.PI / 2}
      intensity={3000}
    />
  )
}

const LogoSvg = () => {
  const svg = useLoader(SVGLoader, '/src/assets/logo.svg')

  return (
    <group position={[3.0, 0.735, -1]} scale={[-1 / 100, -1 / 100, 1]}>
      {svg.paths.map((path: ShapePath, i) => (
        <mesh key={i} position={[0, 0, 0]}>
          <shapeGeometry
            args={[path.toShapes(true)[0]]}
            ref={(geometry) => {
              if (geometry) geometry.computeVertexNormals()
            }}
          />
          <meshStandardMaterial
            attach='material'
            color={colors['gray-dark']}
            roughness={0.6}
            metalness={1}
          />
        </mesh>
      ))}
    </group>
  )
}

interface LogoAsciiProps {
  className?: string
}

const LogoAscii: React.FC<LogoAsciiProps> = ({ className, ...props }) => (
  <motion.div
    className={cn('relative overflow-hidden', className)}
    initial={{ clipPath: 'polygon(100% 0%, 100% 100%, -14% 100%, 0% 0%)' }}
    animate={{ clipPath: 'polygon(100% 0%, 100% 100%, 100% 100%, 114% 0%)' }}
    transition={{ delay: 5, duration: 4, ease: 'easeInOut' }}
    {...props}
  >
    <Canvas className='!w-[600px] !h-[144px]'>
      <OrthographicCamera makeDefault position={[0, 0, 1]} zoom={100} />
      <MovingLight />
      <LogoSvg />
      <AsciiRenderer
        fgColor={colors['gray-dark']}
        bgColor='transparent'
        invert={false}
        characters={` .,;-<+|[}&="@#`}
        resolution={0.2}
      />
    </Canvas>
  </motion.div>
)

LogoAscii.displayName = 'LogoAscii'

export default LogoAscii;