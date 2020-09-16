const url = require('url');
const areaDao = require('../dao/AreaDao.js');

const getMap = new Map();
const postMap = new Map();


function getAreaByOverSea(req, resp){
	const query = url.parse(req.url, true).query;
	let result = {};
	if(query.overSeaId == undefined){
		//缺少overSeaId
		resp.writeHead(200,{
			'Content-type' : 'application/json;charset=utf-8'
		});
		result.status = 404;
		result.msg = '必要的overSeaId缺失'
		resp.write(JSON.stringify(result));
		console.log(JSON.stringify(result));
		resp.end();
	}else{
		//查询数据库
		try{
			areaDao.queryAreaByOverSeaId(query.overSeaId, function(data){
				resp.writeHead(200,{
					'Content-type' : 'application/json;charset=utf-8'
				});
				result.status = 200;
				result.data = data;
				resp.write(JSON.stringify(result));
				resp.end();
			})
		}catch(e){
			//TODO handle the exception
			resp.writeHead(500,{
				'Content-type' : 'application/json;charset=utf-8'
			});
			result.status = 500;
			result.msg = '我被玩坏了 :(  ';
			resp.write(JSON.stringify(result));
			resp.end();
		}
	}
	
}

getMap.set('/api/getAreaByOverSea', getAreaByOverSea);


function getHotAreas(req, resp){
	let result = {};
	try{
		areaDao.queryHotArea(function(data){
			resp.writeHead(200,{
				'Content-type' : 'application/json;charset=utf-8'
			});
			result.status = 200;
			result.data = data;
			resp.write(JSON.stringify(result));
			resp.end();
		})
	}catch(e){
		//TODO handle the exception
		resp.writeHead(500,{
			'Content-type' : 'application/json;charset=utf-8'
		});
		result.status = 500;
		result.msg = 'server crashed!  :(  ';
		resp.write(JSON.stringify(result));
		resp.end();
	}
}

getMap.set('/api/getHotAreas', getHotAreas);

function getAllAreaByPage(req, resp){
	const query = url.parse(req.url, true).query;
	
	if(!query.pageSize){
		//每一页的记录数
		query.pageSize = 9;
	}
	if(!query.nowPage){
		query.nowPage = 1;
	}
	if(!query.type){
		query.type == 'all';
	}
	query.nowPage = parseInt(query.nowPage);
	query.pageSize = parseInt(query.pageSize);
	try {
		areaDao.queryAllAreaByPage(query, function(data){
			resp.writeHead(200,{
				'Content-type' : 'application/json;charset=utf-8'
			});
			resp.write(JSON.stringify(data));
			resp.end();
		});
	} catch (error) {
		resp.writeHead(500,{
			'Content-type' : 'application/json;charset=utf-8'
		});
		result.status = 500;
		result.msg = 'server crashed!  :(  ';
		resp.end();
	}
}

getMap.set('/api/getAllAreaByPage',getAllAreaByPage);


function getAreaByAreaId(req, resp){
	const query = url.parse(req.url, true).query;
	let result = {};
	if(!query.areaId){
		resp.writeHead(200,{
			'Content-type' : 'application/json;charset=utf-8'
		});
		result.status = 404;
		result.msg = '必要的areaId缺失'
		resp.end();
	}else{
		areaDao.getAreaByAreaId(query.areaId, function(data){
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

getMap.set('/api/getAreaByAreaId', getAreaByAreaId);


module.exports = {
	getMap,
	postMap
}