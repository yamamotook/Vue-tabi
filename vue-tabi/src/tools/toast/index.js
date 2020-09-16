import Vue from 'vue';
import toastConstrutor from './Toast.vue';


const Toast = Vue.extend(toastConstrutor);

function showToast( config = {type : 'success', msg: 'success'}, duration = 2000){
	
	const toast = new Toast({
		el : document.createElement('div'),
		data(){
			return {
				isNotify : true,
				onPage : true,
				type : config.type,
				msg :config.msg
			}
		}
	});
	document.body.appendChild(toast.$el);
	setTimeout(_=>{
		toast.isNotify = false;
	},duration - 200);
	setTimeout(_=>{
		toast.onPage = false;
	},duration);
}

export default showToast;