<template>
	
	<div class="container">
		<div class="wrap">
			<h3 class="title">
				修改您的信息
			</h3>
			<div class="edit-container">
				<div class="edit-item">
					<h5 class="edit-t">性别</h5>
					<div class="inp-w">
						<select name="sex" id="user_sex"  v-model="updateUserInfo.sex" >
							<option value="1"  >Male</option>
							<option value="2"  >Female</option>
							<option value="0"  >Privacy</option>
						</select>
					</div>
					<div class="why">
						您的性别将会被公开,不想公开的情况,请选择保密选项.
					</div>
				</div>
				<div class="edit-item">
					<h5 class="edit-t">昵称</h5>
					<div class="inp-w">
						<input type="text"  v-model="updateUserInfo.userName">	
					</div>
					<div class="why">
						您的昵称是公开的,任何人都可以看到
					</div>
				</div>
				
				<div class="edit-item">
					<h5 class="edit-t">居住的城市</h5>
					<div class="inp-w">
						<input type="text"  v-model="updateUserInfo.liveCity">	
					</div>
					<div class="why">
						填写后该资料将会被公开,其他用户将知道您的居住城市,如果你不想公开该项可以不填.
					</div>
				</div>
				<div class="edit-item">
					<h5 class="edit-t">生日</h5>
					<div class="inp-w">
						<input type="date"  v-model="updateUserInfo.birthday" >	
					</div>
					<div class="why">
						填写后月份和日期将会被公开,如果你不想公开该项可以不填.您的生日将帮助我们更好地为您提供服务.
					</div>
				</div>
				<div class="edit-item">
					<h5 class="edit-t">介绍一下您自己</h5>
					<div class="inp-w">
						<textarea name="" id="" cols="40" v-model="updateUserInfo.aboutMe" >
							{{updateUserInfo.aboutMe}}
						</textarea>
					</div>
					<div class="why">
						告诉他们您喜欢什么，您离开了哪几样东西就不能活？
						<br/>
						分享您最喜爱的旅游目的地、书籍、电影、电视节目、音乐以及美食。
						<br/>
						您也可以向大家介绍一下自己的人生格言。
					</div>
				</div>
			
				<div class="edit-save" @click="save">
					保存
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	import api from '@/api/index.js';
	import urls from '@/api/urls.js';
	import showToast from '@/tools/toast/index.js';
	export default{
		data(){
			return {
				urls,
			}
		},
		computed:{
			...mapState('urlPath', ['path']),
			...mapState('userStatus', ['userInfo']),
			updateUserInfo(){
				const birthday = this.userInfo.birthday;
				let birthDayStr = '';
				if(birthday){
					const month = birthday.getMonth() < 10 ? '0' + (birthday.getMonth() + 1) : birthday.getMonth() + 1;
					const date = birthday.getDate() < 10 ? '0' + birthday.getDate() : birthday.getDate();
					birthDayStr = `${birthday.getFullYear()}-${month}-${date}`;
				}else{
					birthDayStr = '';
				}
				
				return {
					...this.userInfo,
					birthday : birthDayStr
				}
			},
			
		},
		created(){
			if( !(this.userInfo && this.$route.params.userId == this.userInfo.userId)){
				this.$router.replace({
					name: 'Home'
				});	
			}
		},
		methods:{
			...mapMutations('userStatus',['setUserInfo']),
			async save(){
				console.log(this.updateUserInfo);
				const resp = await api.updateUserInfoById(this.updateUserInfo);
				const data = await resp.json();
				console.log(data);
				if(data.status == 200){
					showToast({ type : 'success', msg : '信息更新成功!' });
					data.userInfo.birthday = new Date(data.userInfo.birthday) || '';
					this.setUserInfo(data.userInfo);
				}else{
					showToast({ type : 'fail', msg : data.msg });
				}
			}
		}
	}
</script>

<style scoped="scoped"  lang="less">
	.container{
		padding-top: 80px;
		width: 1200px;
		margin: 0px auto;
		color : #484848;
		
		.wrap{
			box-sizing: border-box;
			padding: 20px;
			.title{
				font-size: 30px;
				height: 80px;
				line-height: 80px;
				border-bottom: 1px solid rgba(155,155,155,.4);
			}
			.edit-container{
				width: 650px;
				margin: 0px auto;
				.edit-item{
					margin-bottom: 20px;
					.edit-t{
						font-weight: 600;
						height: 26px;
						line-height: 26px;
						margin: 10px 0;
					}
					.inp-w{
						input{
							outline: none;
							width: 100%;
							padding: 11px;
							color: #484848;
							border-radius: 5px;
							height: 24px;
							border: solid rgba(155,155,155,.4) 1px;
							transition: border-color .3s ease;
							&:focus{
								border-color: rgba(0, 132, 137, 1);
							}
						}
						select{
							padding-top: 8px;
							padding-bottom: 8px;
							padding-right: 2em;
							padding-left: 11px;
							height: 45px;
							color: #484848;
						}
						textarea{
							padding: 10px 10px;
							width: 100%;
							border: 1px solid #aaa;
							height: 132px;
							resize: vertical;
							display: block;
							transition: border-color .3s ease;
							line-height: 20px;
							font-size: 16px;
							&:focus{
								border-color: rgba(0, 132, 137, 1);
							}
						}
					}
					.why{
						line-height: 20px;
						font-size: 14px;
						color : #767676;
						margin-top: 6px;
						
					}
				}
				.edit-save{
					height: 20px;
					padding: 10px 20px;
					line-height: 20px;
					font-size: 18px;
					font-weight: 500;
					color: #fff;
					background-color: #F56C6C;
					border-radius: 5px;
					display: inline-block;
					cursor: pointer;
				}
			}
		
		}
	}
</style>
