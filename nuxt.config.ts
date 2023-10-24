import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@nuxtjs/device'
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
