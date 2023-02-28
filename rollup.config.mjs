import path from 'path';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';
import { visualizer } from 'rollup-plugin-visualizer';

export default {
  input: './src/index.ts',
  output: {
    file: 'dist/index.js',
    sourcemap: true,
    format: 'es',
    name: 'react-zoomable-context',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
  external: ['react', 'react-dom'],
  treeshake: true,
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    css({ output: 'dist/styles.css' }),
    terser(),
    visualizer(
      {
        filename:'dist/stats.html',
        sourcemap: true,
        template: 'treemap',
      }
    ),
  ],
};
