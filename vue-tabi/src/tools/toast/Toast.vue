<template>
	
	<div class="toast" :class="{ fadeIn : isNotify, fadeOut : !isNotify }" v-if="onPage " >
		<div class="inner" :class="{ success : type == 'success', fail : type == 'fail', warn : type == 'warn'}" >
				<div class="content">{{msg}}</div>
		</div>
	</div>
	
</template>

<style scoped="scoped">
	
	.toast{
		z-index: 9999;
		position: fixed;
		min-width: 350px;
		height: 40px;
		left: 50%;
		transform: translate(-50%,-50%);
		border-radius: 5px;
		box-shadow: 0px 0px 5px 0px rgba(255,255,255,.3);
	}
	.success{
		background-color: #67c23a;
	}
	.fail{
		background-color: #f56c6c;
	}
	.warn{
		background-color: #e6a23c;
	}
	.inner{
		box-sizing: content-box;
		width: 100%;
		height: 100%;
		line-height: 40px;
		text-align: center;
		font-size: 14px;
	}
	.content{
		color: #fff;
	}
	.fadeIn{
		animation: anima_fadeIn .3s ease forwards;
	}
	.fadeOut{
		animation: anima_fadeOut .3s ease forwards;
	}
	@keyframes anima_fadeIn{
		from{
			top: 0;
			opacity: 0;
		}
		to{
			top: 40px;
			opacity: 1;
		}
	}
	
	@keyframes anima_fadeOut{
		100%{
			top: 0;
			opacity: 0;
		}
		0%{
			top: 40px;
			opacity: 1;
		}
	}
	
</style>
