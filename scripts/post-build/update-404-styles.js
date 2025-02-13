import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const rootDir = path.resolve(__dirname, '../../')

const buildDir = path.resolve(rootDir, 'dist')
const assetsDir = path.join(buildDir, 'assets')
const errorPagePathDev = path.resolve(rootDir, 'public/404.html')
const errorPagePathProd = path.join(buildDir, '404.html')

const GLOBAL_MARKER = '--global-stylesheet-marker'

const stylesheets = fs.readdirSync(assetsDir).filter(file => file.endsWith('.css'))

let globalStylesheet

for (const stylesheet of stylesheets) {
  const filePath = path.join(assetsDir, stylesheet)
  const content = fs.readFileSync(filePath, 'utf-8')

  if (content.includes(GLOBAL_MARKER)) {
    globalStylesheet = stylesheet
    break
  }
}

if (globalStylesheet) {
  let errorPageContent = fs.readFileSync(errorPagePathDev, 'utf-8')
  errorPageContent = errorPageContent.replace(/<link rel="stylesheet" href=".*">/, `<link rel="stylesheet" href="/assets/${globalStylesheet}">`)
  fs.writeFileSync(errorPagePathProd, errorPageContent)
} else {
  console.error('Unable to find global stylesheet in dist/assets.')
}
