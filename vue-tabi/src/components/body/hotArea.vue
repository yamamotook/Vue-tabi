<template>
	
	<div class="hotArea">
		
		<router-link 
		class="hotArea-item" 
		v-for="(hotArea, index) in hotAreaList"
		:key="hotArea.hotAreaId"
		tag="div"
		:to="{ name : 'Province', query : { areaId : hotArea.areaId } }"
		 >
			<div class="item-pic">
				<pic-swiper :imgList="[hotArea.hotPic1, hotArea.hotPic2]"></pic-swiper>
			</div>
			<div class="item-profie">
				<div class="areaName">{{hotArea.areaName}}</div>
				<div class="areaProp">{{hotArea.hotWord}}</div>
			</div>
		</router-link>
		
		
	</div>
	
</template>

<script>
import picSwiper from './picSwiper.vue';
import api from '@/api/index.js';
export default {
	data(){
		return {
			hotAreaList : []
		}
	},
	created(){
		(async _=>{
			const resp = await api.getHotAreas();
			const result = await resp.json();
			if(result.status == 200){
				this.hotAreaList = result.data;
			}
		})()
	},
	components:{
		picSwiper
	}
}
	
	
</script>

<style scoped lang="less">
	
	.hotArea{
		display: grid;
		grid-template-columns: repeat(3, minmax(231px, 1fr));
		grid-gap: 35px 45px;
		box-sizing: border-box;
		padding: 40px;
		.hotArea-item{
			height: 290px;
			color: #484848;
			.item-pic{
				height: 222px;
				border-radius: 5px;
				overflow: hidden;
				cursor: pointer;
				margin-bottom: 16px;
			}
			.item-profie{
				color: #484848;
				.areaName,
				{
					font-size: 21px;
					font-weight: 600;
					line-height: 26px;
					margin-bottom: 6px;
				}
				.areaProp{
					font-size: 16px;
					line-height: 20px;
					font-weight: 600;
					color: rgb(0, 132, 137)
				}
				
			}
			
		}
	}
	
</style>
