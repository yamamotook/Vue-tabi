<template>
	
	<div class="picView" v-if="show"  @mousemove="translate" >
		<div class="close" @click="close"></div>
		<div class="picView-container" ref="picContainer" >
			<div class="head">
				<div class="photo-user">
					<div class="u" v-if="user">
						<div class="user-img">
						</div>
						<div class="user-name">
						</div>
					</div>
					<div　class="no-user" v-else>
						観光地：{{address.paysageName}}
					</div>
				</div>
				<div class="photo-info">
					拍摄于 {{address.cityName}}, {{address.areaName}}
				</div>
				
			</div>
			<div class="picView-content" >
				<img :src="picSrc" @click="scale" ref="pic" >
			</div>
			<div class="word-content">
				{{word}}
			</div>
		</div>
		
	</div>
	
</template>


<style lang="less" scoped="scoped">
	.picView{
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 999;
		background-color: rgba(0,0,0,.6);
		.close{
			height: 30px;
			width: 30px;
			position: absolute;
			left: 40px;
			top: 40px;
			cursor: pointer;
			
			&::after,
			&::before
			{
				content: '';
				position: absolute;
				width: 100%;
				height: 2px;
				top: 50%;
				left: 50%;
				background-color: rgb(155,155,155);
				border-radius: 5px;
			}
			&:hover::after,
			&:hover::before
			{
				background-color: #fff;
			}
			&::after{
				transform: translate(-50%, -50%) rotateZ(45deg);
			}
			&::before{
				transform: translate(-50%, -50%) rotateZ(-45deg);
			}
		}
		.picView-container{
			position: absolute;
			width: 1000px;
			height: 630px;
			background-color: #fff;
			border-radius: 5px;
			left: 50%;
			top: 50%;
			margin-top: -315px;
			margin-left: -500px;
			box-sizing: border-box;
			padding: 0px 10px;
			
			.head{
				box-sizing: border-box;
				padding: 0px 20px;
				height: 60px;
				line-height: 60px;
				display: flex;
				justify-content: space-between;
				position: relative;
				.photo-user{
					font-size: 18px;
					.u{
						display: flex;
						align-items: center;
					}
					.no-user{
						font-weight: 500;
					}
					
					.user-img{
						width: 45px;
						height: 45px;
						margin-right: 15px;
						img{
							width: 100%;
							border-radius: 50%;
						}
						
					}
				}
				.photo-info{
					font-style: italic;
				}
				
				
			}
			.picView-content{
				margin-top: 10px;
				width: 100%;
				height: 500px;
				display: flex;
				justify-content: center;
				align-items: center;
				overflow: hidden;
				border-radius: 3px;
				img{
					cursor: zoom-in;
					height: 100%;
					transition: transform .1s linear;
					
					&.zoom{
						cursor: zoom-out;
					}
				}
				
				
			}
			.word-content{
				text-align: center;
				margin-top: 10px;
				box-sizing: border-box;
				padding: 0px 20px;
				line-height: 30px;
				font-size: 18px;
				height: 40px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}
</style>
