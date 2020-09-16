const express = require('express');
const session = require('express-session');
const cookie = require('cookie-parser');
const globalConfig = require('./config.js');
const loader = require('./loader.js');
const multer = require('multer');

const userDao = require('./dao/userDao.js');

const uploadUserHead = multer({
	dest : './files/userHead'
});

const app = new express();

app.use(cookie('guesWhat'));

app.use(session({
	name : 'userStatus',
	secret : 'guessWhat',
	duration : 30 * 60 * 1000, //30min
	activeDuration : 5 * 60 * 1000,
	saveUnitialized : false,
	cookie : {
		expires : 1000 * 60 * 30,
	}
}));

app.use(function(req, res, next){
	req.session._garbage = Date();
	req.session.touch();
next();
});


app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
	if( req.headers.origin == 'http://localhost:8080' || req.headers.origin == 'http://127.0.0.1:8080'){
	 	res.header("Access-Control-Allow-Origin",req.headers.origin);
		//允许的header类型
		res.header("Access-Control-Allow-Headers","content-type");
		//跨域允许的请求方式 
		res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
		res.header("Access-Control-Allow-Credentials", true);
	}
	next();
    
});

loader.init(app);

app.post('/api/updateUseread', uploadUserHead.single('userHead'), function(req, resp){
	let fileName = req.file.path;
	console.log(fileName);
	if(!req.session.user){
		resp.writeHead(200,{
			'Content-type' : 'application/json;charset=utf-8'
		});
		resp.write(JSON.stringify({
			status : 400,
			msg : '用户未登录'
		}));
		resp.end();
	}else{
		const insertFilePath = fileName.slice(5);
		userDao.changeUserHeadPic(req.session.user.userId, insertFilePath, function(data){
			if(data.affectedRows >= 1){
				req.session.user.userHeadPic = insertFilePath
				resp.writeHead(200,{
					'Content-type' : 'application/json;charset=utf-8'
				});
				resp.write(JSON.stringify({
					status : 200,
					userInfo : {
						userId : req.session.user['userId'],
						userName : req.session.user['userNickName'],
						email : req.session.user['email'],
						phone : req.session.user['phone'],
						headImg : req.session.user['userHeadPic'],
						sex : req.session.user['sex'],
						liveCity : req.session.user['liveCity'],
						aboutMe : req.session.user['aboutMe'],
						birthday : req.session.user['birthday']
					}
				}));
				resp.end();
			}
		});
	}

});



app.listen(globalConfig['port'], function(){
	console.log('服务已启动');
})