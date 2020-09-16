import Vue from 'vue';
import confirmConstructor from './comfirm.vue';


const Confirm = Vue.extend(confirmConstructor);

function showConfirm( config = {msg : '你确定吗?'} ){
	
	return new Promise((resolve, reject) => {
		console.log('config:',config);
		const comf = new Confirm({
			el : document.createElement('div'),
			data(){
				return {
					isNotify : true,
					isAnimate : true,
					msg :config.msg
				}
			},
			methods: {
				cancel(){
					this.isAnimate = false;
					setTimeout(_=>{
						this.isNotify = false;
						resolve(0);
					},300);
				},
				comfirm(){
					this.isAnimate = false;
					setTimeout(_=>{
						this.isNotify = false;
						resolve(1);
					},300);
					
				}
			}
		});
		document.body.appendChild(comf.$el);
	})
	
}


export default showConfirm;