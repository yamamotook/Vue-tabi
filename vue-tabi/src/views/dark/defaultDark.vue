<template>
	<div class="container">
		<div class="nav-container">
			<nabi :color="'dark'"></nabi>
		</div>
		<router-view class="view-container">
			
		</router-view>
	</div>
	
</template>

<script>
	import nabi from '@/components/nav/Nabi.vue';
	export default{
		components:{
			nabi
		}
	}
</script>

<style lang="less" scoped="scoped">
	.nav-container{
		width: 100%;
		position: absolute;
		z-index: 9;
	}
</style>
