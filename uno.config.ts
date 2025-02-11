import { defineConfig, presetIcons, presetUno } from 'unocss'
import { Breakpoint } from './src/constant'
import { transformerVariantGroup } from 'unocss'
import { transformerDirectives } from 'unocss'

export default defineConfig({
	presets: [
		presetUno(),
		presetIcons({
			extraProperties: {
				display: 'inline-block',
				'vertical-align': 'middle',
			},
		}),
	],
	transformers: [transformerVariantGroup() as any, transformerDirectives() as any],
	theme: {
		breakpoints: {
			xxs: `${Breakpoint.xxs}px`,
			xs: `${Breakpoint.xs}px`,
			sm: `${Breakpoint.sm}px`,
			smd: `${Breakpoint.smd}px`,
			md: `${Breakpoint.md}px`,
			lg: `${Breakpoint.lg}px`,
			xl: `${Breakpoint.xl}px`,
			xxl: `${Breakpoint.xxl}px`,
		},
		colors: {
			'ant-dark-menu': '#001529',
			'light-gray': '#E8EBED',
			'gray-border': 'rgba(5,5,5,0.06)',
			primary: '#1677FF',
		},
	},
	shortcuts: [
		['flex-center', 'flex justify-center items-center'],
		['wrap-main', ''],
	],
	rules: [
		['ant-menu-width-transition', { transition: 'width 0.3s cubic-bezier(0.2,0,0,1) 0s' }],
		[
			'ant-menu-width-transition-half',
			{ transition: 'width 0.15s cubic-bezier(0.2,0,0,1) 0s' },
		],
		[
			'ant-menu-transform-transition',
			{ transform: 'transform 0.3s cubic-bezier(0.2,0,0,1) 0s' },
		],
		['bgc-none', { background: 'initial' }],
	],
})
