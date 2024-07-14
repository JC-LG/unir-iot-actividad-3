import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
const HOST = '0.0.0.0';
const PORT = 8000;


// https://vitejs.dev/config/
export default defineConfig({
  root: `src/iot`,
  build: {
    // outDir: `../../dist/${ROOT}`
    outDir: `../../dist`
  },
  plugins: [react()],
  server: {
    host: HOST,
    port: PORT
  }
})
