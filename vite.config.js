import { defineConfig } from 'vite';

export default defineConfig({
    build: { outDir: 'build' },
    base: process.env.VITE_BASE_PATH || ""
});