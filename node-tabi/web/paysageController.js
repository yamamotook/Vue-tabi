const url = require('url');
const paysageDao = require('../dao/paysageDao.js');


const getMap = new Map();
const postMap = new Map();


function getPaysageListPageByCityId(req, resp){
    const q = url.parse(req.url, true).query;
    if(!q.cityId){
        sendError(resp, '必要的cityId缺失','404');
    }else{
        q.nowPage = q.nowPage || 1;
        q.pageSize = q.pageSize || 9;
        q.nowPage = Number(q.nowPage);
        q.pageSize = Number(q.pageSize);
        q.cityId = +q.cityId;
        paysageDao.getPaysageListPageByCityId(q, function(data){
            resp.writeHead(200,{
                'Content-type' : 'application/json;charset=utf-8'
            });
            resp.write(JSON.stringify(data));
            resp.end();
        });
    }

}

getMap.set('/api/getPaysageListPageByCityId',getPaysageListPageByCityId);


function getPaySageProfieByPaysageId(req, resp){
    let result = {};
    const q = url.parse(req.url, true).query;
    if(!q.paysageId){
        sendError(resp, '必要的paysageId缺失', '404')
    }else{
        paysageDao.getPaySageProfieByPaysageId(q.paysageId, function(data){
            result.data = data;
            result.status = 200;
            resp.writeHead(200,{
                'Content-type' : 'application/json;charset=utf-8'
            });
            resp.write(JSON.stringify(result));
            resp.end();
        });
    }
}

getMap.set('/api/getPaySageProfieByPaysageId', getPaySageProfieByPaysageId);


function getPaysageImgPageByPaysageId(req, resp){
    const q = url.parse(req.url, true).query;
    if(!q.paysageId){
        sendError(resp, '必要的paysageId缺失', '404')
    }else{
        q.nowPage = +q.nowPage || 1;
        q.pageSize = +q.pageSize || 9;
        
        paysageDao.getPaysageImgByPaysageId(q, function(data){
            resp.writeHead(200,{
                'Content-type' : 'application/json;charset=utf-8'
            });
            resp.write(JSON.stringify(data));
            resp.end();
        })
    }
}

getMap.set('/api/getPaysageImgPageByPaysageId',getPaysageImgPageByPaysageId);

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


module.exports = {
	getMap,
	postMap
}
