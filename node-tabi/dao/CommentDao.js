const dbUtil = require('./dbUtil.js');

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

async function getCommentPageByPaysageId(q, success){
    const countSql = 'SELECT COUNT(paysageId) as "count" FROM comment where paysageId = ?';
    const {count} = await queryCount(countSql,[q.paysageId]);
    const connection = dbUtil.createConnection();
	connection.connect();
    let totalPage = Math.ceil(count / q["pageSize"]);
	if (q.nowPage > totalPage && totalPage != 0 ) {
		q.nowPage = totalPage;
    }
    const sql = 'SELECT comment.*,user.userNickName,`user`.userHeadPic,`user`.userId FROM `comment`,`user` WHERE paysageId = ?  AND `user`.userId = `comment`.userId  ORDER BY commentTime DESC LIMIT ? ,?'
    connection.query(
        sql,
		[q.paysageId ,(q.nowPage - 1) * q.pageSize, q.pageSize],
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

async function getCommentByUserId(userId, q, success){
    const countSql = 'SELECT COUNT(commentId) as "count" FROM comment where userId = ?';
    const {count} = await queryCount(countSql,[userId]);
    const connection = dbUtil.createConnection();
	connection.connect();
    let totalPage = Math.ceil(count / q["pageSize"]);
	if (q.nowPage > totalPage && totalPage != 0 ) {
		q.nowPage = totalPage;
    }
    const sql = 'SELECT comment.*,paysage.paysageName FROM `comment`,paysage WHERE userId = ?  AND `comment`.paysageId = paysage.paysageId ORDER BY commentTime DESC LIMIT ? ,?'
    connection.query(
        sql,
		[userId ,(q.nowPage - 1) * q.pageSize, q.pageSize],
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

function deleteCommentByCommentId(userId, commentId, success){
    const sql = 'DELETE FROM `comment` WHERE commentId = ? AND userId = ?'
    const connection = dbUtil.createConnection();
    connection.connect();
    connection.query(sql,[commentId, userId], (error, queryResult) => {
        if(error == null){
            console.log(queryResult);
            success(queryResult);
        }else{
            throw new Error(error);
        }
        connection.end();
    });
}


function submitComment(userId, q, success){
    const sql = 'insert into comment ( userId,paysageId, comment, commentTime) values (?,?,?,?)';
    const connection = dbUtil.createConnection();
    connection.connect();
    connection.query(sql,[userId, q.paysageId, q.comment, new Date()], (error, queryResult) => {
        if(error == null){
            console.log(queryResult);
            success(queryResult);
        }else{
            throw new Error(error);
        }
        connection.end();
    });
}

module.exports = {
    getCommentPageByPaysageId,
    getCommentByUserId,
    deleteCommentByCommentId,
    submitComment
}
