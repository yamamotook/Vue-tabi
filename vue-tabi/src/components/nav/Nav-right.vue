<template>

	<div class="nav-right" :class="color">
		<template v-if="!userInfo">
			<ul class="login-container">
				<router-link tag="li" class="nav-item" :to="{ name : 'Register'}" v-if="path != '/register'" >注册</router-link>
				<router-link tag="li" class="nav-item" :to="{ name : 'SignIn', query : { from : $route.name, query : { ...$route.query }, params : { ...$route.params} }}" v-if="path != '/signIn'">登录</router-link>
			</ul>
		</template>
		<template v-else>
			<ul class="login-container">
				<li class="nav-item" @click="signOut">
					注销
				</li>
				<router-link class="nav-item userInfo-wrap" tag="li" :to="{ name : 'UserProfie', params : {userId : userInfo.userId}}" >
					<span class="username">{{userInfo.userName}}</span>
					<img :src="urls.baseUrl + urls.getPicByPath + '?path=' + userInfo.headImg " alt="">
				</router-link>
			</ul>
		</template>

	</div>

</template>

<script>
	import urls from '@/api/urls.js';
	import api from '@/api/index.js';
	import showToast from '@/tools/toast/index.js';
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		props:['color'],
		data() {
			return {
				urls: urls
			}
		},
		methods:{
			...mapMutations('userStatus', ['setUserInfo']),
			signOut(){
				(async _=>{
					const resp = await api.signOut();
					const result = await resp.json();
					console.log(result);
					if(result.status == 200){
						this.setUserInfo(result.userInfo);
						showToast({type : 'success', msg : '账号已经退出'});
					}
				})()
			}
		},
		computed: {
			...mapState('urlPath', ['path']),
			...mapState('userStatus', ['userInfo'])
		}
	}
</script>

<style scoped="scoped" lang="less">
	.nav-right{
		height: 100%;

		.login-container {
			height: 100%;
			display: flex;

			.userInfo-wrap {
				display: flex;
				justify-content: center;
				align-items: center;

				img {
					width: 40px;
					height: 40px;
					border-radius: 50%;
					box-sizing: border-box;
					// border: 2px solid #fff;
					box-shadow: 0px 0px 10px 0px rgba(0,0,0,.3);
				}

			}

			.nav-item {
				padding: 0px 10px;
				text-align: center;
				line-height: 80px;
				// color: #fff;
				font-weight: 600;
				font-size: 14px;
				position: relative;
				margin: 0px 10px;
				cursor: pointer;

				&::before {
					content: '';
					display: none;
					position: absolute;
					width: 100%;
					bottom: 0;
					left: 0;
					// background-color: #fff;
					height: 3px;
				}

				&:hover::before {
					display: block;
				}

			}
		}
	}
	
	.nav-right.light{
		.userInfo-wrap{
			display: flex;
			img{
				border: 2px solid #fff;
			}
			.username{
				padding: 0px 10px;
			}
		}
		.nav-item{
			color: #fff;
			&::before{
				background-color: #fff;
			}
		}
	}
	
	.nav-right.dark{
		.userInfo-wrap{
			img{
				// border: 2px solid rgba(0,0,0,.8);
			}
			.username{
				padding: 0px 10px;
			}
		}
		.nav-item{
			color: #000;
			&::before{
				background-color: #000;
			}
		}
	}
	
	
</style>
