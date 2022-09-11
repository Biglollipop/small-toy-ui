/*
 * @Author: chenshiqiang
 * @Date: 2022-09-11 01:48:12
 * @LastEditors: chenshiqiang
 * @LastEditTime: 2022-09-11 14:52:23
 * @version:
 * @Descripttion:
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'Login',
		component: () => import('@/views/Login')
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
