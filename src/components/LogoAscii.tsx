import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrthographicCamera, AsciiRenderer } from '@react-three/drei'
import { SpotLight } from 'three'
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js'
import { animate, motion, useMotionValue } from 'framer-motion'

import { useWindowSize } from '@/hooks/useWindowSize'
import { cn, extractNumber } from '@/lib/utils'
import { colors, screens } from '../../tailwind.config'

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

const logoSizes = {
  default: {
    position: [ 3.0, 0.735, -1 ],
    scale: [ -1 / 100, -1 / 100, 1 ],
    canvasClassName: '!w-[600px] !h-[144px]'
  },
  mid: {
    position: [ 1.5, 0.37, -1 ],
    scale: [ -1 / 200, -1 / 200, 1 ],
    canvasClassName: '!w-[300px] !h-[72px]'
  },
  small: {
    position: [ 1, 0.25, -1 ],
    scale: [ -1 / 300, -1 / 300, 1 ],
    canvasClassName: '!w-[200px] !h-[48px]'
  }
} as const

interface LogoSvgProps {
  isMobile?: boolean
  size?: keyof typeof logoSizes
}

const LogoSvg: React.FC<LogoSvgProps> = ({ isMobile = false, size = 'default' }) => {
  const svg = useLoader(SVGLoader, '/src/assets/logo.svg')

  return (
    <group position={isMobile && size !== 'small' ? logoSizes.mid.position : logoSizes[size].position} scale={isMobile && size !== 'small' ? logoSizes.mid.scale : logoSizes[size].scale}>
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
  size?: keyof typeof logoSizes
  style?: React.CSSProperties
}

const LogoAscii: React.FC<LogoAsciiProps> = ({ className, size = 'default', style, ...props }) => {
  const { width: screenWidth } = useWindowSize()
  const [ isMidSizeScreenOrSmaller, setIsMidSizeScreenOrSmaller ] = useState<boolean>(screenWidth <= extractNumber(screens.mid))
  
  useEffect(() => {
    setIsMidSizeScreenOrSmaller(screenWidth <= extractNumber(screens.mid))
  }, [ screenWidth ])

  return (
    <motion.div
      className={cn('relative overflow-hidden', className)}
      {...(size !== 'small' && { initial: { clipPath: 'polygon(100% 0%, 100% 100%, -14% 100%, 0% 0%)' }})}
      {...(size !== 'small' && { animate: { clipPath: 'polygon(100% 0%, 100% 100%, 100% 100%, 114% 0%)' }})}
      {...(size !== 'small' && { transition: { delay: 5, duration: 4, ease: 'easeInOut' }})}
      {...(style && { style })}
      {...props}
    >
      <Canvas className={cn(isMidSizeScreenOrSmaller && size !== 'small' ? logoSizes.mid.canvasClassName : logoSizes[size].canvasClassName)}>
        <OrthographicCamera makeDefault position={[0, 0, 1]} zoom={100} />
        <MovingLight />
        <LogoSvg isMobile={isMidSizeScreenOrSmaller} size={size} />
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
}

LogoAscii.displayName = 'LogoAscii'

export default LogoAscii;