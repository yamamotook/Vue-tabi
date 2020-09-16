<template>
	<div class="container">
		<div class="wrap">
			<h3 class="title">
				更新您的密码
			</h3>
			<div class="edit-container">
				<div class="edit-item">
					<h5 class="edit-t">旧密码</h5>
					<div class="inp-w">
						<input type="password" v-model="oldPwd" >
					</div>
					<div class="why">
						请输入您旧的密码
					</div>
				</div>
				<div class="edit-item">
					<h5 class="edit-t">新密码</h5>
					<div class="inp-w">
						<input type="password" v-model="newPwd" >
					</div>
					<div class="why">
						请输入您新的密码
					</div>
				</div>
				<div class="edit-item">
					<h5 class="edit-t">确认新密码</h5>
					<div class="inp-w">
						<input type="password" v-model="newPwdValidate" >
					</div>
					<div class="why">
						请输入再次输入新密码来确认密码无误
					</div>
				</div>
				<div class="edit-save" @click="update">
					更新密码
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import api from '@/api/index.js';
	import urls from '@/api/urls.js';
	import showToast from '@/tools/toast/index.js';
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default{
		data(){
			return{
				oldPwd : '',
				newPwd : '',
				newPwdValidate : ''
			}
		},
		methods:{
			async update(){
				if( !this.oldPwd || !this.newPwd || !this.newPwdValidate ){
					showToast({type : 'fail', msg :'请完成表单再提交'});
					return;
				}
				if(this.newPwd != this.newPwdValidate){
					showToast({type : 'fail', msg :'输入的2次新密码不一致'});
					this.newPwd = '';
					this.newPwdValidate = '';
					return ;
				}
				
				const resp = await api.updatePassword({
					oldPwd : this.oldPwd,
					newPwd : this.newPwd
				});
				const data = await resp.json();
				console.log(data);
				if(data.status == 200){
					this.newPwd = '';
					this.newPwdValidate = '';
					this.oldPwd = '';
					showToast({type : 'success', msg : data.msg});
				}else{
					showToast({type : 'fail', msg : 更新密码失败 });
				}
				
			}
		},
		computed: {
			...mapState('urlPath', ['path']),
			...mapState('userStatus', ['userInfo'])
		},
		created(){
			if( !(this.userInfo && this.$route.params.userId == this.userInfo.userId)){
				this.$router.replace({
					name: 'Home'
				});	
			}	
		}
		
	}
	
</script>

<style lang="less" scoped="scoped">
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
