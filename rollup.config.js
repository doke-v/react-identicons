import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import copy from 'rollup-plugin-copy';

export default {
    input: pkg.source,
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'esm' }
    ],
    plugins: [
        external(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled' 
        }),
        del({ targets: ['dist/*'] }),
        copy({
            targets: [
                { src: 'src/js/md5.min.js', dest: 'dist/js/' }
            ]
        })
    ],
    external: Object.keys(pkg.peerDependencies || {}),
};
