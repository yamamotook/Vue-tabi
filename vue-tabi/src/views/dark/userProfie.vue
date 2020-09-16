<template>
	<div class="userProfie">
		<div class="container">
			<div class="left">
				<div class="userInfo">
					<div class="header">
						<img :src="urls.baseUrl + urls.getPicByPath + '?path=' + user.headImg" :alt="user.userName" >
						<span class="updateHeader" @click="updatePic" v-if="isHonnin" >更新照片</span>
						<input type="file" hidden="hidden" accept="image/*" id="user_profie_pic" @change="change" >
					</div>
					<div class="importInfo">
						<div class="title" :title="user.userName + '已提供'">
							{{user.userName}}已提供
						</div>
						<div class="info-item">
							<div class="icon">
								<svg viewBox="0 0 20 20" role="presentation" aria-hidden="true" focusable="false" style="height: 18px; width: 18px; display: block; fill: rgb(0, 132, 137);"><path d="m8.3 14.1 7.5-7.5c.2-.2.2-.5 0-.7s-.5-.2-.7 0l-7.1 7.1-3-3c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l3.3 3.3c.1.1.2.1.4.1.1 0 .3-.1.4-.1m1.7-13.1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9m0 19c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10"></path></svg>
								<span>手机号</span>
							</div>
							<div class="info-content">
								{{user.phone}}
							</div>
						</div>
						<div class="info-item">
							<div class="icon">
								<svg viewBox="0 0 20 20" role="presentation" aria-hidden="true" focusable="false" style="height: 18px; width: 18px; display: block; fill: rgb(0, 132, 137);"><path d="m8.3 14.1 7.5-7.5c.2-.2.2-.5 0-.7s-.5-.2-.7 0l-7.1 7.1-3-3c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l3.3 3.3c.1.1.2.1.4.1.1 0 .3-.1.4-.1m1.7-13.1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9m0 19c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10"></path></svg>
								<span>邮箱</span>
							</div>
							<div class="info-content">
								{{user.email}}
							</div>
						</div>
					</div>
					<div class="normalInfo">
						<div class="info-item" v-if="user.sex">
							<div class="icon">
								<span>性别 :</span>
							</div>
							<div class="info-content" v-if="user.sex">
								{{ user.sex == 2 ? '女' : '男'  }}
							</div>
						</div>
						<div class="info-item" v-if="user.liveCity">
							<div class="icon">
								<span>位置 :</span>
							</div>
							<div class="info-content">
								{{ user.liveCity }}
							</div>
						</div>
						<div class="info-item" v-if="user.birthday">
							<div class="icon">
								<span>生日 :</span>
							</div>
							<div class="info-content">
								{{user.birthday.getMonth() + 1}}月{{user.birthday.getDate()}}日
							</div>
						</div>
						<div class="info-item" v-if="user.aboutMe">
							<div class="icon">
								<span>关于我:</span>
							</div>
							<div class="info-content-about">
								{{ user.aboutMe }}
							</div>
						</div>
					</div>
				</div>
				
			</div>
			<div class="right">
				<div class="right-container">
					<div class="r-title" :title="user.userName">
						您好, &nbsp;&nbsp;我叫{{user.userName}}
					</div>
					<div class="infoEdit-wrap" v-if="isHonnin" >
						<router-link tag="span" :to="{name : 'UserEdit', params : { userId : user.userId } }"  >
							编辑个人资料
						</router-link>
						<span style="font-weight: 500; font-size: 18px; margin: 0px 8px;">·</span>
						<router-link tag="span" :to="{name : 'PasswordModify', params : { userId : user.userId } }"  >
							更新密码
						</router-link>
					</div>
					<div class="comment-wrap">
						<div class="comment-title">
							{{ isHonnin ? '您' : 'TA' }}写的评价
						</div>
						<div class="comment-item" v-for="comment in commentList" :key="comment.commentId" >
							<div class="c-i-title">
								<div class="address">
									评价于<router-link tag="span" :to="{ name : 'PaysageProfie', query : { paysageId : comment.paysageId } }">{{comment.paysageName}}</router-link>
								</div>
								<div class="delete-icon" @click="deleteComment(comment.commentId)" v-if="isHonnin">
									<svg t="1586885534286" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2231" width="26" height="26"><path d="M797.536 356V824a102.496 102.496 0 0 1-100.912 104H343.392a102.496 102.496 0 0 1-100.928-104V356A51.2 51.2 0 0 1 192 304v-52a51.2 51.2 0 0 1 50.464-52h151.392V148A51.2 51.2 0 0 1 444.304 96h151.392a51.2 51.2 0 0 1 50.464 52v52h151.392A51.2 51.2 0 0 1 848 252V304a51.2 51.2 0 0 1-50.464 52zM292.928 824a51.2 51.2 0 0 0 50.464 52h353.232a51.2 51.2 0 0 0 50.464-52V356H292.928V824z m302.768-650a25.6 25.6 0 0 0-25.232-26h-100.928a25.6 25.6 0 0 0-25.232 26V200h151.392v-26z m176.608 78H267.696a26.016 26.016 0 0 0 0 52h504.608a26.016 26.016 0 0 0 0-52z m-378.464 208a25.6 25.6 0 0 1 25.232 26v312a25.248 25.248 0 1 1-50.464 0v-312a25.6 25.6 0 0 1 25.232-26z m126.16 0a25.6 25.6 0 0 1 25.232 26v312a25.248 25.248 0 1 1-50.464 0v-312A25.6 25.6 0 0 1 520 460z m126.16 0a25.6 25.6 0 0 1 25.232 26v312a25.248 25.248 0 1 1-50.464 0v-312a25.6 25.6 0 0 1 25.232-26z" p-id="2232" fill="#707070"></path></svg>
								</div>
							</div>
							<div class="c-i-content">
								{{comment.comment}}
							</div>
							<div class="c-i-time">
								{{comment.commentTime.getFullYear()}}年{{comment.commentTime.getMonth() + 1}} 月{{comment.commentTime.getDate()}}日
							</div>
						</div>
						<div class="pages">
							<turn-page :nowPage="nowPage" :totalPage="totalPage"></turn-page>
						</div>
						
					</div>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import turnPage from '@/components/turnPage/turnPage.vue';
	import api from '@/api/index.js';
	import urls from '@/api/urls.js';
	import showToast from '@/tools/toast/index.js';
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default{
		data(){
			return {
				urls,
				nowPage: 1,
				pageSize: 5,
				totalPage: 1,
				commentList : [],
				isHonnin : false,
				userId : null,
				user : '',
			}
		},
		computed: {
			...mapState('urlPath', ['path']),
			...mapState('userStatus', ['userInfo'])
		},
		created(){
			if( this.userInfo && this.$route.params.userId == this.userInfo.userId){
				this.isHonnin = true;
				this.user = {...this.userInfo};
			}else{
				this.userId = this.$route.params.userId;
				( async _=>{
					const resp = await api.getUserInfoById({userId : this.userId});
					const data = await resp.json();
					console.log(data);
					if(data.status == 200){
						data.userInfo.birthday = new Date(data.userInfo.birthday) || '';
						this.user = data.userInfo;
					}
				})()
			}
			this.getUserComment();
		},
		methods:{
			...mapMutations('userStatus',['setUserInfo']),
			updatePic(){
				window.user_profie_pic.click();
			},
			async getUserComment(){
				let q = {
					nowPage :  this.nowPage,
					pageSize : this.pageSize,
				};
				if(!this.isHonnin){
					q.userId = this.userId;
				}
				const resp = await api.getUserComment(q);
				const result = await resp.json();
				if(result.status == 200){
					this.commentList = result.list;
					this.commentList.forEach(item => {
						item.commentTime = new Date(item.commentTime);
					});
					this.nowPage = result.nowPage;
					this.totalPage = result.totalPage;
				}
			},
			async change(){
				const file = window.user_profie_pic.files[0];
				const formData = new FormData();
				formData.append('userHead', file);
				const resp = await api.updateUseread(formData);
				const data = await resp.json();
				console.log(data);
				if(data.status == 200){
					data.userInfo.birthday = new Date(data.userInfo.birthday) || '';
					this.setUserInfo(data.userInfo)
				}else{
					showToast({type : 'fail', msg : '头像修改失败'});
				}
			},
			async deleteComment(commentId){
				const resp = await api.deleteCommentByCommentId({commentId});
				const data = await resp.json();
				console.log('fff', data);
				if(data.status == 200){
					this.getUserComment();
				}
			}
		},
		components:{
			turnPage
		},
		watch:{
			'$route'(to, from){
				if(to.name == 'UserProfie'){
					if( this.userInfo && this.$route.params.userId == this.userInfo.userId){
						this.isHonnin = true;
						this.user = {...this.userInfo};
					}else{
						this.userId = this.$route.params.userId;
						( async _=>{
							const resp = await api.getUserInfoById({userId : this.userId});
							const data = await resp.json();
							console.log(data);
							if(data.status == 200){
								data.userInfo.birthday = new Date(data.userInfo.birthday) || '';
								this.user = data.userInfo;
							}
						})()
					}
					this.getUserComment();
				}
				
			}
		}
			
	}
</script>

<style scoped="scoped" lang="less" >
	.userProfie{
		padding-top: 82px;
		.container{
			padding-top: 40px;
			width: 1080px;
			margin: 0 auto;
			display: flex;
			color: #484848;
			.left{
				width: 33%;
				border: 1px solid #e4e4e4 !important;
				box-sizing: border-box;
				padding: 24px;
				align-self: flex-start;
				.userInfo{
					display: flex;
					flex-direction: column;
					.header{
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						width: 100%;
						border-bottom: 1px solid rgba(155,155,155,.4);
						img{
							width: 120px;
							height: 120px;
							margin: 10px 0;
							border-radius: 50%;
						}
						.updateHeader{
							height: 30px;
							line-height: 30px;
							margin-top: 5px;
							margin-bottom: 25px;
							font-size: 18px;
							font-weight: 500;
							color: #008489 !important;
							cursor: pointer;
						}
					}
					.importInfo{
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						width: 100%;
						margin-top: 15px;
						padding-bottom: 20px;
						border-bottom: 1px solid rgba(155,155,155,.4);
						.title{
							color : #484848;
							font-weight: 600;
							height: 30px;
							line-height: 30px;
							width: 100%;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
						.info-item{
							margin: 5px 0;
							display: flex;
							width: 100%;
							.icon{
								height: 25px;
								display: flex;
								align-items: center;
								svg{
									margin-right: 8px;
									height: 18px;
									    width: 18px;
									    display: block;
									    fill: rgb(0, 132, 137);
								}
							}
							.info-content{
								margin-left: 10px;
								line-height: 25px;
							}
						}
					}
					.normalInfo{
						margin-top: 5px;
						width: 100%;
						.info-item{
							margin: 5px 0px 5px 26px;
							display: flex;
							width: 100%;
							flex-wrap: wrap;
							.icon{
								height: 25px;
								display: flex;
								align-items: center;
								svg{
									margin-right: 8px;
									height: 18px;
									    width: 18px;
									    display: block;
									    fill: rgb(0, 132, 137);
								}
							}
							.info-content{
								display: flex;
								align-items: center;
								margin-left: 10px;
								line-height: 25px;
								word-break: break-word;
							}
							.info-content-about{
								box-sizing: border-box;
								padding-right: 8px;
								font-size: 16px;
								text-indent: 3em;
								line-height: 22px;
								width: 100%;
							}
						}
					}
				}
			}
			.right{
				width: 66%;
				.right-container{
					width: calc(100% - 80px);
					margin-left: 80px;
					
					.r-title{
						height: 52px;
						font-size: 42px;
						line-height: 52px;
						font-weight: 400;
						text-overflow: ellipsis;
						overflow: hidden;
						white-space: nowrap;
					}
					.infoEdit-wrap{
						height: 25px;
						line-height: 25px;
						margin-top: 10px;
						color: #008489;
						cursor: pointer;
						display: inline-block;
					}
					.comment-wrap{
						margin-top: 20px;
						.comment-title{
							height: 25px;
							line-height: 25px;
							font-weight: 600;
							color: #008489;
							padding-bottom: 25px;
							border-bottom: 1px solid #e4e4e4;
							
						}
						.comment-item{
							display: flex;
							flex-direction: column;
							border: 1px solid #e4e4e4;
							width: 100%;
							margin: 20px 0;
							.c-i-title{
								background-color: #edefed;
								color: #484848;
								padding: 10px;
								height: 30px;
								display: flex;
								justify-content: space-between;
								.address{
									line-height: 30px;
									font-size: 16px;
									span{
										margin-left: 5px;
										font-weight: 600;
										cursor: pointer;
									}
								}
								.delete-icon{
									line-height: 30px;
									cursor: pointer;
									&:hover{
										path{
											transition: fill .3s ease;
											fill: #F56C6C;
										}
									}
								}
							}
							.c-i-content{
								box-sizing: border-box;
								padding: 20px;
								line-height: 25px;
							}
							.c-i-time{
								margin: 0px 20px 10px 0px;
								height: 30px;
								line-height: 30px;
								text-align: right;
							}
						}
						
						.pages{
							margin: 10px 0;
						}
					}
					
					
				}
			}
		}
	}
</style>
