const path = require('path')

module.exports = {
  assetsPath: path.resolve(__dirname, '../src/assets'),
  buildPath: path.resolve(__dirname, '../dist'),
  entryMain: path.resolve(__dirname, '../main/index.ts'),
  entryRenderer: path.resolve(__dirname, '../src/index.tsx'),
  indexTemplate: path.resolve(__dirname, '../src/index.html'),
  libraryPath: path.resolve(__dirname, '../library'),
  outputPathMain: path.resolve(__dirname, '../dist/main'),
  outputPathRenderer: path.resolve(__dirname, '../dist/renderer'),
  stylePaths: [path.resolve(__dirname, '../src/app/styles')],
  sourcePath: path.resolve(__dirname, '../src'),
  tsconfigMain: path.resolve(__dirname, '../main/tsconfig.json'),
  tsconfigRenderer: path.resolve(__dirname, '../src/tsconfig.json'),
}
