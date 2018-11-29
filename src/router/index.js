import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
		path: '',
		redirect: {
			name: 'home'
		}
	},
	{
		name: 'home',
		path: '/home',
		component: () => import("../app.vue"),
	}
];

export default new VueRouter({
	mode: 'hash',
	routes
})
