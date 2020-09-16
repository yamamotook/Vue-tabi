import urls from './urls.js';

const queryConcat = function(url, query){
	let temp = [];
	for(const prop in query){
		temp.push(`${prop}=${query[prop]}`);
	}
	return url + '?' + temp.join('&');
}


export default{
	getAreaByOverSea(query){
		const u = urls.baseUrl + urls.getAreaByOverSea;
		const url = queryConcat(u, query);
		return fetch(url);
	},
	getProvinceByArea(query){
		const u = urls.baseUrl + urls.getProvinceByArea;
		const url = queryConcat(u, query);
		console.log(url);
		return fetch(url);
	},
	getCityByProvince(query){
		const u = urls.baseUrl + urls.getCityByProvince;
		const url = queryConcat(u, query);
		console.log(url);
		return fetch(url);
	},
	getHotCitys(){
		const url = urls.baseUrl + urls.getHotCitys;
		console.log(url);
		return fetch(url);
	},
	getPicByPath(query){
		const u = urls.baseUrl + urls.getPicByPath;
		const url = queryConcat(u, query);
		console.log(url);
		return fetch(url);
	},
	getHotAreas(){
		const url = urls.baseUrl + urls.getHotAreas;
		console.log(url);
		return fetch(url);
	},
	registeUser(data){
		const url = urls.baseUrl + urls.registUser;
		console.log(url);
		return fetch(url,{
			method : 'post',
			body : JSON.stringify({...data})
		})
	},
	signIn(data){
		const url = urls.baseUrl + urls.signIn;
		console.log(url);
		return fetch(url, {
			method : 'post',
			body : JSON.stringify({...data}),
			mode : 'cors',
			credentials : 'include'
		});
	},
	getUserInfo(){
		const url = urls.baseUrl + urls.getUserInfo;
		return fetch(url,{
			credentials : 'include'
		});
	},
	signOut(){
		const url = urls.baseUrl + urls.signOut;
		return fetch(url, {
			credentials : 'include'
		})
	},
	getAllAreaByPage(query){
		const u = urls.baseUrl + urls.getAllAreaByPage;
		const url = queryConcat(u, query);
		return fetch(url);
	},
	getAreaByAreaId(query){
		const u = urls.baseUrl + urls.getAreaByAreaId;	
		const url = queryConcat(u, query);
		return fetch(url);
	},
	getProvincePageByArea(query){
		const u = urls.baseUrl + urls.getProvinceByAreaIdPage;
		const url = queryConcat(u, query);
		return fetch(url);
	},
	getCityPageByProvince(query){
		const u = urls.baseUrl + urls.getCityPageByProvince;
		const url = queryConcat(u, query);
		return fetch(url);
	},
	getAreaByProvinceId(query){
		const u = urls.baseUrl + urls.getAreaByProvinceId;
		const url = queryConcat(u, query);
		return fetch(url);
	},
	getPaysageListPageByCityId(query){
		const u = urls.baseUrl + urls.getPaysageListPageByCityId;
		const url = queryConcat(u, query);
		return fetch(url);
	},
	getCityByCityId(query){
		const u = urls.baseUrl + urls.getCityByCityId;
		const url = queryConcat(u, query);
		return fetch(url);
	},
	getPaySageProfieByPaysageId(query){
		const u = urls.baseUrl + urls.getPaySageProfieByPaysageId;
		const url = queryConcat(u, query);
		return fetch(url);
	},
	getPaysageImgPageByPaysageId(query){
		const u = urls.baseUrl + urls.getPaysageImgPageByPaysageId;
		const url = queryConcat(u, query);
		return fetch(url);
	},
	getCommentPageByPaysageId(query){
		const u = urls.baseUrl + urls.getCommentPageByPaysageId;
		const url = queryConcat(u, query);
		return fetch(url);
	},
	getUserComment(query){
		const u = urls.baseUrl + urls.getUserComment;
		const url = queryConcat(u, query);
		return fetch(url,{
			credentials : 'include'
		});
	},
	updateUseread(formData){
		const url = urls.baseUrl + urls.updateUseread;
		return fetch(url, {
			method : 'post',
			body : formData,
			mode : 'cors',
			credentials : 'include'
		});
	},
	deleteCommentByCommentId(query){
		const u = urls.baseUrl + urls.deleteCommentByCommentId;
		const url = queryConcat(u, query);
		return fetch(url,{
			credentials : 'include'
		});
	},
	updateUserInfoById(query){
		const u = urls.baseUrl + urls.updateUserInfoById;
		const url = queryConcat(u, query);
		return fetch(url,{
			credentials : 'include'
		});
	},
	getUserInfoById(query){
		const u = urls.baseUrl + urls.getUserInfoById;
		const url = queryConcat(u, query);
		return fetch(url);
	},
	updatePassword(data){
		const u = urls.baseUrl + urls.updatePassword;
		return fetch(u, {
			method : 'post',
			body : JSON.stringify({...data}),
			mode : 'cors',
			credentials : 'include'
		});
	},
	submitComment(query){
		const u = urls.baseUrl + urls.submitComment;
		const url = queryConcat(u, query);
		return fetch(url,{
			credentials : 'include'
		});
	},
	searchByWord(query){
		const u = urls.baseUrl + urls.searchByWord;
		const url = queryConcat(u, query);
		return fetch(url);
	}
	
}