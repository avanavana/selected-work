import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrthographicCamera, AsciiRenderer } from '@react-three/drei'
import { SpotLight } from 'three'
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js'
import { animate, motion, useMotionValue } from 'framer-motion'

import { useTheme } from '@/context/ThemeContext'
import { useWindowSize } from '@/hooks/useWindowSize'
import { cn, extractNumber } from '@/lib/utils'
import { screens } from '../../tailwind.config'

import type { ShapePath } from 'three'

/**
 *  Note: to get a "matrix"-like text effect in the AsciiRenderer, we can take a spotlight, shine it at the logo SVG,
 *  and then animate the position of the spotlight so that different ASCII characters are rendered as the moving
 *  spotlight changes the value/brightness of particular regions on the logo SVG with material applied.
 */

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
  md: {
    position: [ 1.5, 0.37, -1 ],
    scale: [ -1 / 200, -1 / 200, 1 ],
    canvasClassName: '!w-[300px] !h-[72px]'
  },
  sm: {
    position: [ 1, 0.25, -1 ],
    scale: [ -1 / 300, -1 / 300, 1 ],
    canvasClassName: '!w-[200px] !h-[48px]'
  }
} as const

interface LogoSvgProps {
  isMobile?: boolean
  size?: keyof typeof logoSizes
}

/**
 *  Note: We load the logo SVG with Three.js' SVGLoader and R3F's useLoader() hook, convert the SVG
 *  paths to a shapeGeometry, and then use that geometry to create a mesh with a meshStandardMaterial,
 *  which has "metalness" and "roughness" properties that make it susceptible to changing lighting,
 *  and therefore more dramatic when the whole thing is rendered by the AsciiRenderer.
 */

const LogoSvg: React.FC<LogoSvgProps> = ({ isMobile = false, size = 'default' }) => {
  const { resolvedTheme } = useTheme()
  const svg = useLoader(SVGLoader, resolvedTheme === 'dark' ? '/src/assets/logo-dark.svg' : '/src/assets/logo.svg')

  return (
    <group position={isMobile && size !== 'sm' ? logoSizes.md.position : logoSizes[size].position} scale={isMobile && size !== 'sm' ? logoSizes.md.scale : logoSizes[size].scale}>
      {svg.paths.map((path: ShapePath, i) => (
        <mesh key={i} position={[ 0, 0, 0 ]}>
          <shapeGeometry
            args={[ path.toShapes(true)[0] ]}
            ref={(geometry) => {
              if (geometry) geometry.computeVertexNormals()
            }}
          />
          <meshStandardMaterial
            attach='material'
            color={0x222225}
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
  const { resolvedTheme } = useTheme()
  const { width: screenWidth } = useWindowSize()
  const [ isMdScreenOrSmaller, setIsMdScreenOrSmaller ] = useState<boolean>(screenWidth <= extractNumber(screens.md))

  useEffect(() => {
    setIsMdScreenOrSmaller(screenWidth <= extractNumber(screens.md))
  }, [ screenWidth ])

  return (
    <motion.div
      className={cn('relative', className)}
      {...(size !== 'sm' && { initial: { clipPath: 'polygon(100% 0%, 100% 100%, -14% 100%, 0% 0%)', filter: 'blur(32px)' }})}
      {...(size !== 'sm' && { animate: { clipPath: 'polygon(100% 0%, 100% 100%, 100% 100%, 114% 0%)', filter: 'blur(0px)' }})}
      {...(size !== 'sm' && { transition: { clipPath: {delay: 5, duration: 4, ease: 'easeInOut' }, filter: { duration: 2, ease: 'easeOut' }}})}
      {...(style && { style })}
      {...props}
    >
      <Canvas className={isMdScreenOrSmaller && size !== 'sm' ? logoSizes.md.canvasClassName : logoSizes[size].canvasClassName}>
        <OrthographicCamera makeDefault position={[ 0, 0, 1 ]} zoom={100} />
        <MovingLight />
        <LogoSvg isMobile={isMdScreenOrSmaller} size={size} />
        <AsciiRenderer
          fgColor={resolvedTheme === 'dark' ? '#ffffff' : '#222225'}
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
