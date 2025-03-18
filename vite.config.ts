import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [plugin()],
    build: {
        outDir: 'dist-react'
    },
    server: {
        port: 62986,
    }
})
