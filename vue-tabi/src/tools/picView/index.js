import Vue from 'vue';
import picViewConstructor from './picView.vue';

const PicView = Vue.extend(picViewConstructor);

function showPicView(picSrc, address, word,user){
	const picView = new PicView({
		el : document.createElement('div'),
		data(){
			return {
				show : true,
				isScale : false,
				picSrc,
				address,
				word,
				user,
			}
		},
		methods : {
			close(){
				this.show = false;
			},
			scale(e){
				console.log(e.target.tagName);
				if(e.target.tagName == 'IMG'){
					if(this.isScale){
						e.target.style.transform = 'scale(1)';
						e.target.className = '';
						this.isScale = false;
					}else{
						const viewPortCenterX = window.innerWidth / 2;
						const viewPortCenterY = window.innerHeight / 2;
						let pasentoX = -(((e.clientX - viewPortCenterX) / viewPortCenterX)) * 50;
						let pasentoY = -(((e.clientY - viewPortCenterY) / viewPortCenterY)) * 50;
						e.target.style.transform = `scale(3) translate3d(${pasentoX}%, ${pasentoY}%, 0)`;
						e.target.className = 'zoom';
						this.isScale = true;
					}
				}
			},
			translate(e){
				if(this.isScale){
					const viewPortCenterX = window.innerWidth / 2;
					const viewPortCenterY = window.innerHeight / 2;
					let pasentoX = -(((e.clientX - viewPortCenterX) / viewPortCenterX)) * 50;
					let pasentoY = -(((e.clientY - viewPortCenterY) / viewPortCenterY)) * 50;
					const $pic = this.$refs.pic;
					$pic.style.transform = `scale(3) translate3d(${pasentoX}%, ${pasentoY}%, 0)`;
				}
			} 
	}
	});
	document.body.appendChild(picView.$el);
}

export default showPicView;
