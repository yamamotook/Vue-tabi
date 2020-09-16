const fs = require('fs');
const url = require('url');
const searchDao = require('../dao/searchDao.js');

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

function searchByWord(req, resp){
    const q = url.parse(req.url, true).query;
    if(!q.word){
        sendError(resp, 'searchWord为空', 400);
    }else{
        searchDao.searchByWord(q.word, data => {
            resp.writeHead(200,{
                'Content-type' : 'application/json;charset=utf-8'
            });
            resp.write(JSON.stringify({
                status : 200,
                data : data
            }));
            resp.end();
        })
    }
}

getMap.set('/api/searchByWord', searchByWord);


module.exports = {
	getMap,
	postMap
}