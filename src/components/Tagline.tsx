import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'
import { colors } from '../../tailwind.config'

const taglineSizes = {
  default: { width: 600, height: 45, widthClass: 'w-[600px]', heightClass: 'h-[45px]', stroke: 3 },
  lg: { width: 600, height: 45, widthClass: 'w-[600px]', heightClass: 'h-[45px]', stroke: 3 },
  sm: { width: 200, height: 15, widthClass: 'w-[200px]', heightClass: 'h-[15px]', stroke: 1 },
} as const

interface TaglineProps {
  animated?: boolean
  className?: string
  size?: keyof typeof taglineSizes
}

const Tagline: React.FC<TaglineProps> = ({ animated = true, className, size = 'default', ...props }) => (
  <div className={cn('[&_svg]:absolute', taglineSizes[size].widthClass, taglineSizes[size].heightClass, className)} {...props}>
    <svg width={taglineSizes[size].width} height={taglineSizes[size].height} viewBox='0 0 600 45' fill='none' xmlns='http://www.w3.org/2000/svg'>
      {animated ? [
        <motion.path
          key='divider-top'
          d='M222.105 22.5001 210.132 44.0283'
          stroke={colors['gray-lighter']}
          strokeWidth={taglineSizes[size].stroke}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            delay: 10,
            duration: 0.5,
            type: 'spring',
            stiffness: 500,
            damping: 20
          }}
        />,
        <motion.path
          key='divider-bottom'
          d='M222.105 22.5001L234.079 0.971863'
          stroke={colors['gray-lighter']}
          strokeWidth={taglineSizes[size].stroke}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            delay: 10,
            duration: 0.5,
            type: 'spring',
            stiffness: 500,
            damping: 20
          }}
        />
      ] : [
        <path key='divider-top' d='M222.105 22.5001 210.132 44.0283' stroke={colors['gray-lighter']} strokeWidth={taglineSizes[size].stroke} />,
        <path key='divider-bottom' d='M222.105 22.5001L234.079 0.971863' stroke={colors['gray-lighter']} strokeWidth={taglineSizes[size].stroke} />
      ]}
    </svg>
    <svg width={taglineSizes[size].width} height={taglineSizes[size].height} viewBox='0 0 600 45' fill='none' xmlns='http://www.w3.org/2000/svg' className={cn({ '[clip-path:polygon(38.85%_0%,_34.62%_100%,_0%_100%,_0%_0%)]': animated })}>
      {animated ? (
        <motion.path
          d='M3 36.873V8.145H13.135C19.595 8.145 24.092 11.485 24.092 20.642V24.377C24.092 33.497 19.595 36.873 13.135 36.873ZM18.346 24.377V20.642C18.346 15.686 17.026 13.101 13.171 13.101H8.817V31.954H13.171C17.025 31.954 18.346 29.332 18.346 24.376M55.39 8.11V13.065H43.399V19.529H54.176V24.449H43.4V31.953H55.39V36.873H37.582V8.145H55.39ZM82.94 15.579C81.692 13.639 80.193 12.669 77.302 12.669 74.697 12.669 73.305 13.891 73.305 15.829 73.305 18.092 75.125 19.062 78.944 20.031 84.904 21.54 87.58 23.766 87.58 28.865 87.58 33.569 84.44 37.232 77.73 37.232 72.734 37.232 69.237 35.868 66.703 32.528L71.128 29.44C72.663 31.343 74.411 32.313 77.338 32.313 80.657 32.313 81.763 30.84 81.763 29.117 81.763 27.106 80.55 25.992 75.91 24.771 70.272 23.263 67.452 20.57 67.452 15.83S70.414 7.75 77.231 7.75C81.799 7.75 85.225 9.294 87.259 12.454L82.905 15.578ZM106.78 36.873H100.999V8.145H106.78ZM142.075 21.899V24.52C142.075 33.318 138.007 37.232 131.548 37.232 125.088 37.232 120.627 33.318 120.627 24.52V20.857C120.627 11.557 125.124 7.75 131.548 7.75 137.543 7.75 141.148 11.162 142.04 17.05H136.508C136.008 14.43 134.474 12.67 131.583 12.67 128.229 12.67 126.444 14.968 126.444 20.462V24.556C126.444 30.05 128.229 32.349 131.583 32.349S136.187 30.302 136.508 26.854H131.69V21.934H142.075ZM177.014 8.11V36.837H172.16L161.026 19.062V36.837H155.53V8.11H160.348L171.518 26.137V8.11Z'
          fill={colors['gray-dark']}
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          transition={{
            delay: 10.5,
            duration: 0.75,
            ease: 'easeIn'
          }}
        />
      ) : (
        <path d='M3 36.873V8.145H13.135C19.595 8.145 24.092 11.485 24.092 20.642V24.377C24.092 33.497 19.595 36.873 13.135 36.873ZM18.346 24.377V20.642C18.346 15.686 17.026 13.101 13.171 13.101H8.817V31.954H13.171C17.025 31.954 18.346 29.332 18.346 24.376M55.39 8.11V13.065H43.399V19.529H54.176V24.449H43.4V31.953H55.39V36.873H37.582V8.145H55.39ZM82.94 15.579C81.692 13.639 80.193 12.669 77.302 12.669 74.697 12.669 73.305 13.891 73.305 15.829 73.305 18.092 75.125 19.062 78.944 20.031 84.904 21.54 87.58 23.766 87.58 28.865 87.58 33.569 84.44 37.232 77.73 37.232 72.734 37.232 69.237 35.868 66.703 32.528L71.128 29.44C72.663 31.343 74.411 32.313 77.338 32.313 80.657 32.313 81.763 30.84 81.763 29.117 81.763 27.106 80.55 25.992 75.91 24.771 70.272 23.263 67.452 20.57 67.452 15.83S70.414 7.75 77.231 7.75C81.799 7.75 85.225 9.294 87.259 12.454L82.905 15.578ZM106.78 36.873H100.999V8.145H106.78ZM142.075 21.899V24.52C142.075 33.318 138.007 37.232 131.548 37.232 125.088 37.232 120.627 33.318 120.627 24.52V20.857C120.627 11.557 125.124 7.75 131.548 7.75 137.543 7.75 141.148 11.162 142.04 17.05H136.508C136.008 14.43 134.474 12.67 131.583 12.67 128.229 12.67 126.444 14.968 126.444 20.462V24.556C126.444 30.05 128.229 32.349 131.583 32.349S136.187 30.302 136.508 26.854H131.69V21.934H142.075ZM177.014 8.11V36.837H172.16L161.026 19.062V36.837H155.53V8.11H160.348L171.518 26.137V8.11Z' fill={colors['gray-dark']} />
      )}
    </svg>
    <svg width={taglineSizes[size].width} height={taglineSizes[size].height} viewBox='0 0 600 45' fill='none' xmlns='http://www.w3.org/2000/svg' className={cn({ '[clip-path:polygon(39.39%_0%,_100%_0%,_100%_100%,_35.2%_100%)]': animated })}>
      {animated ? (
        <motion.path
          d='M285.005 8.11V13.065H273.014V19.529H283.792V24.449H273.014V31.953H285.005V36.873H267.197V8.145H285.005ZM319.194 8.11V36.837H314.34L303.206 19.062V36.837H297.71V8.11H302.528L313.698 26.137V8.11ZM354.132 21.899V24.52C354.132 33.318 350.064 37.232 343.604 37.232 337.145 37.232 332.684 33.318 332.684 24.52V20.857C332.684 11.557 337.181 7.75 343.604 7.75 349.6 7.75 353.205 11.162 354.097 17.05H348.565C348.065 14.43 346.531 12.67 343.64 12.67 340.286 12.67 338.501 14.968 338.501 20.462V24.556C338.501 30.05 340.286 32.349 343.64 32.349S348.244 30.302 348.565 26.854H343.747V21.934H354.132ZM373.761 36.873H367.979V8.145H373.761ZM409.984 8.11V36.837H405.13L393.996 19.062V36.837H388.5V8.11H393.318L404.488 26.137V8.11ZM442.139 8.11V13.065H430.147V19.529H440.925V24.449H430.147V31.953H442.139V36.873H424.33V8.145H442.139ZM472.652 8.11V13.065H460.661V19.529H471.438V24.449H460.661V31.953H472.652V36.873H454.843V8.145H472.652ZM500.916 36.873 495.777 25.597H491.138V36.873H485.356V8.145H495.599C502.165 8.145 506.27 11.09 506.27 16.943 506.27 20.821 504.485 23.371 501.38 24.663L507.304 36.909H500.916ZM495.028 20.678C498.454 20.678 500.452 19.924 500.452 16.943S498.454 13.101 495.028 13.101H491.138V20.678ZM525.791 36.873H520.009V8.145H525.791ZM562.014 8.11V36.837H557.16L546.026 19.062V36.837H540.53V8.11H545.348L556.518 26.137V8.11ZM596.952 21.899V24.52C596.952 33.318 592.884 37.232 586.424 37.232 579.965 37.232 575.504 33.318 575.504 24.52V20.857C575.504 11.557 580.001 7.75 586.424 7.75 592.42 7.75 596.024 11.162 596.917 17.05H591.385C590.885 14.43 589.351 12.67 586.46 12.67 583.105 12.67 581.321 14.968 581.321 20.462V24.556C581.321 30.05 583.105 32.349 586.46 32.349S591.064 30.302 591.385 26.854H586.567V21.934H596.952Z'
          fill={colors['gray-dark']}
          initial={{ x: -600 }}
          animate={{ x: 0 }}
          transition={{
            delay: 10.5,
            duration: 0.75,
            ease: 'easeIn'
          }}
        />
      ) : (
        <path d='M285.005 8.11V13.065H273.014V19.529H283.792V24.449H273.014V31.953H285.005V36.873H267.197V8.145H285.005ZM319.194 8.11V36.837H314.34L303.206 19.062V36.837H297.71V8.11H302.528L313.698 26.137V8.11ZM354.132 21.899V24.52C354.132 33.318 350.064 37.232 343.604 37.232 337.145 37.232 332.684 33.318 332.684 24.52V20.857C332.684 11.557 337.181 7.75 343.604 7.75 349.6 7.75 353.205 11.162 354.097 17.05H348.565C348.065 14.43 346.531 12.67 343.64 12.67 340.286 12.67 338.501 14.968 338.501 20.462V24.556C338.501 30.05 340.286 32.349 343.64 32.349S348.244 30.302 348.565 26.854H343.747V21.934H354.132ZM373.761 36.873H367.979V8.145H373.761ZM409.984 8.11V36.837H405.13L393.996 19.062V36.837H388.5V8.11H393.318L404.488 26.137V8.11ZM442.139 8.11V13.065H430.147V19.529H440.925V24.449H430.147V31.953H442.139V36.873H424.33V8.145H442.139ZM472.652 8.11V13.065H460.661V19.529H471.438V24.449H460.661V31.953H472.652V36.873H454.843V8.145H472.652ZM500.916 36.873 495.777 25.597H491.138V36.873H485.356V8.145H495.599C502.165 8.145 506.27 11.09 506.27 16.943 506.27 20.821 504.485 23.371 501.38 24.663L507.304 36.909H500.916ZM495.028 20.678C498.454 20.678 500.452 19.924 500.452 16.943S498.454 13.101 495.028 13.101H491.138V20.678ZM525.791 36.873H520.009V8.145H525.791ZM562.014 8.11V36.837H557.16L546.026 19.062V36.837H540.53V8.11H545.348L556.518 26.137V8.11ZM596.952 21.899V24.52C596.952 33.318 592.884 37.232 586.424 37.232 579.965 37.232 575.504 33.318 575.504 24.52V20.857C575.504 11.557 580.001 7.75 586.424 7.75 592.42 7.75 596.024 11.162 596.917 17.05H591.385C590.885 14.43 589.351 12.67 586.46 12.67 583.105 12.67 581.321 14.968 581.321 20.462V24.556C581.321 30.05 583.105 32.349 586.46 32.349S591.064 30.302 591.385 26.854H586.567V21.934H596.952Z' fill={colors['gray-dark']} />
      )}
    </svg>
  </div>
)

Tagline.displayName = 'Tagline'

export default Tagline
