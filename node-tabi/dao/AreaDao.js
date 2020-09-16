const dbUtil = require("./dbUtil.js");

//通过overSeaId 查询地区
function queryAreaByOverSeaId(overSeaId = -1, success) {
	const query = "select areaId,areaName from area where overSea = ?";
	const connection = dbUtil.createConnection();
	connection.connect();
	connection.query(query, overSeaId, function(error, queryResult) {
		if (error == null) {
			success(queryResult);
		} else {
			throw new Error(error);
		}
	});
	connection.end();
}

function queryHotArea(success) {
	const query =
		"select * from hotarea,area WHERE hotarea.areaId = area.areaId limit 6;";
	const connection = dbUtil.createConnection();
	connection.connect();
	connection.query(query, function(error, queryResult) {
		if (error == null) {
			success(queryResult);
		} else {
			throw new Error(error);
		}
	});
	connection.end();
}

async function queryAllAreaByPage(q, success) {
	//获取总条数
	let queryCount = "";
	if (q.type == "all") {
		queryCount = 'SELECT COUNT(areaId) as "count" FROM area';
	} else {
		queryCount = `SELECT COUNT(areaId) as "count" FROM area where zhou = '${q.type}'`;
	}
	const connection = dbUtil.createConnection();
	connection.connect();
	const result = await new Promise((resolve, reject) => {
		connection.query(queryCount, function(error, queryResult) {
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
	let queryArea = "";
	if (q.type == "all") {
		queryArea =  "SELECT areaId,areaName,areaName_en,zhou,picSrc,about  FROM area  ORDER BY areaId LIMIT ?,?";
	} else {
		queryArea = `SELECT areaId,areaName,areaName_en,zhou,picSrc,about  FROM area WHERE zhou = '${q.type}'  ORDER BY areaId LIMIT ?,?`;
	}
	connection.query(
		queryArea,
		[(q.nowPage - 1) * q.pageSize, q.pageSize],
		function(error,queryResult) {
			success({
				status : 200,
				list : queryResult,
				totalPage,
				nowPage : q.nowPage
			});
		}
	);
	connection.end();
}


function getAreaByAreaId(areaId, success){
	const query ="SELECT areaId,areaName,areaName_en,zhou,picSrc,about  FROM area  where areaId = ? ";
	const connection = dbUtil.createConnection();
	connection.connect();
	connection.query(query, areaId,function(error, queryResult) {
		if (error == null) {
			success(queryResult[0]);
		} else {
			throw new Error(error);
		}
	});
	connection.end();
}

module.exports = {
	queryAreaByOverSeaId,
	queryHotArea,
	queryAllAreaByPage,
	getAreaByAreaId
};
