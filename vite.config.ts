/*
 * @Author: chenshiqiang
 * @Date: 2022-09-12 03:33:25
 * @LastEditors: chenshiqiang
 * @LastEditTime: 2022-09-12 03:44:35
 * @version: 
 * @Descripttion: 
 */
import { fileURLToPath, URL } from 'node:url'
import { createHtmlPlugin } from 'vite-plugin-html'

import { loadEnv } from 'vite'
import type { UserConfig, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

//这个配置 为了在html中使用 环境变量
const getViteEnv = (mode: string, target: string) => {
	return loadEnv(mode, process.cwd())[target]
}

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
	return {
		base: './',
		plugins: [
			vue(),
			vueJsx(),
			createHtmlPlugin({
				inject: {
					data: {
						title: getViteEnv(mode, 'VITE_APP_TITLE')
					}
				}
			})
		],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url))
			}
		}
	}
}
