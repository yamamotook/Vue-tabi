<template>
	
	<div class="signIn">
		
		<div class="signIn-wrap">
			<div class="signIn-box">
				<div class="title-wrap">
					<h1 class="signIn-title">登录到你的账户</h1>
					<h1 class="signIn-title">Share your experience</h1>
				</div>
		
				<div class="signIn-content">
					<div class="signIn-input">
						<input type="email" name="userEmail" class="inpStyle" placeholder="Email Address" ref="email" :class="{error : errorFlag.email}" spellcheck="false" 
						 v-model.lazy="userInfo.email" @keydown="ce('email')">
						<div class="icon">
							<svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height: 1em; width: 1em; display: inline-block; fill: currentcolor;">
								<path d="m22.5 4h-21c-.83 0-1.5.67-1.5 1.51v12.99c0 .83.67 1.5 1.5 1.5h20.99a1.5 1.5 0 0 0 1.51-1.51v-12.98c0-.84-.67-1.51-1.5-1.51zm.5 14.2-6.14-7.91 6.14-4.66v12.58zm-.83-13.2-9.69 7.36c-.26.2-.72.2-.98 0l-9.67-7.36h20.35zm-21.17.63 6.14 4.67-6.14 7.88zm.63 13.37 6.3-8.1 2.97 2.26c.62.47 1.57.47 2.19 0l2.97-2.26 6.29 8.1z"
								 fill-rule="evenodd"></path>
							</svg>
						</div>
					</div>
					<p class="errorMsg" v-if="errorFlag.email">
						{{errorMsg}}
					</p>
				</div>
		
				
				<div class="signIn-content">
					<div class="signIn-input" ref="password">
						<input :type="passType" name="password" class="inpStyle" placeholder="Password" ref="password" :class="{error : errorFlag.password}" spellcheck="false" 
						 v-model.lazy="userInfo.password" @keydown="ce('password')">
						<div class="icon passIcon" @click="passStyleToggle()">
							<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Show password"
							 focusable="false" style="height: 1em; width: 1em; display: inline-block; fill: currentcolor;" v-if="passToggle == false">
								<path d="m21.53 18.07c.15.22.46.28.69.13a.47.47 0 0 0 .14-.66l-1.32-1.9c1.86-1.33 2.97-3.11 2.97-5.17a.49.49 0 0 0 -.5-.48.49.49 0 0 0 -.5.48c0 3.82-4.73 6.7-11 6.7s-11-2.87-11-6.7a.49.49 0 0 0 -.5-.48.49.49 0 0 0 -.5.48c0 2.05 1.11 3.84 2.97 5.17l-1.32 1.9a.47.47 0 0 0 .14.66c.23.15.54.09.69-.13l1.32-1.9c.94.55 2.03.99 3.23 1.32a.29.29 0 0 0 -.01.04l-.58 2.23a.48.48 0 0 0 .36.58.5.5 0 0 0 .61-.35l.58-2.23.01-.04c1.1.23 2.28.37 3.51.4v2.4a.49.49 0 0 0 .5.48.49.49 0 0 0 .5-.48v-2.4a19.39 19.39 0 0 0 3.51-.4l.01.04.58 2.23a.5.5 0 0 0 .61.35.48.48 0 0 0 .36-.58l-.58-2.23-.01-.04c1.2-.33 2.29-.77 3.23-1.32z"
								 fill-rule="evenodd"></path>
							</svg>
							<svg t="1583917726243"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
							 p-id="1479" width="32" style="height: 24px; margin-left: -8px;   display: inline-block; fill: currentcolor;" v-if="passToggle == true" >
								<path d="M512 801.03c-104.03 0-214.16-48.72-318.47-140.91-78.12-69.04-125.05-137.1-127-139.96a14.42 14.42 0 0 1 0-16.31c1.95-2.86 48.88-70.92 127-139.96 104.3-92.2 214.44-140.92 318.47-140.92s214.16 48.72 318.47 140.91c78.13 69.04 125.04 137.1 127 139.96a14.42 14.42 0 0 1 0 16.31c-1.96 2.86-48.87 70.92-127 139.96C726.16 752.31 616.02 801.03 512 801.03zM96.28 512C129.65 556.98 300.43 772.13 512 772.13S894.34 556.98 927.72 512C894.34 467.02 723.56 251.87 512 251.87S129.65 467.02 96.28 512zM512 656.52c-79.68 0-144.52-64.83-144.52-144.52S432.32 367.48 512 367.48 656.51 432.31 656.51 512 591.68 656.52 512 656.52z m0-260.13c-63.75 0-115.61 51.86-115.61 115.61S448.25 627.61 512 627.61 627.61 575.75 627.61 512 575.75 396.39 512 396.39z"
								 p-id="1480" fill="#515151"></path>
							</svg>
		
						</div>
					</div>
					<p class="errorMsg" v-if="errorFlag.password">
						{{errorMsg}}
					</p>
				</div>
		
		
				<div class="signInButton" @click="signIn">
					Sign In
				</div>
		
			</div>
		</div>
		
		
	</div>
	
	
</template>

<script>
	import api from '@/api/index.js';
	export default {
		data() {
			return {
				userInfo: {
					email: '',
					password: '',
				},
				errorFlag: {
					email: false,
					password: false,
				},
				errorMsg: '',
				passToggle: false,
				passType : 'password'
			}
		},
		methods:{
			ce(ref) {
				this.errorFlag[ref] = false;
			},
			passStyleToggle() {
				this.passToggle = !this.passToggle;
				this.passType == 'text' ? this.passType = 'password' : this.passType = 'text';
			},
			resetForm(){
				for(const prop in this.userInfo){
					this.userInfo[prop] = '';
				}
			},
			signIn(){
				(async _=>{
					const resp = await api.signIn(this.userInfo);
					const result = await resp.json();
					console.log(result);
					if (result.status == 400) {
						this.errorFlag[result.errorQuery] = true;
						this.errorMsg = result.errorMsg;
						console.log(this.errorFlag);
					}
					if(result.status == 200){
						// document.cookie = `sessionId=${result.sessionId}`; 
						console.log('ffffuck',this.$route.query);
						this.$router.replace({
							name : this.$route.query.from ? this.$route.query.from : '/home',
							query: this.$route.query.query ? this.$route.query.query : {},
							params:  this.$route.query.params ? this.$route.query.params : {}
						});
					}
					
				})()
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	
	.inpStyle {
		height: 45px;
		box-sizing: border-box;
		padding: 11px;
		flex-grow: 1;
		border: none;
		outline: none;
		background-color: transparent;
		font-size: 16px;
	}
	
	.signIn {
		height: 100%;
		width: 100%;
		background-image: url(../../assets/signIn.jpg);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		
		
		
		.signIn-wrap {
			height: 350px;
			width: 100%;
			max-width: 1780px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translateX(-50%);
			margin-top: -175px;
			box-sizing: border-box;
			padding: 0px 80px;
		
			.signIn-box {
				width: 440px;
				height: 100%;
				background-color: #fff;
				border-radius: 5px;
				box-sizing: border-box;
				padding: 32px;
				box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, .3);
				position: relative;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
		
				.title-wrap {
					margin-bottom: 10px;
				}
		
				.signIn-title {
					font-size: 28px;
					line-height: 42px;
					color: #484848;
					font-weight: 600;
				}
		
				.signIn-content {
		
					margin-bottom: 12px;
		
					.signIn-input {
						height: 45px;
						position: relative;
		
						input {
							height: 45px;
							width: 100%;
							border: 1px solid #ebebeb;
							border-radius: 3px;
							background-color: #ffff;
		
							&:focus {
								border-color: #05a081;
							}
		
							&.error {
								border-color: rgb(252, 100, 45) !important;
								background-color: #fff8f6 !important;
							}
						}
		
		
		
						.icon {
							position: absolute;
							right: 0;
							top: 0;
							width: 30px;
							height: 45px;
							display: flex;
							align-items: center;
						}
		
						.passIcon {
							cursor: pointer;
						}
					}
		
					.errorMsg {
						margin-top: 10px;
						line-height: 14px;
						font-size: 14px;
						color: rgb(217, 57, 0);
					}
				}
		
				.signInButton {
					color: #fff;
					background-color: rgb(255, 90, 95);
					line-height: 48px;
					height: 48px;
					text-align: center;
					border-radius: 5px;
					cursor: pointer;
				}
			}
		
		}
	}
</style>
