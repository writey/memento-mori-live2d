import { defineConfig } from 'vite'
export default defineConfig({
  resolve: {
    alias: {
      '@framework': '/cubism/Framework/src',
      '@cubism': '/cubism/Core',
    }
  }
})