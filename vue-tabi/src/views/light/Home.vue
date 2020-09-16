<template>
  <div class="home">
		<div class="banner">
			<div class="swiper">
				<swiper></swiper>
			</div>
			<div class="guide">
				<city-guide></city-guide>
			</div>
		</div>
		<div class="body">
			<div class="body-container">
				<div class="hotCity-container">
					<h3 class="hot-title">
						热门城市推荐
						
					</h3>
					<p class="hot-title-en">Popular citys in the world</p>
					<hot-city></hot-city>
				</div>
				
				<div class="spread-container">
					<img src="http://127.0.0.1:12306/api/getPicByPath?path=/home/spred1.jpg">
				</div>
				
				<div class="hotArea-container">
					<h3 class="hot-title">
						人气国家/地区推荐
						<router-link tag="span" class="more" :to="{ name : 'AllArea' }">了解更多</router-link>
					</h3>
					<p class="hot-title-en">Hot areas in the world</p>
					<hotArea></hotArea>
				</div>
				
			</div>
		</div>
  </div>
</template>

<script>
import nabi from '@/components/nav/Nabi.vue';
import swiper from '@/components/Swiper.vue';
import cityGuide from '@/components/guide/CityGuide.vue';
import hotCity from '@/components/body/hotCity.vue';
import hotArea from '@/components/body/hotArea.vue';
import api from '@/api/index.js';
import {mapMutations} from 'vuex';
export default {
  name: 'Home',
  created(){
	
  },
  components: {
	...mapMutations('userStatus',['setUserInfo']),
   swiper,
   cityGuide,
   hotCity,
   hotArea,
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
	.banner{
		height: 530px;
		width: 100%;
		position: relative;
		.swiper{
			width: 100%;
			height: 100%;
			overflow: hidden;
		}
		.guide{
			position: absolute;
			bottom: 20px;
			left: 50%;
			transform: translateX(-50%);
			z-index: 99;
		}
	}
	.body{
		width: 100%;
		
		.body-container{
			width: 100%;
			height: 300px;
			
			
			.hotCity-container{
				width: 1200px;
				margin: 50px auto 0;
			}
			.hot-title{
				height: 40px;
				line-height: 40px;
				font-size: 25px;
				display: flex;
				justify-content: space-between;
				span{
					font-size: 14px;
					line-height: 40px;
					transition: color .3s linear;
					&:hover{
						color: #F56C6C;
						cursor: pointer;
					}
				}
			}
			.hot-title-en{
				height: 25px;
				line-height: 25px;
				font-size: 20;
				font-weight: 600;
			}
			.hotArea-container{
				width: 1200px;
				margin: 50px auto 0;
				
			}
			.spread-container{
				img{
					width: 100%;
					object-fit: cover;
				}
			}
		}
	}
</style>
