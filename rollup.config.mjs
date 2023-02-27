import path from 'path';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';

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
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    css({ output: 'dist/styles.css' }),
    terser(),
  ],
};
