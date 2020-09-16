const url = require('url');
const commentDao = require('../dao/CommentDao.js');
const getMap = new Map();
const postMap = new Map();

function sendError(resp, msg, status){
    let result = {
        status,
        msg
    };
    resp.writeHead(200,{
        'Content-type' : 'application/json;charset=utf-8'
    });
    resp.write(JSON.stringify(result));
    resp.end();
}

function getCommentPageByPaysageId(req, resp){
    const q = url.parse(req.url, true).query;
    if(!q.paysageId){
        sendError(resp, '必要的paysageId缺失', 404);
    }else{
        q.nowPage = +q.nowPage || 1;
        q.pageSize = +q.pageSize || 5;

        commentDao.getCommentPageByPaysageId(q, function(data){
            resp.writeHead(200,{
                'Content-type' : 'application/json;charset=utf-8'
            });
            resp.write(JSON.stringify(data));
            resp.end();
        });
    }

}

getMap.set('/api/getCommentPageByPaysageId', getCommentPageByPaysageId);

function getUserComment(req,resp){
    const q = url.parse(req.url, true).query
    let userId = q.userId || req.session.user.userId;
    q.nowPage = +q.nowPage || 1;
    q.pageSize = +q.pageSize || 5;
    commentDao.getCommentByUserId(userId, q, function(data){
        resp.writeHead(200,{
            'Content-type' : 'application/json;charset=utf-8'
        });
        resp.write(JSON.stringify(data));
        resp.end();
    });
    

}

function deleteCommentByCommentId(req, resp){
    const q = url.parse(req.url, true).query
	if(!req.session.user){
        sendError(resp, '用户还没有登录', 400);
	}else{
        if(!q.commentId){
            sendError(resp, '必要的commentId 缺失', 400);
        }else{
            commentDao.deleteCommentByCommentId(req.session.user.userId, q.commentId, data=>{
                if(data.affectedRows >= 1){
                    resp.writeHead(200,{
                        'Content-type' : 'application/json;charset=utf-8'
                    });
                    resp.write(JSON.stringify({
                        status : 200
                    }));
                    resp.end();
                }
            });
        }
    }
}

getMap.set('/api/deleteCommentByCommentId', deleteCommentByCommentId);

getMap.set('/api/getUserComment',getUserComment);

function submitComment(req, resp){
    const q = url.parse(req.url, true).query
	if(!req.session.user){
        console.log(req.session.user, 'caonima');
        sendError(resp, '用户还没有登录', 400);
        return;
    }
    if(!q.paysageId){
        sendError(resp, 'paysageId为必须值', 400);
    }
        
    commentDao.submitComment(req.session.user.userId, q, data => {
        if(data.affectedRows >= 1){
            resp.writeHead(200,{
                'Content-type' : 'application/json;charset=utf-8'
            });
            resp.write(JSON.stringify({
                status : 200
            }));
            resp.end();
        }else{
            sendError(resp, '提交失败', 400);
        }
        
    });
    
}

getMap.set('/api/submitComment', submitComment);

module.exports = {
    getMap,
    postMap
}