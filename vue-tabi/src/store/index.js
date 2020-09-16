import Vue from 'vue'
import Vuex from 'vuex'
import path from '@/store/path/index.js';
import userStatus from '@/store/userStatus/index.js';

Vue.use(Vuex)

export default new Vuex.Store({
	strict : true,
	modules: {
		urlPath : path,
		userStatus,
	}
})
