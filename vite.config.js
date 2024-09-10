
/** @type {import('vite').UserConfig} */

export default {
    root: 'react',
    mode: 'development',
    publicDir: 'public',
    appType: 'custom',
    logLevel: 'info',
    build: {
        outDir: '../public/js',
        assetsDir: 'assets',
        emptyOutDir: true,
        rollupOptions: {
            input: './root.tsx',
            output: {
              format: 'iife',
              dir: 'build',
              entryFileNames: 'build.js'
            }
          }
      }
  }