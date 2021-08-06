import vue from 'rollup-plugin-vue';
import svg from 'rollup-plugin-vue-inline-svg';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

import { svgOptions } from './rollupHelper';

const babelConfig = require('./babel.config');

const config = {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle-esm.js',
    format: 'es',
    name: 'b2cMappUiAssets',
    sourcemap: false,
  },
  external: [],
  plugins: [
    commonjs({
      include: /node_modules/,
    }),
    globals(),
    nodeResolve({
      extensions: ['.js', '.vue'],
      modules: false,
      mainFields: ['module', 'browser', 'main'],
      preferBuiltins: true,
      browser: false,
    }),
    postcss({
      extract: true,
      plugins: [autoprefixer()],
      modules: false,
    }),
    svg(svgOptions),
    vue({ css: false }),
    babel({
      ...babelConfig,
      babelHelpers: 'runtime',
      exclude: '**/node_modules/**',
    }),
  ],
};

export default config;
