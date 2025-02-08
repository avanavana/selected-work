import { forwardRef } from 'react'
import { Moon, Sun, SunMoon } from 'lucide-react'

import { Button } from '@/components/Button'
import KeyboardCommand from '@/components/KeyboardCommand'
import { TouchTooltip } from '@/components/TouchTooltip'

import { useTheme } from '@/context/ThemeContext'
import { cn } from '@/lib/utils'

import type { Theme } from '@/context/ThemeContext'

const themeOptions: Theme[] = [ 'light', 'dark', 'system' ]

interface ThemeToggleProps {
  className?: string
  onClick?: () => void
}

const ThemeToggle = forwardRef(({ className, onClick }: ThemeToggleProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
  const { theme } = useTheme()
  const nextTheme = themeOptions[(themeOptions.indexOf(theme) + 1) % themeOptions.length]
  const ThemeIcon = theme === 'light' ? Moon : theme === 'dark' ? SunMoon : Sun

  return (
    <TouchTooltip content={<>Switch to {nextTheme} theme<KeyboardCommand command keys={[ 'L' ]} /></>}>
      <Button
        ref={ref}
        aria-label={`Switch to ${nextTheme} theme`}
        className={cn('theme-toggle shrink-0', className)}
        onClick={onClick}
      >
        <ThemeIcon size={24} strokeWidth={2} />
      </Button>
    </TouchTooltip>
  )
})

ThemeToggle.displayName = 'ThemeToggle'

export default ThemeToggle
