import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/reset.css';
import api from './api/index.js'

Vue.config.productionTip = false
router.beforeEach((to, from, next)=>{
	(async _=>{
		const resp = await api.getUserInfo();
		const result = await resp.json();
		console.log(result);
		if(result.status === 200){
			result.userInfo.birthday ? result.userInfo.birthday = new Date(result.userInfo.birthday) : null;
			store.commit('userStatus/setUserInfo', result.userInfo);
		}
	})()
	store.commit('urlPath/setPath', to.path);
	next();
})

router.afterEach(()=>{
	window.document.body.scrollTo(0,0)
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
