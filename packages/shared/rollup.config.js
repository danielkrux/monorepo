/**
 * @type {import('rollup').RollupOptions}
 */

import { defineConfig } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import visualizer from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import svgr from '@svgr/rollup';

const packageJson = require('./package.json');

export default defineConfig({
  input: './src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      inlineDynamicImports: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
      inlineDynamicImports: true,
    },
  ],
  external: Object.keys(packageJson.peerDependencies),
  plugins: [
    svgr({
      icon: true,
    }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    postcss({
      extract: 'styles/components.css',
      minimize: true,
    }),
    copy({
      targets: [
        {
          src: './src/assets/fonts',
          dest: 'dist/assets',
        },
        {
          src: './src/styles/*.scss',
          dest: 'dist/styles',
        },
        {
          src: './src/styles/index.scss',
          dest: 'dist/styles',
          transform: (contents) => contents.toString().replace('// ', ''),
        },
      ],
    }),
    terser(),
    visualizer({
      filename: 'bundle-analysis.html',
    }),
  ],
});
