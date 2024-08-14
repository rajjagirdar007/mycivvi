import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import register from '../views/register.vue'
import login from '../views/login.vue'
import dashboard from '../views/dashboard.vue'
import dashboard_admin from '../views/dashboard_admin.vue'
import add_job from '../views/add_job.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
	path: '/register',
	name: 'register',
	component: register  
  },
	{
		path:'/login',
		name: 'login',
		component: login
	},
	{
		path: '/dash',
		name:'dashboard',
		component: dashboard
	},
	{
		path: '/dash_admin',
		name:'dashboard_admin',
		component: dashboard_admin
	},
	{
		path: '/add_job',
		name: 'add_job',
		component: add_job
	}
	
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
