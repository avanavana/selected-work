import { useEffect, useRef, useState } from 'react'

import logoAnimationData from '@/data/logo'

const charactersToSvg = new Map([
  [ '', 'M3.03098 5.15004H2.00098V4.04004H3.03098V5.15004ZM3.03098 7.98004L2.47098 9.13004H1.96098L2.28098 8.00004H2.00098V6.89004H3.03098V7.98004Z' ],
  [ '-', 'M3.94098 5.69995H1.06098V4.94995H3.94098V5.69995Z' ],
  [ '+', 'M4.70098 5.37997H2.82098V7.29997H2.18098V5.37997H0.290977V4.73997H2.18098V2.83997H2.82098V4.73997H4.70098V5.37997Z' ],
  [ '<', 'M4.53098 6.65997V7.36997L0.460976 5.34997V4.74997L4.53098 2.71997V3.42997L1.27098 5.04997L4.53098 6.65997Z' ],
  [ '|', 'M2.82098 9.61997H2.17098V0.839966H2.82098V9.61997Z' ],
  [ '}', 'M3.69098 5.28996C3.43764 5.31662 3.24431 5.44662 3.11098 5.67996C2.98431 5.90662 2.92098 6.20329 2.92098 6.56996V7.95996C2.92098 8.27996 2.83431 8.53662 2.66098 8.72996C2.48764 8.92996 2.26764 9.02996 2.00098 9.02996H1.31098V8.49996H1.73098C1.89098 8.49996 2.00764 8.41329 2.08098 8.23996C2.15431 8.06662 2.19098 7.86329 2.19098 7.62996V6.32996C2.19098 5.96329 2.27431 5.66996 2.44098 5.44996C2.61431 5.22996 2.78098 5.09329 2.94098 5.03996V5.00996C2.78098 4.95662 2.61431 4.81996 2.44098 4.59996C2.27431 4.37996 2.19098 4.07996 2.19098 3.69996V2.44996C2.19098 2.31662 2.18764 2.21329 2.18098 2.13996C2.17431 2.06662 2.15764 1.97996 2.13098 1.87996C2.11098 1.77329 2.06431 1.69662 1.99098 1.64996C1.92431 1.60329 1.83764 1.57996 1.73098 1.57996H1.31098V1.07996H1.97098C2.27764 1.07996 2.51098 1.17662 2.67098 1.36996C2.83764 1.55662 2.92098 1.80662 2.92098 2.11996V3.47996C2.92098 3.82662 2.98431 4.12329 3.11098 4.36996C3.24431 4.60996 3.43764 4.74662 3.69098 4.77996V5.28996Z' ],
])

interface LogoAsciiSmallProps {
  animated?: boolean
  className?: string
  style?: React.CSSProperties
}

const LogoAsciiSmall: React.FC<LogoAsciiSmallProps> = ({ animated = true, className, style }) => {
  const [ frames, setFrames ] = useState<(string | null)[][]>(logoAnimationData[0])
  const frameRef = useRef(0)

  useEffect(() => {
    if (animated) {
      const step = setInterval(() => {
        frameRef.current = (frameRef.current + 1) % logoAnimationData.length
        setFrames(logoAnimationData[frameRef.current])
      }, 1000 / 60)

      return () => clearInterval(step)
    }
  }, [ animated ])

  return (
    <svg
      width='200'
      height='50'
      viewBox='0 0 200 50'
      fill='currentColor'
      {...(className && { className })}
      {...(style && { style })}
    >
      {frames.flatMap((row, rowIndex) =>
        row.map((cell, cellIndex) => {
          if (cell && charactersToSvg.has(cell)) {
            return (
              <path
                key={`${rowIndex}-${cellIndex}`}
                d={charactersToSvg.get(cell) as string}
                transform={`translate(${cellIndex * 5}, ${rowIndex * 10})`}
              />
            )
          }

          return null
        })
      )}
    </svg>
  )
}

LogoAsciiSmall.displayName = 'LogoAscii'

export default LogoAsciiSmall
