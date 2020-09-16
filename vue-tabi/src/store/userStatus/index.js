export default{
	namespaced: true,
	state: {
		userInfo : null
	},
	mutations: {
		setUserInfo(state, payload){
			state.userInfo = payload;
		}
	}
}