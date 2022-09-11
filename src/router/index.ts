/*
 * @Author: chenshiqiang
 * @Date: 2022-09-12 03:33:25
 * @LastEditors: chenshiqiang
 * @LastEditTime: 2022-09-12 03:48:21
 * @version:
 * @Descripttion:
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'Login',
		component: () => import('@/views/Login'),
		meta: {
			title: '登录'
		}
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.beforeEach((to, from, next) => {
	// to and from are both route objects. must call `next`.
	if (to.meta.title) {
		document.title = `
      ${import.meta.env.VITE_APP_TITLE} - ${to?.meta?.title as string}
    `
	}
	next()
})

export default router
