import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCss from 'unocss/vite'
import checker from 'vite-plugin-checker'
import packageJson from './package.json'
import { createHtmlPlugin } from 'vite-plugin-html'
import * as path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		UnoCss(),
		createHtmlPlugin({
			minify: true,
			inject: {
				data: {
					title: packageJson.name,
					version: '1.0.0',
					htmlFontSize: '50px',
				},
			},
		}),

		checker({
			typescript: true,
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
})
