import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
		{
		  path: '/home',
		  name: 'home',
		  component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
		},
    {
      path: '/attention',
      name: 'attention',
      component: () => import(/* webpackChunkName: "attention" */ './views/Attention.vue')
    },
		{
		  path: '/diamonds',
		  name: 'diamonds',
		  component: () => import(/* webpackChunkName: "diamonds" */ './views/Diamonds.vue')
		},
		{
		  path: '/message',
		  name: 'message',
		  component: () => import(/* webpackChunkName: "message" */ './views/Message.vue')
		},
		{
		  path: '/my',
		  name: 'my',
		  component: () => import(/* webpackChunkName: "my" */ './views/My.vue')
		}
  ]
})
