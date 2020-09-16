const fs = require('fs');
const url = require('url');
const globalConfig = require('../config.js');
const getMap = new Map();
const postMap = new Map();

//获取图片通过路径
function getPicByPath(req, resp){
	const query = url.parse(req.url, true).query;
	let result = {};
	if(query.path == undefined){
		resp.writeHead(200,{
			'Content-type' : 'application/json;charset=utf-8'
		});
		result.status = 404;
		result.msg = '必要的path缺失'
		resp.write(JSON.stringify(result));
		resp.end();
	}else{
		try{
			const path = './' + globalConfig.pic_path + query.path;
			//读取文件
			const data = fs.readFileSync(path);
			resp.writeHead(200)
			resp.write(data);
			resp.end();
		} catch(e){
			resp.writeHead(200,{
				'Content-type' : 'application/json;charset=utf-8'
			});
			result.status = 404;
			result.msg = '无效的Path'
			resp.write(JSON.stringify(result));
			resp.end();
		}
	}
	
}

getMap.set('/api/getPicByPath', getPicByPath);


module.exports = {
	getMap,
	postMap
}