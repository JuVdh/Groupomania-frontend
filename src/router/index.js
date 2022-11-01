import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import NewView from '../views/NewView.vue'
import OpenView from '../views/OpenView.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/signup',
		name: 'signup',
		component: SignupView
	},
	{
		path: '/login',
		name: 'login',
		component: LoginView
	},
	{
		path: '/new',
		name: 'new',
		component: NewView
	},
	{
		path: '/openPost/:postId',
		name: 'openPost',
		component: OpenView
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
