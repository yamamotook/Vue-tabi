<template>
	<div class="container">
		<div class="swiper-container">
			<img :src="urls.baseUrl + urls.getPicByPath + '?path=' + city.cityHeadPic " >
			<div class="moji" ref="moji" >
				<h1 class="moji-t">
					{{city.cityName}}
				</h1>
				<h1 class="moji-c">
					{{city.profieWord}}
				</h1>
			</div>
		</div>
		<div class="content">
			<div class="nav-container">
				<nabi :color="'dark'"></nabi>
			</div>
			<div class="main-container">
				<div class="kankouchi main-pading">
					<div class="main-t">
						観光地
						<span>{{count}}条记录被找到</span>
					</div>
					<div class="kankouchi-list list">
						<template v-if="paysageList.length">
							<router-link  tag="div" :to="{ name : 'PaysageProfie', query : { paysageId : item.paysageId } }" class="pic-wrap" v-for=" item in paysageList " :key="item.paysageId">
								<div class="model">
									<div class="model-c">{{item.paysageName}}</div>
								</div>
								<pic-swiper :imgList="[item.paysageCover]"></pic-swiper>
							</router-link>
						</template>
						<template v-else>
							无结果
						</template>
					</div>
					<div class="page" v-if="paysageList.length">
						<turn-page :nowPage="paysagePage.nowPage" :totalPage="paysagePage.totalPage" @updatePage="updatePaysage"></turn-page>
					</div>
				</div>
				<div class="syoku main-pading">
					<div class="main-t">
						美食
					</div>
					<div class="syoku-list list">
						<template v-if="foodList.length">
							<div class="pic-wrap" v-for=" item in paysageList " :key="item.paysageId">
								<div class="model">
									<div class="model-c">{{item.paysageName}}</div>
								</div>
								<pic-swiper :imgList="[item.paysageCover]"></pic-swiper>
							</div>
						</template>
						<template v-else>
							无结果
						</template>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	import api from '@/api/index.js';
	import picSwiper from '@/components/body/picSwiper.vue';
	import turnPage from '@/components/turnPage/turnPage.vue';
	import urls from '@/api/urls.js';
	import nabi from '@/components/nav/Nabi.vue';
	export default{
		data(){
			return {
				urls,
				pageSize : 9,
				query : null,
				paysageList : [],
				foodList : [],
				city : {},
				paysagePage : {
					nowPage : 1,
					totalPage : 1,
				},
				count : 0
			}
		},
		methods : {
			async ajaxAndRender(query, apiName, success){
				const resp = await api[apiName](query);
				const result = await resp.json();
				if (result.status == 200) {
					success(result);
				}
			},
			updatePaysage(page){
				this.ajaxAndRender({
					...this.query,
					nowPage :  page,
					pageSize : this.pageSize
				}, 'getPaysageListPageByCityId', (result) => {
					if(result.status == 200 ){
						this.paysageList = result.list;
						this.paysagePage.nowPage = result.nowPage;
						this.paysagePage.totalPage = result.totalPage;
						this.count = result.count;
					}
				});
			}
		},
		created(){
			this.query = this.$route.query;
			this.ajaxAndRender({...this.query}, 'getCityByCityId', (result) => {
				if(result.status == 200){
					this.city = result.data[0];
					this.$refs.moji.className = 'moji animate';
				}
			});
			this.ajaxAndRender({...this.query, nowPage : 1, pageSize : this.pageSize}, 'getPaysageListPageByCityId', (result) => {
				console.log(result);
				if(result.status == 200 ){
					this.paysageList = result.list;
					this.paysagePage.nowPage = result.nowPage;
					this.paysagePage.totalPage = result.totalPage;
					this.count = result.count;
				}
			});
			console.log(this.paysageList);
		},
		
		components:{
			nabi,
			picSwiper,
			turnPage
		}
	}
</script>

<style scoped="scoped" lang="less">
	.container{
		width: 100%;
		height: 100%;
		.swiper-container{
			width: 100%;
			height: 100%;
			
			background-size: cover;
			position: relative;
			img{
				position: absolute;
				width: inherit;
				height: inherit;
				left: 0;
				top: 0;
				object-fit:  cover;
			}
			.moji{
				position: absolute;
				width: 450px;
				height: 300px;
				// background-color: #fff;
				top: 50%;
				left: 60%;
				transform: translateY(-50%);
				color: #FFFF;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-wrap: nowrap;
				flex-direction: column;
				h1{
					width: 100%;
					text-align: right;
				}
				.moji-t{
					opacity: 0;
					font-size: 44px;
					height: 35px;
					line-height: 35px;
					margin-bottom: 15px;
				}
				.moji-c{
					opacity: 0;
					font-size: 30px;
					height: 35px;
					line-height: 35px;
				}
				&.animate .moji-t{
					animation: in .5s ease forwards;
					animation-delay: 1s;
					
				}
				&.animate .moji-c{
					animation: in .5s ease forwards;
					animation-delay: 1.5s;
				}
				
				
			}
		}
		.content{
			.nav-container{
				width: 100%;
				position: sticky;
				z-index: 99;
				top: 0;
			}
			.main-container{
				width: 1300px;
				margin: 0 auto;
				.main-pading{
					box-sizing: border-box;
					padding: 15px 20px;
					
					.main-t{
						height: 80px;
						line-height: 80px;
						font-size: 28px;
						font-weight: 600;
						margin: 10px 0px;
						position: relative;
						display: flex;
						justify-content: space-between;
						span{
							font-size: 16px;
						}
						&::after{
							content: '';
							position: absolute;
							height: 4px;
							width: 100%;
							background-color: #F56C6C;
							border-radius: 3px;
							bottom: 0;
							left: 0;
						}
					}
					.list{
						width: 100%;
						display: grid;
						grid-template-columns: repeat(3, minmax(231px, 1fr));
						grid-gap: 35px 45px;
						padding: 40px;
						box-sizing: border-box;
						.pic-wrap{
							height: 222px;
							border-radius: 5px;
							overflow: hidden;
							cursor: pointer;
							margin-bottom: 10px;
							position: relative;
							.model{
								position: absolute;
								width: 100%;
								height: 100%;
								z-index: 9;
								background-color: rgba(0,0,0, .4);
								display: flex;
								justify-content: center;
								align-items: center;
								color: #fff;
								font-weight: 600;
								font-size: 24px;
								transition: opacity .5s linear;
								opacity: 1;
								&:hover{
									opacity: 0;
								}
							}
						}
					}
					
					
				}
			}
		}
	}
	@keyframes in{
		from{
			opacity: 0;
			transform: translateX(50px);
		}
		to{
			opacity: 1;
			transform: translateX(0px);
			text-shadow: 5px 5px 10px rgba(0,0,0);
		}
	}
</style>
