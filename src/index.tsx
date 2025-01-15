import { createRoot } from 'react-dom/client'

import App from 'App'

import 'tailwindcss/tailwind.css'
import '@/styles/global.css'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<App />)
