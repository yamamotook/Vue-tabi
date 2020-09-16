<template>
	
	<div class="nav" :class="color">
		<div class="nav-wrapper">
			<nav-left :color="color"></nav-left>
			<nav-right :color="color"></nav-right>
		</div>
	</div>
	
</template>

<script>
import navLeft from './Nav-left.vue';
import navRight from './Nav-right.vue';
export default {
	props:['color'],
	components: {
		navLeft,
		navRight
	}
}
</script>

<style scoped="scoped" lang="less">
	@navHeight : 80px;
	@innerWidth : 1200px;
	@navBg : black;
	.nav{
		width: 100%;
		height: @navHeight;
		&.dark{
			box-shadow: 0 1px 0 #EBEBEB;
			background-color: #fff;
		}
		.nav-wrapper{
			width: @innerWidth;
			height: 100%;
			margin: 0 auto;
			display: flex;
		    justify-content: space-between;
		}
		
	}
</style>
