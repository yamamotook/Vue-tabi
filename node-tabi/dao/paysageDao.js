const dbUtil = require('./dbUtil.js');


async function getPaysageListPageByCityId(q, success){
    const countSql = 'SELECT COUNT(paysageId) as "count" FROM paysage where cityId = ?';
    const {count} = await queryCount(countSql,[q.cityId]);
    const connection = dbUtil.createConnection();
	connection.connect();
    let totalPage = Math.ceil(count / q["pageSize"]);
	if (q.nowPage > totalPage && totalPage != 0 ) {
		q.nowPage = totalPage;
    }
    const sql = 'SELECT  paysageId,paysageName,paysageProfie,paysageCover,address FROM paysage  WHERE cityId = ?  ORDER BY paysageId LIMIT ?,?'
    connection.query(
        sql,
		[q.cityId ,(q.nowPage - 1) * q.pageSize, q.pageSize],
		function(error,queryResult) {
			if(!error){
				success({
					status : 200,
					list : queryResult,
					totalPage,
                    nowPage : q.nowPage,
                    count : count
				});
			}else{
                throw new Error(error);
            }	
		}
    );
	connection.end();
    
}


async function queryCount(sql, query){
    const connection = dbUtil.createConnection();
	connection.connect();
	let res = await new Promise((resolve, reject) => {
        connection.query(sql, query, function(error, queryResult){
            if(error == null){
                resolve(queryResult[0]);
            }else{
                throw new Error(error);
            }
        } ) ;
	})
    connection.end();
    return res;
}

function getPaySageProfieByPaysageId(paysageId, success){
    const sql = 'SELECT paysage.*,area.areaName,city.cityName from paysage,area,city WHERE paysage.paysageId = ? AND area.areaId = paysage.areaId AND city.cityId = paysage.cityId';
    const connection = dbUtil.createConnection();
    connection.connect();
    connection.query(sql, paysageId, function(error, resultSet){
        if(error == null){
            success(resultSet[0]);
        }else{
            throw new Error(error);
        }
    });
    connection.end();

}

async function getPaysageImgByPaysageId(q, success){
    const queryCount = 'SELECT COUNT(picId) as "count" FROM img where paysageId = ?';
	const connection = dbUtil.createConnection();
    connection.connect();
    const result = await new Promise((resolve, reject) => {
		connection.query(queryCount, q.paysageId,function(error, queryResult) {
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
    const sql = 'SELECT picId,srcPath,picProfie  FROM img where paysageId = ?  ORDER BY picId LIMIT ?,?'
	connection.query(
		sql,
		[q.paysageId ,(q.nowPage - 1) * q.pageSize, q.pageSize],
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


module.exports = {
    getPaysageListPageByCityId,
    getPaySageProfieByPaysageId,
    getPaysageImgByPaysageId
}