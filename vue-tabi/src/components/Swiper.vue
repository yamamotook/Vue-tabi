<template>

	<div class="swiper">
		<transition-group tag="ul" name="fade" class="swiper-wrap">
			<li v-for="(swiper, index) in swiperList" :key="swiper.id" class="swiper-item" v-show="curIndex == index">
				<img :src="swiper.path">
				<div class="profie">
					<h3 class="title">
						{{swiper.titile}}
					</h3>
					<p class="content">
						{{swiper.content}}
					</p>
					<div class="about-more">
						了解更多
					</div>
				</div>
			</li>
		</transition-group>
		<template>
			<div class="dots">
				<li v-for="(swiper, index) in swiperList" :key="swiper.id" :class="{ 'active' : index == curIndex }" class="dots-item" @click="dotsClick(index)" ></li>
			</div>
		</template>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				curIndex: 0,  //轮播图index
				autoPlay : true, //是否自动播放
				swiperInterval : null, //轮播图interval
				delayTime : 7000, //图片停留时间
				swiperList: [{
						id: '1',
						path: require('@/assets/swiper/tokyo.jpg'),
						titile: '東京',
						content: 'Find my Tokyo.'
					},
					{
						id: '2',
						path: require('@/assets/swiper/ca-courtenay.jpg'),
						titile: '加拿大',
						content: 'Beyond Walking Tour.'
					},
					{
						id: '3',
						path: require('@/assets/swiper/fr-paris.jpg'),
						titile: '法国',
						content: 'Finding  Miracle in Paris.'
					},
					{
						id: '4',
						path: require('@/assets/swiper/romania-arefu.jpg'),
						titile: '罗马尼亚',
						content: 'Photo walk & tour.'
					}
				]
			}
		},
		mounted(){
			if(this.autoPlay){
				this.autoPlayFunc();
			}
		},
		methods: {
			dotsClick(index){
				clearInterval(this.swiperInterval);
				this.curIndex = index;
				this.autoPlayFunc();
			},
			autoPlayFunc(){
				clearInterval(this.swiperInterval);
				this.swiperInterval = setInterval(_=>{
					this.curIndex++;
					if(this.curIndex >= this.swiperList.length){
						this.curIndex = 0;
					}
				}, this.delayTime)
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.swiper {
		height: 530px;
		width: 100%;
		position: relative;

		.swiper-wrap {
			height: 100%;
			.swiper-item {
				height: 100%;
				opacity: 1;
				position: absolute;
				img {
					width: 100%;
					object-fit: cover;
					height: 100%;
				}

				.profie {
					position: absolute;
					width: 1200px;
					top: 180px;
					left: 50%;
					margin-left: -600px;
					box-sizing: border-box;
					padding: 0px 80px;

					.title {
						font-size: 24px;
						padding-bottom: 10px;
						line-height: 26px;
					}
					
					.content{
						font-size: 32px !important;
						line-height: 34px;
					}
					
					.content,
					.title,
					.about-more {
						color: #fff;
						font-weight: 600;
						margin: 5px 0;
					}

					.about-more {
						text-align: center;
						margin-top: 15px;
						width: 100px;
						height: 40px;
						line-height: 40px;
						border: 2px solid #fff;
						padding: 0px 10px;
						border-radius: 2px;
						cursor: pointer;
						transition: all .3s ease;
						margin-top: 25px;
					}

					.about-more:hover {
						background: #fff;
						color: #000;
					}
				}
			}
		}
		
		.dots{
			width: 1200px;
			height: 3px;
			position: absolute;
			top: 380px;
			left: 50%;
			margin-left: -600px;
			
			.dots-item{
				display: inline-block;
				margin-right: 10px;
				width: 70px;
				height: 3px;
				background-color: #FFFFFF;
				opacity: .5;
				cursor: pointer;
			}
			.dots-item:first-child{
				margin-left: 120px;
			}
			
			.dots-item.active{
				opacity: 1;
			}
			
		}
	}
	
	
	.fade-enter-active{
		animation: fadeIn 2s ease;
	}
	.fade-leave-active{
		animation: fadeOut 2s ease;
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
