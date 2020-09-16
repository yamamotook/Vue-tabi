<template>

	<div class="nav-left">
		<div class="home-wrap" @click="toHome">
			<svg  class="icon" viewBox="0 0 1024 1024" 
			 width="40" height="40">
				<path d="M773.35 875.31h-522.7c-45.71 0-82.9-37.19-82.9-82.9V452.6c0-26.94 13.15-52.29 35.19-67.79l261.34-183.92c28.54-20.08 66.88-20.09 95.42 0.01l261.35 183.9c22.04 15.51 35.19 40.86 35.19 67.8v339.81c0 45.71-37.18 82.9-82.89 82.9zM512 241.07a27.57 27.57 0 0 0-15.9 5.02L234.76 430.01a27.625 27.625 0 0 0-11.73 22.59v339.81c0 15.24 12.4 27.63 27.63 27.63h522.69c15.24 0 27.63-12.39 27.63-27.63V452.6c0-8.98-4.39-17.43-11.73-22.6L527.9 246.1a27.531 27.531 0 0 0-15.9-5.03z"
				 :class="svgClass"></path>
				<path d="M512 762.27c-67.99 0-133.28-28.43-180.01-77.28-11.52-12.04-9.92-31.47 3.47-41.39 11.01-8.15 26.58-7.22 35.97 2.76C407.94 685.15 458.02 707 512 707s104.06-21.84 140.58-60.64c9.39-9.97 24.96-10.9 35.97-2.76 13.39 9.91 14.99 29.35 3.47 41.39-46.74 48.85-112.03 77.28-180.02 77.28z"
				  :class="svgClass"></path>
			</svg>
		</div>

		<div class="search-wrap" v-if=" showByPath " @click="stopProp">
			<div class="search-icon-wrap" >
				<svg class="search-icon">
					<path d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"></path>
				</svg>
			</div>
			<div class="search-content" >
				<input type="text" class="inp-nav-search" placeholder="搜台湾试一试" v-model="searchWord" @input="readySearch">
			</div>
			<transition name="search">
				<div class="search-result" v-if="isSearchResultShow" >
					<div class="resultList">
						<div class="kokkaList result-i" v-if="s_area.length">
							<div class="s-title">
								地区和国家
							</div>
							<div class="s-c">
								<router-link tag="li" :to="{name : 'Province', query : { areaId : areaItem.areaId }}" class="s-item" v-for="areaItem in s_area" :key="areaItem.areaid">
									{{ areaItem.areaName }}({{ areaItem.areaName_en }})
								</router-link>
							</div>
						</div>
						<div class="cityList result-i" v-if="s_city.length">
							<div class="s-title">
								城市
							</div>
							<div class="s-c" v-for=" cityItem in s_city " :key="cityItem.cityId" >
								<router-link tag="li" :to="{ name :'CityProfie', query : { cityId : cityItem.cityId } }" class="s-item" >
									{{  cityItem.cityName }},{{ cityItem.areaName }}
								</router-link>
							</div>
						</div>
						<div class="paysageList result-i" v-if="s_paysage.length">
							<div class="s-title">
								观光地
							</div>
							<div class="s-c">
								<router-link tag="li"  :to="{ name : 'PaysageProfie', query : { paysageId : paysageItem.paysageId } }" class="s-item" v-for="paysageItem in s_paysage" :key=" paysageItem.paysageId ">
									{{ paysageItem.paysageName }},{{ paysageItem.cityName }},{{ paysageItem.areaName }}({{ paysageItem.areaName_en }}) 
								</router-link>
							</div>
						</div>
						<div class="no-res" v-if=" !s_paysage.length && !s_area.length  && !s_city.length ">
							无结果
						</div>
					</div>
				</div>
			</transition>
		</div>
	</div>

</template>

<script>
	import {
		mapState
	} from 'vuex';
	import api from '@/api/index.js';
	import urls from '@/api/urls.js';
	export default {
		props: ['color'],
		data(){
			return {
				searchWord : '',
				timer : null,
				isSearchResultShow : false,
				s_city : [],
				s_area : [],
				s_paysage : []
			}
		},
		methods: {
			toHome() {
				this.$router.push('/home');
			},
			stopProp(e){
				e.stopPropagation();
			},
			readySearch(){
				clearTimeout(this.timer);
				if(this.searchWord.length){
					this.timer = setTimeout( async _=>{
						console.log('search', this.searchWord);
						const resp =  await api.searchByWord({word : this.searchWord});
						const data =  await resp.json();
						if(data.status == 200){
							this.isSearchResultShow = true;
							this.s_area = data.data.area;
							this.s_city = data.data.city;
							this.s_paysage = data.data.paysage;
						}
					},1200);
					
				}else{
					this.isSearchResultShow = false;
				}
				
			},
			searchWrapHide(){
				this.isSearchResultShow = false;
			}
		},
		computed: {
			...mapState('urlPath', ['path']),
			showByPath() {
				if (this.path == '/register' || this.path == '/signIn') {
					return false
				}
				return true;
			},
			svgClass(){
				return this.color == 'dark' ? 'dark' : 'light';
			}
		},
		watch:{
			isSearchResultShow(val){
				if(val){
					document.addEventListener('click', this.searchWrapHide,false);
				}else{
					document.removeEventListener('click', this.searchWrapHide);
				}
				this.value = val;
			}
			
		}
	}
</script>

<style scoped="scoped" lang="less">
	
	@keyframes show {
		from {
			opacity: 0;
			transform: scale(0.8)
		}
	
		to {
			opacity: 1;
			transform: scale(1);
		}
	}
	.search-enter-active {
		animation: show .3s;
	}
	
	.search-leave-active {
		animation: hide .3s;
	}
	
	@keyframes hide {
		from {
			opacity: 1;
		}
	
		to {
			opacity: 0;
		}
	}
	.nav-left {
		display: flex;
		// flex-direction: column;
		justify-content: center;
		align-items: center;

		.home-wrap {
			height: 48px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0px 20px;
			cursor: pointer;
			.dark{
				fill : #F56C6C;
			}
			.light{
				fill: #ffff;
			}
		}

		.search-wrap {
			width: 450px;
			height: 48px;
			background-color: #fff;
			border-radius: 5px;
			display: flex;
			position: relative;
			box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, .4);

			.search-icon-wrap {
				height: 100%;
				flex-basis: 50px;
				display: flex;
				justify-content: center;
				align-items: center;

				.search-icon {
					text-align: center;
					height: 18px;
					width: 18px;
					display: block;
					fill: currentColor;
				}
			}

			.search-content {
				overflow: hidden;
				flex-grow: 1;

				.inp-nav-search {
					width: 395px;
					height: 100%;
					box-sizing: border-box;
					padding: 5px 0px;
					font-size: 17px;
					outline: none;
					border: none;
					font-weight: 600;
				}
			}

			.search-result {
				// display: none;	 
				position: absolute;
				top: 50px;
				left: 50px;
				width: calc(100% - 50px);
				// height: 100px;
				background-color: #fff;
				border-radius: 3px;
				padding: 0px 0px 10px 0;
				max-height: 400px;
				overflow: auto;
				.no-res{
					height: 40px;
					line-height: 40px;
					font-weight: 600;
					padding-left: 20px;
				}
				.result-i{
					.s-title{
						height: 30px;
						line-height: 30px;
						color: #484848;
						font-weight: 600;
						font-size: 16px;
						// box-sizing: border-box;
						padding: 5px 15px;
					}
					.s-c{
						.s-item{
							box-sizing: border-box;
							padding: 0px 25px;
							cursor: pointer;
							height: 40px;
							line-height: 40px;
							font-size: 14px;
							font-weight: 500;
							&:hover{
								transition: background-color .3s ease;
								background-color: #F7F7F7 ;
							}
						}
					}
				}
			}
		}
	}
</style>
