<template>
	
	<div class="hotCity">
		<router-link class="item" v-for="city in hotCityList" :key="city.hotCityId" tag="div" :to="{ name : 'CityProfie' , query : { cityId :  city.cityId } }">
			<div class="pic-area">
				<img :src=" urls.baseUrl + urls.getPicByPath + '?path=' + city.hotCityPic"  @mouseenter="enterStyle($event)" @mouseleave="outStyle($event)">
			</div>
			<div class="profie">
				<div class="profie-area">{{city.areaName}}</div>
				
				<div class="profie-content">{{city.hotWords}}</div>
				<div class="profie-city">{{city.cityName}}</div>
			</div>
		</router-link>
		
		
	</div>
	
</template>

<script>
	import api from '@/api/index.js';
	import urls from '@/api/urls.js';
	export default {
		data(){
			return {
				urls : urls,
				hotCityList : []
			}
		},
		created(){
			(async _=>{
				const resp = await api.getHotCitys();
				const result = await resp.json();
				if(result.status == 200){
					console.log(result.data);
					this.hotCityList = result.data;
				}
			})()
		},
		methods:{
			enterStyle(event){
				event.target.className = 'enterStyle';
			},
			outStyle(event){
				event.target.className = 'outStyle';
			} 
		}
	}
	
	
</script>

<style scoped="scoped" lang="less">
	.hotCity{
		display: grid;
		grid-template-columns: repeat(4, minmax(231px, 1fr));
		grid-gap: 30px 25px;
		box-sizing: border-box;
		padding: 20px;
	}
	.item{
		height: 440px;
		color: #484848;
		.pic-area{
			height: 345px;
			border-radius: 5px;
			overflow: hidden;
			margin-bottom: 6px;
			cursor: pointer;
			img{
				width: 100%;
				height: 100%;
				object-fit: cover;
				transform: scale(1);
				&.enterStyle{
					transition: all 3s ease;
					transform: scale(1.2);
				}
				&.outStyle{
					transition: all 1s ease;
					transform: scale(1);
				}
			}
			
		}
	
		.profie-area{
			font-size: 12px;
			line-height: 16px;
			margin-bottom: 6px;
			font-weight: 600;
			color: inherit;
		}
		
		.profie-city{
			font-size: 14px;
			line-height: 16px;
			text-align: right;
			font-weight: 600;
		}
		.profie-content{
			font-size: 18px;
			line-height: 20px;
			word-break: break-word;
			color: inherit;
			margin-bottom: 6px;
			font-family: Arial, Helvetica, sans-serif;
		}
	}
	
	
	// @keyframes enter {
	// 	from {
	// 		transform: scale(1);
	// 	}
	
	// 	to {
	// 		transform: scale(1.2);
	// 	}
	// }
	// @keyframes out{
	// 	from {
	// 		transform: scale(1.2);
	// 	}
			
	// 	to {
	// 		transform: scale(1);
	// 	}
	// }
	
</style>
