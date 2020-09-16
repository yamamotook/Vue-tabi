export default{
	namespaced: true,
	state: {
		path : '/home'
	},
	mutations: {
		// arg1 : state, vuex 中的state
		// arg2 : payload 负载
		setPath(state, path){
			//再mutations 中修改state
			state.path = path;
		}
	}
}