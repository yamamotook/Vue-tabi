<template>
	<div class="body">
		<div class="body-container">
			<div class="about-area">
				<div class="about-left">
					<div class="profie-pic">
						<img :src="urls.baseUrl + urls.getPicByPath + '?path=' + area.picSrc" :alt="area.areaName" >
					</div>
				</div>
				<div class="about-right">
					<h3 class="profie-title">{{area.areaName}}</h3>
					<h3 class="profie-t-e">{{area.areaName_en}}</h3>
					<div class="about-content">
						{{area.about}}
					</div>
				</div>
			</div>
			<div class="province-title">
				省份
			</div>
			<div class="province-list" 	v-if="provinceList.length">
				<div class="list-item" 
				v-for="item in provinceList" 
				:key="item.provinceId" 
				@click="goCitys(item.provinceId)"
				>
					<div class="item-pic">
						<pic-swiper :imgList="[item.picSrc]" :alt="item.provinceName"></pic-swiper>
					</div>
					<div class="item-profie">
						{{item.provinceName}}
					</div>
				</div>
			</div>
			<div class="noResult" v-else>
				无结果
			</div>
			
			<div class="pages">
				<turn-page :nowPage="nowPage" :totalPage="totalPage" @updatePage="update"></turn-page>
			</div>
		</div>
	</div>
	
</template>

<script>
	import api from '@/api/index.js';
	import picSwiper from '@/components/body/picSwiper.vue';
	import turnPage from '@/components/turnPage/turnPage.vue'
	import urls from '@/api/urls.js';
	export default{
		created(){
			console.log(this.$route);
			const query = this.$route.query;
			this.ajaxAndRender(query, 'getAreaByAreaId', (result) => {
				this.area = result.data;
			});
			this.ajaxAndRender({...query, nowPage : 1, pageSize : 9}, 'getProvincePageByArea', (result) => {
				console.log(result);
				this.provinceList = result.list.list;
				this.totalPage = result.list.totalPage;
				this.nowPage = result.list.nowPage;
			});
		},
		data(){
			return {
				provinceList : [],
				area : {},
				urls,
				nowPage: 1,
				pageSize: 9,
				totalPage: 1,
			}
		},
		methods:{
			async ajaxAndRender(query, apiName, success){	
				const resp = await api[apiName](query);
				const result = await resp.json();
				if (result.status == 200) {
					success(result);
				}
			},
			goCitys(provinceId){
				console.log(provinceId);
				this.$router.push({
					name : 'City',
					query: {
						provinceId
					}
				})
			},
			update(page) {
				this.nowPage = page;
				this.ajaxAndRender({
					areaId : this.area['areaId'],
					pageSize: this.pageSize,
					nowPage: this.nowPage
				},'getProvincePageByArea', (result) => {
					this.provinceList = result.list.list;
					this.totalPage = result.list.totalPage;
					this.nowPage = result.list.nowPage;
			});
			},
		},
		components:{
			picSwiper,
			turnPage
		}
	}
	
</script>

<style lang="less" scoped="scoped">
	
	.body {
		padding-top: 82px;
		width: 100%;
		.body-container {
			width: 1300px;
			margin: 0px auto;
			.about-area{
				width: 1000px;
				height: 300px;
				margin: 0 auto;
				display: flex;
				.about-left{
					width: 400px;
					flex-basis: 400px;
					display: flex;
					justify-content: center;
					align-items: center;
					.profie-pic{
						width: 360px;
						height: 240px;
						box-shadow: 0px 0px 5px 0px rgba(0,0,0,.3);
						img{
							width: 100%;
							height: 100%;
						}
					}
					
				}
				.about-right{
					flex-grow: 1;
					box-sizing: border-box;
					padding: 30px 20px 10px 20px;
					overflow: hidden;
					.profie-title{
						font-size: 20px;
						line-height: 25px;
						height: 25px;
						font-weight: 600;
						margin-bottom: 6px;
					}
					.profie-t-e{
						font-size: 14px;
						position: relative;
						
						&::before{
							content: '';
							display: block;
							position: absolute;
							width: 100%;
							height: 1px;
							background-color: #EBEBEB;
							bottom: -10px;
						}
					}
					.about-content{
						margin-top: 16px;
						word-break: break-word;
						line-height: 26px;
					}
					
				}
			}
			.province-title{
				height: 60px;
				line-height: 60px;
				font-size: 30px;
				font-weight: 500;
				border-bottom: 1px solid rgba(0,0,0,.3);
			}
			.province-list{
				width: 100%;
				display: grid;
				grid-template-columns: repeat(3, minmax(231px, 1fr));
				grid-gap: 35px 45px;
				padding: 40px;
				box-sizing: border-box;
				.list-item {
					height: 290px;
				
					.item-pic {
						height: 222px;
						border-radius: 5px;
						overflow: hidden;
						cursor: pointer;
						margin-bottom: 10px;
					}
					.item-profie{
						text-align: center;
						font-weight: 600;
						font-size: 16px;
					}
				}
			}
			.noResult{
				margin: 20px 0;
				height: 60px;
				line-height: 60px;
				font-size: 25px;
				font-weight: 500;
				text-align: center;
			}
		}
	}
	
</style>
