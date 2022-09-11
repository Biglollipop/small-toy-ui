/*
 * @Author: chenshiqiang
 * @Date: 2022-09-11 01:48:12
 * @LastEditors: chenshiqiang
 * @LastEditTime: 2022-09-11 02:11:39
 * @version:
 * @Descripttion:
 */
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
	setup() {
		return () => <RouterView />
	}
})
