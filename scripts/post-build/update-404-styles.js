const fs = require('fs')
const path = require('path')

const buildDir = path.resolve(__dirname, 'dist')
const assetsDir = path.join(buildDir, 'assets')
const errorPagePathDev = path.resolve(__dirname, 'public/404.html')
const errorPagePathProd = path.join(buildDir, '404.html')

const GLOBAL_MARKER = '/* global.css */'

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
