import cjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'

export default {
	input: 'src/index.jsx',
	output: {
		file: 'dist/index.js',
		format: 'cjs',
		name: 'b2cMappUIAssets',
		sourcemap: true,
	},
	external: [],
	plugins: [
		cjs({
			include: /node_modules/,
		}),
		globals(),
		resolve({
			extensions: ['.jsx', '.js'],
			modules: true,
			mainFields: ['module', 'browser', 'main'],
			preferBuiltins: true,
			browser: false,
		}),
		postcss({
			extract: true,
			plugins: [autoprefixer()],
			modules: true,
		}),
		babel({
			plugins: [
				'@babel/plugin-proposal-object-rest-spread',
				'@babel/plugin-proposal-export-default-from',
				'@babel/plugin-proposal-export-namespace-from',
				[
					'@babel/plugin-transform-react-jsx',
					{
						pragma: 'h',
					},
				],
				[
					'@babel/plugin-proposal-class-properties',
					{
						spec: true,
					},
				],
			],
			presets: [
				[
					'@babel/preset-env',
					{
						debug: false,
						modules: false,
						targets: {
							browsers: [
								'last 2 Chrome versions',
								'last 2 Firefox versions',
								'last 2 Edge versions',
								'last 2 Opera versions',
								'last 2 Safari versions',
								'last 2 iOS versions',
							],
						},
					},
				],
			],
		}),
	],
}
