import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { format } from 'crypto-js';

export default {
    input: 'src/pages/qr-code/index.jsx',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs'
    },
    plugins: [
        resolve({broswer:true}),
        commonjs()
    ]
};