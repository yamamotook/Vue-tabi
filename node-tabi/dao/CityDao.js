const dbUtil = require('./dbUtil.js');


//通过地区或国家id 查询省份
function queryProvinceByArea(areaId, success){
	const query = 'select provinceId,provinceName from province where areaId = ?';
	const connection = dbUtil.createConnection();
	connection.connect();
	connection.query(query, areaId, function(error, queryResult){
		if(error == null){
			success(queryResult);
		}else{
			throw new Error(error);
		}
	})
	connection.end();
}

//通过省份id查询城市
function queryCityByProvince(provinceId, success){
	const query = 'select cityName,cityId from city where provinceId = ?';
	const connection = dbUtil.createConnection();
	connection.connect();
	connection.query(query, provinceId, function(error, queryResult){
		if(error == null){
			success(queryResult);
		}else{
			throw new Error(error);
		}
	})
	connection.end();
}

function queryCityByCityId(cityId, success){
	const query = 'select cityName,cityId,cityHeadPic,profieWord from city where cityId = ?';
	const connection = dbUtil.createConnection();
	connection.connect();
	connection.query(query, cityId, function(error, queryResult){
		if(error == null){
			success(queryResult);
		}else{
			throw new Error(error);
		}
	})
	connection.end();
}

//获得热门城市列表
function queryHotCitys(success){
	const query = 'select hotcity.*,area.areaName,city.cityName from hotcity,area,city where hotcity.areaId = area.areaId and hotcity.cityId = city.cityId  limit 8';
	const connection = dbUtil.createConnection();
	connection.connect();
	connection.query(query, function(error, queryResult){
		if(error == null){
			success(queryResult);
		}else{
			throw new Error(error);
		}
	})
	connection.end();
}

async function getCityPageByProvince(q, success){
	const queryCount = 'SELECT COUNT(cityId) as "count" FROM city where provinceId = ?';
	const connection = dbUtil.createConnection();
	connection.connect();
	const result = await new Promise((resolve, reject) => {
		connection.query(queryCount, q.provinceId,function(error, queryResult) {
			if (queryResult[0]) {
				resolve(queryResult[0]);
			} else {
				reject();
			}
		});
	});
	let totalPage = Math.ceil(result["count"] / q["pageSize"]);
	if (q.nowPage > totalPage) {
		q.nowPage = totalPage;
	}
	const sql = 'SELECT cityId,cityName,provinceId,cityHeadPic  FROM city where provinceId = ?  ORDER BY provinceId LIMIT ?,?'
	connection.query(
		sql,
		[q.provinceId ,(q.nowPage - 1) * q.pageSize, q.pageSize],
		function(error,queryResult) {
			if(!error){
				success({
					status : 200,
					list : queryResult,
					totalPage,
					nowPage : q.nowPage
				});
			}
			
		}
	);
	connection.end();
}


function getAreaByProvinceId(provinceId, success){
	const query = 'SELECT area.areaId,area.areaName, area.areaName_en,province.provinceId,province.provinceName from area,province WHERE area.areaId = province.areaId and province.provinceId = ?'
	const connection = dbUtil.createConnection();
	connection.connect();
	connection.query(query,provinceId, function(error, result){
		if(error == null){
			success(result[0]);
		}
	});
	connection.end();
}


module.exports = {
	queryProvinceByArea,
	queryCityByProvince,
	queryHotCitys,
	getCityPageByProvince,
	getAreaByProvinceId,
	queryCityByCityId
}