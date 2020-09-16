const dbUtil = require("./dbUtil.js");

async function queryProvinceByAreaId(query, success){
    const queryCount = 'SELECT COUNT(provinceId) as "count" FROM province where areaId = ?';
    
    const connection = dbUtil.createConnection();
    connection.connect();
	const result = await new Promise((resolve, reject) => {
		connection.query(queryCount, query.areaId,function(error, queryResult) {
			if (queryResult[0]) {
				resolve(queryResult[0]);
			} else {
				reject();
			}
		});
    });
    let totalPage = Math.ceil(result["count"] / query["pageSize"]);
	if (query.nowPage > totalPage) {
		query.nowPage = totalPage;
    }
     console.log(query);
    const sql = "SELECT provinceId,provinceName,areaId,picSrc  FROM province  WHERE areaId = ? ORDER BY provinceId LIMIT ?,?";
    connection.query(
		sql,
		[query.areaId ,(query.nowPage - 1) * query.pageSize, query.pageSize],
		function(error,queryResult) {
            console.log('res', queryResult);
			success({
				status : 200,
				list : queryResult,
				totalPage,
				nowPage : query.nowPage
			});
		}
	);
	connection.end();
    
}
module.exports = {
    queryProvinceByAreaId
}