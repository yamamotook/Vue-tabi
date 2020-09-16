<template>
	<div class="body">
		<div class="body-container">
			<div class="zhou-select">
				<h2 class="title">地区列表</h2>
				<div class="selector" @click="typeChange">
					<div class="selector-item" data-type="all" :class="{active : type == 'all'}">
						不限/All
					</div>
					<div class="selector-item" data-type="Asia" :class="{active : type == 'Asia'}">
						亚洲/Asia
					</div>
					<div class="selector-item" data-type="Europe" :class="{active : type == 'Europe'}" >
						欧洲/Europe
					</div>
					<div class="selector-item" data-type="Africa" :class="{active : type == 'Africa'}" >
						非洲/Africa
					</div>
					<div class="selector-item" data-type="NA" :class="{active : type == 'NA'}" >
						北美/North America
					</div>
					<div class="selector-item" data-type="SA" :class="{active : type == 'SA'}" >
						南美/South America
					</div>
					<div class="selector-item" data-type="Oceania" :class="{active : type == 'Oceania'}" >
						大洋洲/Oceania
					</div>
				</div>
			</div>
			<div class="areaList">
				<div class="list-item" v-for="(item, index) in list" >
					<div class="item-pic" @click="toProvince(item.areaId, index)" >
						<pic-swiper :imgList="[item.picSrc]"></pic-swiper>
					</div>
					<div class="item-profie">
						<div class="areaName">{{item.areaName}}/{{item.areaName_en}}</div>
						<div class="areaProp" v-if="item.zhou == 'Asia'">亚洲</div>
						<div class="areaProp" v-else-if="item.zhou == 'Europe'">欧洲</div>
						<div class="areaProp" v-else-if="item.zhou == 'Africa'">非洲</div>
						<div class="areaProp" v-else-if="item.zhou == 'NA'">北美洲</div>
						<div class="areaProp" v-else-if="item.zhou == 'SA'">南美洲</div>
						<div class="areaProp" v-else-if="item.zhou == 'SA'">南美洲</div>
						<div class="areaProp" v-else-if="item.zhou == 'Oceania'">大洋洲</div>
					</div>
				</div>

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
	export default {
		data() {
			return {
				nowPage: 1,
				pageSize: 9,
				totalPage: 1,
				list: [],
				type: 'all'
			}
		},
		methods: {
			toProvince(areaId,index){
				this.$router.push({
					name : 'Province',
					query: {
						areaId
					}
				});
			},
			update(page) {
				this.nowPage = page;
				this.ajaxAndRender({
					pageSize: this.pageSize,
					nowPage: this.nowPage,
					type: this.type
				});
			},
			typeChange(e) {
				const element = e.target;
				const type = element.getAttribute('data-type');
				if(!type) return;
				this.type = type;
				this.nowPage = 1;
				this.ajaxAndRender({
					pageSize: this.pageSize,
					nowPage: this.nowPage,
					type: this.type
				});
			},
			async ajaxAndRender(query){
				const resp = await api.getAllAreaByPage(query);
				const result = await resp.json();
				if (result.status == 200) {
					this.list = result.list;
					this.totalPage = result.totalPage;
					this.nowPage = result.nowPage;
				}
			},
		},
		components: {
			picSwiper,
			turnPage
		},
		created() {
			this.ajaxAndRender({
				pageSize: this.pageSize,
				nowPage: 1,
				type: 'all'
			});
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

			.zhou-select {
				width: 100%;
				// height: 50px;
				// border: 1px solid black;

				.title {
					height: 45px;
					line-height: 45px;
					text-align: center;
					font-weight: 600;
					font-size: 18px;
				}

				.selector {
					margin-top: 20px;
					height: 50px;
					display: flex;
					justify-content: center;
					align-items: center;

					.selector-item {
						cursor: pointer;
						height: 50px;
						line-height: 50px;
						box-sizing: border-box;
						box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
						border: solid 0.5px #D8D8D8;
						color: #484848;
						padding: 0px 20px;
						margin: 0px 20px;
						border-radius: 3px;
						transition: all .3s linear;

						&.active {
							background-color: #F56C6C;
							color: #fff;
						}
					}

				}

			}

			.areaList {
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
						margin-bottom: 16px;
					}

					.item-profie {
						color: #484848;

						.areaName,
							{
							font-size: 18px;
							font-weight: 600;
							line-height: 26px;
						}

						.areaProp {
							font-size: 16px;
							line-height: 16px;
							// font-weight: 600;
							color: #484848;
							text-align: right;
						}

					}

				}
			}
		}
	}
</style>
