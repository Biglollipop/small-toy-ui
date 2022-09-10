/*
 * @Author: chenshiqiang
 * @Date: 2022-09-11 01:40:24
 * @LastEditors: chenshiqiang
 * @LastEditTime: 2022-09-11 01:40:35
 * @version: 
 * @Descripttion: 
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
	plugins: [vue(), vueJsx()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})
