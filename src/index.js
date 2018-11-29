import _ from 'lodash';
import Vue from 'vue';
import App from './app.vue';

import router from './router';


/**
 * 模板渲染
 */
new Vue({
	el: '#app',
	router,
	//template模板 + components组件 = render渲染函数
	template: '<app/>',
	components: {
		App
	},
})
/**
 * 渲染函数渲染
 */
// new Vue({
// 	el: '#app',
// 	render: h => h(App)
// })
/**
 * 挂载时渲染
 */
// new Vue({
// 	render: h => h(App),
// }).$mount('#app')
