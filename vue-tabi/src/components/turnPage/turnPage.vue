<template>
	<ul id="turn-page" :class="{'color' : color}"  >
		<li class="prev-page" @click="turnPage(-1)" v-if="nowPage != 1 && nowPage != 0">
			<svg style="height:16px;width:16px;stroke:currentColor;stroke-width:4;"  role="presentation"
			 viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
				<g fill="none">
					<path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path>
				</g>
			</svg>
		</li>
		<template v-if="totalPage <= 7">
			<li class="tab-number" :class="{ 'cur-page' : nowPage == page}" v-for="page in totalPage" :key="page" @click="turnPage(page)">
				{{page}}
			</li>
		</template>
		<template v-else-if=" nowPage < 5">
			<li class="tab-number" :class="{ 'cur-page' : nowPage == page}" v-for="page in 6" :key="page" @click="turnPage(page)">
				{{page}}
			</li>
		</template>
		<template v-else>
			<li class="tab-number" @click="turnPage(1)">
				{{1}}
			</li>
				<span>...</span>
		</template>
		<template v-if=" nowPage >= 5 && totalPage - nowPage >= 4">
			<li v-for="page in 5" :key="page" class="tab-number" @click="turnPage(nowPage - 3 + page)" :class="{ 'cur-page' : nowPage == nowPage - 3 + page}">
				{{ nowPage - 3 + page }}
			</li>
		</template>
		<template v-if="totalPage - nowPage >= 4">
				<span>...</span>
			<li class="tab-number" @click="turnPage(totalPage)">
				{{totalPage}}
			</li>
		</template>
		<template v-else-if="totalPage > 7">
			<li class="tab-number" v-for="page in 6" @click="turnPage(totalPage - 6 + page)" :class="{ 'cur-page' : nowPage == totalPage - 6 + page}">
				{{totalPage - 6 + page}}
			</li>
		</template>

		<li class="next-page" @click="turnPage(0)" v-if=" nowPage != totalPage  ">
			<svg style="height:16px;width:16px;stroke:currentColor;stroke-width:4;"
			  role="presentation" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
				<g fill="none">
					<path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path>
				</g>
			</svg>
		</li>
	</ul>
</template>

<script>
	export default {
		props: ['nowPage','totalPage', 'color'],
		methods: {
			turnPage(page) {
				let p = page;
				if (page == -1 && page != 1) {
					p = this.nowPage - 1;
				} else if (page == 0 && page != this.totalPage) {
					p = this.nowPage + 1;
				} else {
					p = page;
				}
				this.$emit('updatePage', p);
			}
		}
	}
</script>

<style scoped="scoped">
	#turn-page {
		margin: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#turn-page .prev-page,
	#turn-page .next-page {
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0px 0px 5px 0px rgba(0,0,0,.3);
	}

	#turn-page li {
		height: 32px;
		width: 32px;
		line-height: 32px;
		cursor: pointer;
		margin: 0 5px;
		background-color: #FFFFFF;
		border-radius: 50%;
		text-align: center;
	}
	#turn-page.color li{
		color: rgb(0, 132, 137);
	}
	
	#turn-page li{
	}
	
	#turn-page li:hover{
		text-decoration: underline;
	}

	#turn-page li.cur-page {
		background-color: #000;
		color: #fff;
	}
	#turn-page.color li.cur-page{
		background-color: rgb(0, 132, 137);
		color: #fff;
	}
</style>
