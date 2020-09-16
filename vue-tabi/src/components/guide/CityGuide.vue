<template>
	<div class="cityGuide">
		<ul class="guide-wrapper">
			<li class="guide-each title">
				<div class="guide-static">
					<span class="icon"><svg viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" style="height:20px;width:20px;display:block;fill:currentColor">
							<path d="m16 .75c-6.77 0-12.25 5.48-12.25 12.25 0 6.37 3.23 11.14 11.78 18.08a.75.75 0 0 0 .95 0c8.54-6.94 11.77-11.71 11.77-18.08 0-6.77-5.48-12.25-12.25-12.25zm0 17a4.75 4.75 0 1 1 0-9.5 4.75 4.75 0 0 1 0 9.5z"
							 fill-rule="evenodd"></path>
						</svg></span>
					目的地:
				</div>
			</li>
			<li class="guide-each overSea">
				<div class="guide-static" @click="switchFlag('overSeaFlag')">
					<div class="overSeaDis" :class="{'selected' : curInfo.overSeaId}">
						{{overSeaName}}
					</div>
					<span class="icon"><svg viewBox="0 0 24 24" role="img" aria-label="Expand" focusable="false" style="height: 1em; width: 1em; display: block; fill: currentcolor;">
							<path d="m12.5 17c-.4426799 0-.8662787-.1919807-1.1664869-.5259747l-6.9098769-7.71341826c-.59660019-.66535794-.55843813-1.70547282.0852286-2.3221781.6449388-.61802022 1.65241717-.57725718 2.24774529.08810076l5.74338991 6.4103161 5.7433899-6.4103161c.5953281-.66404301 1.6015344-.70612098 2.2477453-.08810076.6436667.61670528.6818288 1.65682016.0852286 2.3221781l-6.9098769 7.71341826c-.3002082.333994-.723807.5259747-1.1664869.5259747"></path>
						</svg></span>
				</div>
				<transition name="sele">
					<div class="select-wrap" v-show="flags.overSeaFlag">
						<guide-select propName="name" propId="id" :list="overSeaList" type="overSea" :curId="curInfo.overSeaId" @change="change"></guide-select>
					</div>
				</transition>
			</li>
			<li class="guide-each area">
				<div class="guide-static" @click="switchFlag('areaFlag')">
					<div class="areaDis" :class="{'selected' : curInfo.areaId}">
						{{areaName}}
					</div>
					<span class="icon"><svg viewBox="0 0 24 24" role="img" aria-label="Expand" focusable="false" style="height: 1em; width: 1em; display: block; fill: currentcolor;">
							<path d="m12.5 17c-.4426799 0-.8662787-.1919807-1.1664869-.5259747l-6.9098769-7.71341826c-.59660019-.66535794-.55843813-1.70547282.0852286-2.3221781.6449388-.61802022 1.65241717-.57725718 2.24774529.08810076l5.74338991 6.4103161 5.7433899-6.4103161c.5953281-.66404301 1.6015344-.70612098 2.2477453-.08810076.6436667.61670528.6818288 1.65682016.0852286 2.3221781l-6.9098769 7.71341826c-.3002082.333994-.723807.5259747-1.1664869.5259747"></path>
						</svg></span>
				</div>
				<transition name="sele">
					<div class="select-wrap" v-show="flags.areaFlag">
						<guide-select propName="areaName" propId="areaId" :list="areaList" type="area" :curId="curInfo.areaId" @change="change"></guide-select>
					</div>
				</transition>
			</li>
			<li class="guide-each province">
				<div class="guide-static" @click="switchFlag('provinceFlag')">
					<div class="provinceDis" :class="{'selected' : curInfo.provinceId}">
						{{provinceName}}
					</div>
					<span class="icon"><svg viewBox="0 0 24 24" role="img" aria-label="Expand" focusable="false" style="height: 1em; width: 1em; display: block; fill: currentcolor;">
							<path d="m12.5 17c-.4426799 0-.8662787-.1919807-1.1664869-.5259747l-6.9098769-7.71341826c-.59660019-.66535794-.55843813-1.70547282.0852286-2.3221781.6449388-.61802022 1.65241717-.57725718 2.24774529.08810076l5.74338991 6.4103161 5.7433899-6.4103161c.5953281-.66404301 1.6015344-.70612098 2.2477453-.08810076.6436667.61670528.6818288 1.65682016.0852286 2.3221781l-6.9098769 7.71341826c-.3002082.333994-.723807.5259747-1.1664869.5259747"></path>
						</svg></span>
				</div>
				<transition name="sele">
					<div class="select-wrap" v-show="flags.provinceFlag">
						<guide-select propName="provinceName" propId="provinceId" :list="provinceList" type="province" :curId="curInfo.provinceId"
						 @change="change"></guide-select>
					</div>
				</transition>
			</li>
			<li class="guide-each city">
				<div class="guide-static" @click="switchFlag('cityFlag')">
					<div class="cityDis" :class="{'selected' : curInfo.cityId}">
						{{cityName}}
					</div>
					<span class="icon"><svg viewBox="0 0 24 24" role="img" aria-label="Expand" focusable="false" style="height: 1em; width: 1em; display: block; fill: currentcolor;">
							<path d="m12.5 17c-.4426799 0-.8662787-.1919807-1.1664869-.5259747l-6.9098769-7.71341826c-.59660019-.66535794-.55843813-1.70547282.0852286-2.3221781.6449388-.61802022 1.65241717-.57725718 2.24774529.08810076l5.74338991 6.4103161 5.7433899-6.4103161c.5953281-.66404301 1.6015344-.70612098 2.2477453-.08810076.6436667.61670528.6818288 1.65682016.0852286 2.3221781l-6.9098769 7.71341826c-.3002082.333994-.723807.5259747-1.1664869.5259747"></path>
						</svg></span>
				</div>
				<transition name="sele">
					<div class="select-wrap" v-show="flags.cityFlag">
						<guide-select propName="cityName" propId="cityId" :list="cityList" type="city" :curId="curInfo.cityId" @change="change"></guide-select>
					</div>
				</transition>
			</li>
			<li class="guide-each search">
				<button class="searchBtn" @click="searchCity" >
					 <svg style="display:block;fill:none;height:12px;width:12px;stroke:currentColor;stroke-width:5.333333333333333;overflow:visible" aria-hidden="true" role="presentation" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
					  Search
				</button>
			</li>

		</ul>

	</div>

</template>

<script>
	import api from '@/api/index.js'
	import guideSelect from './guide-select.vue'
	import showToast from '@/tools/toast/index.js';
	export default {

		data() {
			return {
				curInfo: {
					overSeaId: null,
					areaId: null,
					provinceId: null,
					cityId: null
				},
				flags: {
					overSeaFlag: false,
					areaFlag: false,
					provinceFlag: false,
					cityFlag: false
				},
				overSeaList: [{
						id: '0',
						name: '国内'
					},
					{
						id: '1',
						name: '国外'
					}
				],
				areaList: [],
				provinceList: [],
				cityList: []
			}
		},
		methods: {
			switchFlag(flag) {
				this.flagReset();
				this.flags[flag] = !this.flags[flag];
			},
			searchCity() {
				if (this.curInfo.cityId) {
					this.$router.push({
						name: 'CityProfie',
						query: {
							cityId: this.curInfo.cityId
						}
					})
				} else {
					showToast({
						type: 'fail',
						msg: '搜索需要先完成前面的选项卡'
					});
				}
			},
			change(data) {
				if (data.type === 'overSea') {
					if (this.curInfo.overSeaId != data.target.id) {
						this.curInfo.overSeaId = data.target.id;
						//重置后面的select
						this.curInfo.areaId = this.curInfo.provinceId = this.curInfo.cityId = null;
						this.areaList = this.provinceList = this.cityList = [];
						//请求数据
						(async _ => {
							const resp = await api.getAreaByOverSea({
								overSeaId: data.target.id
							});
							const result = await resp.json();
							if (result.status == 200) {
								this.areaList = result.data;
							}
						})()
					}
				}
				if (data.type === 'area') {
					if (this.curInfo.areaId != data.target.areaId) {
						this.curInfo.areaId = data.target.areaId;
						//重置后面的select
						this.curInfo.provinceId = this.curInfo.cityId = null;
						this.provinceList = this.cityList = [];
						//请求数据
						(async _ => {
							const resp = await api.getProvinceByArea({
								areaId: data.target.areaId
							});
							const result = await resp.json();
							console.log('result', result);
							if (result.status == 200) {
								this.provinceList = result.data;
							}
						})()
					}
				}
				if (data.type === 'province') {
					if (this.curInfo.provinceId != data.target.provinceId) {
						this.curInfo.provinceId = data.target.provinceId;
						//重置后面的select
						this.curInfo.cityId = null;
						this.cityList = [];
						//请求数据
						(async _ => {
							const resp = await api.getCityByProvince({
								provinceId: data.target.provinceId
							});
							const result = await resp.json();
							console.log('result', result);
							if (result.status == 200) {
								this.cityList = result.data;
							}
						})()
					}
				}

				if (data.type === 'city') {
					if (this.curInfo.cityId != data.target.cityId) {
						this.curInfo.cityId = data.target.cityId;
					}
				}

				this.flagReset()
			},
			flagReset() {
				for (const prop in this.flags) {
					this.flags[prop] = false;
				}
			}
		},
		computed: {
			overSeaName() {
				const item = this.overSeaList.find(item => {
					return this.curInfo.overSeaId === item.id
				});
				if (item) {
					return item.name
				} else {
					return '国内 / 国外'
				}
			},
			areaName() {
				const item = this.areaList.find(item => {
					return this.curInfo.areaId === item.areaId
				});
				if (item) {
					console.log('yes', item.areaName);
					return item.areaName;
				} else {
					return '国家 / 地区'
				}
			},
			provinceName() {
				const item = this.provinceList.find(item => {
					return this.curInfo.provinceId === item.provinceId
				});
				if (item) {
					return item.provinceName;
				} else {
					return '省份';
				}
			},
			cityName() {
				const item = this.cityList.find(item => {
					return this.curInfo.cityId === item.cityId
				});
				if (item) {
					return item.cityName;
				} else {
					return '城市';
				}
			}
		},
		components: {
			guideSelect
		}
	}
</script>

<style scoped="scoped" lang="less">
	@color : #484848;
	@borderColor : rgb(220, 220, 220);
	@defaultColor : rgb(150, 150, 150);

	@keyframes show {
		from {
			opacity: 0;
			transform: translateY(20px);
		}

		to {
			opacity: 1;
			transform: translateY(0px);
		}
	}

	@keyframes hide {
		from {
			opacity: 1;
		}

		to {
			opacity: 0;
		}
	}

	svg {
		height: 1em;
		width: 1em;
		display: block;
		fill: currentcolor;
	}

	.cityGuide {
		width: 960px;
		height: 72px;
		box-sizing: border-box;
		margin: 0 auto;
		background-color: #ffff;
		border-radius: 5px;
		box-shadow: 0px 0px 10px 0 rgba(0, 0, 0, .3);
		color: @color;
	}

	.guide-wrapper {
		width: 100%;
		height: 100%;
		display: flex;

		.guide-static {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;
		}

		.select-wrap {
			position: absolute;
			top: 73px;
			width: 100%;
			overflow: hidden;
		}

		.title {
			color: @color;
			width: 120px;
			font-weight: 600;

			.icon {
				margin-bottom: 3px;
			}
		}

		.icon {
			margin: 0px 5px;
		}

		.overSea {
			color: @defaultColor;
			width: 160px;

			.overSeaDis.selected {
				color: @color;
			}
		}

		.area {
			width: 160px;
			// padding: 0px 20px;
			color: @defaultColor;

			.areaDis {
				height: 100%;
			}

			.areaDis.selected {
				color: @color;
			}
		}

		.province {
			width: 210px;
			color: @defaultColor;

			.provinceDis.selected {
				color: @color;
			}
		}

		.city {
			width: 190px;
			color: @defaultColor;

			.cityDis.selected {
				color: @color;
			}
		}

		.search {
			flex-grow: 1;
			line-height: 72px;

			.searchBtn {
				svg{
					margin-right: 10px;
				}
				display: flex;
				align-items: center;
				height: 50px;
				background-image: linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%) !important;
				color: #fff;
				border: none;
				border-radius: 5px;
				font-size: 16px;
				cursor: pointer;
				padding: 0px 15px;
				
			}
		}

		.guide-each:nth-last-of-type(1) {
			border: none;
		}

		.guide-each {
			display: flex;
			justify-content: center;
			align-items: center;
			font-weight: 600;
			line-height: 72px;
			text-align: center;
			font-family: Arial, Helvetica, sans-serif;
			border-right: 1px solid @borderColor;
			position: relative;
		}
	}

	.sele-enter-active {
		animation: show .3s;
	}

	.sele-leave-active {
		animation: hide .3s;
	}
</style>
