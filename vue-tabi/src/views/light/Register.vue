<template>

	<div class="register">

		<div class="register-wrap">
			<div class="register-box">
				<div class="title-wrap">
					<h1 class="register-title">注册你的账户</h1>
					<h1 class="register-title">The unique experience</h1>
				</div>

				<div class="register-content">
					<div class="register-input">
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

				<div class="register-content">
					<div class="register-input" ref="username">
						<input type="text" name="userName" class="inpStyle" placeholder="Username / Nick name" ref="username" :class="{error : errorFlag.username}" spellcheck="false" 
						 v-model.lazy="userInfo.userName" @keydown="ce('username')">
						<div class="icon">
							<svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height: 1em; width: 1em; display: inline-block; fill: currentcolor;">
								<path d="m14.76 11.38a6.01 6.01 0 0 0 3.28-5.36 6.02 6.02 0 0 0 -12.04 0 6.01 6.01 0 0 0 3.27 5.35c-4.81 1.22-9.27 5.31-9.27 8.7 0 1.56 6.8 3.93 12 3.93 5.23 0 12-2.34 12-3.93 0-3.39-4.45-7.47-9.24-8.7zm-7.76-5.36a5.02 5.02 0 0 1 10.04 0c0 2.69-2.12 4.87-4.78 5-.09 0-.18-.01-.26-.01s-.16.01-.24.01c-2.65-.14-4.76-2.32-4.76-5zm15.9 14.09a3.8 3.8 0 0 1 -.64.44c-.62.36-1.5.75-2.52 1.1-2.41.83-5.18 1.35-7.74 1.35-2.55 0-5.32-.52-7.74-1.37-1.01-.35-1.9-.74-2.52-1.1-.47-.27-.74-.51-.74-.46 0-3.35 5.55-7.85 10.64-8.05.13.01.25.02.38.02.12 0 .24-.01.36-.02 5.09.22 10.62 4.71 10.62 8.05 0-.07-.02-.04-.1.04z"
								 fill-rule="evenodd"></path>
							</svg>
						</div>
					</div>
					<p class="errorMsg" v-if="errorFlag.username">
						{{errorMsg}}
					</p>
				</div>

				<div class="register-content">
					<div class="register-input" ref="phone">
						<input type="tel" name="phone" class="inpStyle" placeholder="Phone number" ref="phone" :class="{error : errorFlag.phone}" spellcheck="false" 
						 v-model.lazy="userInfo.phone" @keydown="ce('phone')">
						<div class="icon">
							<svg t="1583764134212" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7519"
							 width="24" style="display: inline-block; width: 20px;  margin-left: -2px;">
								<path d="M798.723234 174.782745c0-60.576657-49.106418-109.683075-109.683075-109.683075l-354.708628 0c-60.576657 0-109.683075 49.106418-109.683075 109.683075l0 673.980161c0 60.576657 49.106418 109.683075 109.683075 109.683075l354.708628 0c60.576657 0 109.683075-49.106418 109.683075-109.683075L798.723234 174.782745zM264.557398 237.015112l494.256894 0 0 529.049305-494.256894 0L264.557398 237.015112zM334.356091 105.008612 689.016623 105.008612c38.548968 0 69.798692 31.249725 69.798692 69.798692l0 22.298865-494.256894 0 0-22.298865C264.557398 136.25936 295.807123 105.008612 334.356091 105.008612zM689.016623 918.53704 334.356091 918.53704c-38.548968 0-69.798692-31.249725-69.798692-69.798692l0-43.788296 494.256894 0 0 43.788296C758.814292 887.287315 727.564567 918.53704 689.016623 918.53704z"
								 p-id="7520" fill="#8a8a8a"></path>
								<path d="M513.173732 829.943282c-16.70752 0-30.30112 13.5936-30.30112 30.30112 0 16.70752 13.5936 30.30112 30.30112 30.30112s30.299073-13.5936 30.299073-30.30112C543.472805 843.536882 529.881253 829.943282 513.173732 829.943282z"
								 p-id="7521" fill="#8a8a8a"></path>
							</svg>
						</div>
					</div>
					<p class="errorMsg" v-if="errorFlag.phone">
						{{errorMsg}}
					</p>
				</div>

				<div class="register-content">
					<div class="register-input" ref="password">
						<input :type="passType" name="password" class="inpStyle" placeholder="Create a password" ref="password" :class="{error : errorFlag.password}" spellcheck="false" 
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


				<div class="registButton" @click="regist">
					Sign Up
				</div>

			</div>
		</div>

	</div>

</template>

<script>
	import comfirm from '@/tools/comfirm/index.js';
	import api from '@/api/index.js';
	export default {
		data() {
			return {
				userInfo: {
					email: '',
					userName: '',
					password: '',
					phone: ''
				},
				errorFlag: {
					email: false,
					phone: false,
					password: false,
					username: false
				},
				errorMsg: '',
				passToggle: false,
				passType : 'password'
			}
		},
		methods: {
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
			regist() {
				(async _ => {
					const resp = await api.registeUser(this.userInfo);
					const result = await resp.json();
					console.log(result)
					if (result.status == 400) {
						this.errorFlag[result.errorQuery] = true;
						this.errorMsg = result.errorMsg;
					}
					if(result.status == 200){
						const result = await comfirm({ msg : '注册成功,马上去登录吗?' });
						console.log(result);
						if(result){
							this.$router.replace('/home');
						}else{
							this.resetForm();
						}
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

	.register {
		height: 100%;
		width: 100%;
		background-image: url(../../assets/register.jpg);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;

		.register-wrap {
			height: 480px;
			width: 100%;
			max-width: 1780px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translateX(-50%);
			margin-top: -240px;
			box-sizing: border-box;
			padding: 0px 80px;

			.register-box {
				width: 440px;
				height: 100%;
				background-color: #fff;
				border-radius: 5px;
				box-sizing: border-box;
				padding: 32px;
				box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, .3);
				position: relative;

				.title-wrap {
					margin-bottom: 10px;
				}

				.register-title {
					font-size: 28px;
					line-height: 42px;
					color: #484848;
					font-weight: 600;
				}

				.register-content {

					margin-bottom: 12px;

					.register-input {
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

				.registButton {
					color: #fff;
					background-color: rgb(255, 90, 95);
					line-height: 48px;
					height: 48px;
					text-align: center;
					border-radius: 5px;
					cursor: pointer;
					margin-top: 55px;
				}
			}

		}

	}
</style>
