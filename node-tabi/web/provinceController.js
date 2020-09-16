const url = require('url');
const provinceDao = require('../dao/provinceDao.js');

const getMap = new Map();
const postMap = new Map();



function getProvinceByAreaIdPage(res, resp){
    const query = url.parse(res.url, true).query;
    let result = {};
    if(!query.areaId){
        resp.writeHead(200,{
			'Content-type' : 'application/json;charset=utf-8'
		});
		result.status = 404;
		result.msg = '必要的areaId缺失'
		resp.end();
    }else{
        query.pageSize = query.pageSize || 9;
        query.nowPage = query.nowPage || 1;
        query.nowPage = parseInt(query.nowPage);
	    query.pageSize = parseInt(query.pageSize);
        provinceDao.queryProvinceByAreaId(query, function(data){
            resp.writeHead(200,{
                'Content-type' : 'application/json;charset=utf-8'
            });
            result.status = 200;
            result.list = data;
            resp.write(JSON.stringify(result));
			resp.end();
        })
    }
}


getMap.set('/api/getProvinceByAreaIdPage', getProvinceByAreaIdPage);

module.exports ={
    getMap,
    postMap
}