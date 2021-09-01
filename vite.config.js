import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import svgLoader from 'vite-svg-loader';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin(), svgLoader({ svgo: false })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'b2cMappUiAssets',
      fileName: (format) => `index.${format}.js`,
    },
  },
});
