import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import svgLoader from 'vite-svg-loader';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin(), svgLoader({ svgo: false })],
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'b2cMappUiAssets',
      fileName: (format) => `b2c-mapp-ui-assets.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
