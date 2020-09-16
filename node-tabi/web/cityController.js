const url = require('url');
const cityDao = require('../dao/CityDao.js');

const getMap = new Map();
const postMap = new Map();



function getProvinceByArea(req, resp){
	const query = url.parse(req.url, true).query;
	let result = {};
	if(query.areaId == undefined){
		//缺少areaId
		resp.writeHead(200,{
			'Content-type' : 'application/json;charset=utf-8'
		});
		result.status = 404;
		result.msg = '必要的areaId缺失'
		resp.write(JSON.stringify(result));
		resp.end();
	}else{
		cityDao.queryProvinceByArea(query.areaId, function(data){
			resp.writeHead(200,{
				'Content-type' : 'application/json;charset=utf-8'
			});
			result.status = 200;
			result.data = data;
			resp.write(JSON.stringify(result));
			resp.end();
		})
		
	}
}

getMap.set('/api/getProvinceByArea', getProvinceByArea);


function queryCityByCityId(req, resp){
	const query = url.parse(req.url, true).query;
	let result = {};
	if(!query.cityId){
		resp.writeHead(200,{
			'Content-type' : 'application/json;charset=utf-8'
		});
		result.status = 404;
		result.msg = '必要的CityId缺失'
		resp.write(JSON.stringify(result));
		resp.end();
	}else{
		cityDao.queryCityByCityId(query.cityId, function(data){
			resp.writeHead(200,{
				'Content-type' : 'application/json;charset=utf-8'
			});
			result.status = 200;
			result.data = data;
			resp.write(JSON.stringify(result));
			resp.end();
		})
	}
}

getMap.set('/api/queryCityByCityId', queryCityByCityId);


function getCityByProvince(req, resp){
	const query = url.parse(req.url, true).query;
	let result = {};
	if(query.provinceId == undefined){
		resp.writeHead(200,{
			'Content-type' : 'application/json;charset=utf-8'
		});
		result.status = 404;
		result.msg = '必要的provinceId缺失'
		resp.write(JSON.stringify(result));
		resp.end();
	}else{
		cityDao.queryCityByProvince(query.provinceId, function(data){
			resp.writeHead(200,{
				'Content-type' : 'application/json;charset=utf-8'
			});
			result.status = 200;
			result.data = data;
			resp.write(JSON.stringify(result));
			resp.end();
		})
	}
}
getMap.set('/api/getCityByProvince', getCityByProvince)


//获得热门城市list
function getHotCitys(req, resp){
	let result = {};
	cityDao.queryHotCitys(function(data){
		resp.writeHead(200,{
			'Content-type' : 'application/json;charset=utf-8'
		});
		result.status = 200;
		result.data = data;
		resp.write(JSON.stringify(result));
		resp.end();
	})
}

getMap.set('/api/getHotCitys', getHotCitys)


function getCityPageByProvince(req, resp){
	const query = url.parse(req.url, true).query;
	let result = {};
	query.nowPage = query.nowPage || 1;
	query.pageSize = query.pageSize || 9;
	query.nowPage = parseInt(query.nowPage);
	query.pageSize = parseInt(query.pageSize);
	if(!query.provinceId){
		resp.writeHead(200,{
			'Content-type' : 'application/json;charset=utf-8'
		});
		result.status = 400;
		result.msg = '必要的provinceId缺失';
		resp.write(JSON.stringify(result));
		resp.end();
	}else{
		query.provinceId = parseInt(query.provinceId);
		cityDao.getCityPageByProvince(query, function(data){
			resp.writeHead(200,{
				'Content-type' : 'application/json;charset=utf-8'
			});
			resp.write(JSON.stringify(data));
			resp.end();
		})
	}
}

getMap.set('/api/getCityPageByProvince', getCityPageByProvince);


function getAreaByProvinceId(req, resp){
	const query = url.parse(req.url, true).query;
	let result = {};
	resp.writeHead(200,{
		'Content-type' : 'application/json;charset=utf-8'
	});
	if(!query.provinceId){
		result.status = 400;
		result.msg = '必要的provinceId缺失';
		resp.write(JSON.stringify(result));
		resp.end();
	}else{
		cityDao.getAreaByProvinceId(query.provinceId, function(data){
			result.status = 200;
			result.data = data;
			resp.write(JSON.stringify(result));
			resp.end();
		})
	}
}

getMap.set('/api/getAreaByProvinceId', getAreaByProvinceId);



module.exports = {
	getMap,
	postMap
}

