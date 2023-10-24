import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module'
  ],
  devtools: { enabled: true },
  vite: {
    plugins: [
      svgLoader({
        svgo: false
      })
    ]
  }
})
