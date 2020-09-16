<template>
  <div id="app">
		<router-view class="view-container"></router-view>
  </div>
</template>

<script>

export default{
}
	
</script>

<style lang="less">
	html,body{
		width: 100%;
		min-width: 1200px;
		overflow-x: hidden;
		height: 100%;
	}
	#app{
		position: relative;
		height: 100%;
	}
	
	.view-container{
		width: 100%;
		height: 100%;
	}
	
	
</style>
