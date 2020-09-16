<template>

	<div class="comfirm" :class="{ bgIn : isAnimate, bgOut : !isAnimate }" v-if="isNotify">
		<div class="wraper" :class="{ boxIn : isAnimate, boxOut : !isAnimate }" >
			<div class="box-header">
				<div class="title">确认</div>
				<div class="close" @click="cancel">
					<svg t="1583919674789" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2872"
					 width="22" height="22">
						<path d="M544.244622 512.068267l280.712533 280.689778c8.897422 8.874667 8.897422 23.278933 0 32.176356s-23.278933 8.897422-32.176356 0L512.068267 544.267378 232.516267 823.819378c-8.874667 8.874667-23.233422 8.874667-32.085333 0-8.851911-8.851911-8.851911-23.210667 0-32.062578l279.574756-279.574756L199.042844 231.2192c-8.897422-8.897422-8.897422-23.301689 0-32.176356 8.874667-8.897422 23.278933-8.897422 32.176356 0l280.962844 280.962844L792.189156 199.998578c8.851911-8.851911 23.210667-8.851911 32.039822 0 8.874667 8.851911 8.874667 23.233422 0 32.085333L544.244622 512.068267z"
						 p-id="2873" fill="#515151"></path>
					</svg>
				</div>
			</div>
			<div class="box-content" >
				{{msg}}
			</div>
			<div class="box-command">
				<div class="btn-cancel btn" @click="cancel">
					取消
				</div>
				<div class="btn-ok btn" @click="comfirm">
					确定
				</div>
			</div>
		</div>
	</div>

</template>


<style scoped="scoped" lang="less">
	.comfirm {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 9999;
		.wraper {
			width: 420px;
			padding-bottom: 10px;
			vertical-align: middle;
			background-color: #fff;
			border-radius: 4px;
			border: 1px solid #ebeef5;
			font-size: 18px;
			box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
			text-align: left;
			overflow: hidden;
			backface-visibility: hidden;
			position: absolute;
			top: 0px;
			left: 50%;
			transform: translateX(-50%);
			.box-header {
				position: relative;
				padding: 15px 15px 10px;

				.title {
					font-size: 18px;
					line-height: 1;
					color: #303133;
				}

				.close {
					position: absolute;
					top: 15px;
					right: 15px;
					cursor: pointer;
				}
			}
			.box-content{
				padding: 10px 15px;
				color: #606266;
				font-size: 14px;
			}
			.box-command{
				padding: 5px 15px 0;
				text-align: right;
				.btn{
					padding: 9px 15px;
					font-size: 12px;
					border-radius: 3px;
					display: inline-block;
					line-height: 1;
					white-space: nowrap;
					cursor: pointer;
					background: #fff;
					border: 1px solid #dcdfe6;
					color: #606266;
					text-align: center;
					box-sizing: border-box;
				}
				.btn.btn-ok{
					color: #fff;
					background-color: #409eff;
					border-color: #409eff;
					margin-left: 10px;
				}
				
			}
		}
	}

	.bgIn {
		animation: anime_bgIn .3s ease forwards;
	}

	.bgOut {
		animation: anime_bgOut .3s ease forwards;
	}
	
	.boxIn{
		animation: anime_boxIn .3s ease forwards; 
	}
	.boxOut{
		animation: anime_boxOut .3s ease forwards;
	}


	@keyframes anime_bgIn {
		from {
			transform: translateY(-20px);
			background-color: rgba(0, 0, 0, 0);
		}

		to {
			transform: translateY(0px);
			background-color: rgba(0, 0, 0, .6);
		}
	}

	@keyframes anime_bgOut {
		to {
			transform: translateY(-20px);
			background-color: rgba(0, 0, 0, 0);
		}

		from {
			transform: translateY(0px);
			background-color: rgba(0, 0, 0, .6);
		}
	}
	
	
	@keyframes anime_boxIn {
		from {
			opacity:0;
		} 
	
		to {
			opacity:1;
		}
	}
	
	@keyframes anime_boxOut {
		to {
			opacity:0;
		}
	
		from {
			opacity:1;
		}
	}
</style>
