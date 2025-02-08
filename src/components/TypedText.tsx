import { motion } from 'framer-motion'
import { getChildrenAsText } from '@/lib/utils'

interface TypedTextProps {
  as?: 'div' | 'span' | 'p'
  children?: React.ReactNode
  className?: string
  delay?: number
}

const TypedText: React.FC<TypedTextProps> = ({ as = 'span', children, className, delay = 0, ...props }) => {
  const textVariants = {
    hidden: {},
    visible: { opacity: 1, transition: { delay, staggerChildren: 0.075, when: 'beforeChildren' } },
  }

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { opacity: { duration: 0 } } },
  }

  const text = getChildrenAsText(children)

  let Comp

  switch (as) {
    case 'div':
      Comp = motion.div
      break
    case 'p':
      Comp = motion.p
      break
    case 'span':
    default:
      Comp = motion.span
      break
  }

  return text ? (
    <Comp
      className={className}
      variants={textVariants}
      initial='hidden'
      animate='visible'
      {...props}
    >
      {text.split('').map((char, i) => (
        <motion.span key={`${char}-${i}`} variants={letterVariants}>{char}</motion.span>
      ))}
    </Comp>
  ) : null
}

TypedText.displayName = 'TypedText'

export default TypedText
