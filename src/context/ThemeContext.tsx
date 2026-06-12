import { createContext, useContext, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark' | 'system'

const themeCookieName = 'theme'
const validThemes: Theme[] = [ 'light', 'dark', 'system' ]

interface ThemeContextType {
  theme: Theme
  resolvedTheme: 'light' | 'dark'
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function isTheme(value: string | null): value is Theme {
  return value !== null && validThemes.includes(value as Theme)
}

function getThemeCookieDomain() {
  const hostname = window.location.hostname

  if (hostname === 'avanavana.com' || hostname.endsWith('.avanavana.com')) {
    return '; domain=.avanavana.com'
  }

  return ''
}

function getStoredThemePreference(): Theme {
  const cookieTheme = document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith(`${themeCookieName}=`))
    ?.split('=')[1] ?? null

  if (isTheme(cookieTheme)) return cookieTheme

  const localStorageTheme = localStorage.getItem(themeCookieName)
  if (isTheme(localStorageTheme)) return localStorageTheme

  return 'system'
}

function persistThemePreference(theme: Theme) {
  localStorage.setItem(themeCookieName, theme)
  document.cookie = `${themeCookieName}=${theme}; path=/; max-age=31536000; samesite=lax${getThemeCookieDomain()}`
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ theme, setThemeState ] = useState<Theme>(() => {
    return getStoredThemePreference()
  })

  const [ resolvedTheme, setResolvedTheme ] = useState<'light' | 'dark'>(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    persistThemePreference(theme)

    const root = document.documentElement

    const applyTheme = (theme: Theme) => {
      const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

      setResolvedTheme(isDark ? 'dark' : 'light')

      if (isDark) {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
    }

    applyTheme(theme)

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = () => applyTheme('system')
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [ theme ])

  const setTheme = (theme: Theme) => {
    setThemeState(theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme() must be used within a ThemeProvider.')
  return context
}
