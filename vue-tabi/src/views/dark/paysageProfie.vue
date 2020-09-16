<template>
	<div class="container">
		<div class="top-container">
			<div class="top-content">
				<div class="pics-show" @click="preview">
					<div class="pic-item pic-ore pic1"  >
						<img :src="urls.baseUrl + urls.getPicByPath + '?path=' + profieData.verticalPic1" >
					</div>
					<div class="pic-item pic-ore pic2">
						<img :src="urls.baseUrl + urls.getPicByPath + '?path=' + profieData.verticalPic2" >
					</div>
					<div class="pic-item pic-hori pic3">
						<img :src="urls.baseUrl + urls.getPicByPath + '?path=' + profieData.horizonPic1" >
					</div>
					<div class="pic-item pic-hori pic4">
						<img :src="urls.baseUrl + urls.getPicByPath + '?path=' + profieData.horizonPic2" >
					</div>
				</div>
				<div class="paysage-profie">
					<div class="profie-left">
						<h3 class="paysage-city">観光地</h3>
						<h2 class="paysage-c">{{profieData.paysageName}}</h2>
						<h2 class="paysage-country">{{profieData.cityName}}, {{profieData.areaName}}</h2>
						
					</div>
					<div class="profie-right">
						<div class="profie-content">
							{{profieData.paysageProfie}}
						</div>
						<div class="profie-address">
							{{profieData.address}}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="content">
			<div class="nav-container">
				<nabi :color="'dark'"></nabi>
			</div>
			<div class="paysage-content">
				<div class="c-wrap">
					<div class="c-left">
						<div class="c-title">
							关于景点
						</div>
					</div>
					<div class="c-right">
						{{profieData.about}}
					</div>
				</div>
				
				<div class="c-wrap">
					<div class="c-left">
						<div class="c-title">
							景点信息
						</div>
					</div>
					<div class="c-right"  v-html="profieData.info">
						
					</div>
				</div>
				<div class="c-wrap">
					<div class="c-left">
						<div class="c-title" id="paysageImg">
							景点照片
						</div>
					</div>
					<div class="c-right">
						<div class="r-pic" @click="preview" v-if="imgList.length">
							<div class="r-pic-item" v-for="picItem in imgList" :key="picItem.picId" >
								<img :src="urls.baseUrl + urls.getPicByPath + '?path=' + picItem.srcPath" :date-id="picItem.picId">
							</div>
						</div>
						<div class="no" v-else>
							该景点暂无照片
						</div>
						<div class="pic-turnPage" v-if="imgList.length">
							<turn-page :nowPage="nowPageImg" :totalPage="totalPageImg" :color="'color'" @updatePage="update" ></turn-page>
						</div>
					</div>
				</div>
				
				<div class="c-wrap">
					<div class="c-left">
						<div class="c-title">
							游客评价
						</div>
					</div>
					<div class="c-right">
						<div class="comment">
							<div class="comment-item" v-for="comment in commentList" :key="comment.commentId" v-if="commentList.length">
								<div class="comment-title">
									<router-link class="comment-headImg" tag="div"  :to="{ name : 'UserProfie', params : { userId : comment.userId }}">
										<img :src="urls.baseUrl + urls.getPicByPath + '?path=' + comment.userHeadPic" >
									</router-link>
									<div class="comment-user">
										<div class="user-name">
											{{comment.userNickName}}
										</div>
										<span class="spread">·</span>
										<div class="time">
											{{comment.commentTime.getFullYear()}} 年
											{{comment.commentTime.getMonth() + 1}} 月
											{{comment.commentTime.getDate()}}日
										</div>
									</div>
								</div>
								<div class="comment-content">
									{{comment.comment}}
								</div>
							</div>
							<div class="no" v-if="!commentList.length">
								该景点暂时还没有评论
							</div>
							
						</div>
					
						<div class="pic-turnPage" v-if="commentList.length">
							<turn-page :nowPage="nowPageComment" :totalPage="totalPageComment" :color="'color'" @updatePage="updateComment" ></turn-page>
						</div>
						
						
					</div>
				</div>
			
				<div class="c-wrap">
					<div class="c-left">
						<div class="c-title">
							写评论
						</div>
					</div>
					<div class="c-right" >
						<div class="write-comment" v-if="userInfo">
							<div class="write-c-c">
								<textarea cols="40"  v-model="comment">
									{{comment}}
								</textarea>
								<button class="btn" @click="submitComment">
									发表评论
								</button>
							</div>
							<div class="write-c-t">
								分享此地的体验
							</div>
						</div>
						<div class="write-no-u" v-else>
							请先登录后再发表评论. 
							<router-link tag="span"   class="highLight" :to="{ name : 'SignIn', query : { from : $route.name, query : { ...$route.query }, params : { ...$route.params} }}">去登陆</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import nabi from '@/components/nav/Nabi.vue';
	import showPicView from '@/tools/picView/index.js';
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
			return{
				profieData : {},
				urls,
				imgList : [],
				nowPageImg : 1,
				totalPageImg : 1,
				paysageId : null,
				nowPageComment : 1,
				totalPageComment : 1,
				commentList : [],
				comment : '',
			}
		},
		computed:{
			...mapState('userStatus', ['userInfo'])
		},
		async created(){
			this.paysageId =  this.$route.query.paysageId;
			const paysageId = this.paysageId;
			const profieRes = await api.getPaySageProfieByPaysageId({
				paysageId
			});
			const profieData = await profieRes.json();
			if(profieData.status == 200){
				this.profieData = profieData.data;
			}
			const imgListResp = await api.getPaysageImgPageByPaysageId({
				nowPage : this.nowPageImg,
				paysageId
			});
			const imgData = await imgListResp.json();
			if(imgData.status == 200){
				this.imgList = imgData.list;
				this.nowPageImg = parseInt(imgData.nowPage);
				this.totalPageImg = imgData.totalPage;
			}
			this.updateComment(1);
		},
		methods:{
			showPicView : showPicView,
			async submitComment(){
				const resp = await api.submitComment({
					paysageId : this.paysageId,
					userId : this.userInfo.userId,
					comment : this.comment
				});
				const data = await resp.json();
				console.log(data);
				if(data.status == 200){
					showToast({type : 'success', msg :'评论成功'});
					this.comment = '';
					this.updateComment(this.nowPageComment);
				}else{
					showToast({type : 'fail', msg :'评论失败'});
				}
			},
			preview(e){
				if(e.target.tagName == 'IMG'){
					const imgSrc = e.target.getAttribute('src');
					const imgId = e.target.getAttribute('date-id');
					let item = '';
					if(imgId){
						item = this.imgList.find( ele => imgId == ele.picId);
					}
					showPicView(imgSrc, this.profieData, item ? item.picProfie : '', 0);
				}
			},
			async update(page) {
				this.nowPageImg = page;
				const imgListResp = await api.getPaysageImgPageByPaysageId({
					nowPage : this.nowPageImg,
					paysageId : this.paysageId
				});
				const imgData = await imgListResp.json();
				if(imgData.status == 200){
					this.imgList = imgData.list;
					this.nowPageImg = parseInt(imgData.nowPage);
					this.totalPageImg = imgData.totalPage;
				}
			},
			async updateComment(page){
				this.nowPageComment = page;
				const paysageId = this.paysageId;
				const commentRes = await api.getCommentPageByPaysageId({
					paysageId,
					nowPage : this.nowPageComment,
					pageSize : 5
				});
				const commentData = await commentRes.json();
				if(commentData.status == 200){
					this.commentList = commentData.list;
					this.commentList.forEach(item => {
						item.commentTime = new Date(item.commentTime);
					});
					this.nowPageComment = parseInt(commentData.nowPage);
					this.totalPageComment = parseInt(commentData.totalPage);
				}
			}
			
		},
		components:{
			nabi,
			turnPage
		}
	}
</script>

<style scoped="scoped" lang="less">
	.container{
		width: 100%;
		height: 100%;
		.top-container{
			width: 100%;
			height: 100%;
			background-color: #000;
			color: #fff;
			.top-content{
				width: 1300px;
				margin: 0 auto;
				box-sizing: border-box;
				padding: 50px 20px 20px 20px;
				.pics-show{
					margin: 0px auto;
					width: 1200px;
					height: 480px;
					display: grid;
					grid-template-columns: 336px 336px 350px;
					grid-template-rows: 1fr 1fr;
					grid-gap: 0px 10px;
					grid-template-areas: 
										" fp sp tp"
										" fp sp yp"; 
					justify-content: center;
					
					.pic1{
						grid-area: fp;
					}
					.pic2{
						grid-area: sp;
					}
					.pic3{
						grid-area: tp;
					}
					.pic4{
						grid-area: yp;
					}
					.pic-item{
						margin: 5px 5px;
						box-shadow: 1px 1px 5px rgba(255,255,255,.3);
						border-radius: 5px;
						overflow: hidden;
						img{
							width: 100%;
							height: 100%;
							object-fit: cover;
							cursor: pointer;
						}
					}
				}
				.paysage-profie{
					margin: 20px auto 0px auto;
					height: 150px;
					width: 1000px;
					display: flex;
					.profie-left{
						width: 330px;
						flex-basis: 330px;
						box-sizing: border-box;
						padding: 20px;
						.paysage-city{
							font-size: 14px;
							margin-bottom: 6px;
						}
						.paysage-c{
							font-size: 32px;
							margin-bottom: 15px;
						}
						.paysage-country{
							font-size: 18px;
							
						}
					}
					.profie-right{
						width: 100%;
						box-sizing: border-box;
						padding: 0 30px;
						.profie-content{
							line-height: 22px;
							padding : 15px 0;
							max-height: 100px;
							overflow: hidden;
							border: 1px solid rgba(255,255,255, .2);
							border-left-color: transparent !important;
							border-right-color: transparent !important;
							word-break: break-word;
						}
						.profie-address{
							margin-top: 10px;
							height: 30px;
							line-height: 30px;
							&::before{
								content: 'Location:';
							}
						}
					}
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
			.paysage-content{
				width: 1300px;
				margin: 0 auto;
				.c-wrap{
					width: 1100px;
					margin: 64px auto 0 auto;
					display: flex;
					flex-direction: row;
					color: #484848;
					.c-left{
						width: 450px;
						box-sizing: border-box;
						padding: 20px 20px 20px 0px;
						position: relative;
						.c-title{
							font-size: 32px;
							font-weight: 600;
							position: sticky;
							top: 85px;
						}
					}
					.c-right{
						width: 100%;
						box-sizing: border-box;
						padding: 20px 20px 20px 0px;
						font-size: 18px;
						line-height: 32px;
						word-wrap: break-word;
						.r-pic{
							display: flex;
							flex-wrap: wrap;
							
							.r-pic-item{
								width: 240px;
								height: 240px;
								margin: 5px 5px;
								img{
									height: 100%;
									width: 100%;
									object-fit: cover;
									cursor: pointer;
								}
							}
						}
						.write-comment{
							
							.write-c-c{
								display: flex;
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
								.btn{
									margin-left: 30px;
									align-self: flex-end;
									width: 120px;
									height: 40px;
									line-height: 40px;
									background-image: linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%) !important;
									color: #fff;
									border: none;
									border-radius: 5px;
									font-size: 16px;
									cursor: pointer;
									padding: 0px 15px;
								}
							}
							.write-c-t{
								font-size: 16px;
								font-weight: 600;
							}
						}
						.write-no-u{
							
							.highLight{
								cursor: pointer;
								padding: 0px 10px;
								font-weight: 600;
								color: rgb(0, 132, 137);
								&:hover{
									text-decoration: underline;
								}
							}
						}
						
						.pic-turnPage{
							height: 50px;
							display: flex;
							justify-content: center;
							align-self: center;
						}
						.comment{
							.comment-item{
								position: relative;
								margin-bottom: 25px;
								.comment-title{
									height: 50px;
									display: flex;
									.comment-headImg{
										width: 50px;
										height: 50px;
										padding: 0px 20px 0px 0px;
										cursor: pointer;
										
										img{
											width: 100%;
											height: 100%;
											border-radius: 50%;
										}
									}
									.comment-user{
										display: flex;
										align-items: center;
										.user-name,
										.time{
											height: 50px;
											line-height: 50px;
										}
										.spread{
											margin: 0px 5px;
										}
										.user-name{
											font-weight: 600;
										}
										.time{
											font-size: 14px;
											
										}
										
									}
								
								}
								.comment-content{
									padding: 15px 0;
								}
								&::after{
									content: '';
									position: absolute;
									bottom: 0;
									left: 0;
									height: 1px;
									width: 100%;
									background-color: rgba(222,222,222,.3);
								}
							}
						}
					}
				}
			}
		}
	}
</style>
