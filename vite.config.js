import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'dns'
dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css:{
    modules:{
      localsConvention:'camelCase',
      generateScopedName: '[local]_[hash:base64:2]',
    }
  },
  s
});
