import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    experimentalStudio: true,

    baseUrl: 'http://localhost:4173'
  },
  env: {
    apiUrl: 'http://localhost:3000/api'
  }
})
