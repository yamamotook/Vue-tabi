import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/light/Home.vue'
import defaultPage from '../views/light/defaultTemplate.vue'
import defaultDark from '../views/dark/defaultDark.vue'
Vue.use(VueRouter)

const routes = [{
		path: '/defaultLight',
		name: 'default',
		component: defaultPage,
		children: [{
				path: '/home',
				name: 'Home',
				component: Home
			},
			{
				path: '/register',
				name: 'Register',
				component: () => import('../views/light/Register.vue'),
			},
			{
				path: '/signIn',
				name: 'SignIn',
				component: () => import('../views/light/SignIn.vue')
			}
		]
	},
	{
		path: '/defaultDark',
		name: 'defaultDark',
		component: defaultDark,
		children: [{
				path: '/allAreas',
				name: 'AllArea',
				component: () => import('../views/dark/allArea.vue')
			},
			{
				path: '/provinces',
				name: 'Province',
				component: () => import('../views/dark/province.vue')
			},
			{
				path: '/citys',
				name: 'City',
				component: () => import('../views/dark/citys.vue')
			},
			{
				path : '/user',
				name : 'User',
				component : () => import('../views/dark/user.vue'),
				meta : {
					login : true
				},
				children : [
					{
						path :'userProfie/:userId',
						name : 'UserProfie',
						component : () => import('../views/dark/userProfie.vue')
					},
					{
						path : 'userEdit/:userId',
						name : 'UserEdit',
						component : () => import('../views/dark/userEdit.vue')
					},
					{
						path : 'passwordModify/:userId',
						name : 'PasswordModify',
						component : () =>import('../views/dark/passUpdate.vue')
					}
					
				]
			}
		]
	},
	{
		path: '/cityProfie',
		name: 'CityProfie',
		component: () => import('../views/dark/cityProfie.vue')
	},
	{
		path: '/paysageProfie',
		name: 'PaysageProfie',
		component: () => import('../views/dark/paysageProfie.vue')
	},
	{
		path: '*',
		redirect: (path) => {
			if (path.path == '/') {
				return '/home';
			} else {
				return '/error';
			}
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
