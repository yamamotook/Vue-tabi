<template>
	<div class="body">
		<div class="body-container">
			<div class="title">	
				<router-link tag="div" :to="{name : 'AllArea'}" class="title-other t">
					地区({{history.areaName}}/{{history.areaName_en}})
				</router-link>
				<router-link tag="div" :to="{ name : 'Province',query: { areaId : history.areaId } }" class="title-main t">
					省份({{history.provinceName}})
				</router-link>
			</div>
			<div class="content">
				<div class="content-t">
					{{history.provinceName}}的城市:
				</div>
				<div class="citysList" v-if="citysList.length" >
					<div class="item" v-for="item in citysList" :key="item.cityId" @click="goCityProfie(item.cityId)">
						<div class="item-pic">
							<pic-swiper :imgList="[item.cityHeadPic]"></pic-swiper>
						</div>
						<div class="item-profie">
							{{item.cityName}}
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
	</div>
</template>

<script>
	import picSwiper from '@/components/body/picSwiper.vue';
	import turnPage from '@/components/turnPage/turnPage.vue';
	import api from '@/api/index.js';
	import urls from '@/api/urls.js';
	export default {
		data(){
			return {
				provinceId : null,
				history : {},
				citysList : [],
				urls,
				nowPage: 1,
				pageSize: 9,
				totalPage: 1,
			}
		},
		created(){
			const query = this.$route.query;
			this.provinceId = this.$route.query.provinceId;
			this.ajaxAndRender({...query}, 'getAreaByProvinceId', (result) => {
				console.log(result);
				this.history = {
					...result.data
				}
				console.log(this.history);
			});
			this.ajaxAndRender({...query, nowPage : 1, pageSize : 9}, 'getCityPageByProvince', (result) => {
				console.log(result);
				if(result.status == 200 ){
					this.citysList = result.list;
					this.nowPage = result.nowPage;
					this.totalPage = result.totalPage;
				}
			});
		},
		methods:{
			async ajaxAndRender(query, apiName, success){
				const resp = await api[apiName](query);
				const result = await resp.json();
				if (result.status == 200) {
					success(result);
				}
			},
			update(page) {
				this.nowPage = page;
				this.ajaxAndRender({
					provinceId : this.provinceId,
					pageSize: this.pageSize,
					nowPage: this.nowPage
				},'getCityPageByProvince', (result) => {
					this.provinceList = result.list.list;
					this.totalPage = result.list.totalPage;
					this.nowPage = result.list.nowPage;
			});
			},
			goCityProfie(id){
				this.$router.push({
					name : 'CityProfie',
					query:{
						cityId : id
					}
				});
			}
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
			.title{
				height: 50px;
				line-height: 50px;
				display: flex;
				font-size: 14px;
				.t{
					font-weight: 600;
					padding: 0px 10px;
					&:hover{
						text-decoration: underline;
						cursor: pointer;
					
					}
				}
				.title-other{
					&::after{
						content: '>';
					}
				}
			}
			.content{
				margin-top: 10px;
				box-sizing: border-box;
				padding: 0px 20px;
				.content-t{
					
					font-size: 30px;
					height: 50px;
					line-height: 50px;
					border-bottom: solid 1px #EBEBEB;
				}
				.citysList{
					width: 100%;
					display: grid;
					grid-template-columns: repeat(3, minmax(231px, 1fr));
					grid-gap: 35px 45px;
					padding: 40px;
					box-sizing: border-box;
					.item{
						height: 290px;
						.item-pic{
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
		
	}
</style>
