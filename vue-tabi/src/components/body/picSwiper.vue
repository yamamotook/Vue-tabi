<template>
	
	<div class="picSwiper" @mouseenter="start" @mouseleave="stop" >
		<transition-group name="fade" tag="div">
			<div class="item" v-for="(pic, index) in imgList" :key="index" v-if="curIndex == index">
				<img :src="urls.baseUrl + urls.getPicByPath + '?path=' + pic" :alt="'图片显示失败' + alt" >
			</div>
		</transition-group>
		
	</div>
	
</template>

<script>
import api from '@/api/index.js';
import urls from '@/api/urls.js';
export default {
	props: ['imgList', 'alt'],
	data(){
		return {
			urls : urls,
			delay : 3000,
			curIndex : 0,
			swiperInterVal : null
		}
	},
	methods:{
		curIndexChange(){
			this.curIndex++;
			if(this.curIndex >= this.imgList.length){
				this.curIndex = 0;
			}
		},
		start(event){
			clearInterval(this.swiperInterVal);
			this.swiperInterVal = setInterval(_=>{
				this.curIndexChange();
			},this.delay)
		},
		stop(){
			this.curIndex = 0;
			clearInterval(this.swiperInterVal);
			this.swiperInterVal = null;
		}
	}
}
	
</script>

<style scoped="scoped" lang="less">
	.picSwiper{
		width: 100%;
		height: 100%;
		position: relative;
		.item{
			position: absolute;
			width: 100%;
			height: 100%;
			
			img{
				width: 100%;
				height: 100%;
				object-fit: cover;
				transition: transform 1s ease;
				transform: scale(1);
			}
			img:hover{
				transition: transform 3s ease;
				transform: scale(1.1);
			}
		}
	}
	
	.fade-enter-active{
		animation: fadeIn 1s ease;
	}
	.fade-leave-active{
		animation: fadeOut 1s ease;
	}
	
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
	
		to {
			opacity: 1;
		}
	}
	
	@keyframes fadeOut {
		from{
			opacity: 1;
		}
		to{
			opacity: 0;
		}
	}
</style>
