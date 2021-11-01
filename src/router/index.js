import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/home',
		name: 'Home',
		component: Home
	},
	{
		path: '/',
		name: 'index',
		component: () => import('../views/Index/index.vue'),
		children: [
			{
				path: '/',
				name: 'web',
				component: () => import('../views/Web/Index.vue'),
			}
		]
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
