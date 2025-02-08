import { motion } from 'framer-motion'

const logoSizes = {
  default: {
    width: 600
  },
  lg: {
    width: 600
  },
  sm: {
    width: 200
  }
} as const

interface LogoProps {
  className?: string
  size?: keyof typeof logoSizes
  style?: React.CSSProperties
}

const Logo: React.FC<LogoProps> = ({ className, size = 'default', style, ...props }) => (
  <motion.div
    className={className}
    {...(size !== 'sm' && { initial: { clipPath: 'polygon(0% 0%, -14% 100%, 0% 100%, 0% 0%)' }})}
    {...(size !== 'sm' && { animate: { clipPath: 'polygon(114% 0%, 100% 100%, 0% 100%, 0% 0%)' }})}
    {...(size !== 'sm' && { transition: { delay: 8, duration: 2 }})}
    {...(style && { style })}
    {...props}
  >
    <svg width={logoSizes[size].width} height={logoSizes[size].width * 0.24} viewBox='0 0 600 144' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M110.391 3.9971H141.015L191.05 88.8585L241.084 3.9971H272.168L278.985 15.5219L263.465 41.8387L256.218 30.2397L191.02 140.764L110.391 3.9971Z' fill='currentColor' />
      <path d='M407.391 140.779L342.193 30.2545L334.99 41.8535L319.47 15.5367L326.287 4.01195H357.371L407.406 88.8733L457.455 3.9971H488.079L407.421 140.779H407.391Z' fill='currentColor' />
      <path d='M597.03 139.992L516.371 3.20999L435.713 139.992H466.337L516.371 55.1308L566.406 139.992H597.03Z' fill='currentColor' />
      <path d='M380.658 139.992L300 3.20999L219.342 139.992H249.965L300 55.1308L350.035 139.992H380.658Z' fill='currentColor' />
      <path d='M164.287 139.992L83.6287 3.20999L2.97028 139.992H33.594L83.6287 55.1308L133.663 139.992H164.287Z' fill='currentColor' />
    </svg>
  </motion.div>
);

Logo.displayName = 'Logo'

export default Logo
