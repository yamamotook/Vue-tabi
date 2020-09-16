<template>
	<ul class="guide-select"  >
		<li class="select-item"  v-for="(item, index) in list" :key="item[propId]"  :class="{ active : curId === item[propId] }" @click="clickHanderl(item)" >
			{{item[propName]}}
		</li>
	</ul>
</template>

<script>

export default {
	props: ['list','type','curId','propName','propId'],
	methods:{
		clickHanderl(target){
			this.$emit('change', {type : this.type, target});
		}
	}
}
</script>

<style scoped="scoped" lang="less">
	.guide-select{
		width: 100%;
		max-height: 360px;
		background-color: rgb(245,245,245);
		overflow: auto;
		border-radius: 3px;
		.select-item{
			box-sizing: border-box;
			width: 100%;
			height: 40px;
			font-size: 15px;
			line-height: 40px;
			padding-left: 20px;
			text-align: left;
			color: #484848;
			cursor: pointer;
			transition: all .3s ease;
			
			&:hover{
				background-color: rgb(230,230,230);
			}
			
			&.active{
				background-color: #409eff;
				color: #fff;
			}
		}
		
		
		
		
		
	}
	
</style>
