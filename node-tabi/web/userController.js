const url = require('url');
const globalConfig = require('../config.js');
const dateValidator = require('../validate/dataValidator.js');
const userDao = require('../dao/userDao.js');
const getMap = new Map();
const postMap = new Map();

function userRegist(req, resp){
	let result = null;
	req.on('data', async function(data){
		const body = JSON.parse(data.toString());
		//email check
		result = await dateValidator.emailCheck(body.email);
		if(typeof result === 'object'){
			resp.write(JSON.stringify(result));
			resp.end();
			return;
		}
		
		result = dateValidator.usernameCheck(body.userName);
		if(typeof result === 'object'){
			resp.write(JSON.stringify(result));
			resp.end();
			return;
		}
		
		result = dateValidator.passwordCheck(body.password);
		if(typeof result === 'object'){
			resp.write(JSON.stringify(result));
			resp.end();
			return;
		}
		
		result = await  dateValidator.phoneCheck(body.phone);
		if(typeof result === 'object'){
			resp.write(JSON.stringify(result));
			resp.end();
			return;
		}
		
		userDao.userRegist(body.email, body.userName, body.password, body.phone, function(result){
			resp.write(JSON.stringify({
				status : 200,
				msg : '注册成功'
			}));
			resp.end();
			return ;
		},function(){
			resp.write(JSON.stringify({
				status : 401,
				msg : '注册失败,因为服务器内部发生了错误 :('
			}));
			resp.end();
		});
		
		
		
	})
	
}


postMap.set('/api/userRegist', userRegist);


function userSignIn(req, resp){
	let result = null;
	req.on('data', async function(data){
		const body = JSON.parse(data.toString());
		//check email
		result = await dateValidator.emailCheck(body.email, true);
		if(typeof result === 'object'){
			resp.write(JSON.stringify(result));
			resp.end();
			return;
		}
		
		//check password
		result = dateValidator.passwordCheck(body.password);
		if(typeof result === 'object'){
			console.log(result,'from pass');
			resp.write(JSON.stringify(result));
			resp.end();
			return;
		}
		
		//check password right
		userDao.queryUserByEmail(body.email, function(data){
			if(data.length && data[0].password === body.password){
				const sessionId = data[0].userId + Date.now();
				// req.session[sessionId] = data[0];
				req.session.user = data[0];
				 // resp.cookie('sessionId',sessionId,{maxAge:1000 * 60 * 30,signed:true});
				result = {
					status : 200
					// sessionId : sessionId
				}
				
			}else{
				result = {
					status : 400,
					errorQuery : 'password',
					errorMsg : '账号或密码错误'
				}
			}
			resp.write(JSON.stringify(result));
			resp.end();
		},function(){
			result = {
				status : 500,
				errorMsg : '服务器发生了错误 :('
			}
			resp.write(JSON.stringify(result));
			resp.end();
		});
	})
}
postMap.set('/api/userSignIn', userSignIn);

function checkStatus(req, resp){
	if(req.session.user){
		return true;
	}else{
		return false;
	}
}


function getUserInfo(req, resp){
	if(checkStatus(req, resp)){
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
	}else{
		resp.write(JSON.stringify({
			status : 400
		}));
		resp.end();
	}
	
}

getMap.set('/api/user/getUserInfo', getUserInfo);

function updateUserInfoById(req, resp){
	// updateUserInfo
	const q = url.parse(req.url, true).query;
	if(!req.session.user){
		sendError(resp, '用户还未登录', 400 );
	}
	if(!q.userId){
		sendError(resp, '必要的userId缺失', 400 );
	}
	if(!q.userName){
		sendError(resp, '必要的昵称不能为空', 400 );
	}else{
		q.birthday = q.birthday || null;
		userDao.updateUserInfo(q, data=>{
			if(data.affectedRows >= 1){
				userDao.queryUserByEmail(q.email, data => {
					req.session.user = data[0];
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
				}, error => {
					sendError(resp, '服务器发送了错误', 500 );
				})
			}else{
				sendError(resp, '修改失败', 400 );
			}
		}, error => {
			sendError(resp, '服务器发送了错误', 500 );
		})
	}
}

getMap.set('/api/updateUserInfoById', updateUserInfoById);

function signOut(req,resp){
	req.session.user = null;
	resp.write(JSON.stringify({
		status : 200,
		userInfo : req.session.user
	}));
	resp.end();
	
}

getMap.set('/api/user/signOut',signOut);


function getUserInfoById(req, resp){
	
	const q = url.parse(req.url, true).query;
	if(!q.userId){
		sendError(resp, '必要的userId缺失', 400);
	}else{
		userDao.getUserInfoById(q, data=>{
			resp.writeHead(200,{
				'Content-type' : 'application/json;charset=utf-8'
			});
			resp.write(JSON.stringify({
				status : 200,
				userInfo : {
					userId : data[0]['userId'],
					userName : data[0]['userNickName'],
					email : data[0]['email'],
					phone : data[0]['phone'],
					headImg : data[0]['userHeadPic'],
					sex : data[0]['sex'],
					liveCity : data[0]['liveCity'],
					aboutMe : data[0]['aboutMe'],
					birthday : data[0]['birthday']
				}
			}));
			resp.end();
		});
	}
}

getMap.set('/api/getUserInfoById', getUserInfoById);



function updatePassword(req, resp){
	req.on('data', function(data){
		const body = JSON.parse(data.toString());
		if(!req.session.user){
			sendError(resp, '用户未登录' ,400);
		}
		let result = dateValidator.passwordCheck(body.newPwd);
		if(typeof result === 'object'){
			sendError(resp,result.errorMsg, 400);
		}
		if(req.session.user.password == body.oldPwd){
			userDao.updatePassword(body.newPwd, req.session.user.userId, data => {
				if(data.affectedRows >= 1){
					req.session.user.password = body.newPwd;
					resp.writeHead(200,{
						'Content-type' : 'application/json;charset=utf-8'
					});
					resp.write(JSON.stringify({
						status : 200,
						msg : '更新密码成功!'
					}));
					resp.end();
				}
			});
		}
	})
}

postMap.set('/api/updatePassword', updatePassword);


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