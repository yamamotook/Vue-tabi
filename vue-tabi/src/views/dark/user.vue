<template>
	<router-view></router-view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default{
		data(){
			return {
				isHonnin : false,
			}
		},
		computed:{
			...mapState('urlPath', ['path']),
			...mapState('userStatus', ['userInfo']),
		},
		created(){
			const q = this.$route.params;
			if( this.userInfo  && q.userId == this.userInfo.userId){
				this.isHonnin = true;
			}
			if(this.userInfo == null && this.isHonnin ){
				this.$router.replace({
					name : 'Home'
				});
			}
		},
		watch:{
			userInfo(val){
				if(val == null && this.isHonnin ){
					this.$router.replace({
						name : 'Home'
					});	
				}else{
					this.value = val;
				}
			}
		}
	}
</script>

<style>
</style>
